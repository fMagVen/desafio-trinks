import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

import * as game from "./game.js";
import * as tests from "./tests.js";
import * as auxFunctions from "./auxFunctions.js";

export const menu = async (questions) => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "mode",
      message: "Selecione o modo: ",
      choices: ["Começar", "Rodar testes"],
    },
  ]);
  const spinner = createSpinner().start({ text: "Carregando..." });
  await auxFunctions.coffeeBreak(1000);
  spinner.success({ text: "." });
  if (answer.mode === "Começar") game.play(questions);
  else tests.play();
};
