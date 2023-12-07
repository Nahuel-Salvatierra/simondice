const $startGame = document.querySelector("#start");
let turn = 0

$startGame.addEventListener("click", () => {
	startGame();
});

function startGame() {
	let ArraydeMovimientos = movimientoMaquina();
	// for (let index = 0; index < ArraydeMovimientos.length; index++) {
	// 	const element = ArraydeMovimientos[index];
	// 	turn++
	// }
	for (let i = 0; i < ArraydeMovimientos.length; i++) {
		const TIMER = i * 1000;
		mostrarArray(TIMER, ArraydeMovimientos[i]);
	}
	setFunctionality()
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
