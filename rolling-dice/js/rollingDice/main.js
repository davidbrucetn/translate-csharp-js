function main() {
  // Put your code here
  console.log("Let's roll some dice, baby!");
  console.log("---------------------------");

  for (let i = 0; i < 10; i++) {
    const die1 = Roll();
    const die2 = Roll();

    let message = `${die1.Roll} + ${die2.Roll} == ${die1.Value + die2.Value}`;
    if (die1.Value == die2.Value) {
      message += " DOUBLES!";
    }

    console.log(message);
  }
}

const Roll = () => {
  const dieValue = Math.floor(Math.random() * 6) + 1;
  const die = {
    Roll: dieValue,
    Value: Die(dieValue),
  };
  return die;
};

const Die = (value) => {
  let dieString = "Unknown";

  console.log("Value:", value);
  switch (value) {
    case 1:
      dieString = "\u2680";
      break;
    case 2:
      dieString = "\u2681";
      break;
    case 3:
      dieString = "\u2682";
      break;
    case 4:
      dieString = "\u2683";
      break;
    case 5:
      dieString = "\u2684";
      break;
    case 6:
      dieString = "\u2685";
      break;
  }

  return dieString;
};

main();
