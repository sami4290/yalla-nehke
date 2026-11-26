// Yalla Nehke – curriculum data
// Gendered forms: [boyForm, girlForm] are resolved for the CHILD being spoken to / about.
// pic: 'img:key' | emoji | 'num:N' | 'col:#hex' | null (abstract word -> shown as its meaning)
window.YN_WORDS = {
  // Level 1 · Unit 1 · Hello!
  marhaba:{ar:'مرحبا',tr:'marḥaba',en:'hello',pic:'img:marhaba'},
  kifak:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'how are you?',pic:null},
  mnih:{ar:['منيح','منيحة'],tr:['mnīḥ','mnīḥa'],en:"good / I'm fine",pic:null},
  hamdella:{ar:'الحمدلله',tr:'elḥamdella',en:'thank God (all good)',pic:null},
  ismi:{ar:'إسمي…',tr:'ismi…',en:'my name is…',pic:null},
  shuismak:{ar:['شو إسمك؟','شو إسمِك؟'],tr:['shu ismak?','shu ismik?'],en:"what's your name?",pic:null},
  tsharrafna:{ar:'تشرّفنا',tr:'tsharrafna',en:'nice to meet you',pic:null},
  bye:{ar:'يلّا باي',tr:'yalla bye',en:'bye!',pic:null},
  sabah:{ar:'صباح الخير',tr:'ṣabāḥ el-khēr',en:'good morning',pic:'🌅'},
  sabahnour:{ar:'صباح النور',tr:'ṣabāḥ el-nūr',en:'good morning (reply)',pic:'☀️'},
  masa:{ar:'مسا الخير',tr:'masa el-khēr',en:'good evening',pic:'🌆'},
  tisbah:{ar:['تصبح على خير','تصبحي على خير'],tr:['tiṣbaḥ ʿala khēr','tiṣbaḥi ʿala khēr'],en:'good night',pic:'🌙'},
  shukran:{ar:'شكراً',tr:'shukran',en:'thank you',pic:null},
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
  samake:{ar:'سمكة',tr:'samky',en:'fish',pic:'🐟'},
  // Unit 3 · Yummy food
  khebz:{ar:'خبز',tr:'khobez',en:'bread',pic:'🍞'},
  mayy:{ar:'مَي',tr:'mayy',en:'water',pic:'💧'},
  halib:{ar:'حليب',tr:'ḥalīb',en:'milk',pic:'🥛'},
  jebne:{ar:'جبنة',tr:'jibny',en:'cheese',pic:'🧀'},
  tiffaha:{ar:'تفّاحة',tr:'tiffāḥa',en:'apple',pic:'🍎'},
  moze:{ar:'موزة',tr:'mōze',en:'banana',pic:'🍌'},
  laymuna:{ar:'ليمونة',tr:'laymūny',en:'orange',pic:'🍊'},
  enab:{ar:'عنب',tr:'ʿenab',en:'grapes',pic:'🍇'},
  manoushe:{ar:'منقوشة',tr:"man'ūshe",en:"man'ūshe (za'tar bread)",pic:'🫓'},
  hummus:{ar:'حمّص',tr:'ḥummuṣ',en:'hummus',pic:'🥣'},
  falafel:{ar:'فلافل',tr:'falāfel',en:'falafel',pic:'🧆'},
  kaake:{ar:'كعكة',tr:'kaʿke',en:'sesame bread ring',pic:'🥯'},
  baddi:{ar:'بدّي…',tr:'baddi…',en:'I want…',pic:null},
  baddak:{ar:['بدّك…؟','بدِّك…؟'],tr:['baddak…?','baddik…?'],en:'do you want…?',pic:null},
  tfaddal:{ar:['تفضّل','تفضّلي'],tr:['tfaḍḍal','tfaḍḍali'],en:'here you go',pic:null},
  mabaddi:{ar:'ما بدّي',tr:'ma baddi',en:"I don't want",pic:null},
  zeki:{ar:'طيّب',tr:'ṭayyib',en:'tasty',pic:null},
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
  barra:{ar:'برّا',tr:'barra',en:'outside',pic:'🌳'}, shams:{ar:'شمس',tr:'shames',en:'sun',pic:'☀️'},
  // ===== Level 2 · Elementary =====
  madrase:{ar:'مدرسة',tr:'madrase',en:'school',pic:'🏫'}, saff:{ar:'صفّ',tr:'ṣaff',en:'class',pic:'🧑‍🏫'},
  kteb:{ar:'كتاب',tr:'ktēb',en:'book',pic:'📕'}, daftar:{ar:'دفتر',tr:'daftar',en:'notebook',pic:'📓'}, alam:{ar:'قلم',tr:'ʾalam',en:'pen',pic:'🖊️'},
  istez:{ar:'أستاذ',tr:'istēz',en:'teacher (man)',pic:'👨‍🏫'}, mialme:{ar:'معلّمة',tr:'mʿallme',en:'teacher (woman)',pic:'👩‍🏫'},
  rfii:{ar:['رفيقي','رفيقتي'],tr:['rfīʾi','rfīʾti'],en:'my friend',pic:null}, shanta:{ar:'شنطة',tr:'shanṭa',en:'bag',pic:'🎒'},
  fiyye:{ar:'فيّي…؟',tr:'fiyyi…?',en:'can I…?',pic:null}, mafhemt:{ar:'ما فهمت',tr:'ma fhemt',en:"I didn't understand",pic:null}, khalast:{ar:'خلّصت',tr:'khallaṣt',en:"I've finished",pic:null},
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
  kanze:{ar:'كنزة',tr:'kanze',en:'sweater',pic:'🧶'}, jaket:{ar:'جاكيت',tr:'jakēt',en:'jacket',pic:'🧥'}, ubbaa:{ar:'برنيطة',tr:'bornayṭa',en:'hat',pic:'🧢'}, sobbat:{ar:'صبّاط',tr:'ṣobbāṭ',en:'shoe',pic:'👟'},
  // ---- Expansion (Nov 2026) ----
  bonjour:{ar:'بونجور',tr:'bonjour',en:'hello (Lebanese-French)',pic:null}, maasalame:{ar:'مع السلامة',tr:'maʿ el-salēme',en:'goodbye',pic:'👋'}, fiq:{ar:['فيق','فيقي'],tr:['fīʾ','fīʾi'],en:'wake up!',pic:'⏰'}, atshan:{ar:['عطشان','عطشانة'],tr:['ʿaṭshān','ʿaṭshāne'],en:'thirsty',pic:'🥤'},
  ana:{ar:'أنا',tr:'ana',en:'me / I',pic:'🙋'}, amto:{ar:'عمتو',tr:'ʿamto',en:'auntie (dad\'s sister)',pic:'👩'}, hawde:{ar:'هودي',tr:'hawde',en:'these',pic:null}, beb:{ar:'باب',tr:'bēb',en:'door',pic:'🚪'},
  arnab:{ar:'أرنب',tr:'arnab',en:'rabbit',pic:'🐰'}, bed:{ar:'بيض',tr:'bēḍ',en:'eggs',pic:'🥚'}, frez:{ar:'فريز',tr:'frēz',en:'strawberries',pic:'🍓'}, tabboule:{ar:'تبّولة',tr:'tabbūle',en:'tabbouleh',pic:'🥗'},
  kamen:{ar:'كمان',tr:'kamēn',en:'more / again',pic:null}, helo:{ar:'حلو',tr:'ḥelo',en:'sweet',pic:'🍬'}, timm:{ar:'تمّ',tr:'timm',en:'mouth',pic:'👄'}, amar:{ar:'قمر',tr:'ʾamar',en:'moon',pic:'🌙'},
  mudir:{ar:'مدير',tr:'mudīr',en:'head teacher',pic:'🧑‍💼'}, andisual:{ar:'عندي سؤال',tr:'ʿandi suʾāl',en:'I have a question',pic:'🙋'}, bghanni:{ar:'بغنّي',tr:'bghanni',en:'I sing',pic:'🎤'}, dawwera:{ar:'دوّيرة',tr:'dawwēra',en:'merry-go-round',pic:'🎠'},
  oum:{ar:['قوم','قومي'],tr:['ʾūm','ʾūmi'],en:'stand up',pic:'🧍'}, laaytak:{ar:['لقيتك','لقيتِك'],tr:['laʾaytak','laʾaytik'],en:'found you!',pic:'🙈'}, sari:{ar:['سريع','سريعة'],tr:['sarīʿ','sarīʿa'],en:'fast',pic:'⚡'}, nasem:{ar:'خلّينا نقسم',tr:'khallīna nʾassem',en:'let\'s share',pic:'🤲'},
  mhatta:{ar:'محطّة',tr:'mḥaṭṭa',en:'station / bus stop',pic:'🚏'}, nahr:{ar:'نهر',tr:'nahr',en:'river',pic:'🏞️'}, dughri:{ar:'دغري',tr:'dughri',en:'straight on',pic:'⬆️'}, shtaret:{ar:'شتريت',tr:'shtarēt',en:'I bought',pic:'🛍️'},
  khalas:{ar:'خلص',tr:'khalaṣ',en:'that\'s it / done',pic:'✅'}, baadbukra:{ar:'بعد بكرا',tr:'baʿd bukra',en:'day after tomorrow',pic:null}, hawa:{ar:'هوا',tr:'hawa',en:'wind',pic:'💨'}, taleta:{ar:'التلاتا',tr:'el-talēta',en:'Tuesday',pic:null},
  baaddahr:{ar:'بعد الضهر',tr:'baʿd el-ḍuhur',en:'afternoon',pic:'🌤️'}, kfuf:{ar:'كفوف',tr:'kfūf',en:'gloves',pic:'🧤'}, baqara:{ar:'بقرة',tr:'baʾara',en:'cow',pic:'🐄'}, kharuf:{ar:'خاروف',tr:'kharūf',en:'sheep',pic:'🐑'},
  djeje:{ar:'دجاجة',tr:'djēje',en:'chicken',pic:'🐔'}, hmar:{ar:'حمار',tr:'ḥmār',en:'donkey',pic:'🫏'}, hsan:{ar:'حصان',tr:'ḥṣān',en:'horse',pic:'🐴'}, asad:{ar:'أسد',tr:'asad',en:'lion',pic:'🦁'},
  fil:{ar:'فيل',tr:'fīl',en:'elephant',pic:'🐘'}, zarafe:{ar:'زرافة',tr:'zarāfe',en:'giraffe',pic:'🦒'}, dibb:{ar:'دبّ',tr:'dibb',en:'bear',pic:'🐻'}, saaden:{ar:'سعدان',tr:'saʿdēn',en:'monkey',pic:'🐒'},
  farashe:{ar:'فراشة',tr:'farāshe',en:'butterfly',pic:'🦋'}, nemle:{ar:'نملة',tr:'nemle',en:'ant',pic:'🐜'}, nahle:{ar:'نحلة',tr:'naḥle',en:'bee',pic:'🐝'}, difda:{ar:'ضفدعة',tr:'ḍifdaʿa',en:'frog',pic:'🐸'},
  salhafe:{ar:'سلحفاة',tr:'salḥafe',en:'turtle',pic:'🐢'}, hut:{ar:'حوت',tr:'ḥūt',en:'whale',pic:'🐋'}, dilfin:{ar:'دلفين',tr:'dilfīn',en:'dolphin',pic:'🐬'}, sartan:{ar:'سرطان',tr:'sarṭān',en:'crab',pic:'🦀'},
  akhtabut:{ar:'أخطبوط',tr:'akhṭabūṭ',en:'octopus',pic:'🐙'}, nijmebahr:{ar:'نجمة بحريّة',tr:'nijme baḥriyye',en:'starfish',pic:'⭐'}, batta:{ar:'بطّة',tr:'baṭṭa',en:'duck',pic:'🦆'}, fara:{ar:'فارة',tr:'fāra',en:'mouse',pic:'🐭'},
  hayye:{ar:'حيّة',tr:'ḥayye',en:'snake',pic:'🐍'}, nimer:{ar:'نمر',tr:'nimer',en:'tiger',pic:'🐯'}, bume:{ar:'بومة',tr:'bōme',en:'owl',pic:'🦉'}, hammem:{ar:'حمّام',tr:'ḥammēm',en:'bathroom',pic:'🛁'},
  sabune:{ar:'صابونة',tr:'ṣābūne',en:'soap',pic:'🧼'}, minshafe:{ar:'منشفة',tr:'manshafe',en:'towel',pic:'🧻'}, farshaye:{ar:'فرشاية سنان',tr:'farshāyet snēn',en:'toothbrush',pic:'🪥'}, maajun:{ar:'معجون',tr:'maʿjūn',en:'toothpaste',pic:'🦷'},
  ghassil:{ar:['غسّل إيديك','غسّلي إيديكي'],tr:['ghassil idēk','ghassli idēki'],en:'wash your hands',pic:'🧼'}, nadif:{ar:['نضيف','نضيفة'],tr:['naḍīf','naḍīfe'],en:'clean',pic:'✨'}, wesikh:{ar:['وسخ','وسخة'],tr:['wesikh','wiskha'],en:'dirty',pic:'💩'}, sukhn:{ar:'سخن',tr:'sukhn',en:'hot',pic:'🔥'},
  berid:{ar:'بارد',tr:'bērid',en:'cold',pic:'🧊'}, mkhadde:{ar:'مخدّة',tr:'mkhadde',en:'pillow',pic:'🛏️'}, hrem:{ar:'حرام',tr:'ḥrēm',en:'blanket',pic:'🛌'}, daw:{ar:'ضو',tr:'ḍaw',en:'light',pic:'💡'},
  atme:{ar:'عتمة',tr:'ʿatme',en:'dark',pic:'🌑'}, hilm:{ar:'حلم',tr:'ḥilm',en:'dream',pic:'💭'}, hkeye:{ar:'قصّة',tr:'ʾoṣṣa',en:'story',pic:'📖'}, bose:{ar:'بوسة',tr:'bōse',en:'kiss',pic:'😘'},
  hadne:{ar:'عبطة',tr:'ʿabṭa',en:'hug',pic:'🤗'}, naasan:{ar:['نعسان','نعسانة'],tr:['naʿsān','naʿsāne'],en:'sleepy',pic:'😴'}, nem:{ar:['نام','نامي'],tr:['nēm','nēmi'],en:'go to sleep',pic:'💤'}, liibe:{ar:'لعبة',tr:'liʿbe',en:'toy',pic:'🧸'},
  dabdub:{ar:'دبدوب',tr:'dabdūb',en:'teddy bear',pic:'🧸'}, balon:{ar:'بالون',tr:'balōn',en:'balloon',pic:'🎈'}, alwen:{ar:'ألوان',tr:'alwēn',en:'crayons',pic:'🖍️'},
  aswad:{ar:'أسود',tr:'aswad',en:'black',pic:'⚫'}, zahr:{ar:'زهر',tr:'zahr',en:'pink',pic:'🩷'}, orange:{ar:'أورانج',tr:'orange',en:'orange (colour)',pic:'🟠'}, mauve:{ar:'موف',tr:'mauve',en:'purple',pic:'🟣'},
  binny:{ar:'بنّي',tr:'binny',en:'brown',pic:'🟤'}, daira:{ar:'دايرة',tr:'dāʾira',en:'circle',pic:'⚪'}, mrabba:{ar:'مربّع',tr:'mrabbaʿ',en:'square',pic:'⬜'}, mthallath:{ar:'مثلّث',tr:'mthallath',en:'triangle',pic:'🔺'},
  nijme:{ar:'نجمة',tr:'nijme',en:'star',pic:'⭐'}, alb:{ar:'قلب',tr:'ʾalb',en:'heart',pic:'❤️'}, kbir:{ar:['كبير','كبيرة'],tr:['kbīr','kbīre'],en:'big',pic:'🐘'}, zghir:{ar:['زغير','زغيرة'],tr:['zghīr','zghīre'],en:'small',pic:'🐭'},
  tawil:{ar:['طويل','طويلة'],tr:['ṭawīl','ṭawīle'],en:'tall / long',pic:'🦒'}, asir:{ar:['قصير','قصيرة'],tr:['ʾaṣīr','ʾaṣīre'],en:'short',pic:null}, shway:{ar:'شوي',tr:'shway',en:'a little',pic:'🤏'}, jdid:{ar:['جديد','جديدة'],tr:['jdīd','jdīde'],en:'new',pic:'🆕'},
  atia:{ar:['عتيق','عتيقة'],tr:['ʿatīʾ','ʿatīʾa'],en:'old',pic:null}, malyen:{ar:['مليان','مليانة'],tr:['malyēn','malyēne'],en:'full',pic:null}, fadi:{ar:['فاضي','فاضية'],tr:['fāḍi','fāḍye'],en:'empty',pic:null}, tail:{ar:['تقيل','تقيلة'],tr:['tʾīl','tʾīle'],en:'heavy',pic:'🏋️'},
  fou:{ar:'فوق',tr:'fōʾ',en:'on top / up',pic:'⬆️'}, taht:{ar:'تحت',tr:'taḥt',en:'under',pic:'⬇️'}, juwwa:{ar:'جوّا',tr:'juwwa',en:'inside',pic:'📦'}, jamb:{ar:'جنب',tr:'jamb',en:'next to',pic:'↔️'},
  wara:{ar:'ورا',tr:'wara',en:'behind',pic:null}, banadura:{ar:'بندورة',tr:'banadūra',en:'tomato',pic:'🍅'}, khyara:{ar:'خيارة',tr:'khyāra',en:'cucumber',pic:'🥒'}, batata:{ar:'بطاطا',tr:'baṭāṭa',en:'potato',pic:'🥔'},
  jazara:{ar:'جزرة',tr:'jazara',en:'carrot',pic:'🥕'}, basal:{ar:'بصل',tr:'baṣal',en:'onion',pic:'🧅'}, shokola:{ar:'شوكولا',tr:'shokola',en:'chocolate',pic:'🍫'}, boza:{ar:'بوظة',tr:'bōẓa',en:'ice cream',pic:'🍦'},
  biskwit:{ar:'بسكويت',tr:'biskwīt',en:'biscuit',pic:'🍪'}, asirjuice:{ar:'عصير',tr:'ʿaṣīr',en:'juice',pic:'🧃'}, gato:{ar:'غاتو',tr:'gātō',en:'cake',pic:'🍰'}, sahn:{ar:'صحن',tr:'ṣaḥn',en:'plate',pic:'🍽️'},
  kibbeye:{ar:'كبّاية',tr:'kibbēye',en:'glass',pic:'🥛'}, maalaa:{ar:'معلقة',tr:'maʿlaʾa',en:'spoon',pic:'🥄'}, shoke:{ar:'شوكة',tr:'shōke',en:'fork',pic:'🍴'}, sekkine:{ar:'سكّينة',tr:'sekkīne',en:'knife',pic:'🔪'},
  trwia:{ar:'ترويقة',tr:'trwīʾa',en:'breakfast',pic:'🍳'}, ghada:{ar:'غدا',tr:'ghada',en:'lunch',pic:'🍲'}, asha:{ar:'عشا',tr:'ʿasha',en:'dinner',pic:'🍝'}, akl:{ar:'أكل',tr:'akl',en:'food',pic:'🍱'},
  kol:{ar:['كول','كلي'],tr:['kōl','kili'],en:'eat!',pic:'😋'}, shawarma:{ar:'شاورما',tr:'shawarma',en:'shawarma',pic:'🌯'}, kebbe:{ar:'كبّة',tr:'kebbe',en:'kibbeh',pic:'🧆'}, fattush:{ar:'فتّوش',tr:'fattūsh',en:'fattoush',pic:'🥗'},
  labne:{ar:'لبنة',tr:'labne',en:'labneh',pic:'🥣'}, zaatar:{ar:'زعتر',tr:'zaʿtar',en:'zaatar',pic:'🌿'}, menkhar:{ar:'منخار',tr:'menkhār',en:'nose',pic:'👃'}, dene:{ar:'دينة',tr:'dēne',en:'ear',pic:'👂'},
  sinn:{ar:'سنّ',tr:'sinn',en:'tooth',pic:'🦷'}, shaar:{ar:'شعر',tr:'shaʿr',en:'hair',pic:'💇'}, wejj:{ar:'وجّ',tr:'wejj',en:'face',pic:'🙂'}, batn:{ar:'بطن',tr:'baṭn',en:'tummy',pic:null},
  dahrb:{ar:'ضهر',tr:'ḍahr',en:'back',pic:null}, isba:{ar:'إصبع',tr:'iṣbaʿ',en:'finger',pic:'☝️'}, rkbe:{ar:'ركبة',tr:'rkbe',en:'knee',pic:'🦵'}, ktef:{ar:'كتف',tr:'ktēf',en:'shoulder',pic:null},
  byujaani:{ar:'بيوجعني',tr:'byūjaʿni',en:'it hurts',pic:'🤕'}, marid:{ar:['مريض','مريضة'],tr:['mariḍ','mariḍa'],en:'ill',pic:'🤒'}, dawa:{ar:'دوا',tr:'dawa',en:'medicine',pic:'💊'}, salamtak:{ar:['سلامتك','سلامتِك'],tr:['salamtak','salamtik'],en:'get well soon',pic:'💐'},
  harara:{ar:'حرارة',tr:'ḥarāra',en:'fever',pic:'🌡️'}, shuf:{ar:['شوف','شوفي'],tr:['shūf','shūfi'],en:'look!',pic:'👀'}, smaa:{ar:['اسمع','اسمعي'],tr:['smaʿ','smaʿi'],en:'listen!',pic:'👂'}, shimm:{ar:['شمّ','شمّي'],tr:['shimm','shimmi'],en:'smell!',pic:'👃'},
  dou:{ar:['دوق','دوقي'],tr:['dūʾ','dūʾi'],en:'taste!',pic:'👅'}, rous:{ar:['ارقص','ارقصي'],tr:['ruʾṣ','ruʾṣi'],en:'dance!',pic:'💃'}, sbah:{ar:['اسبح','اسبحي'],tr:['sbaḥ','sbaḥi'],en:'swim!',pic:'🏊'},
  saffe:{ar:['صفّق','صفّقي'],tr:['ṣaffeʾ','ṣaffʾi'],en:'clap!',pic:'👏'}, tlaa:{ar:['اطلع','اطلعي'],tr:['ṭlaʿ','ṭlaʿi'],en:'climb up!',pic:'🧗'}, nzal:{ar:['انزل','انزلي'],tr:['nzal','nzali'],en:'come down!',pic:'⬇️'}, walad:{ar:'ولد',tr:'walad',en:'boy',pic:'👦'},
  binet:{ar:'بنت',tr:'binet',en:'girl',pic:'👧'}, rajjel:{ar:'رجّال',tr:'rajjēl',en:'man',pic:'👨'}, mara:{ar:'مرا',tr:'mara',en:'woman',pic:'👩'}, bebe:{ar:'بيبي',tr:'bēbē',en:'baby',pic:'👶'},
  hakim:{ar:['حكيم','حكيمة'],tr:['ḥakīm','ḥakīme'],en:'doctor',pic:'🧑‍⚕️'}, shurti:{ar:'بوليس',tr:'polīs',en:'police officer',pic:'👮'}, tabbakh:{ar:['طبّاخ','طبّاخة'],tr:['ṭabbākh','ṭabbākha'],en:'cook',pic:'🧑‍🍳'}, falleh:{ar:['فلّاح','فلّاحة'],tr:['fallēḥ','fallēḥa'],en:'farmer',pic:'🧑‍🌾'},
  shofer:{ar:['شوفير','شوفيرة'],tr:['shofēr','shofēra'],en:'driver',pic:'🚕'}, ghinniyye:{ar:'غنّية',tr:'ghinniyye',en:'song',pic:'🎵'}, musia:{ar:'موسيقى',tr:'mūsīʾa',en:'music',pic:'🎶'}, tabl:{ar:'طبل',tr:'ṭabl',en:'drum',pic:'🥁'},
  oudmusic:{ar:'عود',tr:'ʿūd',en:'oud',pic:'🪕'}, ghanni:{ar:'غنّي',tr:'ghanni',en:'sing!',pic:'🎤'}, bhebb:{ar:'بحبّ',tr:'bḥebb',en:'I like / I love',pic:'❤️'}, mabhebb:{ar:'ما بحبّ',tr:'ma bḥebb',en:'I don\'t like',pic:'👎'},
  shubtehebb:{ar:['شو بتحبّ؟','شو بتحبّي؟'],tr:['shu bteḥebb?','shu bteḥebbi?'],en:'what do you like?',pic:null}, anakamen:{ar:'أنا كمان',tr:'ana kamēn',en:'me too',pic:'🙌'}, wenta:{ar:['وإنت؟','وإنتِ؟'],tr:['w enta?','w enti?'],en:'and you?',pic:null}, mabruk:{ar:'مبروك',tr:'mabrūk',en:'congratulations',pic:'🎊'},
  hdiyye:{ar:'هديّة',tr:'hdiyye',en:'present',pic:'🎁'}, eid:{ar:'عيد',tr:'ʿīd',en:'holiday / feast',pic:'🎉'}, hafle:{ar:'حفلة',tr:'ḥafle',en:'party',pic:'🥳'}, shamaa:{ar:'شمعة',tr:'shamʿa',en:'candle',pic:'🕯️'},
  salon:{ar:'صالون',tr:'ṣālōn',en:'living room',pic:'🛋️'}, kanabeye:{ar:'كنباية',tr:'kanabēye',en:'sofa',pic:'🛋️'}, kirse:{ar:'كرسي',tr:'kirse',en:'chair',pic:'🪑'}, tawle:{ar:'طاولة',tr:'ṭāwle',en:'table',pic:null},
  shebbek:{ar:'شبّاك',tr:'shebbēk',en:'window',pic:'🪟'}, khzene:{ar:'خزانة',tr:'khzēne',en:'wardrobe',pic:'🚪'}, mreye:{ar:'مراية',tr:'mrēye',en:'mirror',pic:'🪞'}, sejjede:{ar:'سجّادة',tr:'sejjēde',en:'rug',pic:null},
  lambe:{ar:'لمبة',tr:'lambe',en:'lamp',pic:'💡'}, sura:{ar:'صورة',tr:'ṣūra',en:'picture',pic:'🖼️'}, brrad:{ar:'برّاد',tr:'brrād',en:'fridge',pic:'🧊'}, frun:{ar:'فرن',tr:'frun',en:'oven',pic:'🔥'},
  tanjara:{ar:'طنجرة',tr:'ṭanjara',en:'pot',pic:'🍲'}, annine:{ar:'قنّينة',tr:'ʾannīne',en:'bottle',pic:'🍼'}, hanafiyye:{ar:'حنفيّة',tr:'ḥanafiyye',en:'tap',pic:'🚰'}, saedni:{ar:['ساعدني','ساعديني'],tr:['sēʿedni','sēʿdīni'],en:'help me',pic:'🙏'},
  rattib:{ar:['رتّب','رتّبي'],tr:['rattib','rattbi'],en:'tidy up',pic:'🧹'}, hutt:{ar:['حطّ','حطّي'],tr:['ḥuṭṭ','ḥuṭṭi'],en:'put',pic:null}, ftah:{ar:['افتح','افتحي'],tr:['ftaḥ','ftaḥi'],en:'open',pic:'🔓'}, sakker:{ar:['سكّر','سكّري'],tr:['sakker','sakkri'],en:'close',pic:'🔒'},
  lbes:{ar:['البس','البسي'],tr:['lbēs','lbsi'],en:'get dressed',pic:'👕'}, amis:{ar:'قميص',tr:'ʾamīṣ',en:'shirt',pic:'👔'}, bantalon:{ar:'بنطلون',tr:'banṭalōn',en:'trousers',pic:'👖'}, kalset:{ar:'كلسات',tr:'kalsēt',en:'socks',pic:'🧦'},
  misht:{ar:'مشط',tr:'mishṭ',en:'comb',pic:null}, ghayran:{ar:['غيران','غيرانة'],tr:['ghayrān','ghayrāne'],en:'jealous',pic:'😒'}, ghadban:{ar:['معصّب','معصّبة'],tr:['mʿaṣṣab','mʿaṣṣbe'],en:'angry',pic:'😠'}, mistahi:{ar:['مستحي','مستحية'],tr:['mistaḥi','mistaḥye'],en:'shy',pic:'😳'},
  dajran:{ar:['ضجران','ضجرانة'],tr:['ḍajrān','ḍajrāne'],en:'bored',pic:'🥱'}, mithammes:{ar:['متحمّس','متحمّسة'],tr:['mitḥammes','mitḥamse'],en:'excited',pic:'🤩'}, mishasdi:{ar:'مش قصدي',tr:'mish ʾaṣdi',en:'I didn\'t mean it',pic:null},
  matizaal:{ar:['ما تزعل','ما تزعلي'],tr:['ma tizʿal','ma tizʿali'],en:'don\'t be upset',pic:null}, mafimishkle:{ar:'ما في مشكلة',tr:'ma fi mishkle',en:'no problem',pic:'👍'}, tsalahna:{ar:'تصالحنا',tr:'tṣālaḥna',en:'we made up',pic:'🤝'}, shufik:{ar:['شو فيك؟','شو فيكي؟'],tr:['shu fīk?','shu fīki?'],en:'what\'s wrong?',pic:null},
  shusar:{ar:'شو صار؟',tr:'shu ṣār?',en:'what happened?',pic:null}, matkhaf:{ar:['ما تخاف','ما تخافي'],tr:['ma tkhāf','ma tkhāfi'],en:'don\'t be scared',pic:null}, anahon:{ar:'أنا هون',tr:'ana hōn',en:'I\'m here',pic:'🫂'}, kellshi:{ar:'كلّ شي منيح',tr:'kell shi mnīḥ',en:'everything\'s fine',pic:'👌'},
  ktirhelo:{ar:['كتير حلو','كتير حلوة'],tr:['ktīr ḥelo','ktīr ḥelwe'],en:'really nice',pic:'😍'}, shater:{ar:['شاطر','شاطرة'],tr:['shāṭer','shāṭra'],en:'clever',pic:'🧠'}, bijannen:{ar:'بيجنّن',tr:'bijannen',en:'amazing',pic:'🤩'},
  ajabni:{ar:'عجبني',tr:'ʿajabni',en:'I liked it',pic:'👍'}, taalaanna:{ar:['تعا لعنّا','تعي لعنّا'],tr:['taʿa la ʿanna','taʿi la ʿanna'],en:'come to our house',pic:'🏠'}, fiyyaktiji:{ar:['فيك تجي؟','فيكي تجي؟'],tr:['fiyyak tiji?','fiyyik tiji?'],en:'can you come?',pic:null}, akid:{ar:'أكيد',tr:'akīd',en:'of course',pic:'✅'},
  yimken:{ar:'يمكن',tr:'yimken',en:'maybe',pic:'🤷'}, ahlawsahla:{ar:'أهلا وسهلا',tr:'ahla w sahla',en:'welcome',pic:'🤗'}, futbol:{ar:'فوتبول',tr:'fūtbōl',en:'football',pic:'⚽'}, sbeha:{ar:'سباحة',tr:'sbēḥa',en:'swimming',pic:'🏊'},
  bisklet:{ar:'بسكليت',tr:'bisklēt',en:'bike',pic:'🚲'}, rakd:{ar:'ركض',tr:'rakḍ',en:'running',pic:'🏃'}, basket:{ar:'باسكت',tr:'basket',en:'basketball',pic:'🏀'}, rasm:{ar:'رسم',tr:'rasm',en:'drawing',pic:'🎨'},
  iraye:{ar:'قراية',tr:'ʾirāye',en:'reading',pic:'📚'}, tabkh:{ar:'طبخ',tr:'ṭabkh',en:'cooking',pic:'🍳'}, raas:{ar:'رقص',tr:'raʾṣ',en:'dancing',pic:'💃'}, alaabvideo:{ar:'ألعاب ڤيديو',tr:'ʾalʿāb video',en:'video games',pic:'🎮'},
  farii:{ar:'فريق',tr:'farīʾ',en:'team',pic:'👥'}, gol:{ar:'غول',tr:'gōl',en:'goal',pic:'🥅'}, shut:{ar:['شوط','شوطي'],tr:['shūṭ','shūṭi'],en:'kick!',pic:'🦶'},
  hakam:{ar:'حكم',tr:'ḥakam',en:'referee',pic:'🧑‍⚖️'}, baarif:{ar:'بعرف',tr:'baʿrif',en:'I can / I know how',pic:'💪'}, mabaarif:{ar:'ما بعرف',tr:'ma baʿrif',en:'I can\'t',pic:null}, jarrib:{ar:['جرّب','جرّبي'],tr:['jarrib','jarrbi'],en:'try!',pic:'🎯'},
  saabe:{ar:'صعبة',tr:'ṣaʿbe',en:'hard',pic:'😓'}, sahle:{ar:'سهلة',tr:'sahle',en:'easy',pic:'😎'}, rbehna:{ar:'ربحنا',tr:'rbeḥna',en:'we won',pic:'🏆'}, khsirna:{ar:'خسرنا',tr:'khsirna',en:'we lost',pic:'😞'}, yaatik:{ar:['يعطيك العافية','يعطيكي العافية'],tr:['yiʿṭīk el-ʿāfye','yiʿṭīki el-ʿāfye'],en:'well done, good effort',pic:'👏'}, kamenshway:{ar:'كمان شوي',tr:'kamēn shway',en:'a bit more',pic:null}, tayyara:{ar:'طيّارة',tr:'ṭayyāra',en:'plane',pic:'✈️'},
  train:{ar:'ترين',tr:'train',en:'train',pic:'🚆'}, babur:{ar:'بابور',tr:'bābūr',en:'ship',pic:'🚢'}, taxi:{ar:'تاكسي',tr:'tēksi',en:'taxi',pic:'🚕'},
  matar:{ar:'مطار',tr:'maṭār',en:'airport',pic:'🛫'}, passport:{ar:'باسبور',tr:'passport',en:'passport',pic:'🛂'}, tazkara:{ar:'تيكيت',tr:'tikit',en:'ticket',pic:'🎫'}, safar:{ar:'سفر',tr:'safar',en:'trip',pic:'🧳'},
  kharita:{ar:'خريطة',tr:'kharīṭa',en:'map',pic:'🗺️'}, mustashfa:{ar:'مستشفى',tr:'mestashfa',en:'hospital',pic:'🏥'}, mataam:{ar:'مطعم',tr:'maṭʿam',en:'restaurant',pic:'🍽️'}, saydaliyye:{ar:'صيدليّة',tr:'ṣaydaliyye',en:'pharmacy',pic:'💊'},
  furn:{ar:'فرن',tr:'furn',en:'bakery',pic:'🥖'}, maktabe:{ar:'مكتبة',tr:'maktabe',en:'library',pic:'📚'}, barrem:{ar:['برّم','برّمي'],tr:['barrem','barrmi'],en:'turn',pic:'↪️'}, waaf:{ar:['وقاف','وقافي'],tr:['wʾaf','wʾafi'],en:'stop!',pic:'🛑'},
  arib:{ar:'قريب',tr:'ʾarīb',en:'near',pic:null}, baid:{ar:'بعيد',tr:'baʿīd',en:'far',pic:null}, zawye:{ar:'عالزاوية',tr:'ʿal-zāwye',en:'at the corner',pic:'📐'}, lebnen:{ar:'لبنان',tr:'Lebnēn',en:'Lebanon',pic:'🇱🇧'},
  bayrut:{ar:'بيروت',tr:'Bayrūt',en:'Beirut',pic:'🏙️'}, arze:{ar:'أرزة',tr:'arze',en:'cedar tree',pic:'🌲'}, alamflag:{ar:'علم',tr:'ʿalam',en:'flag',pic:'🚩'}, dayaa:{ar:'ضيعة',tr:'ḍayʿa',en:'village',pic:'🏡'},
  n11:{ar:'حدعش',tr:'ḥdaʿsh',en:'eleven',pic:'num:11'}, n12:{ar:'تنعش',tr:'tnaʿsh',en:'twelve',pic:'num:12'}, n13:{ar:'تلطعش',tr:'tlaṭṭaʿsh',en:'thirteen',pic:'num:13'}, n14:{ar:'أربعطعش',tr:'arbaʿṭaʿsh',en:'fourteen',pic:'num:14'},
  n15:{ar:'خمسطعش',tr:'khamesṭaʿsh',en:'fifteen',pic:'num:15'}, n16:{ar:'ستّعش',tr:'sittaʿsh',en:'sixteen',pic:'num:16'}, n17:{ar:'سبعطعش',tr:'sabaʿṭaʿsh',en:'seventeen',pic:'num:17'}, n18:{ar:'تمنطعش',tr:'tmenṭaʿsh',en:'eighteen',pic:'num:18'},
  n19:{ar:'تسعطعش',tr:'tisaʿṭaʿsh',en:'nineteen',pic:'num:19'}, n20:{ar:'عشرين',tr:'ʿishrīn',en:'twenty',pic:'num:20'}, sea:{ar:'ساعة',tr:'sēʿa',en:'hour / clock',pic:'🕐'}, addeshsea:{ar:'قدّيش الساعة؟',tr:'addēsh el-sēʿa?',en:'what time is it?',pic:'⏰'},
  wnuss:{ar:'ونصّ',tr:'w nuṣṣ',en:'and a half',pic:'🕧'}, wrube:{ar:'وربع',tr:'w rubʿ',en:'and a quarter',pic:'🕒'}, daia:{ar:'دقيقة',tr:'daʾīʾa',en:'minute',pic:'⏱️'}, arbaa:{ar:'الأربعا',tr:'el-arbaʿa',en:'Wednesday',pic:null},
  khamis:{ar:'الخميس',tr:'el-khamīs',en:'Thursday',pic:null}, bakkir:{ar:'بكّير',tr:'bakkīr',en:'early',pic:'🌅'}, mitakhkhar:{ar:['متأخّر','متأخّرة'],tr:['mitʾakhkhar','mitʾakhkhra'],en:'late',pic:'⌛'}, dayman:{ar:'دايماً',tr:'dāyman',en:'always',pic:'♾️'},
  sef:{ar:'صيف',tr:'ṣēf',en:'summer',pic:'☀️'}, kharif:{ar:'خريف',tr:'kharīf',en:'autumn',pic:'🍂'}, rabi:{ar:'ربيع',tr:'rabīʿ',en:'spring',pic:'🌷'}, elshiti:{ar:'الشتي',tr:'el-shiti',en:'winter',pic:'⛄'},
  utle:{ar:'عطلة',tr:'ʿuṭle',en:'holiday',pic:'🏖️'}, battikh:{ar:'بطّيخ',tr:'baṭṭīkh',en:'watermelon',pic:'🍉'}, khukh:{ar:'خوخ',tr:'khūkh',en:'peach',pic:'🍑'}, injas:{ar:'إنجاص',tr:'injāṣ',en:'pear',pic:'🍐'},
  kraz:{ar:'كرز',tr:'kraz',en:'cherries',pic:'🍒'}, mishmish:{ar:'مشمش',tr:'mishmish',en:'apricot',pic:null}, khass:{ar:'خسّ',tr:'khass',en:'lettuce',pic:'🥬'}, lubye:{ar:'لوبيا',tr:'lūbye',en:'green beans',pic:'🫛'},
  betinjen:{ar:'بيتنجان',tr:'bētinjēn',en:'aubergine',pic:'🍆'}, flayfle:{ar:'فليفلة',tr:'flayfle',en:'pepper',pic:'🫑'}, arnabit:{ar:'قرنبيط',tr:'arnabīṭ',en:'cauliflower',pic:'🥦'}, baadunis:{ar:'بقدونس',tr:'baʾdūnis',en:'parsley',pic:'🌿'},
  naana:{ar:'نعنع',tr:'naʿnaʿ',en:'mint',pic:'🌱'}, zetun:{ar:'زيتون',tr:'zētūn',en:'olives',pic:'🫒'}, loz:{ar:'لوز',tr:'lōz',en:'almonds',pic:'🌰'}, fistu:{ar:'فستق',tr:'fistuʾ',en:'pistachios',pic:'🥜'},
  knefe:{ar:'كنافة',tr:'knēfe',en:'knafeh',pic:'🍮'}, baalewe:{ar:'بقلاوة',tr:'baʾlēwe',en:'baklava',pic:'🥮'}, maamul:{ar:'معمول',tr:'maʿmūl',en:'date & nut biscuits',pic:'🍪'}, asal:{ar:'عسل',tr:'ʿasal',en:'honey',pic:'🍯'},
  sukkar:{ar:'سكّر',tr:'sukkar',en:'sugar',pic:'🧂'}, meleh:{ar:'مالح',tr:'mēleḥ',en:'salty',pic:'🧂'}, hamed:{ar:'حامض',tr:'ḥāmeḍ',en:'sour',pic:'🍋'}, murr:{ar:'مرّ',tr:'murr',en:'bitter',pic:'☕'},
  harr:{ar:'حارّ',tr:'ḥārr',en:'spicy',pic:'🌶️'}, taza:{ar:'طازة',tr:'ṭāza',en:'fresh',pic:'🥬'},
};


// Conversation turns: q = what the character says, a = what the child answers (word id or phrase), check = what the speaking check listens for
window.YN_COURSE = [
 {id:1,name:'Beginner',desc:'First words and short phrases',units:[
  {id:1,title:'Hello!',color:'#14A39A',icon:'👋',sticker:{e:'👋',n:'Hello Hero'},lessons:[
   {title:'Hello & how are you',words:['marhaba','kifak','mnih','hamdella','bonjour'],talk:[
     {q:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'How are you?'},a:'mnih',after:'Mnīḥ? Elḥamdella! Me too!'},
     {q:{ar:'مرحبا!',tr:'marḥaba!',en:'Hello!'},a:'marhaba',after:'Marḥaba! So happy to see you!'}]},
   {title:'Names & goodbye',words:['ismi','shuismak','tsharrafna','bye','maasalame'],talk:[
     {q:{ar:['شو إسمك؟','شو إسمِك؟'],tr:['shu ismak?','shu ismik?'],en:"What's your name?"},a:{ar:'إسمي {name}',tr:'ismi {name}'},check:{ar:'إسمي',tr:'ismi'},after:'Tsharrafna, {name}!'},
     {q:{ar:'يلّا باي!',tr:'yalla bye!',en:'Bye!'},a:'bye',after:'See you soon!'}]},
   {title:'Morning & night',words:['sabah','sabahnour','masa','tisbah','fiq'],talk:[
     {q:{ar:'صباح الخير!',tr:'ṣabāḥ el-khēr!',en:'Good morning!'},a:'sabahnour',after:'Bravo! That is the perfect reply!'},
     {q:{ar:'مسا الخير!',tr:'masa el-khēr!',en:'Good evening!'},a:'masa',after:'Masa el-khēr to you too!'}]},
   {title:'Polite words',words:['shukran','eh','la'],talk:[
     {q:{ar:'',tr:'🎁',en:'Bisseh gives you a present!'},a:'shukran',after:'Bisseh says: walaw! Miaow!'}]},
   {title:'How do you feel?',words:['mabsut','zalan','taban','juan','atshan'],talk:[
     {q:{ar:['كيفك؟','كيفِك؟'],tr:['kīfak?','kīfik?'],en:'How are you? (say you are happy)'},a:'mabsut',after:'Yay! I am happy too!'},
     {q:{ar:['جوعان؟','جوعانة؟'],tr:['jūʿān?','jūʿāne?'],en:'Are you hungry?'},a:'eh',after:'Me too! Let us eat soon!'}]}
  ]},
  {id:2,title:'My family',color:'#E5484D',icon:'🏡',sticker:{e:'🏡',n:'Family Star'},lessons:[
   {title:'Mum, dad & me',words:['mama','baba','khayyi','ikhti','ana'],talk:[
     {q:{ar:'',tr:'👩',en:'Who is this? Say it in Lebanese!'},a:'mama',after:'Yes, māma!'},
     {q:{ar:'',tr:'👨',en:'And who is this?'},a:'baba',after:'Bravo, bāba!'}]},
   {title:'Big family',words:['teta','jeddo','ammo','khalto','amto'],talk:[
     {q:{ar:'',tr:'👵',en:'Who is this?'},a:'teta',after:'Teta! She makes the best food!'},
     {q:{ar:'',tr:'👴',en:'And who is this?'},a:'jeddo',after:'Jiddo! He tells funny stories!'}]},
   {title:'Who is this?',words:['habibi','hayda','hayde','minhayda','hawde'],talk:[
     {q:{ar:'مين هيدا؟ 👴',tr:'mīn hayda? 👴',en:'Who is this?'},a:{ar:'هيدا جدّو',tr:'hayda jiddo'},after:'Yes! Hayda jiddo!'},
     {q:{ar:'مين هيدي؟ 👵',tr:'mīn hayde? 👵',en:'Who is this?'},a:{ar:'هيدي تيتا',tr:'hayde teta'},after:'Bravo! Hayde teta!'}]},
   {title:'At home',words:['bet','uda','takhet','matbakh','beb'],talk:[
     {q:{ar:'شو هيدا؟ 🛏️',tr:'shu hayda? 🛏️',en:'What is this?'},a:'takhet',after:'Yes, a takhet. Sleepy time!'},
     {q:{ar:'شو هيدا؟ 🏠',tr:'shu hayda? 🏠',en:'What is this?'},a:'bet',after:'Bēt! Our home!'}]},
   {title:'Pets',words:['bisse','kalb','asfour','samake','arnab'],talk:[
     {q:{ar:'شو هيدي؟ 🐱',tr:'shu hayde? 🐱',en:'What is this?'},a:'bisse',after:'Bisse, like Bisseh! Miaow!'},
     {q:{ar:'شو هيدا؟ 🐶',tr:'shu hayda? 🐶',en:'What is this?'},a:'kalb',after:'A kalb! Woof!'}]}
  ]},
  {id:3,title:'Yummy food',color:'#FF9F1C',icon:'🍎',sticker:{e:'🍎',n:'Yummy Champ'},lessons:[
   {title:'Breakfast',words:['khebz','mayy','halib','jebne','bed'],talk:[
     {q:{ar:'شو هيدا؟ 🍞',tr:'shu hayda? 🍞',en:'What is this?'},a:'khebz',after:'Khobez! Fresh bread!'},
     {q:{ar:'شو هيدي؟ 🧀',tr:'shu hayde? 🧀',en:'What is this?'},a:'jebne',after:'Jibny! Yummy cheese!'}]},
   {title:'Fruit',words:['tiffaha','moze','laymuna','enab','frez'],talk:[
     {q:{ar:'شو هيدي؟ 🍎',tr:'shu hayde? 🍎',en:'What is this?'},a:'tiffaha',after:'A red tiffāḥa!'},
     {q:{ar:'شو هيدي؟ 🍌',tr:'shu hayde? 🍌',en:'What is this?'},a:'moze',after:'A mōze! Monkeys love it!'}]},
   {title:'Lebanese food',words:['manoushe','hummus','falafel','kaake','tabboule'],talk:[
     {q:{ar:'شو هيدي؟ 🫓',tr:'shu hayde? 🫓',en:'What is this?'},a:'manoushe',after:"Man'ūshe! Lebanon's favourite breakfast!"},
     {q:{ar:'شو هيدا؟ 🧆',tr:'shu hayda? 🧆',en:'What is this?'},a:'falafel',after:'Falāfel! Crunchy!'}]},
   {title:'I want…',words:['baddi','baddak','tfaddal','mabaddi','kamen'],talk:[
     {q:{ar:['بدّك مَي؟','بدِّك مَي؟'],tr:['baddak mayy?','baddik mayy?'],en:'Do you want water? (say yes)'},a:{ar:'إي، بدّي مَي',tr:'ē, baddi mayy'},check:{ar:'بدي مي',tr:'baddi mayy'},after:'Tfaḍḍal! Here is your water 💧'},
     {q:{ar:['بدّك حليب؟','بدِّك حليب؟'],tr:['baddak ḥalīb?','baddik ḥalīb?'],en:'Do you want milk? (say no thanks)'},a:{ar:'لأ، شكراً',tr:'laʾ, shukran'},check:{ar:'شكرا',tr:'shukran'},after:'Okay, no milk!'}]},
   {title:'Tasty!',words:['zeki','ktir','shbiet','sahtein','helo'],talk:[
     {q:{ar:'كيف الأكل؟',tr:'kīf el-akl?',en:'How is the food?'},a:{ar:'كتير طيّب!',tr:'ktīr ṭayyib!'},check:{ar:'طيّب',tr:'tayyib'},after:'Ṣaḥtein! Enjoy!'},
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
   {title:'My body',words:['ras','ein','id','ijr','timm'],talk:[
     {q:{ar:'شو هيدي؟ 👁️',tr:'shu hayde? 👁️',en:'What is this?'},a:'ein',after:'ʿĒn! Your eye!'},
     {q:{ar:'شو هيدي؟ 🦶',tr:'shu hayde? 🦶',en:'What is this?'},a:'ijr',after:'Ijr! Your foot!'}]},
   {title:'Let us play!',words:['nelab','tabe','barra','shams','amar'],talk:[
     {q:{ar:'يلّا نلعب؟',tr:'yalla nelʿab?',en:"Shall we play?"},a:{ar:'إي، يلّا!',tr:'ē, yalla!'},check:{ar:'يلا',tr:'yalla'},after:'Yay! Yalla!'},
     {q:{ar:'وين الطابة؟',tr:'wēn el-ṭābe?',en:'Where is the ball?'},a:'barra',after:'Barra! Outside in the shames!'}]}
  ]},
  {id:5,title:'Animals',color:'#20C4B6',icon:'🐾',sticker:{e:'🐾',n:'Animal Friend'},lessons:[
   {title:'On the farm',words:['baqara','kharuf','djeje','hmar','hsan'],talk:[
     {q:{ar:'شو هيدي؟ 🐄',tr:'shu hayde? 🐄',en:'What is this?'},a:'baqara',after:'Yes! Baʾara!'},
     {q:{ar:'شو هيدا؟ 🐑',tr:'shu hayda? 🐑',en:'What is this?'},a:'kharuf',after:'Bravo! Kharūf!'}]},
   {title:'At the zoo',words:['asad','fil','zarafe','dibb','saaden'],talk:[
     {q:{ar:'شو هيدا؟ 🦁',tr:'shu hayda? 🦁',en:'What is this?'},a:'asad',after:'Yes! Asad!'},
     {q:{ar:'شو هيدا؟ 🐘',tr:'shu hayda? 🐘',en:'What is this?'},a:'fil',after:'Bravo! Fīl!'}]},
   {title:'Little creatures',words:['farashe','nemle','nahle','difda','salhafe'],talk:[
     {q:{ar:'شو هيدي؟ 🦋',tr:'shu hayde? 🦋',en:'What is this?'},a:'farashe',after:'Yes! Farāshe!'},
     {q:{ar:'شو هيدي؟ 🐜',tr:'shu hayde? 🐜',en:'What is this?'},a:'nemle',after:'Bravo! Nemle!'}]},
   {title:'In the sea',words:['hut','dilfin','sartan','akhtabut','nijmebahr'],talk:[
     {q:{ar:'شو هيدا؟ 🐋',tr:'shu hayda? 🐋',en:'What is this?'},a:'hut',after:'Yes! Ḥūt!'},
     {q:{ar:'شو هيدا؟ 🐬',tr:'shu hayda? 🐬',en:'What is this?'},a:'dilfin',after:'Bravo! Dilfīn!'}]},
   {title:'More animals',words:['batta','fara','hayye','nimer','bume'],talk:[
     {q:{ar:'شو هيدي؟ 🦆',tr:'shu hayde? 🦆',en:'What is this?'},a:'batta',after:'Yes! Baṭṭa!'},
     {q:{ar:'شو هيدي؟ 🐭',tr:'shu hayde? 🐭',en:'What is this?'},a:'fara',after:'Bravo! Fāra!'}]}
  ]},
  {id:6,title:'Bath & bedtime',color:'#3495F5',icon:'🛁',sticker:{e:'🛁',n:'Sleepy Star'},lessons:[
   {title:'Bath time',words:['hammem','sabune','minshafe','farshaye','maajun'],talk:[
     {q:{ar:'شو هيدا؟ 🛁',tr:'shu hayda? 🛁',en:'What is this?'},a:'hammem',after:'Yes! Ḥammēm!'},
     {q:{ar:'شو هيدي؟ 🧼',tr:'shu hayde? 🧼',en:'What is this?'},a:'sabune',after:'Bravo! Ṣābūne!'}]},
   {title:'Clean & dirty',words:['ghassil','nadif','wesikh','sukhn','berid'],talk:[
     {q:{ar:'',tr:'🔥',en:'How do you say “hot”?'},a:'sukhn',after:'Yes! Sukhn!'},
     {q:{ar:'',tr:'🧊',en:'How do you say “cold”?'},a:'berid',after:'Bravo! Bērid!'}]},
   {title:'In my bed',words:['mkhadde','hrem','daw','atme','hilm'],talk:[
     {q:{ar:'شو هيدي؟ 🛏️',tr:'shu hayde? 🛏️',en:'What is this?'},a:'mkhadde',after:'Yes! Mkhadde!'},
     {q:{ar:'شو هيدا؟ 🛌',tr:'shu hayda? 🛌',en:'What is this?'},a:'hrem',after:'Bravo! Ḥrēm!'}]},
   {title:'Bedtime story',words:['hkeye','bose','hadne','naasan','nem'],talk:[
     {q:{ar:'',tr:'📖',en:'How do you say “story”?'},a:'hkeye',after:'Yes! ʾOṣṣa!'},
     {q:{ar:'',tr:'😘',en:'How do you say “kiss”?'},a:'bose',after:'Bravo! Bōse!'}]},
   {title:'My toys',words:['liibe','dabdub','balon','alwen'],talk:[
     {q:{ar:'شو هيدي؟ 🧸',tr:'shu hayde? 🧸',en:'What is this?'},a:'liibe',after:'Yes! Liʿbe!'},
     {q:{ar:'شو هيدا؟ 🧸',tr:'shu hayda? 🧸',en:'What is this?'},a:'dabdub',after:'Bravo! Dabdūb!'}]}
  ]},
  {id:7,title:'Shapes, sizes & places',color:'#A66BEF',icon:'🔷',sticker:{e:'🔷',n:'Shape Master'},lessons:[
   {title:'More colours',words:['aswad','zahr','orange','mauve','binny'],talk:[
     {q:{ar:'',tr:'⚫',en:'How do you say “black”?'},a:'aswad',after:'Yes! Aswad!'},
     {q:{ar:'',tr:'🩷',en:'How do you say “pink”?'},a:'zahr',after:'Bravo! Zahr!'}]},
   {title:'Shapes',words:['daira','mrabba','mthallath','nijme','alb'],talk:[
     {q:{ar:'شو هيدي؟ ⚪',tr:'shu hayde? ⚪',en:'What is this?'},a:'daira',after:'Yes! Dāʾira!'},
     {q:{ar:'شو هيدا؟ ⬜',tr:'shu hayda? ⬜',en:'What is this?'},a:'mrabba',after:'Bravo! Mrabbaʿ!'}]},
   {title:'Big & small',words:['kbir','zghir','tawil','asir','shway'],talk:[
     {q:{ar:'',tr:'🤏',en:'How do you say “a little”?'},a:'shway',after:'Yes! Shway!'},
     {q:{ar:'',tr:'🐘',en:'How do you say “big”?'},a:'kbir',after:'Bravo! Perfect!'}]},
   {title:'Opposites',words:['jdid','atia','malyen','fadi','tail'],talk:[
     {q:{ar:'',tr:'🆕',en:'How do you say “new”?'},a:'jdid',after:'Bravo! Perfect!'},
     {q:{ar:'',tr:'💬',en:'How do you say “old”?'},a:'atia',after:'Bravo! Perfect!'}]},
   {title:'Where is it?',words:['fou','taht','juwwa','jamb','wara'],talk:[
     {q:{ar:'',tr:'⬆️',en:'How do you say “on top / up”?'},a:'fou',after:'Yes! Fōʾ!'},
     {q:{ar:'',tr:'⬇️',en:'How do you say “under”?'},a:'taht',after:'Bravo! Taḥt!'}]}
  ]},
  {id:8,title:'Food & table',color:'#FF9638',icon:'🥕',sticker:{e:'🥕',n:'Little Chef'},lessons:[
   {title:'Vegetables',words:['banadura','khyara','batata','jazara','basal'],talk:[
     {q:{ar:'شو هيدي؟ 🍅',tr:'shu hayde? 🍅',en:'What is this?'},a:'banadura',after:'Yes! Banadūra!'},
     {q:{ar:'شو هيدي؟ 🥒',tr:'shu hayde? 🥒',en:'What is this?'},a:'khyara',after:'Bravo! Khyāra!'}]},
   {title:'Treats',words:['shokola','boza','biskwit','asirjuice','gato'],talk:[
     {q:{ar:'شو هيدا؟ 🍫',tr:'shu hayda? 🍫',en:'What is this?'},a:'shokola',after:'Yes! Shokola!'},
     {q:{ar:'شو هيدي؟ 🍦',tr:'shu hayde? 🍦',en:'What is this?'},a:'boza',after:'Bravo! Bōẓa!'}]},
   {title:'On the table',words:['sahn','kibbeye','maalaa','shoke','sekkine'],talk:[
     {q:{ar:'شو هيدا؟ 🍽️',tr:'shu hayda? 🍽️',en:'What is this?'},a:'sahn',after:'Yes! Ṣaḥn!'},
     {q:{ar:'شو هيدي؟ 🥛',tr:'shu hayde? 🥛',en:'What is this?'},a:'kibbeye',after:'Bravo! Kibbēye!'}]},
   {title:'Mealtimes',words:['trwia','ghada','asha','akl','kol'],talk:[
     {q:{ar:'شو هيدي؟ 🍳',tr:'shu hayde? 🍳',en:'What is this?'},a:'trwia',after:'Yes! Trwīʾa!'},
     {q:{ar:'شو هيدا؟ 🍲',tr:'shu hayda? 🍲',en:'What is this?'},a:'ghada',after:'Bravo! Ghada!'}]},
   {title:'Lebanese favourites',words:['shawarma','kebbe','fattush','labne','zaatar'],talk:[
     {q:{ar:'شو هيدا؟ 🌯',tr:'shu hayda? 🌯',en:'What is this?'},a:'shawarma',after:'Yes! Shawarma!'},
     {q:{ar:'شو هيدي؟ 🧆',tr:'shu hayde? 🧆',en:'What is this?'},a:'kebbe',after:'Bravo! Kebbe!'}]}
  ]},
  {id:9,title:'My body & me',color:'#F477AF',icon:'🧍',sticker:{e:'🧍',n:'Body Boss'},lessons:[
   {title:'My face',words:['menkhar','dene','sinn','shaar','wejj'],talk:[
     {q:{ar:'شو هيدا؟ 👃',tr:'shu hayda? 👃',en:'What is this?'},a:'menkhar',after:'Yes! Menkhār!'},
     {q:{ar:'شو هيدي؟ 👂',tr:'shu hayde? 👂',en:'What is this?'},a:'dene',after:'Bravo! Dēne!'}]},
   {title:'My body',words:['batn','dahrb','isba','rkbe','ktef'],talk:[
     {q:{ar:'شو هيدا؟ ☝️',tr:'shu hayda? ☝️',en:'What is this?'},a:'isba',after:'Yes! Iṣbaʿ!'},
     {q:{ar:'شو هيدي؟ 🦵',tr:'shu hayde? 🦵',en:'What is this?'},a:'rkbe',after:'Bravo! Rkbe!'}]},
   {title:'Feeling ill',words:['byujaani','marid','dawa','salamtak','harara'],talk:[
     {q:{ar:'',tr:'🤕',en:'How do you say “it hurts”?'},a:'byujaani',after:'Yes! Byūjaʿni!'},
     {q:{ar:'',tr:'💊',en:'How do you say “medicine”?'},a:'dawa',after:'Bravo! Dawa!'}]},
   {title:'My senses',words:['shuf','smaa','shimm','dou'],talk:[
     {q:{ar:'',tr:'👀',en:'How do you say “look!”?'},a:'shuf',after:'Bravo! Perfect!'},
     {q:{ar:'',tr:'👂',en:'How do you say “listen!”?'},a:'smaa',after:'Bravo! Perfect!'}]},
   {title:'Let\'s move',words:['rous','sbah','saffe','tlaa','nzal'],talk:[
     {q:{ar:'',tr:'💃',en:'How do you say “dance!”?'},a:'rous',after:'Bravo! Perfect!'},
     {q:{ar:'',tr:'🏊',en:'How do you say “swim!”?'},a:'sbah',after:'Bravo! Perfect!'}]}
  ]},
  {id:10,title:'People & fun',color:'#35C879',icon:'🎉',sticker:{e:'🎉',n:'Party Star'},lessons:[
   {title:'People',words:['walad','binet','rajjel','mara','bebe'],talk:[
     {q:{ar:'مين هيدا؟ 👦',tr:'mīn hayda? 👦',en:'Who is this? (a boy)'},a:'walad',after:'Yes! Walad – a boy!'},
     {q:{ar:'مين هيدي؟ 👧',tr:'mīn hayde? 👧',en:'Who is this? (a girl)'},a:'binet',after:'Bravo! Binet – a girl!'}]},
   {title:'Jobs',words:['hakim','shurti','tabbakh','falleh','shofer'],talk:[
     {q:{ar:'مين هيدا؟ 👨‍⚕️',tr:'mīn hayda? 👨‍⚕️',en:'Who is this? (a man)'},a:{ar:'هيدا حكيم',tr:'hayda ḥakīm'},check:{ar:'حكيم',tr:'hakim'},after:'Yes! A man doctor is ḥakīm.'},
     {q:{ar:'مين هيدي؟ 👩‍⚕️',tr:'mīn hayde? 👩‍⚕️',en:'Who is this? (a woman)'},a:{ar:'هيدي حكيمة',tr:'hayde ḥakīme'},check:{ar:'حكيمة',tr:'hakime'},after:'Bravo! A woman doctor is ḥakīme.'}]},
   {title:'Music',words:['ghinniyye','musia','tabl','oudmusic','ghanni'],talk:[
     {q:{ar:'شو هيدي؟ 🎵',tr:'shu hayde? 🎵',en:'What is this?'},a:'ghinniyye',after:'Yes! Ghinniyye!'},
     {q:{ar:'شو هيدا؟ 🎶',tr:'shu hayda? 🎶',en:'What is this?'},a:'musia',after:'Bravo! Mūsīʾa!'}]},
   {title:'What I like',words:['bhebb','mabhebb','shubtehebb','anakamen','wenta'],talk:[
     {q:{ar:'',tr:'❤️',en:'How do you say “I like / I love”?'},a:'bhebb',after:'Yes! Bḥebb!'},
     {q:{ar:'',tr:'👎',en:'How do you say “I don\'t like”?'},a:'mabhebb',after:'Bravo! Ma bḥebb!'}]},
   {title:'Let\'s celebrate',words:['mabruk','hdiyye','eid','hafle','shamaa'],talk:[
     {q:{ar:'شو هيدا؟ 🎊',tr:'shu hayda? 🎊',en:'What is this?'},a:'mabruk',after:'Yes! Mabrūk!'},
     {q:{ar:'شو هيدي؟ 🎁',tr:'shu hayde? 🎁',en:'What is this?'},a:'hdiyye',after:'Bravo! Hdiyye!'}]}
  ]}
 ]},
 {id:2,name:'Elementary',desc:'Short phrases and simple questions',units:[
  {id:1,title:'At school',color:'#14A39A',icon:'🏫',sticker:{e:'🎒',n:'School Star'},lessons:[
   {title:'School things',words:['madrase','saff','kteb','daftar','alam'],talk:[
     {q:{ar:'شو هيدا؟ 📕',tr:'shu hayda? 📕',en:'What is this?'},a:{ar:'هيدا كتاب',tr:'hayda ktēb'},check:{ar:'كتاب',tr:'kteb'},after:'Bravo! Hayda ktēb!'},
     {q:{ar:['وين رايح؟ 🏫','وين رايحة؟ 🏫'],tr:['wēn rāyeḥ? 🏫','wēn rāyḥa? 🏫'],en:'Where are you going?'},a:{ar:'عالمدرسة',tr:'ʿal-madrase'},check:{ar:'مدرسة',tr:'madrase'},after:'Yalla! Have a great day at school!'}]},
   {title:'Teacher & friends',words:['istez','mialme','rfii','shanta','mudir'],talk:[
     {q:{ar:'مين هيدا؟ 👨‍🏫',tr:'mīn hayda? 👨‍🏫',en:'Who is this?'},a:{ar:'هيدا الأستاذ',tr:'hayda l-istēz'},check:{ar:'استاذ',tr:'istez'},after:'Yes, the istēz!'},
     {q:{ar:'مين هيدا؟ 🧒',tr:'mīn hayda? 🧒',en:'Who is this? (say: my friend)'},a:'rfii',after:'How lovely, your friend!'}]},
   {title:'In class',words:['fiyye','mafhemt','khalast','andisual'],talk:[
     {q:{ar:['فهمت؟','فهمتي؟'],tr:['fhemt?','fhemti?'],en:'Did you understand? (say: I didn’t understand)'},a:'mafhemt',after:'No problem, I will explain again!'},
     {q:{ar:['خلّصت؟','خلّصتي؟'],tr:['khallaṣt?','khallaṣti?'],en:'Have you finished?'},a:{ar:'إي، خلّصت',tr:'ē, khallaṣt'},check:{ar:'خلصت',tr:'khallast'},after:'Bravo! Super fast!'}]},
   {title:'Question words',words:['shu','min','wen','lesh','emta'],talk:[
     {q:{ar:'',tr:'🐱❓',en:'You want to ask where Bisseh is. Ask: Where is Bisseh?'},a:{ar:'وين بسّة؟',tr:'wēn Bisseh?'},check:{ar:'وين',tr:'wen'},after:'Bisseh is under the bed! 🛏️'},
     {q:{ar:'',tr:'🚪❓',en:'Someone knocks on the door. Ask: Who is it?'},a:{ar:'مين؟',tr:'mīn?'},check:{ar:'مين',tr:'min'},after:'It is Teta! Ahla w sahla!'}]},
   {title:'What I do',words:['baara','bektob','bersom','belab','bghanni'],talk:[
     {q:{ar:['شو عم تعمل؟ 🎨','شو عم تعملي؟ 🎨'],tr:['shu ʿam taʿmel? 🎨','shu ʿam taʿmle? 🎨'],en:'What are you doing?'},a:{ar:'عم برسم',tr:'ʿam bersom'},check:{ar:'برسم',tr:'bersom'},after:'Wow, what a beautiful drawing!'},
     {q:{ar:['شو عم تعمل؟ 📖','شو عم تعملي؟ 📖'],tr:['shu ʿam taʿmel? 📖','shu ʿam taʿmle? 📖'],en:'What are you doing?'},a:{ar:'عم بقرا',tr:'ʿam baʾra'},check:{ar:'بقرا',tr:'baara'},after:'Reading is great!'}]}
  ]},
  {id:2,title:'Playtime',color:'#E5484D',icon:'🛝',sticker:{e:'🛝',n:'Play Champion'},lessons:[
   {title:'At the park',words:['hadiqa','marjouha','zahliqa','ramel','dawwera'],talk:[
     {q:{ar:['وين بدّك تروح؟','وين بدِّك تروحي؟'],tr:['wēn baddak trūḥ?','wēn baddik trūḥi?'],en:'Where do you want to go?'},a:{ar:'عالجنينة',tr:'ʿal-jnēne'},check:{ar:'جنينة',tr:'jnene'},after:'Yalla, to the park!'},
     {q:{ar:'شو هيدي؟ 🛝',tr:'shu hayde? 🛝',en:'What is this?'},a:'zahliqa',after:'Wheee! A zoḥlayṭa!'}]},
   {title:'Run & jump',words:['rkod','nott','oud','taa','oum'],talk:[
     {q:{ar:'',tr:'🐱💨',en:'Tell Bisseh to run!'},a:{ar:'اركضي يا بسّة!',tr:'rkoḍi ya Bisseh!'},check:{ar:'اركضي',tr:'rkodi'},after:'Bisseh runs super fast! 🐾'},
     {q:{ar:'',tr:'🐱🦘',en:'Now tell Bisseh to jump!'},a:{ar:'نطّي يا بسّة!',tr:'nuṭṭi ya Bisseh!'},check:{ar:'نطي',tr:'nutti'},after:'Boing! Bisseh jumps high!'}]},
   {title:'Games',words:['ghummayda','dawri','rbeht','khsert','laaytak'],talk:[
     {q:{ar:'يلّا نلعب غمّيضة؟',tr:'yalla nelʿab ghummayḍa?',en:"Shall we play hide and seek?"},a:{ar:'إي، يلّا!',tr:'ē, yalla!'},check:{ar:'يلا',tr:'yalla'},after:'You hide, I count! 1, 2, 3…'},
     {q:{ar:'دور مين؟',tr:'dōr mīn?',en:'Whose turn is it? (say: my turn)'},a:'dawri',after:'Okay, your turn!'}]},
   {title:'Fast & slow',words:['khayef','baadshway','bsura','shwayshway','sari'],talk:[
     {q:{ar:'',tr:'🚌⏰',en:'The bus is leaving! Tell your friend to hurry!'},a:'bsura',after:'Phew, we made it!'},
     {q:{ar:['خايف؟ 🌙','خايفة؟ 🌙'],tr:['khāyef? 🌙','khāyfe? 🌙'],en:'Are you scared? (say: no)'},a:{ar:'لأ!',tr:'laʾ!'},check:{ar:'لا',tr:'la'},after:'You are so brave!'}]},
   {title:'Sharing',words:['atini','khod','maabaad','maaleh','nasem'],talk:[
     {q:{ar:'',tr:'⚽🙋',en:'Ask your friend: give me the ball'},a:{ar:'عطيني الطابة',tr:'ʿaṭīni l-ṭābe'},check:{ar:'عطيني',tr:'atini'},after:'Here you go! Tfaḍḍal!'},
     {q:{ar:'سوري! 😔',tr:'sorry! 😔',en:'Your friend says sorry. Say: never mind'},a:'maaleh',after:'Friends again! 🤝'}]}
  ]},
  {id:3,title:'Out & about',color:'#FF9F1C',icon:'🛒',sticker:{e:'🛒',n:'City Explorer'},lessons:[
   {title:'Getting around',words:['dikkene','sayyara','bas','tariq','mhatta'],talk:[
     {q:{ar:'شو هيدي؟ 🚗',tr:'shu hayde? 🚗',en:'What is this?'},a:'sayyara',after:'Vroom vroom!'},
     {q:{ar:'كيف رحت عالمدرسة؟ 🚌',tr:'kīf reḥt ʿal-madrase? 🚌',en:'How did you go to school?'},a:{ar:'بالباص',tr:'bel-bāṣ'},check:{ar:'باص',tr:'bas'},after:'The school bus! Fun!'}]},
   {title:'Nature',words:['bahr','jabal','shajra','warde','nahr'],talk:[
     {q:{ar:['وين بدّك تروح؟ 🌊','وين بدِّك تروحي؟ 🌊'],tr:['wēn baddak trūḥ? 🌊','wēn baddik trūḥi? 🌊'],en:'Where do you want to go?'},a:{ar:'عالبحر',tr:'ʿal-baḥr'},check:{ar:'بحر',tr:'bahr'},after:'Swimming time! 🏊'},
     {q:{ar:'شو هيدي؟ 🌸',tr:'shu hayde? 🌸',en:'What is this?'},a:'warde',after:'A beautiful warde for Teta!'}]},
   {title:'Here & there',words:['hon','honik','yamin','shmel','dughri'],talk:[
     {q:{ar:'وين بسّة؟ 👉🐱',tr:'wēn Bisseh? 👉🐱',en:'Where is Bisseh?'},a:'yamin',after:'Yes, on the right!'},
     {q:{ar:'وين الطابة؟ 👈⚽',tr:'wēn el-ṭābe? 👈⚽',en:'Where is the ball?'},a:'shmel',after:'On the left! Bravo!'}]},
   {title:'At the shop',words:['addesh','masari','ghali','rkhis','shtaret'],talk:[
     {q:{ar:'',tr:'🍎💰',en:'Ask the shopkeeper: how much is the apple?'},a:{ar:'قدّيش التفّاحة؟',tr:'addēsh el-tiffāḥa?'},check:{ar:'قديش',tr:'addesh'},after:'Only 1,000 lira!'},
     {q:{ar:'هيدا ب ١٠٠ دولار! 💸',tr:'hayda b 100 dollar! 💸',en:'This costs 100 dollars! (say: expensive!)'},a:{ar:'كتير غالي!',tr:'ktīr ghāli!'},check:{ar:'غالي',tr:'ghali'},after:'Haha, too expensive!'}]},
   {title:"Let's go!",words:['nrouh','wselna','stanna','albet','khalas'],talk:[
     {q:{ar:'',tr:'🚗',en:'Everyone is ready. Say: let’s go!'},a:'nrouh',after:'Yalla! Seatbelts on!'},
     {q:{ar:'',tr:'🏁🏠',en:'The car stops at home. Say: we have arrived!'},a:'wselna',after:'Elḥamdella ʿas-salāme! Welcome home!'}]}
  ]},
  {id:4,title:'Days & weather',color:'#7F77DD',icon:'🌦️',sticker:{e:'🌦️',n:'Weather Wizard'},lessons:[
   {title:'Today & tomorrow',words:['elyom','bukra','mbereh','hallaa','baadbukra'],talk:[
     {q:{ar:'إيمتى المدرسة؟',tr:'emta l-madrase?',en:'When is school? (say: tomorrow)'},a:'bukra',after:'Bukra! Get your bag ready!'},
     {q:{ar:'إيمتى بدّنا نلعب؟',tr:'emta baddna nelʿab?',en:'When shall we play? (say: now!)'},a:'hallaa',after:'Yalla, hallaʾ!'}]},
   {title:'Weather',words:['shob','bard','shiti','talj','hawa'],talk:[
     {q:{ar:'كيف الطقس؟ ☀️🥵',tr:'kīf eṭ-ṭaʾs? ☀️🥵',en:'How is the weather?'},a:{ar:'شوب!',tr:'shōb!'},check:{ar:'شوب',tr:'shob'},after:'So hot! Let’s go to the baḥr!'},
     {q:{ar:'كيف الطقس؟ 🌧️',tr:'kīf eṭ-ṭaʾs? 🌧️',en:'How is the weather?'},a:{ar:'عم تشتي',tr:'ʿam teshti'},check:{ar:'تشتي',tr:'teshti'},after:'Take your umbrella! ☂️'}]},
   {title:'Days of the week',words:['jemaa','sabt','ahad','tanen','taleta'],talk:[
     {q:{ar:'شو اليوم؟ (Saturday)',tr:'shu l-yōm? (Saturday)',en:'What day is it today?'},a:'sabt',after:'El-sabt! Weekend!'},
     {q:{ar:'شو بكرا؟ (Sunday)',tr:'shu bukra? (Sunday)',en:'What day is tomorrow?'},a:'ahad',after:'El-aḥad! Family lunch at Teta’s!'}]},
   {title:'Morning to night',words:['subh','dahr','elmasa','lel','baaddahr'],talk:[
     {q:{ar:['إيمتى بتفيق؟ 🌄','إيمتى بتفيقي؟ 🌄'],tr:['emta btfīʾ? 🌄','emta btfīʾi? 🌄'],en:'When do you wake up?'},a:'subh',after:'Ṣabāḥ el-khēr, early bird!'},
     {q:{ar:['إيمتى بتنام؟ 🌃','إيمتى بتنامي؟ 🌃'],tr:['emta btnēm? 🌃','emta btnēmi? 🌃'],en:'When do you sleep?'},a:'lel',after:'Tiṣbaḥ ʿala khēr! 🌙'}]},
   {title:'Clothes',words:['kanze','jaket','ubbaa','sobbat','kfuf'],talk:[
     {q:{ar:['برد! شو بدّك تلبس؟ 🥶','برد! شو بدِّك تلبسي؟ 🥶'],tr:['bard! shu baddak tilbes? 🥶','bard! shu baddik tilbsi? 🥶'],en:'It is cold! What will you wear?'},a:{ar:'جاكيت',tr:'jakēt'},check:{ar:'جاكيت',tr:'jaket'},after:'Good idea, stay warm!'},
     {q:{ar:'شو هيدا؟ 👟',tr:'shu hayda? 👟',en:'What is this?'},a:'sobbat',after:'Ṣobbāṭ! Ready to run!'}]}
  ]},
  {id:5,title:'Around the house',color:'#20C4B6',icon:'🛋️',sticker:{e:'🛋️',n:'Home Hero'},lessons:[
   {title:'Living room',words:['salon','kanabeye','kirse','tawle','shebbek'],talk:[
     {q:{ar:'شو هيدا؟ 🛋️',tr:'shu hayda? 🛋️',en:'What is this?'},a:'salon',after:'Yes! Ṣālōn!'},
     {q:{ar:'شو هيدي؟ 🛋️',tr:'shu hayde? 🛋️',en:'What is this?'},a:'kanabeye',after:'Bravo! Kanabēye!'}]},
   {title:'My bedroom',words:['khzene','mreye','sejjede','lambe','sura'],talk:[
     {q:{ar:'شو هيدي؟ 🚪',tr:'shu hayde? 🚪',en:'What is this?'},a:'khzene',after:'Yes! Khzēne!'},
     {q:{ar:'شو هيدي؟ 🪞',tr:'shu hayde? 🪞',en:'What is this?'},a:'mreye',after:'Bravo! Mrēye!'}]},
   {title:'Kitchen things',words:['brrad','frun','tanjara','annine','hanafiyye'],talk:[
     {q:{ar:'شو هيدا؟ 🧊',tr:'shu hayda? 🧊',en:'What is this?'},a:'brrad',after:'Yes! Brrād!'},
     {q:{ar:'شو هيدا؟ 🔥',tr:'shu hayda? 🔥',en:'What is this?'},a:'frun',after:'Bravo! Frun!'}]},
   {title:'Helping at home',words:['saedni','rattib','hutt','ftah','sakker'],talk:[
     {q:{ar:'',tr:'🙏',en:'How do you say “help me”?'},a:'saedni',after:'Bravo! Perfect!'},
     {q:{ar:'',tr:'🧹',en:'How do you say “tidy up”?'},a:'rattib',after:'Bravo! Perfect!'}]},
   {title:'Getting dressed',words:['lbes','amis','bantalon','kalset','misht'],talk:[
     {q:{ar:'شو هيدا؟ 👔',tr:'shu hayda? 👔',en:'What is this?'},a:'amis',after:'Yes! ʾamīṣ!'},
     {q:{ar:'شو هيدا؟ 👖',tr:'shu hayda? 👖',en:'What is this?'},a:'bantalon',after:'Bravo! Banṭalōn!'}]}
  ]},
  {id:6,title:'Feelings & friends',color:'#F477AF',icon:'💛',sticker:{e:'💛',n:'Kind Heart'},lessons:[
   {title:'More feelings',words:['ghayran','ghadban','mistahi','dajran','mithammes'],talk:[
     {q:{ar:'',tr:'😊',en:'How do you say “jealous”?'},a:'ghayran',after:'Bravo! Perfect!'},
     {q:{ar:'',tr:'😠',en:'How do you say “angry”?'},a:'ghadban',after:'Bravo! Perfect!'}]},
   {title:'Saying sorry',words:['mishasdi','matizaal','mafimishkle','tsalahna'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “I didn\'t mean it”?'},a:'mishasdi',after:'Yes! Mish ʾaṣdi!'},
     {q:{ar:'',tr:'👍',en:'How do you say “no problem”?'},a:'mafimishkle',after:'Bravo! Ma fi mishkle!'}]},
   {title:'Caring',words:['shufik','shusar','matkhaf','anahon','kellshi'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “what happened?”?'},a:'shusar',after:'Yes! Shu ṣār?!'},
     {q:{ar:'',tr:'🫂',en:'How do you say “I\'m here”?'},a:'anahon',after:'Bravo! Ana hōn!'}]},
   {title:'Nice words',words:['ktirhelo','shater','bijannen','ajabni'],talk:[
     {q:{ar:'',tr:'😍',en:'How do you say “really nice”?'},a:'ktirhelo',after:'Yes! Ktīr ḥelo!'},
     {q:{ar:'',tr:'🤩',en:'How do you say “amazing”?'},a:'bijannen',after:'Bravo! Bijannen!'}]},
   {title:'Inviting a friend',words:['taalaanna','fiyyaktiji','akid','yimken','ahlawsahla'],talk:[
     {q:{ar:'',tr:'✅',en:'How do you say “of course”?'},a:'akid',after:'Yes! Akīd!'},
     {q:{ar:'',tr:'🤷',en:'How do you say “maybe”?'},a:'yimken',after:'Bravo! Yimken!'}]}
  ]},
  {id:7,title:'Sports & hobbies',color:'#35C879',icon:'⚽',sticker:{e:'⚽',n:'Sports Star'},lessons:[
   {title:'Sports',words:['futbol','sbeha','bisklet','rakd','basket'],talk:[
     {q:{ar:'شو هيدا؟ ⚽',tr:'shu hayda? ⚽',en:'What is this?'},a:'futbol',after:'Yes! Fūtbōl!'},
     {q:{ar:'شو هيدي؟ 🏊',tr:'shu hayde? 🏊',en:'What is this?'},a:'sbeha',after:'Bravo! Sbēḥa!'}]},
   {title:'Hobbies',words:['rasm','iraye','tabkh','raas','alaabvideo'],talk:[
     {q:{ar:'شو هيدا؟ 🎨',tr:'shu hayda? 🎨',en:'What is this?'},a:'rasm',after:'Yes! Rasm!'},
     {q:{ar:'شو هيدي؟ 📚',tr:'shu hayde? 📚',en:'What is this?'},a:'iraye',after:'Bravo! ʾirāye!'}]},
   {title:'On the team',words:['farii','gol','shut','hakam'],talk:[
     {q:{ar:'شو هيدا؟ 👥',tr:'shu hayda? 👥',en:'What is this?'},a:'farii',after:'Yes! Farīʾ!'},
     {q:{ar:'شو هيدا؟ 🥅',tr:'shu hayda? 🥅',en:'What is this?'},a:'gol',after:'Bravo! Gōl!'}]},
   {title:'I can do it',words:['baarif','mabaarif','jarrib','saabe','sahle'],talk:[
     {q:{ar:'',tr:'💪',en:'How do you say “I can / I know how”?'},a:'baarif',after:'Yes! Baʿrif!'},
     {q:{ar:'',tr:'💬',en:'How do you say “I can\'t”?'},a:'mabaarif',after:'Bravo! Ma baʿrif!'}]},
   {title:'Win or lose',words:['rbehna','khsirna','yaatik','kamenshway'],talk:[
     {q:{ar:'',tr:'🏆',en:'How do you say “we won”?'},a:'rbehna',after:'Yes! Rbeḥna!'},
     {q:{ar:'',tr:'😞',en:'How do you say “we lost”?'},a:'khsirna',after:'Bravo! Khsirna!'}]}
  ]},
  {id:8,title:'Travel & places',color:'#3495F5',icon:'✈️',sticker:{e:'✈️',n:'World Traveller'},lessons:[
   {title:'Getting there',words:['tayyara','train','babur','taxi'],talk:[
     {q:{ar:'شو هيدي؟ ✈️',tr:'shu hayde? ✈️',en:'What is this?'},a:'tayyara',after:'Yes! Ṭayyāra!'},
     {q:{ar:'شو هيدا؟ 🚆',tr:'shu hayda? 🚆',en:'What is this?'},a:'train',after:'Bravo! Train!'}]},
   {title:'Going on a trip',words:['matar','passport','tazkara','safar','kharita'],talk:[
     {q:{ar:'شو هيدا؟ 🛫',tr:'shu hayda? 🛫',en:'What is this?'},a:'matar',after:'Yes! Maṭār!'},
     {q:{ar:'شو هيدا؟ 🛂',tr:'shu hayda? 🛂',en:'What is this?'},a:'passport',after:'Bravo! Passport!'}]},
   {title:'In town',words:['mustashfa','mataam','saydaliyye','furn','maktabe'],talk:[
     {q:{ar:'شو هيدا؟ 🏥',tr:'shu hayda? 🏥',en:'What is this?'},a:'mustashfa',after:'Yes! Mestashfa!'},
     {q:{ar:'شو هيدا؟ 🍽️',tr:'shu hayda? 🍽️',en:'What is this?'},a:'mataam',after:'Bravo! Maṭʿam!'}]},
   {title:'Directions',words:['barrem','waaf','arib','baid','zawye'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “near”?'},a:'arib',after:'Yes! ʾarīb!'},
     {q:{ar:'',tr:'💬',en:'How do you say “far”?'},a:'baid',after:'Bravo! Baʿīd!'}]},
   {title:'My Lebanon',words:['lebnen','bayrut','arze','alamflag','dayaa'],talk:[
     {q:{ar:'شو هيدا؟ 🇱🇧',tr:'shu hayda? 🇱🇧',en:'What is this?'},a:'lebnen',after:'Yes! Lebnēn!'},
     {q:{ar:'شو هيدا؟ 🏙️',tr:'shu hayda? 🏙️',en:'What is this?'},a:'bayrut',after:'Bravo! Bayrūt!'}]}
  ]},
  {id:9,title:'Numbers & time',color:'#A66BEF',icon:'🔢',sticker:{e:'🔢',n:'Time Keeper'},lessons:[
   {title:'Numbers 11–15',words:['n11','n12','n13','n14','n15'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “eleven”?'},a:'n11',after:'Yes! Ḥdaʿsh!'},
     {q:{ar:'',tr:'💬',en:'How do you say “twelve”?'},a:'n12',after:'Bravo! Tnaʿsh!'}]},
   {title:'Numbers 16–20',words:['n16','n17','n18','n19','n20'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “sixteen”?'},a:'n16',after:'Yes! Sittaʿsh!'},
     {q:{ar:'',tr:'💬',en:'How do you say “seventeen”?'},a:'n17',after:'Bravo! Sabaʿṭaʿsh!'}]},
   {title:'What time is it?',words:['sea','addeshsea','wnuss','wrube','daia'],talk:[
     {q:{ar:'',tr:'🕐',en:'How do you say “hour / clock”?'},a:'sea',after:'Yes! Sēʿa!'},
     {q:{ar:'',tr:'⏰',en:'How do you say “what time is it?”?'},a:'addeshsea',after:'Bravo! Addēsh el-sēʿa?!'}]},
   {title:'Days & timing',words:['arbaa','khamis','bakkir','mitakhkhar','dayman'],talk:[
     {q:{ar:'',tr:'💬',en:'How do you say “Wednesday”?'},a:'arbaa',after:'Yes! El-arbaʿa!'},
     {q:{ar:'',tr:'💬',en:'How do you say “Thursday”?'},a:'khamis',after:'Bravo! El-khamīs!'}]},
   {title:'Seasons',words:['sef','kharif','rabi','elshiti','utle'],talk:[
     {q:{ar:'',tr:'☀️',en:'How do you say “summer”?'},a:'sef',after:'Yes! Ṣēf!'},
     {q:{ar:'',tr:'🍂',en:'How do you say “autumn”?'},a:'kharif',after:'Bravo! Kharīf!'}]}
  ]},
  {id:10,title:'Fruit & veg',color:'#FF9638',icon:'🍉',sticker:{e:'🍉',n:'Fruit Fan'},lessons:[
   {title:'More fruit',words:['battikh','khukh','injas','kraz','mishmish'],talk:[
     {q:{ar:'شو هيدا؟ 🍉',tr:'shu hayda? 🍉',en:'What is this?'},a:'battikh',after:'Yes! Baṭṭīkh!'},
     {q:{ar:'شو هيدا؟ 🍑',tr:'shu hayda? 🍑',en:'What is this?'},a:'khukh',after:'Bravo! Khūkh!'}]},
   {title:'More vegetables',words:['khass','lubye','betinjen','flayfle','arnabit'],talk:[
     {q:{ar:'شو هيدا؟ 🥬',tr:'shu hayda? 🥬',en:'What is this?'},a:'khass',after:'Yes! Khass!'},
     {q:{ar:'شو هيدا؟ 🫛',tr:'shu hayda? 🫛',en:'What is this?'},a:'lubye',after:'Bravo! Lūbye!'}]},
   {title:'Herbs & nuts',words:['baadunis','naana','zetun','loz','fistu'],talk:[
     {q:{ar:'شو هيدا؟ 🌿',tr:'shu hayda? 🌿',en:'What is this?'},a:'baadunis',after:'Yes! Baʾdūnis!'},
     {q:{ar:'شو هيدا؟ 🌱',tr:'shu hayda? 🌱',en:'What is this?'},a:'naana',after:'Bravo! Naʿnaʿ!'}]},
   {title:'Sweets',words:['knefe','baalewe','maamul','asal','sukkar'],talk:[
     {q:{ar:'شو هيدي؟ 🍮',tr:'shu hayde? 🍮',en:'What is this?'},a:'knefe',after:'Yes! Knēfe!'},
     {q:{ar:'شو هيدي؟ 🥮',tr:'shu hayde? 🥮',en:'What is this?'},a:'baalewe',after:'Bravo! Baʾlēwe!'}]},
   {title:'How does it taste?',words:['meleh','hamed','murr','harr','taza'],talk:[
     {q:{ar:'',tr:'🧂',en:'How do you say “salty”?'},a:'meleh',after:'Yes! Mēleḥ!'},
     {q:{ar:'',tr:'🍋',en:'How do you say “sour”?'},a:'hamed',after:'Bravo! Ḥāmeḍ!'}]}
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

// ===== Step 1 patch (24 Nov 2026): approved recordings, replacements, de-duplication =====
(function(W,C){
 // 1) spellings = exactly what the recordings say (id -> say). _b/_g ids make [boy,girl] pairs.
 const SAY={"kifak_b": "kifak", "kifak_g": "kifik", "mnih_b": "mnīḥ", "mnih_g": "mnīḥa", "asfour": "ʿaṣfūr", "halib": "7aleeb", "tiffaha": "tiffēḥa", "moze": "mawze", "laymuna": "orange", "falafel": "falāfel", "zeki": "ṭáyyib", "n1": "wāḥad", "n6": "sitteh", "tabe": "ṭābe", "madrase": "madrase", "kteb": "kteb", "daftar": "daftar", "istez": "estez", "mialme": "ma3almeh", "rfii_b": "rfee2eh", "hmar": "ḥmār", "hsan": "ḥṣān", "zarafe": "zarāfi", "dibb": "dibb", "saaden": "saʿdēn", "nemle": "namle", "nahle": "naḥle", "salhafe": "zilḥfe", "batta": "baṭṭa", "hayye": "ḥáyye", "nimer": "nímir", "bume": "bōme", "hammem": "7emmem", "sabune": "ṣābūne", "farshaye": "firshēyit snēn", "ghassil_b": "ghassil", "ghassil_g": "ghassli", "nadif_b": "nḍīf", "nadif_g": "nḍīfe", "wesikh_b": "wísikh", "mthallath": "mthallath", "nijme": "nijme", "alb": "ʾalb", "kbir_b": "kbīr", "kbir_g": "kbīre", "zghir_b": "zgheer", "zghir_g": "zgheereh", "tawil_b": "ṭawīl", "tawil_g": "ṭawīle", "asir_b": "ʾaṣīr", "asir_g": "ʾaṣīre", "jdid_b": "jdīd", "jdid_g": "jdīde", "atia_b": "ʾadīm", "atia_g": "ʾadīme", "malyen_b": "milyēn", "malyen_g": "milyēne", "fadi_b": "fāḍi", "fadi_g": "fāḍye", "tail_b": "tʾīl", "tail_g": "tʾīle", "jamb": "ḥadd", "jazara": "jazra", "boza": "bouza", "gato": "gâteau", "kibbeye": "kebbeyeh", "shoke": "shawkeh", "trwia": "terwee2a", "kol_b": "kol", "kol_g": "kili", "kebbe": "kibbe", "labne": "labne", "byujaani": "youja3neh", "salamtak_b": "salemtak", "salamtak_g": "salemtik", "shuf_b": "shouf", "shuf_g": "shoufi", "smaa_b": "smaʿ", "smaa_g": "smaʿi", "shimm_b": "shimm", "falleh_b": "fallēḥ", "falleh_g": "fallēḥa", "ghinniyye": "ghinniyye", "musia": "mūsīʾa", "bhebb": "b7ebb", "mabhebb": "ma b7ebb", "shubtehebb_b": "shou bet7ebb", "shubtehebb_g": "shou bet7ebbeh", "anakamen": "ana kamen", "wenta_b": "w enta", "wenta_g": "w enteh", "hdiyye": "hdiyye", "kanabeye": "kanabeye", "kirse": "kirseh", "shebbek": "shibbēk", "khzene": "khzeineh", "mreye": "mrēye", "sejjede": "sijjēde", "lambe": "lamba", "brrad": "brrād", "frun": "forn", "tanjara": "ṭanjra", "annine": "ʾannīne", "hanafiyye": "ḥanafiyye", "saedni_b": "sē3edni", "saedni_g": "sē3dīni", "rattib_b": "rattib", "rattib_g": "rattbi", "ftah_b": "ftaḥ", "ftah_g": "ftaḥi", "sakker_b": "sakker", "sakker_g": "sakkri", "lbes_b": "lbēs", "lbes_g": "lbsi", "amis": "2amees", "kalset": "kalsēt", "ghayran_b": "ghayrān", "ghayran_g": "ghayrāne", "ghadban_b": "m3assab", "ghadban_g": "m3assbeh", "mistahi_b": "mistaḥi", "mistahi_g": "mistaḥye", "mithammes_b": "mitḥammes", "mithammes_g": "mitḥamse", "matizaal_b": "ma tiz3al", "matizaal_g": "ma tiz3ali", "mafimishkle": "mesh meshkleh", "tsalahna": "tṣālaḥna", "shufik_b": "shou bak", "shufik_g": "shou bekeh", "matkhaf_b": "ma tkhāf", "matkhaf_g": "ma tkhāfi", "kellshi": "kil shi mnīḥ", "fiyyaktiji_b": "fik tiji", "fiyyaktiji_g": "fikeh tijeh", "iraye": "ʾrāye", "gol": "goal", "shut_b": "shūṭ", "shut_g": "shūṭi", "jarrib_b": "jarrib", "jarrib_g": "jarrbi", "khsirna": "khsirna", "tazkara": "tikit", "mustashfa": "mistashfa", "barrem_b": "brom", "barrem_g": "bromi", "waaf_b": "wʾaf", "waaf_g": "wʾafi", "arib": "areeb", "lebnen": "lebnen", "n12": "tna3sh", "n15": "khams-ta3sh", "n16": "set-ta3sh", "n18": "tmen-ta3sh", "daia": "d'ee'a", "arbaa": "orb3a", "mitakhkhar_b": "m'akhar", "mitakhkhar_g": "m'akhra", "dayman": "deyman", "sef": "seif", "rfii_g": "rfee2teh", "fiyye": "fineh…?", "mafhemt": "ma fhemt", "hadiqa": "jnayneh", "zahliqa": "zoḥlayṭa", "rkod_b": "rkoḍ", "rkod_g": "rkoḍi", "oud_b": "2a3od", "oud_g": "2a3di", "taa_b": "ta3a", "taa_g": "ta3eh", "ghummayda": "ghummayḍa", "dawri": "dōri", "khayef_b": "khāyef", "khayef_g": "khāyfe", "maaleh": "ma3leh", "dikkene": "dikken", "tariq": "taree2", "lel": "leil", "kanze": "kanze", "fiq_b": "fīʾ", "fiq_g": "fīʾi", "atshan_b": "ʿaṭshān", "atshan_g": "ʿaṭshāne", "hawde": "hawdeh", "beb": "bēb", "bed": "bēḍ", "tabboule": "tabbouli", "bghanni": "bghanneh", "laaytak_b": "la2aytak", "laaytak_g": "la2aytik", "shtaret": "shtarēt", "taleta": "taleta", "baqara": "baʾara", "djeje": "djēje", "wesikh_g": "wiskha", "berid": "bárid", "mkhadde": "mkhadde", "hrem": "ḥrēm", "daw": "ḍaww", "atme": "ʿátme", "hilm": "ḥilim", "hkeye": "ʾoṣṣa", "bose": "bōse", "hadne": "ʿabṭa", "naasan_b": "naʿsān", "naasan_g": "naʿsāne", "nem_b": "nem", "nem_g": "nēmi", "liibe": "liʿbe", "balon": "ballon", "alwen": "alwēn", "mauve": "mauve", "daira": "dāʾira", "shimm_g": "shimmi", "dou_b": "dūʾ", "dou_g": "dūʾi", "rous_b": "ur2os", "rous_g": "ur2osi", "sbah_b": "sbaḥ", "sbah_g": "sbaḥi", "tlaa_b": "ṭlaʿ", "tlaa_g": "ṭlaʿi", "nzal_b": "nzal", "nzal_g": "nzali", "walad": "ṣabi", "binet": "binit", "rajjel": "rijjēl", "mara": "mara", "bebe": "bébé", "hakim_b": "Hakeem", "hakim_g": "Hakeemeh", "utle": "ʿuṭle", "betinjen": "batinjēn", "flayfle": "flayfle", "arnabit": "ʾarnabīṭ", "zetun": "zētūn", "loz": "lōz", "knefe": "knēfe", "baalewe": "baʾlēwe", "meleh_milh": "milḥ", "meleh": "māleḥ", "harr": "ḥarr", "r_shatt": "shaṭṭ", "r_moje": "mōje", "r_bonbon": "bonbon", "r_mjaddara": "mjaddara", "r_khebbez": "khebbēz", "r_hallaa": "ḥallāʾ", "r_piano": "piano", "r_guitar": "gītār", "r_dorak_b": "dōrak", "r_dorak_g": "dōrik", "r_tannura": "tannūra", "r_zihan_b": "zihʾān", "r_zihan_g": "zihʾāne", "r_sorry": "sorry", "r_sbaha": "sbāḥa", "r_telfizyon": "telfizyōn", "r_fini": "fīni", "r_mafini": "ma fīni", "r_bakhra": "bākhra", "r_laymune": "laymūne", "r_bizr": "bizr", "kamen": "baʿed", "saffe_b": "zaaef", "saffe_g": "zaafi", "r_velo": "biciclette", "r_marratenye": "tene marra", "r_chips": "chips"};
 const keep=o=>{const m=/[?!…]+$/.exec(String(o||''));return m?m[0]:''};
 const fixT=(k,v)=>{const o=W[k];if(!o)return;const old=Array.isArray(o.tr)?o.tr:[o.tr];
  if(Array.isArray(v))o.tr=v.map((x,i)=>/[?!…]$/.test(x)?x:x+keep(old[i]||old[0]));else o.tr=/[?!…]$/.test(v)?v:v+keep(old[0])};
 const done={};
 Object.keys(SAY).forEach(id=>{if(id.startsWith('r_')||id==='meleh_milh')return;const m=/^(.*)_([bg])$/.exec(id);
  if(m&&W[m[1]]&&Array.isArray(W[m[1]].tr)){if(done[m[1]])return;done[m[1]]=1;const t=W[m[1]].tr.slice();
    if(SAY[m[1]+'_b'])t[0]=SAY[m[1]+'_b'];if(SAY[m[1]+'_g'])t[1]=SAY[m[1]+'_g'];fixT(m[1],t)}
  else if(W[id])fixT(id,SAY[id])});
 W.walad.ar='صبي';W.kamen.ar='بعد';W.kamen.en='more / again';
 // 2) new Lebanese words (recorded)
 Object.assign(W,{
  r_shatt:{ar:'شطّ',tr:'shaṭṭ',en:'beach',pic:'🏖️'}, r_moje:{ar:'موجة',tr:'mōje',en:'wave',pic:'🌊'},
  r_bonbon:{ar:'بونبون',tr:'bonbon',en:'sweets',pic:'🍬'}, r_mjaddara:{ar:'مجدّرة',tr:'mjaddara',en:'mjaddara (lentils & rice)',pic:'🍲'},
  r_khebbez:{ar:'خبّاز',tr:'khebbēz',en:'baker',pic:'🥖'}, r_hallaa:{ar:'حلّاق',tr:'ḥallāʾ',en:'barber / hairdresser',pic:'💈'},
  r_piano:{ar:'بيانو',tr:'piano',en:'piano',pic:'🎹'}, r_guitar:{ar:'غيتار',tr:'gītār',en:'guitar',pic:'🎸'},
  r_dorak:{ar:['دورك','دورِك'],tr:['dōrak','dōrik'],en:'your turn',pic:null},
  r_tannura:{ar:'تنّورة',tr:'tannūra',en:'skirt',pic:'👗'}, r_zihan:{ar:['زهقان','زهقانة'],tr:['zihʾān','zihʾāne'],en:'bored',pic:'😒'},
  r_sorry:{ar:'سوري',tr:'sorry',en:'sorry',pic:'🙏'}, r_velo:{ar:'بيسيكليت',tr:'biciclette',en:'bike',pic:'🚲'},
  r_sbaha:{ar:'سباحة',tr:'sbāḥa',en:'swimming',pic:'🏊'}, r_telfizyon:{ar:'تلفزيون',tr:'telfizyōn',en:'TV',pic:'📺'},
  r_fini:{ar:'فيني',tr:'fīni',en:'I can',pic:'💪'}, r_mafini:{ar:'ما فيني',tr:'ma fīni',en:"I can't",pic:null},
  r_marratenye:{ar:'تاني مرّة',tr:'tene marra',en:'next time',pic:null}, r_bakhra:{ar:'باخرة',tr:'bākhra',en:'ship',pic:'🚢'},
  r_laymune:{ar:'ليمونة',tr:'laymūne',en:'lemon',pic:'🍋'}, r_bizr:{ar:'بزر',tr:'bizr',en:'seeds',pic:'🌻'},
  r_chips:{ar:'شيبس',tr:'chips',en:'chips',pic:'🍟'}, meleh_milh:{ar:'ملح',tr:'milḥ',en:'salt',pic:'🧂'}});
 // 3) swap old words for the new ones, remove duplicates / removed words
 const REP={sartan:['r_shatt'],nijmebahr:['r_moje'],biskwit:['r_bonbon'],shawarma:['r_mjaddara'],tabbakh:['r_khebbez'],shofer:['r_hallaa'],
  tabl:['r_piano'],oudmusic:['r_guitar'],nasem:['r_dorak'],misht:['r_tannura'],dajran:['r_zihan'],mishasdi:['r_sorry'],bisklet:['r_velo'],
  sbeha:['r_sbaha'],alaabvideo:['r_telfizyon'],baarif:['r_fini'],mabaarif:['r_mafini'],kamenshway:['r_marratenye'],babur:['r_bakhra'],
  mishmish:['r_laymune'],fistu:['r_bizr'],maamul:['r_chips'],meleh:['meleh_milh','meleh']};
 const DROP=new Set(['bonjour','maasalame','laymuna','bard','eid','dawwera','mhatta']);
 const AFTER={r_mjaddara:'Yes! Mjaddara!',r_sorry:'Yes! Sorry!',r_sbaha:'Bravo! Sbāḥa!',r_fini:'Yes! Fīni!',r_mafini:'Bravo! Ma fīni!',walad:'Yes! Ṣabi – a boy!'};
 C.forEach(L=>(L.units||[]).forEach(u=>(u.lessons||[]).forEach(ls=>{
  const w=[];ls.words.forEach(id=>{if(DROP.has(id))return;(REP[id]||[id]).forEach(x=>w.push(x))});ls.words=w;
  (ls.talk||[]).forEach(tk=>{if(typeof tk.a==='string'){const n=REP[tk.a];if(n)tk.a=n[0];if(AFTER[tk.a])tk.after=AFTER[tk.a];
    if(tk.a==='r_mjaddara'&&tk.q){tk.q.ar=tk.q.ar.replace('🌯','🍲');tk.q.tr=tk.q.tr.replace('🌯','🍲')}}});
 })));
 ['sartan','nijmebahr','biskwit','shawarma','tabbakh','shofer','tabl','oudmusic','nasem','misht','dajran','mishasdi','bisklet','sbeha','alaabvideo','baarif','mabaarif','kamenshway','babur','mishmish','fistu','maamul','bonjour','maasalame','laymuna','bard','eid','dawwera','mhatta'].forEach(k=>{delete W[k]});
})(window.YN_WORDS,window.YN_COURSE);
// Arabic script aligned to the recorded words
(function(W){
 const S=(id,a)=>{if(W[id])W[id].ar=a};
 S('atia',['قديم','قديمة']);S('jamb','حدّ');S('mafimishkle','مش مشكلة');
 S('shufik',['شو بك؟','شو بكي؟']);S('ghassil',['غسّل','غسّلي']);
})(window.YN_WORDS);
// Swap less common words for everyday ones
(function(W,C){
 Object.assign(W,{r_jiran:{ar:'جيران',tr:'jīrān',en:'neighbours',pic:'🏘️'},
  r_laabe:{ar:'لعبة',tr:'laʿbe',en:'game',pic:'🎲'},
  r_idhak:{ar:['اضحك','اضحكي'],tr:['ḍḥak','ḍḥaki'],en:'laugh!',pic:'😂'}});
 const R={alamflag:'r_jiran',yaatik:'r_laabe',saffe:'r_idhak'};
 C.forEach(L=>(L.units||[]).forEach(u=>(u.lessons||[]).forEach(ls=>{
  ls.words=ls.words.map(id=>R[id]||id);
  (ls.talk||[]).forEach(tk=>{if(R[tk.a])tk.a=R[tk.a]})})));
 Object.keys(R).forEach(k=>delete W[k]);
})(window.YN_WORDS,window.YN_COURSE);
// Fill short lessons with Sami's picked words
(function(W,C){
 const N={
  r_kifkon:['Hello & how are you',{ar:'كيفكن؟',tr:'kīfkon?',en:'how are you all?',pic:null}],
  r_isma:['Names & goodbye',{ar:'اسمها…',tr:'isma…',en:'her name is…',pic:null}],
  r_tekram:['Polite words',{ar:['تكرم','تكرمي'],tr:['tekram','tekrami'],en:'my pleasure',pic:null}],
  r_yislamu:['Polite words',{ar:'يسلمو',tr:'yislamu',en:'thank you (warm)',pic:null}],
  r_ananas:['Fruit',{ar:'أناناس',tr:'ananās',en:'pineapple',pic:'🍍'}],
  r_lego:['My toys',{ar:'ليغو',tr:'lego',en:'lego',pic:'🧱'}],
  r_riha:['My senses',{ar:'ريحة',tr:'rīḥa',en:'smell',pic:'👃'}],
  r_eidmiled:["Let's celebrate",{ar:'عيد ميلاد',tr:'ʿīd milēd',en:'birthday',pic:'🎂'}],
  r_imtihan:['In class',{ar:'امتحان',tr:'imtiḥān',en:'test',pic:'📝'}],
  r_khayme:['At the park',{ar:'خيمة',tr:'khayme',en:'tent',pic:'⛺'}],
  r_dulab:['Getting around',{ar:'دولاب',tr:'dūlēb',en:'wheel',pic:'🛞'}],
  r_shamsiyye:['Weather',{ar:'شمسيّة',tr:'shamsiyye',en:'umbrella',pic:'☂️'}],
  r_ghaltan:['Saying sorry',{ar:['غلطان','غلطانة'],tr:['ghalṭān','ghalṭāne'],en:'wrong / mistaken',pic:null}],
  r_albi:['Nice words',{ar:'قلبي',tr:'ʾalbi',en:'my heart (my darling)',pic:'❤️'}],
  r_malab:['On the team',{ar:'ملعب',tr:'malʿab',en:'pitch',pic:'🏟️'}],
  r_awwal:['Win or lose',{ar:'أوّل',tr:'awwal',en:'first',pic:'🥇'}],
  r_sarukh:['Getting there',{ar:'صاروخ',tr:'ṣārūkh',en:'rocket',pic:'🚀'}]};
 Object.entries(N).forEach(([id,[t,w]])=>{W[id]=w;
  for(const L of C.slice(0,2))for(const u of L.units||[])for(const ls of u.lessons||[])if(ls.title===t&&ls.words.length<6&&!ls.words.includes(id)){ls.words.push(id);return}});
})(window.YN_WORDS,window.YN_COURSE);
