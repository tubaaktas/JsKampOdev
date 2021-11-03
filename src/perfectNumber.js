//Kendisi haric butun pozitif bolenlerinin toplami kendisine esit olan sayilara mukemmel sayi denir.
let min = 1;
let max = 1000;
for (min = 1; min <= max; min++) { //1 den baslayip 1 artarak 1000e kadar kontrol edicek
    let toplam = 0;
    for (let i = 1; i < min; i++) {
        if ((min % i) == 0) {// 1 den baslayarak 1000e kadar olan butun sayilarin tam bolenlerini alıp topluyoruz
            toplam += i;
        } 
    }  
    if (toplam == min){     // eger toplam kotrol edilen sayiya esitse      
        console.log(toplam);//ekrana bastırdıgimiz toplam zaten sayinin kendisi olmus oluyor
    }          
}      