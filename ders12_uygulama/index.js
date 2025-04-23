// form oluşturup 
// inputten alınan harf değeri a yi içeriysa
//  border versin ve rengi mavi olsun
// diğer her harf için siyah border olsun
// onClick 
// includes fonsiyonuyla karakter kontolü
// value - değer çekerken , 
// innerHTML  -değer atarken
var kullanici=document.getElementById('yazi').innerHTML
console.log("Kullanici: " + kullanici)



var alinan=document.getElementById('alinanyazi')
function yazdir(){
kullanici.innerHTML="Kullanıcıdan alınan yazı:  " + alinan
if (kullanici.includes('a')){
        alinan.style.border="5px solid green"

}else{

    alinan.style.border="5px solid black"
}


}


