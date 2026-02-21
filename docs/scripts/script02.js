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
    }
];

