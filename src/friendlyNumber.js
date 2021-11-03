//İki sayi birbirinin kendisi haric pozitif bolenleri toplamina esitse bu sayilara arkadas sayilar denir.
function arkadasSayilar(num1, num2) {
    let num1BolenToplam = 0;
    let num2BolenToplam = 0;
    let i = 1;
    let j = 1;

    while ( i < num1) {
        if(num1 % i === 0)
            num1BolenToplam = num1BolenToplam + i;//1. girilen sayinin bolenlerini topladik.
        i++
    }

    while ( j < num2) {
        if(num2 % j === 0)
            num2BolenToplam = num2BolenToplam + j;//2. girilen sayinin bolenlerini topladik.
        j++
    }

    if(num2BolenToplam === num1 && num1BolenToplam === num2)//bolumlerin toplamı diger sayiya esitse
        console.log("GİRDİĞİNİZ " + num1 + " VE " + num2 + " SAYILARI ARKADAŞ SAYILARDIR.")
    else
        console.log("GİRDİĞİNİZ " + num1 + " VE " + num2 + " SAYILARI ARKADAŞ SAYI DEĞİLLER.")
    
}
arkadasSayilar(220,284);
arkadasSayilar(66,99);