    // classAdd, classList  -- class özelliklerini elemente ekler
    // classRemove -- çıkarır
    // Math.random()
    // bolean: true -false
    // Kaçma: iki soru, anahtarı bulma olasılığı ve kaçtınız
    
    // document.getElementById("yazi").classList.add('yazi')
    function basla(){
      document.getElementById('anahtar').classList.remove('hidden');
    }
function zarat(){
   var buldumu=false
   var f=Math.random()  // 0 la 1 arası deeğer döner
   var yazitura = document.getElementsByClassName("yazitura")[1];

     if (f >0.5){
        buldumu=true
        document.getElementById('durum').style.display="block"
        document.getElementById('durum').innerText="Anahtar Bulundu"


     }else {
       
        document.getElementById('durum').style.display="block"
        document.getElementById('durum').innerText="Şansınız yok"

     }
}

function yazi(){
   document.getElementsByClassName("oyunlar")[0].classList.add("hidden");
   document.getElementsByClassName("yazitura")[1].classList.remove("hidden");
   
   
   }
function zar(){
   document.getElementsByClassName("zar")[1].classList.remove("hidden");
   document.getElementsByClassName("oyunlar")[0].classList.add("hidden");
   document.getElementsByClassName("")[0].classList.add("hidden");

}
function zara(){

   var sayi = document.getElementById("zarsayi");
   var zar = document.getElementById("zar");
   var f=Math.random(0, 0.93);
   if(f<0.16){
      sayi.innerText = "1 Geldi";
   }
   else if(f < 0.32){
      sayi.innerText = "2 geldi";
   }
   else if(f < 0.48){
      sayi.innerText = "3 geldi";
   }
   else if(f < 0.60){
      sayi.innerText = "4 geldi";
   }
   else if(f < 0.76){
      sayi.innerText ="5 geldi";
   }
   else{
      sayi.innerText = "6 geldi";
   }
   document.getElementsByClassName("butonlar")[0].classList.remove("hidden")
   document.getElementsByClassName("butonlar")[1].classList.remove("hidden")
   zar.classList.add("hidden")
   
}
function tekrar1(){
   
   var sayi = document.getElementById("zarsayi");
   var zar = document.getElementById("zar");
   var f=Math.random(0, 0.93);
   if(f<0.16){
      sayi.innerText = "1 Geldi";
   }
   else if(f < 0.32){
      sayi.innerText = "2 geldi";
   }
   else if(f < 0.48){
      sayi.innerText = "3 geldi";
   }
   else if(f < 0.60){
      sayi.innerText = "4 geldi";
   }
   else if(f < 0.76){
      sayi.innerText ="5 geldi";
   }
   else{
      sayi.innerText = "6 geldi";
   }
}
function anamenu(){
   document.getElementsByClassName("zar")[1].classList.add("hidden");
   document.getElementsByClassName("rusruleti")[0].classList.add("hidden");
   document.getElementsByClassName("yazitura")[1].classList.add("hidden");

}
