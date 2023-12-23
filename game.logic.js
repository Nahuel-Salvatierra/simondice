const $squares = document.querySelectorAll(".block");
const $container = document.querySelector(".container");

function movimientoMaquina() {
	const movement = randomSquare(1, 4);
	movementsMachine.push(movement);
	return movementsMachine;
}

function randomSquare(min, max) {
	const number = Math.floor(Math.random() * (max - min + 1) + min);
	const $randomSquare = document.querySelector(`#square-${number}`);
	return $randomSquare;
}

function setFunctionality() {
	$container.addEventListener("click", moveUser);
}

function unsetFuncionality() {
	$container.removeEventListener("click", moveUser);
}
