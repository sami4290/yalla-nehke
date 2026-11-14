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
  jeddo:{ar:'جدّو',tr:'jiddo',en:'grandpa',pic:'👴'},
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
  barra:{ar:'برّا',tr:'barra',en:'outside',pic:'🌳'}, shams:{ar:'شمس',tr:'shams',en:'sun',pic:'☀️'},
  // ===== Level 2 · Elementary =====
  madrase:{ar:'مدرسة',tr:'madrase',en:'school',pic:'🏫'}, saff:{ar:'صفّ',tr:'ṣaff',en:'class',pic:'🧑‍🏫'},
  kteb:{ar:'كتاب',tr:'ktēb',en:'book',pic:'📕'}, daftar:{ar:'دفتر',tr:'daftar',en:'notebook',pic:'📓'}, alam:{ar:'قلم',tr:'ʾalam',en:'pen',pic:'🖊️'},
  istez:{ar:'أستاذ',tr:'istēz',en:'teacher (man)',pic:'👨‍🏫'}, mialme:{ar:'معلّمة',tr:'mʿallme',en:'teacher (woman)',pic:'👩‍🏫'},
  rfii:{ar:['رفيقي','رفيقتي'],tr:['rfīʾi','rfīʾti'],en:'my friend',pic:null}, shanta:{ar:'شنطة',tr:'shanṭa',en:'bag',pic:'🎒'},
  fiyye:{ar:'فيّي…؟',tr:'fiyyi…?',en:'can I…?',pic:null}, mafhemt:{ar:'ما فهمت',tr:'ma fhemt',en:"I didn't understand",pic:null},
  idmarra:{ar:'عيد كمان مرّة',tr:'ʿīd kamēn marra',en:'say it again',pic:null}, khalast:{ar:'خلّصت',tr:'khallaṣt',en:"I've finished",pic:null},
  shu:{ar:'شو؟',tr:'shu?',en:'what?',pic:null}, min:{ar:'مين؟',tr:'mīn?',en:'who?',pic:null}, wen:{ar:'وين؟',tr:'wēn?',en:'where?',pic:null},
  lesh:{ar:'ليش؟',tr:'lēsh?',en:'why?',pic:null}, emta:{ar:'إيمتى؟',tr:'emta?',en:'when?',pic:null},
  baara:{ar:'بقرا',tr:'baʾra',en:'I read',pic:'📖'}, bektob:{ar:'بكتب',tr:'bektob',en:'I write',pic:'✍️'}, bersom:{ar:'برسم',tr:'bersom',en:'I draw',pic:'🎨'}, belab:{ar:'بلعب',tr:'belʿab',en:'I play',pic:'🧸'},
  hadiqa:{ar:'جنينة',tr:'jnēne',en:'park / garden',pic:'🏞️'}, marjouha:{ar:'مرجوحة',tr:'marjūḥa',en:'swing',pic:'🎠'},
  zahliqa:{ar:'زحليطة',tr:'zoḥlayṭa',en:'slide',pic:'🛝'}, ramel:{ar:'رمل',tr:'ramel',en:'sand',pic:'🏖️'},
  rkod:{ar:['اركض','اركضي'],tr:['rkoḍ','rkoḍi'],en:'run!',pic:'🏃'}, nott:{ar:['نطّ','نطّي'],tr:['nuṭṭ','nuṭṭi'],en:'jump!',pic:'🦘'},
  oud:{ar:['قعود','قعودي'],tr:['ʾʿod','ʾʿodi'],en:'sit down',pic:'🪑'}, taa:{ar:['تعا','تعي'],tr:['taʿa','taʿi'],en:'come here!',pic:null},
  ghummayda:{ar:'غمّيضة',tr:'ghummayḍa',en:'hide and seek',pic:'🙈'}, dawri:{ar:'دوري',tr:'dōri',en:'my turn',pic:null},
  rbeht:{ar:'ربحت',tr:'rbeḥt',en:'I won',pic:'🥇'}, khsert:{ar:'خسرت',tr:'khsert',en:'I lost',pic:null},
  khayef:{ar:['خايف','خايفة'],tr:['khāyef','khāyfe'],en:'scared',pic:'😨'}, baadshway:{ar:'بعد شوي',tr:'baʿd shway',en:'in a little while',pic:null},
  bsura:{ar:'يلّا بسرعة',tr:'yalla bsurʿa',en:'quick, hurry!',pic:'⚡'}, shwayshway:{ar:'شوي شوي',tr:'shway shway',en:'slowly',pic:'🐢'},
  atini:{ar:'عطيني',tr:'ʿaṭīni',en:'give me',pic:null}, khod:{ar:['خود','خدي'],tr:['khod','khedi'],en:'take it',pic:null},
  maabaad:{ar:'مع بعض',tr:'maʿ baʿḍ',en:'together',pic:'🤝'}, maaleh:{ar:'معليه',tr:'maʿlē',en:"never mind / it's ok",pic:null},
  dikkene:{ar:'دكّان',tr:'dikkēn',en:'shop',pic:'🏪'}, sayyara:{ar:'سيّارة',tr:'sayyāra',en:'car',pic:'🚗'}, bas:{ar:'باص',tr:'bāṣ',en:'bus',pic:'🚌'}, tariq:{ar:'طريق',tr:'ṭarīʾ',en:'road',pic:'🛣️'},
  bahr:{ar:'بحر',tr:'baḥr',en:'sea',pic:'🌊'}, jabal:{ar:'جبل',tr:'jabal',en:'mountain',pic:'⛰️'}, shajra:{ar:'شجرة',tr:'shajra',en:'tree',pic:'🌳'}, warde:{ar:'وردة',tr:'warde',en:'flower',pic:'🌸'},
  hon:{ar:'هون',tr:'hōn',en:'here',pic:null}, honik:{ar:'هونيك',tr:'honīk',en:'over there',pic:null}, yamin:{ar:'عاليمين',tr:'ʿal-yamīn',en:'on the right',pic:'👉'}, shmel:{ar:'عالشمال',tr:'ʿal-shmēl',en:'on the left',pic:'👈'},
  addesh:{ar:'قدّيش؟',tr:'addēsh?',en:'how much? / how many?',pic:null}, masari:{ar:'مصاري',tr:'maṣāri',en:'money',pic:'💰'}, ghali:{ar:'غالي',tr:'ghāli',en:'expensive',pic:null}, rkhis:{ar:'رخيص',tr:'rkhīṣ',en:'cheap',pic:null},
  nrouh:{ar:'يلّا نروح',tr:'yalla nrūḥ',en:"let's go",pic:null}, wselna:{ar:'وصلنا',tr:'wṣelna',en:"we've arrived",pic:'🏁'}, stanna:{ar:['انطر','انطري'],tr:['ontor','ontori'],en:'wait!',pic:'✋'}, albet:{ar:'عالبيت',tr:'ʿal-bēt',en:'(to) home',pic:'🏠'},
  elyom:{ar:'اليوم',tr:'el-yōm',en:'today',pic:null}, bukra:{ar:'بكرا',tr:'bukra',en:'tomorrow',pic:null}, mbereh:{ar:'مبارح',tr:'mbēreḥ',en:'yesterday',pic:null}, hallaa:{ar:'هلّق',tr:'hallaʾ',en:'now',pic:null},
  shob:{ar:'شوب',tr:'shōb',en:'hot (weather)',pic:'🥵'}, bard:{ar:'برد',tr:'bard',en:'cold',pic:'🥶'}, shiti:{ar:'شتي',tr:'shiti',en:'rain',pic:'🌧️'}, talj:{ar:'تلج',tr:'talj',en:'snow',pic:'❄️'},
  jemaa:{ar:'الجمعة',tr:'el-jemʿa',en:'Friday',pic:null}, sabt:{ar:'السبت',tr:'el-sabt',en:'Saturday',pic:null}, ahad:{ar:'الأحد',tr:'el-aḥad',en:'Sunday',pic:null}, tanen:{ar:'التنين',tr:'el-tanēn',en:'Monday',pic:null},
  subh:{ar:'الصبح',tr:'eṣ-ṣubḥ',en:'(in the) morning',pic:'🌄'}, dahr:{ar:'الضهر',tr:'eḍ-ḍuhur',en:'(at) noon',pic:'🕛'}, elmasa:{ar:'المسا',tr:'el-masa',en:'(in the) evening',pic:'🌇'}, lel:{ar:'الليل',tr:'el-lēl',en:'(at) night',pic:'🌃'},
  kanze:{ar:'كنزة',tr:'kanze',en:'sweater',pic:'🧶'}, jaket:{ar:'جاكيت',tr:'jakēt',en:'jacket',pic:'🧥'}, ubbaa:{ar:'برنيطة',tr:'bornayṭa',en:'hat',pic:'🧢'}, sobbat:{ar:'صبّاط',tr:'ṣobbāṭ',en:'shoe',pic:'👟'}
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
     {q:{ar:'',tr:'👴',en:'And who is this?'},a:'jeddo',after:'Jiddo! He tells funny stories!'}]},
   {title:'Who is this?',words:['habibi','hayda','hayde','minhayda'],talk:[
     {q:{ar:'مين هيدا؟ 👴',tr:'mīn hayda? 👴',en:'Who is this?'},a:{ar:'هيدا جدّو',tr:'hayda jiddo'},after:'Yes! Hayda jiddo!'},
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
 {id:2,name:'Elementary',desc:'Short phrases and simple questions',units:[
  {id:1,title:'At school',color:'#14A39A',icon:'🏫',sticker:{e:'🎒',n:'School Star'},lessons:[
   {title:'School things',words:['madrase','saff','kteb','daftar','alam'],talk:[
     {q:{ar:'شو هيدا؟ 📕',tr:'shu hayda? 📕',en:'What is this?'},a:{ar:'هيدا كتاب',tr:'hayda ktēb'},check:{ar:'كتاب',tr:'kteb'},after:'Bravo! Hayda ktēb!'},
     {q:{ar:['وين رايح؟ 🏫','وين رايحة؟ 🏫'],tr:['wēn rāyeḥ? 🏫','wēn rāyḥa? 🏫'],en:'Where are you going?'},a:{ar:'عالمدرسة',tr:'ʿal-madrase'},check:{ar:'مدرسة',tr:'madrase'},after:'Yalla! Have a great day at school!'}]},
   {title:'Teacher & friends',words:['istez','mialme','rfii','shanta'],talk:[
     {q:{ar:'مين هيدا؟ 👨‍🏫',tr:'mīn hayda? 👨‍🏫',en:'Who is this?'},a:{ar:'هيدا الأستاذ',tr:'hayda l-istēz'},check:{ar:'استاذ',tr:'istez'},after:'Yes, the istēz!'},
     {q:{ar:'مين هيدا؟ 🧒',tr:'mīn hayda? 🧒',en:'Who is this? (say: my friend)'},a:'rfii',after:'How lovely, your friend!'}]},
   {title:'In class',words:['fiyye','mafhemt','idmarra','khalast'],talk:[
     {q:{ar:['فهمت؟','فهمتي؟'],tr:['fhemt?','fhemti?'],en:'Did you understand? (say: I didn’t understand)'},a:'mafhemt',after:'No problem, I will explain again!'},
     {q:{ar:['خلّصت؟','خلّصتي؟'],tr:['khallaṣt?','khallaṣti?'],en:'Have you finished?'},a:{ar:'إي، خلّصت',tr:'ē, khallaṣt'},check:{ar:'خلصت',tr:'khallast'},after:'Bravo! Super fast!'}]},
   {title:'Question words',words:['shu','min','wen','lesh','emta'],talk:[
     {q:{ar:'',tr:'🐱❓',en:'You want to ask where Bisseh is. Ask: Where is Bisseh?'},a:{ar:'وين بسّة؟',tr:'wēn Bisseh?'},check:{ar:'وين',tr:'wen'},after:'Bisseh is under the bed! 🛏️'},
     {q:{ar:'',tr:'🚪❓',en:'Someone knocks on the door. Ask: Who is it?'},a:{ar:'مين؟',tr:'mīn?'},check:{ar:'مين',tr:'min'},after:'It is Teta! Ahla w sahla!'}]},
   {title:'What I do',words:['baara','bektob','bersom','belab'],talk:[
     {q:{ar:['شو عم تعمل؟ 🎨','شو عم تعملي؟ 🎨'],tr:['shu ʿam taʿmel? 🎨','shu ʿam taʿmle? 🎨'],en:'What are you doing?'},a:{ar:'عم برسم',tr:'ʿam bersom'},check:{ar:'برسم',tr:'bersom'},after:'Wow, what a beautiful drawing!'},
     {q:{ar:['شو عم تعمل؟ 📖','شو عم تعملي؟ 📖'],tr:['shu ʿam taʿmel? 📖','shu ʿam taʿmle? 📖'],en:'What are you doing?'},a:{ar:'عم بقرا',tr:'ʿam baʾra'},check:{ar:'بقرا',tr:'baara'},after:'Reading is great!'}]}
  ]},
  {id:2,title:'Playtime',color:'#E5484D',icon:'🛝',sticker:{e:'🛝',n:'Play Champion'},lessons:[
   {title:'At the park',words:['hadiqa','marjouha','zahliqa','ramel'],talk:[
     {q:{ar:['وين بدّك تروح؟','وين بدِّك تروحي؟'],tr:['wēn baddak trūḥ?','wēn baddik trūḥi?'],en:'Where do you want to go?'},a:{ar:'عالجنينة',tr:'ʿal-jnēne'},check:{ar:'جنينة',tr:'jnene'},after:'Yalla, to the park!'},
     {q:{ar:'شو هيدي؟ 🛝',tr:'shu hayde? 🛝',en:'What is this?'},a:'zahliqa',after:'Wheee! A zoḥlayṭa!'}]},
   {title:'Run & jump',words:['rkod','nott','oud','taa'],talk:[
     {q:{ar:'',tr:'🐱💨',en:'Tell Bisseh to run!'},a:{ar:'اركضي يا بسّة!',tr:'rkoḍi ya Bisseh!'},check:{ar:'اركضي',tr:'rkodi'},after:'Bisseh runs super fast! 🐾'},
     {q:{ar:'',tr:'🐱🦘',en:'Now tell Bisseh to jump!'},a:{ar:'نطّي يا بسّة!',tr:'nuṭṭi ya Bisseh!'},check:{ar:'نطي',tr:'nutti'},after:'Boing! Bisseh jumps high!'}]},
   {title:'Games',words:['ghummayda','dawri','rbeht','khsert'],talk:[
     {q:{ar:'يلّا نلعب غمّيضة؟',tr:'yalla nelʿab ghummayḍa?',en:"Shall we play hide and seek?"},a:{ar:'إي، يلّا!',tr:'ē, yalla!'},check:{ar:'يلا',tr:'yalla'},after:'You hide, I count! 1, 2, 3…'},
     {q:{ar:'دور مين؟',tr:'dōr mīn?',en:'Whose turn is it? (say: my turn)'},a:'dawri',after:'Okay, your turn!'}]},
   {title:'Fast & slow',words:['khayef','baadshway','bsura','shwayshway'],talk:[
     {q:{ar:'',tr:'🚌⏰',en:'The bus is leaving! Tell your friend to hurry!'},a:'bsura',after:'Phew, we made it!'},
     {q:{ar:['خايف؟ 🌙','خايفة؟ 🌙'],tr:['khāyef? 🌙','khāyfe? 🌙'],en:'Are you scared? (say: no)'},a:{ar:'لأ!',tr:'laʾ!'},check:{ar:'لا',tr:'la'},after:'You are so brave!'}]},
   {title:'Sharing',words:['atini','khod','maabaad','maaleh'],talk:[
     {q:{ar:'',tr:'⚽🙋',en:'Ask your friend: give me the ball'},a:{ar:'عطيني الطابة',tr:'ʿaṭīni l-ṭābe'},check:{ar:'عطيني',tr:'atini'},after:'Here you go! Tfaḍḍal!'},
     {q:{ar:'سوري! 😔',tr:'sorry! 😔',en:'Your friend says sorry. Say: never mind'},a:'maaleh',after:'Friends again! 🤝'}]}
  ]},
  {id:3,title:'Out & about',color:'#FF9F1C',icon:'🛒',sticker:{e:'🛒',n:'City Explorer'},lessons:[
   {title:'Getting around',words:['dikkene','sayyara','bas','tariq'],talk:[
     {q:{ar:'شو هيدي؟ 🚗',tr:'shu hayde? 🚗',en:'What is this?'},a:'sayyara',after:'Vroom vroom!'},
     {q:{ar:'كيف رحت عالمدرسة؟ 🚌',tr:'kīf reḥt ʿal-madrase? 🚌',en:'How did you go to school?'},a:{ar:'بالباص',tr:'bel-bāṣ'},check:{ar:'باص',tr:'bas'},after:'The school bus! Fun!'}]},
   {title:'Nature',words:['bahr','jabal','shajra','warde'],talk:[
     {q:{ar:['وين بدّك تروح؟ 🌊','وين بدِّك تروحي؟ 🌊'],tr:['wēn baddak trūḥ? 🌊','wēn baddik trūḥi? 🌊'],en:'Where do you want to go?'},a:{ar:'عالبحر',tr:'ʿal-baḥr'},check:{ar:'بحر',tr:'bahr'},after:'Swimming time! 🏊'},
     {q:{ar:'شو هيدي؟ 🌸',tr:'shu hayde? 🌸',en:'What is this?'},a:'warde',after:'A beautiful warde for Teta!'}]},
   {title:'Here & there',words:['hon','honik','yamin','shmel'],talk:[
     {q:{ar:'وين بسّة؟ 👉🐱',tr:'wēn Bisseh? 👉🐱',en:'Where is Bisseh?'},a:'yamin',after:'Yes, on the right!'},
     {q:{ar:'وين الطابة؟ 👈⚽',tr:'wēn el-ṭābe? 👈⚽',en:'Where is the ball?'},a:'shmel',after:'On the left! Bravo!'}]},
   {title:'At the shop',words:['addesh','masari','ghali','rkhis'],talk:[
     {q:{ar:'',tr:'🍎💰',en:'Ask the shopkeeper: how much is the apple?'},a:{ar:'قدّيش التفّاحة؟',tr:'addēsh el-tiffāḥa?'},check:{ar:'قديش',tr:'addesh'},after:'Only 1,000 lira!'},
     {q:{ar:'هيدا ب ١٠٠ دولار! 💸',tr:'hayda b 100 dollar! 💸',en:'This costs 100 dollars! (say: expensive!)'},a:{ar:'كتير غالي!',tr:'ktīr ghāli!'},check:{ar:'غالي',tr:'ghali'},after:'Haha, too expensive!'}]},
   {title:"Let's go!",words:['nrouh','wselna','stanna','albet'],talk:[
     {q:{ar:'',tr:'🚗',en:'Everyone is ready. Say: let’s go!'},a:'nrouh',after:'Yalla! Seatbelts on!'},
     {q:{ar:'',tr:'🏁🏠',en:'The car stops at home. Say: we have arrived!'},a:'wselna',after:'Ḥamdella ʿas-salāme! Welcome home!'}]}
  ]},
  {id:4,title:'Days & weather',color:'#7F77DD',icon:'🌦️',sticker:{e:'🌦️',n:'Weather Wizard'},lessons:[
   {title:'Today & tomorrow',words:['elyom','bukra','mbereh','hallaa'],talk:[
     {q:{ar:'إيمتى المدرسة؟',tr:'emta l-madrase?',en:'When is school? (say: tomorrow)'},a:'bukra',after:'Bukra! Get your bag ready!'},
     {q:{ar:'إيمتى بدّنا نلعب؟',tr:'emta baddna nelʿab?',en:'When shall we play? (say: now!)'},a:'hallaa',after:'Yalla, hallaʾ!'}]},
   {title:'Weather',words:['shob','bard','shiti','talj'],talk:[
     {q:{ar:'كيف الطقس؟ ☀️🥵',tr:'kīf eṭ-ṭaʾs? ☀️🥵',en:'How is the weather?'},a:{ar:'شوب!',tr:'shōb!'},check:{ar:'شوب',tr:'shob'},after:'So hot! Let’s go to the baḥr!'},
     {q:{ar:'كيف الطقس؟ 🌧️',tr:'kīf eṭ-ṭaʾs? 🌧️',en:'How is the weather?'},a:{ar:'عم تشتي',tr:'ʿam teshti'},check:{ar:'تشتي',tr:'teshti'},after:'Take your umbrella! ☂️'}]},
   {title:'Days of the week',words:['jemaa','sabt','ahad','tanen'],talk:[
     {q:{ar:'شو اليوم؟ (Saturday)',tr:'shu l-yōm? (Saturday)',en:'What day is it today?'},a:'sabt',after:'El-sabt! Weekend!'},
     {q:{ar:'شو بكرا؟ (Sunday)',tr:'shu bukra? (Sunday)',en:'What day is tomorrow?'},a:'ahad',after:'El-aḥad! Family lunch at Teta’s!'}]},
   {title:'Morning to night',words:['subh','dahr','elmasa','lel'],talk:[
     {q:{ar:['إيمتى بتفيق؟ 🌄','إيمتى بتفيقي؟ 🌄'],tr:['emta btfīʾ? 🌄','emta btfīʾi? 🌄'],en:'When do you wake up?'},a:'subh',after:'Ṣabāḥ el-khēr, early bird!'},
     {q:{ar:['إيمتى بتنام؟ 🌃','إيمتى بتنامي؟ 🌃'],tr:['emta btnēm? 🌃','emta btnēmi? 🌃'],en:'When do you sleep?'},a:'lel',after:'Tiṣbaḥ ʿala khēr! 🌙'}]},
   {title:'Clothes',words:['kanze','jaket','ubbaa','sobbat'],talk:[
     {q:{ar:['برد! شو بدّك تلبس؟ 🥶','برد! شو بدِّك تلبسي؟ 🥶'],tr:['bard! shu baddak tilbes? 🥶','bard! shu baddik tilbsi? 🥶'],en:'It is cold! What will you wear?'},a:{ar:'جاكيت',tr:'jakēt'},check:{ar:'جاكيت',tr:'jaket'},after:'Good idea, stay warm!'},
     {q:{ar:'شو هيدا؟ 👟',tr:'shu hayda? 👟',en:'What is this?'},a:'sobbat',after:'Ṣobbāṭ! Ready to run!'}]}
  ]}
 ]},
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
