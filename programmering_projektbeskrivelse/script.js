console.log("Hello there!");

convert = true;

function conversion(inputValue){
  var short = document.getElementById('result');
  if (convert == true){
    console.log("yeet");
    if (inputValue === "A"){
      console.log(10);
      short.innerHTML = "Resultatet er: 10"
      convert = false;
      console.log(convert);
    }
    else if (inputValue === "1") {
      console.log(1);
    }
    else if (inputValue === "2") {
      console.log(2);
    }
    else if (inputValue === "3") {
      console.log(3);
    }
    else if (inputValue === "4") {
      console.log(4);
    }
    else if (inputValue === "5") {
      console.log(5);
    }
    else if (inputValue === "6") {
      console.log(6);
    }
    else if (inputValue === "7") {
      console.log(7);
    }
    else if (inputValue === "8") {
      console.log(8);
    }
    else if (inputValue === "9") {
      console.log(9);
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
  document.getElementById("text-box").innerHTML = "Dit input var: "+(document.getElementById('indput').value);
  if (convert == true){
    conversion(inputValue);
    console.log("true");
  }
  else {
    console.log("stop");
  }
}
