function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vege = Number(input[2]);
    let priceChicken = chicken*10.35;
    let priceFish = fish*12.40;
    let priceVege = vege*8.15;
    let sum = priceChicken+priceFish+priceVege;
    let desert = sum*0.2;
    console.log(desert+2.5+sum);
       
}
foodDelivery(["2", "4", "3"]) 