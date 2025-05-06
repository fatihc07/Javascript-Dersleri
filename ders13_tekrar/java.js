// localstorage:
// localstroage.getItem - select
// setItem -- insert into
// removeItem- tek bir veri - delete
// clear
// json :obje veri tipi: her tür veriyi toplar tutar
// json.parse. 

// hava durumu uygulaması yapalım
// sehir ve sıcaklık verisi localde tutulsun
// sehir objesi ve onun ismi, sıcaklık değeri, plaka kodu

var s=document.getElementById("sehir_ad").value
var p=document.getElementById("sehir_plaka").value


function kaydet(){
    var bilgi=document.getElementById("sehir_info")

    localStorage.setItem("isim",s)
    localStorage.setItem("plaka",p)
  
bilgi.innerHTML=localStorage.getItem("isim",s)


}