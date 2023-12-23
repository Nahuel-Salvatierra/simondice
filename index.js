const $startGame = document.querySelector("#start");
let movementsUser = [];
let movementsMachine = [];
let turn = 0;

const invervalGame = setInterval(checkTurn, 1000);

$startGame.addEventListener("click", () => {
	$startGame.disabled = true;
	startGame();
});

function startGame() {
	boardMoves();
}

function checkTurn() {
	console.log("quede en memoria");
	for (let index = 0; index < movementsUser.length; index++) {
		if (movementsUser[index] !== movementsMachine[index]) {
			onIncorrectInput();
		} else if (movementsUser.length === movementsMachine.length) {
			onTurnEnd()
		}
	}
}

function onTurnEnd() {
	movementsUser = [];
	console.log('mueve la maquina')
	setInterval(boardMoves(), 2000);
}

function onIncorrectInput() {
	console.log("incorrecto");
	onLose();
	unsetFuncionality();
	clearInterval(invervalGame);
}

function onLose() {
	movementsUser = [];
	movementsMachine = [];
	const $lose = document.querySelector("#lose");
	$lose.style.display = "block";
}

function boardMoves() {
	movementsMachine = movimientoMaquina();
	for (let i = 0; i < movementsMachine.length; i++) {
		const TIMER = i * 1000;
		mostrarArray(TIMER, movementsMachine[i]);

		if (TIMER === (movementsMachine.length - 1) * 1000) {
			setFunctionality();
		}
	}
}

function mostrarArray(timer, nodo) {
	setTimeout(() => {
		show(nodo);
	}, timer);
}

function show(nodeElement) {
	nodeElement.style.opacity = 1;
	setTimeout(() => {
		nodeElement.style.opacity = 0.5;
	}, 500);
}

function moveUser(e) {
	show(e.target);
	movementsUser.push(e.target);
}
