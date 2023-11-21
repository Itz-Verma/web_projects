function myFunction() {
  var n = parseInt(document.getElementById("asciiCode").value);
  var output = document.getElementById("asciiCharacter");
  output.classList.remove("invisible");
  var a;
  if (n > 255) {
    a = "ASCII Code is out of bound";
    output.innerHTML = a;
  } else if (n >= 0 && n <= 255) {
    a = "ASCII Character = ";
    if( n != 32)
      output.innerHTML = a + String.fromCharCode(n);
    else{
      output.innerHTML = a + "space";

    }
  }else {
    a = "Invalid Input!";
    output.innerHTML = a;
  }
}

