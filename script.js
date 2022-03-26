const icons = new Array();
icons[0] = new Image();
icons[0] = `./img/777.jpeg`;
icons[1] = new Image();
icons[1] = `./img/bar.jpeg`;
icons[2] = new Image();
icons[2] = `./img/bell.jpeg`;
icons[3] = new Image();
icons[3] = `./img/cherry.jpeg`;
icons[4] = new Image();
icons[4] = `./img/diamond.jpeg`;
icons[5] = new Image();
icons[5] = `./img/heart.jpeg`;
icons[6] = new Image();
icons[6] = `./img/horseshoe.jpeg`;
icons[7] = new Image();
icons[7] = `./img/lemon.jpeg`;
icons[8] = new Image();
icons[8] = `./img/watermelon.jpeg`;

function randomSlotIcon(icons) {
  return icons[Math.floor(Math.random() * icons.length)];
}

let userCredit = 1000;
let creditDisplay = document.getElementById("user-credit-display");
creditDisplay.innerText = userCredit;

function renderCredit() {
  creditDisplay.innerText = userCredit;
}

let userBet = 1;
let BetDisplay = document.getElementById("user-bet-display");
BetDisplay.innerText = userBet;

function pushToSpin() {
  if (userCredit < userBet) {
    alert("Not enough credit!");
    return;
  }
  userCredit = userCredit - userBet;
  renderCredit();
  spinTheMachine();
}

function spinTheMachine() {
  const icon1 = document.getElementById("icon1");
  const icon2 = document.getElementById("icon2");
  const icon3 = document.getElementById("icon3");
  // const icon4 = document.getElementById("icon4");

  let sloter1 = randomSlotIcon(icons);
  let sloter2 = randomSlotIcon(icons);
  let sloter3 = randomSlotIcon(icons);
  // let sloter4 = randomSlotIcon(icons);

  icon1.src = `${sloter1}`;
  icon2.src = `${sloter2}`;
  icon3.src = `${sloter3}`;
  // icon4.src = `${sloter4}`;
  if (sloter1 === sloter2 && sloter1 === sloter3) {
    winner();
    return;
  } else {
    document.getElementById("winnermassage").className =
      "main-slot-winner pt-5";
  }
}

function renderHTML() {
  document.getElementById("winnermassage").className = "main-slot-winner-good";
}

function winner() {
  renderHTML();
  winnerPrize();
  renderCredit();
}

function winnerPrize() {
  if (`${sloter1}` == `./img/777.jpeg`) {
    userCredit = userCredit + userBet * 100;
  } else if (`${sloter1}` == `./img/bar.jpeg`) {
    userCredit = userCredit + userBet * 50;
  } else if (`${sloter1}` == `./img/bell.jpeg`) {
    userCredit = userCredit + userBet * 25;
  } else if (`${sloter1}` == `./img/cherry.jpeg`) {
    userCredit = userCredit + userBet * 15;
  } else if (`${sloter1}` == `./img/diamond.jpeg`) {
    userCredit = userCredit + userBet * 9;
  } else if (`${sloter1}` == `./img/heart.jpeg`) {
    userCredit = userCredit + userBet * 7;
  } else if (`${sloter1}` == `./img/horseshoe.jpeg`) {
    userCredit = userCredit + userBet * 5;
  } else if (`${sloter1}` == `./img/lemon.jpeg`) {
    userCredit = userCredit + userBet * 4;
  } else if (`${sloter1}` == `./img/watermelon.jpeg`) {
    userCredit = userCredit + userBet * 2;
  }
  renderCredit();
}

function masterKey() {
  let pss = prompt("Enter Master Key");
  if (pss === "1234") {
    icon1.src = `./img/777.jpeg`;
    icon2.src = `./img/777.jpeg`;
    icon3.src = `./img/777.jpeg`;
    // icon4.src = `./img/777.jpeg`;
  }
  winner();
}
