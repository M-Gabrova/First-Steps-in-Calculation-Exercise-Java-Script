function basketEqui(input) {
    let tax = Number(input[0]);
    let shoes = tax - tax*0.4;
    let set = shoes - shoes*0.2;
    let ball = set/4;
    let accessoires = ball/5;
    console.log(tax+shoes+set+ball+accessoires);
       
}
basketEqui(["365"]) 