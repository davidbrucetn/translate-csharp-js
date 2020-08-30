using System;
using System.Collections.Generic;
using System.Linq;

namespace dinnerParty
{
    class Program
    {
        static void Main(string[] args)
        {

            List<Guest> Guests = GetGuests();
            Dictionary<string, List<Guest>> tables = new Dictionary<string, List<Guest>>()
            {
                {
                "Table 1",
                new List<Guest>()
                },
                {
                "Table 2",
                new List<Guest>()
                }
            };

            foreach (Guest guest in Guests)
            {
                List<string> table1Occupations = Guests.Select(guest => guest.occupation).ToList();
                if (table1Occupations.Contains(guest.occupation))
                {
                    tables["Table 1"].Add(guest);
                }
                else
                {
                    tables["Table 2"].Add(guest);
                }
            }

            foreach (KeyValuePair<string, List<Guest>> tableObj in tables)
            {
                Console.WriteLine(tableObj.Key);
                foreach (Guest guest in tableObj.Value)
                {
                    Console.WriteLine($"{guest.name} {guest.occupation} {guest.bio}");
                }
            }
        }

        static List<Guest> GetGuests()
        {

            List<Guest> internalGuests = new List<Guest>
            {
                new Guest()
                {
                    name = "Marilyn Monroe",
                        occupation = "entertainer",
                        bio = "(1926 - 1962) American actress, singer, model"
                },
                new Guest()
                {
                    name = "Abraham Lincoln",
                        occupation = "politician",
                        bio = "(1809 - 1865) US President during American civil war"
                },
                new Guest()
                {
                    name = "Martin Luther King",
                        occupation = "activist",
                        bio = "(1929 - 1968)  American civil rights campaigner"
                },
                new Guest()
                {
                    name = "Rosa Parks",
                        occupation = "activist",
                        bio = "(1913 - 2005)  American civil rights activist"
                },
                new Guest()
                {
                    name = "Peter Sellers",
                        occupation = "entertainer",
                        bio = "(1925 - 1980) British actor and comedian"
                },
                new Guest()
                {
                    name = "Alan Turing",
                        occupation = "computer scientist",
                        bio = "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"
                },
                new Guest()
                {
                    name = "Admiral Grace Hopper (1906–1992) – developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds",
                        occupation = "computer scientist",
                        bio = "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"
                },
                new Guest()
                {
                    name = "Indira Gandhi",
                        occupation = "politician",
                        bio = "(1917 - 1984) Prime Minister of India 1966 - 1977",
                }
            };

            return internalGuests;
        }
    }

}