var oyuncu={
    ad:"",
    can:100,
    envanter:[]

}

// toString()
var durability={
    silahAd:"Silah",
    silahCan:3,
    hiz:1,
    hasar:10

}
function oyuncuCan(x){
    if (oyuncu.can>0){
        oyuncu.can-=x
        guncelle()
    }
    else{
        document.getElementsByClassName("gameover")[0].style.display="block"
        document.getElementsByClassName("oyunici")[0].style.display="none"
        
    }
}

function oyunbaslat(){
    document.getElementsByClassName("oyunici")[0].style.display="none"

}
function canGotur(x) {
    durability.silahCan -= x;
    if (durability.silahCan == 0) {
        var index = oyuncu.envanter.indexOf(durability.silahAd);
        guncelle()
        if (index > -1) {
            oyuncu.envanter.splice(index, 1);
        }
    }
}

function ad(){

  
    var isim= document.getElementById("ad").value  
    document.getElementById('karsilama').innerText=isim
    document.getElementsByClassName("item")[0].style.display="block"
    oyuncu.ad=isim
    document.getElementById('can').innerText="Can: " + oyuncu.can
    document.getElementById('ad').style.display="none"
    document.getElementById('basla').style.display="none"
   document.getElementsByClassName("placeholder")[0].style.display="none"



}

function al(){
    oyuncu.envanter.push("Hazine")
    document.getElementsByClassName('item')[0].style.display="none"
    document.getElementsByClassName('item')[1].style.display="block"
    guncelle()
}

function alma(){
    document.getElementsByClassName('item')[1].style.display="block"
    document.getElementsByClassName('item')[0].style.display="none"
    guncelle()


}

function al_s(){
    oyuncu.envanter.push("Silah")
    document.getElementById("Silah1").style.display="none"
    document.getElementsByClassName('item')[2].style.display="block"
    guncelle()
}

function alma_s(){
    document.getElementsByClassName('item')[2].style.display="block"
    oyuncu.envanter.pop("Silah ",durability.silahCan.toString)
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
        canGotur(1)


    }else{
       oyuncuCan(5)
    }
}

function kac(){
    oyuncuCan(5)
}
