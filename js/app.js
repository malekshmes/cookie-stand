'use strict';

var allLocation = [];
var body = document.getElementById('bodypage');

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var total = 0;
function Cookie(location, maxCustomers, minCustomers, avgCookies, hours) {
    
    this.location = location;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.avgCookies = avgCookies;
    this.hours = hours;
    this.total = 0;
    this.numOfCookiesPurHour = [];
    this.numOfCustomer = [];
    
    
}
Cookie.prototype.calculateNumOfCustomer = function () {
    
    for (let index = 0; index < this.hours.length; index++) {
        var cook = Math.floor((Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.avgCookies);
        this.total += cook;
        this.numOfCookiesPurHour.push(cook);
        
        
    }
    
    Cookie.prototype.render = function () {
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
            listItems.textContent = this.hours[i] + ':' + this.numOfCookiesPurHour[i];
            unordereList.appendChild(listItems);
        }
        
        
        
    }}
    var seattle = new Cookie('seattle', 65, 23, 6.3, 0,[]);
    var tokyo = new Cookie('tokyo', 24, 3, 1.2, 0, []);
    var dubai = new Cookie('dubai', 38, 11, 3.7, 0, []);
    var paris = new Cookie('paris', 38, 20, 2.3, 0, []);
    var lima = new Cookie('lima', 62, 23, 6.3, 0, []);
    
    for (var i = 0; i < allLocation.length; i++) {
        allLocation[i].calculateNumOfCustomer();
        allLocation[i].render();
    }
    
    // for ( var rowCount=0; rowCount<=6 ; rowCount++ ){
    //     var table =document.createElement('table');
    //     body.appendChild(table);
    //     var tr = document.createElement('tr');
    //     table.appendChild(tr);
    //     tr.textContent = this.hours[i] 
    // }