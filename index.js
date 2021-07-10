function jp() {
  console.log('normal function');
}
jp();

const x = function j() {
  console.log('Anonymous');
};
x();

(function(name) {
  console.log(name);
})('imediate invoked function');

arrow = () => {
  console.log('arrow function');
};
arrow();
simplearrow = a => a * a;
console.log(simplearrow(5));
const self = this;
function test(){
  this.name = "jp";
  this.display = function(){
    console.log(self.name);
  }
   this.arrowdisplay = () => {
     console.log(this.name);
   }
}

const test1 = new test();
const x1 = test1.display;
const y1 = test1.arrowdisplay;
x1();
y1();