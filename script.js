const person = document.getElementById("person");
const ufo = document.getElementById("ufo");
const beam = document.getElementById("beam");
const message = document.getElementById("message");
const title = document.getElementById("title");
const scene = document.getElementById("scene");

const hideBtn = document.getElementById("hideBtn");
const lightsBtn = document.getElementById("lightsBtn");
const runBtn = document.getElementById("runBtn");
const waveBtn = document.getElementById("waveBtn");
const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListerner("click", function () {
  location.reload();
});

let gameOver = false;

setTimeout(function () {
  message.textContent = "The UFO has stopped above you. Choose quickly!";
  beam.classList.add("active");
  person.classList.add("panic");
  ufo.classList.add("scanning");
}, 4200);

hideBtn.addEventListener("click", function () {
  if (gameOver) return;

  message.textContent =
    "You dive behind the building. The aliens lose sight of you!";
  person.classList.remove("panic");
  person.classList.add("hidden-person");
  beam.classList.remove("active");

  winGame("You survived by hiding!");
});

lightsBtn.addEventListener("click", function () {
  if (gameOver) return;

  document.querySelectorAll(".window").forEach(function (window) {
    window.style.backgroundColor = "#111";
  });

  message.textContent = "The building goes dark. The UFO scans the area...";
  beam.classList.remove("active");
  person.classList.remove("panic");

  winGame("The alien moved on. You survived!");
});

runBtn.addEventListener("click", function () {
  if (gameOver) return;

  message.textContent = "RUN!";
  person.classList.remove("panic");
  person.classList.add("running");

  setTimeout(function () {
    beam.classList.remove("active");
    winGame("You escaped the beam just in time!");
  }, 1400);
});

waveBtn.addEventListener("click", function () {
  if (gameOver) return;

  message.textContent = "You waved at the UFO. It definitely noticed you.";
  person.classList.remove("panic");
  abductPerson();
});

function abductPerson() {
  beam.classList.add("active");
  person.classList.add("abducted");

  setTimeout(function () {
    loseGame("You have been abducted. Probably should not have waved.");
  }, 3000);
}

function winGame(finalMessage) {
  gameOver = true;
  ufo.classList.remove("scanning");
  message.textContent = finalMessage;
  title.textContent = "YOU SURVIVED!";
  disableButtons();

  setTimeout(function () {
    ufo.classList.add("fly-away");
  }, 500);
}

function loseGame(finalMessage) {
  gameOver = true;
  ufo.classList.remove("scanning");
  message.textContent = finalMessage;
  title.textContent = "THEY GOT YOU!";
  scene.classList.add("screen-shake");
  disableButtons();
}

function disableButtons() {
  hideBtn.disabled = true;
  lightsBtn.disabled = true;
  runBtn.disabled = true;
  waveBtn.disabled = true;
}
