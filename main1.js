let number = prompt("Сан жазыныз");

function tagNumber() {
  if (number % 2 == 0) {
    console.log(number + " " + true);
  } else {
    console.log(number + " " + false);
  }
}
tagNumber(number);
