///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((total, elem) => total + elem.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  let priceWithTax = cartTotal * (1 + tax / 100);
  let priceMinusCoupVal = priceWithTax - couponValue;

  // I returned the final price rounded two decimal places.
  // .tofixed() produces a string type so I used Number() to convert back to a number type.
  return Number(priceMinusCoupVal.toFixed(2));
};

console.log(calcFinalPrice(15.99, 5, 6));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Object Properties
    - foodItem (string)
    - price (number)
    - quantity (number)
    - category (string)
    - zipCode (string)


    Property Explanation: 
    - foodItem is a string type because names of items are usually strings in most cases.

    - price is a number type which covers both integers and floating points. Plus those numbers can be manipulated (addition, subtraction, etc).

    - quantity is a number type traditionally, plus it is easier to manipulate if the quantity needs adjustment (addition, subtraction, etc).

    - category is a string type that describes the classificaion of the item. It's like appetizer/entree/drink.

    - zipCode is a string that happens to be made up of numbers. Even though it is made up of numbers, zipcodes will not be manipulated. The zipcode can be used to help identify if delivery is an option. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerOrderObj = {
  foodItem: "Chicken Fingers",
  price: 14.99,
  quanity: 1,
  category: "Appetizer",
  zipCode: "48139",
};

console.log(customerOrderObj);
