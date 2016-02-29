"use strict";
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?)\s*(e[-+]?\d+(?:\.\d+)?)?\s*([fc]|far|(fa)|(ce)|(cel)|(celsius)|(fahrenheit))\s*$/i;

  var m = temp.match(regexp);

if (m) {
    var num = m[1];

    if(m[2]){
      console.log("soy exponencial");
      
        var f = m[2];
        var type = m[3];
        num= num.toString()+f.toString();
        num = parseFloat(num);

        if (type == 'c' || type == 'C') {
          result = (num * 9/5)+32;
          result = result.toFixed(2)+" Farenheit"
        }
        else {
          result = (num - 32)*5/9;
          result = result.toFixed(2)+" Celsius"
        }
        converted.innerHTML = result;

    }else{
      console.log("no soy exponencial");

    num = parseFloat(num);

    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(2)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(2)+" Celsius"
    }
    converted.innerHTML = result;
  }
  }else {
    converted.innerHTML = "¡ERROR! Pruebe algo como '-4.2C' o '37f'";
  }

}//cierre funcion
