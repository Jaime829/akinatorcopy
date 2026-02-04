const questionText = document.getElementById("questionText");
const questionIndex = document.getElementById("questionIndex");
const questionTotal = document.getElementById("questionTotal");
const answersEl = document.getElementById("answers");
const logEl = document.getElementById("log");
const resultEl = document.getElementById("result");
const confidenceBar = document.getElementById("confidenceBar");
const confidenceValue = document.getElementById("confidenceValue");
const categoryChips = document.getElementById("categoryChips");
const guessPanel = document.getElementById("guessPanel");

const startBtn = document.getElementById("start");
const backBtn = document.getElementById("back");
const skipBtn = document.getElementById("skip");
const restartBtn = document.getElementById("restart");
const revealBtn = document.getElementById("reveal");

const characters = [
  {
    id: "messi",
    name: "Lionel Messi",
    tag: "Futbolista legendario",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 10, musica: 0, cine: 0, ciencia: 0, tecnologia: 3, liderazgo: 8, magia: 1, villano: 0, animado: 0 },
  },
  {
    id: "swift",
    name: "Taylor Swift",
    tag: "Cantautora global",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 1, musica: 10, cine: 4, ciencia: 1, tecnologia: 3, liderazgo: 7, magia: 1, villano: 0, animado: 0 },
  },
  {
    id: "einstein",
    name: "Albert Einstein",
    tag: "Científico histórico",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 0, musica: 2, cine: 0, ciencia: 10, tecnologia: 6, liderazgo: 6, magia: 0, villano: 0, animado: 0 },
  },
  {
    id: "curie",
    name: "Marie Curie",
    tag: "Pionera de la ciencia",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 0, musica: 1, cine: 0, ciencia: 10, tecnologia: 6, liderazgo: 7, magia: 0, villano: 0, animado: 0 },
  },
  {
    id: "rock",
    name: "Dwayne Johnson",
    tag: "Actor y atleta",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 7, musica: 1, cine: 8, ciencia: 1, tecnologia: 3, liderazgo: 7, magia: 0, villano: 1, animado: 0 },
  },
  {
    id: "beyonce",
    name: "Beyoncé",
    tag: "Icono musical",
    category: "celebridad",
    traits: { real: 10, ficcion: 0, animal: 0, deporte: 1, musica: 10, cine: 3, ciencia: 0, tecnologia: 2, liderazgo: 8, magia: 1, villano: 0, animado: 0 },
  },
  {
    id: "gandalf",
    name: "Gandalf",
    tag: "Mago legendario",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 0, musica: 1, cine: 6, ciencia: 2, tecnologia: 1, liderazgo: 9, magia: 10, villano: 0, animado: 0 },
  },
  {
    id: "harry",
    name: "Harry Potter",
    tag: "Héroe mágico",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 3, musica: 0, cine: 8, ciencia: 1, tecnologia: 1, liderazgo: 7, magia: 9, villano: 0, animado: 0 },
  },
  {
    id: "ironman",
    name: "Iron Man",
    tag: "Héroe tecnológico",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 2, musica: 1, cine: 10, ciencia: 8, tecnologia: 10, liderazgo: 8, magia: 1, villano: 0, animado: 0 },
  },
  {
    id: "vader",
    name: "Darth Vader",
    tag: "Villano icónico",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 2, musica: 0, cine: 10, ciencia: 6, tecnologia: 7, liderazgo: 9, magia: 6, villano: 10, animado: 0 },
  },
  {
    id: "hermione",
    name: "Hermione Granger",
    tag: "Estratega brillante",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 2, musica: 0, cine: 7, ciencia: 6, tecnologia: 2, liderazgo: 7, magia: 9, villano: 0, animado: 0 },
  },
  {
    id: "spiderman",
    name: "Spider-Man",
    tag: "Héroe urbano",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 0, deporte: 6, musica: 0, cine: 10, ciencia: 6, tecnologia: 5, liderazgo: 6, magia: 1, villano: 0, animado: 0 },
  },
  {
    id: "mickey",
    name: "Mickey Mouse",
    tag: "Ícono animado",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 6, deporte: 2, musica: 6, cine: 9, ciencia: 0, tecnologia: 1, liderazgo: 6, magia: 3, villano: 0, animado: 10 },
  },
  {
    id: "simba",
    name: "Simba",
    tag: "Rey león",
    category: "ficción",
    traits: { real: 0, ficcion: 10, animal: 10, deporte: 4, musica: 5, cine: 8, ciencia: 0, tecnologia: 0, liderazgo: 8, magia: 2, villano: 0, animado: 9 },
  },
  {
    id: "tiger",
    name: "Tigre de Bengala",
    tag: "Depredador elegante",
    category: "animal",
    traits: { real: 10, ficcion: 0, animal: 10, deporte: 4, musica: 0, cine: 0, ciencia: 2, tecnologia: 0, liderazgo: 6, magia: 0, villano: 0, animado: 0 },
  },
  {
    id: "dolphin",
    name: "Delfín nariz de botella",
    tag: "Animal inteligente",
    category: "animal",
    traits: { real: 10, ficcion: 0, animal: 10, deporte: 3, musica: 1, cine: 0, ciencia: 3, tecnologia: 0, liderazgo: 5, magia: 0, villano: 0, animado: 0 },
  },
  {
    id: "eagle",
    name: "Águila real",
    tag: "Ave majestuosa",
    category: "animal",
    traits: { real: 10, ficcion: 0, animal: 10, deporte: 4, musica: 0, cine: 0, ciencia: 2, tecnologia: 0, liderazgo: 4, magia: 0, villano: 0, animado: 0 },
  },
];

const questions = [
  {
    text: "¿Tu personaje existe en el mundo real?",
    traits: { real: 2, ficcion: -2 },
    options: [
      { label: "Sí, es real", weight: 2 },
      { label: "No, es ficticio", weight: -2 },
      { label: "Mezcla de ambos", weight: 0.5 },
    ],
  },
  {
    text: "¿Tu personaje es un animal?",
    traits: { animal: 2 },
    options: [
      { label: "Sí, es un animal", weight: 2 },
      { label: "Tiene rasgos animales", weight: 1 },
      { label: "No", weight: -2 },
    ],
  },
  {
    text: "¿Se relaciona con la música?",
    traits: { musica: 2 },
    options: [
      { label: "Sí, principalmente", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Se asocia con el cine o series?",
    traits: { cine: 2 },
    options: [
      { label: "Sí, aparece en pantalla", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Está ligado a la ciencia o tecnología?",
    traits: { ciencia: 1.5, tecnologia: 1.5 },
    options: [
      { label: "Sí, totalmente", weight: 2 },
      { label: "Un poco", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Es un héroe o figura positiva?",
    traits: { liderazgo: 1.5, villano: -1 },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Depende", weight: 0.5 },
      { label: "No, es más villano", weight: -1 },
    ],
  },
  {
    text: "¿Es reconocido por deportes?",
    traits: { deporte: 2 },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Tiene habilidades mágicas o sobrenaturales?",
    traits: { magia: 2 },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Un poco", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Es un personaje animado?",
    traits: { animado: 2, ficcion: 1 },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Algo", weight: 0.5 },
      { label: "No", weight: -1 },
    ],
  },
];

const state = {
  index: 0,
  answers: [],
  scores: {},
  category: "todos",
};

const normalize = (value, min, max) => (value - min) / (max - min);

const buildScores = () => {
  const scores = {};
  getCandidates().forEach((character) => {
    scores[character.id] = 0;
  });
  state.answers.forEach((answer) => {
    const { traits, weight } = answer;
    getCandidates().forEach((character) => {
      let delta = 0;
      Object.entries(traits).forEach(([trait, traitWeight]) => {
        delta += (character.traits[trait] || 0) * traitWeight * weight;
      });
      scores[character.id] += delta;
    });
  });
  return scores;
};

const getCandidates = () => {
  if (state.category === "todos") {
    return characters;
  }
  return characters.filter((character) => character.category === state.category);
};

const getTopMatches = () => {
  state.scores = buildScores();
  return getCandidates()
    .map((character) => ({
      ...character,
      score: state.scores[character.id],
    }))
    .sort((a, b) => b.score - a.score);
};

const confidence = () => {
  const matches = getTopMatches();
  if (matches.length < 2) return 0;
  const top = matches[0].score;
  const second = matches[1].score;
  const normalized = normalize(top - second, -40, 120);
  const progress = normalize(state.answers.length, 0, questions.length);
  return Math.max(0, Math.min(0.99, normalized * 0.75 + progress * 0.25));
};

const updateConfidence = () => {
  const value = confidence();
  const percent = Math.round(value * 100);
  confidenceBar.style.width = `${percent}%`;
  confidenceValue.textContent = `${percent}%`;
  revealBtn.disabled = percent < 70;
};

const renderLog = () => {
  logEl.innerHTML = "";
  if (state.answers.length === 0) {
    logEl.innerHTML = '<div class="log__item">Tus respuestas aparecerán aquí.</div>';
    return;
  }
  state.answers.slice(-4).forEach((answer) => {
    const item = document.createElement("div");
    item.className = "log__item";
    item.textContent = `“${answer.text}” → ${answer.option}`;
    logEl.appendChild(item);
  });
};

const renderResult = () => {
  if (state.answers.length < 3) {
    resultEl.innerHTML =
      "<p>Tu personaje aparecerá aquí cuando tengamos suficiente información.</p>";
    return;
  }

  const matches = getTopMatches();
  const [top, second, third] = matches;
  resultEl.innerHTML = `
    <div class="result__title">${top.name}</div>
    <p class="result__subtitle">${top.tag} · ${Math.round(confidence() * 100)}% de confianza</p>
    <div class="result__grid">
      <div class="result__chip"><span>Alternativa 1</span><strong>${second.name}</strong></div>
      <div class="result__chip"><span>Alternativa 2</span><strong>${third.name}</strong></div>
    </div>
  `;
};

const renderGuessPanel = () => {
  const percent = Math.round(confidence() * 100);
  guessPanel.querySelector("p").textContent =
    percent >= 70
      ? "Confianza óptima alcanzada. Pulsa para adivinar."
      : "Activa el modo “Adivinar” cuando el nivel de confianza supere 70%.";
};

const renderQuestion = () => {
  const current = questions[state.index];
  if (!current) {
    questionText.textContent = "Listo. Pulsa Reiniciar para otro personaje.";
    answersEl.innerHTML = "";
    return;
  }

  questionText.textContent = current.text;
  questionIndex.textContent = state.index + 1;
  questionTotal.textContent = questions.length;

  answersEl.innerHTML = "";
  current.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.innerHTML = `<span>${option.label}</span><small>Precisión +</small>`;
    button.addEventListener("click", () => handleAnswer(option));
    answersEl.appendChild(button);
  });

  backBtn.disabled = state.index === 0;
};

const handleAnswer = (option) => {
  const current = questions[state.index];
  state.answers.push({
    text: current.text,
    option: option.label,
    traits: current.traits,
    weight: option.weight,
  });
  state.index += 1;
  updateConfidence();
  renderLog();
  renderResult();
  renderGuessPanel();
  renderQuestion();
};

const handleBack = () => {
  if (state.index === 0) return;
  state.index -= 1;
  state.answers.pop();
  updateConfidence();
  renderLog();
  renderResult();
  renderGuessPanel();
  renderQuestion();
};

const handleSkip = () => {
  const current = questions[state.index];
  state.answers.push({
    text: current.text,
    option: "No lo sé",
    traits: current.traits,
    weight: 0,
  });
  state.index += 1;
  updateConfidence();
  renderLog();
  renderResult();
  renderGuessPanel();
  renderQuestion();
};

const revealGuess = () => {
  const matches = getTopMatches();
  if (matches.length === 0) return;
  const [top] = matches;
  resultEl.innerHTML = `
    <div class="result__title">${top.name}</div>
    <p class="result__subtitle">${top.tag} · ${Math.round(confidence() * 100)}% de confianza</p>
    <div class="result__grid">
      <div class="result__chip"><span>Tipo</span><strong>${top.category}</strong></div>
      <div class="result__chip"><span>Perfil</span><strong>Alta coincidencia</strong></div>
    </div>
  `;
};

const renderCategories = () => {
  const categories = [
    { id: "todos", label: "Todos" },
    { id: "celebridad", label: "Famosos" },
    { id: "ficción", label: "Ficción" },
    { id: "animal", label: "Animales" },
  ];
  categoryChips.innerHTML = "";
  categories.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip ${state.category === category.id ? "chip--active" : ""}`;
    chip.textContent = category.label;
    chip.addEventListener("click", () => {
      state.category = category.id;
      reset();
      renderCategories();
    });
    categoryChips.appendChild(chip);
  });
};

const reset = () => {
  state.index = 0;
  state.answers = [];
  updateConfidence();
  renderLog();
  renderResult();
  renderGuessPanel();
  renderQuestion();
};

startBtn.addEventListener("click", reset);
restartBtn.addEventListener("click", reset);
backBtn.addEventListener("click", handleBack);
skipBtn.addEventListener("click", handleSkip);
revealBtn.addEventListener("click", revealGuess);

renderCategories();
reset();
