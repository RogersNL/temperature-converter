var converter = function(celsius) {
  return celsius*(9/5)+32;
};

var celsius = parseFloat(prompt("Enter temperature in Celsius to convert to Fahrenheit:"));

alert("The temperature in Fahrenheit is " + converter(celsius) + " degrees.");
