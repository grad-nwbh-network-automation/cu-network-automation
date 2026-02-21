import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage(questions);
});

const questions = [
    {
        title: "Hallo wereld!",
        description: "Om deze oefening tot een goed einde te brengen, type <code>print(\"Hallo wereld\")</code> en klik op run",
        file: "exercises/02/hello-world.py",
        tests: "exercises/02/hello-world.test.py"
    },
    {
        title: "Een waarde aan een variabele toekennen",
        description: "Hier declareren we de variabele num. Maar het heeft nog geen waarde. Ken deze variabele een waarde toe en voer de code uit.",
        file: "exercises/02/assign-variable.py",
        tests: "exercises/02/assign-variable.test.py"
    },
    {
        title: "Een variabele aanmaken",
        description: "Hier proberen we een variabele weg te schrijven naar de console, maar de variabele bestaat nog niet. Maak de variabele <code>num</code> aan en geef deze variabele een waarde. Voer de code daarna uit.",
        file: "exercises/02/create-variable.py",
        tests: "exercises/02/assign-variable.test.py"
    },
];

