
// onclick // onsubmit: formun tümünü yollar
// onclick: butona, yada input:submite etki eder

// bu örnek onsubmit için
function kontrol(){
if(document.forms['formum']['f_isim'].value==""){
   
   return alert("İsminizi boş bırakmayın")
   

    

}}

// oninput

function buyuk(){

    

    const yazi = document.getElementById("f_isim");
    yazi.value = yazi.value.toUpperCase();
    
}


function hove(){

    console.log("çalıştı")
    var kyazi=document.getElementById('kutu')
    
    kyazi.innerHTML="Fare Kutunun Üstündedir"
  
    return kyazi

}

function d(){

   // document.getElementsByTagName('button')[2]
    var da=document.getElementById('tarih')
    da.innerHTML=Date()
  


}

function disarda(){
    var kyazi=document.getElementById('kutu')
    kyazi.innerHTML="Fare Kutunun Dışındadır"
    return kyazi
  
}


// kullanıcıddan 1 tane text veri al, onsubmit
//içinde e harfi var mı bak? varsa div oluşsun ve kırmızıya boya
//e 'nin dışındaki her harf için div siyah olsun
function boya(){
    const a=document.getElementById('ikinci_yazi').value
    
    if(a.includes("e")){
        document.getElementById('renk_divi').style.backgroundColor="red"
        document.getElementById('renk_divi').style.height="300px"
    }
    else{
        document.getElementById('renk_divi').style.backgroundColor="blue"
        document.getElementById('renk_divi').style.height="300px"

    }



}


