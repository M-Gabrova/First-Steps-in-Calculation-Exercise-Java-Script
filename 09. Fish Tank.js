function fishTank(input) {
    let dulj = Number(input[0]);
    let shir = Number(input[1]);
    let vis = Number(input[2]);
    let percent = Number(input[3]);
    let volume = dulj*vis*shir;
    let volumeLitres = volume*0.001;
    let percent1 = percent/100;
    console.log(volumeLitres*(1-percent1));
       
}
fishTank(["85", "75", "47", "17"]) 