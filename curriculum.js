// Yalla Nehke – curriculum data
// Gendered forms: [boyForm, girlForm] are resolved for the CHILD being spoken to / about.
// pic: 'img:key' | emoji | 'num:N' | 'col:#hex' | null (abstract word -> shown as its meaning)
window.YN_WORDS = {
  // Level 1 · Unit 1 · Hello!
  marhaba:{ar:'مرحبا',tr:'marḥaba',en:'hello',pic:'img:marhaba'},
  kifak:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'how are you?',pic:null},
  mnih:{ar:['منيح','منيحة'],tr:['mnīḥ','mnīḥa'],en:"good / I'm fine",pic:null},
  hamdella:{ar:'الحمدلله',tr:'ḥamdella',en:'thank God (all good)',pic:null},
  ismi:{ar:'إسمي…',tr:'ismi…',en:'my name is…',pic:null},
  shuismak:{ar:['شو إسمك؟','شو إسمِك؟'],tr:['shu ismak?','shu ismik?'],en:"what's your name?",pic:null},
  tsharrafna:{ar:'تشرّفنا',tr:'tsharrafna',en:'nice to meet you',pic:null},
  bye:{ar:'يلّا باي',tr:'yalla bye',en:'bye!',pic:null},
  sabah:{ar:'صباح الخير',tr:'ṣabāḥ el-khēr',en:'good morning',pic:'🌅'},
  sabahnour:{ar:'صباح النور',tr:'ṣabāḥ el-nūr',en:'good morning (reply)',pic:'☀️'},
  masa:{ar:'مسا الخير',tr:'masa el-khēr',en:'good evening',pic:'🌆'},
  tisbah:{ar:['تصبح على خير','تصبحي على خير'],tr:['tiṣbaḥ ʿala khēr','tiṣbaḥi ʿala khēr'],en:'good night',pic:'🌙'},
  shukran:{ar:'شكراً',tr:'shukran',en:'thank you',pic:null},
  afwan:{ar:'عفواً',tr:'ʿafwan',en:"you're welcome",pic:null},
  lawsamaht:{ar:'لو سمحت',tr:'law samaḥt',en:'please / excuse me',pic:null},
  eh:{ar:'إي',tr:'ē',en:'yes',pic:null},
  la:{ar:'لأ',tr:'laʾ',en:'no',pic:null},
  mabsut:{ar:['مبسوط','مبسوطة'],tr:['mabsūṭ','mabsūṭa'],en:'happy',pic:'😄'},
  zalan:{ar:['زعلان','زعلانة'],tr:['zaʿlān','zaʿlāne'],en:'sad',pic:'😢'},
  taban:{ar:['تعبان','تعبانة'],tr:['taʿbān','taʿbāne'],en:'tired',pic:'😴'},
  juan:{ar:['جوعان','جوعانة'],tr:['jūʿān','jūʿāne'],en:'hungry',pic:'🍽️'},
  // Unit 2 · My family
  mama:{ar:'ماما',tr:'māma',en:'mum',pic:'👩'},
  baba:{ar:'بابا',tr:'bāba',en:'dad',pic:'👨'},
  khayyi:{ar:'خيّي',tr:'khayyi',en:'my brother',pic:'👦'},
  ikhti:{ar:'إختي',tr:'ikhti',en:'my sister',pic:'👧'},
  teta:{ar:'تيتا',tr:'teta',en:'grandma',pic:'👵'},
  jeddo:{ar:'جدّو',tr:'jeddo',en:'grandpa',pic:'👴'},
  ammo:{ar:'عمّو',tr:'ʿammo',en:'uncle',pic:'🧔'},
  khalto:{ar:'خالتو',tr:'khalto',en:'auntie',pic:'👩‍🦱'},
  habibi:{ar:['حبيبي','حبيبتي'],tr:['ḥabībi','ḥabībti'],en:'my darling',pic:null},
  hayda:{ar:'هيدا',tr:'hayda',en:'this (boy / thing)',pic:null},
  hayde:{ar:'هيدي',tr:'hayde',en:'this (girl / thing)',pic:null},
  minhayda:{ar:'مين هيدا؟',tr:'mīn hayda?',en:'who is this?',pic:null},
  bet:{ar:'بيت',tr:'bēt',en:'house',pic:'🏠'},
  uda:{ar:'أوضة',tr:'ūḍa',en:'room',pic:'🛋️'},
  takhet:{ar:'تخت',tr:'takhet',en:'bed',pic:'🛏️'},
  matbakh:{ar:'مطبخ',tr:'maṭbakh',en:'kitchen',pic:'🍳'},
  bisse:{ar:'بسّة',tr:'bisse',en:'cat',pic:'🐱'},
  kalb:{ar:'كلب',tr:'kalb',en:'dog',pic:'🐶'},
  asfour:{ar:'عصفور',tr:'ʿaṣfūr',en:'bird',pic:'🐦'},
  samake:{ar:'سمكة',tr:'samake',en:'fish',pic:'🐟'},
  // Unit 3 · Yummy food
  khebz:{ar:'خبز',tr:'khebz',en:'bread',pic:'🍞'},
  mayy:{ar:'مَي',tr:'mayy',en:'water',pic:'💧'},
  halib:{ar:'حليب',tr:'ḥalīb',en:'milk',pic:'🥛'},
  jebne:{ar:'جبنة',tr:'jebne',en:'cheese',pic:'🧀'},
  tiffaha:{ar:'تفّاحة',tr:'tiffāḥa',en:'apple',pic:'🍎'},
  moze:{ar:'موزة',tr:'mōze',en:'banana',pic:'🍌'},
  laymuna:{ar:'ليمونة',tr:'laymūna',en:'orange',pic:'🍊'},
  enab:{ar:'عنب',tr:'ʿenab',en:'grapes',pic:'🍇'},
  manoushe:{ar:'منقوشة',tr:"man'ūshe",en:"man'ūshe (za'tar bread)",pic:'🫓'},
  hummus:{ar:'حمّص',tr:'ḥummuṣ',en:'hummus',pic:'🥣'},
  falafel:{ar:'فلافل',tr:'falāfel',en:'falafel',pic:'🧆'},
  kaake:{ar:'كعكة',tr:'kaʿke',en:'sesame bread ring',pic:'🥯'},
  baddi:{ar:'بدّي…',tr:'baddi…',en:'I want…',pic:null},
  baddak:{ar:['بدّك…؟','بدِّك…؟'],tr:['baddak…?','baddik…?'],en:'do you want…?',pic:null},
  tfaddal:{ar:['تفضّل','تفضّلي'],tr:['tfaḍḍal','tfaḍḍali'],en:'here you go',pic:null},
  mabaddi:{ar:'ما بدّي',tr:'ma baddi',en:"I don't want",pic:null},
  zeki:{ar:'زاكي',tr:'zēki',en:'tasty',pic:null},
  ktir:{ar:'كتير',tr:'ktīr',en:'very / a lot',pic:null},
  shbiet:{ar:'شبعت',tr:'shbiʿt',en:"I'm full",pic:null},
  sahtein:{ar:'صحتين',tr:'ṣaḥtein',en:'enjoy your food!',pic:null},
  // Unit 4 · My world
  n1:{ar:'واحد',tr:'wāḥad',en:'one',pic:'num:1'}, n2:{ar:'تنين',tr:'tnēn',en:'two',pic:'num:2'},
  n3:{ar:'تلاتة',tr:'tlēte',en:'three',pic:'num:3'}, n4:{ar:'أربعة',tr:'arbʿa',en:'four',pic:'num:4'},
  n5:{ar:'خمسة',tr:'khamse',en:'five',pic:'num:5'}, n6:{ar:'ستة',tr:'sitte',en:'six',pic:'num:6'},
  n7:{ar:'سبعة',tr:'sabʿa',en:'seven',pic:'num:7'}, n8:{ar:'تمانية',tr:'tmēne',en:'eight',pic:'num:8'},
  n9:{ar:'تسعة',tr:'tisʿa',en:'nine',pic:'num:9'}, n10:{ar:'عشرة',tr:'ʿashra',en:'ten',pic:'num:10'},
  ahmar:{ar:'أحمر',tr:'aḥmar',en:'red',pic:'col:#E5484D'}, azraa:{ar:'أزرق',tr:'azraʾ',en:'blue',pic:'col:#3B82F6'},
  asfar:{ar:'أصفر',tr:'aṣfar',en:'yellow',pic:'col:#FFC93C'}, akhdar:{ar:'أخضر',tr:'akhḍar',en:'green',pic:'col:#2FA866'},
  abyad:{ar:'أبيض',tr:'abyaḍ',en:'white',pic:'col:#FFFFFF'},
  ras:{ar:'راس',tr:'rās',en:'head',pic:null}, ein:{ar:'عين',tr:'ʿēn',en:'eye',pic:'👁️'},
  id:{ar:'إيد',tr:'īd',en:'hand',pic:null}, ijr:{ar:'إجر',tr:'ijr',en:'foot / leg',pic:'🦶'},
  nelab:{ar:'يلّا نلعب',tr:'yalla nelʿab',en:"let's play",pic:null}, tabe:{ar:'طابة',tr:'ṭābe',en:'ball',pic:'⚽'},
  barra:{ar:'برّا',tr:'barra',en:'outside',pic:'🌳'}, shams:{ar:'شمس',tr:'shams',en:'sun',pic:'☀️'}
};

// Conversation turns: q = what the character says, a = what the child answers (word id or phrase), check = what the speaking check listens for
window.YN_COURSE = [
 {id:1,name:'Beginner',desc:'First words and short phrases',units:[
  {id:1,title:'Hello!',color:'#14A39A',icon:'👋',sticker:{e:'👋',n:'Hello Hero'},lessons:[
   {title:'Hello & how are you',words:['marhaba','kifak','mnih','hamdella'],talk:[
     {q:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'How are you?'},a:'mnih',after:'Mnīḥ? Ḥamdella! Me too!'},
     {q:{ar:'مرحبا!',tr:'marḥaba!',en:'Hello!'},a:'marhaba',after:'Marḥaba! So happy to see you!'}]},
   {title:'Names & goodbye',words:['ismi','shuismak','tsharrafna','bye'],talk:[
     {q:{ar:['شو إسمك؟','شو إسمِك؟'],tr:['shu ismak?','shu ismik?'],en:"What's your name?"},a:{ar:'إسمي {name}',tr:'ismi {name}'},check:{ar:'إسمي',tr:'ismi'},after:'Tsharrafna, {name}!'},
     {q:{ar:'يلّا باي!',tr:'yalla bye!',en:'Bye!'},a:'bye',after:'See you soon!'}]},
   {title:'Morning & night',words:['sabah','sabahnour','masa','tisbah'],talk:[
     {q:{ar:'صباح الخير!',tr:'ṣabāḥ el-khēr!',en:'Good morning!'},a:'sabahnour',after:'Bravo! That is the perfect reply!'},
     {q:{ar:'مسا الخير!',tr:'masa el-khēr!',en:'Good evening!'},a:'masa',after:'Masa el-khēr to you too!'}]},
   {title:'Polite words',words:['shukran','afwan','lawsamaht','eh','la'],talk:[
     {q:{ar:'',tr:'🎁',en:'Bisseh gives you a present!'},a:'shukran',after:'Bisseh says: ʿafwan! Miaow!'},
     {q:{ar:'شكراً!',tr:'shukran!',en:'Thank you!'},a:'afwan',after:'Very polite!'}]},
   {title:'How do you feel?',words:['mabsut','zalan','taban','juan'],talk:[
     {q:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'How are you? (say you are happy)'},a:'mabsut',after:'Yay! I am happy too!'},
     {q:{ar:['جوعان؟','جوعانة؟'],tr:['jūʿān?','jūʿāne?'],en:'Are you hungry?'},a:'eh',after:'Me too! Let us eat soon!'}]}
  ]},
  {id:2,title:'My family',color:'#E5484D',icon:'🏡',sticker:{e:'🏡',n:'Family Star'},lessons:[
   {title:'Mum, dad & me',words:['mama','baba','khayyi','ikhti'],talk:[
     {q:{ar:'',tr:'👩',en:'Who is this? Say it in Lebanese!'},a:'mama',after:'Yes, māma!'},
     {q:{ar:'',tr:'👨',en:'And who is this?'},a:'baba',after:'Bravo, bāba!'}]},
   {title:'Big family',words:['teta','jeddo','ammo','khalto'],talk:[
     {q:{ar:'',tr:'👵',en:'Who is this?'},a:'teta',after:'Teta! She makes the best food!'},
     {q:{ar:'',tr:'👴',en:'And who is this?'},a:'jeddo',after:'Jeddo! He tells funny stories!'}]},
   {title:'Who is this?',words:['habibi','hayda','hayde','minhayda'],talk:[
     {q:{ar:'مين هيدا؟ 👴',tr:'mīn hayda? 👴',en:'Who is this?'},a:{ar:'هيدا جدّو',tr:'hayda jeddo'},after:'Yes! Hayda jeddo!'},
     {q:{ar:'مين هيدي؟ 👵',tr:'mīn hayde? 👵',en:'Who is this?'},a:{ar:'هيدي تيتا',tr:'hayde teta'},after:'Bravo! Hayde teta!'}]},
   {title:'At home',words:['bet','uda','takhet','matbakh'],talk:[
     {q:{ar:'شو هيدا؟ 🛏️',tr:'shu hayda? 🛏️',en:'What is this?'},a:'takhet',after:'Yes, a takhet. Sleepy time!'},
     {q:{ar:'شو هيدا؟ 🏠',tr:'shu hayda? 🏠',en:'What is this?'},a:'bet',after:'Bēt! Our home!'}]},
   {title:'Pets',words:['bisse','kalb','asfour','samake'],talk:[
     {q:{ar:'شو هيدي؟ 🐱',tr:'shu hayde? 🐱',en:'What is this?'},a:'bisse',after:'Bisse, like Bisseh! Miaow!'},
     {q:{ar:'شو هيدا؟ 🐶',tr:'shu hayda? 🐶',en:'What is this?'},a:'kalb',after:'A kalb! Woof!'}]}
  ]},
  {id:3,title:'Yummy food',color:'#FF9F1C',icon:'🍎',sticker:{e:'🍎',n:'Yummy Champ'},lessons:[
   {title:'Breakfast',words:['khebz','mayy','halib','jebne'],talk:[
     {q:{ar:'شو هيدا؟ 🍞',tr:'shu hayda? 🍞',en:'What is this?'},a:'khebz',after:'Khebz! Fresh bread!'},
     {q:{ar:'شو هيدي؟ 🧀',tr:'shu hayde? 🧀',en:'What is this?'},a:'jebne',after:'Jebne! Yummy cheese!'}]},
   {title:'Fruit',words:['tiffaha','moze','laymuna','enab'],talk:[
     {q:{ar:'شو هيدي؟ 🍎',tr:'shu hayde? 🍎',en:'What is this?'},a:'tiffaha',after:'A red tiffāḥa!'},
     {q:{ar:'شو هيدي؟ 🍌',tr:'shu hayde? 🍌',en:'What is this?'},a:'moze',after:'A mōze! Monkeys love it!'}]},
   {title:'Lebanese food',words:['manoushe','hummus','falafel','kaake'],talk:[
     {q:{ar:'شو هيدي؟ 🫓',tr:'shu hayde? 🫓',en:'What is this?'},a:'manoushe',after:"Man'ūshe! Lebanon's favourite breakfast!"},
     {q:{ar:'شو هيدا؟ 🧆',tr:'shu hayda? 🧆',en:'What is this?'},a:'falafel',after:'Falāfel! Crunchy!'}]},
   {title:'I want…',words:['baddi','baddak','tfaddal','mabaddi'],talk:[
     {q:{ar:['بدّك مَي؟','بدِّك مَي؟'],tr:['baddak mayy?','baddik mayy?'],en:'Do you want water? (say yes)'},a:{ar:'إي، بدّي مَي',tr:'ē, baddi mayy'},check:{ar:'بدي مي',tr:'baddi mayy'},after:'Tfaḍḍal! Here is your water 💧'},
     {q:{ar:['بدّك حليب؟','بدِّك حليب؟'],tr:['baddak ḥalīb?','baddik ḥalīb?'],en:'Do you want milk? (say no thanks)'},a:{ar:'لأ، شكراً',tr:'laʾ, shukran'},check:{ar:'شكرا',tr:'shukran'},after:'Okay, no milk!'}]},
   {title:'Tasty!',words:['zeki','ktir','shbiet','sahtein'],talk:[
     {q:{ar:'كيف الأكل؟',tr:'kīf el-akl?',en:'How is the food?'},a:{ar:'كتير زاكي!',tr:'ktīr zēki!'},check:{ar:'زاكي',tr:'zeki'},after:'Ṣaḥtein! Enjoy!'},
     {q:{ar:['بعد بدّك؟','بعد بدِّك؟'],tr:['baʿd baddak?','baʿd baddik?'],en:'Do you want more?'},a:{ar:'لأ شكراً، شبعت',tr:'laʾ shukran, shbiʿt'},check:{ar:'شبعت',tr:'shbiet'},after:'You are full! Ḥamdella!'}]}
  ]},
  {id:4,title:'My world',color:'#7F77DD',icon:'🌍',sticker:{e:'🌍',n:'World Explorer'},lessons:[
   {title:'Numbers 1–5',words:['n1','n2','n3','n4','n5'],talk:[
     {q:{ar:'قدّيش بسّة؟ 🐱🐱🐱',tr:'addēsh bisse? 🐱🐱🐱',en:'How many cats?'},a:'n3',after:'Tlēte! Three cats!'},
     {q:{ar:'قدّيش طابة؟ ⚽⚽',tr:'addēsh ṭābe? ⚽⚽',en:'How many balls?'},a:'n2',after:'Tnēn! Two balls!'}]},
   {title:'Numbers 6–10',words:['n6','n7','n8','n9','n10'],talk:[
     {q:{ar:'قدّيش تفّاحة؟ 🍎🍎🍎🍎🍎🍎',tr:'addēsh tiffāḥa? 🍎🍎🍎🍎🍎🍎',en:'How many apples?'},a:'n6',after:'Sitte! Six apples!'},
     {q:{ar:'قدّيش إصبع؟ 🖐️🖐️',tr:'addēsh iṣbaʿ? 🖐️🖐️',en:'How many fingers?'},a:'n10',after:'ʿAshra! Ten fingers!'}]},
   {title:'Colours',words:['ahmar','azraa','asfar','akhdar','abyad'],talk:[
     {q:{ar:'شو لونو؟ 🍎',tr:'shu lōno? 🍎',en:'What colour is it?'},a:'ahmar',after:'Aḥmar! Red!'},
     {q:{ar:'شو لونو؟ 🍀',tr:'shu lōno? 🍀',en:'What colour is it?'},a:'akhdar',after:'Akhḍar! Green!'}]},
   {title:'My body',words:['ras','ein','id','ijr'],talk:[
     {q:{ar:'شو هيدي؟ 👁️',tr:'shu hayde? 👁️',en:'What is this?'},a:'ein',after:'ʿĒn! Your eye!'},
     {q:{ar:'شو هيدي؟ 🦶',tr:'shu hayde? 🦶',en:'What is this?'},a:'ijr',after:'Ijr! Your foot!'}]},
   {title:'Let us play!',words:['nelab','tabe','barra','shams'],talk:[
     {q:{ar:'يلّا نلعب؟',tr:'yalla nelʿab?',en:"Shall we play?"},a:{ar:'إي، يلّا!',tr:'ē, yalla!'},check:{ar:'يلا',tr:'yalla'},after:'Yay! Yalla!'},
     {q:{ar:'وين الطابة؟',tr:'wēn el-ṭābe?',en:'Where is the ball?'},a:'barra',after:'Barra! Outside in the shams!'}]}
  ]}
 ]},
 {id:2,name:'Elementary',desc:'Short phrases and simple questions',soon:true,units:[
  {id:1,title:'At school',icon:'🏫',color:'#14A39A',plan:'madrase (school), ṣaff (class), ktēb (book), ʾalam (pen), istēz / miʿalme (teacher), "baddi ʾalam" (I want a pen)'},
  {id:2,title:'Playtime',icon:'🛝',color:'#E5484D',plan:'ḥadīʾa (park), mrjūḥa (swing), rkoḍ (run!), "yalla nelʿab ṭābe", taking turns: "dawre"'},
  {id:3,title:'Out & about',icon:'🛒',color:'#FF9F1C',plan:'dikkēne (shop), sayyāra (car), baḥr (sea), "addēsh?" (how much?), "wēn…?" (where…?)'},
  {id:4,title:'Days & weather',icon:'🌦️',color:'#7F77DD',plan:'el-yōm (today), bukra (tomorrow), mbēreḥ (yesterday), shō (hot), bard (cold), maṭar (rain)'}]},
 {id:3,name:'Intermediate',desc:'Real conversations with Zena and Karim',soon:true,units:[
  {id:1,title:'Visiting Teta',icon:'👵',color:'#14A39A',plan:'greetings at the door, being offered food, "ʾaddēsh ʿmrak?" (how old are you?), saying thank you to grandparents'},
  {id:2,title:'At the souk',icon:'🧺',color:'#E5484D',plan:'buying fruit, asking prices, numbers to 20, polite requests'},
  {id:3,title:'Birthday party',icon:'🎂',color:'#FF9F1C',plan:'"ʿīd milād saʿīd", presents, games, feelings'},
  {id:4,title:'Trip to the mountains',icon:'⛰️',color:'#7F77DD',plan:'travel words, nature, the cedar tree (arze), describing places'}]},
 {id:4,name:'Confident',desc:'Stories, role-play and telling about your day',soon:true,units:[
  {id:1,title:'Stories with Bisseh',icon:'🐱',color:'#14A39A',plan:'short listened stories, answering questions about them'},
  {id:2,title:'My day',icon:'🕒',color:'#E5484D',plan:'daily routine, time, telling what you did'},
  {id:3,title:'Lebanese traditions',icon:'🎉',color:'#FF9F1C',plan:'Eid, Christmas, mezze, dabke, family gatherings'},
  {id:4,title:'Show & tell',icon:'🎤',color:'#7F77DD',plan:'describing a picture, talking about family and favourite things'}]}
];
