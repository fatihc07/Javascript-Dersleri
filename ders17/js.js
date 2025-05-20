// angular
// vue
// react

// basit kütüphane takip sistemi
// kullancı kitap ismi girsin
// alındı/ alınmadı butonu olsun
// kulllanıcı kitap ismini girip alındıya basarsa
// kitap ismi aşağıda çıksın ve yeşil olsun
// alınmadıysa kırmızı kalsın 
// kitap ismi nesne olarak tutulsun
// kitap adı yazıldığı an tümü büyük harf

 var kitap_nesne={ad:""}

var yazi=document.getElementById('kitap_adi')

var kitap_listesi=["Arda","Hasan"]



function al(){

    yazi.innerHTML=document.getElementById('kitap').value
    yazi.style.color="green"
    kitap_nesne.ad=yazi
    kitap_listesi.pop()
    kitap_listesi.push(yazi)
}

function alma(){

    yazi.innerHTML=ad
    yazi.style.color="red"
    kitap_nesne.ad="Boş"

}

function kucuk(adi){
 
    yazi=yazi.toUpperCase()

}


// ES6 nedir? 2016 Javasciprt güncellemesi

// var ve let
const c=12
c=10 // hatalı


let b=5
b=9

var a=10
var a=7


// + yerine $ kullan

var karsila= "Merhaba  ${yazi}"



