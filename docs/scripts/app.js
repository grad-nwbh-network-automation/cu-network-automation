import {CodeJar} from "https://cdn.jsdelivr.net/npm/codejar@4.3.0/dist/codejar.min.js";

let runBtn, resetBtn, divConsole, editorContainer;

let pyodide = null;
let jar;

window.addEventListener("load", async () => {
  // Start init onmiddellijk
  runBtn = document.getElementById("runBtn");
  runBtn.addEventListener("click", runCode);
  resetBtn = document.getElementById("resetBtn");
  divConsole = document.getElementById("console");
  editorContainer = document.getElementById("editor-container");
  jar = CodeJar(editorContainer,
    (el) => {
      // Prism highlight werkt op element, CodeJar geeft de node door
      Prism.highlightElement(el);
    }
    , { tab: '  ' });
  jar.updateCode(await loadPythonExcercise());


  pyodide = await loadPyodide();
});


// --- Pyodide init ---
async function initPyodide() {
  runBtn.disabled = true;
  divConsole.textContent = "⏳ Python runtime laden (Pyodide)...";

  // loadPyodide is globaal beschikbaar na het inladen van pyodide.js
  const pyodide = await loadPyodide({ indexURL: PYODIDE_INDEX_URL });

  // Voor nu geen extra packages laden (micropip e.d. doen we pas bij stap 3 indien nodig)
  divConsole.textContent = "✅ Python runtime klaar. Klik op Run om je code uit te voeren.";
  runBtn.disabled = false;
  return pyodide;
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


    console.log(buildPythonBundle(code));
    const response = JSON.parse(pyodide.runPython(buildPythonBundle(code)));

    divConsole.textContent = response.console;
  } catch (e) {
    divConsole.textContent += `\n❌ Onverwachte fout: ${e?.message || e}`;
  } finally {
    runBtn.disabled = false;
  }

}


async function loadPythonExcercise(exercise_file = "exercises/01/exercise01.py") {
  return fetch(exercise_file)
    .then(res => {
      if (!res.ok) throw new Error("Kon Python bestand niet laden");
      return res.text();
    })
    .catch(err => {
      divConsole.error(err);
      return "# Fallback code\nprint('Bestand niet gevonden')";
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

except Exception as e:
    tb = traceback.format_exc()
    results.append({"name": "Exception during execution", "passed": False})
    print(tb)

sys.stdout = _stdout
output = _console.getvalue()
json.dumps({"results": results, "console": output})
`;
}