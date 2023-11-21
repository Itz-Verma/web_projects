var t1, t2, u1, u2;
t1 = document.getElementById("temp1");
t2 = document.getElementById("temp2");
u1 = document.getElementById("unit1");
u2 = document.getElementById("unit2");
t1.addEventListener("input", tempChange);
t2.addEventListener("input", tempChange);
u1.addEventListener("input", tempChange);
u2.addEventListener("input", tempChange);
function tempChange() {
  switch (u1.value) {
    case "Celsius":
      CelsiusTO();
      break;
    case "Fahrenheit":
      FahrenheitTo();
      break;
    case "Kelvin":
      KelvinTo();
      break;

    case "Rankine":
      RankineTo();
      break;

    case "Réaumur":
      ReaumurTo();
      break;

    default:
      break;
  }
}
u1.addEventListener("click", function () {
  switch (u1.value) {
    case "Celsius":
  }
});
function CelsiusTO() {
  switch (u2.value) {
    case "Celsius":
      t2.value = t1.value;
      break;
    case "Kelvin":
      t2.value = parseFloat(t1.value) + 273;
      break;
    case "Fahrenheit":
      t2.value = parseFloat(t1.value) * 1.8 + 32;
      break;
    case "Rankine":
      t2.value = (parseFloat(t1.value) + 273) * 1.8;
      break;
    case "Réaumur":
      t2.value = parseFloat(t1.value) * 0.8;
      break;
    default:
      break;
  }
}
function FahrenheitTo() {
  switch (u2.value) {
    case "Celsius":
      t2.value = (parseFloat(t1.value) - 32) * (5 / 9);
      break;
    case "Kelvin":
      t2.value = (parseFloat(t1.value) - 32) * (5 / 9) + 273;
      break;
    case "Fahrenheit":
      t2.value = parseFloat(t1.value);
      break;
    case "Rankine":
      t2.value = parseFloat(t1.value) + 459.67;
      break;
    case "Réaumur":
      t2.value = (parseFloat(t1.value) - 32) * (4 / 9);
      break;
    default:
      break;
  }
}
function KelvinTo() {
  switch (u2.value) {
    case "Celsius":
      t2.value = parseFloat(t1.value) - 273;
      break;
    case "Kelvin":
      t2.value = t.value;
      break;
    case "Fahrenheit":
      t2.value = (parseFloat(t1.value) - 273) * 1.8 + 32;
      break;
    case "Rankine":
      t2.value = parseFloat(t1.value) * 1.8;
      break;
    case "Réaumur":
      t2.value = (parseFloat(t1.value) - 273)(4 / 9);
      break;
    default:
      break;
  }
}
function RankineTo() {
  switch (u2.value) {
    case "Celsius":
      t2.value = parseFloat(t1.value) / 1.8 - 273;
      break;
    case "Kelvin":
      t2.value = parseFloat(t1.value) / 1.8;
      break;
    case "Fahrenheit":
      t2.value = parseFloat(t1.value) - 459.67;
      break;
    case "Rankine":
      t2.value = t1.value;
      break;
    case "Réaumur":
      t2.value = (parseFloat(t1.value) - 32 - 459.67) / 2.25;
      break;
    default:
      break;
  }
}
function ReaumurTo() {
  switch (u2.value) {
    case "Celsius":
      t2.value = parseFloat(t1.value) / 0.8;
      break;
    case "Kelvin":
      t2.value = parseFloat(t1.value) * 2.25 + 273;
      break;
    case "Fahrenheit":
      t2.value = parseFloat(t1.value) * 2.25 + 32;
      break;
    case "Rankine":
      t2.value = parseFloat(t1.value) * (4 / 9) - (32 + 459.67);
      break;
    case "Réaumur":
      t2.value = t1.value;
      break;
    default:
      break;
  }
}
