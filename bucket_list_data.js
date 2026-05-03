// ============================================
// Bucket List Database v2 (最適化版)
// キー・バリュー オブジェクト形式
// ============================================

const REGION_MAP = {
  "北海道": "🌨️ 北海道",
  "青森県": "🍎 東北",
  "岩手県": "🍎 東北",
  "宮城県": "🍎 東北",
  "秋田県": "🍎 東北",
  "山形県": "🍎 東北",
  "福島県": "🍎 東北",
  "茨城県": "🌸 関東",
  "栃木県": "🌸 関東",
  "群馬県": "🌸 関東",
  "埼玉県": "🌸 関東",
  "千葉県": "🌸 関東",
  "東京都": "🌸 関東",
  "神奈川県": "🌸 関東",
  "新潟県": "⛰️ 中部",
  "富山県": "⛰️ 中部",
  "石川県": "⛰️ 中部",
  "福井県": "⛰️ 中部",
  "山梨県": "⛰️ 中部",
  "長野県": "⛰️ 中部",
  "岐阜県": "⛰️ 中部",
  "静岡県": "⛰️ 中部",
  "愛知県": "⛰️ 中部",
  "三重県": "🦌 近畿",
  "滋賀県": "🦌 近畿",
  "京都府": "🦌 近畿",
  "大阪府": "🦌 近畿",
  "兵庫県": "🦌 近畿",
  "奈良県": "🦌 近畿",
  "和歌山県": "🦌 近畿",
  "鳥取県": "⛩️ 中国・四国",
  "島根県": "⛩️ 中国・四国",
  "岡山県": "⛩️ 中国・四国",
  "広島県": "⛩️ 中国・四国",
  "山口県": "⛩️ 中国・四国",
  "徳島県": "⛩️ 中国・四国",
  "香川県": "⛩️ 中国・四国",
  "愛媛県": "⛩️ 中国・四国",
  "高知県": "⛩️ 中国・四国",
  "福岡県": "🌺 九州・沖縄",
  "佐賀県": "🌺 九州・沖縄",
  "長崎県": "🌺 九州・沖縄",
  "熊本県": "🌺 九州・沖縄",
  "大分県": "🌺 九州・沖縄",
  "宮崎県": "🌺 九州・沖縄",
  "鹿児島県": "🌺 九州・沖縄",
  "沖縄県": "🌺 九州・沖縄"
};

const FLAGS = {"MILKY":1,"MIXED":2};

const BUCKET_LIST_DB = {
  "北海道登別温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "登別温泉",
    "stars": 3,
    "dayBath": "登別温泉郷滝乃家、祝いの宿登別グランドホテル、第一滝本館",
    "flags": 1,
    "coords": [
      141.1,
      42.43
    ]
  },
  "北海道湯の川温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "湯の川温泉",
    "stars": 3,
    "dayBath": "湯の川温泉 ホテル万葉、湯の川温泉 温泉ホテル",
    "flags": 0,
    "coords": [
      141.68,
      41.78
    ]
  },
  "北海道定山渓温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "定山渓温泉",
    "stars": 3,
    "dayBath": "定山渓グランドホテル瑞苑、定山渓鶴雅リゾート",
    "flags": 0,
    "coords": [
      141.1,
      42.98
    ]
  },
  "北海道ニセコ温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "ニセコ温泉",
    "stars": 3,
    "dayBath": "ニセコパークテラスホテル、グラフィア",
    "flags": 1,
    "coords": [
      140.69,
      42.8
    ]
  },
  "北海道網走温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "網走温泉",
    "stars": 3,
    "dayBath": "ホテル網走、能登屋ホテル",
    "flags": 0,
    "coords": [
      144.27,
      43.97
    ]
  },
  "北海道美幌峠温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "美幌峠温泉",
    "stars": 3,
    "dayBath": "望湖台温泉",
    "flags": 0,
    "coords": [
      144.07,
      43.83
    ]
  },
  "北海道阿寒湖温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "阿寒湖温泉",
    "stars": 3,
    "dayBath": "あかん遊久の里鶴雅、鄙の座",
    "flags": 0,
    "coords": [
      144.1,
      43.45
    ]
  },
  "北海道屈斜路温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "屈斜路温泉",
    "stars": 3,
    "dayBath": "レイクホテル屈斜路、湯元鶴雅",
    "flags": 0,
    "coords": [
      144.35,
      43.6
    ]
  },
  "北海道羅臼温泉": {
    "type": "onsen",
    "pref": "北海道",
    "name": "羅臼温泉",
    "stars": 3,
    "dayBath": "熊の湯（無料）、旅館 まるみ",
    "flags": 1,
    "coords": [
      145.2,
      44.02
    ]
  },
  "青森県酸ヶ湯温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "酸ヶ湯温泉",
    "stars": 3,
    "dayBath": "酸ヶ湯温泉旅館、八甲田ホテル",
    "flags": 3,
    "coords": [
      140.88,
      40.65
    ]
  },
  "青森県浅虫温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "浅虫温泉",
    "stars": 3,
    "dayBath": "浅虫温泉 旅館南宛、旅館大佛",
    "flags": 0,
    "coords": [
      140.87,
      40.85
    ]
  },
  "青森県大鰐温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "大鰐温泉",
    "stars": 3,
    "dayBath": "すきや亭、星野リゾート 青森屋",
    "flags": 0,
    "coords": [
      140.57,
      40.52
    ]
  },
  "青森県谷地温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "谷地温泉",
    "stars": 3,
    "dayBath": "谷地温泉（日本三大秘湯）",
    "flags": 1,
    "coords": [
      140.77,
      40.55
    ]
  },
  "青森県八甲田温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "八甲田温泉",
    "stars": 3,
    "dayBath": "酸ヶ湯温泉旅館",
    "flags": 1,
    "coords": [
      140.88,
      40.67
    ]
  },
  "青森県嶽温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "嶽温泉",
    "stars": 3,
    "dayBath": "山のホテル",
    "flags": 1,
    "coords": [
      140.52,
      40.67
    ]
  },
  "青森県下風呂温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "下風呂温泉",
    "stars": 3,
    "dayBath": "新湯旅館、浜館",
    "flags": 1,
    "coords": [
      141.12,
      41.45
    ]
  },
  "青森県恐山温泉": {
    "type": "onsen",
    "pref": "青森県",
    "name": "恐山温泉",
    "stars": 3,
    "dayBath": "恐山菩提寺（無料）",
    "flags": 1,
    "coords": [
      141.22,
      41.32
    ]
  },
  "岩手県繫温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "繫温泉",
    "stars": 3,
    "dayBath": "別邸 山の抄、旅館田中",
    "flags": 0,
    "coords": [
      140.9,
      39.72
    ]
  },
  "岩手県花巻温泉郷": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "花巻温泉郷",
    "stars": 3,
    "dayBath": "花巻温泉ホテルさか田",
    "flags": 0,
    "coords": [
      141.12,
      39.37
    ]
  },
  "岩手県金田一温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "金田一温泉",
    "stars": 3,
    "dayBath": "旅館 千葉旅館、旅館 佳松",
    "flags": 0,
    "coords": [
      141.28,
      40.31
    ]
  },
  "岩手県つなぎ温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "つなぎ温泉",
    "stars": 3,
    "dayBath": "ホテル紫苑",
    "flags": 0,
    "coords": [
      141.05,
      39.68
    ]
  },
  "岩手県藤七温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "藤七温泉",
    "stars": 3,
    "dayBath": "",
    "flags": 3,
    "coords": [
      140.97,
      39.95
    ]
  },
  "岩手県松川温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "松川温泉",
    "stars": 3,
    "dayBath": "",
    "flags": 1,
    "coords": [
      141,
      39.93
    ]
  },
  "岩手県須川温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "須川温泉",
    "stars": 3,
    "dayBath": "須川高原温泉",
    "flags": 1,
    "coords": [
      140.82,
      39.02
    ]
  },
  "岩手県大沢温泉": {
    "type": "onsen",
    "pref": "岩手県",
    "name": "大沢温泉",
    "stars": 3,
    "dayBath": "大沢温泉 湯治屋（宮沢賢治ゆかりの混浴露天）",
    "flags": 2,
    "coords": [
      141.12,
      39.37
    ]
  },
  "宮城県鳴子温泉": {
    "type": "onsen",
    "pref": "宮城県",
    "name": "鳴子温泉",
    "stars": 3,
    "dayBath": "鳴子温泉 旅館あづま、大沼旅館",
    "flags": 1,
    "coords": [
      140.73,
      38.73
    ]
  },
  "宮城県松島温泉": {
    "type": "onsen",
    "pref": "宮城県",
    "name": "松島温泉",
    "stars": 3,
    "dayBath": "ホテル海風土",
    "flags": 0,
    "coords": [
      141.07,
      38.37
    ]
  },
  "宮城県作並温泉": {
    "type": "onsen",
    "pref": "宮城県",
    "name": "作並温泉",
    "stars": 3,
    "dayBath": "ホテルニュー水戸屋、最上屋旅館",
    "flags": 0,
    "coords": [
      140.63,
      38.33
    ]
  },
  "秋田県玉川温泉": {
    "type": "onsen",
    "pref": "秋田県",
    "name": "玉川温泉",
    "stars": 3,
    "dayBath": "旅館田中",
    "flags": 0,
    "coords": [
      140.73,
      39.95
    ]
  },
  "秋田県乳頭温泉郷": {
    "type": "onsen",
    "pref": "秋田県",
    "name": "乳頭温泉郷",
    "stars": 3,
    "dayBath": "鶴の湯（600円）、黒湯、蟹場温泉",
    "flags": 3,
    "coords": [
      140.75,
      39.77
    ]
  },
  "秋田県後生掛温泉": {
    "type": "onsen",
    "pref": "秋田県",
    "name": "後生掛温泉",
    "stars": 3,
    "dayBath": "後生掛温泉（600円）",
    "flags": 3,
    "coords": [
      140.77,
      39.97
    ]
  },
  "秋田県蒸の湯温泉": {
    "type": "onsen",
    "pref": "秋田県",
    "name": "蒸の湯温泉",
    "stars": 3,
    "dayBath": "",
    "flags": 1,
    "coords": [
      140.75,
      39.97
    ]
  },
  "秋田県泥湯温泉": {
    "type": "onsen",
    "pref": "秋田県",
    "name": "泥湯温泉",
    "stars": 3,
    "dayBath": "",
    "flags": 0,
    "coords": [
      140.65,
      39.47
    ]
  },
  "山形県蔵王温泉": {
    "type": "onsen",
    "pref": "山形県",
    "name": "蔵王温泉",
    "stars": 2,
    "dayBath": "蔵王国際ホテル、深山荘高見屋",
    "flags": 3,
    "coords": [
      140.45,
      38.17
    ]
  },
  "山形県肘折温泉": {
    "type": "onsen",
    "pref": "山形県",
    "name": "肘折温泉",
    "stars": 2,
    "dayBath": "旅館松葉、肘折温泉 大浴場",
    "flags": 0,
    "coords": [
      140.27,
      38.72
    ]
  },
  "山形県天童温泉": {
    "type": "onsen",
    "pref": "山形県",
    "name": "天童温泉",
    "stars": 2,
    "dayBath": "ホテル天童、旅館 こんや",
    "flags": 0,
    "coords": [
      140.38,
      38.35
    ]
  },
  "山形県姥湯温泉": {
    "type": "onsen",
    "pref": "山形県",
    "name": "姥湯温泉",
    "stars": 2,
    "dayBath": "枡形屋（要予約・絶壁囲む秘湯）",
    "flags": 3,
    "coords": [
      140.22,
      37.9
    ]
  },
  "山形県滑川温泉": {
    "type": "onsen",
    "pref": "山形県",
    "name": "滑川温泉",
    "stars": 2,
    "dayBath": "",
    "flags": 1,
    "coords": [
      140.18,
      37.92
    ]
  },
  "福島県磐梯熱海温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "磐梯熱海温泉",
    "stars": 2,
    "dayBath": "ホテルハイマート",
    "flags": 0,
    "coords": [
      140.15,
      37.47
    ]
  },
  "福島県土湯温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "土湯温泉",
    "stars": 2,
    "dayBath": "玉子湯、あづま",
    "flags": 0,
    "coords": [
      140.28,
      37.65
    ]
  },
  "福島県会津東山温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "会津東山温泉",
    "stars": 2,
    "dayBath": "新滝、ホテル会津",
    "flags": 0,
    "coords": [
      139.93,
      37.5
    ]
  },
  "福島県飯坂温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "飯坂温泉",
    "stars": 2,
    "dayBath": "旅館大亀、ホテル福の湯",
    "flags": 0,
    "coords": [
      140.35,
      37.77
    ]
  },
  "福島県いわき湯本温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "いわき湯本温泉",
    "stars": 2,
    "dayBath": "スパリゾート ハワイアンズ",
    "flags": 0,
    "coords": [
      140.93,
      36.98
    ]
  },
  "福島県高湯温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "高湯温泉",
    "stars": 2,
    "dayBath": "旅館 玉子湯（700円）、吾妻屋",
    "flags": 1,
    "coords": [
      140.28,
      37.68
    ]
  },
  "福島県野地温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "野地温泉",
    "stars": 2,
    "dayBath": "野地温泉ホテル",
    "flags": 1,
    "coords": [
      140.22,
      37.72
    ]
  },
  "福島県新野地温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "新野地温泉",
    "stars": 2,
    "dayBath": "相模屋旅館",
    "flags": 1,
    "coords": [
      140.23,
      37.73
    ]
  },
  "福島県幕川温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "幕川温泉",
    "stars": 2,
    "dayBath": "水戸屋旅館、吉倉屋旅館",
    "flags": 1,
    "coords": [
      140.17,
      37.73
    ]
  },
  "福島県中ノ沢温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "中ノ沢温泉",
    "stars": 2,
    "dayBath": "花見月、蔦屋",
    "flags": 1,
    "coords": [
      140.12,
      37.58
    ]
  },
  "福島県沼尻温泉": {
    "type": "onsen",
    "pref": "福島県",
    "name": "沼尻温泉",
    "stars": 2,
    "dayBath": "沼尻温泉ロッジ",
    "flags": 1,
    "coords": [
      140.15,
      37.6
    ]
  },
  "群馬県草津温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "草津温泉",
    "stars": 2,
    "dayBath": "大滝乃湯、草津温泉ホテルコサイ、湯宿季の庭",
    "flags": 0,
    "coords": [
      138.6,
      36.62
    ]
  },
  "神奈川県箱根温泉": {
    "type": "onsen",
    "pref": "神奈川県",
    "name": "箱根温泉",
    "stars": 2,
    "dayBath": "箱根小涌園天悠、強羅花壇、富士屋ホテル",
    "flags": 0,
    "coords": [
      139.02,
      35.23
    ]
  },
  "群馬県伊香保温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "伊香保温泉",
    "stars": 2,
    "dayBath": "伊香保グランドホテル、木暮旅館",
    "flags": 0,
    "coords": [
      138.88,
      36.47
    ]
  },
  "群馬県万座温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "万座温泉",
    "stars": 2,
    "dayBath": "万座ホテル聚楽、万座プリンスホテル",
    "flags": 3,
    "coords": [
      138.47,
      36.57
    ]
  },
  "群馬県四万温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "四万温泉",
    "stars": 2,
    "dayBath": "四万たむら、四万やまぐち館、積善館",
    "flags": 2,
    "coords": [
      138.82,
      36.68
    ]
  },
  "群馬県みなかみ18湯温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "みなかみ18湯温泉",
    "stars": 2,
    "dayBath": "みなかみ町 月夜野温泉郷",
    "flags": 0,
    "coords": [
      138.97,
      36.77
    ]
  },
  "群馬県宝川温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "宝川温泉",
    "stars": 2,
    "dayBath": "汪泉閣（470畳・湯浴み着混浴）",
    "flags": 2,
    "coords": [
      139.05,
      36.85
    ]
  },
  "群馬県尻焼温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "尻焼温泉",
    "stars": 2,
    "dayBath": "",
    "flags": 2,
    "coords": [
      138.57,
      36.67
    ]
  },
  "群馬県老神温泉": {
    "type": "onsen",
    "pref": "群馬県",
    "name": "老神温泉",
    "stars": 2,
    "dayBath": "伍楼閣（正午〜15時）",
    "flags": 2,
    "coords": [
      139.28,
      36.72
    ]
  },
  "栃木県鬼怒川温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "鬼怒川温泉",
    "stars": 2,
    "dayBath": "鬼怒川温泉ホテル、あさや",
    "flags": 0,
    "coords": [
      139.6,
      36.83
    ]
  },
  "栃木県日光湯元温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "日光湯元温泉",
    "stars": 2,
    "dayBath": "奥日光高原ホテル",
    "flags": 1,
    "coords": [
      139.4,
      36.8
    ]
  },
  "栃木県塩原温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "塩原新湯温泉",
    "stars": 2,
    "dayBath": "ホテル塩原、旅館 彩つむぎ",
    "flags": 3,
    "coords": [
      139.83,
      36.97
    ]
  },
  "栃木県日光温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "日光温泉",
    "stars": 2,
    "dayBath": "奥日光高原ホテル、ホテルニューパレス",
    "flags": 0,
    "coords": [
      139.62,
      36.75
    ]
  },
  "栃木県那須湯本温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "那須湯本温泉（鹿の湯）",
    "stars": 2,
    "dayBath": "鹿の湯（500円・1380年前開湯）",
    "flags": 3,
    "coords": [
      139.97,
      37.1
    ]
  },
  "栃木県塩原元湯温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "塩原元湯温泉",
    "stars": 2,
    "dayBath": "大出館",
    "flags": 1,
    "coords": [
      139.82,
      36.98
    ]
  },
  "栃木県北温泉": {
    "type": "onsen",
    "pref": "栃木県",
    "name": "北温泉",
    "stars": 2,
    "dayBath": "",
    "flags": 2,
    "coords": [
      139.95,
      37.1
    ]
  },
  "埼玉県鬼怒川上流温泉": {
    "type": "onsen",
    "pref": "埼玉県",
    "name": "鬼怒川上流温泉",
    "stars": 2,
    "dayBath": "ホテル那智の滝",
    "flags": 0,
    "coords": [
      139.6,
      36.87
    ]
  },
  "千葉県勝浦温泉": {
    "type": "onsen",
    "pref": "千葉県",
    "name": "勝浦温泉",
    "stars": 1,
    "dayBath": "ホテル勝浦、丸万旅館",
    "flags": 0,
    "coords": [
      140.13,
      35.15
    ]
  },
  "千葉県鴨川温泉": {
    "type": "onsen",
    "pref": "千葉県",
    "name": "鴨川温泉",
    "stars": 1,
    "dayBath": "ホテルグランミラージュ",
    "flags": 0,
    "coords": [
      140.1,
      35.1
    ]
  },
  "茨城県袋田温泉": {
    "type": "onsen",
    "pref": "茨城県",
    "name": "袋田温泉",
    "stars": 1,
    "dayBath": "袋田温泉 旅館",
    "flags": 0,
    "coords": [
      140.38,
      36.77
    ]
  },
  "東京都奥多摩温泉": {
    "type": "onsen",
    "pref": "東京都",
    "name": "奥多摩温泉",
    "stars": 1,
    "dayBath": "宿 やまぼうし",
    "flags": 0,
    "coords": [
      139.1,
      35.78
    ]
  },
  "東京都式根島温泉": {
    "type": "onsen",
    "pref": "東京都",
    "name": "式根島温泉",
    "stars": 1,
    "dayBath": "松が下雅湯（無料・海岸野天混浴）",
    "flags": 2,
    "coords": [
      139.22,
      34.33
    ]
  },
  "岐阜県下呂温泉": {
    "type": "onsen",
    "pref": "岐阜県",
    "name": "下呂温泉",
    "stars": 1,
    "dayBath": "水明館、下呂観光ホテルしょうげつ、小川屋、湯之島館",
    "flags": 0,
    "coords": [
      137.25,
      35.8
    ]
  },
  "福井県あわら温泉": {
    "type": "onsen",
    "pref": "福井県",
    "name": "あわら温泉",
    "stars": 1,
    "dayBath": "あわら温泉 青雲閣、福朋プラス",
    "flags": 0,
    "coords": [
      136.23,
      36.23
    ]
  },
  "石川県和倉温泉": {
    "type": "onsen",
    "pref": "石川県",
    "name": "和倉温泉",
    "stars": 1,
    "dayBath": "加賀屋、あえの風、加賀屋別邸松乃碧",
    "flags": 0,
    "coords": [
      136.98,
      37.05
    ]
  },
  "石川県山代温泉": {
    "type": "onsen",
    "pref": "石川県",
    "name": "山代温泉",
    "stars": 1,
    "dayBath": "葉渡莉、日本の宿のと楽",
    "flags": 0,
    "coords": [
      136.45,
      36.37
    ]
  },
  "石川県山中温泉": {
    "type": "onsen",
    "pref": "石川県",
    "name": "山中温泉",
    "stars": 1,
    "dayBath": "",
    "flags": 0,
    "coords": [
      136.38,
      36.27
    ]
  },
  "長野県野沢温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "野沢温泉",
    "stars": 1,
    "dayBath": "野沢温泉 やしおん、ホテル志賀",
    "flags": 0,
    "coords": [
      138.43,
      36.92
    ]
  },
  "長野県昼神温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "昼神温泉",
    "stars": 1,
    "dayBath": "",
    "flags": 0,
    "coords": [
      137.67,
      35.47
    ]
  },
  "長野県上諏訪温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "上諏訪温泉",
    "stars": 1,
    "dayBath": "浜の湯、ホテル霧ヶ峰",
    "flags": 0,
    "coords": [
      138.12,
      36.03
    ]
  },
  "長野県白馬八方温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "白馬八方温泉",
    "stars": 1,
    "dayBath": "白馬オーロラビレッジホテル",
    "flags": 0,
    "coords": [
      137.87,
      36.7
    ]
  },
  "長野県白骨温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "白骨温泉",
    "stars": 1,
    "dayBath": "湯元齢泉 白骨、泡の湯（混浴大露天70坪）",
    "flags": 3,
    "coords": [
      137.72,
      36.17
    ]
  },
  "長野県乗鞍高原温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "乗鞍高原温泉",
    "stars": 1,
    "dayBath": "湯けむり館（710円）",
    "flags": 1,
    "coords": [
      137.62,
      36.13
    ]
  },
  "長野県五色温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "五色温泉（乗鞍）",
    "stars": 1,
    "dayBath": "五色温泉旅館",
    "flags": 1,
    "coords": [
      137.6,
      36.1
    ]
  },
  "長野県七味温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "七味温泉",
    "stars": 1,
    "dayBath": "渓山荘、ホテル花屋",
    "flags": 3,
    "coords": [
      138.35,
      36.52
    ]
  },
  "長野県奥山田温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "奥山田温泉",
    "stars": 1,
    "dayBath": "満山荘",
    "flags": 1,
    "coords": [
      138.37,
      36.53
    ]
  },
  "山梨県富士急温泉": {
    "type": "onsen",
    "pref": "山梨県",
    "name": "富士急温泉",
    "stars": 1,
    "dayBath": "山中温泉 獅子吼、こおろぎ",
    "flags": 0,
    "coords": [
      138.57,
      35.37
    ]
  },
  "山梨県下部温泉": {
    "type": "onsen",
    "pref": "山梨県",
    "name": "下部温泉",
    "stars": 1,
    "dayBath": "下部温泉郷 湯之奥鉱泉館",
    "flags": 0,
    "coords": [
      138.47,
      35.47
    ]
  },
  "富山県宇奈月温泉": {
    "type": "onsen",
    "pref": "富山県",
    "name": "宇奈月温泉",
    "stars": 1,
    "dayBath": "宇奈月温泉 延対寺荘",
    "flags": 0,
    "coords": [
      137.58,
      36.87
    ]
  },
  "岐阜県飛騨高山温泉": {
    "type": "onsen",
    "pref": "岐阜県",
    "name": "飛騨高山温泉",
    "stars": 1,
    "dayBath": "飛騨亭花扇、ホテルアソシア高山リゾート",
    "flags": 0,
    "coords": [
      137.25,
      36.15
    ]
  },
  "岐阜県奥飛騨温泉郷": {
    "type": "onsen",
    "pref": "岐阜県",
    "name": "奥飛騨温泉郷",
    "stars": 1,
    "dayBath": "奥飛騨ガーデンホテル焼岳、ひらゆの森",
    "flags": 1,
    "coords": [
      137.58,
      36.42
    ]
  },
  "岐阜県新穂高温泉": {
    "type": "onsen",
    "pref": "岐阜県",
    "name": "新穂高温泉",
    "stars": 1,
    "dayBath": "穂高荘山のホテル、深山荘（500円）",
    "flags": 2,
    "coords": [
      137.58,
      36.43
    ]
  },
  "新潟県越後湯沢温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "越後湯沢温泉",
    "stars": 1,
    "dayBath": "越後湯沢温泉ホテル国際、雪國",
    "flags": 0,
    "coords": [
      138.82,
      36.93
    ]
  },
  "新潟県月岡温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "月岡温泉",
    "stars": 1,
    "dayBath": "ホテル泉迎館",
    "flags": 0,
    "coords": [
      139.28,
      37.77
    ]
  },
  "新潟県赤倉温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "赤倉温泉",
    "stars": 1,
    "dayBath": "ホテルヴィレッジ、華翠苑",
    "flags": 0,
    "coords": [
      138.55,
      36.95
    ]
  },
  "新潟県瀬波温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "瀬波温泉",
    "stars": 1,
    "dayBath": "ホテル日高、龍言",
    "flags": 0,
    "coords": [
      139.42,
      38.08
    ]
  },
  "新潟県燕温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "燕温泉",
    "stars": 1,
    "dayBath": "河原の湯（無料・乳白色野天混浴）",
    "flags": 3,
    "coords": [
      138.73,
      36.92
    ]
  },
  "新潟県蓮華温泉": {
    "type": "onsen",
    "pref": "新潟県",
    "name": "蓮華温泉",
    "stars": 1,
    "dayBath": "",
    "flags": 3,
    "coords": [
      137.88,
      36.77
    ]
  },
  "富山県黒部峡谷温泉": {
    "type": "onsen",
    "pref": "富山県",
    "name": "黒部峡谷温泉",
    "stars": 1,
    "dayBath": "黒部峡谷温泉 泊",
    "flags": 0,
    "coords": [
      137.65,
      36.88
    ]
  },
  "長野県戸倉上山田温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "戸倉上山田温泉",
    "stars": 1,
    "dayBath": "ホテル大日本、ホテル国際21",
    "flags": 0,
    "coords": [
      138.18,
      36.42
    ]
  },
  "長野県岡谷温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "岡谷温泉",
    "stars": 1,
    "dayBath": "ホテル岡谷",
    "flags": 0,
    "coords": [
      138.05,
      36.07
    ]
  },
  "長野県斑尾高原温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "斑尾高原温泉",
    "stars": 0,
    "dayBath": "斑尾高原ホテル",
    "flags": 0,
    "coords": [
      138.37,
      36.93
    ]
  },
  "岐阜県白川郷温泉": {
    "type": "onsen",
    "pref": "岐阜県",
    "name": "白川郷温泉",
    "stars": 0,
    "dayBath": "お宿 かねや、合掌の湯",
    "flags": 0,
    "coords": [
      0,
      0
    ]
  },
  "静岡県熱海温泉": {
    "type": "onsen",
    "pref": "静岡県",
    "name": "熱海温泉",
    "stars": 0,
    "dayBath": "熱海後楽園ホテル、古屋旅館",
    "flags": 0,
    "coords": [
      0,
      0
    ]
  },
  "静岡県伊東温泉": {
    "type": "onsen",
    "pref": "静岡県",
    "name": "伊東温泉",
    "stars": 0,
    "dayBath": "ホテルきらら、ホテルニューアカオ",
    "flags": 0,
    "coords": [
      0,
      0
    ]
  },
  "静岡県浜名湖かんざんじ温泉": {
    "type": "onsen",
    "pref": "静岡県",
    "name": "浜名湖かんざんじ温泉",
    "stars": 0,
    "dayBath": "ホテルウェルシーズン浜名湖",
    "flags": 0,
    "coords": [
      0,
      0
    ]
  },
  "長野県木曽路温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "木曽路温泉",
    "stars": 0,
    "dayBath": "ホテル木曽路",
    "flags": 0,
    "coords": [
      137.72,
      35.87
    ]
  },
  "長野県別所温泉": {
    "type": "onsen",
    "pref": "長野県",
    "name": "別所温泉",
    "stars": 0,
    "dayBath": "旅館 中屋、湯宿 上松屋",
    "flags": 0,
    "coords": [
      138.15,
      36.35
    ]
  },
  "山梨県西山温泉": {
    "type": "onsen",
    "pref": "山梨県",
    "name": "西山温泉",
    "stars": 0,
    "dayBath": "慶雲館",
    "flags": 0,
    "coords": [
      138.27,
      35.57
    ]
  },
  "愛知県南知多温泉郷": {
    "type": "onsen",
    "pref": "愛知県",
    "name": "南知多温泉郷",
    "stars": 0,
    "dayBath": "ホテル南知多",
    "flags": 0,
    "coords": [
      136.93,
      34.7
    ]
  },
  "兵庫県有馬温泉": {
    "type": "onsen",
    "pref": "兵庫県",
    "name": "有馬温泉",
    "stars": 0,
    "dayBath": "有馬温泉 大黒屋、兆楽",
    "flags": 0,
    "coords": [
      135.25,
      34.8
    ]
  },
  "兵庫県城崎温泉": {
    "type": "onsen",
    "pref": "兵庫県",
    "name": "城崎温泉",
    "stars": 0,
    "dayBath": "西村屋本館、西村屋ホテル招月庭",
    "flags": 0,
    "coords": [
      134.82,
      35.63
    ]
  },
  "兵庫県淡路島東浦温泉": {
    "type": "onsen",
    "pref": "兵庫県",
    "name": "淡路島東浦温泉",
    "stars": 0,
    "dayBath": "ウェスティンホテル淡路",
    "flags": 0,
    "coords": [
      134.97,
      34.47
    ]
  },
  "和歌山県南紀白浜温泉": {
    "type": "onsen",
    "pref": "和歌山県",
    "name": "南紀白浜温泉",
    "stars": 0,
    "dayBath": "南紀白浜温泉ロイヤルホテル",
    "flags": 0,
    "coords": [
      135.37,
      33.68
    ]
  },
  "滋賀県雄琴温泉": {
    "type": "onsen",
    "pref": "滋賀県",
    "name": "雄琴温泉",
    "stars": 0,
    "dayBath": "琵琶湖マリオットホテル",
    "flags": 0,
    "coords": [
      135.88,
      35.12
    ]
  },
  "京都府天橋立温泉": {
    "type": "onsen",
    "pref": "京都府",
    "name": "天橋立温泉",
    "stars": 0,
    "dayBath": "宮津温泉 ホテル北都",
    "flags": 0,
    "coords": [
      135.18,
      35.57
    ]
  },
  "滋賀県奥びわ温泉": {
    "type": "onsen",
    "pref": "滋賀県",
    "name": "奥びわ温泉",
    "stars": 0,
    "dayBath": "ホテル湖南",
    "flags": 0,
    "coords": [
      136.12,
      35.53
    ]
  },
  "大阪府泉南トルマリン温泉": {
    "type": "onsen",
    "pref": "大阪府",
    "name": "泉南トルマリン温泉",
    "stars": 0,
    "dayBath": "ゆりの湯",
    "flags": 0,
    "coords": [
      135.37,
      34.37
    ]
  },
  "京都府丹後温泉": {
    "type": "onsen",
    "pref": "京都府",
    "name": "丹後温泉",
    "stars": 0,
    "dayBath": "丹後温泉 琴引浜",
    "flags": 0,
    "coords": [
      135.07,
      35.62
    ]
  },
  "和歌山県田辺温泉": {
    "type": "onsen",
    "pref": "和歌山県",
    "name": "田辺温泉",
    "stars": 0,
    "dayBath": "ホテル季楽、うめ乃湯",
    "flags": 0,
    "coords": [
      135.37,
      33.73
    ]
  },
  "和歌山県川湯温泉": {
    "type": "onsen",
    "pref": "和歌山県",
    "name": "川湯温泉（仙人風呂）",
    "stars": 0,
    "dayBath": "仙人風呂（12〜2月無料・川を堰き止めた超大型混浴）",
    "flags": 2,
    "coords": [
      135.92,
      33.87
    ]
  },
  "三重県志摩温泉": {
    "type": "onsen",
    "pref": "三重県",
    "name": "志摩温泉",
    "stars": 0,
    "dayBath": "志摩観光ホテル",
    "flags": 0,
    "coords": [
      136.83,
      34.32
    ]
  },
  "愛媛県道後温泉": {
    "type": "onsen",
    "pref": "愛媛県",
    "name": "道後温泉",
    "stars": 0,
    "dayBath": "道後舘、花ゆづき、別邸朧月夜、ホテル椿館",
    "flags": 0,
    "coords": [
      132.88,
      33.85
    ]
  },
  "香川県こんぴら温泉郷": {
    "type": "onsen",
    "pref": "香川県",
    "name": "こんぴら温泉郷",
    "stars": 0,
    "dayBath": "琴参閣、こんぴら温泉華の湯",
    "flags": 0,
    "coords": [
      133.82,
      34.18
    ]
  },
  "山口県長門湯本温泉": {
    "type": "onsen",
    "pref": "山口県",
    "name": "長門湯本温泉",
    "stars": 0,
    "dayBath": "長門天然温泉",
    "flags": 0,
    "coords": [
      131.42,
      34.38
    ]
  },
  "広島県宮島温泉": {
    "type": "onsen",
    "pref": "広島県",
    "name": "宮島温泉",
    "stars": 0,
    "dayBath": "グランドホテル有もと、星の宿",
    "flags": 0,
    "coords": [
      132.32,
      34.3
    ]
  },
  "香川県高松温泉": {
    "type": "onsen",
    "pref": "香川県",
    "name": "高松温泉",
    "stars": 0,
    "dayBath": "スパイラル高松",
    "flags": 0,
    "coords": [
      134.05,
      34.35
    ]
  },
  "愛媛県北条温泉": {
    "type": "onsen",
    "pref": "愛媛県",
    "name": "北条温泉",
    "stars": 0,
    "dayBath": "ホテルしおさい北条",
    "flags": 0,
    "coords": [
      132.73,
      33.97
    ]
  },
  "山口県湯田温泉": {
    "type": "onsen",
    "pref": "山口県",
    "name": "湯田温泉",
    "stars": 0,
    "dayBath": "ホテル湯田、山陽旅館",
    "flags": 0,
    "coords": [
      131.47,
      34.17
    ]
  },
  "鳥取県三朝温泉": {
    "type": "onsen",
    "pref": "鳥取県",
    "name": "三朝温泉",
    "stars": 0,
    "dayBath": "ホテル泉都、旅館 大橋",
    "flags": 0,
    "coords": [
      133.83,
      35.37
    ]
  },
  "島根県玉造温泉": {
    "type": "onsen",
    "pref": "島根県",
    "name": "玉造温泉",
    "stars": 0,
    "dayBath": "佳翠苑皆美、ホテル玉泉",
    "flags": 0,
    "coords": [
      132.97,
      35.43
    ]
  },
  "岡山県湯郷温泉": {
    "type": "onsen",
    "pref": "岡山県",
    "name": "湯郷温泉",
    "stars": 0,
    "dayBath": "ホテル東亜、旅館 ひらたや",
    "flags": 0,
    "coords": [
      134.18,
      34.98
    ]
  },
  "高知県いの町温泉": {
    "type": "onsen",
    "pref": "高知県",
    "name": "いの町温泉",
    "stars": 0,
    "dayBath": "いの町温泉 旅館",
    "flags": 0,
    "coords": [
      133.42,
      33.55
    ]
  },
  "大分県別府八湯温泉": {
    "type": "onsen",
    "pref": "大分県",
    "name": "別府八湯温泉",
    "stars": 0,
    "dayBath": "杉乃井ホテル、別府温泉ホテル、竹瓦温泉",
    "flags": 1,
    "coords": [
      131.48,
      33.28
    ]
  },
  "鹿児島県指宿温泉": {
    "type": "onsen",
    "pref": "鹿児島県",
    "name": "指宿温泉",
    "stars": 0,
    "dayBath": "いぶすき秀水園、指宿白水館",
    "flags": 0,
    "coords": [
      130.63,
      31.25
    ]
  },
  "熊本県黒川温泉": {
    "type": "onsen",
    "pref": "熊本県",
    "name": "黒川温泉",
    "stars": 0,
    "dayBath": "黒川荘、山みず木、旅館山河",
    "flags": 2,
    "coords": [
      131.08,
      33
    ]
  },
  "大分県由布院温泉": {
    "type": "onsen",
    "pref": "大分県",
    "name": "由布院温泉",
    "stars": 0,
    "dayBath": "亀の井別荘、由布院玉の湯",
    "flags": 0,
    "coords": [
      131.37,
      33.25
    ]
  },
  "福岡県福岡温泉": {
    "type": "onsen",
    "pref": "福岡県",
    "name": "福岡温泉",
    "stars": 0,
    "dayBath": "博多の湯",
    "flags": 0,
    "coords": [
      130.42,
      33.6
    ]
  },
  "大分県奥日田温泉": {
    "type": "onsen",
    "pref": "大分県",
    "name": "奥日田温泉",
    "stars": 0,
    "dayBath": "旅館 中山館",
    "flags": 0,
    "coords": [
      131.12,
      33.33
    ]
  },
  "福岡県二日市温泉": {
    "type": "onsen",
    "pref": "福岡県",
    "name": "二日市温泉",
    "stars": 0,
    "dayBath": "太宰府温泉",
    "flags": 0,
    "coords": [
      130.52,
      33.52
    ]
  },
  "佐賀県嬉野温泉": {
    "type": "onsen",
    "pref": "佐賀県",
    "name": "嬉野温泉",
    "stars": 0,
    "dayBath": "ホテル桜、旅館 大村屋",
    "flags": 1,
    "coords": [
      130,
      33.1
    ]
  },
  "長崎県小浜温泉": {
    "type": "onsen",
    "pref": "長崎県",
    "name": "小浜温泉",
    "stars": 0,
    "dayBath": "ホテル小浜、しおさい小浜",
    "flags": 0,
    "coords": [
      130.2,
      32.72
    ]
  },
  "熊本県菊池温泉": {
    "type": "onsen",
    "pref": "熊本県",
    "name": "菊池温泉",
    "stars": 0,
    "dayBath": "ホテルパレス",
    "flags": 0,
    "coords": [
      130.82,
      32.98
    ]
  },
  "熊本県玉名温泉": {
    "type": "onsen",
    "pref": "熊本県",
    "name": "玉名温泉",
    "stars": 0,
    "dayBath": "ホテルメイ",
    "flags": 0,
    "coords": [
      130.57,
      32.92
    ]
  },
  "福岡県原鶴温泉": {
    "type": "onsen",
    "pref": "福岡県",
    "name": "原鶴温泉",
    "stars": 0,
    "dayBath": "ホテル原鶴",
    "flags": 0,
    "coords": [
      130.72,
      33.38
    ]
  },
  "熊本県豊礼の湯": {
    "type": "onsen",
    "pref": "熊本県",
    "name": "豊礼の湯",
    "stars": 0,
    "dayBath": "豊礼の湯（500円・コバルトブルー乳白色）",
    "flags": 3,
    "coords": [
      131.18,
      33.22
    ]
  },
  "熊本県赤川温泉": {
    "type": "onsen",
    "pref": "熊本県",
    "name": "赤川温泉",
    "stars": 0,
    "dayBath": "赤川荘（300円）",
    "flags": 1,
    "coords": [
      131.23,
      33.12
    ]
  },
  "長崎県雲仙温泉": {
    "type": "onsen",
    "pref": "長崎県",
    "name": "雲仙温泉",
    "stars": 0,
    "dayBath": "小地獄温泉館（300円）",
    "flags": 1,
    "coords": [
      130.22,
      32.72
    ]
  },
  "宮崎県霧島温泉郷": {
    "type": "onsen",
    "pref": "宮崎県",
    "name": "霧島温泉郷",
    "stars": 0,
    "dayBath": "霧島ホテル",
    "flags": 0,
    "coords": [
      130.87,
      31.9
    ]
  },
  "鹿児島県霧島新湯温泉": {
    "type": "onsen",
    "pref": "鹿児島県",
    "name": "霧島新湯温泉",
    "stars": 0,
    "dayBath": "湯之谷山荘（500円・乳白色硫黄泉）",
    "flags": 1,
    "coords": [
      130.88,
      31.92
    ]
  },
  "沖縄県那覇温泉": {
    "type": "onsen",
    "pref": "沖縄県",
    "name": "那覇温泉",
    "stars": 0,
    "dayBath": "那覇温泉 ホテル那覇",
    "flags": 0,
    "coords": [
      127.68,
      26.22
    ]
  },
  "北海道ジンギスカン": {
    "type": "gourmet",
    "pref": "北海道",
    "city": "札幌市",
    "food": "ジンギスカン",
    "shop": "成吉思汗 だるま",
    "coords": [
      141.35,
      43.06
    ]
  },
  "北海道スープカレー": {
    "type": "gourmet",
    "pref": "北海道",
    "city": "札幌市",
    "food": "スープカレー",
    "shop": "マジックスパイス",
    "coords": [
      141.35,
      43.07
    ]
  },
  "北海道石狩鍋": {
    "type": "gourmet",
    "pref": "北海道",
    "city": "石狩市",
    "food": "石狩鍋",
    "shop": "金大亭",
    "coords": [
      141.3,
      43.2
    ]
  },
  "北海道海鮮丼": {
    "type": "gourmet",
    "pref": "北海道",
    "city": "小樽市",
    "food": "海鮮丼（ウニ・イクラ）",
    "shop": "うにむらかみ",
    "coords": [
      141,
      43.18
    ]
  },
  "青森せんべい汁": {
    "type": "gourmet",
    "pref": "青森県",
    "city": "八戸市",
    "food": "せんべい汁",
    "shop": "みなと食堂",
    "coords": [
      141.48,
      40.51
    ]
  },
  "青森いちご煮": {
    "type": "gourmet",
    "pref": "青森県",
    "city": "八戸市",
    "food": "いちご煮",
    "shop": "割烹 銀波",
    "coords": [
      141.49,
      40.52
    ]
  },
  "青森十和田バラ焼き": {
    "type": "gourmet",
    "pref": "青森県",
    "city": "十和田市",
    "food": "十和田バラ焼き",
    "shop": "司バラ焼き大衆食堂",
    "coords": [
      141.2,
      40.61
    ]
  },
  "岩手わんこそば": {
    "type": "gourmet",
    "pref": "岩手県",
    "city": "盛岡市",
    "food": "わんこそば",
    "shop": "東家",
    "coords": [
      141.15,
      39.7
    ]
  },
  "岩手盛岡冷麺": {
    "type": "gourmet",
    "pref": "岩手県",
    "city": "盛岡市",
    "food": "盛岡冷麺",
    "shop": "ぴょんぴょん舎",
    "coords": [
      141.16,
      39.71
    ]
  },
  "岩手盛岡じゃじゃ麺": {
    "type": "gourmet",
    "pref": "岩手県",
    "city": "盛岡市",
    "food": "盛岡じゃじゃ麺",
    "shop": "白龍",
    "coords": [
      141.17,
      39.69
    ]
  },
  "宮城牛タン": {
    "type": "gourmet",
    "pref": "宮城県",
    "city": "仙台市",
    "food": "牛タン焼き",
    "shop": "たんや善治郎",
    "coords": [
      140.87,
      38.27
    ]
  },
  "宮城ずんだ餅": {
    "type": "gourmet",
    "pref": "宮城県",
    "city": "仙台市",
    "food": "ずんだ餅",
    "shop": "ずんだ茶寮",
    "coords": [
      140.88,
      38.28
    ]
  },
  "宮城はらこ飯": {
    "type": "gourmet",
    "pref": "宮城県",
    "city": "亘理町",
    "food": "はらこ飯",
    "shop": "田園",
    "coords": [
      140.85,
      38.03
    ]
  },
  "秋田きりたんぽ": {
    "type": "gourmet",
    "pref": "秋田県",
    "city": "秋田市",
    "food": "きりたんぽ鍋",
    "shop": "濱乃家",
    "coords": [
      140.1,
      39.72
    ]
  },
  "秋田稲庭うどん": {
    "type": "gourmet",
    "pref": "秋田県",
    "city": "湯沢市",
    "food": "稲庭うどん",
    "shop": "佐藤養助",
    "coords": [
      140.5,
      39.17
    ]
  },
  "秋田いぶりがっこ": {
    "type": "gourmet",
    "pref": "秋田県",
    "city": "秋田市",
    "food": "いぶりがっこ",
    "shop": "桜食品",
    "coords": [
      140.11,
      39.73
    ]
  },
  "山形芋煮": {
    "type": "gourmet",
    "pref": "山形県",
    "city": "山形市",
    "food": "芋煮",
    "shop": "後藤屋",
    "coords": [
      140.35,
      38.25
    ]
  },
  "山形米沢牛": {
    "type": "gourmet",
    "pref": "山形県",
    "city": "米沢市",
    "food": "米沢牛",
    "shop": "登起波",
    "coords": [
      140.12,
      37.92
    ]
  },
  "山形板そば": {
    "type": "gourmet",
    "pref": "山形県",
    "city": "山形市",
    "food": "板そば",
    "shop": "そば処 三津屋",
    "coords": [
      140.36,
      38.26
    ]
  },
  "福島喜多方ラーメン": {
    "type": "gourmet",
    "pref": "福島県",
    "city": "喜多方市",
    "food": "喜多方ラーメン",
    "shop": "坂内食堂",
    "coords": [
      139.88,
      37.65
    ]
  },
  "福島なみえ焼そば": {
    "type": "gourmet",
    "pref": "福島県",
    "city": "浪江町",
    "food": "なみえ焼そば",
    "shop": "杉乃家",
    "coords": [
      141,
      37.48
    ]
  },
  "福島円盤餃子": {
    "type": "gourmet",
    "pref": "福島県",
    "city": "福島市",
    "food": "円盤餃子",
    "shop": "餃子 照井",
    "coords": [
      140.47,
      37.75
    ]
  },
  "茨城あんこう鍋": {
    "type": "gourmet",
    "pref": "茨城県",
    "city": "北茨城市",
    "food": "あんこう鍋",
    "shop": "山翠",
    "coords": [
      140.77,
      36.83
    ]
  },
  "茨城水戸納豆": {
    "type": "gourmet",
    "pref": "茨城県",
    "city": "水戸市",
    "food": "水戸納豆",
    "shop": "天狗納豆",
    "coords": [
      140.45,
      36.37
    ]
  },
  "茨城常陸牛": {
    "type": "gourmet",
    "pref": "茨城県",
    "city": "水戸市",
    "food": "常陸牛",
    "shop": "肉のイイジマ",
    "coords": [
      140.46,
      36.38
    ]
  },
  "栃木宇都宮餃子": {
    "type": "gourmet",
    "pref": "栃木県",
    "city": "宇都宮市",
    "food": "宇都宮餃子",
    "shop": "宇都宮みんみん",
    "coords": [
      139.88,
      36.55
    ]
  },
  "栃木佐野ラーメン": {
    "type": "gourmet",
    "pref": "栃木県",
    "city": "佐野市",
    "food": "佐野ラーメン",
    "shop": "日向屋",
    "coords": [
      139.58,
      36.32
    ]
  },
  "栃木しもつかれ": {
    "type": "gourmet",
    "pref": "栃木県",
    "city": "宇都宮市",
    "food": "しもつかれ",
    "shop": "藤井商店",
    "coords": [
      139.89,
      36.56
    ]
  },
  "群馬おきりこみ": {
    "type": "gourmet",
    "pref": "群馬県",
    "city": "前橋市",
    "food": "おきりこみ",
    "shop": "新田乃庄",
    "coords": [
      139.07,
      36.38
    ]
  },
  "群馬焼きまんじゅう": {
    "type": "gourmet",
    "pref": "群馬県",
    "city": "前橋市",
    "food": "焼きまんじゅう",
    "shop": "原嶋屋総本家",
    "coords": [
      139.08,
      36.39
    ]
  },
  "群馬水沢うどん": {
    "type": "gourmet",
    "pref": "群馬県",
    "city": "渋川市",
    "food": "水沢うどん",
    "shop": "田丸屋",
    "coords": [
      138.98,
      36.55
    ]
  },
  "埼玉冷汁うどん": {
    "type": "gourmet",
    "pref": "埼玉県",
    "city": "さいたま市",
    "food": "冷汁うどん",
    "shop": "わっしょい",
    "coords": [
      139.65,
      35.85
    ]
  },
  "埼玉草加せんべい": {
    "type": "gourmet",
    "pref": "埼玉県",
    "city": "草加市",
    "food": "草加せんべい",
    "shop": "山香煎餅本舗",
    "coords": [
      139.8,
      35.82
    ]
  },
  "埼玉ゼリーフライ": {
    "type": "gourmet",
    "pref": "埼玉県",
    "city": "行田市",
    "food": "ゼリーフライ",
    "shop": "駒形屋",
    "coords": [
      139.45,
      36.13
    ]
  },
  "千葉なめろう": {
    "type": "gourmet",
    "pref": "千葉県",
    "city": "南房総市",
    "food": "なめろう",
    "shop": "だいぼ",
    "coords": [
      139.85,
      35.03
    ]
  },
  "千葉勝浦タンタンメン": {
    "type": "gourmet",
    "pref": "千葉県",
    "city": "勝浦市",
    "food": "勝浦タンタンメン",
    "shop": "江ざわ",
    "coords": [
      140.13,
      35.15
    ]
  },
  "千葉落花生": {
    "type": "gourmet",
    "pref": "千葉県",
    "city": "八街市",
    "food": "落花生料理",
    "shop": "ますだの落花生",
    "coords": [
      140.32,
      35.65
    ]
  },
  "東京もんじゃ焼き": {
    "type": "gourmet",
    "pref": "東京都",
    "city": "中央区",
    "food": "もんじゃ焼き",
    "shop": "月島もんじゃ 近どう",
    "coords": [
      139.78,
      35.67
    ]
  },
  "東京江戸前寿司": {
    "type": "gourmet",
    "pref": "東京都",
    "city": "中央区",
    "food": "江戸前寿司",
    "shop": "銀座 寿司幸本店",
    "coords": [
      139.77,
      35.67
    ]
  },
  "東京深川飯": {
    "type": "gourmet",
    "pref": "東京都",
    "city": "江東区",
    "food": "深川飯",
    "shop": "深川宿",
    "coords": [
      139.82,
      35.67
    ]
  },
  "神奈川家系ラーメン": {
    "type": "gourmet",
    "pref": "神奈川県",
    "city": "横浜市",
    "food": "横浜家系ラーメン",
    "shop": "吉村家",
    "coords": [
      139.65,
      35.45
    ]
  },
  "神奈川しらす丼": {
    "type": "gourmet",
    "pref": "神奈川県",
    "city": "鎌倉市",
    "food": "しらす丼",
    "shop": "とびっちょ",
    "coords": [
      139.55,
      35.32
    ]
  },
  "神奈川海軍カレー": {
    "type": "gourmet",
    "pref": "神奈川県",
    "city": "横須賀市",
    "food": "よこすか海軍カレー",
    "shop": "ウッドアイランド",
    "coords": [
      139.67,
      35.28
    ]
  },
  "新潟へぎそば": {
    "type": "gourmet",
    "pref": "新潟県",
    "city": "十日町市",
    "food": "へぎそば",
    "shop": "小嶋屋総本店",
    "coords": [
      138.75,
      37.13
    ]
  },
  "新潟タレかつ丼": {
    "type": "gourmet",
    "pref": "新潟県",
    "city": "新潟市",
    "food": "タレかつ丼",
    "shop": "とんかつ太郎",
    "coords": [
      139.05,
      37.92
    ]
  },
  "新潟笹だんご": {
    "type": "gourmet",
    "pref": "新潟県",
    "city": "新潟市",
    "food": "笹だんご",
    "shop": "田中屋本店",
    "coords": [
      139.06,
      37.93
    ]
  },
  "富山ブラックラーメン": {
    "type": "ramen",
    "desc": "労働者のための、真っ黒で塩辛い「おかず」スープ。",
    "pref": "富山県",
    "city": "富山市",
    "food": "富山ブラック",
    "shop": "西町大喜",
    "coords": [
      137.22,
      36.7
    ]
  },
  "富山白えび": {
    "type": "gourmet",
    "pref": "富山県",
    "city": "富山市",
    "food": "白えび料理",
    "shop": "白えび亭",
    "coords": [
      137.23,
      36.71
    ]
  },
  "富山ます寿し": {
    "type": "gourmet",
    "pref": "富山県",
    "city": "富山市",
    "food": "ます寿し",
    "shop": "ますのすし本舗 源",
    "coords": [
      137.21,
      36.69
    ]
  },
  "石川金沢カレー": {
    "type": "gourmet",
    "pref": "石川県",
    "city": "金沢市",
    "food": "金沢カレー",
    "shop": "カレーのチャンピオン",
    "coords": [
      136.63,
      36.57
    ]
  },
  "石川治部煮": {
    "type": "gourmet",
    "pref": "石川県",
    "city": "金沢市",
    "food": "治部煮",
    "shop": "加賀料理 大志満",
    "coords": [
      136.64,
      36.58
    ]
  },
  "石川ハントンライス": {
    "type": "gourmet",
    "pref": "石川県",
    "city": "金沢市",
    "food": "ハントンライス",
    "shop": "グリルオーツカ",
    "coords": [
      136.62,
      36.56
    ]
  },
  "福井越前おろしそば": {
    "type": "gourmet",
    "pref": "福井県",
    "city": "越前市",
    "food": "越前おろしそば",
    "shop": "越前そばの里",
    "coords": [
      136.17,
      35.9
    ]
  },
  "福井ソースカツ丼": {
    "type": "gourmet",
    "pref": "福井県",
    "city": "福井市",
    "food": "ソースカツ丼",
    "shop": "ヨーロッパ軒",
    "coords": [
      136.22,
      36.07
    ]
  },
  "福井へしこ": {
    "type": "gourmet",
    "pref": "福井県",
    "city": "小浜市",
    "food": "へしこ",
    "shop": "千鳥苑",
    "coords": [
      135.75,
      35.5
    ]
  },
  "山梨ほうとう": {
    "type": "gourmet",
    "pref": "山梨県",
    "city": "富士吉田市",
    "food": "ほうとう",
    "shop": "ほうとう不動",
    "coords": [
      138.8,
      35.47
    ]
  },
  "山梨吉田うどん": {
    "type": "gourmet",
    "pref": "山梨県",
    "city": "富士吉田市",
    "food": "吉田のうどん",
    "shop": "麺許皆伝",
    "coords": [
      138.81,
      35.48
    ]
  },
  "山梨甲府鳥もつ煮": {
    "type": "gourmet",
    "pref": "山梨県",
    "city": "甲府市",
    "food": "甲府鳥もつ煮",
    "shop": "奥藤本店",
    "coords": [
      138.57,
      35.67
    ]
  },
  "長野信州そば": {
    "type": "gourmet",
    "pref": "長野県",
    "city": "長野市",
    "food": "信州そば",
    "shop": "戸隠そば 山口屋",
    "coords": [
      138.18,
      36.65
    ]
  },
  "長野おやき": {
    "type": "gourmet",
    "pref": "長野県",
    "city": "長野市",
    "food": "おやき",
    "shop": "小川の庄 おやき村",
    "coords": [
      138.19,
      36.66
    ]
  },
  "長野ソースかつ丼": {
    "type": "gourmet",
    "pref": "長野県",
    "city": "駒ヶ根市",
    "food": "駒ヶ根ソースかつ丼",
    "shop": "明治亭",
    "coords": [
      137.97,
      35.73
    ]
  },
  "岐阜飛騨牛": {
    "type": "gourmet",
    "pref": "岐阜県",
    "city": "高山市",
    "food": "飛騨牛ステーキ",
    "shop": "キッチン飛騨",
    "coords": [
      137.25,
      36.15
    ]
  },
  "岐阜朴葉味噌": {
    "type": "gourmet",
    "pref": "岐阜県",
    "city": "高山市",
    "food": "朴葉味噌",
    "shop": "飛騨 匠の館",
    "coords": [
      137.26,
      36.16
    ]
  },
  "岐阜鶏ちゃん": {
    "type": "gourmet",
    "pref": "岐阜県",
    "city": "下呂市",
    "food": "鶏ちゃん",
    "shop": "杉の子",
    "coords": [
      137.25,
      35.8
    ]
  },
  "静岡富士宮やきそば": {
    "type": "gourmet",
    "pref": "静岡県",
    "city": "富士宮市",
    "food": "富士宮やきそば",
    "shop": "富士宮やきそば学会",
    "coords": [
      138.62,
      35.22
    ]
  },
  "静岡浜松餃子": {
    "type": "gourmet",
    "pref": "静岡県",
    "city": "浜松市",
    "food": "浜松餃子",
    "shop": "石松餃子",
    "coords": [
      137.73,
      34.72
    ]
  },
  "静岡おでん": {
    "type": "gourmet",
    "pref": "静岡県",
    "city": "静岡市",
    "food": "静岡おでん",
    "shop": "三河屋",
    "coords": [
      138.38,
      34.97
    ]
  },
  "愛知ひつまぶし": {
    "type": "gourmet",
    "pref": "愛知県",
    "city": "名古屋市",
    "food": "ひつまぶし",
    "shop": "あつた蓬莱軒",
    "coords": [
      136.9,
      35.07
    ]
  },
  "愛知味噌カツ": {
    "type": "gourmet",
    "pref": "愛知県",
    "city": "名古屋市",
    "food": "味噌カツ",
    "shop": "矢場とん",
    "coords": [
      136.91,
      35.17
    ]
  },
  "愛知手羽先": {
    "type": "gourmet",
    "pref": "愛知県",
    "city": "名古屋市",
    "food": "手羽先唐揚げ",
    "shop": "世界の山ちゃん",
    "coords": [
      136.89,
      35.17
    ]
  },
  "愛知味噌煮込みうどん": {
    "type": "gourmet",
    "pref": "愛知県",
    "city": "名古屋市",
    "food": "味噌煮込みうどん",
    "shop": "山本屋総本家",
    "coords": [
      136.9,
      35.16
    ]
  },
  "三重松阪牛": {
    "type": "gourmet",
    "pref": "三重県",
    "city": "松阪市",
    "food": "松阪牛ステーキ",
    "shop": "和田金",
    "coords": [
      136.53,
      34.58
    ]
  },
  "三重伊勢うどん": {
    "type": "gourmet",
    "pref": "三重県",
    "city": "伊勢市",
    "food": "伊勢うどん",
    "shop": "ふくすけ",
    "coords": [
      136.72,
      34.48
    ]
  },
  "三重てこね寿司": {
    "type": "gourmet",
    "pref": "三重県",
    "city": "伊勢市",
    "food": "てこね寿司",
    "shop": "すし久",
    "coords": [
      136.73,
      34.49
    ]
  },
  "滋賀近江牛": {
    "type": "gourmet",
    "pref": "滋賀県",
    "city": "近江八幡市",
    "food": "近江牛",
    "shop": "せんなり亭 伽羅",
    "coords": [
      136.1,
      35.13
    ]
  },
  "滋賀ふなずし": {
    "type": "gourmet",
    "pref": "滋賀県",
    "city": "高島市",
    "food": "ふなずし",
    "shop": "魚治",
    "coords": [
      136.03,
      35.35
    ]
  },
  "滋賀焼き鯖そうめん": {
    "type": "gourmet",
    "pref": "滋賀県",
    "city": "木之本",
    "food": "焼き鯖そうめん",
    "shop": "翼果楼",
    "coords": [
      136.17,
      35.47
    ]
  },
  "京都湯豆腐": {
    "type": "gourmet",
    "pref": "京都府",
    "city": "京都市",
    "food": "湯豆腐",
    "shop": "南禅寺 順正",
    "coords": [
      135.78,
      35.02
    ]
  },
  "京都漬物": {
    "type": "gourmet",
    "pref": "京都府",
    "city": "京都市",
    "food": "京漬物",
    "shop": "西利",
    "coords": [
      135.77,
      34.98
    ]
  },
  "京都おばんざい": {
    "type": "gourmet",
    "pref": "京都府",
    "city": "京都市",
    "food": "おばんざい",
    "shop": "京菜味のむら",
    "coords": [
      135.76,
      34.99
    ]
  },
  "大阪たこ焼き": {
    "type": "gourmet",
    "pref": "大阪府",
    "city": "大阪市",
    "food": "たこ焼き",
    "shop": "たこやき道楽 わなか",
    "coords": [
      135.5,
      34.67
    ]
  },
  "大阪お好み焼き": {
    "type": "gourmet",
    "pref": "大阪府",
    "city": "大阪市",
    "food": "お好み焼き",
    "shop": "きじ",
    "coords": [
      135.51,
      34.7
    ]
  },
  "大阪串カツ": {
    "type": "gourmet",
    "pref": "大阪府",
    "city": "大阪市",
    "food": "串カツ",
    "shop": "串かつ だるま",
    "coords": [
      135.5,
      34.65
    ]
  },
  "兵庫神戸牛": {
    "type": "gourmet",
    "pref": "兵庫県",
    "city": "神戸市",
    "food": "神戸牛",
    "shop": "モーリヤ",
    "coords": [
      135.18,
      34.68
    ]
  },
  "兵庫明石焼き": {
    "type": "gourmet",
    "pref": "兵庫県",
    "city": "明石市",
    "food": "明石焼き",
    "shop": "本家きむらや",
    "coords": [
      135,
      34.65
    ]
  },
  "兵庫ぼっかけ": {
    "type": "gourmet",
    "pref": "兵庫県",
    "city": "神戸市",
    "food": "ぼっかけうどん",
    "shop": "長田本庄軒",
    "coords": [
      135.13,
      34.64
    ]
  },
  "奈良柿の葉ずし": {
    "type": "gourmet",
    "pref": "奈良県",
    "city": "吉野町",
    "food": "柿の葉ずし",
    "shop": "柿の葉すし本舗たなか",
    "coords": [
      135.87,
      34.4
    ]
  },
  "奈良三輪そうめん": {
    "type": "gourmet",
    "pref": "奈良県",
    "city": "桜井市",
    "food": "三輪そうめん",
    "shop": "池利",
    "coords": [
      135.85,
      34.52
    ]
  },
  "奈良茶粥": {
    "type": "gourmet",
    "pref": "奈良県",
    "city": "奈良市",
    "food": "茶粥",
    "shop": "塔の茶屋",
    "coords": [
      135.83,
      34.68
    ]
  },
  "和歌山めはり寿司": {
    "type": "gourmet",
    "pref": "和歌山県",
    "city": "新宮市",
    "food": "めはり寿司",
    "shop": "総本家めはりや",
    "coords": [
      135.98,
      33.72
    ]
  },
  "和歌山梅干し": {
    "type": "gourmet",
    "pref": "和歌山県",
    "city": "みなべ町",
    "food": "紀州梅干し",
    "shop": "中田食品",
    "coords": [
      135.33,
      33.77
    ]
  },
  "鳥取松葉がに": {
    "type": "gourmet",
    "pref": "鳥取県",
    "city": "鳥取市",
    "food": "松葉がに",
    "shop": "かに吉",
    "coords": [
      134.23,
      35.5
    ]
  },
  "鳥取大山どり": {
    "type": "gourmet",
    "pref": "鳥取県",
    "city": "鳥取市",
    "food": "大山どり料理",
    "shop": "強小亭",
    "coords": [
      134.24,
      35.51
    ]
  },
  "島根出雲そば": {
    "type": "gourmet",
    "pref": "島根県",
    "city": "出雲市",
    "food": "出雲そば",
    "shop": "羽根屋",
    "coords": [
      132.77,
      35.37
    ]
  },
  "島根しじみ汁": {
    "type": "gourmet",
    "pref": "島根県",
    "city": "松江市",
    "food": "しじみ汁",
    "shop": "しじみ茶屋",
    "coords": [
      133.05,
      35.47
    ]
  },
  "島根鯛めし": {
    "type": "gourmet",
    "pref": "島根県",
    "city": "松江市",
    "food": "鯛めし",
    "shop": "皆美館",
    "coords": [
      133.06,
      35.48
    ]
  },
  "岡山デミカツ丼": {
    "type": "gourmet",
    "pref": "岡山県",
    "city": "岡山市",
    "food": "デミカツ丼",
    "shop": "味司 野村",
    "coords": [
      133.93,
      34.65
    ]
  },
  "岡山カキオコ": {
    "type": "gourmet",
    "pref": "岡山県",
    "city": "備前市",
    "food": "岡山カキオコ",
    "shop": "タマちゃん",
    "coords": [
      134.18,
      34.73
    ]
  },
  "岡山ホルモンうどん": {
    "type": "gourmet",
    "pref": "岡山県",
    "city": "津山市",
    "food": "ホルモンうどん",
    "shop": "橋野食堂",
    "coords": [
      133.78,
      35.07
    ]
  },
  "広島お好み焼き": {
    "type": "gourmet",
    "pref": "広島県",
    "city": "広島市",
    "food": "広島風お好み焼き",
    "shop": "みっちゃん総本店",
    "coords": [
      132.45,
      34.38
    ]
  },
  "広島牡蠣": {
    "type": "gourmet",
    "pref": "広島県",
    "city": "廿日市市",
    "food": "牡蠣料理",
    "shop": "かき船 かなわ",
    "coords": [
      132.32,
      34.28
    ]
  },
  "広島あなご飯": {
    "type": "gourmet",
    "pref": "広島県",
    "city": "廿日市市",
    "food": "穴子飯",
    "shop": "うえの",
    "coords": [
      132.33,
      34.29
    ]
  },
  "山口ふぐ": {
    "type": "gourmet",
    "pref": "山口県",
    "city": "下関市",
    "food": "ふぐ料理",
    "shop": "春帆楼",
    "coords": [
      130.95,
      33.95
    ]
  },
  "山口瓦そば": {
    "type": "gourmet",
    "pref": "山口県",
    "city": "下関市",
    "food": "瓦そば",
    "shop": "元祖瓦そば たかせ",
    "coords": [
      130.96,
      33.96
    ]
  },
  "山口バリそば": {
    "type": "gourmet",
    "pref": "山口県",
    "city": "下関市",
    "food": "バリそば",
    "shop": "春来軒",
    "coords": [
      130.94,
      33.94
    ]
  },
  "徳島阿波尾鶏": {
    "type": "gourmet",
    "pref": "徳島県",
    "city": "徳島市",
    "food": "阿波尾鶏",
    "shop": "一鴻",
    "coords": [
      134.56,
      34.08
    ]
  },
  "徳島すだち": {
    "type": "gourmet",
    "pref": "徳島県",
    "city": "徳島市",
    "food": "すだち料理",
    "shop": "割烹 濱伊",
    "coords": [
      134.54,
      34.06
    ]
  },
  "香川讃岐うどん": {
    "type": "gourmet",
    "pref": "香川県",
    "city": "綾川町",
    "food": "讃岐うどん",
    "shop": "山越うどん",
    "coords": [
      133.9,
      34.22
    ]
  },
  "香川骨付鳥": {
    "type": "gourmet",
    "pref": "香川県",
    "city": "丸亀市",
    "food": "骨付鳥",
    "shop": "一鶴",
    "coords": [
      133.8,
      34.28
    ]
  },
  "香川しょうゆ豆": {
    "type": "gourmet",
    "pref": "香川県",
    "city": "高松市",
    "food": "しょうゆ豆",
    "shop": "豆匠 むらき",
    "coords": [
      134.05,
      34.35
    ]
  },
  "愛媛宇和島鯛めし": {
    "type": "gourmet",
    "pref": "愛媛県",
    "city": "宇和島市",
    "food": "宇和島鯛めし",
    "shop": "ほづみ亭",
    "coords": [
      132.57,
      33.22
    ]
  },
  "愛媛じゃこ天": {
    "type": "gourmet",
    "pref": "愛媛県",
    "city": "宇和島市",
    "food": "じゃこ天",
    "shop": "谷本蒲鉾店",
    "coords": [
      132.58,
      33.23
    ]
  },
  "愛媛今治焼鳥": {
    "type": "gourmet",
    "pref": "愛媛県",
    "city": "今治市",
    "food": "今治焼鳥",
    "shop": "五味鳥",
    "coords": [
      133,
      34.07
    ]
  },
  "高知カツオたたき": {
    "type": "gourmet",
    "pref": "高知県",
    "city": "高知市",
    "food": "カツオのたたき",
    "shop": "明神丸",
    "coords": [
      133.55,
      33.55
    ]
  },
  "高知鍋焼きラーメン": {
    "type": "gourmet",
    "pref": "高知県",
    "city": "須崎市",
    "food": "鍋焼きラーメン",
    "shop": "橋本食堂",
    "coords": [
      133.28,
      33.4
    ]
  },
  "高知皿鉢料理": {
    "type": "gourmet",
    "pref": "高知県",
    "city": "高知市",
    "food": "皿鉢料理",
    "shop": "司",
    "coords": [
      133.56,
      33.56
    ]
  },
  "福岡博多ラーメン": {
    "type": "gourmet",
    "pref": "福岡県",
    "city": "福岡市",
    "food": "博多ラーメン",
    "shop": "一風堂",
    "coords": [
      130.4,
      33.58
    ]
  },
  "福岡もつ鍋": {
    "type": "gourmet",
    "pref": "福岡県",
    "city": "福岡市",
    "food": "もつ鍋",
    "shop": "やま中",
    "coords": [
      130.41,
      33.6
    ]
  },
  "福岡水炊き": {
    "type": "gourmet",
    "pref": "福岡県",
    "city": "福岡市",
    "food": "水炊き",
    "shop": "華味鳥",
    "coords": [
      130.39,
      33.6
    ]
  },
  "福岡辛子明太子": {
    "type": "gourmet",
    "pref": "福岡県",
    "city": "福岡市",
    "food": "辛子明太子",
    "shop": "ふくや",
    "coords": [
      130.42,
      33.61
    ]
  },
  "佐賀呼子いか": {
    "type": "gourmet",
    "pref": "佐賀県",
    "city": "唐津市",
    "food": "呼子のいか",
    "shop": "河太郎",
    "coords": [
      129.87,
      33.52
    ]
  },
  "佐賀牛": {
    "type": "gourmet",
    "pref": "佐賀県",
    "city": "佐賀市",
    "food": "佐賀牛",
    "shop": "季楽",
    "coords": [
      130.3,
      33.25
    ]
  },
  "佐賀シシリアンライス": {
    "type": "gourmet",
    "pref": "佐賀県",
    "city": "佐賀市",
    "food": "シシリアンライス",
    "shop": "白山文雅",
    "coords": [
      130.31,
      33.26
    ]
  },
  "長崎ちゃんぽん": {
    "type": "gourmet",
    "pref": "長崎県",
    "city": "長崎市",
    "food": "ちゃんぽん",
    "shop": "四海樓",
    "coords": [
      129.87,
      32.75
    ]
  },
  "長崎皿うどん": {
    "type": "gourmet",
    "pref": "長崎県",
    "city": "長崎市",
    "food": "皿うどん",
    "shop": "江山楼",
    "coords": [
      129.88,
      32.76
    ]
  },
  "長崎佐世保バーガー": {
    "type": "gourmet",
    "pref": "長崎県",
    "city": "佐世保市",
    "food": "佐世保バーガー",
    "shop": "ヒカリ",
    "coords": [
      129.72,
      33.17
    ]
  },
  "長崎カステラ": {
    "type": "gourmet",
    "pref": "長崎県",
    "city": "長崎市",
    "food": "カステラ",
    "shop": "福砂屋",
    "coords": [
      129.86,
      32.74
    ]
  },
  "熊本馬刺し": {
    "type": "gourmet",
    "pref": "熊本県",
    "city": "熊本市",
    "food": "馬刺し",
    "shop": "菅乃屋",
    "coords": [
      130.7,
      32.8
    ]
  },
  "熊本太平燕": {
    "type": "gourmet",
    "pref": "熊本県",
    "city": "熊本市",
    "food": "太平燕",
    "shop": "紅蘭亭",
    "coords": [
      130.71,
      32.81
    ]
  },
  "熊本からし蓮根": {
    "type": "gourmet",
    "pref": "熊本県",
    "city": "熊本市",
    "food": "からし蓮根",
    "shop": "森からし蓮根",
    "coords": [
      130.69,
      32.79
    ]
  },
  "大分とり天": {
    "type": "gourmet",
    "pref": "大分県",
    "city": "大分市",
    "food": "とり天",
    "shop": "東洋軒",
    "coords": [
      131.6,
      33.23
    ]
  },
  "大分中津からあげ": {
    "type": "gourmet",
    "pref": "大分県",
    "city": "中津市",
    "food": "中津からあげ",
    "shop": "森山",
    "coords": [
      131.18,
      33.6
    ]
  },
  "大分だんご汁": {
    "type": "gourmet",
    "pref": "大分県",
    "city": "大分市",
    "food": "だんご汁",
    "shop": "甘味茶屋",
    "coords": [
      131.61,
      33.24
    ]
  },
  "宮崎チキン南蛮": {
    "type": "gourmet",
    "pref": "宮崎県",
    "city": "延岡市",
    "food": "チキン南蛮",
    "shop": "おぐら",
    "coords": [
      131.67,
      32.58
    ]
  },
  "宮崎地鶏炭火焼": {
    "type": "gourmet",
    "pref": "宮崎県",
    "city": "宮崎市",
    "food": "地鶏炭火焼",
    "shop": "ぐんけい",
    "coords": [
      131.42,
      31.9
    ]
  },
  "宮崎肉巻きおにぎり": {
    "type": "gourmet",
    "pref": "宮崎県",
    "city": "宮崎市",
    "food": "肉巻きおにぎり",
    "shop": "本家宮崎肉巻きおにぎり",
    "coords": [
      131.43,
      31.91
    ]
  },
  "鹿児島黒豚しゃぶ": {
    "type": "gourmet",
    "pref": "鹿児島県",
    "city": "鹿児島市",
    "food": "黒豚しゃぶしゃぶ",
    "shop": "あじもり",
    "coords": [
      130.55,
      31.6
    ]
  },
  "鹿児島鶏飯": {
    "type": "gourmet",
    "pref": "鹿児島県",
    "city": "奄美市",
    "food": "鶏飯",
    "shop": "みなとや",
    "coords": [
      129.48,
      28.38
    ]
  },
  "鹿児島白くま": {
    "type": "gourmet",
    "pref": "鹿児島県",
    "city": "鹿児島市",
    "food": "白くま",
    "shop": "天文館むじゃき",
    "coords": [
      130.56,
      31.61
    ]
  },
  "沖縄ゴーヤチャンプルー": {
    "type": "gourmet",
    "pref": "沖縄県",
    "city": "那覇市",
    "food": "ゴーヤチャンプルー",
    "shop": "ゆうなんぎい",
    "coords": [
      127.68,
      26.22
    ]
  },
  "沖縄そば": {
    "type": "gourmet",
    "pref": "沖縄県",
    "city": "本部町",
    "food": "沖縄そば",
    "shop": "きしもと食堂",
    "coords": [
      127.98,
      26.63
    ]
  },
  "沖縄タコライス": {
    "type": "gourmet",
    "pref": "沖縄県",
    "city": "金武町",
    "food": "タコライス",
    "shop": "キングタコス",
    "coords": [
      127.72,
      26.48
    ]
  },
  "沖縄ラフテー": {
    "type": "gourmet",
    "pref": "沖縄県",
    "city": "那覇市",
    "food": "ラフテー",
    "shop": "琉球料理 美榮",
    "coords": [
      127.69,
      26.23
    ]
  },
  "札幌味噌ラーメン": {
    "type": "ramen",
    "desc": "濃厚味噌とラードの膜、黄色いちぢれ麺の王道。",
    "pref": "北海道",
    "city": "札幌市",
    "food": "札幌味噌",
    "shop": "すみれ",
    "coords": [
      141.35,
      43.06
    ]
  },
  "旭川醤油ラーメン": {
    "type": "ramen",
    "desc": "魚介×豚骨のダブルスープに焦がしラードのコク。",
    "pref": "北海道",
    "city": "旭川市",
    "food": "旭川醤油",
    "shop": "蜂屋",
    "coords": [
      142.37,
      43.77
    ]
  },
  "函館塩ラーメン": {
    "type": "ramen",
    "desc": "透明感あふれる澄んだ塩味。函館の歴史の味。",
    "pref": "北海道",
    "city": "函館市",
    "food": "函館塩",
    "shop": "あじさい",
    "coords": [
      140.73,
      41.77
    ]
  },
  "室蘭カレーラーメン": {
    "type": "ramen",
    "desc": "濃厚でスパイシーなカレー味。北海道第4の勢力。",
    "pref": "北海道",
    "city": "室蘭市",
    "food": "室蘭カレー",
    "shop": "味の大王",
    "coords": [
      140.97,
      42.32
    ]
  },
  "津軽煮干しラーメン": {
    "type": "ramen",
    "desc": "煮干しの旨味が凝縮された、酸味とコクのあるスープ。",
    "pref": "青森県",
    "city": "青森市",
    "food": "津軽煮干し",
    "shop": "たかはし中華そば店",
    "coords": [
      140.74,
      40.82
    ]
  },
  "味噌カレー牛乳ラーメン": {
    "type": "ramen",
    "desc": "味噌、カレー、牛乳、バターが融合した驚きの旨さ。",
    "pref": "青森県",
    "city": "青森市",
    "food": "味噌カレー牛乳",
    "shop": "味の札幌 大西",
    "coords": [
      140.74,
      40.83
    ]
  },
  "赤湯からみそラーメン": {
    "type": "ramen",
    "desc": "刺激的な辛味噌を溶かして食べる、山形の代名詞。",
    "pref": "山形県",
    "city": "南陽市",
    "food": "赤湯からみそ",
    "shop": "龍上海",
    "coords": [
      140.17,
      38.05
    ]
  },
  "酒田ワンタン麺": {
    "type": "ramen",
    "desc": "極薄のふわふわワンタンと、上品な魚介ダシ。",
    "pref": "山形県",
    "city": "酒田市",
    "food": "酒田ワンタン麺",
    "shop": "満月",
    "coords": [
      139.83,
      38.92
    ]
  },
  "山形冷やしラーメン": {
    "type": "ramen",
    "desc": "蕎麦屋発祥。氷が浮いても脂が固まらない工夫。",
    "pref": "山形県",
    "city": "山形市",
    "food": "山形冷やし",
    "shop": "栄屋本店",
    "coords": [
      140.35,
      38.25
    ]
  },
  "米沢ラーメン": {
    "type": "ramen",
    "desc": "超極細の手揉みちぢれ麺と、あっさり醤油。",
    "pref": "山形県",
    "city": "米沢市",
    "food": "米沢ラーメン",
    "shop": "そばの店 ひらま",
    "coords": [
      140.12,
      37.92
    ]
  },
  "喜多方ラーメン": {
    "type": "ramen",
    "desc": "日本三大ラーメン。平打ち多加水麺の食感が魅力。",
    "pref": "福島県",
    "city": "喜多方市",
    "food": "喜多方",
    "shop": "坂内食堂",
    "coords": [
      139.88,
      37.65
    ]
  },
  "白河ラーメン": {
    "type": "ramen",
    "desc": "手打ち麺と、炭火焼きチャーシューの薫香。",
    "pref": "福島県",
    "city": "白河市",
    "food": "白河ラーメン",
    "shop": "とら食堂",
    "coords": [
      140.18,
      37.13
    ]
  },
  "佐野ラーメン": {
    "type": "ramen",
    "desc": "青竹打ちの不揃いな麺が、透明なスープに合う。",
    "pref": "栃木県",
    "city": "佐野市",
    "food": "佐野",
    "shop": "日向屋",
    "coords": [
      139.58,
      36.32
    ]
  },
  "スタミナラーメン": {
    "type": "ramen",
    "desc": "レバーやカボチャが入った甘辛い餡が熱々。",
    "pref": "茨城県",
    "city": "水戸市",
    "food": "スタミナラーメン",
    "shop": "がむしゃ",
    "coords": [
      140.45,
      36.37
    ]
  },
  "藤岡ラーメン": {
    "type": "ramen",
    "desc": "強いコシの極太手打ち麺が特徴。",
    "pref": "群馬県",
    "city": "藤岡市",
    "food": "藤岡ラーメン",
    "shop": "みやご食堂",
    "coords": [
      139.07,
      36.25
    ]
  },
  "勝浦タンタンメン": {
    "type": "ramen",
    "desc": "ラー油と玉ねぎが主役。ゴマを使わないタンタン。",
    "pref": "千葉県",
    "city": "勝浦市",
    "food": "勝浦タンタン",
    "shop": "江ざわ",
    "coords": [
      140.13,
      35.15
    ]
  },
  "竹岡式ラーメン": {
    "type": "ramen",
    "desc": "チャーシューの煮汁をお湯で割る、漁師町の味。",
    "pref": "千葉県",
    "city": "富津市",
    "food": "竹岡式",
    "shop": "梅乃家",
    "coords": [
      139.87,
      35.27
    ]
  },
  "アリランラーメン": {
    "type": "ramen",
    "desc": "ニンニク・ニラ・玉ねぎが強烈な秘境ラーメン。",
    "pref": "千葉県",
    "city": "夷隅郡",
    "food": "アリラン",
    "shop": "八平の食堂",
    "coords": [
      140.27,
      35.27
    ]
  },
  "八王子ラーメン": {
    "type": "ramen",
    "desc": "醤油ベースのスープに、シャキシャキの刻み玉ねぎ。",
    "pref": "東京都",
    "city": "八王子市",
    "food": "八王子ラーメン",
    "shop": "吾衛門",
    "coords": [
      139.32,
      35.65
    ]
  },
  "横浜家系ラーメン": {
    "type": "ramen",
    "desc": "濃厚豚骨醤油、鶏油、ほうれん草。ガツンとくる。",
    "pref": "神奈川県",
    "city": "横浜市",
    "food": "横浜家系",
    "shop": "吉村家",
    "coords": [
      139.65,
      35.45
    ]
  },
  "サンマーメン": {
    "type": "ramen",
    "desc": "横浜発祥。醤油スープにモヤシ主体のあんかけ。",
    "pref": "神奈川県",
    "city": "横浜市",
    "food": "サンマーメン",
    "shop": "玉泉亭",
    "coords": [
      139.65,
      35.44
    ]
  },
  "燕三条背脂ラーメン": {
    "type": "ramen",
    "desc": "煮干しスープを覆う大量の背脂と極太麺。",
    "pref": "新潟県",
    "city": "燕市",
    "food": "燕三条背脂",
    "shop": "杭州飯店",
    "coords": [
      138.88,
      37.67
    ]
  },
  "長岡生姜醤油ラーメン": {
    "type": "ramen",
    "desc": "濃口醤油に生姜を効かせた、体が温まる雪国の味。",
    "pref": "新潟県",
    "city": "長岡市",
    "food": "長岡生姜醤油",
    "shop": "青島食堂",
    "coords": [
      138.85,
      37.45
    ]
  },
  "新潟濃厚味噌ラーメン": {
    "type": "ramen",
    "desc": "割りスープで自分好みの濃さに薄めて食べるスタイル。",
    "pref": "新潟県",
    "city": "新潟市",
    "food": "新潟濃厚味噌",
    "shop": "こまどり",
    "coords": [
      139.05,
      37.92
    ]
  },
  "高山ラーメン": {
    "type": "ramen",
    "desc": "鶏ガラベースのあっさり醤油。スープを一緒に煮出す。",
    "pref": "岐阜県",
    "city": "高山市",
    "food": "高山ラーメン",
    "shop": "角や",
    "coords": [
      137.25,
      36.15
    ]
  },
  "台湾ラーメン": {
    "type": "ramen",
    "desc": "名古屋発祥。激辛ミンチとニンニクが癖になる。",
    "pref": "愛知県",
    "city": "名古屋市",
    "food": "台湾ラーメン",
    "shop": "味仙",
    "coords": [
      136.9,
      35.17
    ]
  },
  "天理ラーメン": {
    "type": "ramen",
    "desc": "白菜たっぷりのニンニクが効いた醤油ベース。",
    "pref": "奈良県",
    "city": "天理市",
    "food": "天理ラーメン",
    "shop": "彩華ラーメン",
    "coords": [
      135.83,
      34.6
    ]
  },
  "京都ラーメン": {
    "type": "ramen",
    "desc": "見た目は真っ黒、味は香ばしくコクのある醤油。",
    "pref": "京都府",
    "city": "京都市",
    "food": "京都ラーメン",
    "shop": "新福菜館",
    "coords": [
      135.77,
      34.98
    ]
  },
  "和歌山ラーメン": {
    "type": "ramen",
    "desc": "濃厚な豚骨醤油。早寿司と一緒に食べるのが流儀。",
    "pref": "和歌山県",
    "city": "和歌山市",
    "food": "和歌山ラーメン",
    "shop": "井出商店",
    "coords": [
      135.17,
      34.22
    ]
  },
  "播州ラーメン": {
    "type": "ramen",
    "desc": "醤油ベースで、甘みが強い独特のスープが特徴。",
    "pref": "兵庫県",
    "city": "西脇市",
    "food": "播州ラーメン",
    "shop": "西脇大橋ラーメン",
    "coords": [
      134.97,
      34.98
    ]
  },
  "鳥取牛骨ラーメン": {
    "type": "ramen",
    "desc": "牛骨特有の甘みと香ばしさがある、希少な一杯。",
    "pref": "鳥取県",
    "city": "鳥取市",
    "food": "鳥取牛骨",
    "shop": "香味徳",
    "coords": [
      134.23,
      35.5
    ]
  },
  "笠岡ラーメン": {
    "type": "ramen",
    "desc": "親鳥の「煮鶏」を載せる、鶏100%の醤油味。",
    "pref": "岡山県",
    "city": "笠岡市",
    "food": "笠岡ラーメン",
    "shop": "坂本",
    "coords": [
      133.5,
      34.5
    ]
  },
  "尾道ラーメン": {
    "type": "ramen",
    "desc": "鶏ガラ醤油に浮く、大粒の背脂ミンチが決め手。",
    "pref": "広島県",
    "city": "尾道市",
    "food": "尾道ラーメン",
    "shop": "朱",
    "coords": [
      133.2,
      34.4
    ]
  },
  "徳島ラーメン": {
    "type": "ramen",
    "desc": "甘辛い豚バラ肉と生卵。ご飯との相性が最高。",
    "pref": "徳島県",
    "city": "徳島市",
    "food": "徳島ラーメン",
    "shop": "いのたに",
    "coords": [
      134.55,
      34.07
    ]
  },
  "鍋焼きラーメン": {
    "type": "ramen",
    "desc": "須崎市名物。土鍋で提供される鶏ガラ醤油味。",
    "pref": "高知県",
    "city": "須崎市",
    "food": "鍋焼きラーメン",
    "shop": "橋本食堂",
    "coords": [
      133.28,
      33.4
    ]
  },
  "博多ラーメン": {
    "type": "ramen",
    "desc": "極細麺の替え玉文化。全国で最も有名な豚骨。",
    "pref": "福岡県",
    "city": "福岡市",
    "food": "博多ラーメン",
    "shop": "一風堂",
    "coords": [
      130.4,
      33.58
    ]
  },
  "久留米ラーメン": {
    "type": "ramen",
    "desc": "豚骨発祥の地。濃厚でコクのある「呼び戻し」。",
    "pref": "福岡県",
    "city": "久留米市",
    "food": "久留米ラーメン",
    "shop": "清陽軒",
    "coords": [
      130.52,
      33.32
    ]
  },
  "熊本ラーメン": {
    "type": "ramen",
    "desc": "マー油（焦がしニンニク油）の香ばしさが特徴。",
    "pref": "熊本県",
    "city": "熊本市",
    "food": "熊本ラーメン",
    "shop": "こむらさき",
    "coords": [
      130.7,
      32.8
    ]
  },
  "鹿児島ラーメン": {
    "type": "ramen",
    "desc": "鶏ガラと豚骨。漬物がセットで出てくる優しい味。",
    "pref": "鹿児島県",
    "city": "鹿児島市",
    "food": "鹿児島ラーメン",
    "shop": "くろいわ",
    "coords": [
      130.55,
      31.6
    ]
  }
};

// 互換性用: 配列に変換する関数
function getOnsenArray() {
  return Object.entries(BUCKET_LIST_DB)
    .filter(([_, item]) => item.type === 'onsen')
    .map(([key, data]) => ({ key, ...data }));
}

function getGourmetArray() {
  return Object.entries(BUCKET_LIST_DB)
    .filter(([_, item]) => item.type === 'gourmet')
    .map(([key, data]) => ({ key, ...data }));
}

function getRamenArray() {
  return Object.entries(BUCKET_LIST_DB)
    .filter(([_, item]) => item.type === 'ramen')
    .map(([key, data]) => ({ key, ...data }));
}
