    // classAdd, classList  -- class özelliklerini elemente ekler
    // classRemove -- çıkarır
    // Math.random()
    // bolean: true -false
    // Kaçma: iki soru, anahtarı bulma olasılığı ve kaçtınız
    
    // document.getElementById("yazi").classList.add('yazi')

    function goster() {
       
        document.getElementById('ana').classList.remove('hidden')
    }
     

     var buldumu=false
     var f=Math.random()  // 0 la 1 arası deeğer döner

     if (f >0.5){
        buldumu=true
        document.getElementById('durum').style.display="block"
        document.getElementById('durum').innerText="Anahtar Bulundu"


     }else {
       
        document.getElementById('durum').style.display="block"
        document.getElementById('durum').innerText="Şansınız yok"

     }




