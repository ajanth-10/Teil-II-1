const verbLexicon = [
  ["schreiben", "écrire"], ["warten", "attendre"], ["lesen", "lire"], ["vorlesen", "lire à voix haute"],
  ["hoffen", "espérer"], ["wählen", "élire / choisir"], ["versprechen", "promettre"],
  ["gedenken", "commémorer / se souvenir de"], ["schenken", "offrir"], ["sich enthalten", "s’abstenir"],
  ["verzichten", "renoncer"], ["rennen", "courir"], ["nachrennen", "courir après"],
  ["zurückkommen", "revenir"], ["trinken", "boire"], ["sich freuen", "se réjouir"],
  ["fertigmachen", "terminer"], ["sitzen", "être assis"], ["bezichtigen", "accuser"],
  ["geben", "donner"], ["abgeben", "donner / remettre"], ["sich erinnern", "se souvenir"],
  ["machen", "faire"], ["sehen", "voir"], ["scheinen", "sembler / briller"],
  ["stehen", "être debout / se trouver"], ["rechnen", "calculer"], ["arbeiten", "travailler"],
  ["schlafen", "dormir"], ["anlügen", "mentir à"], ["sein", "être"], ["bleiben", "rester"],
  ["werden", "devenir"], ["halten für", "considérer comme"], ["nennen", "nommer / appeler"],
  ["mögen", "aimer"], ["interessieren", "intéresser"], ["bestimmen", "déterminer"],
  ["ermitteln", "identifier"], ["verschieben", "déplacer"], ["pronominalisieren", "pronominaliser"]
];

const sections = {
  satzglied: {
    title: "Satzglied",
    intro: "Ein Satzglied ist eine Konstituente, die erfragbar, pronominalisierbar, verschiebbar und vorfeldfähig ist.",
    exercises: [
      {
        tag: "Vorbereitung 1",
        title: "Satzglied definieren",
        type: "Schriftliche Antwort",
        question: "Was ist ein Satzglied?",
        mode: "textarea",
        answer: "Ein Satzglied ist eine Konstituente, die erfragbar, pronominalisierbar, verschiebbar und vorfeldfähig ist.",
        keywords: ["Konstituente", "erfragbar", "pronominalisierbar", "verschiebbar", "vorfeldfähig"]
      },
      {
        tag: "Vorbereitung 2",
        title: "Funktionen von Satzgliedern",
        type: "Mehrfachauswahl",
        question: "Welche Funktionen können Satzglieder in einem Satz erfüllen?",
        mode: "multi",
        options: ["Subjekt", "Objekt", "Adverbial", "Prädikativ", "Artikel", "Attribut", "Konjunktion"],
        answers: ["Subjekt", "Objekt", "Adverbial", "Prädikativ"]
      },
      {
        tag: "Grundidee",
        title: "Form oder Funktion?",
        type: "Auswahl",
        question: "Bestimme, ob es sich um eine Form oder eine Funktion handelt.",
        mode: "select-list",
        options: ["Form", "Funktion"],
        rows: [
          ["Nominalphrase", "Form"],
          ["Präpositionalphrase", "Form"],
          ["Adjektivphrase", "Form"],
          ["Subjekt", "Funktion"],
          ["Objekt", "Funktion"],
          ["Adverbial", "Funktion"],
          ["Prädikativ", "Funktion"]
        ]
      }
    ]
  },

  subjekt: {
    title: "Subjekt",
    intro: "Das Subjekt wird mit wer? oder was? erfragt, steht meistens im Nominativ und kongruiert mit dem finiten Verb.",
    exercises: [
      {
        tag: "Vorbereitung 3",
        title: "Subjekt ermitteln",
        type: "Schriftliche Antwort",
        question: "Wie kann das Subjekt in einem Satz ermittelt werden?",
        mode: "textarea",
        answer: "Das Subjekt kann mit dem Fragetest und dem Pronominalisierungstest ermittelt werden. Der Fragetest lautet: wer? oder was?",
        keywords: ["Fragetest", "Pronominalisierungstest", "wer", "was"]
      },
      {
        tag: "Vorbereitung 4",
        title: "Morphologische Kriterien",
        type: "Schriftliche Antwort",
        question: "Welche besonderen morphologischen Kriterien muss das Subjekt erfüllen?",
        mode: "textarea",
        answer: "Das Subjekt ist meistens eine Nominalphrase im Nominativ. Es stimmt mit dem finiten Verb in Person und Numerus überein.",
        keywords: ["Nominalphrase", "Nominativ", "finiten Verb", "Person", "Numerus", "überein"]
      },
      {
        tag: "Training",
        title: "Subjekt bestimmen",
        type: "Auswahl",
        question: "Wähle das Subjekt.",
        mode: "select-list",
        options: ["Die junge Autorin", "dem interessierten Publikum", "aus ihrem neuen Werk", "vor"],
        rows: [
          ["Die junge Autorin liest dem interessierten Publikum aus ihrem neuen Werk vor.", "Die junge Autorin"]
        ]
      }
    ]
  },

  objekt: {
    title: "Objektarten",
    intro: "Im Deutschen gibt es Akkusativobjekt, Dativobjekt, Genitivobjekt und Präpositionalobjekt.",
    exercises: [
      {
        tag: "Vorbereitung 5",
        title: "Objektarten nennen",
        type: "Mehrfachauswahl",
        question: "Welche Objektarten gibt es im Deutschen?",
        mode: "multi",
        options: ["Akkusativobjekt", "Dativobjekt", "Genitivobjekt", "Präpositionalobjekt", "Temporalobjekt", "Modalobjekt"],
        answers: ["Akkusativobjekt", "Dativobjekt", "Genitivobjekt", "Präpositionalobjekt"]
      },
      {
        tag: "Vorbereitung 6",
        title: "Valenz und Objektart",
        type: "Schriftliche Antwort",
        question: "Wovon hängt es ab, welche Objektart mit einem Verb kombiniert wird?",
        mode: "textarea",
        answer: "Die Objektart hängt von der Valenz des Verbs ab. Das Vollverb bestimmt die Anzahl der Objekte und die Art der Objekte. Bei Präpositionalobjekten fordert das Verb zusätzlich eine bestimmte Präposition.",
        keywords: ["Valenz", "Verb", "Vollverb", "Anzahl", "Art", "Objekte", "Präposition"]
      },
      {
        tag: "Aufgabe 2",
        title: "Objektarten bestimmen",
        type: "Auswahl",
        question: "Bestimme die Objektart.",
        mode: "select-list",
        options: ["Akkusativobjekt", "Dativobjekt", "Genitivobjekt", "Präpositionalobjekt"],
        rows: [
          ["auf den Sieg der Schweizer Mannschaft — Thomas hofft auf den Sieg der Schweizer Mannschaft.", "Präpositionalobjekt"],
          ["eine Präsidentin — Sie haben eine Präsidentin gewählt.", "Akkusativobjekt"],
          ["seiner Frau — Hans hat seiner Frau ein neues Auto versprochen.", "Dativobjekt"],
          ["ein neues Auto — Hans hat seiner Frau ein neues Auto versprochen.", "Akkusativobjekt"],
          ["der Toten — An Allerheiligen gedenken wir der Toten.", "Genitivobjekt"],
          ["ihrer Mutter — Brigitte schenkt ihrer Mutter einen wunderschönen Blumenstrauss.", "Dativobjekt"],
          ["einen wunderschönen Blumenstrauss — Brigitte schenkt ihrer Mutter einen wunderschönen Blumenstrauss.", "Akkusativobjekt"],
          ["auf den Zug — Herbert wartet ungeduldig am Bahnhof auf den Zug.", "Präpositionalobjekt"],
          ["der Stimme — Die Abgeordneten enthielten sich der Stimme.", "Genitivobjekt"],
          ["auf diese Einladung — Hans verzichtet gern auf diese Einladung.", "Präpositionalobjekt"]
        ]
      },
      {
        tag: "Fragetests",
        title: "Objektart nach Fragewort",
        type: "Auswahl",
        question: "Welcher Fragetest passt?",
        mode: "select-list",
        options: ["wen? / was?", "wem?", "wessen?", "Präposition + Fragewort, z.B. worauf? / auf wen?"],
        rows: [
          ["Akkusativobjekt", "wen? / was?"],
          ["Dativobjekt", "wem?"],
          ["Genitivobjekt", "wessen?"],
          ["Präpositionalobjekt", "Präposition + Fragewort, z.B. worauf? / auf wen?"]
        ]
      }
    ]
  },

  adverbial: {
    title: "Adverbiale",
    intro: "Adverbiale sind meist nicht vom Verb gefordert. Sie liefern zusätzliche Informationen: Ort, Zeit, Art und Weise, Grund.",
    exercises: [
      {
        tag: "Vorbereitung 7",
        title: "Charakteristika der Adverbiale",
        type: "Schriftliche Antwort",
        question: "Was sind die besonderen Charakteristika der Adverbiale?",
        mode: "textarea",
        answer: "Adverbiale werden im Unterschied zu Subjekt und Objekten normalerweise nicht durch das Verb festgelegt. Sie können meist unabhängig vom Verb hinzugefügt oder weggelassen werden.",
        keywords: ["nicht", "Verb", "festgelegt", "unabhängig", "hinzugefügt", "weggelassen"]
      },
      {
        tag: "Vorbereitung 8",
        title: "Funktion der Adverbiale",
        type: "Schriftliche Antwort",
        question: "Welche Funktion erfüllen Adverbiale in einem Satz?",
        mode: "textarea",
        answer: "Adverbiale liefern zusätzliche Informationen, zum Beispiel Angaben zum Ort, zur Zeit, zur Art und Weise oder zum Grund des Geschehens.",
        keywords: ["zusätzliche Informationen", "Ort", "Zeit", "Art und Weise", "Grund"]
      },
      {
        tag: "Vorbereitung 9",
        title: "Adverbialklassen bestimmen",
        type: "Auswahl",
        question: "Bestimme die Adverbialklasse und die passende Frage.",
        mode: "select-list",
        options: ["Lokaladverbial — wo?", "Temporaladverbial — wann?", "Modaladverbial — wie?", "Kausaladverbial — warum?"],
        rows: [
          ["auf dem Sofa — Eva schläft auf dem Sofa.", "Lokaladverbial — wo?"],
          ["Dort — Dort steht Anna.", "Lokaladverbial — wo?"],
          ["richtig — Otto rechnet richtig.", "Modaladverbial — wie?"],
          ["den ganzen Tag — Sie arbeiteten den ganzen Tag.", "Temporaladverbial — wann?"],
          ["Eines Tages — Eines Tages kam sie.", "Temporaladverbial — wann?"],
          ["während er arbeitet — Sie schläft, während er arbeitet.", "Temporaladverbial — wann?"],
          ["weil er sie angelogen hat — Sie ist auf ihn wütend, weil er sie angelogen hat.", "Kausaladverbial — warum?"],
          ["deswegen — Er rennt deswegen aus dem Haus.", "Kausaladverbial — warum?"]
        ]
      }
    ]
  },

  praedikativ: {
    title: "Prädikative",
    intro: "Prädikative treten mit Kopulaverben auf oder beziehen sich auf Subjekt/Objekt. Es gibt Subjektsprädikativ, Objektsprädikativ und freies Prädikativ.",
    exercises: [
      {
        tag: "Vorbereitung 10",
        title: "Prädikative erklären",
        type: "Schriftliche Antwort",
        question: "Mit welchen Elementen treten Prädikative auf? Welche drei Arten von Prädikativen gibt es?",
        mode: "textarea",
        answer: "Prädikative treten oft mit Kopulaverben auf, vor allem mit sein, bleiben und werden. Es gibt Subjektsprädikative, Objektsprädikative und freie Prädikative.",
        keywords: ["Kopulaverben", "sein", "bleiben", "werden", "Subjektsprädikativ", "Objektsprädikativ", "freies Prädikativ"]
      },
      {
        tag: "Vorbereitung 11",
        title: "Prädikativart und Form",
        type: "Auswahl",
        question: "Bestimme Prädikativart und Form.",
        mode: "select-list",
        options: [
          "Subjektsprädikativ — Nominalphrase",
          "Subjektsprädikativ — Adjektivphrase",
          "Subjektsprädikativ — Präpositionalphrase",
          "Subjektsprädikativ — Genitiv-NP",
          "Objektsprädikativ — Präpositionalphrase",
          "Objektsprädikativ — Akkusativ-NP",
          "freies Prädikativ — Adjektivphrase"
        ],
        rows: [
          ["Spitzensportler — Er ist Spitzensportler.", "Subjektsprädikativ — Nominalphrase"],
          ["durstig — Die Kinder sind durstig.", "Subjektsprädikativ — Adjektivphrase"],
          ["für einen guten Lehrer — Die Eltern hielten ihn für einen guten Lehrer.", "Objektsprädikativ — Präpositionalphrase"],
          ["heiss — Sie trinkt ihren Kakao immer heiss.", "freies Prädikativ — Adjektivphrase"],
          ["an der Uni — Die Studierenden bleiben an der Uni.", "Subjektsprädikativ — Präpositionalphrase"],
          ["blutig — Ich mag das Steak am liebsten blutig.", "freies Prädikativ — Adjektivphrase"],
          ["Bärchen — Sie nennt ihn zärtlich „Bärchen“.", "Objektsprädikativ — Akkusativ-NP"],
          ["des Wahnsinns — Er war des Wahnsinns.", "Subjektsprädikativ — Genitiv-NP"]
        ]
      },
      {
        tag: "Aufgabe 3",
        title: "Freies Prädikativ oder Modaladverbial?",
        type: "Auswahl",
        question: "Bestimme die Funktion des markierten Elements.",
        mode: "select-list",
        options: ["freies Prädikativ", "Modaladverbial", "beides möglich"],
        rows: [
          ["eilig — Wir rennen eilig dem Zug nach.", "Modaladverbial"],
          ["erschöpft — Hans kam erschöpft vom Joggen zurück.", "freies Prädikativ"],
          ["heiss — Ich trinke meinen Kaffee am liebsten heiss.", "freies Prädikativ"],
          ["riesig — Viele Sportler freuen sich riesig über ihre Medaillen.", "Modaladverbial"],
          ["hastig — Wir machen hastig unsere Aufgaben fertig.", "Modaladverbial"],
          ["entspannt — Wir sitzen entspannt auf dem Sofa.", "beides möglich"]
        ]
      }
    ]
  },

  valenz: {
    title: "Valenz",
    intro: "Valenz bedeutet: Ein Verb eröffnet Leerstellen für eine bestimmte Zahl und Art von Satzgliedern.",
    exercises: [
      {
        tag: "Vorbereitung 12",
        title: "Valenz erklären",
        type: "Schriftliche Antwort",
        question: "Was meint man, wenn man von der Valenz von Verben spricht?",
        mode: "textarea",
        answer: "Mit Valenz meint man die Eigenschaft eines Verbs, bestimmte Satzglieder zu fordern. Das Verb stellt Leerstellen für eine bestimmte Zahl und Art von Ergänzungen bereit.",
        keywords: ["Verb", "Satzglieder", "fordern", "Leerstellen", "Zahl", "Art", "Ergänzungen"]
      },
      {
        tag: "Valenztraining",
        title: "Leerstellen erkennen",
        type: "Auswahl",
        question: "Welche Fragen verlangt das Verb im Beispielsatz?",
        mode: "select-list",
        options: ["Wer? Was?", "Wer? Wem? Was?", "Wer? Präposition + wen/was?", "Wer? Wessen?"],
        rows: [
          ["Sie wählt eine Präsidentin.", "Wer? Was?"],
          ["Brigitte schenkt ihrer Mutter einen Blumenstrauss.", "Wer? Wem? Was?"],
          ["Thomas hofft auf den Sieg.", "Wer? Präposition + wen/was?"],
          ["Wir gedenken der Toten.", "Wer? Wessen?"]
        ]
      }
    ]
  },

  angaben: {
    title: "Ergänzungen und freie Angaben",
    intro: "Ergänzungen werden vom Verb verlangt. Freie Angaben beschreiben Umstände und sind in der Regel weglassbar.",
    exercises: [
      {
        tag: "Vorbereitung 13",
        title: "Unterschied erklären",
        type: "Schriftliche Antwort",
        question: "Was ist der Unterschied zwischen Ergänzungen und freien Angaben?",
        mode: "textarea",
        answer: "Ergänzungen sind Satzelemente, die vom Verb verlangt werden. Dazu gehören meistens Subjekt und Objekte. Freie Angaben liefern nähere Informationen zu Zeit, Ort, Art und Weise oder Grund. Sie können unabhängig vom Verb hinzugefügt werden und sind in der Regel weglassbar.",
        keywords: ["Ergänzungen", "Verb", "verlangt", "Subjekt", "Objekte", "freie Angaben", "Zeit", "Ort", "Art und Weise", "Grund", "weglassbar"]
      },
      {
        tag: "Aufgabe 4",
        title: "Ergänzungen und freie Angaben bestimmen",
        type: "Auswahl",
        question: "Bestimme die Funktion des markierten Elements.",
        mode: "select-list",
        options: [
          "Nom.erg.", "Akk.erg.", "Dat.erg.", "Gen.erg.", "Präp.erg.",
          "freie Angabe — lokal", "freie Angabe — temporal", "freie Angabe — modal"
        ],
        rows: [
          ["Im Hotel — Im Hotel bezichtigte die Polizei gestern einen Mann des Mordes.", "freie Angabe — lokal"],
          ["die Polizei — Im Hotel bezichtigte die Polizei gestern einen Mann des Mordes.", "Nom.erg."],
          ["gestern — Im Hotel bezichtigte die Polizei gestern einen Mann des Mordes.", "freie Angabe — temporal"],
          ["einen Mann — Im Hotel bezichtigte die Polizei gestern einen Mann des Mordes.", "Akk.erg."],
          ["des Mordes — Im Hotel bezichtigte die Polizei gestern einen Mann des Mordes.", "Gen.erg."],
          ["Am Bahnhof — Am Bahnhof wartet die Reisegruppe ungeduldig auf den Reiseleiter.", "freie Angabe — lokal"],
          ["die Reisegruppe — Am Bahnhof wartet die Reisegruppe ungeduldig auf den Reiseleiter.", "Nom.erg."],
          ["ungeduldig — Am Bahnhof wartet die Reisegruppe ungeduldig auf den Reiseleiter.", "freie Angabe — modal"],
          ["auf den Reiseleiter — Am Bahnhof wartet die Reisegruppe ungeduldig auf den Reiseleiter.", "Präp.erg."],
          ["Sonntags — Sonntags gibt Sabine ihrem Bruder gern ein Stück Kuchen ab.", "freie Angabe — temporal"],
          ["Sabine — Sonntags gibt Sabine ihrem Bruder gern ein Stück Kuchen ab.", "Nom.erg."],
          ["ihrem Bruder — Sonntags gibt Sabine ihrem Bruder gern ein Stück Kuchen ab.", "Dat.erg."],
          ["gern — Sonntags gibt Sabine ihrem Bruder gern ein Stück Kuchen ab.", "freie Angabe — modal"],
          ["ein Stück Kuchen — Sonntags gibt Sabine ihrem Bruder gern ein Stück Kuchen ab.", "Akk.erg."],
          ["Jeden Morgen — Jeden Morgen trinkt Frau Müller hastig ihren Kaffee.", "freie Angabe — temporal"],
          ["Frau Müller — Jeden Morgen trinkt Frau Müller hastig ihren Kaffee.", "Nom.erg."],
          ["hastig — Jeden Morgen trinkt Frau Müller hastig ihren Kaffee.", "freie Angabe — modal"],
          ["ihren Kaffee — Jeden Morgen trinkt Frau Müller hastig ihren Kaffee.", "Akk.erg."],
          ["Manchmal — Manchmal erinnerten wir uns unserer Schulzeit.", "freie Angabe — temporal"],
          ["wir — Manchmal erinnerten wir uns unserer Schulzeit.", "Nom.erg."],
          ["uns — Manchmal erinnerten wir uns unserer Schulzeit.", "Akk.erg."],
          ["unserer Schulzeit — Manchmal erinnerten wir uns unserer Schulzeit.", "Gen.erg."],
          ["Nach dem Mittagessen — Nach dem Mittagessen macht der Opa einen langen Spaziergang am See.", "freie Angabe — temporal"],
          ["der Opa — Nach dem Mittagessen macht der Opa einen langen Spaziergang am See.", "Nom.erg."],
          ["einen langen Spaziergang — Nach dem Mittagessen macht der Opa einen langen Spaziergang am See.", "Akk.erg."],
          ["am See — Nach dem Mittagessen macht der Opa einen langen Spaziergang am See.", "freie Angabe — lokal"]
        ]
      }
    ]
  },

  attribute: {
    title: "Attribute",
    intro: "Attribute sind keine Satzglieder, sondern Teile von Satzgliedern. Sie bilden mit ihrem Bezugselement eine Konstituente.",
    exercises: [
      {
        tag: "Vorbereitung 14",
        title: "Attribut erklären",
        type: "Schriftliche Antwort",
        question: "Was ist ein Attribut?",
        mode: "textarea",
        answer: "Ein Attribut ist ein Teil eines Satzgliedes. Es wird auch Gliedteil genannt. Ein Attribut bildet zusammen mit seinem Bezugselement eine Konstituente.",
        keywords: ["Teil", "Satzglied", "Gliedteil", "Bezugselement", "Konstituente"]
      },
      {
        tag: "Vorbereitung 15",
        title: "Formen von Attributen",
        type: "Auswahl",
        question: "Bestimme die Form des Attributs.",
        mode: "select-list",
        options: ["Adjektiv-Attribut", "Attributsatz", "PP-Attribut", "Genitiv-Attribut"],
        rows: [
          ["tapfere — Das tapfere Schneiderlein interessiert mich nicht.", "Adjektiv-Attribut"],
          ["das tapfer war — Das Schneiderlein, das tapfer war, …", "Attributsatz"],
          ["aus dem Märchen — Das Schneiderlein aus dem Märchen …", "PP-Attribut"],
          ["des Schneiderleins — Die Schere des Schneiderleins …", "Genitiv-Attribut"]
        ]
      }
    ]
  },

  konstituenten: {
    title: "Konstituentenstruktur",
    intro: "Konstituententests zeigen, welche Einheiten Satzglieder sind. Nicht jede Konstituente ist automatisch ein Satzglied.",
    exercises: [
      {
        tag: "Aufgabe 1a",
        title: "Konstituenten klammern",
        type: "Auswahl",
        question: "Welche Klammerung passt zum Satz?",
        mode: "select-list",
        options: [
          "(Die (junge) Autorin) (liest (dem (interessierten) Publikum) (aus (ihrem (neuen) Werk)) vor).",
          "(Die junge) (Autorin liest) (dem interessierten) (Publikum aus) ihrem neuen Werk vor.",
          "Die (junge Autorin liest dem) interessierten Publikum aus ihrem neuen Werk vor."
        ],
        rows: [
          ["Die junge Autorin liest dem interessierten Publikum aus ihrem neuen Werk vor.", "(Die (junge) Autorin) (liest (dem (interessierten) Publikum) (aus (ihrem (neuen) Werk)) vor)."]
        ]
      },
      {
        tag: "Aufgabe 1b",
        title: "Tests zu „dem interessierten Publikum“",
        type: "Zuordnung",
        question: "Ordne den passenden Konstituententest zu.",
        mode: "select-list",
        options: ["Fragetest", "Pronominalisierungstest", "Vorfeldtest", "Verschiebetest"],
        rows: [
          ["Wem liest die junge Autorin aus ihrem neuen Werk vor?", "Fragetest"],
          ["Die junge Autorin liest ihm aus ihrem neuen Werk vor.", "Pronominalisierungstest"],
          ["Dem interessierten Publikum liest die junge Autorin aus ihrem neuen Werk vor.", "Vorfeldtest"],
          ["Die junge Autorin liest aus ihrem neuen Werk dem interessierten Publikum vor.", "Verschiebetest"]
        ]
      },
      {
        tag: "Aufgabe 1c",
        title: "Tests zu „ihrem neuen Werk“",
        type: "Auswahl",
        question: "Ist „ihrem neuen Werk“ ein Satzglied?",
        mode: "select-list",
        options: ["Ja, alle Tests funktionieren.", "Nein, nicht alle Tests funktionieren."],
        rows: [
          ["ihrem neuen Werk", "Nein, nicht alle Tests funktionieren."]
        ]
      },
      {
        tag: "Aufgabe 1d",
        title: "Tests zu „aus ihrem neuen Werk“",
        type: "Zuordnung",
        question: "Ordne den passenden Konstituententest zu.",
        mode: "select-list",
        options: ["Fragetest", "Pronominalisierungstest", "Vorfeldtest", "Verschiebetest"],
        rows: [
          ["Woraus liest die junge Autorin dem interessierten Publikum vor?", "Fragetest"],
          ["Die junge Autorin liest dem interessierten Publikum daraus vor.", "Pronominalisierungstest"],
          ["Aus ihrem neuen Werk liest die junge Autorin dem interessierten Publikum vor.", "Vorfeldtest"],
          ["Die junge Autorin liest aus ihrem neuen Werk dem interessierten Publikum vor.", "Verschiebetest"]
        ]
      },
      {
        tag: "Aufgabe 1e",
        title: "Satzglieder im Beispielsatz",
        type: "Mehrfachauswahl",
        question: "Welche drei Einheiten sind Satzglieder im Satz „Die junge Autorin liest dem interessierten Publikum aus ihrem neuen Werk vor“?",
        mode: "multi",
        options: ["die junge Autorin", "dem interessierten Publikum", "aus ihrem neuen Werk", "ihrem neuen Werk", "neuen Werk", "junge"],
        answers: ["die junge Autorin", "dem interessierten Publikum", "aus ihrem neuen Werk"]
      }
    ]
  },

  ambiguitaet: {
    title: "Strukturelle Ambiguität",
    intro: "Ein Satz kann mehrere Konstituentenstrukturen haben. Dann entstehen verschiedene Lesarten.",
    exercises: [
      {
        tag: "Aufgabe 5",
        title: "Mehrdeutige Konstituentenstruktur",
        type: "Auswahl",
        question: "Welche zwei Lesarten sind beim Satz möglich: „Der Wanderer sieht die Bergsteiger mit dem Fernrohr“?",
        mode: "select-list",
        options: [
          "1: Der Wanderer benutzt das Fernrohr. 2: Die Bergsteiger haben ein Fernrohr.",
          "1: Der Wanderer ist ein Fernrohr. 2: Die Bergsteiger sehen den Wanderer.",
          "Es gibt keine strukturelle Ambiguität."
        ],
        rows: [
          ["Der Wanderer sieht die Bergsteiger mit dem Fernrohr.", "1: Der Wanderer benutzt das Fernrohr. 2: Die Bergsteiger haben ein Fernrohr."]
        ]
      },
      {
        tag: "Aufgabe 5b",
        title: "Klammerungen",
        type: "Auswahl",
        question: "Welche Klammerung zeigt die Lesart „mit dem Fernrohr“ als Instrument des Sehens?",
        mode: "select-list",
        options: [
          "(Der Wanderer) (sieht (die Bergsteiger) (mit dem Fernrohr)).",
          "(Der Wanderer) (sieht (die Bergsteiger mit dem Fernrohr))."
        ],
        rows: [
          ["Instrument-Lesart", "(Der Wanderer) (sieht (die Bergsteiger) (mit dem Fernrohr))."]
        ]
      },
      {
        tag: "Aufgabe 5c",
        title: "Klammerungen",
        type: "Auswahl",
        question: "Welche Klammerung zeigt die Lesart „die Bergsteiger mit dem Fernrohr“ als zusammengehörige NP?",
        mode: "select-list",
        options: [
          "(Der Wanderer) (sieht (die Bergsteiger) (mit dem Fernrohr)).",
          "(Der Wanderer) (sieht (die Bergsteiger mit dem Fernrohr))."
        ],
        rows: [
          ["NP-Lesart", "(Der Wanderer) (sieht (die Bergsteiger mit dem Fernrohr))."]
        ]
      }
    ]
  },

  revision: {
    title: "Schlussrevision",
    intro: "Gemischte Fragen zur Sitzung 3.",
    exercises: [
      {
        tag: "Revision 1",
        title: "Richtig oder falsch",
        type: "Auswahl",
        question: "Wähle richtig oder falsch.",
        mode: "select-list",
        options: ["richtig", "falsch"],
        rows: [
          ["Ein Satzglied ist immer eine Konstituente.", "richtig"],
          ["Jede Konstituente ist automatisch ein Satzglied.", "falsch"],
          ["Subjekt, Objekt, Adverbial und Prädikativ sind Funktionen.", "richtig"],
          ["NP, PP, VP, AdjP und AdvP sind Funktionen.", "falsch"],
          ["Das Akkusativobjekt wird mit wem? erfragt.", "falsch"],
          ["Das Präpositionalobjekt wird mit einer Präposition erfragt.", "richtig"],
          ["Freie Angaben sind normalerweise weglassbar.", "richtig"],
          ["Attribute sind selbständige Satzglieder.", "falsch"]
        ]
      },
      {
        tag: "Revision 2",
        title: "Mini-Synthese",
        type: "Schriftliche Antwort",
        question: "Erkläre in 8 bis 10 Zeilen, was du aus Sitzung 3 unbedingt behalten musst.",
        mode: "textarea",
        answer: "Satzglieder sind Konstituenten, die erfragbar, pronominalisierbar, verschiebbar und vorfeldfähig sind. Satzglieder übernehmen Funktionen: Subjekt, Objekt, Adverbial oder Prädikativ. Das Subjekt steht meistens im Nominativ und kongruiert mit dem finiten Verb. Objekte hängen von der Valenz des Verbs ab. Es gibt Akkusativobjekte, Dativobjekte, Genitivobjekte und Präpositionalobjekte. Adverbiale liefern Zusatzinformationen zu Ort, Zeit, Art und Weise oder Grund. Prädikative können Subjektsprädikative, Objektsprädikative oder freie Prädikative sein. Ergänzungen werden vom Verb verlangt, freie Angaben sind meist weglassbar. Attribute sind Teile von Satzgliedern. Ein Satz kann strukturell mehrdeutig sein.",
        keywords: ["Satzglieder", "Konstituenten", "Subjekt", "Objekt", "Adverbial", "Prädikativ", "Nominativ", "finiten Verb", "Valenz", "Ergänzungen", "freie Angaben", "Attribute", "strukturell"]
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
