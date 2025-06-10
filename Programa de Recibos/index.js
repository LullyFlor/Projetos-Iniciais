const customers = ["John S.", "Emma M.", "Frank T."];
const receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"]
];
const prices = {
  "eggs": 3.50,
  "white bread": 4.50,
  "milk": 5.99,
  "cheese": 6.50,
  "butter": 3.45,
  "pancake mix": 4.50,
  "flour": 5.75,
  "cereal": 4.50,
  "whole wheat bread": 6.50,
  "vanilla": 8.75
};

function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

function populateTable() {
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const receipt = receipts[i];
    let receipt_list = "";
    let sum = 0;
    for (let j = 0; j < receipt.length; j++) {
      const item = receipt[j];
      const price = prices[item];
      receipt_list += item + "\n";
      sum += price;
    }
    console.log("customer" + i.toString(), customer);
    console.log("receipt" + i.toString(), receipt_list);
    console.log("total" + i.toString(), sum);
  }
}