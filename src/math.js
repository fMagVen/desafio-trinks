export const makeMoves = (answers) => {
  switch (answers.coordination) {
    case "N":
      answers.y += answers.intensity;
      break;
    case "S":
      answers.y -= answers.intensity;
      break;
    case "L":
      answers.x += answers.intensity;
      break;
    case "O":
      answers.x -= answers.intensity;
      break;
  }
};
