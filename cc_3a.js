
// Create Customer Records

let customers = [
   
    {name: "Jerry"}, {email: "jerry.stackhouse24@gmail.com"}, {purchases: "Basketball, Sneakers, Jersey"},
    {name: "Bob"}, {email: "spongebobdupe@aol.com"}, {purchases: "Spongebob Costume, Krabby Patty, Jellyfish"},
    {name: "Ronald", email: "ronaldmcdonalduninversity@yahoo.com"}, {purchases: "Burger, Clown Costume, Face Paint"}
];
console.log(customers);

/// Add and Remove Data 

const newCustomer = {name: "Tre", email: "treknowsball@aol.com", purchases: "Football, Soccer, Baseball"};
customers.push (newCustomer);
console.log ("\nNew Customer:", `${newCustomer.name},${newCustomer.email},${newCustomer.purchases}`);

// Remove 1st customer name
customers.shift();
console.log(customers);

// Remove 1st customer email
customers.shift();
console.log(customers);

// Remove 1st customer purchases
customers.shift();
console.log(customers);

// Update Customer Info
customers[1].email = "therealdoodlebob@usf.edu";
console.log(customers);

let newPurchase = ("McChicken");
const ronaldPurchases = (customers[5]);
customers.ronaldPurchases.push(newPurchase);
console.log(customers);

// Display Customer Information 
customers.forEach(obj=> console.log(`Name: ${obj.name}`));
customers.forEach(obj=> console.log(`Email: ${obj.email}`));
customers.forEach(obj=> console.log(`Purchases: ${obj.purchases}`));

console.log (customers.forEach(obj =>console.log (`Name: ${obj.name}`)));
console.log (customers.forEach(obj =>console.log (`Email: ${obj.email}`)));
console.log (customers.forEach(obj =>console.log (`Purchases: ${obj.purchases}`)));
