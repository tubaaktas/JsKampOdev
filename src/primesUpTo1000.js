let min = 2;//min asal sayi 2 oldugundan, böyle baslattim
let max = 1000;
while(min <= max)
{
    let i = 0;  //kontrol amacli
    for(let j = 2; j < min; j++)
    {
        if(min % j == 0){      //sayinin kendisinden baska bir sayiya bolunmesi durumunda asal degildir ve dongu kesilir.
            i = 1;  //i = 1 ise sayi asal degil.
            break;
        }
    }
    if(i == 0)  //kontrol amacli kullandigimiz i, 0'a esitse asal anlamina geliyordu.
        console.log(min);  
    min++;
}