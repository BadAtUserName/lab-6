'use strict';
//The minimum number of customers per hour.
//The maximum number of customers per hour.
//The average number of cookies purchased per customer.

// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties.

// 2.Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// 5. Display the values of each array as unordered lists in the browser.

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

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
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
