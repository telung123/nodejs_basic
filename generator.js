"use strict";

// generator - yield 사용. -> return 과는 다른 기능 사용 가능
// return - 반환 후 코드 끝남
// yield : 함수를 끝내지 않고, 반환함
// arrow function 생성 하면 안됨 (function* 로 명시함)
function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();
gen.next("zero");
gen.next("first");
gen.next("second");

const obj = {
  *gen() {
    let cnt = 0;
    yield ++cnt;
    yield ++cnt;
    yield ++cnt;
  },
};

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
