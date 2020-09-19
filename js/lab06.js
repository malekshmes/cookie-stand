'use strict';

var seattle = {
    location: 'seattel',
    maxCustomers: 65,
    minCustomers: 23,
    avgCookies: 6.3,
    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],

    numOfCookies: function () {
        for (var i = 0; i < this.hours.length; i++) {
            var cookies = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)* this.avgCookies;
            this.total += cookies;
            this.numOfCookiesPurHour.push(cookies);
        }
        // console.log(this.total);
        // console.log(this.numOfCookiesPurHour);

    },

    render: function () {
        var body = document.getElementById('bodyPage');
        var parentElement = document.createElement('article');
        body.appendChild(parentElement);
        var h1 = document.createElement('h1');
        h1.textContent = this.location;
        parentElement.appendChild(h1);

        var unordereList = document.createElement('ul');
        parentElement.appendChild(unordereList);
        for (var i = 0; i < this.hours.length; i++) {
            var listItems = document.createElement('li');
            listItems.textContent = this.hours[i] + ' : ' + this.numOfCookiesPurHour[i] + ' cookies';
            unordereList.appendChild(listItems);
        }

        var total = document.createElement('li');
        total.textContent = 'total : ' + this.total;
        unordereList.appendChild(total);
    }
}
seattle.numOfCookies();
seattle.render();
var tokyo = {
    location: 'tokyo',
    maxCustomers: 24,
    minCustomers: 3,
    avgCookies: 1.2,
    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],

    numOfCookies: function () {
        for (let index = 0; index < this.hours.length; index++) {
            var cook = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cook;
            this.numOfCookiesPurHour.push(cook);
        }
        // console.log(this.total);
        // console.log(this.numOfCookiesPurHour);

    },
    render: function () {
        var body = document.getElementById('bodyPage');
        var parentElement = document.createElement('article');
        body.appendChild(parentElement);
        var h1 = document.createElement('h1');
        h1.textContent = this.location;
        parentElement.appendChild(h1);

        var unordereList = document.createElement('ul');
        parentElement.appendChild(unordereList);
        for (var i = 0; i < this.hours.length; i++) {
            var listItems = document.createElement('li')
            listItems.textContent = this.hours[i] + ' : ' + this.numOfCookiesPurHour[i] + ' cookies';
            unordereList.appendChild(listItems);
        }
        var total = document.createElement('li');
        total.textContent = 'total : ' + this.total;
        unordereList.appendChild(total);
    }
}
tokyo.numOfCookies();
tokyo.render();
var dubai = {
    location: 'dubai',
    maxCustomers: 38,
    minCustomers: 11,
    avgCookies: 3.7,

    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],

    numOfCookies: function () {
        for (let index = 0; index < this.hours.length; index++) {
            var cook = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cook;
            this.numOfCookiesPurHour.push(cook);
        }
        // console.log(this.total);
        // console.log(this.numOfCookiesPurHour);

    },
    render: function () {
        var body = document.getElementById('bodyPage');

        var parentElement = document.createElement('article');
        body.appendChild(parentElement);
        var h1 = document.createElement('h1');
        h1.textContent = this.location;
        parentElement.appendChild(h1);

        var unordereList = document.createElement('ul');
        parentElement.appendChild(unordereList);
        for (var i = 0; i < this.hours.length; i++) {
            var listItems = document.createElement('li')
            listItems.textContent = this.hours[i] + ' : ' + this.numOfCookiesPurHour[i] + ' cookies';
            unordereList.appendChild(listItems);
        }
        var total = document.createElement('li');
        total.textContent = 'total : ' + this.total;
        unordereList.appendChild(total);
    }
};
dubai.numOfCookies();
dubai.render();


var paris = {
    location: 'paris',
    maxCustomers: 38,
    minCustomers: 20,
    avgCookies: 2.3,

    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],

    numOfCookies: function () {
        for (let index = 0; index < this.hours.length; index++) {
            var cook = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cook;
            this.numOfCookiesPurHour.push(cook);
        }
        // console.log(this.total);
        // console.log(this.numOfCookiesPurHour);

    },
    render: function () {
        var body = document.getElementById('bodyPage');

        var parentElement = document.createElement('article');
        body.appendChild(parentElement);
        var h1 = document.createElement('h1');
        h1.textContent = this.location;
        parentElement.appendChild(h1);

        var unordereList = document.createElement('ul');
        parentElement.appendChild(unordereList);
        for (var i = 0; i < this.hours.length; i++) {
            var listItems = document.createElement('li')
            listItems.textContent = this.hours[i] + ' : ' + this.numOfCookiesPurHour[i] + ' cookies';
            unordereList.appendChild(listItems);
        }
        var total = document.createElement('li');
        total.textContent = 'total : ' + this.total;
        unordereList.appendChild(total);
    }
    
}
var lima = {
    location: 'lima',
    maxCustomers: 62,
    minCustomers: 23,
    avgCookies: 6.3,

    hours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'],
    total: 0,
    numOfCookiesPurHour: [],

    numOfCookies: function () {
        for (let index = 0; index < this.hours.length; index++) {
            var cook = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cook;
            this.numOfCookiesPurHour.push(cook);
        }
        // console.log(this.total);
        // console.log(this.numOfCookiesPurHour);

    },
    render: function () {
        var body = document.getElementById('bodyPage');

        var parentElement = document.createElement('article');
        body.appendChild(parentElement);
        var h1 = document.createElement('h1');
        h1.textContent = this.location;
        parentElement.appendChild(h1);

        var unordereList = document.createElement('ul');
        parentElement.appendChild(unordereList);
        for (var i = 0; i < this.hours.length; i++) {
            var listItems = document.createElement('li')
            listItems.textContent = this.hours[i] + ' : ' + this.numOfCookiesPurHour[i] + ' cookies';
            unordereList.appendChild(listItems);
        }
        var total = document.createElement('li');
        total.textContent = 'total : ' + this.total;
        unordereList.appendChild(total);
    }
    
};

lima.numOfCookies();
lima.render();
