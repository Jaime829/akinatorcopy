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
    id: "luna-void",
    name: "Luna Void",
    tag: "Hechicera cósmica",
    category: "ficción",
    traits: { magia: 9, liderazgo: 6, ciencia: 4, ficcion: 8, real: 2, misterio: 9 },
  },
  {
    id: "neo-axis",
    name: "Neo Axis",
    tag: "Héroe tecnológico",
    category: "ficción",
    traits: { magia: 2, liderazgo: 7, ciencia: 9, ficcion: 9, real: 3, misterio: 6 },
  },
  {
    id: "valeria-royal",
    name: "Valeria Royal",
    tag: "Líder histórica",
    category: "celebridad",
    traits: { magia: 1, liderazgo: 9, ciencia: 5, ficcion: 2, real: 8, misterio: 4 },
  },
  {
    id: "atlas-mind",
    name: "Atlas Mind",
    tag: "Estratega científico",
    category: "celebridad",
    traits: { magia: 1, liderazgo: 7, ciencia: 10, ficcion: 6, real: 6, misterio: 5 },
  },
  {
    id: "maya-echo",
    name: "Maya Echo",
    tag: "Icono cultural",
    category: "celebridad",
    traits: { magia: 3, liderazgo: 6, ciencia: 4, ficcion: 5, real: 9, misterio: 7 },
  },
  {
    id: "sombra-lince",
    name: "Sombra Lince",
    tag: "Animal sigiloso",
    category: "animal",
    traits: { magia: 1, liderazgo: 3, ciencia: 2, ficcion: 1, real: 10, misterio: 6 },
  },
  {
    id: "aurora-delfin",
    name: "Aurora Delfín",
    tag: "Animal inteligente",
    category: "animal",
    traits: { magia: 1, liderazgo: 5, ciencia: 4, ficcion: 1, real: 10, misterio: 5 },
  },
];

const questions = [
  {
    text: "¿Tu personaje es real o histórico?",
    traits: { real: 2, ficcion: -2 },
    options: [
      { label: "Sí, es real", weight: 2 },
      { label: "No, es ficticio", weight: -2 },
      { label: "Mezcla de ambos", weight: 0.5 },
    ],
  },
  {
    text: "¿Se asocia con tecnología o ciencia avanzada?",
    traits: { ciencia: 2 },
    options: [
      { label: "Totalmente", weight: 2 },
      { label: "A veces", weight: 1 },
      { label: "Casi nunca", weight: -1 },
    ],
  },
  {
    text: "¿Tiene liderazgo reconocido?",
    traits: { liderazgo: 2 },
    options: [
      { label: "Sí, es líder", weight: 2 },
      { label: "Liderazgo parcial", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Está rodeado de misterio o aura mística?",
    traits: { misterio: 2, magia: 1 },
    options: [
      { label: "Muy misterioso", weight: 2 },
      { label: "Algo", weight: 1 },
      { label: "Nada", weight: -1 },
    ],
  },
  {
    text: "¿Usa o controla poderes sobrenaturales?",
    traits: { magia: 2 },
    options: [
      { label: "Sí", weight: 2 },
      { label: "Solo en momentos clave", weight: 1 },
      { label: "No", weight: -2 },
    ],
  },
  {
    text: "¿Su historia es futurista?",
    traits: { ficcion: 1.5, ciencia: 1 },
    options: [
      { label: "Sí, futurista", weight: 2 },
      { label: "Tiene elementos modernos", weight: 0.5 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Es una figura mediática o cultural?",
    traits: { real: 1, liderazgo: 1 },
    options: [
      { label: "Sí, ícono", weight: 2 },
      { label: "En un nicho", weight: 1 },
      { label: "No", weight: -1 },
    ],
  },
  {
    text: "¿Su motivación principal es proteger a otros?",
    traits: { liderazgo: 1, misterio: 0.5 },
    options: [
      { label: "Definitivamente", weight: 2 },
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
  const normalized = normalize(top - second, -50, 80);
  return Math.max(0, Math.min(0.99, normalized));
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
