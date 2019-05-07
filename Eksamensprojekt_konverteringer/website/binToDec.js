convert = true;

function binConversion(binValue){
  var binShort = document.getElementById('dec-result');
  console.log(binValue);

  var binMapping = {
      "0" : "0",
      "1" : "1",
  };

  var binString = binValue.toString();
  var returnNum = 0;
  var i;

  for (i = 0; i < binString.length; i++) {
      if (binMapping[binString[i]] === '1'){
      binReturnNum += binMapping[binString[i]] * (2 ** (binString.length -1 - i));
    }
  }
  console.log(binReturnNum);
  short.innerHTML = "Resultat: " + binReturnNum;
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
