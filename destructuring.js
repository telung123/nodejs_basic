"use strict";

const obj = {
  title: "node",
  value: "all",
};

const arr = [1, 2, 3];

const { title, value } = obj;
console.log(title, value);

const [, a, b] = arr; // 1을 건너 뛰고, 2,3을 할당
console.log(a, b);
