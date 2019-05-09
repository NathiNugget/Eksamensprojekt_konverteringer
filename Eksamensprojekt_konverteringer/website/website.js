// Konverteringsfunkjtionen der tager inputValue som parameter køres.
function conversion(inputValue){
  //variablen short referer til resultat
  var short = document.getElementById('result');

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

    conversion(inputValue);
    console.log("true");
}

// Binær --> Decimal konvertering starter her


// Funktionen der definerer mapping over binære værdier, foretager konvertering og printer resultatet starter her.
function binConversion(binValue){
// binShort refererer til den tekstbokst i HTML-dokumentet der skal vise resultatet
  var binShort = document.getElementById('dec-result');
// Her defineres defineres decimale værdier for hver binær
  var binMapping = {
      "0" : "0",
      "1" : "1",
  };
  // Variabler defineres og den binære værdi bliver lavet om til string.
  var binString = binValue.toString();
  var binReturnNum = 0;
  var i;
// For loop der tager i og længden af binString som parameter.
  for (i = 0; i < binString.length; i++) {
    // Den matematiske beregning af det binære talsystem til decimal for i.
      binReturnNum += binMapping[binString[i]] * (2 ** (binString.length -1 - i));
    }
  // Resultat printes
  binShort.innerHTML = "Resultat: " + binReturnNum;
  };
// Funktionen der eksekveres når der trykkes på konverteingskanppen på siden.
function binToDec(){
  // Input gemmes som binValue
  var binValue = document.getElementById('binær').value;
  // Brugeren bliver oplyst om sit input
  document.getElementById("bin-input").innerHTML = "Dit input var: " + (document.getElementById('binær').value);
    binConversion(binValue);
}
