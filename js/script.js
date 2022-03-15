let userInput = document.getElementById("num");
let submit = document.getElementById("submit").onclick;
let answer;
let odd;
let even;

function submitbtn() {
  answer = userInput.value;
  document.getElementById("result").innerHTML = answer;

  if (answer % 2 == 0) {
    even = " Is an even number";
    document.getElementById("result").innerHTML = answer + even;
  } else {
    odd = " Is an odd number";
    document.getElementById("result").innerHTML = answer + odd;
  }
}
