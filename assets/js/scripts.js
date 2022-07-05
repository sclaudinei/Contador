var currentNumber = 0;
var counter = document.getElementById('currentNumber');

function increment() {
	currentNumber = currentNumber + 1;
	counter.innerHTML = currentNumber;
    if (currentNumber === 0){
        document.getElementById('currentNumber').style.color="grey"
    } else if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color="blue"
    } else {
        document.getElementById('currentNumber').style.color="red"
    }
}

function decrement() {
	currentNumber = currentNumber - 1;
	counter.innerHTML = currentNumber;
    if (currentNumber === 0){
        document.getElementById('currentNumber').style.color="grey"
    } else if (currentNumber > 0) {
        document.getElementById('currentNumber').style.color="darkblue"
    } else {
        document.getElementById('currentNumber').style.color="red"
    }
}