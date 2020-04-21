"use strict";

const edit = () => {};
const write = () => {};

module.exports = {
  edit,
  write,
};

module.exports = {
  id: "bdog",
  token: "...",
  fn: () => {
    console.log("this is function");
  },
};

const obj = {
  title: "node.js 올인원",
};

const newObj = {
  name: "node.js",
};

console.log(Object.assign(obj, newObj)); // 원천 obj 변함
console.log(obj);
console.log(newObj);
// spread assign

const ret = {
  ...obj,
  ...newObj,
};
console.log(ret);
