const sections = {
  prep: {
    title: "Vorbereitung — Grundfragen",
    intro: "Fragen aus der Vorbereitung: Sie prüfen, ob die zentralen Kursbegriffe verstanden wurden.",
    exercises: [
      {
        tag: "Vorbereitung 1",
        title: "Nonsense-Satz",
        type: "Schriftliche Antwort",
        question: "Warum lassen sich in dem Nonsense-Satz „Das mesopril fluppst den krenin“ die unbekannten Wörter bestimmten Wortarten zuordnen? Welche Kriterien spielen dabei eine Rolle?",
        mode: "textarea",
        answer: "Man verwendet vor allem Distribution und Morphologie. „mesopril“ und „krenin“ stehen nach einem Artikel und können deshalb als Substantive analysiert werden. „fluppst“ kann als Verb erkannt werden, unter anderem wegen der Endung -st. Distribution bedeutet: Wo steht das Wort im Satz? Morphologie bedeutet: Welche Flexionsmerkmale lassen sich erkennen?",
        keywords: ["Distribution", "Morphologie", "Artikel", "Substantiv", "Verb", "-st"]
      },
      {
        tag: "Vorbereitung 2",
        title: "Morphologische Eigenschaften",
        type: "Tabelle",
        question: "Gib die morphologischen Eigenschaften von Präpositionen, Artikeln und Verben an.",
        mode: "table-input",
        rows: [
          ["Präpositionen", "nicht flektierbar"],
          ["Artikel", "flektierbar und deklinierbar"],
          ["Verben", "flektierbar und konjugierbar"]
        ]
      },
      {
        tag: "Vorbereitung 6",
        title: "Analytische Verbalform",
        type: "Schriftliche Antwort",
        question: "Was bedeutet es, wenn eine Verbalform analytisch gebildet wird? Welche Tempusformen werden im Deutschen analytisch gebildet?",
        mode: "textarea",
        answer: "Eine analytische Verbalform wird mit einem Hilfsverb gebildet, zum Beispiel mit haben, sein, werden, kriegen oder bekommen. Im Deutschen werden Perfekt, Plusquamperfekt, Futur I und Futur II analytisch gebildet.",
        keywords: ["Hilfsverb", "haben", "sein", "werden", "Perfekt", "Plusquamperfekt", "Futur I", "Futur II"]
      }
    ]
  },

  substantive: {
    title: "Substantive — Subklassen",
    intro: "Trainiere Appellativa, Stoffsubstantive, Abstrakta und Eigennamen.",
    exercises: [
      {
        tag: "Aufgabe 1",
        title: "Beispiele finden",
        type: "Produktion",
        question: "Schreibe mindestens 3 neue Beispiele für jede Subklasse der Substantive.",
        mode: "free-grid",
        labels: ["Appellativa", "Stoffsubstantive", "Abstrakta", "Eigennamen"],
        sample: {
          "Appellativa": "Hund, Tisch, Stadt",
          "Stoffsubstantive": "Wasser, Milch, Gold",
          "Abstrakta": "Liebe, Angst, Freiheit",
          "Eigennamen": "Anna, Lausanne, Deutschland"
        }
      },
      {
        tag: "Vorbereitung 3b",
        title: "Substantive klassifizieren",
        type: "Auswahl",
        question: "Ordne jedes Substantiv der richtigen Subklasse zu.",
        mode: "select-list",
        options: ["Appellativa", "Stoffsubstantive", "Abstrakta", "Eigennamen"],
        rows: [
          ["Marlon", "Eigennamen"],
          ["Freude", "Abstrakta"],
          ["Teigwaren", "Stoffsubstantive"],
          ["Elefant", "Appellativa"],
          ["Haus", "Appellativa"],
          ["Sand", "Stoffsubstantive"],
          ["Eva", "Eigennamen"],
          ["Eifersucht", "Abstrakta"],
          ["Kartoffel", "Appellativa"],
          ["Mehl", "Stoffsubstantive"]
        ]
      },
      {
        tag: "Vorbereitung 3c",
        title: "Unterschiede zwischen Subklassen",
        type: "Schriftliche Antwort",
        question: "Erkläre die Unterschiede zwischen diesen Subklassen der Substantive.",
        mode: "textarea",
        answer: "Appellativa werden normalerweise mit Artikel verwendet. Stoffsubstantive, Abstrakta und Eigennamen können oft ohne Artikel verwendet werden. Es gibt auch Unterschiede bei der Pluralbildung: Manche Substantive erscheinen nur im Singular, zum Beispiel Reis, Mehl, Sand, Hass, Wut, Eifersucht. Andere erscheinen nur im Plural, zum Beispiel Geschwister oder Alpen.",
        keywords: ["Artikel", "ohne Artikel", "Singular", "Plural", "Appellativa", "Stoffsubstantive", "Abstrakta", "Eigennamen"]
      }
    ]
  },

  adjectifs: {
    title: "Adjektive — attributiv, prädikativ, adverbial",
    intro: "Kurze Regel: attributiv mit Substantiv; prädikativ mit Kopulaverb; adverbial mit Vollverb.",
    exercises: [
      {
        tag: "Vorbereitung 4b",
        title: "Verwendungsweise des Adjektivs bestimmen",
        type: "Auswahl",
        question: "Wähle die richtige Verwendungsweise des unterstrichenen Adjektivs.",
        mode: "select-list",
        options: ["attributiv", "prädikativ", "adverbial"],
        rows: [
          ["freundliche — Der freundliche Junge hat mich gestern gegrüsst.", "attributiv"],
          ["schwer — Diese Aufgabe ist schwer.", "prädikativ"],
          ["kleine — Das kleine Haus gefällt mir gut.", "attributiv"],
          ["gut — Das kleine Haus gefällt mir gut.", "adverbial"],
          ["schlechtes — Sie hat ein schlechtes Gewissen.", "attributiv"],
          ["neue — Die neue Brille passt hervorragend zu ihm.", "attributiv"],
          ["hervorragend — Die neue Brille passt hervorragend zu ihm.", "adverbial"]
        ]
      },
      {
        tag: "Aufgabe 2a",
        title: "Weitere Beispiele aus dem Kurs",
        type: "Auswahl",
        question: "Bestimme die Verwendungsweise der Adjektive in den Sätzen.",
        mode: "select-list",
        options: ["attributiv", "prädikativ", "adverbial"],
        rows: [
          ["nette — Der nette Herr hat ihn gestern freundlich begrüsst.", "attributiv"],
          ["freundlich — Der nette Herr hat ihn gestern freundlich begrüsst.", "adverbial"],
          ["lieber — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "attributiv"],
          ["letzten — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "attributiv"],
          ["neues — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "attributiv"],
          ["fantastisch — Eure Idee ist fantastisch.", "prädikativ"],
          ["indische — Dieses indische Gericht schmeckt ausgezeichnet.", "attributiv"],
          ["ausgezeichnet — Dieses indische Gericht schmeckt ausgezeichnet.", "adverbial"],
          ["gute — Niemand hatte eine gute Idee.", "attributiv"],
          ["neues — Unser neues Auto war teuer.", "attributiv"],
          ["teuer — Unser neues Auto war teuer.", "prädikativ"]
        ]
      }
    ]
  },

  pronoms: {
    title: "Pronomen und Artikel",
    intro: "Trainiere Personalpronomen, Possessivpronomen, Demonstrativpronomen, Relativpronomen, Fragepronomen, Negationspronomen und Reflexivpronomen.",
    exercises: [
      {
        tag: "Vorbereitung 5",
        title: "Subklassen der Pronomen",
        type: "Auswahl",
        question: "Wähle die richtige Art des Pronomens.",
        mode: "select-list",
        options: ["Personalpronomen", "Relativpronomen", "Possessivpronomen", "Fragepronomen", "Negationspronomen", "Reflexivpronomen", "Demonstrativpronomen"],
        rows: [
          ["euch — Der Direktor will euch sehen.", "Personalpronomen"],
          ["die — Es ist die Sonne, die mir fehlt.", "Relativpronomen"],
          ["Ihr — Ihr Haus gefällt mir.", "Possessivpronomen"],
          ["welches — Ich frage mich, welches Buch ich mit in die Ferien nehmen soll.", "Fragepronomen"],
          ["nichts — Es gibt nichts zu sehen.", "Negationspronomen"],
          ["sich — Er wäscht sich häufig.", "Reflexivpronomen"]
        ]
      },
      {
        tag: "Aufgabe 2b",
        title: "Artikel und Pronomen in Sätzen",
        type: "Auswahl",
        question: "Bestimme, ob das Element ein Artikel oder ein Pronomen ist, und gib die Subklasse an.",
        mode: "select-list",
        options: ["definiter Artikel", "indefiniter Artikel", "Personalpronomen", "Possessivpronomen", "Demonstrativpronomen", "Negationspronomen"],
        rows: [
          ["Der — Der nette Herr hat ihn gestern freundlich begrüsst.", "definiter Artikel"],
          ["ihn — Der nette Herr hat ihn gestern freundlich begrüsst.", "Personalpronomen"],
          ["Mein — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "Possessivpronomen"],
          ["mir — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "Personalpronomen"],
          ["ein — Mein lieber Onkel hat mir letzten Sonntag ein neues Fahrrad geschenkt.", "indefiniter Artikel"],
          ["Eure — Eure Idee ist fantastisch.", "Possessivpronomen"],
          ["Dieses — Dieses indische Gericht schmeckt ausgezeichnet.", "Demonstrativpronomen"],
          ["Niemand — Niemand hatte eine gute Idee.", "Negationspronomen"],
          ["eine — Niemand hatte eine gute Idee.", "indefiniter Artikel"],
          ["Unser — Unser neues Auto war teuer.", "Possessivpronomen"]
        ]
      }
    ]
  },

  verbes: {
    title: "Verben — Systematik",
    intro: "Verben sind konjugierbar. Der Kurs unterscheidet Vollverben, Hilfsverben, Modalverben, Halbmodalverben und Kopulaverben.",
    exercises: [
      {
        tag: "Vorbereitung 6",
        title: "Hilfsverben",
        type: "Mehrfachauswahl",
        question: "Kreuze die im Kurs genannten Hilfsverben an.",
        mode: "multi",
        options: ["haben", "sein", "werden", "kriegen", "bekommen", "essen", "schwimmen", "dürfen"],
        answers: ["haben", "sein", "werden", "kriegen", "bekommen"]
      },
      {
        tag: "Synthese Verben",
        title: "Verben klassifizieren",
        type: "Auswahl",
        question: "Ordne jedes Verb der richtigen Gruppe zu.",
        mode: "select-list",
        options: ["Vollverb", "Hilfsverb", "Modalverb", "Halbmodalverb", "Kopulaverb"],
        rows: [
          ["einkaufen", "Vollverb"],
          ["haben", "Hilfsverb"],
          ["müssen", "Modalverb"],
          ["scheinen", "Halbmodalverb"],
          ["bleiben", "Kopulaverb"],
          ["bekommen", "Hilfsverb"],
          ["dürfen", "Modalverb"],
          ["drohen", "Halbmodalverb"],
          ["werden", "Kopulaverb"]
        ]
      }
    ]
  },

  passif: {
    title: "Passivformen",
    intro: "Die drei Formen: Zustandspassiv, Vorgangspassiv, Rezipientenpassiv.",
    exercises: [
      {
        tag: "Vorbereitung 7",
        title: "Passiv bilden",
        type: "Schriftliche Antwort",
        question: "Nenne die drei Passivformen im Deutschen und gib ihre Bildung an.",
        mode: "textarea",
        answer: "Zustandspassiv: sein + Partizip II. Vorgangspassiv: werden + Partizip II. Rezipientenpassiv: kriegen/bekommen + Partizip II.",
        keywords: ["Zustandspassiv", "sein", "Partizip II", "Vorgangspassiv", "werden", "Rezipientenpassiv", "kriegen", "bekommen"]
      },
      {
        tag: "Aufgabe 3",
        title: "Passivform bestimmen",
        type: "Auswahl",
        question: "Wähle die Passivform des jeweiligen Satzes.",
        mode: "select-list",
        options: ["Zustandspassiv", "Vorgangspassiv", "Rezipientenpassiv"],
        rows: [
          ["Er ist gewählt.", "Zustandspassiv"],
          ["Der Junge bekommt den Ball geschenkt.", "Rezipientenpassiv"],
          ["Seine Rede wurde gelobt.", "Vorgangspassiv"],
          ["Er war eigentlich geimpft.", "Zustandspassiv"],
          ["Sie bekam jeden Morgen frische Taschentücher herausgelegt.", "Rezipientenpassiv"],
          ["Die Kinder wurden mit viel Applaus begrüsst.", "Vorgangspassiv"]
        ]
      }
    ]
  },

  modalverben: {
    title: "Modalverben",
    intro: "Subjektbezogen: Beziehung zwischen dem Subjekt und dem Sachverhalt. Sprecherbezogen: Einschätzung der Wahrscheinlichkeit durch die sprechende Person.",
    exercises: [
      {
        tag: "Vorbereitung 8",
        title: "Zwei Verwendungsweisen erklären",
        type: "Schriftliche Antwort",
        question: "Erkläre den Unterschied zwischen subjektbezogener Modalität und sprecherbezogener Modalität.",
        mode: "textarea",
        answer: "Die subjektbezogene Modalität drückt eine Beziehung zwischen dem Subjekt und dem Sachverhalt aus: Verpflichtung, Notwendigkeit, Erlaubnis, Fähigkeit, Wille oder Möglichkeit. Die sprecherbezogene Modalität drückt eine Einschätzung der Wahrscheinlichkeit durch den Sprecher oder die Sprecherin aus.",
        keywords: ["Subjekt", "Verpflichtung", "Notwendigkeit", "Erlaubnis", "Fähigkeit", "Wille", "Möglichkeit", "Wahrscheinlichkeit", "Sprecher"]
      },
      {
        tag: "Aufgabe 4",
        title: "Subjektbezogen oder sprecherbezogen?",
        type: "Auswahl",
        question: "Wähle die Verwendungsweise des Modalverbs.",
        mode: "select-list",
        options: ["subjektbezogen", "sprecherbezogen"],
        rows: [
          ["Thomas kann Tennis spielen.", "subjektbezogen"],
          ["Lisa darf ins Kino gehen.", "subjektbezogen"],
          ["Sabine muss noch im Büro sein.", "sprecherbezogen"],
          ["Markus könnte sich etwas verspäten.", "sprecherbezogen"],
          ["Edgar will in Wien studieren.", "subjektbezogen"],
          ["Die Prüfung dürfte für Nina ein Kinderspiel sein.", "sprecherbezogen"]
        ]
      }
    ]
  },

  halbmodal: {
    title: "Halbmodalverben",
    intro: "Die genannten Halbmodalverben sind: scheinen, versprechen, drohen. Sie werden mit einem Infinitiv mit zu konstruiert.",
    exercises: [
      {
        tag: "Vorbereitung 9",
        title: "Halbmodalverben erkennen",
        type: "Mehrfachauswahl",
        question: "Kreuze die Halbmodalverben des Kurses an.",
        mode: "multi",
        options: ["scheinen", "versprechen", "drohen", "müssen", "dürfen", "sein", "haben"],
        answers: ["scheinen", "versprechen", "drohen"]
      },
      {
        tag: "Aufgabe 5",
        title: "Mit einem Halbmodalverb ergänzen",
        type: "Lückentext",
        question: "Ergänze die Sätze mit scheinen, versprechen oder drohen. Mehrere Formulierungen können möglich sein; hier trainierst du mit einer sinnvollen Kurslösung.",
        mode: "fill-list",
        rows: [
          ["Er ___ mich nicht zu verstehen.", "scheint"],
          ["Der Luftballon ___ zu platzen.", "droht"],
          ["Die Ferien ___ erholsam zu werden.", "versprechen"],
          ["Der Konflikt ___ zu eskalieren.", "droht"],
          ["Das Buch ___ spannend zu sein.", "scheint"]
        ]
      }
    ]
  },

  kopula: {
    title: "Kopulaverben",
    intro: "Kopulaverben verbinden das Subjekt mit einem Prädikativ: sein, bleiben, werden.",
    exercises: [
      {
        tag: "Vorbereitung 10a",
        title: "Kopulaverben",
        type: "Mehrfachauswahl",
        question: "Kreuze die Kopulaverben des Deutschen nach dem Kurs an.",
        mode: "multi",
        options: ["sein", "bleiben", "werden", "haben", "bekommen", "scheinen", "dürfen"],
        answers: ["sein", "bleiben", "werden"]
      },
      {
        tag: "Vorbereitung 10b",
        title: "Prädikativ",
        type: "Auswahl",
        question: "Bestimme die Prädikative in den Sätzen.",
        mode: "select-list",
        options: ["sportlich", "gesund", "ein guter Tennisspieler", "Hans", "ist", "bleibt", "wird"],
        rows: [
          ["Hans ist sportlich.", "sportlich"],
          ["Hans bleibt gesund.", "gesund"],
          ["Hans wird ein guter Tennisspieler.", "ein guter Tennisspieler"]
        ]
      }
    ]
  },

  revision: {
    title: "Schlussrevision",
    intro: "Gemischte Übungen, um zu prüfen, ob du zwischen den Themen wechseln kannst.",
    exercises: [
      {
        tag: "Revision 1",
        title: "Richtig oder falsch",
        type: "Auswahl",
        question: "Wähle richtig oder falsch.",
        mode: "select-list",
        options: ["richtig", "falsch"],
        rows: [
          ["Präpositionen sind flektierbar.", "falsch"],
          ["Verben sind konjugierbar.", "richtig"],
          ["Substantive haben ein festes Genus.", "richtig"],
          ["Halbmodalverben werden mit einem Infinitiv ohne zu konstruiert.", "falsch"],
          ["Das Vorgangspassiv wird mit werden + Partizip II gebildet.", "richtig"],
          ["Kopulaverben erscheinen mit einem Prädikativ.", "richtig"]
        ]
      },
      {
        tag: "Revision 2",
        title: "Mini-Synthese",
        type: "Schriftliche Antwort",
        question: "Erkläre in 8 bis 10 Zeilen, was man über flektierbare/unflektierbare Wortarten und Verben unbedingt behalten muss.",
        mode: "textarea",
        answer: "Wortarten können nach der Flektierbarkeit klassifiziert werden. Flektierbare Wörter können deklinierbar oder konjugierbar sein. Substantive, Adjektive, Artikel und Pronomen sind deklinierbar; Verben sind konjugierbar. Nicht flektierbare Wörter sind zum Beispiel Präpositionen, Konjunktionen, Adverbien, Partikeln und Interjektionen. Bei den Verben unterscheidet man Vollverben, Hilfsverben, Modalverben, Halbmodalverben und Kopulaverben. Hilfsverben bilden analytische Tempus- oder Passivformen. Modalverben drücken Modalität aus und stehen mit Infinitiv ohne zu. Halbmodalverben stehen mit zu. Kopulaverben wie sein, bleiben und werden verbinden das Subjekt mit einem Prädikativ.",
        keywords: ["flektierbar", "nicht flektierbar", "deklinierbar", "konjugierbar", "Substantive", "Verben", "Hilfsverben", "Modalverben", "Halbmodalverben", "Kopulaverben", "zu", "Prädikativ"]
      }
    ]
  }
};

let totalCorrect = 0;
let totalChecked = 0;
const checkedExercises = new Map();

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,;:!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function initNavigation() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      document.querySelectorAll(".page-section").forEach(section => section.classList.remove("visible"));
      document.getElementById(btn.dataset.section).classList.add("visible");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function renderSections() {
  Object.entries(sections).forEach(([id, data]) => {
    const container = document.getElementById(id);
    const intro = document.createElement("article");
    intro.className = "panel";
    intro.innerHTML = `<h2>${data.title}</h2><p>${data.intro}</p>`;
    container.appendChild(intro);

    data.exercises.forEach((exercise, index) => {
      container.appendChild(createExercise(exercise, `${id}-${index}`));
    });
  });
}

function createExercise(exercise, exerciseId) {
  const template = document.getElementById("exercise-template");
  const node = template.content.cloneNode(true);
  const card = node.querySelector(".exercise-card");
  card.dataset.exerciseId = exerciseId;
  card.dataset.mode = exercise.mode;

  node.querySelector(".tag").textContent = exercise.tag;
  node.querySelector("h3").textContent = exercise.title;
  node.querySelector(".type-pill").textContent = exercise.type;
  node.querySelector(".question").textContent = exercise.question;

  const body = node.querySelector(".exercise-body");
  renderBody(body, exercise);

  const feedback = node.querySelector(".feedback");

  node.querySelector(".check-btn").addEventListener("click", () => {
    const result = checkExercise(card, exercise);
    showFeedback(feedback, result, exercise);
    updateScore(exerciseId, result.correct, result.total);
  });

  node.querySelector(".reset-btn").addEventListener("click", () => {
    card.querySelectorAll("input[type='text'], textarea").forEach(el => el.value = "");
    card.querySelectorAll("select").forEach(el => el.selectedIndex = 0);
    card.querySelectorAll("input[type='checkbox']").forEach(el => el.checked = false);
    feedback.classList.remove("show");
    feedback.innerHTML = "";
  });

  node.querySelector(".solution-btn").addEventListener("click", () => {
    showSolution(feedback, exercise);
  });

  return node;
}

function renderBody(body, exercise) {
  if (exercise.mode === "textarea") {
    body.innerHTML = `<textarea placeholder="Schreibe deine Antwort hier..."></textarea>`;
  }

  if (exercise.mode === "table-input") {
    exercise.rows.forEach(([label]) => {
      body.insertAdjacentHTML("beforeend", `
        <div class="item">
          <label>${label}</label>
          <input type="text" placeholder="Deine Antwort..." data-label="${label}">
        </div>
      `);
    });
  }

  if (exercise.mode === "free-grid") {
    exercise.labels.forEach(label => {
      body.insertAdjacentHTML("beforeend", `
        <div class="item">
          <label>${label}</label>
          <textarea placeholder="Schreibe mehrere Beispiele, getrennt durch Kommas."></textarea>
        </div>
      `);
    });
  }

  if (exercise.mode === "select-list") {
    exercise.rows.forEach(([prompt], i) => {
      const options = ['<option value="">Auswählen...</option>']
        .concat(exercise.options.map(o => `<option value="${o}">${o}</option>`))
        .join("");
      body.insertAdjacentHTML("beforeend", `
        <div class="item">
          <label>${prompt}</label>
          <select data-index="${i}">${options}</select>
        </div>
      `);
    });
  }

  if (exercise.mode === "fill-list") {
    exercise.rows.forEach(([prompt], i) => {
      body.insertAdjacentHTML("beforeend", `
        <div class="item">
          <label>${prompt.replace("___", "<mark>___</mark>")}</label>
          <input type="text" data-index="${i}" placeholder="Fehlendes Wort...">
        </div>
      `);
    });
  }

  if (exercise.mode === "multi") {
    const optionsHtml = exercise.options.map(option => `
      <label class="option">
        <input type="checkbox" value="${option}">
        ${option}
      </label>
    `).join("");
    body.innerHTML = `<div class="options">${optionsHtml}</div>`;
  }
}

function checkExercise(card, exercise) {
  if (exercise.mode === "textarea") {
    const value = normalize(card.querySelector("textarea").value);
    const found = exercise.keywords.filter(k => value.includes(normalize(k)));
    return {
      correct: found.length,
      total: exercise.keywords.length,
      details: `Gefundene Schlüsselbegriffe: ${found.length}/${exercise.keywords.length}.`
    };
  }

  if (exercise.mode === "table-input") {
    const inputs = [...card.querySelectorAll("input")];
    let correct = 0;
    inputs.forEach((input, i) => {
      if (normalize(input.value).includes(normalize(exercise.rows[i][1]))) correct++;
    });
    return { correct, total: exercise.rows.length, details: `${correct}/${exercise.rows.length} richtige Antworten.` };
  }

  if (exercise.mode === "free-grid") {
    const areas = [...card.querySelectorAll("textarea")];
    let correct = 0;
    areas.forEach(area => {
      const count = area.value.split(",").map(x => x.trim()).filter(Boolean).length;
      if (count >= 3) correct++;
    });
    return { correct, total: exercise.labels.length, details: `${correct}/${exercise.labels.length} Kategorien enthalten mindestens 3 Beispiele.` };
  }

  if (exercise.mode === "select-list") {
    const selects = [...card.querySelectorAll("select")];
    let correct = 0;
    selects.forEach((select, i) => {
      if (select.value === exercise.rows[i][1]) correct++;
    });
    return { correct, total: exercise.rows.length, details: `${correct}/${exercise.rows.length} richtige Antworten.` };
  }

  if (exercise.mode === "fill-list") {
    const inputs = [...card.querySelectorAll("input")];
    let correct = 0;
    inputs.forEach((input, i) => {
      if (normalize(input.value) === normalize(exercise.rows[i][1])) correct++;
    });
    return { correct, total: exercise.rows.length, details: `${correct}/${exercise.rows.length} richtige Antworten.` };
  }

  if (exercise.mode === "multi") {
    const checked = [...card.querySelectorAll("input:checked")].map(x => x.value).sort();
    const answers = [...exercise.answers].sort();
    const ok = checked.length === answers.length && checked.every((v, i) => v === answers[i]);
    return { correct: ok ? 1 : 0, total: 1, details: ok ? "Alle richtigen Kästchen wurden angekreuzt." : "Eine Antwort fehlt oder eine angekreuzte Antwort ist falsch." };
  }

  return { correct: 0, total: 0, details: "" };
}

function showFeedback(feedback, result, exercise) {
  const ratio = result.total ? result.correct / result.total : 0;
  let label = ratio === 1 ? "Richtig" : ratio >= .55 ? "Teilweise richtig" : "Noch einmal bearbeiten";
  let cls = ratio === 1 ? "ok" : ratio >= .55 ? "warn" : "bad";

  feedback.classList.add("show");
  feedback.innerHTML = `
    <p class="${cls}">${label} — ${result.details}</p>
    <p>${getExplanation(exercise)}</p>
  `;
}

function getExplanation(exercise) {
  if (exercise.answer) return `Erwartete Lösung: ${exercise.answer}`;
  if (exercise.sample) {
    return "Mögliche Beispiele: " + Object.entries(exercise.sample).map(([k, v]) => `${k}: ${v}`).join(" | ");
  }
  if (exercise.answers) return `Erwartete Antworten: ${exercise.answers.join(", ")}.`;
  if (exercise.rows) return "Klicke auf „Lösung anzeigen“, um alle Antworten zu sehen.";
  return "";
}

function showSolution(feedback, exercise) {
  feedback.classList.add("show");

  if (exercise.answer) {
    feedback.innerHTML = `<p class="ok">Lösung</p><p>${exercise.answer}</p>`;
    return;
  }

  if (exercise.sample) {
    feedback.innerHTML = `<p class="ok">Mögliche Beispiele</p><ul class="solution-list">${
      Object.entries(exercise.sample).map(([k, v]) => `<li><strong>${k}</strong>: ${v}</li>`).join("")
    }</ul>`;
    return;
  }

  if (exercise.answers) {
    feedback.innerHTML = `<p class="ok">Lösung</p><p>${exercise.answers.join(", ")}</p>`;
    return;
  }

  if (exercise.rows) {
    feedback.innerHTML = `<p class="ok">Lösung</p><ul class="solution-list">${
      exercise.rows.map(([q, a]) => `<li><strong>${q}</strong> → ${a}</li>`).join("")
    }</ul>`;
  }
}

function updateScore(id, correct, total) {
  checkedExercises.set(id, { correct, total });
  totalCorrect = 0;
  totalChecked = 0;

  checkedExercises.forEach(value => {
    totalCorrect += value.correct;
    totalChecked += value.total;
  });

  document.getElementById("global-score").textContent = `${totalCorrect} / ${totalChecked}`;
  document.getElementById("progress-text").textContent =
    totalChecked === 0 ? "Noch keine Übung korrigiert" : `${checkedExercises.size} Übung(en) korrigiert`;
}

initNavigation();
renderSections();
