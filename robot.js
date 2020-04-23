class Robot {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}`);
  }
}

const robot = new Robot("Hello");
robot.speak();
