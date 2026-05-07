const verbLexicon = [
  ["anfahren", "renverser / heurter"], ["machen", "faire"], ["stehen", "se trouver / être écrit"],
  ["suchen", "chercher"], ["können", "pouvoir"], ["sein", "être"], ["kontrollieren", "contrôler"],
  ["handeln", "agir"], ["zurückkehren", "revenir"], ["anfangen", "commencer"], ["stehlen", "voler"],
  ["haben", "avoir"], ["verändern", "modifier"], ["sich äussern", "s’exprimer"], ["untersuchen", "examiner"],
  ["sich verwandeln", "se transformer"], ["voraussehen", "prévoir"], ["aufwachen", "se réveiller"],
  ["ankommen", "arriver"], ["liefern", "livrer"], ["herkommen", "venir ici"], ["knallen", "claquer / faire du bruit"],
  ["kommen", "venir"], ["vergessen", "oublier"], ["verraten", "révéler"], ["helfen", "aider"],
  ["lesen", "lire"], ["wissen", "savoir"], ["stürmen", "se précipiter"], ["gehen", "aller"],
  ["engagieren", "s’engager"], ["verletzen", "blesser"], ["finden", "trouver"], ["werden", "devenir / être auxiliaire"],
  ["hoffen", "espérer"], ["studieren", "étudier"], ["tun", "faire"], ["fragen", "demander"]
];

const sections = {
  wiederholung: {
    title: "Wiederholung: Satzglied und Attribut",
    intro: "Satzglieder sind Phrasen oder Konstituenten mit Satzgliedfunktion. Attribute sind Teile von Satzgliedern.",
    exercises: [
      {
        tag: "Wiederholung 1",
        title: "Satzgliedfunktionen",
        type: "Mehrfachauswahl",
        question: "Welche Funktionen können Satzglieder haben?",
        mode: "multi",
        options: ["Subjekt", "Objekt", "Adverbial", "Prädikativ", "Attribut", "Artikel"],
        answers: ["Subjekt", "Objekt", "Adverbial", "Prädikativ"]
      },
      {
        tag: "Wiederholung 2",
        title: "Attribut definieren",
        type: "Schriftliche Antwort",
        question: "Was ist ein Attribut?",
        mode: "textarea",
        answer: "Ein Attribut ist Teil eines Satzglieds, also ein Gliedteil. Es bildet zusammen mit seinem Bezugselement eine Konstituente. Ein Attribut ist eine Phrase innerhalb einer Phrase.",
        keywords: ["Teil", "Satzglied", "Gliedteil", "Bezugselement", "Konstituente", "Phrase innerhalb einer Phrase"]
      },
      {
        tag: "Wiederholung 3",
        title: "Formen von Attributen",
        type: "Zuordnung",
        question: "Bestimme die Form des Attributs.",
        mode: "select-list",
        options: ["Adjektiv-Attribut", "Attributsatz", "Präpositional-Attribut", "Genitiv-Attribut"],
        rows: [
          ["tapfere — Das tapfere Schneiderlein", "Adjektiv-Attribut"],
          ["das tapfer war — Das Schneiderlein, das tapfer war", "Attributsatz"],
          ["aus dem Märchen — Das Schneiderlein aus dem Märchen", "Präpositional-Attribut"],
          ["des Schneiderleins — Die Schere des Schneiderleins", "Genitiv-Attribut"]
        ]
      }
    ]
  },

  satzglieder: {
    title: "Aufgabe 1a — Satzglieder bestimmen",
    intro: "Markiere die Konstituenten, die Satzgliedfunktion haben, und bestimme die Funktion.",
    exercises: [
      {
        tag: "Aufgabe 1a",
        title: "Satzglieder in Satz 1",
        type: "Auswahl",
        question: "Bestimme die Satzgliedfunktion der markierten Einheit.",
        mode: "select-list",
        options: ["Subjekt", "Akkusativ-Objekt", "Präpositionalobjekt", "Adverbial lokal", "Adverbial temporal"],
        rows: [
          ["Der Fahrer eines gelben Autos — Der Fahrer eines gelben Autos hat eine ältere Dame aus einem Kölner Stadtviertel angefahren.", "Subjekt"],
          ["eine ältere Dame aus einem Kölner Stadtviertel — Der Fahrer eines gelben Autos hat eine ältere Dame aus einem Kölner Stadtviertel angefahren.", "Akkusativ-Objekt"]
        ]
      },
      {
        tag: "Aufgabe 1a",
        title: "Satzglieder in Satz 2",
        type: "Auswahl",
        question: "Bestimme die Satzgliedfunktion der markierten Einheit.",
        mode: "select-list",
        options: ["Subjekt", "Akkusativ-Objekt", "Präpositionalobjekt", "Adverbial lokal", "Adverbial temporal"],
        rows: [
          ["Eine Frau aus diesem Stadtviertel — Eine Frau aus diesem Stadtviertel hat bei der Polizei von Köln eine Zeugenaussage gemacht.", "Subjekt"],
          ["bei der Polizei von Köln — Eine Frau aus diesem Stadtviertel hat bei der Polizei von Köln eine Zeugenaussage gemacht.", "Adverbial lokal"],
          ["eine Zeugenaussage — Eine Frau aus diesem Stadtviertel hat bei der Polizei von Köln eine Zeugenaussage gemacht.", "Akkusativ-Objekt"]
        ]
      },
      {
        tag: "Aufgabe 1a",
        title: "Satzglieder in Satz 3",
        type: "Auswahl",
        question: "Bestimme die Satzgliedfunktion der markierten Einheit.",
        mode: "select-list",
        options: ["Subjekt", "Akkusativ-Objekt", "Präpositionalobjekt", "Adverbial lokal", "Adverbial temporal"],
        rows: [
          ["In der Unfall-Meldung der Zeitung aus Köln — In der Unfall-Meldung der Zeitung aus Köln steht ein interessanter Artikel über diesen bedauerlichen Unfall mit der älteren Dame.", "Adverbial lokal"],
          ["ein interessanter Artikel über diesen bedauerlichen Unfall mit der älteren Dame — In der Unfall-Meldung der Zeitung aus Köln steht ein interessanter Artikel über diesen bedauerlichen Unfall mit der älteren Dame.", "Subjekt"]
        ]
      },
      {
        tag: "Aufgabe 1a",
        title: "Satzglieder in Satz 4",
        type: "Auswahl",
        question: "Bestimme die Satzgliedfunktion der markierten Einheit.",
        mode: "select-list",
        options: ["Subjekt", "Akkusativ-Objekt", "Präpositionalobjekt", "Adverbial lokal", "Adverbial temporal"],
        rows: [
          ["Die Kölner Polizei — Die Kölner Polizei sucht noch nach weiteren Zeugen des Unfalls.", "Subjekt"],
          ["noch — Die Kölner Polizei sucht noch nach weiteren Zeugen des Unfalls.", "Adverbial temporal"],
          ["nach weiteren Zeugen des Unfalls — Die Kölner Polizei sucht noch nach weiteren Zeugen des Unfalls.", "Präpositionalobjekt"]
        ]
      }
    ]
  },

  attribute: {
    title: "Aufgabe 1b — Attribute bestimmen",
    intro: "Attribute stehen innerhalb von Satzgliedern. Sie können verschiedene Realisierungsformen haben.",
    exercises: [
      {
        tag: "Aufgabe 1b",
        title: "Attribute in Satz 1 und 2",
        type: "Zuordnung",
        question: "Bestimme die Form des markierten Attributs.",
        mode: "select-list",
        options: ["Adjektiv-Attribut", "Genitiv-Attribut", "Präpositional-Attribut", "Attributsatz"],
        rows: [
          ["eines gelben Autos — Der Fahrer eines gelben Autos", "Genitiv-Attribut"],
          ["ältere — eine ältere Dame", "Adjektiv-Attribut"],
          ["aus einem Kölner Stadtviertel — eine ältere Dame aus einem Kölner Stadtviertel", "Präpositional-Attribut"],
          ["aus diesem Stadtviertel — Eine Frau aus diesem Stadtviertel", "Präpositional-Attribut"],
          ["von Köln — bei der Polizei von Köln", "Präpositional-Attribut"]
        ]
      },
      {
        tag: "Aufgabe 1b",
        title: "Attribute in Satz 3 und 4",
        type: "Zuordnung",
        question: "Bestimme die Form des markierten Attributs.",
        mode: "select-list",
        options: ["Adjektiv-Attribut", "Genitiv-Attribut", "Präpositional-Attribut", "Attributsatz"],
        rows: [
          ["der Zeitung aus Köln — In der Unfall-Meldung der Zeitung aus Köln", "Genitiv-Attribut"],
          ["interessanter — ein interessanter Artikel", "Adjektiv-Attribut"],
          ["über diesen bedauerlichen Unfall mit der älteren Dame — Artikel über diesen bedauerlichen Unfall mit der älteren Dame", "Präpositional-Attribut"],
          ["Kölner — Die Kölner Polizei", "Adjektiv-Attribut"],
          ["weiteren — nach weiteren Zeugen", "Adjektiv-Attribut"],
          ["des Unfalls — Zeugen des Unfalls", "Genitiv-Attribut"]
        ]
      }
    ]
  },

  verschachtelung: {
    title: "Attribute innerhalb von Attributen",
    intro: "Attribute können auch innerhalb anderer Attribute stehen. Dadurch entstehen mehrere Ebenen.",
    exercises: [
      {
        tag: "Aufgabe 1b",
        title: "Verschachtelte Attribute",
        type: "Auswahl",
        question: "Bestimme das Attribut innerhalb des Attributs.",
        mode: "select-list",
        options: ["Adjektiv-Attribut zu Autos", "Adjektiv-Attribut zu Stadtviertel", "Präpositional-Attribut zu Zeitung", "Adjektiv-Attribut zu Unfall", "Präpositional-Attribut zu Unfall", "Adjektiv-Attribut zu Dame", "kein Attribut innerhalb eines Attributs"],
        rows: [
          ["gelben — eines gelben Autos", "Adjektiv-Attribut zu Autos"],
          ["Kölner — aus einem Kölner Stadtviertel", "Adjektiv-Attribut zu Stadtviertel"],
          ["Satz 2: Eine Frau aus diesem Stadtviertel ...", "kein Attribut innerhalb eines Attributs"],
          ["aus Köln — der Zeitung aus Köln", "Präpositional-Attribut zu Zeitung"],
          ["bedauerlichen — über diesen bedauerlichen Unfall", "Adjektiv-Attribut zu Unfall"],
          ["mit der älteren Dame — Unfall mit der älteren Dame", "Präpositional-Attribut zu Unfall"],
          ["älteren — mit der älteren Dame", "Adjektiv-Attribut zu Dame"],
          ["Satz 4: Die Kölner Polizei sucht noch nach weiteren Zeugen des Unfalls.", "kein Attribut innerhalb eines Attributs"]
        ]
      },
      {
        tag: "Merksatz",
        title: "Verschachtelung erklären",
        type: "Schriftliche Antwort",
        question: "Was zeigt die Übung zu Attributen innerhalb von Attributen?",
        mode: "textarea",
        answer: "Die Übung zeigt, dass Attribute innerhalb von Satzgliedern auftreten. Attribute können aber auch innerhalb von Attributen stehen und auf mehreren Ebenen ineinander verschachtelt sein.",
        keywords: ["Attribute", "Satzgliedern", "innerhalb von Attributen", "mehreren Ebenen", "verschachtelt"]
      }
    ]
  },

  satzklammer: {
    title: "Satzklammer",
    intro: "Die Satzklammer besteht aus den verbalen Teilen des Prädikats: links finites Verb, rechts infinites Verb oder Verbpartikel.",
    exercises: [
      {
        tag: "Vorbereitung 1",
        title: "Satzklammer erklären",
        type: "Schriftliche Antwort",
        question: "Aus welchen Teilen besteht die Satzklammer?",
        mode: "textarea",
        answer: "Die Satzklammer besteht aus den verbalen Teilen des Satzes. Links steht das finite Verb, also der finite Teil des Prädikats. Rechts steht ein infinites Verb oder ein Verbteil, zum Beispiel eine Partikel.",
        keywords: ["verbalen Teilen", "finites Verb", "link", "infinites Verb", "rechter Teil", "Partikel"]
      },
      {
        tag: "Aufgabe 2",
        title: "Satzklammer bestimmen",
        type: "Auswahl",
        question: "Wähle die richtige Satzklammer.",
        mode: "select-list",
        options: [
          "kann ... sein", "können ... handeln", "kehren ... zurück", "fangen ... an zu stehlen", "ist ... bekannt", "dass ... haben", "keine Satzklammer"
        ],
        rows: [
          ["Kleptomanie kann so zwanghaft sein wie Spielsucht.", "kann ... sein"],
          ["Kleptomanen können nicht kontrolliert handeln, sondern nur zwanghaft.", "können ... handeln"],
          ["Oft kehren sie erfolgreich zurück, mit kleineren oder grösseren „Geschenken“.", "kehren ... zurück"],
          ["Manche fangen schon in der Jugend an zu stehlen.", "fangen ... an zu stehlen"],
          ["Es ist inzwischen bestens bekannt, dass Kleptomanen keinen moralischen Defekt haben. — Hauptsatz", "ist ... bekannt"],
          ["Es ist inzwischen bestens bekannt, dass Kleptomanen keinen moralischen Defekt haben. — Nebensatz", "dass ... haben"]
        ]
      },
      {
        tag: "Vorbereitung 3",
        title: "Subjektposition",
        type: "Auswahl",
        question: "Bestimme die topologische Position des Subjekts.",
        mode: "select-list",
        options: ["Vorfeld", "Mittelfeld", "Nachfeld"],
        rows: [
          ["Die Industrielle Revolution — Die Industrielle Revolution veränderte die Dörfer und Städte.", "Vorfeld"],
          ["sie — Ohne Zweifel hat sie die gesamte Gesellschaft verändert.", "Mittelfeld"],
          ["die Volkskundler — Zu diesen Fragen haben sich natürlich immer wieder die Volkskundler geäussert.", "Mittelfeld"],
          ["Wissenschaftler — Natürlich haben Wissenschaftler die Veränderungen genau untersucht.", "Mittelfeld"],
          ["alte Dörfer — In ganzen Landstrichen verwandelten sich seit der Industrialisierung alte Dörfer in Arbeitersiedlungen.", "Mittelfeld"],
          ["niemand — Diese Entwicklung konnte am Anfang des vorigen Jahrhunderts niemand voraussehen.", "Mittelfeld"]
        ]
      }
    ]
  },

  felder: {
    title: "Topologische Felder",
    intro: "Das Feldermodell unterscheidet Vorfeld, linke Klammer, Mittelfeld, rechte Klammer und Nachfeld.",
    exercises: [
      {
        tag: "Vorbereitung 2",
        title: "Felder nennen",
        type: "Schriftliche Antwort",
        question: "Welche Felder werden im Stellungsfeldermodell unterschieden?",
        mode: "textarea",
        answer: "Im Stellungsfeldermodell unterscheidet man Vorfeld, linke Klammer, Mittelfeld, rechte Klammer und Nachfeld.",
        keywords: ["Vorfeld", "linke Klammer", "Mittelfeld", "rechte Klammer", "Nachfeld"]
      },
      {
        tag: "Aufgabe 3",
        title: "Topologische Felder — einfache Analyse",
        type: "Auswahl",
        question: "Wähle die richtige Analyse: Vorfeld | LK | Mittelfeld | RK | Nachfeld.",
        mode: "select-list",
        options: [
          "Was | hast | du | getan | —",
          "— | Frag | deine Mutter | — | —",
          "Ina | will | nicht Sport | studieren | —",
          "— | Hast | du aber schöne Stiefel | — | —",
          "Ob | — | sie wohl | kommt | —",
          "— | Kommt | ein Schotte in die Bar | — | —",
          "Wenn | — | doch nur bald Ferien | wären | —"
        ],
        rows: [
          ["Was hast du getan?", "Was | hast | du | getan | —"],
          ["Frag deine Mutter!", "— | Frag | deine Mutter | — | —"],
          ["Ina will nicht Sport studieren.", "Ina | will | nicht Sport | studieren | —"],
          ["Hast du aber schöne Stiefel!", "— | Hast | du aber schöne Stiefel | — | —"],
          ["Ob sie wohl kommt?", "Ob | — | sie wohl | kommt | —"],
          ["Kommt ein Schotte in die Bar.", "— | Kommt | ein Schotte in die Bar | — | —"],
          ["Wenn doch nur bald Ferien wären.", "Wenn | — | doch nur bald Ferien | wären | —"]
        ]
      }
    ]
  },

  verbstellung: {
    title: "Verbstellungstypen",
    intro: "Es gibt drei Verbstellungstypen: V1, V2 und V-End. Entscheidend ist die Position des finiten Verbs.",
    exercises: [
      {
        tag: "Vorbereitung 4a",
        title: "Verbstellungstypen nennen",
        type: "Mehrfachauswahl",
        question: "Welche Verbstellungstypen gibt es?",
        mode: "multi",
        options: ["Verb-Erststellung (V1)", "Verb-Zweitstellung (V2)", "Verb-Endstellung (V-End)", "Verb-Drittstellung (V3)", "Verb-Mittelfeldstellung"],
        answers: ["Verb-Erststellung (V1)", "Verb-Zweitstellung (V2)", "Verb-Endstellung (V-End)"]
      },
      {
        tag: "Vorbereitung 4b",
        title: "Verbstellung bestimmen",
        type: "Auswahl",
        question: "Bestimme den Verbstellungstyp.",
        mode: "select-list",
        options: ["V1", "V2", "V-End"],
        rows: [
          ["Heute morgen um 3 Uhr bin ich plötzlich aufgewacht.", "V2"],
          ["Wann kommt er an?", "V2"],
          ["Wird das Paket heute noch geliefert?", "V1"],
          ["Komm bitte mal her!", "V1"],
          ["Hat das aber geknallt!", "V1"],
          ["Wenn er doch käme!", "V-End"],
          ["Ob er wohl kommt?", "V-End"],
          ["Dass sie das wieder vergessen hat!", "V-End"]
        ]
      },
      {
        tag: "Vorbereitung 7",
        title: "Hauptsatz und Nebensatz",
        type: "Auswahl",
        question: "Welche Verbstellung ist typisch?",
        mode: "select-list",
        options: ["Hauptsatz: V2 oder V1", "eingeleiteter Nebensatz: V-End", "uneingeleiteter Nebensatz: V2 möglich", "selbständiger Satz mit Subjunktion: V-End möglich"],
        rows: [
          ["Hauptsätze", "Hauptsatz: V2 oder V1"],
          ["eingeleitete Nebensätze", "eingeleiteter Nebensatz: V-End"],
          ["uneingeleitete Nebensätze", "uneingeleiteter Nebensatz: V2 möglich"],
          ["Ob er wohl da ist? / Dass der das alles weiss!", "selbständiger Satz mit Subjunktion: V-End möglich"]
        ]
      }
    ]
  },

  satztypen: {
    title: "Satztypen",
    intro: "Die fünf zentralen Satztypen: Aussagesatz, Fragesatz, Befehlssatz, Exklamativsatz, Wunschsatz.",
    exercises: [
      {
        tag: "Vorbereitung 5a",
        title: "Satztypen nennen",
        type: "Mehrfachauswahl",
        question: "Welche fünf Satztypen werden im Kurs genannt?",
        mode: "multi",
        options: ["Aussagesatz", "Fragesatz", "Befehlssatz", "Exklamativsatz", "Wunschsatz", "Objektsatz", "Attributsatz"],
        answers: ["Aussagesatz", "Fragesatz", "Befehlssatz", "Exklamativsatz", "Wunschsatz"]
      },
      {
        tag: "Vorbereitung 5b",
        title: "Satztypen bestimmen",
        type: "Auswahl",
        question: "Bestimme den Satztyp.",
        mode: "select-list",
        options: ["Aussagesatz", "Fragesatz (Ergänzungsfrage)", "Fragesatz (Entscheidungsfrage)", "Befehlssatz", "Exklamativsatz", "Wunschsatz", "indirekter Fragesatz"],
        rows: [
          ["Heute morgen um 3 Uhr bin ich plötzlich aufgewacht.", "Aussagesatz"],
          ["Wann kommt er an?", "Fragesatz (Ergänzungsfrage)"],
          ["Wird das Paket heute noch geliefert?", "Fragesatz (Entscheidungsfrage)"],
          ["Komm bitte mal her!", "Befehlssatz"],
          ["Hat das aber geknallt!", "Exklamativsatz"],
          ["Wenn er doch käme!", "Wunschsatz"],
          ["Ob er wohl kommt?", "indirekter Fragesatz"],
          ["Dass sie das wieder vergessen hat!", "Exklamativsatz"]
        ]
      },
      {
        tag: "Vorbereitung 6",
        title: "Verbstellung und Satztyp",
        type: "Auswahl",
        question: "Ordne den Satztyp zu.",
        mode: "select-list",
        options: ["Aussagesatz", "Fragesatz (Ergänzungsfrage)", "Fragesatz (Entscheidungsfrage)", "Imperativsatz", "Exklamativsatz", "Wunschsatz", "Nebensatz"],
        rows: [
          ["Hans will die Antwort nicht verraten.", "Aussagesatz"],
          ["Was hat Hans wieder mal vergessen?", "Fragesatz (Ergänzungsfrage)"],
          ["Wie schön ist diese Landschaft!", "Exklamativsatz"],
          ["Hat er dir gestern geholfen?", "Fragesatz (Entscheidungsfrage)"],
          ["Lies ein Buch!", "Imperativsatz"],
          ["Wüsste ich doch mehr über ihn!", "Wunschsatz"],
          ["dass/ob er hilft", "Nebensatz"],
          ["Wenn er doch käme!", "Wunschsatz"]
        ]
      }
    ]
  },

  analyse: {
    title: "Topologische Satzanalyse",
    intro: "Ordne die Konstituenten in Vorfeld, linke Klammer, Mittelfeld, rechte Klammer und Nachfeld ein.",
    exercises: [
      {
        tag: "Aufgabe 4",
        title: "Topologische Analyse — Hauptsätze",
        type: "Auswahl",
        question: "Wähle die richtige Analyse: Vorfeld | LK | Mittelfeld | RK | Nachfeld.",
        mode: "select-list",
        options: [
          "Der Mann | ist | obwohl er stark verletzt wurde, nicht ins Krankenhaus | gegangen | —",
          "Aus tiefer Überzeugung und mit viel Hingabe | hat | sie sich in der Kirchengemeinde | engagiert | —",
          "— | Geh | endlich | — | —",
          "Dass die Diebe des Bildes aus dem Lausanner Museum bald gefunden werden | hoffen | alle | — | —",
          "Die Museumsleitung | ist | danach noch viel vorsichtiger | geworden | als vorher"
        ],
        rows: [
          ["Der Mann ist, obwohl er stark verletzt wurde, nicht ins Krankenhaus gegangen.", "Der Mann | ist | obwohl er stark verletzt wurde, nicht ins Krankenhaus | gegangen | —"],
          ["Aus tiefer Überzeugung und mit viel Hingabe hat sie sich in der Kirchengemeinde engagiert.", "Aus tiefer Überzeugung und mit viel Hingabe | hat | sie sich in der Kirchengemeinde | engagiert | —"],
          ["Geh endlich!", "— | Geh | endlich | — | —"],
          ["Dass die Diebe des Bildes aus dem Lausanner Museum bald gefunden werden, hoffen alle.", "Dass die Diebe des Bildes aus dem Lausanner Museum bald gefunden werden | hoffen | alle | — | —"],
          ["Die Museumsleitung ist danach noch viel vorsichtiger geworden als vorher.", "Die Museumsleitung | ist | danach noch viel vorsichtiger | geworden | als vorher"]
        ]
      },
      {
        tag: "Aufgabe 4",
        title: "Topologische Analyse — Nebensätze",
        type: "Auswahl",
        question: "Analysiere den eingebetteten Nebensatz.",
        mode: "select-list",
        options: [
          "— | obwohl | er stark verletzt | wurde | —",
          "— | dass | die Diebe des Bildes aus dem Lausanner Museum bald gefunden | werden | —"
        ],
        rows: [
          ["obwohl er stark verletzt wurde", "— | obwohl | er stark verletzt | wurde | —"],
          ["dass die Diebe des Bildes aus dem Lausanner Museum bald gefunden werden", "— | dass | die Diebe des Bildes aus dem Lausanner Museum bald gefunden | werden | —"]
        ]
      }
    ]
  },

  revision: {
    title: "Schlussrevision",
    intro: "Gemischte Fragen zur Sitzung 4.",
    exercises: [
      {
        tag: "Revision 1",
        title: "Richtig oder falsch",
        type: "Auswahl",
        question: "Wähle richtig oder falsch.",
        mode: "select-list",
        options: ["richtig", "falsch"],
        rows: [
          ["Ein Attribut ist ein selbständiges Satzglied.", "falsch"],
          ["Ein Attribut ist Teil eines Satzglieds.", "richtig"],
          ["Attribute können innerhalb von Attributen auftreten.", "richtig"],
          ["Die Satzklammer besteht aus verbalen Teilen.", "richtig"],
          ["Im Vorfeld können mehrere beliebige Satzglieder stehen.", "falsch"],
          ["Das finite Verb steht in V2-Sätzen in der linken Klammer.", "richtig"],
          ["Eingeleitete Nebensätze haben typischerweise Verb-Endstellung.", "richtig"],
          ["V1 kommt nur in Aussagesätzen vor.", "falsch"]
        ]
      },
      {
        tag: "Revision 2",
        title: "Mini-Synthese",
        type: "Schriftliche Antwort",
        question: "Erkläre in 8 bis 10 Zeilen, was du aus Sitzung 4 unbedingt behalten musst.",
        mode: "textarea",
        answer: "Ein Satzglied ist eine Phrase oder Konstituente mit Satzgliedfunktion. Ein Attribut ist Teil eines Satzglieds und bildet zusammen mit seinem Bezugselement eine Konstituente. Attribute können als Adjektiv-, Genitiv-, Präpositionalattribut oder Attributsatz realisiert werden. Sie können auch innerhalb anderer Attribute auftreten. Die Satzklammer besteht aus den verbalen Teilen des Satzes: links steht das finite Verb, rechts der infinite Verbteil oder eine Partikel. Das topologische Satzmodell unterscheidet Vorfeld, linke Klammer, Mittelfeld, rechte Klammer und Nachfeld. Im Deutschen gibt es V1, V2 und V-End. Satztypen und Verbstellung hängen eng zusammen, aber sie entsprechen einander nicht immer eins zu eins.",
        keywords: ["Satzglied", "Attribut", "Adjektiv", "Genitiv", "Präpositionalattribut", "Satzklammer", "finites Verb", "topologische", "Vorfeld", "Mittelfeld", "Nachfeld", "V1", "V2", "V-End", "Satztypen"]
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
    .replace(/[.,;:!?()«»„“"]/g, "")
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

function initVerbHelp() {
  const panel = document.getElementById("verb-panel");
  const list = document.getElementById("verb-list");
  const btn = document.getElementById("toggle-verbs");

  list.innerHTML = verbLexicon.map(([de, fr]) => `<span class="verb-chip">${de} <span>(${fr})</span></span>`).join("");

  btn.addEventListener("click", () => {
    panel.classList.toggle("hidden");
    btn.textContent = panel.classList.contains("hidden") ? "Verben anzeigen" : "Verben ausblenden";
    document.getElementById("intro").classList.add("visible");
    document.querySelectorAll(".page-section").forEach(section => {
      if (section.id !== "intro") section.classList.remove("visible");
    });
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('[data-section="intro"]').classList.add("active");
  });
}

function renderSections() {
  Object.entries(sections).forEach(([id, data]) => {
    const container = document.getElementById(id);
    const intro = document.createElement("article");
    intro.className = "panel";
    intro.innerHTML = `<h2>${escapeHtml(data.title)}</h2><p>${escapeHtml(data.intro)}</p>`;
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

  node.querySelector(".solution-btn").addEventListener("click", () => showSolution(feedback, exercise));

  return node;
}

function renderBody(body, exercise) {
  if (exercise.mode === "textarea") {
    body.innerHTML = `<textarea placeholder="Schreibe deine Antwort hier..."></textarea>`;
  }

  if (exercise.mode === "select-list") {
    exercise.rows.forEach(([prompt], i) => {
      const options = ['<option value="">Auswählen...</option>']
        .concat(exercise.options.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`))
        .join("");
      body.insertAdjacentHTML("beforeend", `
        <div class="item">
          <label>${escapeHtml(prompt)}</label>
          <select data-index="${i}">${options}</select>
        </div>
      `);
    });
  }

  if (exercise.mode === "multi") {
    const optionsHtml = exercise.options.map(option => `
      <label class="option">
        <input type="checkbox" value="${escapeHtml(option)}">
        ${escapeHtml(option)}
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

  if (exercise.mode === "select-list") {
    const selects = [...card.querySelectorAll("select")];
    let correct = 0;
    selects.forEach((select, i) => {
      if (select.value === exercise.rows[i][1]) correct++;
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
  const label = ratio === 1 ? "Richtig" : ratio >= .55 ? "Teilweise richtig" : "Noch einmal bearbeiten";
  const cls = ratio === 1 ? "ok" : ratio >= .55 ? "warn" : "bad";

  feedback.classList.add("show");
  feedback.innerHTML = `
    <p class="${cls}">${label} — ${escapeHtml(result.details)}</p>
    <p>${getExplanation(exercise)}</p>
  `;
}

function getExplanation(exercise) {
  if (exercise.answer) return `Erwartete Lösung: ${escapeHtml(exercise.answer)}`;
  if (exercise.answers) return `Erwartete Antworten: ${exercise.answers.map(escapeHtml).join(", ")}.`;
  if (exercise.rows) return "Klicke auf „Lösung anzeigen“, um alle Antworten zu sehen.";
  return "";
}

function showSolution(feedback, exercise) {
  feedback.classList.add("show");

  if (exercise.answer) {
    feedback.innerHTML = `<p class="ok">Lösung</p><p>${escapeHtml(exercise.answer)}</p>`;
    return;
  }

  if (exercise.answers) {
    feedback.innerHTML = `<p class="ok">Lösung</p><p>${exercise.answers.map(escapeHtml).join(", ")}</p>`;
    return;
  }

  if (exercise.rows) {
    feedback.innerHTML = `<p class="ok">Lösung</p><ul class="solution-list">${
      exercise.rows.map(([q, a]) => `<li><strong>${escapeHtml(q)}</strong> → ${escapeHtml(a)}</li>`).join("")
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

initNavigation();
initVerbHelp();
renderSections();
