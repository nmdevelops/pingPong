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

      if (outputs [index] % 5 === 0 && outputs [index] % 3 === 0) {
        outputs [index] = "Ping pong mother fucker!"
      } else if (outputs [index] % 5 === 0) {
        outputs [index] = "pong"
      } else if (outputs [index] % 3 === 0) {
        outputs [index] = "ping"
      }
    }
})






//front-end
$(document).ready(function (){
  $(".userInput form").submit(function (event) {
    event.preventDefault();
    console.log("post submit");

    userInput = $("input#userInput").val();
  console.log(userInput);
  pingPong();


  })
});
