// fonksiyonlar
// return kullanımı farkları

// değer döndüren vs döndürmeyen
// return sadece functionlarda kullanılır.
// Math.random fonsiyonu 0 la 9 arası sayı üretir
// Math. floor fonsiyonu ondalıklı sayıyı tam sayı yapar

/*
let ad= prompt("Adınızı girin: ")
let degis=donen(ad)
ekle()

function donen (isim){

    return prompt("Döndü!"+ isim)

}

function ekle () {

    console.log (degis)
    

}



let sayi1= prompt("Sayı: ")
let sayi2= prompt("Sayı2: ")
islem(sayi1,sayi2)

function islem(sayi1,sayi2){

if(sayi1<sayi2) {

    return  alert ("sayi 1 büyüktür")
    

}

else if(sayi1>sayi2) {

    return  alert ("sayi 2 büyüktür")
    

}


else {

    console.log("eşittir")
}

}
*/
let sayi; // global değişken
let randomsayi=uret(); // while döngüsünde olamaz, yoksa her defasında yeniden sayı üretilir.
console.log("Üretilen sayı:" +randomsayi);

do {
  sayi= Number(prompt("Sayı girin: "))       // sayi değişkeni burda değişir. artık 5 değil

    if(randomsayi<sayi){
        alert("büyük  bir sayı girdiniz" +"(Sayi: "+randomsayi+")")
    
    }

     else if(randomsayi>sayi){
        alert("küçük  bir sayı girdiniz" +"(Sayi: "+randomsayi+")")
    
    }
    else {
        alert("bildiniz" +"(Sayi: "+randomsayi+")")
    }


}while (sayi !==randomsayi) 
 




function uret(){

    return Math.floor(Math.random()*10)



}






