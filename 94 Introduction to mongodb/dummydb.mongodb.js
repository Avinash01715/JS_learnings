
use('avinashDataBase');

//adding some date to avinashDataBase
db.getCollection('players').insertMany( [
    {
      "name": "jonathon",
      "game": "pubg",
      "role": "rusher"
    },
    {
      "name": "alex",
      "game": "valorant",
      "role": "duelist"
    },
    {
      "name": "sarah",
      "game": "fortnite",
      "role": "builder"
    },
    {
      "name": "mike",
      "game": "csgo",
      "role": "awper"
    },
    {
      "name": "priya",
      "game": "pubg",
      "role": "sniper"
    },
    {
      "name": "david",
      "game": "leagueoflegends",
      "role": "jungler"
    },
    {
      "name": "emma",
      "game": "apexlegends",
      "role": "controller"
    },
    {
      "name": "rahul",
      "game": "pubg",
      "role": "support"
    }
  ]
);



// Print a message to the output window.
console.log("done inserting");

