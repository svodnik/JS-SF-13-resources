/*
  Write code to to calculate a customer's total cost in dollars based on product price, tax rate, shipping cost, and the currency they're using for the purchase (dollars or euros). 

  * Create a function called calcTotal() that accepts parameters for all the
    necessary information.
  * Start your calculations by converting the price from euro to dollars if 
    necessary (HINT: use a conditional statement, and call the 
    convertEurosToDollars() function.)
  * Calculate and store the total tax (price times tax).
  * Calculate and store the total cost (the total of price, total tax, and shipping).
  * Convert the total cost to two decimal places (HINT: look up the toFixed() method).
  * Log the total cost to the console, with text describing what the value is.
  * Call the function with the arguments 85.43 for price, 0.0825 for tax rate,
    and 7.95 for shipping cost, and dollar as the currency, and verify that the
    values returned are realistic.
  * Call the function again with the same values but changing the currency to
    euro and verify that you get a different, but realistic, result.

  BONUS 1: Convert your function to assume a currency of "dollar" by default.

  BONUS 2: Convert your function to an arrow function.
*/

// complete the calcTotal() function below:

/*
function calcTotal(price, tax, shipping, currency) {
  if (currency === "euro") {
    price = (convertEurosToDollars(price));
  }
  let totalTax = price * tax;
  let totalCost = price + totalTax + shipping;
  totalCost = totalCost.toFixed(2);
  console.log("Total cost is $" + totalCost);
}
*/

// with a default parameter
function calcTotal(price, tax, shipping, currency = "dollar") {
  if (currency === "euro") {
    price = convertEurosToDollars(price);
  }
  let totalTax = price * tax;
  let totalCost = price + totalTax + shipping;
  totalCost = totalCost.toFixed(2);
  console.log("Total cost is $" + totalCost);
}

// accepts a price in euros and returns the same price in dollars
function convertEurosToDollars(euroPrice) {
  let dollarPrice = euroPrice * 1.2;
  return dollarPrice;
}

// add statements below to call your function
// calcTotal(85.43, 0.0825, 7.95, 'dollar');
calcTotal(85.43, 0.0825, 7.95); // using default parameter
calcTotal(85.43, 0.0825, 7.95, "euro");
