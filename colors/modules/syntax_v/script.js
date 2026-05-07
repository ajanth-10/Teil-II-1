const verbLexicon = [
  ["gehen", "aller"], ["erledigen", "faire / accomplir"], ["fragen", "demander"], ["einkaufen", "faire les courses"],
  ["treiben", "pratiquer / faire"], ["bleiben", "rester"], ["werden", "devenir / auxiliaire"], ["glauben", "croire"],
  ["regnen", "pleuvoir"], ["fahren", "aller / conduire"], ["wissen", "savoir"], ["gewinnen", "gagner"],
  ["trainieren", "s’entraîner"], ["feststellen", "constater"], ["meinen", "penser / estimer"], ["erzählen", "raconter"],
  ["lesen", "lire"], ["vergessen", "oublier"], ["können", "pouvoir"], ["kommen", "venir"], ["versprechen", "promettre"],
  ["mögen", "aimer"], ["braten", "faire griller"], ["kaufen", "acheter"], ["passen", "convenir / aller avec"],
  ["denken", "penser"], ["interessieren", "intéresser"], ["verabscheuen", "détester"], ["sehen", "voir"],
  ["feiern", "fêter"], ["zurück sein", "être de retour"], ["lügen", "mentir"], ["essen", "manger"], ["verstehen", "comprendre"],
  ["flüchten", "fuir"], ["wegfahren", "partir"], ["hinauswollen", "vouloir en venir à"], ["anrufen", "appeler"],
  ["abreisen", "partir / quitter"], ["verraten", "révéler"], ["zugeben", "admettre"], ["stattfinden", "avoir lieu"],
  ["ausfallen", "être annulé"], ["steigen", "monter / augmenter"], ["führen zu", "mener à"], ["reden", "parler"],
  ["umformen", "transformer"], ["verbinden", "relier"], ["unterordnen", "subordonner"], ["einleiten", "introduire"]
];

const sections = {
  komplex: {
    title: "Komplexe Sätze",
    intro: "Komplexe Sätze bestehen aus mehreren Teilsätzen. Man unterscheidet Satzreihung/Parataxe und Satzgefüge/Hypotaxe.",
    exercises: [
      {
        tag: "Vorbereitung 1a",
        title: "Parataxe und Hypotaxe erklären",
        type: "Schriftliche Antwort",
        question: "Was ist mit Satzreihung/Parataxe und Satzgefüge/Hypotaxe gemeint?",
        mode: "textarea",
        answer: "Bei der Satzreihung oder Parataxe sind die Teilsätze gleichrangig und koordiniert. Beim Satzgefüge oder bei der Hypotaxe gibt es ein hierarchisches Verhältnis zwischen den Teilsätzen: ein Hauptsatz oder Matrixsatz ist übergeordnet, ein Nebensatz ist untergeordnet.",
        keywords: ["Satzreihung", "Parataxe", "gleichrangig", "koordiniert", "Satzgefüge", "Hypotaxe", "hierarchisches Verhältnis", "Hauptsatz", "Matrixsatz", "Nebensatz", "untergeordnet"]
      },
      {
        tag: "Vorbereitung 1b",
        title: "Satzreihung oder Satzgefüge?",
        type: "Auswahl",
        question: "Bestimme, ob der Satz eine Satzreihung oder ein Satzgefüge ist.",
        mode: "select-list",
        options: ["Satzreihung / Parataxe", "Satzgefüge / Hypotaxe"],
        rows: [
          ["Er ging in die Stadt und sie erledigte die Gartenarbeit.", "Satzreihung / Parataxe"],
          ["Ich frage mich, was ich noch einkaufen sollte.", "Satzgefüge / Hypotaxe"],
          ["Sie fragte ihn, aber er war ahnungslos.", "Satzreihung / Parataxe"],
          ["Wer jeden Tag Sport treibt, bleibt gesund.", "Satzgefüge / Hypotaxe"],
          ["Er ist glücklich, denn er wird bald Vater.", "Satzreihung / Parataxe"],
          ["Ich glaube, dass sie recht hat.", "Satzgefüge / Hypotaxe"],
          ["Es regnet nicht mehr, trotzdem bleibe ich zuhause.", "Satzreihung / Parataxe"],
          ["Sie treibt viel Sport, er macht das nie.", "Satzreihung / Parataxe"],
          ["Ich bleibe zuhause, weil es regnet.", "Satzgefüge / Hypotaxe"],
          ["Ich fahre mit dem Fahrrad, obwohl es regnet.", "Satzgefüge / Hypotaxe"]
        ]
      },
      {
        tag: "Erkennung",
        title: "Elemente der Satzreihung",
        type: "Mehrfachauswahl",
        question: "An welchen Elementen kann man eine Satzreihung häufig erkennen?",
        mode: "multi",
        options: ["koordinierende Junktionen", "Konjunktionaladverbien", "Subjunktionen", "Relativpronomen", "w-Fragewörter"],
        answers: ["koordinierende Junktionen", "Konjunktionaladverbien"]
      }
    ]
  },

  parataxe: {
    title: "Satzreihung und Konjunktionaladverbien",
    intro: "Konjunktionaladverbien verbinden Hauptsätze miteinander und sind wie Adverbien meist frei positionierbar.",
    exercises: [
      {
        tag: "Junktionen",
        title: "Koordinierende Junktionen",
        type: "Mehrfachauswahl",
        question: "Welche Elemente sind koordinierende Junktionen/Konjunktionen?",
        mode: "multi",
        options: ["und", "aber", "denn", "oder", "entweder ... oder", "obwohl", "weil", "dass"],
        answers: ["und", "aber", "denn", "oder", "entweder ... oder"]
      },
      {
        tag: "Junktionen",
        title: "Konjunktionaladverbien",
        type: "Zuordnung",
        question: "Bestimme die Art des Konjunktionaladverbs.",
        mode: "select-list",
        options: ["additiv", "adversativ", "adverbial: Grund/Folge/Art und Weise", "erläuternd"],
        rows: [
          ["ausserdem", "additiv"],
          ["ebenfalls", "additiv"],
          ["trotzdem", "adversativ"],
          ["dagegen", "adversativ"],
          ["deshalb", "adverbial: Grund/Folge/Art und Weise"],
          ["infolgedessen", "adverbial: Grund/Folge/Art und Weise"],
          ["und zwar", "erläuternd"],
          ["z.B.", "erläuternd"]
        ]
      },
      {
        tag: "Aufgabe 1",
        title: "Sätze mit Konjunktionaladverbien verbinden",
        type: "Auswahl",
        question: "Wähle eine passende Verbindung mit Konjunktionaladverb.",
        mode: "select-list",
        options: [
          "Zamenhof träumte von einer einzigen Sprache, und zwar / dabei dachte er an eine Universalsprache.",
          "Der Vater hielt von der Beschäftigung des Sohnes mit der Kunstsprache nicht viel, deshalb / deswegen warf er dessen erste Aufzeichnungen ins Feuer.",
          "Er unterstützte das Sprachenlernen seines Sohnes, trotzdem versuchte er ihn von der Beschäftigung mit der Universalsprache abzubringen.",
          "Esperanto ist folgerichtig aufgebaut. Daher ist es leicht erlernbar.",
          "Esperanto wurde vor gut 100 Jahren erfunden, trotzdem / dennoch / jedoch hat es sich noch nicht durchgesetzt."
        ],
        rows: [
          ["Zamenhof träumte von einer einzigen Sprache. Er dachte an eine Universalsprache.", "Zamenhof träumte von einer einzigen Sprache, und zwar / dabei dachte er an eine Universalsprache."],
          ["Der Vater hielt von der Beschäftigung des Sohnes mit der Kunstsprache nicht viel. Er warf dessen erste Aufzeichnungen ins Feuer.", "Der Vater hielt von der Beschäftigung des Sohnes mit der Kunstsprache nicht viel, deshalb / deswegen warf er dessen erste Aufzeichnungen ins Feuer."],
          ["Er unterstützte das Sprachenlernen seines Sohnes. Er versuchte ihn von der Beschäftigung mit der Universalsprache abzubringen.", "Er unterstützte das Sprachenlernen seines Sohnes, trotzdem versuchte er ihn von der Beschäftigung mit der Universalsprache abzubringen."],
          ["Esperanto ist folgerichtig aufgebaut. Es ist leicht erlernbar.", "Esperanto ist folgerichtig aufgebaut. Daher ist es leicht erlernbar."],
          ["Esperanto wurde vor gut 100 Jahren erfunden. Es hat sich noch nicht durchgesetzt.", "Esperanto wurde vor gut 100 Jahren erfunden, trotzdem / dennoch / jedoch hat es sich noch nicht durchgesetzt."]
        ]
      }
    ]
  },

  hypotaxe: {
    title: "Satzgefüge / Hypotaxe",
    intro: "Im Satzgefüge ist ein Nebensatz einem Hauptsatz oder Matrixsatz untergeordnet.",
    exercises: [
      {
        tag: "Satzgefüge",
        title: "Hauptsatz und Nebensatz erkennen",
        type: "Auswahl",
        question: "Bestimme den untergeordneten Nebensatz.",
        mode: "select-list",
        options: [
          "was ich noch einkaufen sollte",
          "Wer jeden Tag Sport treibt",
          "dass sie recht hat",
          "weil es regnet",
          "obwohl es regnet"
        ],
        rows: [
          ["Ich frage mich, was ich noch einkaufen sollte.", "was ich noch einkaufen sollte"],
          ["Wer jeden Tag Sport treibt, bleibt gesund.", "Wer jeden Tag Sport treibt"],
          ["Ich glaube, dass sie recht hat.", "dass sie recht hat"],
          ["Ich bleibe zuhause, weil es regnet.", "weil es regnet"],
          ["Ich fahre mit dem Fahrrad, obwohl es regnet.", "obwohl es regnet"]
        ]
      },
      {
        tag: "Subjunktionen",
        title: "Subordinierende Junktionen",
        type: "Zuordnung",
        question: "Bestimme die semantische Klasse der Subjunktion.",
        mode: "select-list",
        options: ["temporal", "konditional", "modal", "kausal", "konsekutiv", "adversativ", "konzessiv"],
        rows: [
          ["während / als / seitdem / bis / bevor / ehe", "temporal"],
          ["wenn / falls", "konditional"],
          ["indem / ohne dass", "modal"],
          ["weil / da / zumal / nachdem", "kausal"],
          ["sodass", "konsekutiv"],
          ["wohingegen / anstatt dass", "adversativ"],
          ["obwohl / auch wenn", "konzessiv"]
        ]
      }
    ]
  },

  grade: {
    title: "Nebensätze verschiedenen Grades",
    intro: "Ein Nebensatz kann selbst Matrixsatz für einen weiteren Nebensatz sein. Dann spricht man von Nebensätzen verschiedenen Grades.",
    exercises: [
      {
        tag: "Vorbereitung 2",
        title: "Nebensätze nach Grad — Beispiel 1",
        type: "Zuordnung",
        question: "Ordne Hauptsatz, Nebensatz 1. Grades und Nebensatz 2. Grades zu.",
        mode: "select-list",
        options: ["Hauptsatz / Matrixsatz", "Nebensatz 1. Grades", "Nebensatz 2. Grades"],
        rows: [
          ["Ich weiss", "Hauptsatz / Matrixsatz"],
          ["dass die Mannschaft wieder gewinnt", "Nebensatz 1. Grades"],
          ["wenn sie mehr trainiert", "Nebensatz 2. Grades"]
        ]
      },
      {
        tag: "Vorbereitung 2",
        title: "Nebensätze nach Grad — Beispiel 2",
        type: "Zuordnung",
        question: "Ordne Hauptsatz und Nebensätze nach Grad zu.",
        mode: "select-list",
        options: ["Hauptsatz / Matrixsatz", "Nebensatz 1. Grades", "Nebensatz 2. Grades", "Nebensatz 3. Grades"],
        rows: [
          ["Ich weiss", "Hauptsatz / Matrixsatz"],
          ["dass die Mannschaft wieder gewinnt", "Nebensatz 1. Grades"],
          ["wenn wir festgestellt haben", "Nebensatz 2. Grades"],
          ["welche Trainingsmethode die beste ist", "Nebensatz 3. Grades"]
        ]
      }
    ]
  },

  formen: {
    title: "Formen von Nebensätzen",
    intro: "Nebensätze werden formal danach unterschieden, ob sie eingeleitet oder uneingeleitet sind. Eingeleitete Nebensätze werden nach dem Einleitewort klassifiziert.",
    exercises: [
      {
        tag: "Vorbereitung 3a-b",
        title: "Formale Kriterien",
        type: "Schriftliche Antwort",
        question: "Nach welchem Kriterium werden die Formen der Nebensätze unterschieden? Welche Formen gibt es?",
        mode: "textarea",
        answer: "Nebensätze werden danach unterschieden, ob sie eingeleitet oder uneingeleitet sind. Eingeleitete Nebensätze sind Konjunktionalsätze, Relativsätze und abhängige Fragesätze. Uneingeleitete Nebensätze werden nach der Verbstellung unterschieden: V2, V1 oder V infinit.",
        keywords: ["eingeleitet", "uneingeleitet", "Konjunktionalsätze", "Relativsätze", "abhängige Fragesätze", "V2", "V1", "V infinit"]
      },
      {
        tag: "Vorbereitung 3c",
        title: "Formen bestimmen — Vorbereitung",
        type: "Auswahl",
        question: "Bestimme die Form des Nebensatzes.",
        mode: "select-list",
        options: ["Konjunktionalsatz", "Relativsatz", "abhängiger Fragesatz", "uneingeleiteter NS mit V2", "uneingeleiteter NS mit V1", "uneingeleiteter NS mit V infinit"],
        rows: [
          ["dass sie gewinnen wird — Sie glaubt nicht, dass sie gewinnen wird.", "Konjunktionalsatz"],
          ["wo er seine Brille hingelegt hat — Er fragt sich, wo er seine Brille hingelegt hat.", "abhängiger Fragesatz"],
          ["das ich gerade lese — Ich will dir von dem Buch erzählen, das ich gerade lese.", "Relativsatz"],
          ["wie sie das vergessen konnte — Sie fragen sich, wie sie das vergessen konnte.", "abhängiger Fragesatz"],
          ["sie hätten keine Zeit — Viele Menschen meinen, sie hätten keine Zeit.", "uneingeleiteter NS mit V2"],
          ["ob er kommen wird — Wir fragen uns, ob er kommen wird.", "abhängiger Fragesatz"],
          ["die dich faszinieren wird — Ich kenne eine Geschichte, die dich faszinieren wird.", "Relativsatz"],
          ["du hast Unrecht — Ich glaube, du hast Unrecht.", "uneingeleiteter NS mit V2"],
          ["Obwohl die Arbeitszeit immer kürzer wird — Obwohl die Arbeitszeit immer kürzer wird, haben die Menschen wenig Zeit.", "Konjunktionalsatz"],
          ["Ist es stürmisch — Ist es stürmisch, darf niemand mehr segeln.", "uneingeleiteter NS mit V1"],
          ["Wird die Arbeitszeit kürzer — Wird die Arbeitszeit kürzer, haben die Menschen mehr Freizeit.", "uneingeleiteter NS mit V1"],
          ["an deinem Geburtstag zu kommen — Ich verspreche dir, an deinem Geburtstag zu kommen.", "uneingeleiteter NS mit V infinit"]
        ]
      },
      {
        tag: "Aufgabe 2",
        title: "Formen bestimmen — Aufgabenblatt",
        type: "Auswahl",
        question: "Bestimme die Form des unterstrichenen Nebensatzes.",
        mode: "select-list",
        options: ["Konjunktionalsatz", "Relativsatz", "abhängiger Fragesatz", "uneingeleiteter NS mit V2"],
        rows: [
          ["ob er abreisen soll — Er fragt sich, ob er abreisen soll.", "abhängiger Fragesatz"],
          ["das sie niemals verraten wird — Sie kennt ein Geheimnis, das sie niemals verraten wird.", "Relativsatz"],
          ["wo er die ganze Zeit war — Sie fragt ihn, wo er die ganze Zeit war.", "abhängiger Fragesatz"],
          ["dass sie einen Tauchschein hat — Er glaubt nicht, dass sie einen Tauchschein hat.", "Konjunktionalsatz"],
          ["du kannst das — Ich glaube, du kannst das.", "uneingeleiteter NS mit V2"],
          ["auch wenn er das nie zugeben würde — Er ist schüchtern, auch wenn er das nie zugeben würde.", "Konjunktionalsatz"],
          ["das du mir letzte Woche empfohlen hast — Ich habe das Buch gekauft, das du mir letzte Woche empfohlen hast.", "Relativsatz"],
          ["wann die Prüfung stattfinden wird — Wer weiss, wann die Prüfung stattfinden wird.", "abhängiger Fragesatz"],
          ["so dass das Picknick ausfallen muss — Es regnet heute, so dass das Picknick ausfallen muss.", "Konjunktionalsatz"],
          ["sie hätten nichts gewusst — Manche Leute sagen, sie hätten nichts gewusst.", "uneingeleiteter NS mit V2"]
        ]
      }
    ]
  },

  funktionen: {
    title: "Funktionen von Nebensätzen",
    intro: "Nebensätze können Satzgliedfunktion haben, Teil eines Satzglieds sein oder weiterführende Nebensätze sein.",
    exercises: [
      {
        tag: "Grundlagen",
        title: "Funktionsgruppen",
        type: "Mehrfachauswahl",
        question: "Welche Funktionen können Nebensätze übernehmen?",
        mode: "multi",
        options: ["Gliedsatz mit Satzgliedfunktion", "Attributsatz / Gliedteilsatz", "weiterführender Nebensatz / Satzrelativsatz", "Artikel", "Kasusendung"],
        answers: ["Gliedsatz mit Satzgliedfunktion", "Attributsatz / Gliedteilsatz", "weiterführender Nebensatz / Satzrelativsatz"]
      },
      {
        tag: "Vorbereitung 4",
        title: "Funktionen bestimmen — Vorbereitung",
        type: "Auswahl",
        question: "Bestimme die Funktion des Nebensatzes.",
        mode: "select-list",
        options: ["Subjektsatz", "Objektsatz", "Adverbialsatz", "Prädikativsatz", "Attributsatz"],
        rows: [
          ["was ich schon immer war — Ich bleibe, was ich schon immer war.", "Prädikativsatz"],
          ["der gebraten wurde — Ich mag keinen Tofu, der gebraten wurde.", "Attributsatz"],
          ["dass er noch kommt — Ich glaube nicht, dass er noch kommt.", "Objektsatz"],
          ["das gut zu ihr passt — Sie kauft ein Kleid, das gut zu ihr passt.", "Attributsatz"],
          ["Weil es regnet — Weil es regnet, werden wir kein Picknick machen.", "Adverbialsatz"],
          ["sie hätten keine Zeit — Viele Menschen denken, sie hätten keine Zeit.", "Objektsatz"],
          ["Was du sagst — Was du sagst, interessiert mich nicht.", "Subjektsatz"],
          ["was das Problem ist — Er versteht nicht, was das Problem ist.", "Objektsatz"],
          ["die brutal sind — Ich verabscheue Filme, die brutal sind.", "Attributsatz"],
          ["er hätte immer Recht — Er meint, er hätte immer Recht.", "Objektsatz"],
          ["wenn er wieder von seiner Reise zurück ist — Wir werden seinen Geburtstag feiern, wenn er wieder von seiner Reise zurück ist.", "Adverbialsatz"],
          ["Wer jeden Tag einen Apfel isst — Wer jeden Tag einen Apfel isst, bleibt gesund.", "Subjektsatz"],
          ["den du gestern gesehen hast — Der Mann, den du gestern gesehen hast, ist mein Vater.", "Attributsatz"]
        ]
      },
      {
        tag: "Aufgabe 3",
        title: "Gliedsätze bestimmen",
        type: "Auswahl",
        question: "Bestimme die Funktion des unterstrichenen Nebensatzes.",
        mode: "select-list",
        options: ["Subjektsatz", "Objektsatz", "Adverbialsatz", "Prädikativsatz"],
        rows: [
          ["dass er geflüchtet ist — Wir vermuten, dass er geflüchtet ist.", "Objektsatz"],
          ["was sie schon immer sein wollte — Sie wurde, was sie schon immer sein wollte.", "Prädikativsatz"],
          ["weil wir keine Lust hatten — Wir sind nicht weggefahren, weil wir keine Lust hatten.", "Adverbialsatz"],
          ["es gebe den Weihnachtsmann — Viele Kinder denken, es gebe den Weihnachtsmann.", "Objektsatz"],
          ["Wer immer lügt — Wer immer lügt, hat keine Freunde.", "Subjektsatz"],
          ["worauf du hinaus willst — Ich verstehe nicht, worauf du hinaus willst.", "Objektsatz"],
          ["er hätte immer Recht — Er meint, er hätte immer Recht.", "Objektsatz"],
          ["wenn ich wieder mehr Zeit habe — Ich werde ihn anrufen, wenn ich wieder mehr Zeit habe.", "Adverbialsatz"],
          ["was wir schon immer waren — Wir bleiben, was wir schon immer waren.", "Prädikativsatz"],
          ["Wer jeden Tag einen Apfel isst — Wer jeden Tag einen Apfel isst, bleibt gesund.", "Subjektsatz"],
          ["Wenn ich Zeit habe — Wenn ich Zeit habe, werde ich mehr Sport treiben.", "Adverbialsatz"]
        ]
      }
    ]
  },

  relativ: {
    title: "Relativadverbien und Relativpronomen",
    intro: "Relativpronomen beziehen sich oft auf nominale Bezugselemente; Relativadverbien beziehen sich häufig auf Ort, Richtung oder Herkunft.",
    exercises: [
      {
        tag: "Aufgabe 4a",
        title: "Relativadverb einsetzen",
        type: "Auswahl",
        question: "Setze das passende Relativadverb ein: In Lausanne gibt es eine Kathedrale, … man einen schönen Blick auf den Genfer See hat.",
        mode: "select-list",
        options: ["wo", "wohin", "woher", "von wo aus"],
        rows: [
          ["In Lausanne gibt es eine Kathedrale, … man einen schönen Blick auf den Genfer See hat.", "von wo aus"]
        ]
      },
      {
        tag: "Aufgabe 4b",
        title: "Relativpronomen oder Relativadverb?",
        type: "Auswahl",
        question: "Bestimme, ob das markierte Wort ein Relativpronomen oder ein Relativadverb ist.",
        mode: "select-list",
        options: ["Relativpronomen", "Relativadverb"],
        rows: [
          ["in denen — Die Grossstädte der Dritten Welt, in denen schon sehr viele Menschen leben, wachsen immer noch weiter an.", "Relativpronomen"],
          ["wo — In Afrika, wo die Bevölkerungszahl rasant steigt, ist die Hälfte der Menschen jünger als zwanzig.", "Relativadverb"],
          ["wohin — In den Grossstädten, wohin immer mehr Menschen ziehen, werden die Lebensbedingungen immer schlechter.", "Relativadverb"],
          ["aus denen — Die Dörfer, aus denen die Menschen kommen, verfallen.", "Relativpronomen"],
          ["von wo aus — Neu-Dehli, von wo aus 22 Bundesstaaten und 9 Unionsterritorien regiert werden, ist die Hauptstadt Indiens.", "Relativadverb"]
        ]
      }
    ]
  },

  weiter: {
    title: "Weiterführende Nebensätze",
    intro: "Weiterführende Nebensätze sind Satzrelative. Sie beziehen sich auf den ganzen vorhergehenden Satz.",
    exercises: [
      {
        tag: "Definition",
        title: "Satzrelativ erkennen",
        type: "Schriftliche Antwort",
        question: "Was ist ein weiterführender Nebensatz?",
        mode: "textarea",
        answer: "Ein weiterführender Nebensatz ist ein Relativsatz, der sich nicht nur auf ein einzelnes Nomen, sondern auf den ganzen vorhergehenden Satz bezieht. Man nennt ihn auch Satzrelativsatz.",
        keywords: ["Relativsatz", "ganzen", "vorhergehenden Satz", "Satzrelativsatz"]
      },
      {
        tag: "Aufgabe 5",
        title: "In weiterführenden Nebensatz umformen",
        type: "Auswahl",
        question: "Wähle die passende Umformung.",
        mode: "select-list",
        options: [
          "Doch genau dies ist den Autoren meisterhaft gelungen, was mich wirklich überrascht hat.",
          "Die Inflation stieg auf 25 Prozent, was auf den Märkten zu Panikverkäufen führte.",
          "Und zum Schluss wurde sie auch noch krank, wofür ich wirklich nichts kann.",
          "In der Kasse fehlen hundert Euro, worüber wir morgen noch reden müssen."
        ],
        rows: [
          ["Doch genau dies ist den Autoren meisterhaft gelungen. Das hat mich wirklich überrascht.", "Doch genau dies ist den Autoren meisterhaft gelungen, was mich wirklich überrascht hat."],
          ["Die Inflation stieg auf 25 Prozent. Das führte auf den Märkten zu Panikverkäufen.", "Die Inflation stieg auf 25 Prozent, was auf den Märkten zu Panikverkäufen führte."],
          ["Und zum Schluss wurde sie auch noch krank. Dafür kann ich wirklich nichts.", "Und zum Schluss wurde sie auch noch krank, wofür ich wirklich nichts kann."],
          ["In der Kasse fehlen hundert Euro. Darüber müssen wir morgen noch reden.", "In der Kasse fehlen hundert Euro, worüber wir morgen noch reden müssen."]
        ]
      }
    ]
  },

  umformung: {
    title: "Präpositionalphrasen in Nebensätze umformen",
    intro: "Adverbiale Präpositionalphrasen können oft in adverbiale Nebensätze umgeformt werden.",
    exercises: [
      {
        tag: "Aufgabe 6",
        title: "PP zu Adverbialsatz",
        type: "Auswahl",
        question: "Wähle die passende Umformung.",
        mode: "select-list",
        options: [
          "weil es regnet",
          "obwohl es regnet",
          "wenn ich Zeit habe",
          "bevor wir gehen",
          "nachdem wir gegessen haben",
          "damit er helfen kann"
        ],
        rows: [
          ["wegen des Regens", "weil es regnet"],
          ["trotz des Regens", "obwohl es regnet"],
          ["bei Zeit", "wenn ich Zeit habe"],
          ["vor dem Gehen", "bevor wir gehen"],
          ["nach dem Essen", "nachdem wir gegessen haben"],
          ["zur Hilfe", "damit er helfen kann"]
        ]
      },
      {
        tag: "Training",
        title: "Nebensatzklasse der Umformung",
        type: "Zuordnung",
        question: "Welche Klasse hat der entstehende Adverbialsatz?",
        mode: "select-list",
        options: ["Kausalsatz", "Konzessivsatz", "Konditionalsatz", "Temporalsatz", "Finalsatz"],
        rows: [
          ["weil es regnet", "Kausalsatz"],
          ["obwohl es regnet", "Konzessivsatz"],
          ["wenn ich Zeit habe", "Konditionalsatz"],
          ["bevor wir gehen", "Temporalsatz"],
          ["nachdem wir gegessen haben", "Temporalsatz"],
          ["damit er helfen kann", "Finalsatz"]
        ]
      }
    ]
  },

  revision: {
    title: "Schlussrevision",
    intro: "Gemischte Fragen zur Sitzung 5.",
    exercises: [
      {
        tag: "Revision 1",
        title: "Richtig oder falsch",
        type: "Auswahl",
        question: "Wähle richtig oder falsch.",
        mode: "select-list",
        options: ["richtig", "falsch"],
        rows: [
          ["Bei der Parataxe sind die Teilsätze gleichrangig.", "richtig"],
          ["Bei der Hypotaxe sind alle Teilsätze gleichrangig.", "falsch"],
          ["Konjunktionaladverbien verbinden Hauptsätze miteinander.", "richtig"],
          ["Ein Konjunktionalsatz wird durch eine subordinierende Junktion eingeleitet.", "richtig"],
          ["Ein Relativsatz wird nie eingeleitet.", "falsch"],
          ["Uneingeleitete Nebensätze können V1, V2 oder infinit sein.", "richtig"],
          ["Nebensätze können Satzgliedfunktion haben.", "richtig"],
          ["Attributsätze sind immer Hauptsätze.", "falsch"],
          ["Weiterführende Nebensätze beziehen sich auf den ganzen vorhergehenden Satz.", "richtig"]
        ]
      },
      {
        tag: "Revision 2",
        title: "Mini-Synthese",
        type: "Schriftliche Antwort",
        question: "Erkläre in 8 bis 10 Zeilen, was du aus Sitzung 5 unbedingt behalten musst.",
        mode: "textarea",
        answer: "Komplexe Sätze bestehen aus mehreren Teilsätzen. Bei der Satzreihung oder Parataxe sind die Teilsätze gleichrangig und koordiniert. Bei der Hypotaxe gibt es ein hierarchisches Verhältnis zwischen Hauptsatz oder Matrixsatz und Nebensatz. Nebensätze können nach ihrem Grad beschrieben werden. Formal unterscheidet man eingeleitete und uneingeleitete Nebensätze. Eingeleitete Nebensätze sind Konjunktionalsätze, Relativsätze oder abhängige Fragesätze. Uneingeleitete Nebensätze können V1, V2 oder infinit sein. Funktional können Nebensätze Gliedsätze, Attributsätze oder weiterführende Nebensätze sein. Gliedsätze können Subjekt-, Objekt-, Adverbial- oder Prädikativsätze sein.",
        keywords: ["komplexe Sätze", "Teilsätze", "Satzreihung", "Parataxe", "Hypotaxe", "Hauptsatz", "Matrixsatz", "Nebensatz", "eingeleitet", "uneingeleitet", "Konjunktionalsatz", "Relativsatz", "abhängige Fragesätze", "V1", "V2", "infinit", "Gliedsatz", "Attributsatz"]
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
