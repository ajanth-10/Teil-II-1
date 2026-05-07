const viewer = document.getElementById("viewer");
const viewerShell = document.getElementById("viewer-shell");
const home = document.getElementById("home");
const current = document.getElementById("current-mode");
const viewerTitle = document.getElementById("viewer-title");

const labels = {
  "home": "Startseite",
  "modules/syntax_i/index.html": "Syntax I — Wortarten und Verben",
  "modules/syntax_ii/index.html": "Syntax II — Bausteine der Syntax",
  "modules/syntax_iii/index.html": "Syntax III — Syntaktische Funktionen",
  "modules/syntax_iv/index.html": "Syntax IV — Attribute und Wortstellung",
  "modules/syntax_v/index.html": "Syntax V — Komplexe Sätze",
  "mixed.html": "Gemischter Testmodus"
};

function openView(view){
  document.querySelectorAll(".nav-chip").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
  });

  const label = labels[view] || "Modul";
  current.textContent = view === "home" ? "Startseite" : label;
  viewerTitle.textContent = label;

  if(view === "home"){
    home.classList.add("visible");
    viewerShell.classList.remove("visible");
    viewer.removeAttribute("src");
  }else{
    home.classList.remove("visible");
    viewerShell.classList.add("visible");
    viewer.src = view;
  }

  window.scrollTo({top:0, behavior:"smooth"});
}

document.querySelectorAll("[data-view]").forEach(btn=>{
  btn.addEventListener("click",()=>openView(btn.dataset.view));
});
