import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-2", questions);
});
const questions = [
  {
    title: "Tekst toekennen aan een variabele",
    description:
      "Ken de variabele <code>text</code> de waarde <code>\"Python is leuk\"</code> toe en print deze waarde naar de console.",
    file: "exercises/02/assign-string.py",
    tests: "exercises/02/assign-string.test.py"
  },
  {
    title: "String-concatenatie",
    description:
      "Voeg twee delen tekst samen via concatenatie. Maak twee variabelen <code>part1</code> en <code>part2</code> met respectievelijk <code>\"Hallo\"</code> en <code>\" wereld\"</code>. Maak daarna een nieuwe variabele <code>message</code> die beide samenvoegt met een spatie, en print <code>message</code>.",
    file: "exercises/02/concatenate.py",
    tests: "exercises/02/concatenate.test.py"
  },
  {
    title: "Teken ophalen op index",
    description:
      "Maak de variabele <code>word</code> met waarde <code>\"python\"</code>. Haal het eerste teken uit <code>word</code> via indexering en bewaar het in <code>first_char</code>. Print <code>first_char</code>.",
    file: "exercises/02/index-first.py",
    tests: "exercises/02/index-first.test.py"
  },
  {
    title: "Teken ophalen vanaf het einde",
    description:
      "Gebruik dezelfde stringtechniek maar nu vanaf het einde. Maak <code>word</code> met waarde <code>\"python\"</code>. Haal het laatste teken op met negatieve indexering en bewaar het in <code>last_char</code>. Print <code>last_char</code>.",
    file: "exercises/02/index-last.py",
    tests: "exercises/02/index-last.test.py"
  },
  {
    title: "Slicing",
    description:
      "Maak <code>phrase</code> met waarde <code>\"programmeren\"</code>. Neem een slice van de eerste 7 tekens (index 0 t/m 6) en bewaar die in <code>part</code>. Print <code>part</code>.",
    file: "exercises/02/slice-begin.py",
    tests: "exercises/02/slice-begin.test.py"
  },
  {
    title: "Slicing vanaf het einde",
    description:
      "Maak <code>phrase</code> met waarde <code>\"programmeren\"</code>. Neem de laatste 4 tekens met slicing en bewaar ze in <code>tail</code>. Print <code>tail</code>.",
    file: "exercises/02/slice-end.py",
    tests: "exercises/02/slice-end.test.py"
  },
  {
    title: "Lengte van een string",
    description:
      "Maak de variabele <code>word</code> met waarde <code>\"programmeren\"</code>. Bepaal de lengte met <code>len()</code> en print de lengte.",
    file: "exercises/02/len-basic.py",
    tests: "exercises/02/len-basic.test.py"
  },
  {
    title: "Substring aanwezig?",
    description:
      "Maak de variabele <code>phrase</code> met waarde <code>\"Python is leuk\"</code>. Controleer of <code>\"leuk\"</code> in <code>phrase</code> zit. Bewaar het resultaat in <code>has_word</code> en print <code>has_word</code>.",
    file: "exercises/02/substring-in.py",
    tests: "exercises/02/substring-in.test.py"
  },
  {
    title: "Spatie verboden",
    description:
      "Maak de variabele <code>username</code> met waarde <code>\"voornaam_achternaam\"</code>. Controleer of er <strong>geen</strong> spatie in zit met <code>\" \" not in username</code>. Bewaar het resultaat in <code>no_space</code> en print <code>no_space</code>.",
    file: "exercises/02/substring-not-in.py",
    tests: "exercises/02/substring-not-in.test.py"
  },
  {
    title: "Hoofdletters maken",
    description:
      "Maak de variabele <code>word</code> met waarde <code>\"Python\"</code>. Zet de tekst om naar hoofdletters met <code>upper()</code> en print het resultaat.",
    file: "exercises/02/upper-lower.py",
    tests: "exercises/02/upper-lower.test.py"
  },
  {
    title: "Trimmen en vervangen",
    description:
      "Maak de variabele <code>text</code> met waarde <code>\"  spam, spam, eggs  \"</code>. Verwijder voor- en achterliggende spaties met <code>strip()</code>. Vervang daarna alle voorkomens van <code>\"spam, \"</code> zodat enkel <code>\"eggs\"</code> overblijft, en print het resultaat.",
    file: "exercises/02/strip-replace.py",
    tests: "exercises/02/strip-replace.test.py"
  },
  {
    title: "Begroeting met concatenatie",
    description:
      "Maak <code>first</code> met waarde <code>\"Hallo\"</code> en <code>name</code> met waarde <code>\"Janiek\"</code>. Bouw <code>message</code> met concatenatie zodat de output <code>\"Hallo, Janiek!\"</code> is, en print <code>message</code>.",
    file: "exercises/02/concat-greeting.py",
    tests: "exercises/02/concat-greeting.test.py"
  },
  {
    title: "Begroeting met f-string",
    description:
      "Maak dezelfde variabelen <code>first</code> en <code>name</code> en bouw <code>message</code> met een f-string zodat de output exact <code>\"Hallo, Janiek!\"</code> is. Print <code>message</code>.",
    file: "exercises/02/fstring-greeting.py",
    tests: "exercises/02/fstring-greeting.test.py"
  }
];