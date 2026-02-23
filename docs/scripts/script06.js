import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-6",questions);
});

const questions = [
  {
    title: "Dictionary aanmaken",
    description:
      "Maak een dictionary <code>student</code> met de keys <code>name</code> en <code>age</code> met waarden <code>\"Jan\"</code> en <code>20</code>. Print de dictionary.",
    file: "exercises/06/create-dict.py",
    tests: "exercises/06/create-dict.test.py"
  },
  {
    title: "Waarde uitlezen",
    description:
      "Gegeven <code>person = { name: \"Anna\", city: \"Brugge\" }</code>. Print de waarde van <code>city</code>.",
    file: "exercises/06/read-value.py",
    tests: "exercises/06/read-value.test.py"
  },
  {
    title: "Waarde toevoegen",
    description:
      "Gegeven <code>car = { brand: \"BMW\" }</code>. Voeg een nieuwe key <code>year</code> toe met waarde <code>2020</code> en print de dictionary.",
    file: "exercises/06/add-key.py",
    tests: "exercises/06/add-key.test.py"
  },
  {
    title: "Waarde wijzigen",
    description:
      "Gegeven <code>user = { username: \"john\", admin: false }</code>. Verander <code>admin</code> naar <code>true</code> en print de dictionary.",
    file: "exercises/06/update-value.py",
    tests: "exercises/06/update-value.test.py"
  },
  {
    title: "Key verwijderen",
    description:
      "Gegeven <code>info = { a: 1, b: 2 }</code>. Verwijder de key <code>b</code> en print de dictionary.",
    file: "exercises/06/delete-key.py",
    tests: "exercises/06/delete-key.test.py"
  },
  {
    title: "Itereren over keys",
    description:
      "Gegeven <code>scores = { math: 10, science: 8 }</code>. Print alle keys met een <code>for</code>-loop (één per lijn).",
    file: "exercises/06/loop-keys.py",
    tests: "exercises/06/loop-keys.test.py"
  },
  {
    title: "Itereren over values",
    description:
      "Gegeven <code>scores = { math: 10, science: 8 }</code>. Print alle values met een <code>for</code>-loop (één per lijn).",
    file: "exercises/06/loop-values.py",
    tests: "exercises/06/loop-values.test.py"
  },
  {
    title: "Key check met in",
    description:
      "Gegeven <code>data = { a: 1, b: 2 }</code>. Controleer met <code>if</code>/<code>else</code> of <code>\"a\"</code> een key is. Print <code>\"gevonden\"</code> of <code>\"niet gevonden\"</code>.",
    file: "exercises/06/key-in.py",
    tests: "exercises/06/key-in.test.py"
  },
  {
    title: "Dictionary samenvoegen",
    description:
      "Gegeven <code>d1 = { a: 1 }</code> en <code>d2 = { b: 2 }</code>. Maak een nieuwe dictionary <code>merged</code> en print deze.",
    file: "exercises/06/merge-dicts.py",
    tests: "exercises/06/merge-dicts.test.py"
  },
  {
    title: "Geneste dictionary",
    description:
      "Maak een dictionary <code>student</code> met <code>name: \"Tom\"</code> en <code>scores: { math: 9, dutch: 8 }</code>. Print de waarde van <code>math</code>.",
    file: "exercises/06/nested-dict.py",
    tests: "exercises/06/nested-dict.test.py"
  }
];