console.log("Hello there!");

convert = true;

function conversion(inputValue){
  var short = document.getElementById('result');

  console.log(inputValue);

  var mapping = {
      "0" : "0",
      "1" : "1",
      "2" : "2",
      "3" : "3",
      "4" : "4",
      "5" : "5",
      "6" : "6",
      "7" : "7",
      "8" : "8",
      "9" : "9",
      "A" : "10",
      "B" : "11",
      "C" : "12",
      "D" : "13",
      "E" : "14",
      "F" : "15"
  };

  var srcString = inputValue.toString();
  var returnNum = 0;
  var i;

  for (i = 0; i < srcString.length; i++) {
      returnNum += mapping[srcString[i]] * (16 ** (srcString.length -1 - i));
  }
  console.log(returnNum);
  short.innerHTML = "Resultat: " + returnNum;
  };

function yeet(){
  var inputValue = document.getElementById('indput').value;
  document.getElementById("text-box").innerHTML = "Dit input var: " + (document.getElementById('indput').value);
  if (convert == true){
    conversion(inputValue);
    console.log("true");
  }
  else {
    console.log("stop");
  }
}
