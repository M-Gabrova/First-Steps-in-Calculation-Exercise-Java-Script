function vacationBooks(input) {
    let pageSum = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let timeSum = pageSum/pagesPerHour;
    //let hoursPerDay = timeSum/days;
    console.log(timeSum/days)
    //console.log(hoursPerDay);
}
vacationBooks(["212", "20", "2"])       