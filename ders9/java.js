// nesneler, sınıflar
/*
const kitap={
  
    Baslik:"",
    Yil:"",
   

}



let isim=prompt("Ad Girin")
kitap.Ad=isim
kitap.Ad=prompt("Ad:")





// classlar

// class>nesne
// nesne tektir, classlar birden fazla nesnenin toplamıdır
// classlare fonksiyon tanımlanabilir.

class  kutuphane {
    
    constructor(k_adi,k_y){

        this.k_adi=kitap.Ad,
        this.k_y=kitap.Yil



    

}
// classlarda fonsiyon tanımlanırken func yazmamıza gerek yok
// stringin içinde değişken göstermek için '${}'
     yazdir() {
      console.log('Bu kitap ${this.k_adi} ve ${this.k_y}')
    
   } 

}





let kitap1= new kutuphane("Harry Poter","2000")
let kitap2=new kutuphane("a","2002")

yazdir.kitap1()
yazdir.kitap2()
*/
//////////////film uygulaması//////////////







class FilmKutuphane {
    constructor(f_mevsim, f_firma) {
        this.f_mevsim = f_mevsim;
        this.f_firma = f_firma;
    }

    yaz() {
        console.log(`Bu filmin mevsimi ${this.f_mevsim}, ve firması ${this.f_firma}dır.`);
    }
}


let film1 = new FilmKutuphane(prompt("Mevsim:"), prompt("Firma:"));
let film2 = new FilmKutuphane(prompt("Mevsim:"), prompt("Firma:"));

film1.yaz();
film2.yaz();