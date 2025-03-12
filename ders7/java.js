// 2 farklı for kullanımı
for ( let i = 0; i < 10; i++) {
    console.log(i);
}

var liste =["Pazartesi", "Salı", "Çarşamba"]


for (let gun in liste) {

    console.log(liste[gun])

}
// not objesi yaratıp, baslik ve not özelliğini ekleyin
// kullanıcıdan 2 değeri alıp objeye atayın
// alert ile ekrana basın

var note={
    baslik :'',
    not :''


}


function gonder (){
    console.log("Çalıştı")

   note.baslik= document.getElementById('baslik').value
 note.not=document.getElementById('not').value
  
 alert("Başlık: " + note.baslik + "  "+ note.not)



}



 



