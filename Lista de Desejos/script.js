const wishlist = ["Red T-Shirt", "Blue Jeans", "Yellow Sweater"];
const prices = [9.99, 14.99, 12.99];
const quantity = [1, 2, 1];
let availableStock = [100, 121, 53];
let total = 0;
for (let i = 0; i < wishlist.length; i++) {
  console.log(quantity[i] + " " + wishlist[i] +
  " added to your shopping cart.");
  total += prices[i] * quantity[i];
}
console.log("Total Price: $" + total);
for (let i = 0; i < availableStock.length; i++) {
  availableStock[i] -= quantity[i];
  console.log("There are " + availableStock[i] + " " + wishlist[i] + " left.");
}