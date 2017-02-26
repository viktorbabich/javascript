
const maxMass = 1000;
var   form = document.forms.calculator;
var	 	 l = document.getElementById('lenght');
var 	d1 = document.getElementById('d1');
var 	d2 = document.getElementById('d2');
var result = document.getElementById('result');
var densityElem = form.elements.density;

l.onchange  = calculate;
d1.onchange = calculate;
d2.onchange = calculate;
densityElem.onchange = calculate;


 function getChar(event) {
  if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode) // IE
  }

  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which)
  }
  return null;
}

d1.onkeypress = function(e) {
  e = e || event;
  var chr = getChar(e);
  if (e.ctrlKey || e.altKey || chr == null) return; 
  if (chr < '0' || chr > '9') return false;
}

function calculate() {
	if ((+d1.value > +d2.value) && (+d2.value != false)) {
		result.innerHTML = "Неверный внутренний радиус";
		outerCircle.style.width = 0;	
	} else if 
	(+d1.value == false || +d2.value == false || +l.value == false ) {
		result.innerHTML = "Недостаточно данных";}
	else {
		result.innerHTML =
		Math.ceil((+(d2.value)/100 - +(d1.value)/100)*+(l.value)*densityElem.value/+maxMass);
		innerCircle.style.width = +(d1.value)/+(d2.value)*100+'%';
		innerCircle.style.height = innerCircle.style.width;
		outerCircle.style.width = 90 + "%";
		outerCircle.style.height = outerCircle.style.width;   
	}
};




