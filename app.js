const content = {
  en: {
    eyebrow: "Instant Fun App",
    title: "Fun Spark",
    subtitle: "Pick a vibe and get entertainment in one click.",
    jokeTitle: "Joke Generator",
    newJoke: "New joke",
    triviaTitle: "Quick Trivia",
    newTrivia: "Surprise me",
    rpsTitle: "Rock · Paper · Scissors",
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors",
    rpsPrompt: "Make your move!",
    moodTitle: "Mood Booster",
    newMood: "Boost me",
    newActivity: "Quick activity",
    footer: "Made for instant fun—online or offline.",
    rpsResult: (player, cpu, result) =>
      `You chose ${player}. I chose ${cpu}. ${result}`,
    rpsResults: {
      win: "You win! 🔥",
      lose: "I win! 😄",
      draw: "It’s a draw! 🤝",
    },
    jokes: [
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "I told my computer I needed a break, and it said: 'No problem — I’ll go to sleep.'",
      "Why don’t oysters share their pearls? Because they’re shellfish.",
      "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    ],
    trivia: [
      "The shortest commercial flight in the world is under 2 minutes.",
      "Honey never spoils — edible honey was found in ancient tombs.",
      "Bananas are berries, but strawberries are not.",
      "Octopuses have three hearts and blue blood.",
    ],
    moods: [
      "You’re doing better than you think. Keep going! ✨",
      "Tiny progress is still progress. Celebrate it. 🎉",
      "Smile break: turn up your favorite song for one minute. 🎧",
      "You’ve got this — and snacks exist if you need backup. 🍪",
    ],
    activities: [
      "Stretch for 30 seconds and roll your shoulders.",
      "Text a friend a silly emoji.",
      "Look out the window and name three things you like.",
      "Try drawing a tiny doodle of your day.",
    ],
    languageLabel: "English",
    languageToggle: "Русский",
  },
  ru: {
    eyebrow: "Мгновенное развлечение",
    title: "Fun Spark",
    subtitle: "Выберите настроение и получите развлечения в один клик.",
    jokeTitle: "Генератор шуток",
    newJoke: "Новая шутка",
    triviaTitle: "Быстрый факт",
    newTrivia: "Удиви меня",
    rpsTitle: "Камень · Ножницы · Бумага",
    rock: "Камень",
    paper: "Бумага",
    scissors: "Ножницы",
    rpsPrompt: "Сделайте ход!",
    moodTitle: "Поднять настроение",
    newMood: "Поднять настроение",
    newActivity: "Быстрое занятие",
    footer: "Сделано для мгновенного веселья — онлайн или офлайн.",
    rpsResult: (player, cpu, result) =>
      `Вы выбрали ${player}. Я выбрал ${cpu}. ${result}`,
    rpsResults: {
      win: "Вы победили! 🔥",
      lose: "Я победил! 😄",
      draw: "Ничья! 🤝",
    },
    jokes: [
      "Почему пугало получило награду? Потому что оно было выдающимся в своём поле.",
      "Я сказал компьютеру, что мне нужен перерыв, и он ответил: «Без проблем — я усну».",
      "Почему устрицы не делятся жемчугом? Потому что они моллюски.",
      "Параллельные прямые так похожи. Жаль, что им не встретиться.",
    ],
    trivia: [
      "Самый короткий коммерческий рейс в мире длится меньше 2 минут.",
      "Мёд не портится — его находили съедобным в древних гробницах.",
      "Бананы — это ягоды, а клубника — нет.",
      "У осьминогов три сердца и голубая кровь.",
    ],
    moods: [
      "Вы делаете больше, чем думаете. Продолжайте! ✨",
      "Даже маленький прогресс — это прогресс. 🎉",
      "Улыбка-брейк: включите любимую песню на минуту. 🎧",
      "Всё получится — а печеньки всегда помогут. 🍪",
    ],
    activities: [
      "Потянитесь 30 секунд и покрутите плечами.",
      "Отправьте другу смешной эмодзи.",
      "Посмотрите в окно и назовите три приятные вещи.",
      "Нарисуйте маленький дудл о своём дне.",
    ],
    languageLabel: "Русский",
    languageToggle: "English",
  },
};

let currentLang = "en";

const jokeText = document.getElementById("joke-text");
const triviaText = document.getElementById("trivia-text");
const moodText = document.getElementById("mood-text");
const rpsResult = document.getElementById("rps-result");
const langToggle = document.getElementById("lang-toggle");

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

const updateCardContent = () => {
  const langContent = content[currentLang];
  jokeText.textContent = getRandomItem(langContent.jokes);
  triviaText.textContent = getRandomItem(langContent.trivia);
  moodText.textContent = getRandomItem(langContent.moods);
  rpsResult.textContent = langContent.rpsPrompt;
};

const updateTranslations = () => {
  const langContent = content[currentLang];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langContent[key]) {
      el.textContent = langContent[key];
    }
  });
  langToggle.textContent = langContent.languageToggle;
};

document.getElementById("new-joke").addEventListener("click", () => {
  jokeText.textContent = getRandomItem(content[currentLang].jokes);
});

document.getElementById("new-trivia").addEventListener("click", () => {
  triviaText.textContent = getRandomItem(content[currentLang].trivia);
});

document.getElementById("new-mood").addEventListener("click", () => {
  moodText.textContent = getRandomItem(content[currentLang].moods);
});

document.getElementById("new-activity").addEventListener("click", () => {
  moodText.textContent = getRandomItem(content[currentLang].activities);
});

document.querySelectorAll("[data-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const choices = ["rock", "paper", "scissors"];
    const cpuChoice = getRandomItem(choices);
    let outcome = "draw";

    if (
      (playerChoice === "rock" && cpuChoice === "scissors") ||
      (playerChoice === "paper" && cpuChoice === "rock") ||
      (playerChoice === "scissors" && cpuChoice === "paper")
    ) {
      outcome = "win";
    } else if (playerChoice !== cpuChoice) {
      outcome = "lose";
    }

    const langContent = content[currentLang];
    const playerLabel = langContent[playerChoice];
    const cpuLabel = langContent[cpuChoice];
    rpsResult.textContent = langContent.rpsResult(
      playerLabel,
      cpuLabel,
      langContent.rpsResults[outcome]
    );
  });
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ru" : "en";
  updateTranslations();
  updateCardContent();
});

updateTranslations();
updateCardContent();
