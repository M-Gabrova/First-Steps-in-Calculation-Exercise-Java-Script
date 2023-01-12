function repaintings(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let litres = Number(input[2]);
    let hours = Number(input[3]);
    let nylon2 = nylon + 2;
    let nylonSum = nylon2*1.5;
    let paint1 = paint*0.1;
    let paintSum = (paint+paint1)*14.5;
    let sumLitres = litres*5;
    let sumAll = nylonSum+paintSum+sumLitres+0.4;
    let workAll = (sumAll*0.3)*hours;
    console.log(sumAll+workAll);
       
}
repaintings(["10", "11", "4", "8"]) 