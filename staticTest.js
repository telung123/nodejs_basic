"use strict";

class test {
  constructor() {
    this.config = [];
  }

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
