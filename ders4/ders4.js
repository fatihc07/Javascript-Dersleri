console.log("ders4.js dosyası çalıştı");


// nesneler,fonksiyonlar
// OOP Object Oriented Programming
// C değil


// id benzersiz, tek isim kullanılır.
// classlar çok defa kullanılabilir o yüzden arrayde indexleri tutulur.




var telefon= {
     marka: "samsung",
     model: "s10",
     fiyat: 5000
 
 }

// innerHTML kullanımı farkı 
var red=document.getElementsByClassName("renk")[1]
var yesil=document.getElementsByClassName("renk")[2].innerHTML

console.log(red)
console.log(yesil)

function renk_d (color){
    document.getElementById('yazi').style.color=color


}


document.getElementsByClassName("renk")[2].addEventListener("click",function(){

    document.getElementById('yazi').style.color="green"


 
})