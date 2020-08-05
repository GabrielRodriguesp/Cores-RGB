window.addEventListener('load', start);

var valorRed = document.querySelector('#Red');
var valorGren = document.querySelector('#Gren');
var valorBlue = document.querySelector('#Blue');

function start() {
  valorRed.addEventListener('input', valor);
  valorGren.addEventListener('input', valor);
  valorBlue.addEventListener('input', valor);
  AlterarValor();
}

function valor() {
  var NovaCor;
  NovaCor = CalcularRGB();

  var cubo = document.querySelector('#UgCanvas');
  cubo.style = 'background-color: ' + NovaCor + ';';

  var corpo = document.querySelector('#corpo');
  corpo.style = 'background-color: ' + NovaCor + ';';

  var novoTexto = document.formTexto.novoTexto.value;
  document.getElementById('texto').innerHTML = NovaCor;

  //document.getElementById('valor').innerHTML = ' ' + NovaCor;

  //var valor = document.querySelector('#valor');
  //valor.style = 'textContent: ' + NovaCor + '';
  //valor.textContent
  AlterarValor();
}

function decimalToHexString(number) {
  if (number < 16) {
    return '0' + number.toString(16).toUpperCase();
  }
  return number.toString(16).toUpperCase();
}

function CalcularRGB() {
  var conRed = decimalToHexString(valorRed.valueAsNumber);
  var conGren = decimalToHexString(valorGren.valueAsNumber);
  var conBlue = decimalToHexString(valorBlue.valueAsNumber);
  return '#' + conRed + conGren + conBlue;
}

function AlterarValor() {
  var redBox = document.querySelector('#RedBox');
  redBox.value = valorRed.valueAsNumber + '';

  var grenBox = document.querySelector('#GrenBox');
  grenBox.value = valorGren.valueAsNumber + '';

  var bluBox = document.querySelector('#BlueBox');
  bluBox.value = valorBlue.valueAsNumber + '';
}
