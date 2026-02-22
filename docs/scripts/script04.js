import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-4",questions);
});

const questions = [
  {
    title: "Eerste element lezen",
    description:
      "We hebben een bestaande lijst <code>nums = [10, 20, 30]</code>. Lees het <strong>eerste</strong> element en print het.",
    file: "exercises/04/read-first.py",
    tests: "exercises/04/read-first.test.py"
  },
  {
    title: "Laatste element lezen",
    description:
      "We hebben <code>cities = [\"Brugge\", \"Gent\", \"Leuven\"]</code>. Print het <strong>laatste</strong> element met negatieve indexering.",
    file: "exercises/04/read-last.py",
    tests: "exercises/04/read-last.test.py"
  },
  {
    title: "Slicing: begin van de lijst",
    description:
      "Gegeven <code>letters = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\", \"g\"]</code>. Neem een slice van de eerste 3 elementen en print die lijst.",
    file: "exercises/04/slice-first3.py",
    tests: "exercises/04/slice-first3.test.py"
  },
  {
    title: "Slicing: middenstuk",
    description:
      "Gegeven <code>numbers = [0,1,2,3,4,5,6]</code>. Neem de elementen met index 2 t/m 4 (dus [2,3,4]) en print de slice.",
    file: "exercises/04/slice-mid.py",
    tests: "exercises/04/slice-mid.test.py"
  },
  {
    title: "Lijst aanmaken",
    description:
      "Maak een lijst <code>items</code> met de waarden <code>[1, 2, 3]</code> en print de lijst.",
    file: "exercises/04/create-list.py",
    tests: "exercises/04/create-list.test.py"
  },
  {
    title: "Lengte van een lijst (len)",
    description:
      "Gegeven <code>animals = [\"kat\", \"hond\", \"vos\", \"koe\"]</code>. Print de lengte van de lijst met <code>len()</code>.",
    file: "exercises/04/len-list.py",
    tests: "exercises/04/len-list.test.py"
  },
  {
    title: "Sorteren (getallen)",
    description:
      "Gegeven <code>nums = [5, 1, 4, 2]</code>. Sorteer de lijst <em>in-place</em> met <code>sort()</code> en print <code>nums</code>.",
    file: "exercises/04/sort-nums.py",
    tests: "exercises/04/sort-nums.test.py"
  },
  {
    title: "Sorteren (strings)",
    description:
      "Gegeven <code>names = [\"zoe\", \"anna\", \"mike\"]</code>. Sorteer de lijst alfabetisch met <code>sort()</code> en print <code>names</code>.",
    file: "exercises/04/sort-strings.py",
    tests: "exercises/04/sort-strings.test.py"
  },
  {
    title: "Omkeren met reverse()",
    description:
      "Gegeven <code>nums = [1, 2, 3, 4]</code>. Keer de lijst om met <code>reverse()</code> en print <code>nums</code>.",
    file: "exercises/04/reverse-method.py",
    tests: "exercises/04/reverse-method.test.py"
  },
  {
    title: "Slicing om te omkeren",
    description:
      "Gegeven <code>letters = [\"a\", \"b\", \"c\", \"d\"]</code>. Maak een <em>nieuwe</em> omgekeerde lijst met slicing <code>letters[::-1]</code> en print die <strong>nieuwe</strong> lijst.",
    file: "exercises/04/reverse-slice.py",
    tests: "exercises/04/reverse-slice.test.py"
  },
  {
    title: "Index uitlezen met variabele",
    description:
      "Gegeven <code>days = [\"ma\", \"di\", \"wo\", \"do\"]</code> en <code>i = 2</code>. Print <code>days[i]</code>.",
    file: "exercises/04/read-by-index.py",
    tests: "exercises/04/read-by-index.test.py"
  },
  {
    title: "Laatste twee elementen (slice)",
    description:
      "Gegeven <code>nums = [10, 20, 30, 40, 50]</code>. Print de <strong>laatste twee</strong> elementen met slicing.",
    file: "exercises/04/slice-last2.py",
    tests: "exercises/04/slice-last2.test.py"
  },
  {
    title: "Bevat getal? (in + if/else)",
    description:
      "Gegeven <code>nums = [2, 4, 6, 8]</code>. Gebruik <code>if</code>/<code>else</code> en <code>in</code> om te controleren of <code>6</code> in de lijst zit. Print <code>\"aanwezig\"</code> of <code>\"afwezig\"</code>.",
    file: "exercises/04/membership-in.py",
    tests: "exercises/04/membership-in.test.py"
  },
  {
    title: "Geen spatie toegestaan (not in + if/else)",
    description:
      "Gegeven <code>username = \"janiek_colpaert\"</code>. Gebruik <code>if</code>/<code>else</code> met <code>\" \" not in username</code>. Print <code>\"ok\"</code> als er geen spatie in zit, anders <code>\"fout\"</code>.",
    file: "exercises/04/membership-not-in.py",
    tests: "exercises/04/membership-not-in.test.py"
  },
  {
    title: "Stad aanwezig? (case-insensitive in + if/else)",
    description:
      "Gegeven <code>cities = [\"Brugge\", \"Gent\", \"Leuven\"]</code> en <code>target = \"gent\"</code>. Controleer <em>hoofdletter-onafhankelijk</em> of <code>target</code> in <code>cities</code> zit en print <code>\"gevonden\"</code> of <code>\"niet gevonden\"</code>.",
    file: "exercises/04/membership-ci.py",
    tests: "exercises/04/membership-ci.test.py"
  },
  {
    title: "Substring in string met if/else",
    description:
      "Gegeven <code>message = \"Welkom in Python\"</code>. Gebruik <code>if/else</code> en <code>in</code> om te checken of <code>\"Python\"</code> in de tekst zit. Print <code>\"ja\"</code> of <code>\"nee\"</code>.",
    file: "exercises/04/membership-substring.py",
    tests: "exercises/04/membership-substring.test.py"
  }
];

