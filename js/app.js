'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattle = {
    name: 'seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    numOfCookiesPurHour: [],
    total : 0,

    numOfCustomer: function () {

        // console.log(this.minCustomers,this.maxCustomers);

        for (var i = 0; i < hours.length; i++)
            // this.numOfCookiesPurHour[i] = getRandomNumber(this.minCustomers, this.maxCustomers);
            var cook = Math.round(Math.round(Math.round()*(this.maxCustomers- this.minCustomers + 1))+this.minCustomers)*this.avgCookies;
            console.log(cook);
            this.numOfCookiesPurHour.push(cook);
            this.total+= cook;
            console.log(this.numOfCustomer);
            console.log(this.total);


        //         var randomly = Math.floor (Math.floor()* this.maxCustomers - this.minCustomers +1) + this.minCustomers;
        //          console.log(randomly);
        //         this.numOfCookiesPurHour.push(Math.floor(this.avgCookies) * randomly);
        // this.total = this.total + (this.numOfCookiesPurHour[i]);

        //     }

        console.log(this.numOfCookiesPurHour);
        // }
    
    }

}

seattle.numOfCustomer();


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
