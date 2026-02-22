import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-5",questions);
});

const questions = [
  {
    title: "For-loop over een lijst",
    description:
      "Gegeven <code>fruits = [\"apple\", \"banana\", \"cherry\"]</code>. Itereer met een <code>for</code>-loop en print elk element op een nieuwe lijn.",
    file: "exercises/05/for-list-print.py",
    tests: "exercises/05/for-list-print.test.py"
  },
  {
    title: "Som van 1..5 (for + range)",
    description:
      "Bereken met een <code>for</code>-loop de som van de getallen 1 t.e.m. 5 en print het resultaat.",
    file: "exercises/05/sum-1-to-5.py",
    tests: "exercises/05/sum-1-to-5.test.py"
  },
  {
    title: "Even getallen met range-step",
    description:
      "Maak met een <code>for</code>-loop een lijst <code>evens</code> met de waarden <code>[0, 2, 4, 6, 8]</code> (gebruik <code>range</code> met stap) en print <code>evens</code>.",
    file: "exercises/05/evens-range.py",
    tests: "exercises/05/evens-range.test.py"
  },
  {
    title: "Aftellen met while",
    description:
      "Gegeven <code>n = 5</code>. Gebruik een <code>while</code>-loop om af te tellen tot en met 1 en print nadien <code>\"start!\"</code>. Elke stap op een nieuwe lijn.",
    file: "exercises/05/while-countdown.py",
    tests: "exercises/05/while-countdown.test.py"
  },
  {
    title: "Som van even getallen (if in loop)",
    description:
      "Gegeven <code>nums = [1, 2, 3, 4, 5, 6]</code>. Gebruik een <code>for</code>-loop en <code>if</code> om de som van de even getallen te berekenen en print die som.",
    file: "exercises/05/sum-evens.py",
    tests: "exercises/05/sum-evens.test.py"
  },
  {
    title: "continue: sla 3 over",
    description:
      "Print de getallen 1 t.e.m. 5, maar sla 3 over met <code>continue</code>. Elk getal op een nieuwe lijn.",
    file: "exercises/05/continue-skip-3.py",
    tests: "exercises/05/continue-skip-3.test.py"
  },
  {
    title: "break: stop bij nul",
    description:
      "Gegeven <code>nums = [4, 7, 0, 9]</code>. Doorloop de lijst en stop wanneer je 0 tegenkomt (met <code>break</code>). Print <code>\"found\"</code> wanneer 0 gevonden is.",
    file: "exercises/05/break-on-zero.py",
    tests: "exercises/05/break-on-zero.test.py"
  },
  {
    title: "for-else: niet gevonden",
    description:
      "Gegeven <code>nums = [10, 20, 30]</code> en <code>target = 42</code>. Gebruik <code>for</code>-<code>else</code> om <code>\"not found\"</code> te printen wanneer <code>target</code> niet in de lijst zit.",
    file: "exercises/05/for-else-not-found.py",
    tests: "exercises/05/for-else-not-found.test.py"
  },
  {
    title: "enumerate: index en waarde",
    description:
      "Gegeven <code>animals = [\"kat\", \"hond\", \"koe\"]</code>. Gebruik <code>enumerate</code> en print <code>index: waarde</code> per lijn, beginnend bij 0.",
    file: "exercises/05/enumerate-print.py",
    tests: "exercises/05/enumerate-print.test.py"
  },
  {
    title: "Geneste lussen: tafel 1..3",
    description:
      "Gebruik geneste <code>for</code>-lussen om de vermenigvuldigingstafel 1..3 × 1..3 te printen in de vorm <code>1x1=1</code> (één lijn per product, oplopende volgorde).",
    file: "exercises/05/nested-tables-1-3.py",
    tests: "exercises/05/nested-tables-1-3.test.py"
  },
  {
    title: "Achteruit itereren",
    description:
      "Gegeven <code>letters = [\"a\", \"b\", \"c\", \"d\"]</code>. Print de letters in omgekeerde volgorde (elk op een nieuwe lijn).",
    file: "exercises/05/reverse-iterate.py",
    tests: "exercises/05/reverse-iterate.test.py"
  },
  {
    title: "Zin opbouwen met loop",
    description:
      "Gegeven <code>words = [\"Hallo\", \"wereld\"]</code>. Bouw met een loop de string <code>\"Hallo wereld\"</code> (met spatie) en print die.",
    file: "exercises/05/join-words-loop.py",
    tests: "exercises/05/join-words-loop.test.py"
  },
  {
    title: "Faculteit met while",
    description:
      "Bereken met een <code>while</code>-loop de faculteit van <code>n = 5</code> en print het resultaat.",
    file: "exercises/05/factorial-while.py",
    tests: "exercises/05/factorial-while.test.py"
  },
  {
    title: "Som met range(start, stop, step)",
    description:
      "Bereken de som van <code>range(2, 10, 3)</code> met een <code>for</code>-loop en print de uitkomst.",
    file: "exercises/05/sum-range-step.py",
    tests: "exercises/05/sum-range-step.test.py"
  }
];
