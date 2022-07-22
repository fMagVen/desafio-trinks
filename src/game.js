import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

import { otherRuns } from "./questions.js";
import * as math from "./math.js";
import * as auxFunctions from "./auxFunctions.js";

let answers;
let firstTime = true;

export const play = async (questions) => {
  if (firstTime) {
    console.log(`
	Começando o jogo das posições! :D

	Insira um número representando a posição inicial X e outro a posição inicial Y


	Caso não receba algum número que representa posição inicial,
	tanto para X quanto para Y, a padrão será de 1 para ambos.
	Por favor, entre somente números inteiros ;)
	
	Caso não receba nenhuma letra que representa direção, a padrão será N
	Por favor, entre somente N, S, L ou O  ;)

	Caso não receba nenhum número que representa intensidade, o padrão será 10
	Por favor, entre somente números naturais ;) (inteiros positivos)
	`);
    firstTime = false;
  }

  let currentAnswers = await inquirer.prompt(questions);
  answers = { ...answers, ...currentAnswers };

  math.makeMoves(answers);

  const spinner = createSpinner().start({ text: "Calculando..." });
  await auxFunctions.coffeeBreak(1000);
  spinner.success({ text: "." });

  console.log(`
		 	Movimento concluído!
			Sua posição é agora: (${answers.x}, ${answers.y})
		`);

  const cont = await inquirer.prompt([
    {
      type: "list",
      name: "decision",
      message: "Deseja fazer outro movimento?",
      choices: ["Sim", "Não"],
    },
  ]);

  if (cont.decision === "Sim") play(otherRuns);
  else console.log("Obrigado por jogar!");
};
