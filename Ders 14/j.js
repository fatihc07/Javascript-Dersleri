var liste=document.getElementById("liste")
var sayac=1
function  uret (){
 var li=document.createElement("li")
 li= sayac+  " . Kişi"
 liste.append(li)
 sayac++

}

function foto(){
var foto=document.createElement("img")
foto.src="https://cdn.dsmcdn.com/ty1582/prod/QC/20241009/13/013120c0-ecbb-3558-b7a5-267fedd70a96/1_org_zoom.jpg"
foto.style.width="200px"
liste.append(foto)

}

function rastgele(){
var bir="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1655/product/media/images/prod/PIM/20250328/06/93152d14-b5a6-4d86-8033-1ef59685509a/1_org_zoom.jpg"
var iki="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1654/product/media/images/prod/PIM/20250328/06/1600a69a-e8f1-4380-906a-4695b764ed4e/1_org_zoom.jpg"
var uc="https://cdn.dsmcdn.com/mnresize/1200/1800/ty1623/prod/QC/20250112/22/f22f06ee-0304-3102-a776-24ea104aae76/1_org_zoom.jpg"

var resimler=[bir,iki,uc]
var foto=document.createElement("img")
foto.src=resimler[Math.floor(Math.random()*resimler.length)]
foto.style.width="200px"
liste.append(foto)



}

function cagir(){

     


var div=document.getElementById("ogrenci")
var isimler=["Arda","Sude","Berat","Eren","Kemal"]

var isim=document.createElement("h1")
isim.innerHTML=isimler[Math.floor(Math.random()*isimler.length)]
div.append(isim)






}