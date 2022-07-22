import chalkAnimation from "chalk-animation";

import { menu } from "./menu.js";
import * as questions from "./questions.js";
import { coffeeBreak } from "./auxFunctions.js";

export const initialize = async () => {
  const welcome = chalkAnimation.rainbow("Desafio Trinks - Coordenadas");
  welcome.start();
  await coffeeBreak(2000);
  welcome.stop();

  console.log(`
	Olá! Bem vindx a resolução do desafio que recebi para o processo seletivo
	da Trinks! Esse é um pequeno jogo em cli que, admitindo um plano cartesiano,
	recebe dois números inteiros com as posições iniciais
	(X e Y, respectivamente)
	e a partir desse uma letra representando direções cardeais
	(N, S, L, O, representando respectivamente
		Norte, Sul, Leste, Oeste)
	e um número natural, representando intensidade.
	
	Selecione a opção de começar ou, alternativamente,
	rodar os testes prontos para testar o app.
	
	`);

  menu(questions.firstRun);
};
