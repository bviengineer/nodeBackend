/* 
1. Create a new directory named MyShop
2. Add a file named listProducts.js
3. Install the "faker" package
4. Read the faker docs and figure out how it works
5. Use faker to print 10 random product names and pricces
6. BE RESOURCEFUL! DON'T CHEAT AND FAST FORWARD!!!
7. Run your file with node and make sure it works!
*/

var faker = require("faker");
    
console.log("======================" + "\n Welcome To My Shop" + "\n =====================");
for(var i = 1; i < 10; i++){
    console.log([i] + ". " + faker.commerce.productName() + " - $" + faker.commerce.price());    
}