import { loadPage } from "./app.js";

window.addEventListener("load", async () => {
    await loadPage("questions-3",questions);
});

const questions = [
  {
    title: "If: positief getal",
    description:
      "Maak de variabele <code>num</code> met waarde <code>5</code>. Als <code>num</code> groter is dan 0, print dan <code>\"positief\"</code>.",
    file: "exercises/03/if-positive.py",
    tests: "exercises/03/if-positive.test.py"
  },
  {
    title: "If-else: even of oneven",
    description:
      "Maak de variabele <code>n</code> met waarde <code>8</code>. Print <code>\"even\"</code> als <code>n % 2 == 0</code>, anders print <code>\"oneven\"</code>.",
    file: "exercises/03/if-else-even.py",
    tests: "exercises/03/if-else-even.test.py"
  },
  {
    title: "If-elif-else: score naar label",
    description:
      "Maak <code>score</code> met waarde <code>74</code>. Gebruik <code>if</code>-<code>elif</code>-<code>else</code> om te printen: <code>\"goed\"</code> als score ≥ 80, <code>\"voldoende\"</code> als score ≥ 60, anders <code>\"onvoldoende\"</code>.",
    file: "exercises/03/if-elif-score.py",
    tests: "exercises/03/if-elif-score.test.py"
  },
  {
    title: "Meervoudige voorwaarden (and)",
    description:
      "Maak <code>age</code> met waarde <code>20</code> en <code>has_ticket</code> met waarde <code>True</code>. Print <code>\"toegang\"</code> als <code>age ≥ 18</code> <em>en</em> <code>has_ticket</code> True is; anders print <code>\"geen toegang\"</code>.",
    file: "exercises/03/and-access.py",
    tests: "exercises/03/and-access.test.py"
  },
  {
    title: "Meervoudige voorwaarden (or)",
    description:
      "Maak <code>is_student</code> met waarde <code>False</code> en <code>has_discount_code</code> met waarde <code>True</code>. Print <code>\"korting\"</code> als één van beide waar is (<code>or</code>); anders print <code>\"geen korting\"</code>.",
    file: "exercises/03/or-discount.py",
    tests: "exercises/03/or-discount.test.py"
  },
  {
    title: "Max van twee getallen",
    description:
      "Maak <code>a</code> met waarde <code>12</code> en <code>b</code> met waarde <code>7</code>. Print het grootste getal met een <code>if-else</code>.",
    file: "exercises/03/max-of-two.py",
    tests: "exercises/03/max-of-two.test.py"
  }
];

