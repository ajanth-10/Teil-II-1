const verbLexicon = [
  ["gehen", "aller"], ["schwimmen", "nager"], ["kommen", "venir"], ["wollen", "vouloir"],
  ["vergessen", "oublier"], ["teilnehmen", "participer"], ["annehmen", "accepter"],
  ["sich erinnern", "se souvenir"], ["hinauswollen", "vouloir en venir à"],
  ["verpassen", "rater"], ["wohnen", "habiter"], ["vermissen", "manquer / regretter"],
  ["sitzen", "être assis"], ["klettern", "grimper"], ["kochen", "cuisiner"],
  ["decken", "mettre / couvrir"], ["abwaschen", "faire la vaisselle"],
  ["glauben", "croire"], ["wissen", "savoir"], ["aufräumen", "ranger"],
  ["gehen lassen / weggehen", "partir"], ["verletzen", "blesser"],
  ["stören", "déranger"], ["überlegen", "réfléchir"], ["gehören", "appartenir"],
  ["scheinen", "briller / sembler"], ["geben", "donner / il y a"],
  ["stehen", "être debout / se trouver"], ["werden", "devenir"],
  ["sich befinden", "se trouver"], ["essen", "manger"], ["warten", "attendre"],
  ["erinnern", "rappeler"], ["schenken", "offrir"], ["widmen", "dédier"],
  ["gedenken", "commémorer / se souvenir de"], ["markieren", "marquer"],
  ["bestimmen", "déterminer"], ["unterstreichen", "souligner"], ["einklammern", "mettre entre parenthèses"]
];

const sections = {
  adverbien: {
    title: "Adverbien",
    intro: "Adverbien sind unflektierbar. Sie können alleine an der ersten Position vor dem finiten Verb in Aussagesätzen stehen.",
    exercises: [
      {
        tag: "Vorbereitung 1a",
        title: "Eigenschaften von Adverbien",
        type: "Schriftliche Antwort",
        question: "Was ist die besondere Stellungseigenschaft von Adverbien? Welche morphologische Eigenschaft haben sie?",
        mode: "textarea",
        answer: "Adverbien können allein an der ersten Position im Satz vor dem finiten Verb stehen. Morphologisch sind sie nicht flektierbar bzw. nicht deklinierbar.",
        keywords: ["allein", "erste Position", "finiten Verb", "nicht flektierbar", "nicht deklinierbar"]
      },
      {
        tag: "Vorbereitung 1b",
        title: "Subklassen von Adverbien",
        type: "Zuordnung",
        question: "Ordne die Beispiele der richtigen Subklasse zu.",
        mode: "select-list",
        options: ["temporales Adverb", "lokales Adverb", "modales Adverb", "kausales Adverb"],
        rows: [
          ["heute", "temporales Adverb"],
          ["gestern", "temporales Adverb"],
          ["dort", "lokales Adverb"],
          ["hier", "lokales Adverb"],
          ["eilends", "modales Adverb"],
          ["gerne", "modales Adverb"],
          ["deswegen", "kausales Adverb"],
          ["umständehalber", "kausales Adverb"]
        ]
      },
      {
        tag: "Vorbereitung 1c",
        title: "Adverbien bestimmen",
        type: "Auswahl",
        question: "Bestimme die Subklasse des unterstrichenen Adverbs.",
        mode: "select-list",
        options: ["temporales Adverb", "lokales Adverb", "modales Adverb", "kausales Adverb"],
        rows: [
          ["Damals — Damals ging er oft in die Kirche.", "temporales Adverb"],
          ["Oben — Oben ist der Himmel.", "lokales Adverb"],
          ["Deswegen — Deswegen bin ich nicht zur Party gekommen.", "kausales Adverb"],
          ["Gerne — Gerne komme ich mit.", "modales Adverb"],
          ["Manchmal — Manchmal habe ich Heimweh.", "temporales Adverb"],
          ["Flugs — Flugs sprang er davon.", "modales Adverb"],
          ["Heimlich — Heimlich entfernte er das Buch.", "modales Adverb"],
          ["Umständehalber — Umständehalber konnte sie nicht ins Kino kommen.", "kausales Adverb"]
        ]
      },
      {
        tag: "Vorbereitung 2",
        title: "Satzadverb, Konjunktionaladverb, Pronominaladverb",
        type: "Auswahl",
        question: "Bestimme die Art des Adverbs.",
        mode: "select-list",
        options: ["Satzadverb", "Konjunktionaladverb", "Pronominaladverb"],
        rows: [
          ["Trotzdem — Trotzdem ist er gekommen.", "Konjunktionaladverb"],
          ["Darauf — Darauf trinken wir.", "Pronominaladverb"],
          ["Hoffentlich — Hoffentlich kommt er noch.", "Satzadverb"],
          ["Darin — Darin verbirgt sich ein Geheimnis.", "Pronominaladverb"],
          ["Vielleicht — Vielleicht hat er unsere Verabredung vergessen.", "Satzadverb"],
          ["Infolgedessen — Infolgedessen kann er nicht schuldig sein.", "Konjunktionaladverb"],
          ["worauf — Ich weiss nicht, worauf du hinaus willst.", "Pronominaladverb"],
          ["Glücklicherweise — Glücklicherweise habe ich Ferien machen können.", "Satzadverb"],
          ["Deshalb — Deshalb vertraue ich ihm.", "Konjunktionaladverb"]
        ]
      },
      {
        tag: "Aufgabe 1",
        title: "Adverbien — komplette Kursübung",
        type: "Auswahl",
        question: "Bestimme, um welche Art von Adverb es sich handelt.",
        mode: "select-list",
        options: ["temporales Adverb", "lokales Adverb", "kausales Adverb", "modales Adverb", "Satzadverb", "Konjunktionaladverb", "Pronominaladverb"],
        rows: [
          ["Hoffentlich — Hoffentlich hat sie unser Treffen nicht vergessen.", "Satzadverb"],
          ["Damals — Damals ging es mir sehr schlecht.", "temporales Adverb"],
          ["Deshalb — Deshalb kann er heute nicht am Kurs teilnehmen.", "Konjunktionaladverb"],
          ["gerne — Ich nehme ihren Vorschlag gerne an.", "modales Adverb"],
          ["Daher — Daher kann er sich nicht mehr erinnern.", "Konjunktionaladverb"],
          ["worauf — Ich weiss nicht, worauf du hinauswillst.", "Pronominaladverb"],
          ["deshalb — Er hat deshalb seinen Zug verpasst.", "Konjunktionaladverb"],
          ["oben/unten — Der Himmel ist oben, die Erde ist unten.", "lokales Adverb"],
          ["Eilends — Eilends rannte er hinaus.", "modales Adverb"],
          ["Hier — Hier habe ich damals gewohnt.", "lokales Adverb"],
          ["Hieran — Hieran erinnere ich mich gern.", "Pronominaladverb"],
          ["manchmal — Er hatte manchmal noch Sehnsucht nach Berlin.", "temporales Adverb"],
          ["vielleicht — Er kommt vielleicht ja doch noch.", "Satzadverb"],
          ["Trotzdem — Trotzdem vermisse ich ihn noch sehr.", "Konjunktionaladverb"]
        ]
      }
    ]
  },

  adpositionen: {
    title: "Adpositionen",
    intro: "Adposition ist ein Oberbegriff. Im Kurs wird oft einfach Präposition gesagt. Entscheidend ist die Stellung zur Ergänzung und die Kasusrektion.",
    exercises: [
      {
        tag: "Vorbereitung 3a",
        title: "Definition",
        type: "Schriftliche Antwort",
        question: "Was ist eine Adposition?",
        mode: "textarea",
        answer: "Adposition ist ein anderer Ausdruck bzw. ein Oberbegriff für Präpositionen und präpositionsähnliche Elemente. Sie können vor, nach, vor und nach oder vor/nach einem Substantiv stehen.",
        keywords: ["Präposition", "Oberbegriff", "vor", "nach", "Substantiv"]
      },
      {
        tag: "Vorbereitung 3b",
        title: "Arten von Adpositionen",
        type: "Auswahl",
        question: "Bestimme die Art der Adposition.",
        mode: "select-list",
        options: ["Präposition", "Postposition", "Zirkumposition", "Ambiposition"],
        rows: [
          ["auf der Strasse", "Präposition"],
          ["dem Abkommen zuwider", "Postposition"],
          ["um der Innovation willen", "Zirkumposition"],
          ["wegen der Kinder / der Kinder wegen", "Ambiposition"],
          ["meiner Meinung nach", "Ambiposition"],
          ["der Einfachheit halber", "Postposition"]
        ]
      },
      {
        tag: "Vorbereitung 3c",
        title: "Kasusschwankungen",
        type: "Schriftliche Antwort",
        question: "Bei welchen Adpositionen treten Kasusschwankungen auf? Zwischen welchen Kasus ist dies der Fall?",
        mode: "textarea",
        answer: "Kasusschwankungen zwischen Dativ und Akkusativ treten bei den lokalen Wechselpräpositionen auf: an, auf, in, neben, hinter, vor, unter, über. Dativ bezeichnet einen Ort, Akkusativ eine Richtung. Schwankungen zwischen Dativ und Genitiv gibt es zum Beispiel bei trotz, wegen, statt, während, längs, mittels und laut. Hier ist der Genitiv schriftsprachlich, der Dativ eher umgangssprachlich.",
        keywords: ["Dativ", "Akkusativ", "Genitiv", "Wechselpräpositionen", "Ort", "Richtung", "wegen", "trotz"]
      },
      {
        tag: "Mini-Training",
        title: "Ort oder Richtung?",
        type: "Auswahl",
        question: "Wähle den passenden Kasus.",
        mode: "select-list",
        options: ["Dativ = Ort", "Akkusativ = Richtung"],
        rows: [
          ["Der Junge sitzt auf dem Baum.", "Dativ = Ort"],
          ["Der Junge klettert auf den Baum.", "Akkusativ = Richtung"],
          ["Das Buch liegt in der Tasche.", "Dativ = Ort"],
          ["Ich lege das Buch in die Tasche.", "Akkusativ = Richtung"]
        ]
      }
    ]
  },

  konjunktionen: {
    title: "Konjunktionen",
    intro: "Konjunktionen verbinden Sätze oder Satzteile. Koordinierende Konjunktionen verbinden Gleichrangiges; subordinierende Konjunktionen leiten Nebensätze ein.",
    exercises: [
      {
        tag: "Vorbereitung 4a",
        title: "Funktion",
        type: "Schriftliche Antwort",
        question: "Welche Funktion haben Konjunktionen? Wodurch unterscheiden sich koordinierende und subordinierende Konjunktionen?",
        mode: "textarea",
        answer: "Konjunktionen verbinden Sätze oder Satzteile. Koordinierende Konjunktionen verbinden gleichrangige Sätze oder Satzteile. Subordinierende Konjunktionen leiten untergeordnete Sätze ein. In diesen Nebensätzen steht das finite Verb am Ende.",
        keywords: ["verbinden", "gleichrangig", "untergeordnet", "Nebensatz", "finites Verb", "Ende"]
      },
      {
        tag: "Vorbereitung 4b",
        title: "Konjunktionen bestimmen",
        type: "Auswahl",
        question: "Bestimme die Art der Konjunktion.",
        mode: "select-list",
        options: ["koordinierende Konjunktion", "subordinierende Konjunktion"],
        rows: [
          ["und — Ich habe gekocht und er hat den Tisch gedeckt.", "koordinierende Konjunktion"],
          ["und — Ines und Hans haben dann abgewaschen.", "koordinierende Konjunktion"],
          ["dass — Ich glaube, dass sie Recht hat.", "subordinierende Konjunktion"],
          ["denn — Sie ist unglücklich, denn ihr Hund ist gestorben.", "koordinierende Konjunktion"],
          ["aber — Ich habe den Termin vergessen, aber das ist nicht schlimm.", "koordinierende Konjunktion"],
          ["ob — Udo weiss noch nicht, ob er kommen kann.", "subordinierende Konjunktion"],
          ["oder — Martin oder Markus sollen den Tisch abräumen.", "koordinierende Konjunktion"],
          ["Obwohl — Obwohl Anna schläft, spielt Otto Trompete.", "subordinierende Konjunktion"],
          ["nachdem — Ich habe das Wohnzimmer aufgeräumt, nachdem alle Gäste gegangen waren.", "subordinierende Konjunktion"]
        ]
      }
    ]
  },

  partikeln: {
    title: "Partikeln",
    intro: "Partikeln sind unflektierbar, nicht vorfeldfähig, regieren keinen Kasus und haben keine verknüpfende Funktion.",
    exercises: [
      {
        tag: "Vorbereitung 5a",
        title: "Partikeln erkennen",
        type: "Schriftliche Antwort",
        question: "Was unterscheidet Partikeln von den übrigen Wortarten?",
        mode: "textarea",
        answer: "Partikeln sind unflektierbare Wörter. Sie können nicht allein die erste Position vor dem finiten Verb in Aussagesätzen belegen. Sie können keinen Kasus regieren und haben keine verknüpfende Funktion.",
        keywords: ["unflektierbar", "nicht allein", "erste Position", "finiten Verb", "keinen Kasus", "keine verknüpfende Funktion"]
      },
      {
        tag: "Vorbereitung 5b",
        title: "Arten von Partikeln",
        type: "Mehrfachauswahl",
        question: "Kreuze die Arten von Partikeln an.",
        mode: "multi",
        options: ["Modalpartikel", "Fokuspartikel", "Steigerungspartikel", "Antwortpartikel", "Personalpronomen", "Kopulaverb"],
        answers: ["Modalpartikel", "Fokuspartikel", "Steigerungspartikel", "Antwortpartikel"]
      },
      {
        tag: "Vorbereitung 5c",
        title: "Partikeln bestimmen",
        type: "Auswahl",
        question: "Bestimme die Partikeln oder Interjektionen.",
        mode: "select-list",
        options: ["Modalpartikel", "Steigerungspartikel", "Fokuspartikel", "Antwortpartikel", "Gesprächspartikel / Interjektion"],
        rows: [
          ["bloss — Geh bloss nicht weg.", "Modalpartikel"],
          ["ziemlich — Sie ist ziemlich intelligent, oder?", "Steigerungspartikel"],
          ["oder — Sie ist ziemlich intelligent, oder?", "Gesprächspartikel / Interjektion"],
          ["sogar — Sogar Sabine war auf der Party.", "Fokuspartikel"],
          ["Mmh — Mmh, das riecht aber gut.", "Gesprächspartikel / Interjektion"],
          ["Ja — Ja, ich habe die Post geholt.", "Antwortpartikel"],
          ["doch — Ich habe doch nur gelacht.", "Modalpartikel"],
          ["nur — Ich habe doch nur gelacht.", "Fokuspartikel"],
          ["ruhig — Bleib ruhig zuhause.", "Modalpartikel"],
          ["Brr — Brr, ist das kalt.", "Gesprächspartikel / Interjektion"],
          ["Aua — Aua, das tat sehr weh.", "Gesprächspartikel / Interjektion"],
          ["sehr — Aua, das tat sehr weh.", "Steigerungspartikel"],
          ["bloss — Verletz dich bloss nicht.", "Modalpartikel"],
          ["einfach — Sie hat einfach keine Lust.", "Modalpartikel"]
        ]
      },
      {
        tag: "Aufgabe 2",
        title: "Partikeln — komplette Kursübung",
        type: "Auswahl",
        question: "Bestimme, um welche Art von Partikel es sich handelt.",
        mode: "select-list",
        options: ["Modalpartikel", "Steigerungspartikel", "Gesprächspartikel", "Fokuspartikel", "Antwortpartikel"],
        rows: [
          ["Sogar — Sogar Edgar hat die Aufgabe verstanden.", "Fokuspartikel"],
          ["bloss — Lass ihn bloss nicht weggehen.", "Modalpartikel"],
          ["ziemlich — Sie ist ziemlich gestresst.", "Steigerungspartikel"],
          ["Nein — Nein, ich habe deine Brille nicht gesehen.", "Antwortpartikel"],
          ["doch — Ich habe doch nur Spass gemacht.", "Modalpartikel"],
          ["nur — Ich habe doch nur Spass gemacht.", "Fokuspartikel"],
          ["ruhig — Geh ruhig zu dieser Party.", "Modalpartikel"],
          ["Brr — Brr, ist dieser Wind kalt.", "Gesprächspartikel"],
          ["sehr — Das hat sie sehr verletzt.", "Steigerungspartikel"],
          ["bloss — Stör ihn bloss nicht.", "Modalpartikel"],
          ["einfach — Er hatte einfach keinen Spass daran.", "Modalpartikel"],
          ["Mmh — Mmh, das muss ich mir noch überlegen.", "Gesprächspartikel"]
        ]
      }
    ]
  },

  phrasen: {
    title: "Phrasen",
    intro: "Phrasen sind syntaktisch eng zusammengehörige Wortgruppen. Der Kopf bestimmt den Phrasentyp.",
    exercises: [
      {
        tag: "Vorbereitung 6a-c",
        title: "Phrasen definieren",
        type: "Schriftliche Antwort",
        question: "Was ist eine Phrase? Worin unterscheiden sich Phrasentypen? Welche Phrasentypen gibt es?",
        mode: "textarea",
        answer: "Eine Phrase ist eine Gruppe von Wörtern, die syntaktisch eng zusammengehören. Die verschiedenen Phrasentypen unterscheiden sich nach ihrem Kopf bzw. Kern. Es gibt Nominalphrasen, Präpositionalphrasen, Verbalphrasen, Adjektivphrasen und Adverbphrasen.",
        keywords: ["Gruppe von Wörtern", "syntaktisch", "Kopf", "Kern", "Nominalphrase", "Präpositionalphrase", "Verbalphrase", "Adjektivphrase", "Adverbphrase"]
      },
      {
        tag: "Phrasentypen",
        title: "Phrasentyp nach Kopf erkennen",
        type: "Auswahl",
        question: "Welcher Phrasentyp liegt vor?",
        mode: "select-list",
        options: ["NP", "PP", "VP", "AdjP", "AdvP"],
        rows: [
          ["der kleine Hund", "NP"],
          ["auf der Strasse", "PP"],
          ["sehr dick", "AdjP"],
          ["ganz hinten", "AdvP"],
          ["isst einen Apfel", "VP"],
          ["ein guter Tennisspieler", "NP"]
        ]
      },
      {
        tag: "Vorbereitung 6d",
        title: "Phrasen in Sätzen bestimmen",
        type: "Auswahl",
        question: "Bestimme den Phrasentyp der eingeklammerten Einheit.",
        mode: "select-list",
        options: ["NP", "PP", "AdjP", "AdvP"],
        rows: [
          ["(Die Katze) gehört meiner Schwester.", "NP"],
          ["Die Katze gehört (meiner Schwester).", "NP"],
          ["(Das Buch) ist sehr dick.", "NP"],
          ["Das Buch ist (sehr dick).", "AdjP"],
          ["(Am Himmel) scheint die Sonne.", "PP"],
          ["Am Himmel scheint (die Sonne).", "NP"],
          ["(Dort oben) gibt es kein Restaurant.", "AdvP"],
          ["Dort oben gibt (es) kein Restaurant.", "NP"],
          ["Dort oben gibt es (kein Restaurant).", "NP"],
          ["(Auf der Strasse) stand ein Auto.", "PP"],
          ["Auf der Strasse stand (ein Auto).", "NP"],
          ["(Der Junge) ist ein guter Tennisspieler.", "NP"],
          ["Der Junge ist (ein guter Tennisspieler).", "NP"],
          ["(Das Haus) wird sehr gross.", "NP"],
          ["Das Haus wird (sehr gross).", "AdjP"],
          ["(Ganz hinten) befindet sich das Universitäts-Restaurant.", "AdvP"],
          ["Ganz hinten befindet sich (das Universitäts-Restaurant).", "NP"]
        ]
      }
    ]
  },

  attribute: {
    title: "Attribute in Nominalphrasen",
    intro: "Attribute sind Erweiterungen innerhalb einer Nominalphrase. Sie können Adjektivattribute, Präpositionalattribute, Relativsätze oder Genitivattribute sein.",
    exercises: [
      {
        tag: "Vorbereitung 7a-b",
        title: "Nominalphrasen und Attribute",
        type: "Auswahl",
        question: "Bestimme die Art des Attributs.",
        mode: "select-list",
        options: ["Adjektivattribut", "Präpositionalattribut", "Relativsatz", "Genitivattribut"],
        rows: [
          ["zottelige — Der zottelige Hund", "Adjektivattribut"],
          ["netten — den netten Nachbarn", "Adjektivattribut"],
          ["vor der Tür — Der Hund vor der Tür", "Präpositionalattribut"],
          ["von nebenan — den Nachbarn von nebenan", "Präpositionalattribut"],
          ["der gebellt hat — Der Hund, der gebellt hat", "Relativsatz"],
          ["die über uns wohnen — den Nachbarn, die über uns wohnen", "Relativsatz"],
          ["der Nachbarn — Der Hund der Nachbarn", "Genitivattribut"],
          ["grosser — ein grosser Bernhardiner", "Adjektivattribut"]
        ]
      },
      {
        tag: "Vorbereitung 7c",
        title: "Kongruenz",
        type: "Schriftliche Antwort",
        question: "Wie nennt man die Tatsache, dass Kasus, Numerus und Genus in einer Phrase miteinander übereinstimmen?",
        mode: "textarea",
        answer: "Man nennt diese Übereinstimmung Kongruenz. Dabei stimmen Kasus, Numerus und Genus innerhalb einer Phrase überein.",
        keywords: ["Kongruenz", "Kasus", "Numerus", "Genus", "übereinstimmen"]
      }
    ]
  },

  rektion: {
    title: "Rektion",
    intro: "Rektion bedeutet: Ein syntaktisches Element legt ein grammatisches Merkmal eines anderen Elements fest.",
    exercises: [
      {
        tag: "Vorbereitung 8",
        title: "Rektion erklären",
        type: "Schriftliche Antwort",
        question: "Was versteht man unter Rektion? In welchem Phrasentyp spielt sie eine besondere Rolle?",
        mode: "textarea",
        answer: "Rektion bedeutet, dass ein syntaktisches Element ein grammatisches Merkmal eines anderen Elements festlegt. Sie spielt besonders in Präpositionalphrasen eine Rolle, weil die Präposition den Kasus der folgenden Nominalphrase bestimmt.",
        keywords: ["syntaktisches Element", "grammatisches Merkmal", "Präpositionalphrase", "Präposition", "Kasus", "Nominalphrase"]
      },
      {
        tag: "Rektionstraining",
        title: "Kasus durch Präposition",
        type: "Auswahl",
        question: "Welche Rektion zeigt die Präposition?",
        mode: "select-list",
        options: ["vor + Dativ", "von + Dativ", "wegen + Genitiv schriftsprachlich / Dativ umgangssprachlich", "auf + Dativ bei Ort / Akkusativ bei Richtung"],
        rows: [
          ["vor der Tür", "vor + Dativ"],
          ["von nebenan", "von + Dativ"],
          ["wegen des Regens / wegen dem Regen", "wegen + Genitiv schriftsprachlich / Dativ umgangssprachlich"],
          ["auf dem Baum / auf den Baum", "auf + Dativ bei Ort / Akkusativ bei Richtung"]
        ]
      }
    ]
  },

  vp: {
    title: "Verbalphrasen",
    intro: "Eine Verbalphrase besteht aus Verb + vom Verb verlangten Ergänzungen. Die Nominativergänzung wird im Deutschen nicht zur VP gerechnet.",
    exercises: [
      {
        tag: "Aufgabe 3",
        title: "Verbalphrasen und Ergänzungen",
        type: "Auswahl",
        question: "Bestimme die Ergänzung innerhalb der Verbalphrase.",
        mode: "select-list",
        options: ["NP (Akk.Erg.)", "NP (Dat.Erg.)", "NP (Gen.Erg.)", "PP", "NP (Dat.Erg.) + NP (Akk.Erg.)", "NP (Akk.Erg.) + PP"],
        rows: [
          ["Der kleine Junge isst (einen Apfel).", "NP (Akk.Erg.)"],
          ["Sie wartet (auf den Bus).", "PP"],
          ["Er hat (mich) (an diese Nachricht) erinnert.", "NP (Akk.Erg.) + PP"],
          ["Er hatte (den Kindern) (einen Ball) geschenkt.", "NP (Dat.Erg.) + NP (Akk.Erg.)"],
          ["Sie widmete (ihm) (ihr neues Buch).", "NP (Dat.Erg.) + NP (Akk.Erg.)"],
          ["Wir gedenken (der Toten des 2. Weltkriegs).", "NP (Gen.Erg.)"]
        ]
      },
      {
        tag: "VP-Regel",
        title: "Was gehört nicht direkt zur VP?",
        type: "Schriftliche Antwort",
        question: "Warum wird die Nominativergänzung im Deutschen nicht zur Verbalphrase gerechnet?",
        mode: "textarea",
        answer: "Die Nominativergänzung wird nicht zur Verbalphrase gerechnet, weil sie nicht direkt vom Verb regiert wird. Jedes Verb hat grundsätzlich eine Nominativergänzung.",
        keywords: ["Nominativergänzung", "nicht", "Verbalphrase", "nicht direkt", "regiert", "jedes Verb"]
      }
    ]
  },

  konstituenten: {
    title: "Konstituentenstruktur",
    intro: "Konstituenten sind Bestandteile eines Satzes. Mit Tests kann man prüfen, ob eine Wortgruppe wirklich zusammengehört.",
    exercises: [
      {
        tag: "Vorbereitung 9",
        title: "Konstituenten und Tests",
        type: "Schriftliche Antwort",
        question: "Was ist eine Konstituente? Wozu dienen Konstituententests? Welche Tests gibt es?",
        mode: "textarea",
        answer: "Eine Konstituente ist ein Bestandteil eines Satzes. Sie kann ein Wort oder eine Phrase sein. Konstituententests dienen dazu, die Konstituenten eines Satzes zu ermitteln. Wichtige Tests sind Fragetest, Pronominalisierungstest, Verschiebetest und Vorfeldtest.",
        keywords: ["Bestandteil", "Satz", "Wort", "Phrase", "ermitteln", "Fragetest", "Pronominalisierungstest", "Verschiebetest", "Vorfeldtest"]
      },
      {
        tag: "Aufgabe 4a",
        title: "Konstituenten markieren",
        type: "Auswahl",
        question: "Welche Klammerung ist korrekt?",
        mode: "select-list",
        options: [
          "(Er) hat (seiner Mutter) (einen Blumenstrauss) geschenkt.",
          "Er (hat seiner) Mutter einen Blumenstrauss geschenkt.",
          "(Er hat) seiner Mutter (einen Blumenstrauss geschenkt)."
        ],
        rows: [
          ["Er hat seiner Mutter einen Blumenstrauss geschenkt.", "(Er) hat (seiner Mutter) (einen Blumenstrauss) geschenkt."]
        ]
      },
      {
        tag: "Aufgabe 4b",
        title: "Konstituententest: seiner Mutter",
        type: "Zuordnung",
        question: "Ordne den passenden Test zu.",
        mode: "select-list",
        options: ["Fragetest", "Pronominalisierungstest", "Verschiebetest", "Vorfeldtest"],
        rows: [
          ["Wem hat er einen Blumenstrauss geschenkt?", "Fragetest"],
          ["Er hat ihr einen Blumenstrauss geschenkt.", "Pronominalisierungstest"],
          ["Er hat einen Blumenstrauss seiner Mutter geschenkt.", "Verschiebetest"],
          ["Seiner Mutter hat er einen Blumenstrauss geschenkt.", "Vorfeldtest"]
        ]
      },
      {
        tag: "Aufgabe 4c",
        title: "Konstituententest: einen Blumenstrauss",
        type: "Zuordnung",
        question: "Ordne den passenden Test zu.",
        mode: "select-list",
        options: ["Fragetest", "Pronominalisierungstest", "Verschiebetest", "Vorfeldtest"],
        rows: [
          ["Was hat er seiner Mutter geschenkt?", "Fragetest"],
          ["Das hat er seiner Mutter geschenkt.", "Pronominalisierungstest"],
          ["Er hat einen Blumenstrauss seiner Mutter geschenkt.", "Verschiebetest"],
          ["Einen Blumenstrauss hat er seiner Mutter geschenkt.", "Vorfeldtest"]
        ]
      }
    ]
  },

  revision: {
    title: "Schlussrevision",
    intro: "Gemischte Fragen, um die ganze Sitzung 2 zu wiederholen.",
    exercises: [
      {
        tag: "Revision 1",
        title: "Richtig oder falsch",
        type: "Auswahl",
        question: "Wähle richtig oder falsch.",
        mode: "select-list",
        options: ["richtig", "falsch"],
        rows: [
          ["Adverbien können alleine vor dem finiten Verb im Aussagesatz stehen.", "richtig"],
          ["Partikeln regieren den Kasus einer Nominalphrase.", "falsch"],
          ["Konjunktionen haben eine verbindende Funktion.", "richtig"],
          ["Eine Präposition ist immer nachgestellt.", "falsch"],
          ["Eine Nominalphrase hat ein Substantiv oder Pronomen als Kopf.", "richtig"],
          ["Rektion spielt besonders in Präpositionalphrasen eine Rolle.", "richtig"],
          ["Der Vorfeldtest ist ein Konstituententest.", "richtig"]
        ]
      },
      {
        tag: "Revision 2",
        title: "Mini-Synthese",
        type: "Schriftliche Antwort",
        question: "Erkläre in 8 bis 10 Zeilen, was du über unflektierbare Wortarten und Phrasen unbedingt behalten musst.",
        mode: "textarea",
        answer: "Unflektierbare Wortarten sind Adverbien, Präpositionen, Konjunktionen, Partikeln und Interjektionen. Adverbien können alleine im Vorfeld stehen. Präpositionen regieren den Kasus einer Nominalphrase. Konjunktionen verbinden Sätze oder Satzteile. Partikeln sind nicht vorfeldfähig, regieren keinen Kasus und verknüpfen nicht. Phrasen sind syntaktisch zusammengehörige Wortgruppen. Ihr Kopf bestimmt den Phrasentyp: NP, PP, VP, AdjP oder AdvP. Attribute erweitern Nominalphrasen. Rektion und Kongruenz helfen, Zusammengehörigkeit innerhalb von Phrasen zu erkennen. Konstituententests helfen, Satzbestandteile zu bestimmen.",
        keywords: ["unflektierbare", "Adverbien", "Präpositionen", "Konjunktionen", "Partikeln", "Phrasen", "Kopf", "NP", "PP", "VP", "Attribute", "Rektion", "Kongruenz", "Konstituententests"]
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
    .replace(/[.,;:!?()]/g, "")
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
    <p class="${cls}">${label} — ${result.details}</p>
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
