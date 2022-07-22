import * as auxFunctions from "./auxFunctions.js";

export const firstRun = [
  {
    name: "x",
    message: "Insira o valor para x: ",
    default: 1,
    validate: auxFunctions.checkWholeNumber,
    filter: auxFunctions.numberify,
  },
  {
    name: "y",
    message: "Insira o valor para y: ",
    default: 1,
    validate: auxFunctions.checkWholeNumber,
    filter: auxFunctions.numberify,
  },
  {
    name: "coordination",
    message: "Insira a coordenada: ",
    default: "N",
    validate: auxFunctions.checkCoordinate,
    filter: auxFunctions.capitalize,
  },
  {
    name: "intensity",
    message: "Insira a intensidade: ",
    default: 10,
    validate: auxFunctions.checkNaturalNumber,
    filter: auxFunctions.numberify,
  },
];

export const otherRuns = [firstRun[2], firstRun[3]];
