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
            var cookies = Math.round((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
            this.total += cookies;
            this.numOfCookiesPurHour.push(cookies);
        }
        console.log(this.total);
        console.log(this.numOfCookiesPurHour);

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

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var body = document.getElementById('bodypage');
var table = document.createElement('table');
body.appendChild(table);

function addHeader() {
    var headerRow = document.createElement('tr');
    var th = document.createElement('th');
    headerRow.appendChild(th);

    for (var i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        th.textContent = hours[i];
        headerRow.appendChild(th);

    }
    th = document.createElement('th');
    th.textContent = 'Daily location total';
    headerRow.appendChild(th);
    table.appendChild(headerRow);

}
addHeader();

var allLocation = [];

function Cookie(location, maxCustomers, minCustomers, avgCookies) {

    this.location = location;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.avgCookies = avgCookies;
    this.total = 0;
    this.numOfCookiesPurHour = [];
    this.numOfCustomer = [];
    allLocation.push(this);
}
console.log(allLocation);
Cookie.prototype.calculateNumOfCustomer = function () {

    for (let index = 0; index < hours.length; index++) {
        var cookies = Math.floor((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
        this.total += cookies;
        this.numOfCookiesPurHour.push(cookies);
    };
  
};

seattle.area = '90sqm';
seattle.location = 'seattle';
seattle.numOfCookies();
seattle.render();
console.log(seattle);

var tokyo = {
    location: 'tokyo',
    maxCustomers: 24,
    minCustomers: 3,
    avgCookies: 1.2,
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

Cookie.prototype.render = function () {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);

    for (var i = 0; i < hours.length; i++) {
        td = document.createElement('td');
        td.textContent = this.numOfCookiesPurHour[i];
        tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = this.total;
    tr.appendChild(td);


};
var seattle = new Cookie('seattle', 65, 23, 6.3);
var tokyo = new Cookie('tokyo', 24, 3, 1.2);
var dubai = new Cookie('dubai', 38, 11, 3.7);
var paris = new Cookie('paris', 38, 20, 2.3);
var lima = new Cookie('lima', 62, 23, 6.3);



for (var i = 0; i < allLocation.length; i++) {
    allLocation[i].calculateNumOfCustomer();
    allLocation[i].render();
}

var dubai = {
    location: 'dubai',
    maxCustomers: 38,
    minCustomers: 11,
    avgCookies: 3.7,

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
    }
};
dubai.numOfCustomer();
dubai.render();


var paris = {
    location: 'paris',
    maxCustomers: 38,
    minCustomers: 20,
    avgCookies: 2.3,

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

    function addFooter (){
        var tr = document.createElement('tr');
        table.appendChild(tr);
        var td = document.createElement('td');
        td.textContent= 'Total';
        tr.appendChild(td);
        var totalOfTotal =0; 
        for (var i = 0; i < hours.length; i++) {
            var sum = 0;
            
        for (var j = 0; j < allLocation.length; j++) {
            sum += allLocation[j].numOfCookiesPurHour[i];
            // td.textContent = sum;
        }
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = sum;
        totalOfTotal += sum;
    }
        td = document.createElement('td');
        td.textContent= totalOfTotal;
        tr.appendChild(td);

}
addFooter();
