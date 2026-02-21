import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-2", questions);
});

const questions = [
    {
        title: "Welkom tekst",
        description: "Geef tekst mee!",
        file: "exercises/02/02/first-string.py",
        tests: "exercises/02/02/first-string.test.py"
    },
    {
        title: "Tekst samenvoegen",
        description: "Gebruik '+' om a en b samen te voegen ! Vergeet de spatie niet !",
        file: "exercises/02/02/concatenate.py",
        tests: "exercises/02/02/concatenate.test.py"
    },
];

