"use strict";

const test = new Set();

test.add(1);
test.add(1);
test.add(2);
test.add(3);

for (const item of test) {
  console.log(item);
}

console.log(`return : ${test.has(2)}`);

let string = "node.js asd asd";
let isStartWith = string.startsWith("n");
let isContain = string.includes("js");
let isEndWith = string.endsWith("지");
console.log(`${string} : ${isStartWith} / ${isContain} / ${isEndWith}`);

var r = (function () {
  var lang = "js";
  console.log(lang);
})();

try {
  a;
} catch (error) {
  console.log(error);
} finally {
  console.log("a");
}
