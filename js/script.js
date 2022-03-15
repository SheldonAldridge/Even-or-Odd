let userInput = document.getElementById("num");
let submit = document.getElementById("submit").onclick;
let answer;


function submitbtn()
{
    answer = userInput.value;
    document.getElementById("result").innerHTML = answer;
}
