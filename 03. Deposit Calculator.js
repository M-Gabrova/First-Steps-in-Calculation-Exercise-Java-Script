function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let rate = Number(input[2]);
    let lihva = depositSum*rate/100;
    let lihvaZaMesec = lihva/12;
    console.log(depositSum + months * lihvaZaMesec);
}
depositCalculator(["200","3","5.7"])