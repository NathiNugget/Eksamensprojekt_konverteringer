console.log("Hello there!")
for (x =0; x < 10 ; x++){
  console.log(x);

}

function yeet(){
  conversion();
  document.getElementById("text-box").innerHTML = (document.getElementById('indput').value);
}

function conversion(){
  var inputValue = document.getElementById("indput").value;
  if (inputValue === "a"){
    console.log(10);
  }
  else{
    console.log(11);
  }
}
