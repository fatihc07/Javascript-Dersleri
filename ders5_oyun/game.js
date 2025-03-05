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
    document.getElementById('ad').style.display="none"
    document.getElementById('basla').style.display="none"

}

function al(){
    oyuncu.envanter.push("Hazine")
    document.getElementsByClassName('item')[0].style.display="none"
    document.getElementsByClassName('item')[1].style.display="block"
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
    oyuncu.envanter.pop("Silah")
    guncelle()

}


function guncelle(){

    document.getElementById('envanter').innerText="Envanteriniz: " +  oyuncu.envanter.toString()
    document.getElementById('can').innerText="Can: " + oyuncu.can

}


// savasa basıldığı zaman silah varsa can kalsın
// silah yoksa can 10 azalsın
// kaç basınca her halukarda can 5 azalsın
function savas(){


    if(oyuncu.envanter.includes("Silah")){
        oyuncu.can=oyuncu.can
        alert("Silahınız var, Can Gitmedi")
    }else{
        oyuncu.can=oyuncu.can-10
    }

    guncelle()
}

function kac(){
    oyuncu.can=oyuncu.can-5
    guncelle()
}