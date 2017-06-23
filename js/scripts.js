//back-end
var numbers = [];
var userInput;
var multiple;
var outputs = [];

var pingPong = (function () {

  for (var i = 1; i <= userInput; i++) {
    numbers.push(i);
  }

  outputs = numbers.slice();


    for (var index = 0; index <= outputs.length; index +=1) {

      if (outputs [index] % 3 === 0) {
        outputs [index] = "ping"
      } else {
        console.log("no dice douche");
      }


      }

})






//front-end
$(document).ready(function (){
  userInput = prompt ("go to...")

pingPong();
});
