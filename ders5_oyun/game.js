var oyuncu={
    ad:"",
    can:"100",
    envanter:[]

}

// toString()



function ad(){

  
    var isim= document.getElementById("ad").value  
    document.getElementById('karsilama').innerText=isim
    document.getElementsByClassName("item")[0].style.display="block"
    oyuncu.ad=isim
    document.getElementById('can').innerText="Can: " + oyuncu.can
    document.getElementById('ad').display.style="none"
    document.getElementById('basla').style.display='none'

}

function al(){
    oyuncu.envanter.push("Hazine")
    guncelle()
}

function alma(){
    document.getElementsByClassName('item')[1].style.display="block"


}

function al_s(){
    oyuncu.envanter.push("Silah")
   
    guncelle()
}

function alma_s(){
    document.getElementsByClassName('item')[2].style.display="block"


}
// savasa basıldığı zaman silah varsa can kalsın
// silah yoksa can 10 azalsın
// kaç basınca her halukarda can 5 azalsın

function guncelle(){

    document.getElementById('envanter').innerText="Envanteriniz: " +  oyuncu.envanter.toString()
    document.getElementById('can').innerText="Can: " + oyuncu.can

}

console.log(oyuncu.can)