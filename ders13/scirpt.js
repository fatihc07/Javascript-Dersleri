// localStorage- çerez mantığı- 
// veritabanında saklanmaz- tarayıcıda tutulur
// tarayıcıya özgüdür, chrome da alınan  veri firefoxta tutulmaz.
// localStroge - veri alma: setItem() -insert into (veritabanı)
// ver okuma: getItem() - select
// veri silme: removeItem - delete
// JSON: object veri tipi ,nesneler yani çoklu veriler için
// parse: parçalama




function al(){
    var text=document.getElementById('in').value
    localStorage.setItem('hafizayazi',text)
    document.getElementById('yazi').innerText=text
    
}

function bastir(){

    alert(localStorage.getItem('hafizayazi'))
    

}

function hafiza_sil(){

    localStorage.removeItem('hafizayazi')

}
var kullanici = {
    'ad':"java",
    'yil':"1970"

}
localStorage.setItem('bilgi',kullanici)
localStorage.setItem(JSON.stringify('bilgi',kullanici))
localStorage.JSON.parse('bilgi').ad
localStorage.clear()