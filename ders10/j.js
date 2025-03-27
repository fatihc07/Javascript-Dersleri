//document.getElementsByTagName("p")
// document.getElementsByClassName()

const anadiv=document.getElementsByClassName("ana")[0]
const anayazi=anadiv.getElementsByTagName("p")

// tagname alnırken id veya class ismi alınmaz, tagın kendi özelliği isim olarak alınır
// h1,p,form, input vb.


// aynı bodydeki 2 farklı p ye farklı css özelliği atayın

document.getElementsByClassName("ana")[1].getElementsByTagName("p") // 2. ana divdeki tüm p leri seçer

anayazi[0].style.color="red" // 1. ana divdeki 1. p yi seçer ve rengini kırmızı yapar

const body_p=document.getElementsByTagName("p") // bodydeki tüm p leri seçer
body_p[0].style.border="3px solid green" // bodydeki 1. p ye border ekler


