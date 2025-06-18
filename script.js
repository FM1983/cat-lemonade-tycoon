const game = {
  day: 1,
  money: 20.0,
  pricePerCup: 1.0,
  lemons: 10,
  sugar: 10,
  ice: 20,
  cups: 20
};

const elems = {
  day: document.getElementById("day"),
  money: document.getElementById("money"),
  priceDisplay: document.getElementById("priceDisplay"),
  priceInput: document.getElementById("priceInput"),
  cups: document.getElementById("cups"),
  lemons: document.getElementById("lemons"),
  sugar: document.getElementById("sugar"),
  ice: document.getElementById("ice"),
  message: document.getElementById("message"),
  buySupplies: document.getElementById("buySupplies"),
  startDay: document.getElementById("startDay")
};

function updateUI() {
  elems.day.textContent = game.day;
  elems.money.textContent = game.money.toFixed(2);
  elems.priceDisplay.textContent = game.pricePerCup.toFixed(2);
  elems.cups.textContent = game.cups;
  elems.lemons.textContent = game.lemons;
  elems.sugar.textContent = game.sugar;
  elems.ice.textContent = game.ice;
}

elems.priceInput.addEventListener("input", (e) => {
  game.pricePerCup = parseFloat(e.target.value);
  updateUI();
});

elems.buySupplies.addEventListener("click", () => {
  if (game.money >= 5) {
    game.money -= 5;
    game.cups += 20;
    game.lemons += 10;
    game.sugar += 10;
    game.ice += 20;
    elems.message.textContent = "Supplies restocked! 😺";
  } else {
    elems.message.textContent = "Not enough money! 🙀";
  }
  updateUI();
});

elems.startDay.addEventListener("click", () => {
  const customers = Math.floor(Math.random() * 91) + 10; // 10‑100 customers
  const cupsSold = Math.min(customers, game.cups);
  const revenue = cupsSold * game.pricePerCup;
  game.money += revenue;
  game.cups -= cupsSold;
  elems.message.textContent = `Your cat customers bought ${cupsSold} cups and paid $${revenue.toFixed(2)}! 🐾`;
  game.day += 1;
  updateUI();
});

updateUI();
