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
let newStoreSection = document.getElementById('new-store');
let salesdata = document.getElementById('sales-data');
let newLocation;

//**** get form for event submission
let NewStoreDataForm = document.getElementById('new-form');
let hourlySalesTable = document.createElement('table');

//*** Helper Function/Utilites
function renderStoreRows(table) {
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].render(table);
  }
}

//*** Form Submission, Event Listener & Handler

function handleSubmit(event) {
  event.preventDefault();
  //get values from form
  let name = event.target.name.value;
  let minCusty = parseInt(event.target.minCusty.value);
  let maxCusty = parseInt(event.target.maxCusty.value);
  let averageCookieBought = parseFloat(event.target.averageCookieBought.value);

  //create location with input values
  newLocation = new Location(name, minCusty, maxCusty, averageCookieBought);
  newLocation.generateCookies();
  locationArray.push(newLocation);
  //console.log(newLocation)
  //newLocation.render(hourlySalesTable);
  //footerFunction(hourlySalesTable);
  //renderSalesTable(hourlySalesTable)
  rebuildSalesTables();
}

//NewStoreDataForm.addEventListener('submit', handleSubmit) *********8***********************************************

// Header  functions
function headerFunction(table) {

  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  let cell = document.createElement('th');
  headerRow.appendChild(cell);
  cell.textContent = ('Locations');
  for (let i = 0; i < hours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    headerRow.appendChild(headerCell);
  }
  let totalsHeaderCell = document.createElement('th');
  totalsHeaderCell.textContent = 'Daily Location Totals';
  headerRow.appendChild(totalsHeaderCell);
}


// footer function
function footerFunction(table) {

  let footerRow = document.createElement('tr');

  table.appendChild(footerRow);

  // Add row label
  let cell = document.createElement('td');
  cell.textContent = 'Totals';
  footerRow.appendChild(cell);

  let allHoursTotal = 0;

  // make hour totals
  for (let i = 0; i < hours.length; i++) {
    let cell = document.createElement('td');
    let hourlyCookiesTotal = 0;
    for (let j = 0; j < locationArray.length; j++) {
      hourlyCookiesTotal += locationArray[j].cookiesSold[i];
    }
    allHoursTotal += hourlyCookiesTotal;
    cell.textContent = hourlyCookiesTotal;
    footerRow.appendChild(cell);
  }

  // add total for all locations
  let hoursTotalCell = document.createElement('td');
  hoursTotalCell.textContent = allHoursTotal;
  footerRow.append(hoursTotalCell);
  table.appendChild(footerRow);
}

let rebuildSalesTables = function () {
  //remove old table from dom
  hourlySalesTable.remove();
  //create new table
  hourlySalesTable = document.createElement('table');
  //render new table
  renderSalesTable(hourlySalesTable);
  //add new table to dom #sales-data div
  salesdata.appendChild(hourlySalesTable);
};
let renderSalesTable = function (table) {
  headerFunction(table);
  renderStoreRows(table);
  footerFunction(table);
};

// *** Constuctor Function***
function Location(name, minCusty, maxCusty, averageCookieBought, customerNumber) {
  this.name = name;
  this.minCusty = parseInt(minCusty);
  this.maxCusty = parseInt(maxCusty);
  this.averageCookieBought = parseFloat(averageCookieBought);
  this.customerNumber = customerNumber;
  this.cookiesSold = [];
  this.cookiesTotal = 0;
}

//***Prototype function***
Location.prototype.generateCustomers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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
    this.cookiesSold.push(Math.ceil(cookies));
  }
};

Location.prototype.render = function (table) {

  // row for location
  let locationRow = document.createElement('tr');

  let name = document.createElement('td');
  name.textContent = this.name;
  locationRow.appendChild(name);

  for (let i = 0; i < hours.length; i++) {
    for (let j = 0; j < locationArray.length; j++) {
      console.log(locationArray[j].name);
      console.log('location array is:', locationArray);
      let cookiesThisHour = locationArray[j].cookiesSold[i];
      console.log('i is', i);
      console.log(cookiesThisHour);
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



salesdata.appendChild(hourlySalesTable);
console.log(locationArray);

// Generate cookies first
seattle.generateCookies();
tokyo.generateCookies();
dubai.generateCookies();
paris.generateCookies();
lima.generateCookies();

NewStoreDataForm.addEventListener('submit', handleSubmit);


renderSalesTable(hourlySalesTable);
