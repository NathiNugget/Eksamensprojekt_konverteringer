console.log("Hello there!");

convert = true;

function conversion(inputValue){
  var short = document.getElementById('result');
  if (convert == true){
    console.log("yeet");
    if (inputValue === "A"){
      console.log(10);
      short.innerHTML = "Resultatet er 10"
      convert = false;
      console.log(convert);
    }
    else if (inputValue === "B"){
      console.log(11);

    }
    else if (inputValue === "C") {
      console.log(12);
    }
    else if (inputValue === "D") {
      console.log(13);
    }
    else if (inputValue === "E") {
      console.log(14);
    }
    else if (inputValue === "F") {
      console.log(15);
    }
    else {
      console.log("nAn");

    }
  }
}

function yeet(){
  var inputValue = document.getElementById('indput').value;
  document.getElementById("text-box").innerHTML = (document.getElementById('indput').value);
  if (convert == true){
    conversion(inputValue);
    console.log("true");
  }
  else {
    console.log("stop");
  }
}
