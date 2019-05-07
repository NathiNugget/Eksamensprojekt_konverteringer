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

// Binær --> Decimal konvertering starter her

convert = true;

function binConversion(binValue){
  var binShort = document.getElementById('dec-result');
  console.log(binValue);

  var binMapping = {
      "0" : "0",
      "1" : "1",
  };

  var binString = binValue.toString();
  var binReturnNum = 0;
  var i;

  for (i = 0; i < binString.length; i++) {
      if (binMapping[binString[i]] === '1'){
      binReturnNum += binMapping[binString[i]] * (2 ** (binString.length -1 - i));
    }
  }
  console.log(binReturnNum);
  binShort.innerHTML = "Resultat: " + binReturnNum;
  };

function binToDec(){
  var binValue = document.getElementById('binær').value;
  document.getElementById("bin-input").innerHTML = "Dit input var: " + (document.getElementById('binær').value);
  if (convert == true){
    binConversion(binValue);
    console.log("true");
  }
  else {
    console.log("stop");
  }
}
