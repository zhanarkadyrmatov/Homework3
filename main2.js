let lastName = ["Arslan", "Janar", "Arstan", "Beka"];

function myName(element, array) {
  let result = array.includes(element);
  return result;
}
console.log(myName("Janar", lastName));
