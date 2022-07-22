import * as math from "./math.js";
import { coffeeBreak } from "./auxFunctions.js";
import { menu } from "./menu.js";
import * as questions from "./questions.js";

export const play = async () => {
  let tests = { x: 8, y: 12, coordination: "N", intensity: 23 };
  console.log(`
	Vamos testar a lógica aplicada na função makeMoves no arquivo math.js,
	onde está o core do jogo.

	A função deve mover corretamente da posição inicial para a final, dadas
	todas as movimentações intermediárias que compoem o caminho até chegar lá.

	Começando em (${tests.x}, ${tests.y}), movimentos iniciais [${tests.coordination}, ${tests.intensity}]
	`);
  await coffeeBreak(1000);
  let result;
  result = testMove({ x: 8, y: 35 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "O"), (tests.intensity = 7);
  result = testMove({ x: 1, y: 35 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "S"), (tests.intensity = 40);
  result = testMove({ x: 1, y: -5 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "L"), (tests.intensity = 33);
  result = testMove({ x: 34, y: -5 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "N"), (tests.intensity = 15);
  result = testMove({ x: 34, y: 10 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  console.log(`
	Posição final alcançada. Expectativa: (34, 10) Realidade: (${tests.x}, ${tests.y})
	`);
  tests = { x: -10, y: 0, coordination: "L", intensity: 14 };
  console.log(`
	Segunda bateria de testes. Começando em (${tests.x}, ${tests.y}), movimentos iniciais [${tests.coordination}, ${tests.intensity}]
	`);
  await coffeeBreak(1000);

  result = testMove({ x: 4, y: 0 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "N"), (tests.intensity = 27);
  result = testMove({ x: 4, y: 27 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "O"), (tests.intensity = 33);
  result = testMove({ x: -29, y: 27 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "S"), (tests.intensity = 20);
  result = testMove({ x: -29, y: 7 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  (tests.coordination = "L"), (tests.intensity = 15);
  result = testMove({ x: -14, y: 7 }, tests);
  if (!result) return;
  await coffeeBreak(500);

  console.log(`
	Posição final alcançada. Expectativa: (-14, 7) Realidade: (${tests.x}, ${tests.y})
	Testes concluídos.
	`);
  menu(questions.firstRun);
};

const testMove = (expected, tests) => {
  math.makeMoves(tests);
  if (tests.x === expected.x && tests.y === expected.y) {
    console.log(`
		Sucesso! Instrução de movimentos: [${tests.coordination}, ${tests.intensity}]
		Posição esperada: [${expected.x}, ${expected.y}] Posição alcançada: [${tests.x}, ${tests.y}]
		`);
    return true;
  } else {
    console.log(`
		Infelizmente o jogo contem bugs. Instrução de movimentos: [${tests.coordination}, ${tests.intensity}]
		Posição esperada: [${expected.x}, ${expected.y}] Posição alcançada: [${tests.x}, ${tests.y}]
		`);
    return false;
  }
};
