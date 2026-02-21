import { CodeJar } from "https://cdn.jsdelivr.net/npm/codejar@4.3.0/dist/codejar.min.js";

let runBtn, resetBtn, divConsole, editorContainer, questionContainer, titleContainer, listTestResults, divStatus;

let pyodide = null;
let jar;
let currentStarterCode, currentTestCode = "";
let currentQuestion, questions;

export async function loadPage(_questions) {
  const hasStoredQuestions = localStorage.getItem("questions");
  if (!hasStoredQuestions) {
    questions = _questions;
  }
  else {
    questions = JSON.parse(localStorage.getItem("questions"));
  }
  // Start init onmiddellijk
  runBtn = document.getElementById("runBtn");
  questionContainer = document.getElementById("question-container");
  runBtn.addEventListener("click", runCode);
  resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => jar.updateCode(currentStarterCode));
  divConsole = document.getElementById("console");
  titleContainer = document.getElementById("title");
  divStatus = document.getElementById("status");
  listTestResults = document.getElementById("testResults");
  editorContainer = document.getElementById("editor-container");
  jar = CodeJar(editorContainer,
    (el) => {
      // Prism highlight werkt op element, CodeJar geeft de node door
      Prism.highlightElement(el);
    }
    , { tab: '  ' });
  runBtn.disabled = true;
  setQuestions(questions);
  loadQuestion(questions[0]);
  currentQuestion = questions[0];
  divConsole.textContent = "⏳ Python runtime laden (Pyodide)...";

  pyodide = await loadPyodide();

  divConsole.textContent = "✅ Python runtime klaar. Klik op Run om je code uit te voeren.";
  runBtn.disabled = false;
}

async function runCode() {

  runBtn.disabled = true;

  divConsole.textContent = "▶️ Running Python...\n";
  try {
    const code = jar ? jar.toString() : "";
    if (!code.trim()) {
      divConsole.textContent = "⚠️ Geen code om uit te voeren.";
      return;
    }

    const response = JSON.parse(pyodide.runPython(buildPythonBundle(code, currentTestCode)));
    divConsole.textContent = response.console;

    listTestResults.innerHTML = "";
    let passes = 0;
    response.results.forEach(r => {
      const li = document.createElement('li');
      li.textContent = `${r.passed ? '✅' : '❌'} ${r.name}`;
      li.className = r.passed ? 'pass' : 'fail';
      listTestResults.appendChild(li);
      if (r.passed) passes++;
    });
    divStatus.innerHTML = `Einde: <strong>${passes}/${response.results.length}</strong> van de testen geslaagd.`;
    if (passes === response.results.length && passes !== 0) {
      currentQuestion.title = "✅ " + currentQuestion.title;
      localStorage.setItem("questions", JSON.stringify(questions));
      setQuestions(questions);
    }
  } catch (e) {
    divConsole.textContent += `\n❌ Onverwachte fout: ${e?.message || e}`;
  } finally {
    runBtn.disabled = false;
  }

}

function setQuestions(questions) {
  const questionList = document.getElementById("questionList");
  questionList.innerHTML = "";
  for (const question of questions) {
    const li = document.createElement("li");
    li.innerText = question.title;
    li.addEventListener("click", async () => {
      await loadQuestion(question);
      currentQuestion = question;
    });
    questionList.append(li);
  }
}

async function loadQuestion(question) {
  currentStarterCode = await loadPythonExcercise(question.file);
  currentTestCode = await loadTests(question.tests);
  jar.updateCode(currentStarterCode);

  questionContainer.innerHTML = question.description;
  titleContainer.innerText = question.title;
}


async function loadPythonExcercise(exerciseFile) {
  return fetch(exerciseFile)
    .then(res => {
      if (!res.ok) throw new Error("Kon Python bestand niet laden");
      return res.text();
    })
    .catch(err => {
      console.error(err);
      return "# Fallback code\nprint('Bestand niet gevonden')";
    });
}

async function loadTests(testFile) {
  return fetch(testFile)
    .then(res => {
      if (!res.ok) throw new Error("Kon Test-bestand niet laden");
      return res.text();
    })
    .catch(err => {
      console.error(err);
      return "# Fallback code\nprint('Test-Bestand niet gevonden')";
    });
}


function buildPythonBundle(userCode, tests) {
  // const testsJoined = tests?.join('\n');
  return `
import sys, io, json, traceback

_console = io.StringIO()
_stdout = sys.stdout
sys.stdout = _console

results = []
def assert_eq(name, cond):
  results.append({"name": str(name), "passed": bool(cond)})

try:
  # ===== USER CODE START =====
${"\t" + userCode.replace(/\n/g, "\n\t")}
  # ===== USER CODE END =====

  # ===== TESTS START =====
${"\t" + tests.replace(/\n/g, "\n\t")}
  # ===== TESTS END =====


except Exception as e:
    tb = traceback.format_exc()
    results.append({"name": "Exception during execution", "passed": False})
    print(tb)

sys.stdout = _stdout
output = _console.getvalue()
json.dumps({"results": results, "console": output})
`;
}