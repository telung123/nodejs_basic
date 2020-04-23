"use strict";

class test {
  constructor() {}

  fn() {
    console.log("asd");
  }

  static call() {
    console.log("call");
  }
}

test.call();

const testarg = new test();
testarg.fn();
