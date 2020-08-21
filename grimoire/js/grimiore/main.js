const DisplaySpellBook = (book) => {
  console.log(book.Title);
  for (const aSpell of book.Spells) {
    console.log(aSpell.Name);
  }
};

const MakeEvilSpellBook = (allSpells) => {
  const evilBook = {
    Title: "Evil Book",
    Spells: GetAllSpells().filter((spell) => spell.IsEvil === true),
  };
  return evilBook;
};

const MakeGoodSpellBook = (allSpells) => {
  const goodBook = {
    Title: "Good Book",
    Spells: GetAllSpells().filter((spell) => spell.IsEvil === false),
  };
  return goodBook;
};

const GetAllSpells = () => {
  const allSpells = [
    {
      Name: "Turn enemy into a newt",
      IsEvil: true,
      EnergyRequired: 5.1,
    },
    {
      Name: "Conjure some gold for a local charity",
      IsEvil: false,
      EnergyReqired: 2.99,
    },
    {
      Name: "Give a deaf person the ability to heal",
      IsEvil: false,
      EnergyReqired: 12.2,
    },
    {
      Name: "Make yourself emperor of the universe",
      IsEvil: true,
      EnergyReqired: 100.0,
    },
    {
      Name: "Convince your relatives your political views are correct",
      IsEvil: false,
      EnergyReqired: 2921.5,
    },
  ];
  return allSpells;
};

function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------");

  const allSpells = GetAllSpells();
  const goodBook = MakeGoodSpellBook(allSpells);
  const evilBook = MakeEvilSpellBook(allSpells);

  DisplaySpellBook(goodBook);
  console.log("\n");
  DisplaySpellBook(evilBook);
}

main();
