# Hoofdstuk 1 — Intro, installatie en Python-basis 
## Wat is Python?

* Een **programmeertaal** die **makkelijk leesbaar** is (weinig speciale tekens). Je kan er snel kleine scripts mee maken die echt werk doen.
* **Waar gebruik je het voor?** Automatisatie (bestanden, logs, services), web, data, AI, CLI-tools.
* **Waarom populair?** Grote community en **veel kant-en-klare bouwstenen** (packages).

### Kleine geschiedenis

* **Maker**: Guido van Rossum — eerste release **1991**.
* Guido Van Rossum was grote fan van de komedie-reeks van **'Monty Python'**. In het begin waren er heel wat referenties naar die reeks in voorbeelden terug te vinden.
* **Filosofie**: maak de taal **eenvoudig** zodat je sneller **begrijpt dan zoekt**.
* Uitgegroeid tot een van de meest gebruikte programmeertalen wereldwijd.

### Populaire libraries (waarom sysadmins dit boeit)

* `requests` (HTTP healthchecks/APIs)
* `paramiko` (SSH/SFTP)
* `jinja2` (config-templates)
* `pyyaml` (YAML ↔ Ansible)
* `schedule`/`APScheduler` (taken plannen)
* `psutil` (systeeminfo).
  
*(Vandaag blijven we bij de standaardbibliotheek; dit is vooruitblik.)*


## Hoe “draait” Python?

* **Python**: jouw `.py` gaat naar een **Python-engine** op je OS.

  * **CPython** (standaard): denk aan een **voorlezer** die je code **regel voor regel** omzet naar **bytecode** en die uitvoert op een **kleine virtuele machine**.
  * **PyPy**: zelfde idee, maar met **JIT** die vaak-herhaalde stukken op snelheid brengt.
  * Andere varianten bestaan (Jython, IronPython, MicroPython, Pyodide), maar **wij gebruiken CPython**.
* **Wat je onthoudt**: installeer **Python**, run scripts **rechtstreeks op je pc/server**.


## Installatie (stap-voor-stap)

### 1) Python 3.12+

Bij sommige bestuurssystemen is 

**Windows**

1. Ga naar **python.org/downloads** → Windows 64-bit installer.
2. **Vink “Add python.exe to PATH” aan** → *Install Now*.
3. Check in **PowerShell**:

   ```powershell
   python --version
   pip --version
   ```

   Zie je `Python 3.13.x`? Goed.

*Python kan je ook installeren via de App Store van Microsoft. Het kan daarbij voorvallen dat Python nog gelinkt staat aan het install-script van de app-store. Om dit te verhelpen ga je naar App execution aliases. Check daar 'App Installer - Python' en 'App Installer Python3' af*

**macOS**

```bash
brew install python
python3 --version
pip3 --version
```

**Linux (Debian/Ubuntu)**

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv
python3 --version
pip3 --version
```

> Tip: op macOS/Linux meestal `python3`/`pip3`, op Windows `python`/`pip`.

### 2) VS Code + extensies

* **VS Code** installeren (code.visualstudio.com).
* Extensies: **Python** (Microsoft).
  - deze installeert: **Python**, **Python Debugger**, **Python Environments** en **Pylance**. (zie later)
  - In VS Code: Extensions (Ctrl/Cmd+Shift+X) → zoek Python → *Install*.

### 3) Eerste project + **venv** (wat het écht is)

Maak een map, open terminal in die map:

**Windows (PowerShell)**

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**macOS/Linux**

```bash
python3 -m venv .venv
source .venv/bin/activate
```

**Wat is “venv”:**

* **Geen apart programma**; `venv` is **meegeleverd** met Python.
* Het maakt een **map** (vaak `.venv/`) met:

  * een **koppeling/kopie** van de Python-interpreter,
  * een **eigen plek voor packages** (zodat die **niet** in je globale systeem terechtkomen).
* **Waarom niet gewoon `main.py` zonder venv?**

  * Project A wil `requests==2.31`, project B wil `2.29`. Zonder venv botst dat.
  * Met venv heeft élk project **zijn eigen set** packages/versies → **minder verrassingen** en **makkelijker delen** met collega’s (“`pip freeze > requirements.txt`”).
* **Twee praktische weetjes**:

  * De **Python-versie** van je venv komt van de **interpreter** waarmee je venv maakt. Wil je 3.11? Installeer 3.11 en doe `py -3.11 -m venv .venv` (Windows) of `python3.11 -m venv .venv` (macOS/Linux).
  * Waar worden bestanden gemaakt? **Relatief** aan waar je het script runt. Check desnoods:

    ```python
    from pathlib import Path
    print("CWD:", Path.cwd())
    ```

**Controle**

```bash
python --version   # of python3 --version
pip list
```

---

## Pip en co. — wat & waarom

* **pip** = **app-store voor Python-code**. Je haalt **bouwstenen** binnen die anderen al gemaakt en getest hebben.

  ```bash
  pip install requests
  python -c "import requests; print(requests.__version__)"
  ```

  → installeert in **jouw venv**, niet in je hele systeem.
* **Waarom bestaan pip/Poetry/Conda enz.?**
  Omdat projecten **afhankelijkheden** hebben (welke packages, welke versies). Tools helpen **beheren**, **vastleggen** en **reproduceren**.
* **Korte duiding van de namen** (alleen om te plaatsen):

  * **pipx**: ideaal om **CLI-tools** los te installeren (elk in mini-venv), zodat ze niet botsen.
  * **Poetry** / **Pipenv**: beheren **dependency-lijsten** en **venv** in één workflow (fijne UX).
  * **Conda**: populair in **data-science**; kan ook **niet-Python** libs (bv. C-bibliotheken) mee installeren.
* **Wat doen wij nu?** Gewoon **pip in venv**. Dat is voldoende en duidelijk.

**Mini-oefening (4 min)**: activeer je venv, run `pip freeze > pip_freeze.txt`, open het bestand.

---

## Console-IO: `print()` en `input()`

**Wat is het?**

* `print()` → toon iets op het scherm.
* `input()` → vraag iets aan de gebruiker (geeft **altijd string**).

**Voorbeeld**

```python
name = input("Wat is je naam? ")
print(f"Hallo {name}!")
```

**Hoe lees je dit?** “Vraag naam, bewaar in `name`. Print ‘Hallo <naam>’.”

**Rekenen? → casten**

```python
year = int(input("Geboortejaar: "))
age = 2025 - year
print("Leeftijd:", age)
```

**Wat is “casten”?**
Een **type-omzetting**: je zegt expliciet “behandel deze tekst als getal”. Nuttig na `input()`, bij file-invoer (CSV) of APIs.

**Mini-oefening (5 min)**: vraag **naam** en **geboortejaar**, bereken leeftijd, print 1 nette zin.

## Variabelen & types (waarom meerdere?)

* Data komt in **vormen**: getallen om te rekenen, tekst om te tonen/zoeken, collecties om door te lopen. **Verschillende types** maken code **duidelijker en veiliger**.

### Primitieven

```python
age = 34          # int
ratio = 3.14      # float
msg = "ready"     # str
ok = True         # bool
nothing = None    # NoneType
```

### Collecties + **indexeren** (We gaan hier later dieper op in.)

* `list` → **ordelijk**, **wijzigbaar**, **0-gebaseerde index**
* `tuple` → **ordelijk**, **niet-wijzigbaar**, **0-gebaseerde index**
* `set` → **geen volgorde**, **geen index**, wél snelle “zit het erin?”-checks
* `dict` → **key → value** (opvragen via **key**, niet via nummer)

```python
items = [10, 20, 30]     # list
print(items[0])          # 10  (eerste is index 0)
items[1] = 99            # lijst kan je aanpassen

point = (10, 20)         # tuple
print(point[1])          # 20  (maar tuple kan je NIET wijzigen)

tags = {"INFO", "WARN"}  # set
print("INFO" in tags)    # True (set heeft geen index, wel 'in')

user = {"name": "alice", "age": 30}  # dict
print(user["name"])      # "alice"
print("age" in user)     # True (checkt sleutels)
```

**Mini-oefening (6 min)**: maak een `list` van 3 services, print de **eerste** en **laatste**, vervang de middelste. Maak een `dict` met `host`, `ip` en print de `ip`.

## Operatoren

### Rekenoperators

`+ - * / // % **`

```python
7 / 3   # 2.333...  (gewone deling)
7 // 3  # 2         (gehele/floordeling)
7 % 3   # 1         (rest/modulo)
2 ** 4  # 16        (macht)
```

**Wat is modulo (`%`)?**
De **rest** na deling. Voorbeeld: je hebt 7 logs en wil mapjes van 3 maken → 2 volle mapjes en **1 over** → `7 % 3 == 1`.
**Praktisch**: check **even/oneven** → `n % 2 == 0`.

### Vergelijking → `True/False`

`== != < <= > >=`

### Logisch

`and`, `or`, `not` combineren voorwaarden.

```python
is_linux = True
has_ssh  = False
print(is_linux and has_ssh)  # False (allebei True nodig)
print(is_linux or has_ssh)   # True  (minstens één True)
print(not has_ssh)           # True  (omkeren)
```

**Wanneer?** Als je bv. alleen verder wil als **OS = Linux** **én** **SSH actief**.

### Lidmaatschap

`in`, `not in` → “zit dit erin?”

```python
"ERROR" in "2025-11-16 ERROR Disk full"  # True
42 in [10, 42, 99]                       # True
"age" in {"name":"a","age":30}           # True (checkt sleutels)
```

**Waarom?** Snel **filteren** of **valideren** zonder lange code.

**Mini-oefening (7 min)**: vraag **poort** (int):

* print “valid” als 1–65535, anders “invalid”;
* print “privileged” als `< 1024`.
