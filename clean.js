// Yalla Nehke – studio clean-up for home recordings (runs in the browser)
// high-pass -> RNNoise denoise -> trim to speech (removes tap clicks) -> fades -> loudness match -> 22.05 kHz WAV
window.YNClean=(function(){
 const RN_URL=window.YN_RN_URL||'https://cdn.jsdelivr.net/npm/@shiguredo/rnnoise-wasm@2025.1.5/dist/rnnoise.js';
 const TARGET={karim:-19.3,zena:-16.0}; // active-speech RMS (dBFS) of the existing app voices
 let rnP=null;const rn=()=>rnP||(rnP=import(RN_URL).then(m=>m.Rnnoise.load()));
 const db=x=>20*Math.log10(Math.max(x,1e-9));
 async function decode(bytes){const c=new OfflineAudioContext(1,48000,48000);const b=await c.decodeAudioData(bytes.buffer.slice(0));
  // to mono 48 kHz + high-pass 85 Hz + gentle low-pass 9.5 kHz (match TTS bandwidth)
  const n=Math.ceil(b.duration*48000),o=new OfflineAudioContext(1,n,48000),s=o.createBufferSource();s.buffer=b;
  const hp=o.createBiquadFilter();hp.type='highpass';hp.frequency.value=85;hp.Q.value=.7;
  const hp2=o.createBiquadFilter();hp2.type='highpass';hp2.frequency.value=85;hp2.Q.value=.7;
  const lp=o.createBiquadFilter();lp.type='lowpass';lp.frequency.value=9500;
  s.connect(hp);hp.connect(hp2);hp2.connect(lp);lp.connect(o.destination);s.start();return (await o.startRendering()).getChannelData(0).slice()}
 function frames(x,F){const out=[];for(let i=0;i+F<=x.length;i+=F){let e=0;for(let j=i;j<i+F;j++)e+=x[j]*x[j];out.push(Math.sqrt(e/F))}return out}
 async function denoise(x){const R=await rn(),st=R.createDenoiseState(),F=R.frameSize,pad=F*4;
  const n=Math.ceil((x.length+pad)/F)*F,buf=new Float32Array(n),out=new Float32Array(n),vad=[];buf.set(x);
  for(let i=0;i<n;i+=F){const f=buf.slice(i,i+F);for(let j=0;j<F;j++)f[j]*=32768;vad.push(st.processFrame(f));for(let j=0;j<F;j++)out[i+j]=f[j]/32768}
  st.destroy();return {y:out.subarray(0,x.length),vad,F}} // RNNoise output is time-aligned frame by frame
 function encodeWav(x,sr){const n=x.length,b=new ArrayBuffer(44+n*2),v=new DataView(b);const W=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};
  W(0,'RIFF');v.setUint32(4,36+n*2,true);W(8,'WAVE');W(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);W(36,'data');v.setUint32(40,n*2,true);
  for(let i=0;i<n;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,x[i]))*32767,true);return new Uint8Array(b)}
 async function resample(x,from,to){const o=new OfflineAudioContext(1,Math.ceil(x.length*to/from),to),b=o.createBuffer(1,x.length,from);b.copyToChannel(x,0);const s=o.createBufferSource();s.buffer=b;s.connect(o.destination);s.start();return (await o.startRendering()).getChannelData(0).slice()}
 async function clean(bytes,voice){
  const SR=48000,x=await decode(bytes);
  // ignore the first/last 60 ms (tap clicks) when measuring
  const guard=Math.round(.06*SR);x.fill(0,0,Math.min(guard,x.length));x.fill(0,Math.max(0,x.length-guard));
  const inFr=frames(x,480),srt=[...inFr].sort((a,b)=>a-b),noiseIn=srt[Math.floor(srt.length*.15)]||1e-6;
  const {y,vad,F}=await denoise(x);
  const fr=frames(y,F),mx=Math.max(...fr);
  // speech region: frames with voice probability or energy within 30 dB of the loudest frame
  const hot=fr.map(r=>r>mx*.032),on=hot.map((h,i)=>{if(!h)return false;let a=i,b=i;while(a>0&&hot[a-1])a--;while(b<hot.length-1&&hot[b+1])b++;return b-a+1>=5});
  let a=on.indexOf(true),z=on.lastIndexOf(true);if(a<0)throw new Error('no speech found');
  const s0=Math.max(0,a*F-Math.round(.07*SR)),s1=Math.min(y.length,(z+1)*F+Math.round(.16*SR));
  let t=y.slice(s0,s1);
  // residual-noise gate between words (soft, -18 dB) to keep it studio-quiet
  const tf=frames(t,F),tm=Math.max(...tf);let g=1;for(let i=0;i<tf.length;i++){const tgt=tf[i]>tm*.04?1:.12;for(let j=0;j<F;j++){g+=(tgt-g)*(tgt>g?.02:.004);t[i*F+j]*=g}}
  // loudness match on active speech, then peak ceiling -2 dBFS
  const af=frames(t,F).filter(r=>r>tm*.1),rms=Math.sqrt(af.reduce((s,r)=>s+r*r,0)/af.length);
  let gain=Math.pow(10,((TARGET[voice]||-18)-db(rms))/20),pk=0;for(const v of t)pk=Math.max(pk,Math.abs(v));
  gain=Math.min(gain,Math.pow(10,-2/20)/pk);for(let i=0;i<t.length;i++)t[i]*=gain;
  // fades: 12 ms in, 50 ms out (no clicks)
  const fi=Math.round(.012*SR),fo=Math.round(.05*SR);for(let i=0;i<fi&&i<t.length;i++)t[i]*=i/fi;for(let i=0;i<fo&&i<t.length;i++)t[t.length-1-i]*=i/fo;
  const out=await resample(t,SR,22050);
  const nOut=frames(out,220),so=[...nOut].sort((a,b)=>a-b);
  const info={inSec:+(x.length/SR).toFixed(2),outSec:+(out.length/22050).toFixed(2),noiseIn:+db(noiseIn).toFixed(1),noiseOut:+db(so[Math.floor(so.length*.1)]||1e-9).toFixed(1),speechIn:+db(rms).toFixed(1),gainDb:+db(gain).toFixed(1),peakOut:+db(pk*gain).toFixed(1)};
  return {wav:encodeWav(out,22050),info}}
 const b64=u=>{let s='';for(let i=0;i<u.length;i+=0x8000)s+=String.fromCharCode.apply(null,u.subarray(i,i+0x8000));return btoa(s)};
 const unb64=s=>{const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u};
 async function cleanRow(SB,voice,line){const {data,error}=await SB.from('voice_recs').select('audio_b64').eq('voice',voice).eq('line_id',line).single();if(error)throw error;
  const r=await clean(unb64(data.audio_b64),voice);const up=await SB.from('voice_recs').update({clean_b64:b64(r.wav),clean_mime:'audio/wav',clean_info:r.info}).eq('voice',voice).eq('line_id',line);if(up.error)throw up.error;return r.info}
 async function cleanAll(SB,voice,onlyMissing){const q=SB.from('voice_recs').select('line_id,clean_info').eq('voice',voice);const {data,error}=await q;if(error)throw error;const res={};
  for(const r of data){if(onlyMissing&&r.clean_info)continue;try{res[r.line_id]=await cleanRow(SB,voice,r.line_id)}catch(e){res[r.line_id]={error:String(e.message||e)}}}return res}
 return {clean,cleanRow,cleanAll,b64,unb64};
})();
