function main() {
  // Put your code here
  const names = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China",
  ];

  console.log("All Place Names");

  //print all names in array
  for (let name of names) {
    console.log(name);
  }

  //blank line
  console.log("\n");

  const theNames = names.filter((name) => {
    return name.startsWith("The");
  });

  console.log("'The' Place Names");
  theNames.map((name) => console.log(name));
}

main();
