"use strict";

// node 기본 내장 Class
const EventEmitter = require("events");

class ChatManager extends EventEmitter {}
const chatManager = new ChatManager();
// on : 특정 이벤트가 발생했을때 임의의 이벤트 선언
chatManager.on("join", () => {
  console.log("new user joined");
});

//emit  - 선언된 event 호출
chatManager.emit("join");
