import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-2",questions);
});

const questions = [
    {
        title: "Hallo wereld!",
        description: "Om deze oefening tot een goed einde te brengen, type <code>print(\"Hallo wereld\")</code> en klik op run",
        file: "exercises/01/hello-world.py",
        tests: "exercises/01/hello-world.test.py"
    },
    {
        title: "Een waarde aan een variabele toekennen",
        description: "Hier declareren we de variabele <code>num</code>. Maar het heeft nog geen waarde. Ken deze variabele een waarde toe en voer de code uit.",
        file: "exercises/01/assign-variable.py",
        tests: "exercises/01/assign-variable.test.py"
    },
    {
        title: "Een variabele aanmaken",
        description: "Hier proberen we een variabele weg te schrijven naar de console, maar de variabele bestaat nog niet. Maak de variabele <code>num</code> aan en geef deze variabele een waarde. Voer de code daarna uit.",
        file: "exercises/01/create-variable.py",
        tests: "exercises/01/assign-variable.test.py"
    },
    {
        title: "Een variabele re-assignen",
        description: "In deze oefening heeft <code>num</code> de waarde 5. Geef er de waarde 10 aan. Voer de code daarna uit.",
        file: "exercises/01/reassign-variable.py",
        tests: "exercises/01/reassign-variable.test.py"
    },
    {
        title: "Waarde van een variabele ophalen I",
        description: "In deze oefening creëren we een variabele en proberen we ze uit te printen. Maar, er is een kleine fout. Herstel de code en voer ze uit.",
        file: "exercises/01/get-value-of-variable.py",
        tests: "exercises/01/get-value-of-variable.test.py"
    },
    {
        title: "Waarde van een variabele ophalen II",
        description: "In deze oefening creëren we een variabele en proberen we ze uit te printen. Maar, er is een kleine fout. Herstel de code en voer ze uit.",
        file: "exercises/01/get-value-of-variable-2.py",
        tests: "exercises/01/get-value-of-variable-2.test.py"
    },
    {
        title: "Commentaar",
        description: "In deze oefening creëren we een variabele en proberen we ze uit te printen. Maar, er is nog een print() commando dat we niet willen uitvoeren. Verander de lijn in commentaar, zodat ze niet wordt uitgevoerd.",
        file: "exercises/01/comment.py",
        tests: "exercises/01/comment.test.py"
    },
];

