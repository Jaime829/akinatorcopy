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
const customGuessInput = document.getElementById("customGuess");
const submitGuessBtn = document.getElementById("submitGuess");

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
    id: "real",
    text: "¿Tu personaje existe en el mundo real?",
    traits: { real: 2, ficcion: -2 },
    categories: ["todos", "celebridad", "ficción", "animal"],
    options: [
      { label: "Sí, es real", weight: 2 },
      { label: "No, es ficticio", weight: -2 },
      { label: "Mezcla de ambos", weight: 0.5 },
    ],
  },
  {
    id: "animal",
    text: "¿Tu personaje es un animal?",
    traits: { animal: 2 },
    categories: ["todos", "animal", "ficción", "celebridad"],
    options: [
      { label: "Sí, es un animal", weight: 2 },
      { label: "Tiene rasgos animales", weight: 1 },
      { label: "No", weight: -2 },
    ],
  },
  {
    id: "animado",
    text: "¿Es un personaje animado?",
    traits: { animado: 2, ficcion: 1 },
    categories: ["todos", "ficción"],
    requires: { fiction: true },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Algo", weight: 0.5 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "musica",
    text: "¿Se relaciona con la música?",
    traits: { musica: 2 },
    categories: ["todos", "celebridad", "ficción"],
    options: [
      { label: "Sí, principalmente", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "deporte",
    text: "¿Es reconocido por deportes?",
    traits: { deporte: 2 },
    categories: ["todos", "celebridad"],
    options: [
      { label: "Sí", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "cine",
    text: "¿Se asocia con el cine o series?",
    traits: { cine: 2 },
    categories: ["todos", "celebridad", "ficción"],
    options: [
      { label: "Sí, aparece en pantalla", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "ciencia",
    text: "¿Está ligado a la ciencia o tecnología?",
    traits: { ciencia: 1.5, tecnologia: 1.5 },
    categories: ["todos", "celebridad", "ficción"],
    options: [
      { label: "Sí, totalmente", weight: 2 },
      { label: "Un poco", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "magia",
    text: "¿Tiene habilidades mágicas o sobrenaturales?",
    traits: { magia: 2 },
    categories: ["todos", "ficción"],
    requires: { fiction: true },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Un poco", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "villano",
    text: "¿Tiende a ser un villano o antagonista?",
    traits: { villano: 2, liderazgo: -0.5 },
    categories: ["todos", "ficción"],
    requires: { fiction: true },
    options: [
      { label: "Sí", weight: 2 },
      { label: "A veces", weight: 0.5 },
      { label: "No", weight: -1 },
    ],
  },
  {
    id: "liderazgo",
    text: "¿Es un líder o figura positiva?",
    traits: { liderazgo: 1.5, villano: -1 },
    categories: ["todos", "celebridad", "ficción", "animal"],
    options: [
      { label: "Sí", weight: 2 },
      { label: "Depende", weight: 0.5 },
      { label: "No", weight: -1 },
    ],
  },
];

const state = {
  index: 0,
  answers: [],
  scores: {},
  category: "todos",
  askedIds: new Set(),
  currentQuestion: null,
  signals: {
    real: null,
    animal: null,
    fiction: null,
    animado: null,
  },
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

const updateSignals = (questionId, weight) => {
  if (questionId === "real") {
    if (weight >= 1) {
      state.signals.real = true;
      state.signals.fiction = false;
    } else if (weight <= -1) {
      state.signals.real = false;
      state.signals.fiction = true;
    }
  }
  if (questionId === "animal") {
    if (weight >= 1) {
      state.signals.animal = true;
    } else if (weight <= -1) {
      state.signals.animal = false;
    }
  }
  if (questionId === "animado") {
    if (weight >= 1) {
      state.signals.animado = true;
    } else if (weight <= -1) {
      state.signals.animado = false;
    }
  }
};

const matchesCategory = (question) =>
  question.categories.includes("todos") || question.categories.includes(state.category);

const meetsRequirements = (question) => {
  if (!question.requires) return true;
  return Object.entries(question.requires).every(([key, value]) => state.signals[key] === value);
};

const getAvailableQuestions = () =>
  questions.filter(
    (question) =>
      !state.askedIds.has(question.id) && matchesCategory(question) && meetsRequirements(question)
  );

const getTraitVariance = (candidates) => {
  const variance = {};
  if (candidates.length === 0) return variance;
  const traits = Object.keys(candidates[0].traits);
  traits.forEach((trait) => {
    const values = candidates.map((candidate) => candidate.traits[trait] || 0);
    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    const v =
      values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
    variance[trait] = v;
  });
  return variance;
};

const scoreQuestion = (question, variance) =>
  Object.entries(question.traits).reduce(
    (sum, [trait, weight]) => sum + Math.abs(weight) * (variance[trait] || 0),
    0
  );

const selectNextQuestion = () => {
  const available = getAvailableQuestions();
  if (available.length === 0) return null;
  const variance = getTraitVariance(getCandidates());
  return available
    .map((question) => ({ question, score: scoreQuestion(question, variance) }))
    .sort((a, b) => b.score - a.score)[0].question;
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
  const alternatives = [second, third].filter(Boolean);
  const alternativesMarkup = alternatives.length
    ? `<div class="result__grid">
      ${alternatives
        .map(
          (candidate, index) =>
            `<div class="result__chip"><span>Alternativa ${index + 1}</span><strong>${candidate.name}</strong></div>`
        )
        .join("")}
    </div>`
    : "";
  resultEl.innerHTML = `
    <div class="result__title">${top.name}</div>
    <p class="result__subtitle">${top.tag} · ${Math.round(confidence() * 100)}% de confianza</p>
    ${alternativesMarkup}
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
  if (!state.currentQuestion) {
    state.currentQuestion = selectNextQuestion();
  }
  const current = state.currentQuestion;
  if (!current) {
    questionText.textContent = "Listo. Pulsa Reiniciar para otro personaje.";
    answersEl.innerHTML = "";
    questionIndex.textContent = state.answers.length;
    questionTotal.textContent = state.answers.length;
    return;
  }

  questionText.textContent = current.text;
  questionIndex.textContent = state.answers.length + 1;
  questionTotal.textContent = state.answers.length + getAvailableQuestions().length;

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

const rebuildSignalsAndAsked = () => {
  state.askedIds = new Set();
  state.signals = {
    real: null,
    animal: null,
    fiction: null,
    animado: null,
  };
  state.answers.forEach((answer) => {
    if (answer.id) {
      state.askedIds.add(answer.id);
      updateSignals(answer.id, answer.weight);
    }
  });
};

const handleAnswer = (option) => {
  const current = state.currentQuestion;
  if (!current) return;
  state.answers.push({
    id: current.id,
    text: current.text,
    option: option.label,
    traits: current.traits,
    weight: option.weight,
  });
  state.askedIds.add(current.id);
  updateSignals(current.id, option.weight);
  state.currentQuestion = null;
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
  rebuildSignalsAndAsked();
  state.currentQuestion = null;
  updateConfidence();
  renderLog();
  renderResult();
  renderGuessPanel();
  renderQuestion();
};

const handleSkip = () => {
  const current = state.currentQuestion;
  if (!current) return;
  state.answers.push({
    id: current.id,
    text: current.text,
    option: "No lo sé",
    traits: current.traits,
    weight: 0,
  });
  state.askedIds.add(current.id);
  state.currentQuestion = null;
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

const submitCustomGuess = () => {
  const value = customGuessInput.value.trim();
  if (!value) return;
  resultEl.innerHTML = `
    <div class="result__title">${value}</div>
    <p class="result__subtitle">Registrado como nuevo objetivo. Ajustaremos el modelo con tu aporte.</p>
    <div class="result__grid">
      <div class="result__chip"><span>Estado</span><strong>En revisión</strong></div>
      <div class="result__chip"><span>Confianza</span><strong>En aprendizaje</strong></div>
    </div>
  `;
  const item = document.createElement("div");
  item.className = "log__item";
  item.textContent = `“Nombre enviado” → ${value}`;
  logEl.prepend(item);
  customGuessInput.value = "";
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
  state.askedIds = new Set();
  state.currentQuestion = null;
  state.signals = {
    real: null,
    animal: null,
    fiction: null,
    animado: null,
  };
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
submitGuessBtn.addEventListener("click", submitCustomGuess);
customGuessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitCustomGuess();
  }
});

renderCategories();
reset();
