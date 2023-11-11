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
//start counter at 6am and go till 8pm increase counter by 1 set for time? 
let seattle = {
  name: 'Seattle',
  minCusty: 23,
  maxCusty: 65,
  averageCookieBought: 6.3,
  cookiesSold: [],
  //random cookie generator 
  randomCookieAmountGenerator: function(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)//inclusive of min max
  }
}
//loop that goes though hours array and creates number of customers and multiplies cookies
for (let t = 0; t < hours.length; t++){
  let customers = generateCustomers(seattle.minCusty, seattle.maxCusty);
  let cookies = customers * seattle.averageCookieBought
  //stick each random cookie number with a time 
  seattle.cookiesSold.push(cookies.toFixed(2))

}
//create a function to generate number of customers
function generateCustomers (min, max){
  return Math.floor(Math.random() * (max - min +1) + min)
}
let unorderedList = document.createElement('ul')
let storeName = document.createElement('p')
let salesDiv = document.getElementById("salesdata");
//salesDiv.textContent = 'test'
salesDiv.appendChild(storeName)
salesDiv.appendChild(unorderedList)
storeName.textContent = seattle.name
for (let i = 0; i < hours.length; i++) {
  let listItem = document.createElement('li')
  listItem.textContent = `${hours[i]}: ${seattle.cookiesSold[i]} cookies`
  unorderedList.appendChild(listItem)
}