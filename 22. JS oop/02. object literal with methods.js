var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log("I am a rectangle");
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  },
};
rect.draw();
//update
rect.height = 200;
rect.draw();
