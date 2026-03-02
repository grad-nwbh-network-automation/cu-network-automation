import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-7", questions);
});

const questions = [
  {
    title: "def keyword toevoegen",
    description:
      "Het keyword <code>def</code> ontbreekt. Voeg <code>def</code> toe vóór de functienaam zodat de functie correct gedefinieerd wordt.",
    file: "exercises/07/write-def.py",
    tests: "exercises/07/write-def.test.py"
  },
  {
    title: "Functienaam schrijven",
    description:
      "Na <code>def</code> ontbreekt de functienaam. Schrijf de naam <code>welcome</code> gevolgd door <code>():</code> zodat de functie correct gedefinieerd wordt. Onderaan wordt <code>welkom()</code> al aangeroepen.",
    file: "exercises/07/write-name.py",
    tests: "exercises/07/write-name.test.py"
  },
  {
    title: "Functie aanroepen",
    description:
      "De functie <code>show_banner()</code> is al gedefinieerd. Roep ze aan op de lege regel onderaan (vergeet de haakjes niet!).",
    file: "exercises/07/write-call.py",
    tests: "exercises/07/write-call.test.py"
  },
  {
    title: "Parameter toevoegen",
    description:
      "De functie <code>greet</code> heeft een lege parametrelijst. Voeg de parameter <code>name</code> toe tussen de haakjes zodat de f-string in de body werkt.",
    file: "exercises/07/write-param.py",
    tests: "exercises/07/write-param.test.py"
  },
  {
    title: "return keyword toevoegen",
    description:
      "De functie <code>square(n)</code> berekent <code>n * n</code>, maar het keyword <code>return</code> ontbreekt. Voeg <code>return</code> toe zodat het resultaat wordt teruggegeven.",
    file: "exercises/07/write-return.py",
    tests: "exercises/07/write-return.test.py"
  },
  {
    title: "Functie definiëren en aanroepen",
    description:
      "Vul de <code>print()</code> aan in de functie <code>greet()</code> zodat ze <code>\"Hallo!\"</code> print. De functie wordt daarna aangeroepen.",
    file: "exercises/07/def-hello.py",
    tests: "exercises/07/def-hello.test.py"
  },
  {
    title: "Functie met parameter",
    description:
      "Vul de <code>print()</code> aan in <code>greet(name)</code> zodat ze <code>\"Hallo, Amina!\"</code> print. Gebruik een f-string.",
    file: "exercises/07/def-param.py",
    tests: "exercises/07/def-param.test.py"
  },
  {
    title: "Return-waarde: double",
    description:
      "Vul het <code>return</code>-statement aan zodat <code>double(n)</code> het dubbel van <code>n</code> teruggeeft.",
    file: "exercises/07/return-double.py",
    tests: "exercises/07/return-double.test.py"
  },
  {
    title: "Default parameter",
    description:
      "Geef de parameter <code>level</code> een standaardwaarde <code>\"INFO\"</code>. De functie print <code>[level] msg</code>.",
    file: "exercises/07/default-param.py",
    tests: "exercises/07/default-param.test.py"
  },
  {
    title: "Return True/False: poort valideren",
    description:
      "Vul het <code>return</code>-statement aan zodat <code>is_valid_port(port)</code> <code>True</code> teruggeeft als de poort tussen 1 en 65535 ligt, anders <code>False</code>.",
    file: "exercises/07/return-bool.py",
    tests: "exercises/07/return-bool.test.py"
  },
  {
    title: "Functie + list: errors tellen",
    description:
      "Vul de <code>if</code>-conditie aan zodat <code>count_errors(lines)</code> telt hoeveel regels het woord <code>\"ERROR\"</code> bevatten.",
    file: "exercises/07/func-list.py",
    tests: "exercises/07/func-list.test.py"
  },
  {
    title: "Functie + dict: host opvragen",
    description:
      "Vul de juiste key in zodat <code>get_host(device)</code> de waarde van <code>'host'</code> uit de device-dictionary teruggeeft.",
    file: "exercises/07/func-dict.py",
    tests: "exercises/07/func-dict.test.py"
  },
  {
    title: "Geneste dict: secret opvragen",
    description:
      "Vul de twee keys in zodat <code>get_secret(device)</code> de waarde van <code>'secret'</code> uit de geneste <code>'credentials'</code>-dictionary teruggeeft.",
    file: "exercises/07/func-nested-dict.py",
    tests: "exercises/07/func-nested-dict.test.py"
  },
  {
    title: "Functie + lus: alle hosts printen",
    description:
      "Vul de <code>print()</code> aan zodat <code>list_hosts(devices)</code> de <code>'host'</code> van elk device in de lijst print.",
    file: "exercises/07/func-loop-devices.py",
    tests: "exercises/07/func-loop-devices.test.py"
  },
  {
    title: "Functie + filter: alleen Cisco",
    description:
      "Vul de <code>if</code>-conditie aan zodat <code>find_cisco(devices)</code> alleen devices met <code>device_type</code> gelijk aan <code>'cisco_ios'</code> teruggeeft.",
    file: "exercises/07/func-filter.py",
    tests: "exercises/07/func-filter.test.py"
  }
];
