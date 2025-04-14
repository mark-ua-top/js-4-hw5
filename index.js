import { info, error, success } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";

const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById("key");
const newGameBtn = document.getElementById("newGame");

keyDisplay.textContent = keys[currentKeyIndex];

document.addEventListener("keydown", (event) => {
  const pressed = event.key.toLowerCase();
  const expected = keys[currentKeyIndex];

  if (pressed === expected) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      success({ text: "Гру завершено! Ви натиснули всі клавіші правильно." });
      keyDisplay.textContent = "Гру завершено!";
    } else {
      keyDisplay.textContent = keys[currentKeyIndex];
      success({ text: "Правильно! Йдемо далі." });
    }
  } else {
    error({
      text: `Помилка! Очікується: ${expected}, а ви натиснули: ${pressed}`,
    });
  }
});

document.addEventListener("keypress", (event) => event.preventDefault());

newGameBtn.addEventListener("click", () => {
  currentKeyIndex = 0;
  keyDisplay.textContent = keys[currentKeyIndex];
  info({ text: "Нова гра розпочата! Натисніть правильну клавішу." });
});
