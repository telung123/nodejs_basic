"use strict";

// 실행순서는 그때그때 다르다.(CPU, memory..등 )
const timer = setTimeout(() => {
  console.log("asd");
}, 0);

const imm = setImmediate(() => {
  console.log("dddd");
});

const interval = setInterval(() => {
  console.log("third");
}, 1000);

// clearImmediate(imm);
clearInterval(interval);
// clearTimeout(timer);
