1. Reverse String with Delay
JavaScript
let input = "Hello World";
setTimeout(() => {
  console.log(input.split("").reverse().join(""));
}, 2000);
2. Random Number Generator with Delay and Progress Indication
JavaScript
let delay = 3000;
console.log("Generating random number...");
for (let i = delay; i > 0; i -= 1000) {
  setTimeout(() => {
    console.log(`Time remaining: ${i / 1000} seconds`);
  }, delay - i);
}
setTimeout(() => {
  console.log(`Random number: ${Math.floor(Math.random() * 100)}`);
}, delay);
3. Store Inventory Price Converter
JavaScript
let inventory = {
  "Item 1": 10.99,
  "Item 2": 5.49,
  "Item 3": 7.99
};
let exchangeRate = 80;
let inventoryInRupees = Object.fromEntries(
  Object.entries(inventory).map(([key, value]) => [key, value * exchangeRate])
);
console.log(inventoryInRupees);
4. Filtering and Capitalizing Books
JavaScript
let books = [
  { title: "Book 1", author: "John Doe", year: 2009 },
  { title: "Book 2", author: "Jane Doe", year: 2011 },
  { title: "Book 3", author: "Bob Smith", year: 2015 }
];
let filteredBooks = books
  .filter(book => book.year > 2010)
  .map(book => ({ ...book, author: book.author.toUpperCase() }));
console.log(filteredBooks);
5. URL Validation
JavaScript
let urlRegex = /^(http|https):\/\/[a-zA-Z0-9\.\-]+\.([a-zA-Z]{2,})$/;
let url = "https://www.example.com";
if (urlRegex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
6. LinkedIn Profile URL Validator
JavaScript
let linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;
let linkedinUrl = "https://www.linkedin.com/in/johndoe/";
if (linkedinRegex.test(linkedinUrl)) {
  console.log("Valid LinkedIn profile URL");
} else {
  console.log("Invalid LinkedIn profile URL");
}
Let me know if you need any further assistance!
