var seattel = {
    location: 'seattel',
    maxCustomers: 62,
    minCustomers: 23,
    avgCookies: 6.3,
    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],
    numOfCustomer: function () {
        for (let index = 0; index < this.hours.length; index++) {
            var cook = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cook;
            this.numOfCookiesPurHour.push(cook);
        }
        console.log(this.total);
        console.log(this.numOfCookiesPurHour);
    }
};
seattel.numOfCustomer();

// function getRandomNumber(min, max) {
//     var random = Math.random();
//     random = (random * (max - min + 1)) + min; // less than or equal max  
//     random = Math.floor(random); // remove fractions 
//     return random;
// };


// total =0;

// for (var j = 0; j< this.numOfCookiesPurHour.length; j++); 
//     total =+ this.numOfCookiesPurHour[j];
//      console.log(total);
