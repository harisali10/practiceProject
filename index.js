// const express = require("express");
// const fetch = require("node-fetch");
// const app = express();
// let listofParks = [1, 2, 3, 4];
// let allUsers = [];
// app.get("/getHello", async function (req, res) {
//   for (x of listofParks) {
//     const xt = await fetch(`https://jsonplaceholder.typicode.com/posts/${x}`);
//     const ll = await xt.json();
//     allUsers.push({
//       key: x,
//       value: ll.title,
//     });
//   }
//   console.log(allUsers);
//   res.send({ allUsers });
// });
// app.listen(3000, () => {
//   console.log("App is Listening");
// });
let a = 10;
function abcd() {
  a = 5;
  console.log(a);
}
abcd();
console.log("outside", a);

// let Rest = [];
// obj = {};
// let overAllResult = [];
// Rest = ["Rest A", "Rest B", "Rest C", "Rest D", "Rest E"];
// let singlePark = "Park A";
// obj.key = singlePark;
// obj.value = Rest;

// overAllResult.push(obj);
// console.log(overAllResult);
// setTimeout(() => {
//   console.log("Call 1");
// }, 5000);
// setTimeout(() => {
//   console.log("Call 2");
// }, 2000);
// listofParks = [1, 2, 3, 4];
// abcd();
