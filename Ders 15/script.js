// createElement
// Renk değiştirme uygulaması
// innerHTML, value
var renk_kutusu=document.getElementById("renk_kutusu")
function olustur(){
    

 var yazilan=document.getElementById("yazilan_renk").value
 var renk_kutu=document.createElement("div")

renk_kutu.style.background=yazilan
renk_kutu.style.width="200px"
renk_kutu.style.height="200px"
renk_kutu.style.margin="50px"


renk_kutusu.append(renk_kutu)


}