// JSON:  obje veri tipi - tüm veri tiplerinin kümelenmiş hali- srring number
//  php,pthyon,c++,java hemen hemen her dil
// c ,c++

var telefon={

    ad:"İphone 17",
    cam:"48 MP",
    yil:"2025"

}

JSON.stringify("tel_bilgi",telefon)
var info=JSON.parse("tel_bilgi")

var karsilima="Merhaba " + info.ad

// ES6 yenilikler
// javasciript dili 1995 yılında çıktı.
// ES6 yani JS6- 2016 yılında çıktı


// yenilikler
// var, let, const


// ES6 dan önce sadece "var" değişkeni vardı
// var ve let farkı önemliiiiii!!!!!!
const a=5

var b=3
var b=5

let c=10
let c=5

// for döngüsünde const kullanılamaz
for (const a=6;a>10;a++)

// ES6 2. yenilik

// verileri "+" işaretiyle bağlanır eski versiyondan geliyor
// es6 yla beraber ${} verileri bağlayabiliriz


alert("Telefon modeliniz ${info.ad} dır ve kamerası ${info.cam} dir " )







