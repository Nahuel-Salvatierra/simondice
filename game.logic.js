const $squares = document.querySelectorAll(".block");
const movementsMachine = [];
const movementsUser = [];

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

function moveUser(e) {
	e.target;
	show(e.target);
	movementsUser.push(e.target);
}

function setFunctionality() {
	$squares.forEach((square) => {
		square.addEventListener("click", moveUser);
	});
}

function unsetFuncionality() {
	$squares.forEach((square) => {
		square.removeEventListener()
	});
}
