// console.log("hello world");

let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let displayText = "";
// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    // console.log(buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      displayText += buttonText;
      display.value = displayText;
    } else if (buttonText == "C") {
      displayText = "";
      display.value = "";
    } else if (buttonText == "=") {
      displayText = display.value;
      display.value = eval(displayText);
      displayText = display.value;
      //   console.log(displayText);
      //   console.log(display.value);
    } else {
      displayText += buttonText;
      display.value = displayText;
    }
  });
});
