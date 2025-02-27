
console.log('başarılı bir şekilde çalıştı');


// prompt('BPR  106 dayız')
// alert('sınıf boş geçti')

const name = 'Arda';
const idname=document.getElementById('ad');

idname.innerHTML=name;

const buton=document.getElementById('btn');
const yazi=document.getElementById('kod');

buton.addEventListener('click',function(){
    yazi.innerHTML=alert("BPR 100 oldu")
    kod.innerHTML="BPR 100 oldu"
} )


const lamba=document.getElementById('lamba');
const ac=document.getElementById('ac');
const kapa=document.getElementById('kapa');

ac.addEventListener('click',function(){

    lamba.src="on.png"
    console.log('lamba açıldı')

} )



kapa.addEventListener('click',function(){

    lamba.src="off.png"
   

} )

const durum=document.getElementById('durum');
const onay=document.getElementById('onay');
const red=document.getElementById('red');


onay.addEventListener('click',function(){
 
    durum.innerText="Onaylandı"
    onay.style.display="none"
    red.style.display="block"
})   

red.addEventListener('click',function(){
 
    durum.innerText="Reddedildi"
    red.style.display="none"
    onay.style.display="block"
})  
