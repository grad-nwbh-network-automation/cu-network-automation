# Hoofdstuk 6 — Werken met bestanden
## File-IO & `pathlib`

### Theorie (eerst even kaderen)

Bij automatisatie werk je vaak met **bestanden** en **mappen**: configs genereren, logs filteren, inventarisaties wegschrijven… In Python kan dat met de **standaardbibliotheek**—je hoeft niet meteen externe packages te installeren.

**Belangrijkste bouwstenen die je vandaag tegenkomt:**

* **`pathlib`**: paden als objecten (`Path`) i.p.v. strings. OS-onafhankelijk, duidelijke API, veilig joinen met `/`.
* **`open()` / context managers**: bestanden **lezen/schrijven**. Met `with ... as f:` sluit Python automatisch (minder kans op locks/corruptie).
* **`encoding="utf-8"`**: zet dit **altijd expliciet** bij tekst-IO om rare tekens te voorkomen.
* **Schrijfmodi**:

  * `'w'` (**write**): **overschrijft** of maakt nieuw bestand.
  * `'a'` (**append**): **voegt toe** aan het eind (maakt aan als het nog niet bestaat).
  * `'r'` (**read**): lezen.
* **Relatief vs absoluut pad**:

  * Relatieve paden zijn t.o.v. de **CWD** (Current Working Directory). Check met `Path.cwd()`.
  * Absoluut pad tonen voor debugging: `path.resolve()`.
* **Idempotentie**:

  * Scripts moeten veilig **opnieuw** kunnen draaien. Gebruik bv. `mkdir(exist_ok=True)` en ontwerp zo dat je niets stukmaakt bij een tweede run.
* **Andere nuttige standaardmodules** (voor later in automatisatie):

  * `shutil` (kopiëren/verplaatsen),
  * `datetime` (datastempels in bestandsnamen),
  * `csv`/`json`/`yaml` (dataformaten; `yaml` via `pyyaml`),
  * `subprocess` (shell-commando’s),
  * `psutil` (systeeminfo; extern pakket).

We bekijken dit aan de hand van **drie korte voorbeelden**.

---

### Voorbeeld 1 — Basis: map maken, bestand **overschrijven**, en lezen

**Wat leer je hier?** 
CWD tonen, map garanderen, één bestand **overschrijven** met `write_text()`, daarna **lezen** met `read_text()`.

```python
from pathlib import Path

# 0) Waar draait dit script? (relatieve paden baseren hierop)
print("CWD:", Path.cwd())

# 1) Zorg dat 'data/' bestaat (geen fout als het al bestaat)
data_dir = Path("data")
data_dir.mkdir(exist_ok=True)

# 2) Volledig pad naar 'data/hello.txt' ('/' = OS-onafhankelijk pad-join)
file_path = data_dir / "hello.txt"

# 3) SCHRIJVEN (OVERSCHRIJVEN): maakt aan of leegt en vult opnieuw
file_path.write_text("Hello\n", encoding="utf-8")

# 4) LEZEN: hele bestand als string
content = file_path.read_text(encoding="utf-8")
print("Inhoud:", content)

# 5) Debug: toon absoluut pad op schijf
print("Bestand staat op:", file_path.resolve())
```

---

### Voorbeeld 2 — **Toevoegen (append)** met `with ... as f:` (aanbevolen)

**Waarom zo?** Met `with` sluit Python **altijd** het bestand (ook bij fouten). We gebruiken `'a'` om **regels toe te voegen** i.p.v. te overschrijven.

```python
from pathlib import Path

print("CWD:", Path.cwd())

data_dir = Path("data")
data_dir.mkdir(exist_ok=True)
file_path = data_dir / "hello.txt"

# (Optioneel) reset voor demo: startbestand overschrijven met 1 regel
file_path.write_text("Hello\n", encoding="utf-8")

# APPEND: regels toevoegen aan het einde (aanbevolen patroon met context manager)
with file_path.open("a", encoding="utf-8") as f:
    f.write("Everyone\n")
    f.write("This is a test file.\n")
    f.write("Goodbye!\n")
    f.write("Extra regel\n")
    f.write("Nog een regel\n")

print("Inhoud na append:\n", file_path.read_text(encoding="utf-8"))
print("Bestand:", file_path.resolve())
```

---

### Voorbeeld 3 — **Append zonder** `with` (handmatig `open/close` met `try/finally`)

**Wanneer zo?** Bijna nooit nodig; dit is didactisch. Als je `with` niet gebruikt, **moet** je zelf correct sluiten met `try/finally`.

```python
from pathlib import Path

print("CWD:", Path.cwd())

data_dir = Path("data")
data_dir.mkdir(exist_ok=True)
file_path = data_dir / "hello.txt"

# (Optioneel) reset voor demo
file_path.write_text("Hello\n", encoding="utf-8")

# APPEND — zónder with: zelf open/close, beschermd met try/finally
f = file_path.open("a", encoding="utf-8")
try:
    f.write("Everyone\n")
    f.write("This is a test file.\n")
    f.write("Goodbye!\n")
    f.write("Extra regel\n")
    f.write("Nog een regel\n")
finally:
    f.close()  # ALWAYS close (ook bij exceptions)

# Extra append-ronde om te tonen dat de file netjes vrijgegeven is
f = file_path.open("a", encoding="utf-8")
try:
    f.write("Append na vorige close — werkt netjes.\n")
finally:
    f.close()

print("Inhoud na append:\n", file_path.read_text(encoding="utf-8"))
print("Bestand:", file_path.resolve())
```
---

## Oefening 1 — Basis-IO met `pathlib`: schrijven (overschrijven) + lezen

**Doel**
Oefen de basis met `pathlib`: CWD tonen, map garanderen, **overschrijven** met `write_text()`, en **lezen** met `read_text()`.

**Context**
Je script moet veilig opnieuw kunnen draaien (idempotent). We werken in de projectroot met relatieve paden.

**Bestanden & paden**

* Map: `data/`
* Doelbestand: `data/hello.txt`
* Scriptnaam (voorstel): `labs/fileio_basic.py`

**Eisen / Stappen**

1. Print de **CWD** met `Path.cwd()`.
2. Maak (indien nodig) de map `data/` met `mkdir(exist_ok=True)`.
3. Bouw het pad naar `data/hello.txt` met `Path("data") / "hello.txt"`.
4. Schrijf met **`write_text()`** de inhoud:

   ```
   Hello
   ```

   (met een afsluitende newline). Gebruik **`encoding="utf-8"`**.
5. Lees de volledige inhoud terug met **`read_text(encoding="utf-8")`**.
6. Print op het scherm:

   * `Inhoud: <hier de inhoud>`
   * Het **absolute pad** via `resolve()`.

**Tips**

* `write_text()` **overschrijft** de file; dat is hier de bedoeling.
* Relatieve paden werken t.o.v. je **CWD** (run vanuit projectroot).
* Voeg zelf `\n` toe als je een nieuwe regel wil.

**Verwachte output (voorbeeld)**

```
CWD: /.../jouw/project
Inhoud: Hello
Bestand staat op: /.../jouw/project/data/hello.txt
```

---

## Oefening 2 — Append met context manager: dagboekregels toevoegen

**Doel**
Gebruik **append**-modus (`"a"`) en **`with ... as f:`** om meerdere regels **toe te voegen** zonder te overschrijven.

**Context**
We simuleren een mini-“journal” dat je bij elke run uitbreidt. Je wil **geen dataverlies** en **geen open file handles**.

**Bestanden & paden**

* Map: `data/`
* Doelbestand: `data/journal.txt`
* Scriptnaam (voorstel): `labs/fileio_append_with.py`

**Eisen / Stappen**

1. Garandeer `data/` (zie oefening 1).
2. Gebruik **`write_text("Start\n", encoding="utf-8")`** om éénmalig een startregel te plaatsen.
   *(Mag blijven staan; bij volgende runs mag dit stuk overslagen worden als het bestand al bestaat.)*
3. Open `data/journal.txt` in **append**-modus met:

   ```python
   with file_path.open("a", encoding="utf-8") as f:
       ...
   ```
4. Voeg **minstens 4 regels** toe, elk afgesloten met `\n` (bv. “Entry 1”, “Entry 2”, …).
5. Lees nadien het volledige bestand en print:

   * `"Inhoud na append:\n<inhoud>"`
   * Het absolute pad.

**Tips**

* **Context manager** sluit **automatisch** (ook bij excepties) → aan te raden in echte scripts.
* `encoding="utf-8"` **altijd** expliciet zetten.
* Als je “initiële write” (stap 2) elke run uitvoert, overschrijf je de file. Wil je dat **niet**, omring die stap met:

  ```python
  if not file_path.exists():
      file_path.write_text("Start\n", encoding="utf-8")
  ```

**Verwachte output (voorbeeld)**

```
Inhoud na append:
Start
Entry 1
Entry 2
Entry 3
Entry 4
Bestand: /.../project/data/journal.txt
```

---

## Oefening 3 — Append zonder `with`: handmatig `open/close` met `try/finally`

**Doel**
Begrijp wat `with` voor je oplost door **handmatig** te openen en **altijd te sluiten** met `try/finally`.

**Context**
Je wil tonen dat correct gebruik zonder context manager **mogelijk** is, maar foutgevoeliger. We doen twee append-rondes om te bewijzen dat de file-handle netjes vrijgegeven is.

**Bestanden & paden**

* Map: `data/`
* Doelbestand: `data/manual_append.txt`
* Scriptnaam (voorstel): `labs/fileio_append_no_with.py`

**Eisen / Stappen**

1. Garandeer `data/`.
2. Zet een startregel met `write_text("Header\n", encoding="utf-8")` (of sla dit over als het bestand al bestaat).
3. **Append-ronde 1 (zonder `with`)**:

   * `f = file_path.open("a", encoding="utf-8")`
   * In een **`try:`**-blok: schrijf **minstens 3 regels** (elk met `\n`).
   * In **`finally:`**: **`f.close()`**.
4. **Append-ronde 2 (zonder `with`)**:

   * Open opnieuw in `"a"`, schrijf **minstens 1 regel**, sluit weer in `finally`.
5. Lees daarna het bestand en print:

   * `"Inhoud na append:\n<inhoud>"`
   * Het absolute pad via `resolve()`.

**Tips**

* Zonder `with` moet je **zelf** `close()` garanderen (via `finally`)—anders risico op **locks** (Windows) en **onvolledig weggeschreven buffers**.
* Append (`"a"`) **maakt** de file als hij nog niet bestaat.

**Verwachte output (voorbeeld)**

```
Inhoud na append:
Header
Ronde1: regel A
Ronde1: regel B
Ronde1: regel C
Ronde2: slotregel
Bestand: /.../project/data/manual_append.txt
```

---

### (Optionele) Klaar? Probeer je deze ook?

* Voeg een **timestamp** toe per regel met `from datetime import datetime` en `datetime.now().isoformat()`.
* Print ook de **bestandslengte** met `len(read_text(...))` of het **aantal regels** met `len(read_text(...).splitlines())`.
* Toon het verschil tussen **overschrijven** (`'w'`) en **append** (`'a'`) door eerst `'w'` te gebruiken en daarna `'a'`.
---