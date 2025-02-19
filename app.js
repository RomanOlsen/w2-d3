let balance = 25 // They started off with their life savings
let balanceLabel = document.getElementById('balance')
let team1label = document.getElementById('team1')
let team2label = document.getElementById('team2')
let team1Skill = 0 // Take these out
let team2Skill = 0 //

// 20 total players
const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 2, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 1, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 1, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]

function drawTeams() {
  let label1 = ''
  let label2 = ''

  for (let index = 0; index < players.length; index++) {
    const player = players[index];
    if (player.teamNumber == 1) {
      label1 += player.emoji
      team1label.innerText = label1
    }
    else {
      label2 += player.emoji
      team2label.innerText = label2

    }
  }

}

//
function updateBalanceAfterTeam1Bet(betAmount) {


  if (team1Skill > team2Skill) {
    balance = balance + betAmount
  }
  else {
    balance = balance - betAmount
    console.log(balance)
  }
  balanceLabel.innerText = balance.toString()
}
function updateBalanceAfterTeam2Bet(betAmount) {
  if (team2Skill > team1Skill) {
    balance = balance + betAmount
  }
  else {
    balance = balance - betAmount
    console.log(balance)
  }
  balanceLabel.innerText = balance.toString()
}
//





// Need to randomize Teams, add the skills of each player into team1Skill and team2Skill, then run drawTeams()


function randomizeTeams() {
  for (let index = 0; index < players.length; index++) {
    const player = players[index];

    player.teamNumber = Math.round(Math.random() + 1)

  }
  drawTeams()
}

function calculateTeamSkill(teamNumber) {
  let skillTotal = 0
  for (let index = 0; index < players.length; index++) {
    const player = players[index];
    if (player.teamNumber == teamNumber) {
      skillTotal += player.skill
    }
  }
  return skillTotal
}

// console.log(teams)/


