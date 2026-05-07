const exercises = [
  {
    tag:"Test 1", title:"Wortarten genau bestimmen", type:"Zuordnung",
    question:"Bestimmen Sie die Wortart der folgenden Wörter so genau wie möglich.",
    mode:"select-list",
    options:["Eigenname / Substantiv","koordinierende Konjunktion","temporales Adverb","Possessivpronomen","Stoffsubstantiv","Präposition","lokales Adverb","Subjunktion / subordinierende Konjunktion","Interrogativpronomen","Verb / Vollverb"],
    rows:[
      ["Simon","Eigenname / Substantiv"],["und","koordinierende Konjunktion"],["vorher","temporales Adverb"],
      ["ihre","Possessivpronomen"],["Zucker","Stoffsubstantiv"],["aus","Präposition"],
      ["oben","lokales Adverb"],["dass","Subjunktion / subordinierende Konjunktion"],["wessen","Interrogativpronomen"],["aufstehen","Verb / Vollverb"]
    ]
  },
  {
    tag:"Test 2", title:"Präpositionalphrasen — Funktion", type:"Zuordnung",
    question:"Bestimmen Sie die genaue Funktion der markierten Präpositionalphrasen.",
    mode:"select-list",
    options:["konzessives Adverbial","lokales Adverbial","Präpositionalobjekt","modales Adverbial","temporales Adverbial"],
    rows:[
      ["Trotz Regens — Trotz Regens fahre ich in die Stadt.","konzessives Adverbial"],
      ["in die Stadt — Trotz Regens fahre ich in die Stadt.","lokales Adverbial"],
      ["mit meinen Freunden — um mich mit meinen Freunden zu treffen","Präpositionalobjekt"],
      ["Mit grossem Interesse — Mit grossem Interesse verfolgen wir die Verhandlungen.","modales Adverbial"],
      ["bei der Weltklimakonferenz in Glasgow — verfolgen wir die Verhandlungen bei der Weltklimakonferenz in Glasgow.","lokales Adverbial"],
      ["In Paris — In Paris warten wir schon gespannt auf den Zug.","lokales Adverbial"],
      ["auf den Zug — wir warten schon gespannt auf den Zug.","Präpositionalobjekt"],
      ["nach London — der uns schnell nach London bringt.","lokales Adverbial"]
    ]
  },
  {
    tag:"Test 3a", title:"Unflektierbare Wortarten", type:"Mehrfachauswahl",
    question:"Nennen Sie vier Wortarten, die nicht flektierbar sind.",
    mode:"multi",
    options:["Adverb","Partikel","Interjektion","Präposition","Substantiv","Adjektiv","Verb","Artikel"],
    answers:["Adverb","Partikel","Interjektion","Präposition"]
  },
  {
    tag:"Test 3b", title:"Flektierbare Wortarten", type:"Mehrfachauswahl",
    question:"Nennen Sie drei Wortarten, die flektierbar sind.",
    mode:"multi",
    options:["Adjektiv","Artikel","Pronomen","Verb","Präposition","Konjunktion","Adverb"],
    answers:["Adjektiv","Artikel","Pronomen","Verb"]
  },
  {
    tag:"Test 4", title:"Kopulaverben", type:"Schriftliche Antwort",
    question:"Welche drei Verben gelten als Kopulaverben? Erklären Sie auch ihre Funktion.",
    mode:"textarea",
    answer:"Die drei Kopulaverben sind sein, bleiben und werden. Sie verbinden das Subjekt mit einem Prädikativ, zum Beispiel mit einer Nominalphrase oder Adjektivphrase.",
    keywords:["sein","bleiben","werden","Subjekt","Prädikativ"]
  },
  {
    tag:"Test 5", title:"Wortarten zuordnen: Kriterien", type:"Schriftliche Antwort",
    question:"Anhand welcher Eigenschaften ist es möglich, Wörter in einem Satz einer bestimmten Wortart zuzuordnen? Nennen und erklären Sie zwei Eigenschaften.",
    mode:"textarea",
    answer:"Wörter können über Distribution und Morphologie zugeordnet werden. Distribution bedeutet: Man prüft, wo ein Wort im Satz stehen kann und mit welchen Wörtern es kombiniert wird. Morphologie bedeutet: Man prüft die Form des Wortes, zum Beispiel Flexion, Deklination, Konjugation oder Endungen.",
    keywords:["Distribution","wo","Satz","kombiniert","Morphologie","Flexion","Deklination","Konjugation"]
  },
  {
    tag:"Test 6", title:"Besonderes Satzglied: Prädikativ", type:"Auswahl",
    question:"Um welches Satzglied handelt es sich bei den markierten Phrasen?",
    mode:"select-list",
    options:["Subjektsprädikativ","Objektsprädikativ","Akkusativobjekt","Attribut"],
    rows:[
      ["Redakteurin — Sie wurde zur Redakteurin dieser Zeitung.","Subjektsprädikativ"],
      ["die Bundeskanzlerin Deutschlands — Angela Merkel war die Bundeskanzlerin Deutschlands.","Subjektsprädikativ"],
      ["Chefärztin — Die junge Frau ist Chefärztin.","Subjektsprädikativ"]
    ]
  },
  {
    tag:"Test 7", title:"Satzadverb", type:"Schriftliche Antwort",
    question:"Um welche Art von Adverb handelt es sich in diesem Satz? Erklären Sie die Funktion: Glücklicherweise sind wir gesund.",
    mode:"textarea",
    answer:"Glücklicherweise ist ein Satzadverb. Es bezieht sich auf den ganzen Satz und gibt eine Einschätzung oder Bewertung des Sprechers zum gesamten Sachverhalt.",
    keywords:["Satzadverb","ganzen Satz","Einschätzung","Bewertung","Sprecher","Sachverhalt"]
  },
  {
    tag:"Test 8", title:"Subjekte und Objekte", type:"Zuordnung",
    question:"Bestimmen Sie in den Sätzen die Subjekte und Objekte. Geben Sie bei Objekten die Objektart an.",
    mode:"select-list",
    options:["Subjekt","Akkusativobjekt","Dativobjekt","Präpositionalobjekt"],
    rows:[
      ["Die Wissenschaft — Die Wissenschaft warnt die Menschen vor der Klimakrise.","Subjekt"],
      ["die Menschen — Die Wissenschaft warnt die Menschen vor der Klimakrise.","Akkusativobjekt"],
      ["vor der Klimakrise — Die Wissenschaft warnt die Menschen vor der Klimakrise.","Präpositionalobjekt"],
      ["Die Studierenden — Die Studierenden besetzten den Campus.","Subjekt"],
      ["den Campus — Die Studierenden besetzten den Campus.","Akkusativobjekt"],
      ["Dieser Tag — Dieser Tag wird der Bevölkerung für immer in Erinnerung bleiben.","Subjekt"],
      ["der Bevölkerung — Dieser Tag wird der Bevölkerung für immer in Erinnerung bleiben.","Dativobjekt"],
      ["auf den Semesterbeginn — Er wartet auf den Semesterbeginn.","Präpositionalobjekt"]
    ]
  },
  {
    tag:"Test 9", title:"Pronomen", type:"Mehrfachauswahl",
    question:"Welche Unterkategorien von Pronomen gibt es? Wählen Sie vier richtige Beispiele.",
    mode:"multi",
    options:["Relativpronomen","Possessivpronomen","Demonstrativpronomen","Negationspronomen","Kopulapronomen","Modalpronomen","Präpositionspronomen"],
    answers:["Relativpronomen","Possessivpronomen","Demonstrativpronomen","Negationspronomen"]
  },
  {
    tag:"Test 10", title:"Arten von Prädikativen", type:"Auswahl",
    question:"Bestimmen Sie die Art des markierten Prädikativs.",
    mode:"select-list",
    options:["Subjektsprädikativ","Objektsprädikativ","freies Prädikativ"],
    rows:[
      ["ein richtiges Phänomen — Dieser Künstler ist ein richtiges Phänomen.","Subjektsprädikativ"],
      ["heiss — Ich trinke meinen Kaffee heiss.","freies Prädikativ"],
      ["für einen guten Lehrer — Die Eltern hielten ihn für einen guten Lehrer.","Objektsprädikativ"]
    ]
  },
  {
    tag:"Test 11", title:"Funktion aller Satzglieder", type:"Zuordnung",
    question:"Bestimmen Sie die Funktion der markierten Satzglieder.",
    mode:"select-list",
    options:["Subjekt","Dativobjekt","Akkusativobjekt","Präpositionalobjekt","lokales Adverbial","temporales Adverbial","kausales Adverbial","modales Adverbial","konzessives Adverbial"],
    rows:[
      ["Er — Er läuft nach Hause.","Subjekt"],
      ["nach Hause — Er läuft nach Hause.","lokales Adverbial"],
      ["Während einer Intervention — Während einer Intervention rieten wir ihm zu mehr Bedachtsamkeit.","temporales Adverbial"],
      ["wir — Während einer Intervention rieten wir ihm zu mehr Bedachtsamkeit.","Subjekt"],
      ["ihm — rieten wir ihm zu mehr Bedachtsamkeit.","Dativobjekt"],
      ["zu mehr Bedachtsamkeit — rieten wir ihm zu mehr Bedachtsamkeit.","Präpositionalobjekt"],
      ["Ich — Ich helfe ihm bei den Hausaufgaben.","Subjekt"],
      ["ihm — Ich helfe ihm bei den Hausaufgaben.","Dativobjekt"],
      ["bei den Hausaufgaben — Ich helfe ihm bei den Hausaufgaben.","Präpositionalobjekt"],
      ["trotz der unendlichen Schichten — Wir bleiben trotz der unendlichen Schichten gut gelaunt.","konzessives Adverbial"],
      ["Mit grosser Vorfreude — Mit grosser Vorfreude kündigt er seiner Familie den nächsten Urlaub an.","modales Adverbial"],
      ["seiner Familie — kündigt er seiner Familie den nächsten Urlaub an.","Dativobjekt"],
      ["den nächsten Urlaub — kündigt er seiner Familie den nächsten Urlaub an.","Akkusativobjekt"]
    ]
  },
  {
    tag:"Test 12", title:"Partikel und Phrase", type:"Schriftliche Antwort",
    question:"Analysieren Sie: Das Problem kann ganz einfach gelöst werden. Welche Art von Partikel ist «ganz»? Zu welchem Wort gehört sie? Welche Phrase bilden beide zusammen?",
    mode:"textarea",
    answer:"Ganz ist eine Steigerungspartikel. Sie gehört zu einfach. Zusammen bilden ganz einfach eine Adjektivphrase, die im Satz adverbial bzw. modal verwendet wird.",
    keywords:["Steigerungspartikel","einfach","Adjektivphrase","adverbial","modal"]
  },
  {
    tag:"Test 13", title:"Satzverknüpfung", type:"Zuordnung",
    question:"Bestimmen Sie bei den folgenden Sätzen die Art der Satzverknüpfung.",
    mode:"select-list",
    options:["Koordination / Satzreihung","Subordination / Satzgefüge"],
    rows:[
      ["Morgen werden wir das Album, von dem ich dir erzählt habe, anhören.","Subordination / Satzgefüge"],
      ["Wenn du willst, könnten wir nach Lausanne fahren.","Subordination / Satzgefüge"],
      ["Sie freut sich so sehr darüber, dass es jetzt heller wird.","Subordination / Satzgefüge"],
      ["Es ist noch sehr kalt, aber sie geht trotzdem in den See schwimmen.","Koordination / Satzreihung"]
    ]
  },
  {
    tag:"Test 13b", title:"Form und Funktion von Nebensätzen", type:"Zuordnung",
    question:"Bestimmen Sie Form und Funktion des Nebensatzes.",
    mode:"select-list",
    options:["Relativsatz — Attributsatz","Konjunktionalsatz — Adverbialsatz/Konditionalsatz","Konjunktionalsatz — Objektsatz","keinen Nebensatz: Koordination"],
    rows:[
      ["von dem ich dir erzählt habe — das Album, von dem ich dir erzählt habe","Relativsatz — Attributsatz"],
      ["Wenn du willst — Wenn du willst, könnten wir nach Lausanne fahren.","Konjunktionalsatz — Adverbialsatz/Konditionalsatz"],
      ["dass es jetzt heller wird — Sie freut sich so sehr darüber, dass es jetzt heller wird.","Konjunktionalsatz — Objektsatz"],
      ["aber — Es ist noch sehr kalt, aber sie geht trotzdem in den See schwimmen.","keinen Nebensatz: Koordination"]
    ]
  },
  {
    tag:"Test 14", title:"Topologische Analyse", type:"Zuordnung",
    question:"Wählen Sie die richtige topologische Analyse: Vorfeld | LK | Mittelfeld | RK | Nachfeld.",
    mode:"select-list",
    options:[
      "Wenn wir mehr Geld haben | möchten | wir eines Tages in Vevey am See | wohnen | —",
      "— | Wenn | wir mehr Geld | haben | —",
      "Sie | hat | in der Kebab-Bude einen Dürüm mit Falafel | gegessen | statt mit Fleisch",
      "— | statt | mit Fleisch | — | —",
      "Wenn es morgen regnet | muss | ich meinen alten Anorak | anziehen | statt meine neue Jeansjacke",
      "— | Wenn | es morgen | regnet | —"
    ],
    rows:[
      ["Wenn wir mehr Geld haben, möchten wir eines Tages in Vevey am See wohnen. — Hauptsatz","Wenn wir mehr Geld haben | möchten | wir eines Tages in Vevey am See | wohnen | —"],
      ["Wenn wir mehr Geld haben — Nebensatz","— | Wenn | wir mehr Geld | haben | —"],
      ["Sie hat in der Kebab-Bude einen Dürüm mit Falafel gegessen, statt mit Fleisch. — Hauptsatz","Sie | hat | in der Kebab-Bude einen Dürüm mit Falafel | gegessen | statt mit Fleisch"],
      ["statt mit Fleisch — elliptischer Nebensatz / Nachfeldanalyse","— | statt | mit Fleisch | — | —"],
      ["Wenn es morgen regnet, muss ich meinen alten Anorak anziehen, statt meine neue Jeansjacke. — Hauptsatz","Wenn es morgen regnet | muss | ich meinen alten Anorak | anziehen | statt meine neue Jeansjacke"],
      ["Wenn es morgen regnet — Nebensatz","— | Wenn | es morgen | regnet | —"]
    ]
  }
];

let selected = [...exercises];
let checked = new Map();

function escapeHtml(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function normalize(v){return String(v||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[.,;:!?()«»„“"]/g,"").replace(/\s+/g," ").trim()}

const list = document.getElementById("exercise-list");
function render(){
  list.innerHTML = "";
  selected.forEach((ex,i)=>list.appendChild(createExercise(ex, i)));
  checked = new Map();
  updateScore();
}

function createExercise(ex, id){
  const tpl = document.getElementById("tpl").content.cloneNode(true);
  const card = tpl.querySelector(".exercise");
  tpl.querySelector(".tag").textContent = ex.tag;
  tpl.querySelector("h3").textContent = ex.title;
  tpl.querySelector(".pill").textContent = ex.type;
  tpl.querySelector(".question").textContent = ex.question;
  renderBody(tpl.querySelector(".body"), ex);
  const fb = tpl.querySelector(".feedback");
  tpl.querySelector(".check").addEventListener("click",()=>{
    const res = check(card, ex);
    checked.set(id,res);
    showFeedback(fb,res,ex);
    updateScore();
  });
  tpl.querySelector(".reset").addEventListener("click",()=>{
    card.querySelectorAll("select").forEach(s=>s.selectedIndex=0);
    card.querySelectorAll("textarea,input[type=text]").forEach(x=>x.value="");
    card.querySelectorAll("input[type=checkbox]").forEach(x=>x.checked=false);
    fb.classList.remove("show"); fb.innerHTML="";
    checked.delete(id); updateScore();
  });
  tpl.querySelector(".solution").addEventListener("click",()=>showSolution(fb,ex));
  return tpl;
}

function renderBody(body, ex){
  if(ex.mode==="textarea"){body.innerHTML=`<textarea placeholder="Schreibe deine Antwort hier..."></textarea>`}
  if(ex.mode==="select-list"){
    ex.rows.forEach(([prompt],i)=>{
      const opts = ['<option value="">Auswählen...</option>'].concat(ex.options.map(o=>`<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`)).join("");
      body.insertAdjacentHTML("beforeend",`<div class="item"><label>${escapeHtml(prompt)}</label><select>${opts}</select></div>`);
    });
  }
  if(ex.mode==="multi"){
    body.innerHTML = `<div class="options">${ex.options.map(o=>`<label class="option"><input type="checkbox" value="${escapeHtml(o)}"> ${escapeHtml(o)}</label>`).join("")}</div>`;
  }
}

function check(card, ex){
  if(ex.mode==="textarea"){
    const val = normalize(card.querySelector("textarea").value);
    const found = ex.keywords.filter(k=>val.includes(normalize(k)));
    return {correct:found.length,total:ex.keywords.length,details:`Gefundene Schlüsselbegriffe: ${found.length}/${ex.keywords.length}.`};
  }
  if(ex.mode==="select-list"){
    const selects=[...card.querySelectorAll("select")]; let correct=0;
    selects.forEach((s,i)=>{if(s.value===ex.rows[i][1]) correct++});
    return {correct,total:ex.rows.length,details:`${correct}/${ex.rows.length} richtige Antworten.`};
  }
  if(ex.mode==="multi"){
    const got=[...card.querySelectorAll("input:checked")].map(x=>x.value).sort();
    const ans=[...ex.answers].sort();
    const ok = got.length===ans.length && got.every((v,i)=>v===ans[i]);
    return {correct:ok?1:0,total:1,details: ok ? "Alle richtigen Antworten wurden gewählt." : "Mindestens eine Antwort fehlt oder ist falsch."};
  }
  return {correct:0,total:0,details:""};
}

function showFeedback(fb,res,ex){
  const ratio = res.total ? res.correct/res.total : 0;
  const cls = ratio===1 ? "ok" : ratio>=.55 ? "warn" : "bad";
  const label = ratio===1 ? "Richtig" : ratio>=.55 ? "Teilweise richtig" : "Noch einmal bearbeiten";
  fb.classList.add("show");
  fb.innerHTML = `<p class="${cls}">${label} — ${escapeHtml(res.details)}</p><p>${getExplanation(ex)}</p>`;
}

function getExplanation(ex){
  if(ex.answer) return `Erwartete Lösung: ${escapeHtml(ex.answer)}`;
  if(ex.answers) return `Erwartete Antworten: ${ex.answers.map(escapeHtml).join(", ")}.`;
  return `Klicke auf „Lösung anzeigen“, um alle Antworten zu sehen.`;
}

function showSolution(fb,ex){
  fb.classList.add("show");
  if(ex.answer){fb.innerHTML=`<p class="ok">Lösung</p><p>${escapeHtml(ex.answer)}</p>`;return}
  if(ex.answers){fb.innerHTML=`<p class="ok">Lösung</p><p>${ex.answers.map(escapeHtml).join(", ")}</p>`;return}
  if(ex.rows){fb.innerHTML=`<p class="ok">Lösung</p><ul class="solution-list">${ex.rows.map(([q,a])=>`<li><strong>${escapeHtml(q)}</strong> → ${escapeHtml(a)}</li>`).join("")}</ul>`}
}

function updateScore(){
  let c=0,t=0;
  checked.forEach(r=>{c+=r.correct;t+=r.total});
  document.getElementById("score").textContent=`${c} / ${t}`;
  document.getElementById("progress").textContent=t===0?"Noch nichts korrigiert":`${checked.size} Aufgabe(n) korrigiert`;
}

document.getElementById("all").addEventListener("click",()=>{selected=[...exercises];render()});
document.getElementById("shuffle").addEventListener("click",()=>{
  selected = [...exercises].sort(()=>Math.random()-.5).slice(0,10);
  render();
});
document.getElementById("resetAll").addEventListener("click",render);
render();
