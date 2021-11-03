//Asal sayilar, sadece kendisi ve 1 sayisina bölünebilen 1’den büyük pozitif tam sayilar biciminde tanimlanirlar.
function asalSayi(...numbers) {
  let asal = [];
  let asalDegil = [];
  let x = 0;
  let y;

  while (x < numbers.length) {  //tanımladigimiz functionun icinde bi deger varsa yani x = 0 dan büyükse
    y = 2;
    if (numbers[x] >= 2) {    //en kucuk asal sayi 2 oldugundan 2ye esit ve buyuk oldugu durumlar icin
      while (y < numbers[x]) {   //sayinin bolenlerini kontrol etmek icin while dongusu olusturuyoruz
        if (numbers[x] % y === 0) {    //sayinin kendinden baska boleni var mi diye kontrol ediyoruz,
        // mesela numbers[x] = 6 icin y = 2 den basladigindan y'ye bölünüyorsa kendinden ve 1 den baska boleni var anlamına geldiginden
          asalDegil.push(numbers[x]);     //asal olmayanlar arrayimize pushluyoruz (yani atıyoruz)
          break;
        }
        y++;
      }
      asal = numbers.filter((a) => !asalDegil.includes(a));//asal arrayimize de asal olmayan arrayimizden geri kalanları atiyoruz.
      x++;
    }
    else if(numbers[x] < 2){    //eger sayimiz 0, 1 veya negatifse bu sart bloguna giricek
        while(numbers[x] < 2)
        {
            asalDegil.push(numbers[x]);   //0, 1 ve negatif sayilar asal olmadigindan, asalDegil arrayimize pushliycaz
            asal = numbers.filter((a) => !asalDegil.includes(a));
            x++;
        }
    }
  }
  //arraylerin ici bos degilse yani 0 dan buyukse ekrana yazdiricaz.
  if (asal.length > 0) console.log(`${asal} ASALDIR!`);
  else console.log("Girilen değerlerde asal sayı yok.");
  if (asalDegil.length > 0) console.log(`${asalDegil} ASAL DEGİLDİR !`);
  else console.log("Girilen değerlerin hepsi asal sayı.");

}

asalSayi(3, 5, 0, 1, -2, 2, 10, 13);
