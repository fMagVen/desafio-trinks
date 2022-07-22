export async function coffeeBreak(ms = 2000) {
  return new Promise((r) => setTimeout(r, ms));
}

export function checkWholeNumber(input) {
  if (input - Math.round(input) != 0)
    return "A posição dessa coordenada inicial deve ser um número inteiro!";
  else return true;
}

export function checkCoordinate(input) {
  const char = input.toUpperCase();
  const re = /[NSLO]/;
  if (!re.test(char) || char.length > 1)
    return "Insira apenas as letras permitidas: N, S, L ou O";
  else return true;
}

export function capitalize(input) {
  return input.toUpperCase();
}

export function checkNaturalNumber(input) {
  if (input - Math.round(input) != 0 || input < 0)
    return "A intensidade deve ser um número natural! (inteiro positivo)";
  else return true;
}

export function numberify(input) {
  let num = parseInt(input);
  if (!isNaN(num)) return num;
  else return input;
}
