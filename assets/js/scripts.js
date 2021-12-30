var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  if (currentNumber > 0) {
    currentNumberWrapper.style.color = "#7fb1e0";
  }
  if (currentNumber === 0){
      currentNumberWrapper.style.color = "black"
  }
  
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = "red";
  }
  if (currentNumber === 0){
    currentNumberWrapper.style.color = "black"
}
  currentNumberWrapper.innerHTML = currentNumber;
}
