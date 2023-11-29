'use strict';
//I redid a bunch of my code from watching the code-review video just putting it in as a ref
//The minimum number of customers per hour.
//The maximum number of customers per hour.
//The average number of cookies purchased per customer.

// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties.

// 2.Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// 5. Display the values of each array as unordered lists in the browser.

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// *** Global variables
const locationArray = [];

//*** Helper Function/Utilites
function renderAll(table) {
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].render(table);
  }
}

// Header  functions
function headerFunction(table) {

  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  let cell = document.createElement('th');
  headerRow.appendChild(cell);

  for (let i = 0; i < hours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    headerRow.appendChild(headerCell);
  }
  let totalsHeaderCell = document.createElement('th');
  totalsHeaderCell.textContent = 'Daily Location Totals';
  headerRow.appendChild(totalsHeaderCell)
}


// footer function
function footerFunction(table) {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  let cell = document.createElement('td');
  cell.textConent = 'Totals';
  footerRow.appendChild(cell);

  for (let i = 0; i < hours.length + 1; i++) {
    let cell = document.createElement('td');
    let hourlyCookiesTotal = 0;
    hourlyCookiesTotal += locationArray[0].cookiesSold[i];
    hourlyCookiesTotal += locationArray[1].cookiesSold[i];
    hourlyCookiesTotal += locationArray[2].cookiesSold[i];
    hourlyCookiesTotal += locationArray[3].cookiesSold[i];
    hourlyCookiesTotal += locationArray[4].cookiesSold[i];
    
    cell.textContent = hourlyCookiesTotal;
    footerRow.appendChild(cell);
  }

  table.appendChild(footerRow);
}

//footerFunction(table);

// *** Constuctor Function***
function Location(name, minCusty, maxCusty, averageCookieBought, customerNumber) {
  this.name = name;
  this.minCusty = minCusty;
  this.maxCusty = maxCusty;
  this.averageCookieBought = averageCookieBought;
  this.customerNumber = customerNumber;
  this.cookiesSold = [];
  this.cookiesTotal = 0
}

//***Prototype function***
Location.prototype.generateCustomers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

Location.prototype.getNumber = function () {
  this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
  return this.customerNumber;
};
Location.prototype.generateCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    //let customers = generateCustomers(this.minCusty, this.maxCusty);
    let cookies = (this.averageCookieBought * this.getNumber());
  
    //console.log(cookies)
    this.cookiesTotal += cookies;
    //console.log(this.cookiesTotal) 
    //stick each random cookie number with a time 
    this.cookiesSold.push(Math.ceil(cookies))
  }
}

Location.prototype.render = function (table) {

  // row for location
  let locationRow = document.createElement('tr');

  let name = document.createElement("td");
  name.textContent = this.name;
  locationRow.appendChild(name);

  for (let i = 0; i < hours.length; i++) {
    for (let j = 0; j < locationArray.length; j++) {
      console.log(locationArray[j].name)
      console.log('location array is:', locationArray)
      let cookiesThisHour = locationArray[j].cookiesSold[i];
      console.log('i is',i)
      console.log(cookiesThisHour)
    }
    let tableItem = document.createElement('td');
    let content = `${this.cookiesSold[i]}`;
    tableItem.innerText = content;
    locationRow.appendChild(tableItem);
  }

  let cookiesTotal = document.createElement('td');
  cookiesTotal.textContent = `${Math.floor(this.cookiesTotal)}
    `;

  locationRow.appendChild(cookiesTotal);
  table.appendChild(locationRow);

};
//*** Executable code
let seattle = new Location('Seattle', 23, 65, 6.3, 0, [], 0);
let tokyo = new Location('Tokyo', 2, 24, 1.2, 0, [], 0);
let dubai = new Location('Dubai', 11, 38, 3.7, 0, [], 0);
let paris = new Location('Paris', 20, 38, 2.3, 0, [], 0);
let lima = new Location('Lima', 2, 16, 4.6, 0, [], 0);

locationArray.push(seattle, tokyo, dubai, paris, lima);

let table = document.createElement('table');
salesdata.appendChild(table);
console.log(locationArray)
headerFunction(table);

// Generate cookies first
seattle.generateCookies();
tokyo.generateCookies();
dubai.generateCookies();
paris.generateCookies();
lima.generateCookies();

renderAll(table);

footerFunction(table)
/*
// ** object literals***
let seattle = {
  name: 'Seattle',
  minCusty: 23,
  maxCusty: 65,
  averageCookieBought: 6.3,
  customerNumber: 0,
  cookiesSold: [],
  cookiesTotal: 0,
  //random cookie generator
  generateCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  },
  getNumber: function () {
    this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
    return this.customerNumber;
  },


//loop that goes though hours array and creates number of customers and multiplies cookies
  render: function () {
    for (let i = 0; i < hours.length; i++){
  //let customers = generateCustomers(this.minCusty, this.maxCusty);
      let cookies = (this.averageCookieBought * this.getNumber());
      //console.log(cookies)
      this.cookiesTotal += cookies
      console.log(this.cookiesTotal)
  //stick each random cookie number with a time
      this.cookiesSold.push(cookies.toFixed(2))
  }
  console.log(this.cookiesSold)


//Dom manipulation
    let unorderedList = document.createElement('ul')
    let storeName = document.createElement('p')
    let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
    salesDiv.appendChild(storeName)
    salesDiv.appendChild(unorderedList)
    storeName.textContent = this.name
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li')
      listItem.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`
      unorderedList.appendChild(listItem)
  }
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = `Total cookie Sales:  ${this.cookiesTotal}
  `;
  unorderedList.appendChild(cookiesTotal)
}
}

let tokyo = {
  name: 'Tokyo',
  minCusty: 3,
  maxCusty: 24,
  averageCookieBought: 1.2,
  customerNumber: 0,
  cookiesSold: [],
  cookiesTotal: 0,
  //random cookie generator
  generateCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  },
  getNumber: function () {
    this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
    return this.customerNumber;
  },


//loop that goes though hours array and creates number of customers and multiplies cookies
  render: function () {
    for (let i = 0; i < hours.length; i++){
  //let customers = generateCustomers(this.minCusty, this.maxCusty);
      let cookies = (this.averageCookieBought * this.getNumber());
      console.log(cookies)
      this.cookiesTotal += cookies
      console.log(this.cookiesTotal)
  //stick each random cookie number with a time
      this.cookiesSold.push(cookies.toFixed(2))
  }
  console.log(this.cookiesSold)


//Dom manipulation
    let unorderedList = document.createElement('ul')
    let storeName = document.createElement('p')
    let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
    salesDiv.appendChild(storeName)
    salesDiv.appendChild(unorderedList)
    storeName.textContent = this.name
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li')
      listItem.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`
      unorderedList.appendChild(listItem)
  }
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = `Total cookie Sales:  ${this.cookiesTotal}
  `;
  unorderedList.appendChild(cookiesTotal)
}
}
let dubai = {
  name: 'Dubai',
  minCusty: 11,
  maxCusty: 38,
  averageCookieBought: 3.7,
  customerNumber: 0,
  cookiesSold: [],
  cookiesTotal: 0,
  //random cookie generator
  generateCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  },
  getNumber: function () {
    this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
    return this.customerNumber;
  },


//loop that goes though hours array and creates number of customers and multiplies cookies
  render: function () {
    for (let i = 0; i < hours.length; i++){
  //let customers = generateCustomers(this.minCusty, this.maxCusty);
      let cookies = (this.averageCookieBought * this.getNumber());
      console.log(cookies)
      this.cookiesTotal += cookies
      console.log(this.cookiesTotal)
  //stick each random cookie number with a time
      this.cookiesSold.push(cookies.toFixed(2))
  }
  console.log(this.cookiesSold)


//Dom manipulation
    let unorderedList = document.createElement('ul')
    let storeName = document.createElement('p')
    let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
    salesDiv.appendChild(storeName)
    salesDiv.appendChild(unorderedList)
    storeName.textContent = this.name
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li')
      listItem.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`
      unorderedList.appendChild(listItem)
  }
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = `Total cookie Sales:  ${this.cookiesTotal}
  `;
  unorderedList.appendChild(cookiesTotal)
}
}
let paris = {
  name: 'Paris',
  minCusty: 20,
  maxCusty: 38,
  averageCookieBought: 2.3,
  customerNumber: 0,
  cookiesSold: [],
  cookiesTotal: 0,
  //random cookie generator
  generateCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  },
  getNumber: function () {
    this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
    return this.customerNumber;
  },


//loop that goes though hours array and creates number of customers and multiplies cookies
  render: function () {
    for (let i = 0; i < hours.length; i++){
  //let customers = generateCustomers(this.minCusty, this.maxCusty);
      let cookies = (this.averageCookieBought * this.getNumber());
      console.log(cookies)
      this.cookiesTotal += cookies
      console.log(this.cookiesTotal)
  //stick each random cookie number with a time
      this.cookiesSold.push(cookies.toFixed(2))
  }
  console.log(this.cookiesSold)


//Dom manipulation
    let unorderedList = document.createElement('ul')
    let storeName = document.createElement('p')
    let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
    salesDiv.appendChild(storeName)
    salesDiv.appendChild(unorderedList)
    storeName.textContent = this.name
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li')
      listItem.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`
      unorderedList.appendChild(listItem)
  }
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = `Total cookie Sales:  ${this.cookiesTotal}
  `;
  unorderedList.appendChild(cookiesTotal)
}
}
let lima = {
  name: 'Lima',
  minCusty: 2,
  maxCusty: 16,
  averageCookieBought: 4.6,
  customerNumber: 0,
  cookiesSold: [],
  cookiesTotal: 0,
  //random cookie generator
  generateCustomers: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  },
  getNumber: function () {
    this.customerNumber = this.generateCustomers(this.minCusty, this.maxCusty);
    return this.customerNumber;
  },


//loop that goes though hours array and creates number of customers and multiplies cookies
  render: function () {
    for (let i = 0; i < hours.length; i++){
  //let customers = generateCustomers(this.minCusty, this.maxCusty);
      let cookies = (this.averageCookieBought * this.getNumber());
      console.log(cookies)
      this.cookiesTotal.toFixed(2) += cookies
      console.log(this.cookiesTotal)
  //stick each random cookie number with a time
      this.cookiesSold.push(cookies.toFixed(2))
  }
  console.log(this.cookiesSold)


//Dom manipulation
    let unorderedList = document.createElement('ul')
    let storeName = document.createElement('p')
    let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
    salesDiv.appendChild(storeName)
    salesDiv.appendChild(unorderedList)
    storeName.textContent = this.name
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li')
      listItem.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`
      unorderedList.appendChild(listItem)
  }
  let cookiesTotal = document.createElement('li');
  cookiesTotal.textContent = `Total cookie Sales:  ${this.cookiesTotal}
  `;
  unorderedList.appendChild(cookiesTotal)
}
}
*/
/*seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();*/

//headerFunction();
