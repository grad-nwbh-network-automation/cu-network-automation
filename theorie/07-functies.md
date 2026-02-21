# Hoofdstuk 7 — Functies (definiëren, aanroepen, argumenten, return, scope)

## Waarom functies?

* Je **vermijdt herhaling** (DRY: *Don’t Repeat Yourself*).
* Je **geeft een naam** aan een taak → code wordt **leesbaarder** en **testbaar**.
* Je kan **invoer** (argumenten) en **uitvoer** (return) duidelijk afbakenen.

> Context (sys/ops): denk aan helpers zoals `is_valid_port()`, `read_lines()`, `append_log()`, `parse_level()`.

---

## 1) Een functie definiëren en gebruiken

**Patroon**

```python
def naam_van_functie():
    # ingesprongen blok
    print("Hallo")
```

* `def` start de definitie.
* **Inspringing** bepaalt het blok (zoals bij `if`/`for`).
* De code **draait pas** wanneer je de functie **aanroept**.

**Voorbeeld**

```python
def hello():
    print("Hello from a function")

hello()       # aanroep
hello()       # nog eens
```

**Mini-oefening (3 min)**
Maak `def banner():` die drie regels print (boven/tekst/onder), en roep die twee keer aan.

**Oplossing**

```python
def banner():
    print("====")
    print("System Check")
    print("====")

banner()
banner()
```

---

## 2) Return-waarde (data teruggeven)

* `return` geeft een **resultaat** terug aan de aanroeper.
* Zonder `return` → **`None`**.

**Voorbeelden**

```python
def celsius(f):
    return (f - 32) * 5 / 9

def greeting():
    return "Hello"

print(celsius(95))     # 35.0
msg = greeting()       # "Hello"
print(msg)
```

**Mini-oefening (4 min)**
Schrijf `def is_even(n):` die `True` of `False` teruggeeft. Test met `2`, `7`, `0`.

**Oplossing**

```python
def is_even(n):
    return n % 2 == 0

print(is_even(2), is_even(7), is_even(0))
```

---

## 3) Parameters & argumenten (positional, keyword, default)

### 3.1 Positional arguments

De **positie** bepaalt welk argument in welke parameter komt.

```python
def full_name(first, last):
    return f"{first} {last}"

print(full_name("Amina", "Yildiz"))  # OK
# print(full_name("Yildiz"))         # FOUT: 2 verwacht, 1 gegeven
```

### 3.2 Keyword arguments

Je gebruikt `key=waarde`. **Volgorde maakt dan niet uit**.

```python
print(full_name(last="Yildiz", first="Amina"))
```

> **Regel**: **positional vóór keyword** in de aanroep.

### 3.3 Default values

Een parameter kan een **standaardwaarde** hebben.

```python
def hello(name="friend"):
    print(f"Hello {name}")

hello()
hello("Yunus")
```

**Mini-oefening (5 min)**
Maak `def format_host(host, ip="0.0.0.0")` die `"host=<host> ip=<ip>"` teruggeeft. Test met en zonder tweede argument.

**Oplossing**

```python
def format_host(host, ip="0.0.0.0"):
    return f"host={host} ip={ip}"

print(format_host("web01", "192.168.1.10"))
print(format_host("db01"))
```

---

## 4) Typische helpers voor automatisatie

We koppelen functies meteen aan **praktische taken**.

```python
from pathlib import Path

def is_valid_port(port: int) -> bool:
    """Geldige poort = 1..65535."""
    return 1 <= port <= 65535

def ensure_dir(path: Path) -> None:
    """Maak map aan als nodig (idempotent)."""
    path.mkdir(parents=True, exist_ok=True)

def append_line(path: Path, text: str) -> None:
    """Voeg 1 regel toe aan bestand (UTF-8)."""
    with path.open("a", encoding="utf-8") as f:
        f.write(text.rstrip() + "\n")

def read_lines(path: Path) -> list[str]:
    """Lees bestand als lijst van regels (zonder newline)."""
    if not path.exists():
        return []
    return path.read_text(encoding="utf-8").splitlines()

def parse_level(line: str) -> str:
    """Geef 'ERROR'/'WARN'/'INFO'/'OTHER' terug op basis van substring."""
    l = line.lower()
    if "error" in l: return "ERROR"
    if "warn"  in l: return "WARN"
    if "info"  in l: return "INFO"
    return "OTHER"
```

**Mini-oefening (6 min)**
Gebruik bovenstaande helpers om `data/log.txt` te **garanderen**, 3 regels te **appen**, en dan per level het **aantal** te printen.

**Oplossing (voorbeeld)**

```python
from pathlib import Path

log = Path("data/log.txt")
ensure_dir(log.parent)
append_line(log, "2025-01-01 INFO Start")
append_line(log, "2025-01-01 WARN Low disk")
append_line(log, "2025-01-01 ERROR Disk full")

counts = {"INFO":0,"WARN":0,"ERROR":0,"OTHER":0}
for ln in read_lines(log):
    counts[parse_level(ln)] += 1

print(counts)  # {'INFO':1,'WARN':1,'ERROR':1,'OTHER':0}
```



---

# **Het schema dat toont hoe `Path` een bestand opsplitst.**

| Eigenschap        | Wat het teruggeeft                     |
| ----------------- | -------------------------------------- |
| `p.parent`        | De directory van het pad               |
| `p.parents`       | Alle bovenliggende directories (lijst) |
| `p.name`          | `bestandsnaam.ext`                     |
| `p.stem`          | Bestandsnaam **zonder** extensie       |
| `p.suffix`        | `.ext`                                 |
| `p.suffixes`      | Alle extensies als lijst               |
| `p.with_suffix()` | Nieuwe extensie toepassen              |
| `p.with_name()`   | Nieuwe bestandsnaam toepassen          |

---

# **Schema: hoe Path een pad opsplitst**

Stel dit pad:

```
/home/alim/projects/logs/server.error.log
```

Hier is hoe `pathlib` het ontleedt:

```
┌───────────────────────────────────────────────┐
│ /home/alim/projects/logs/server.error.log     │  ← p (volledig pad)
└───────────────────────────────────────────────┘
                          │
                          ▼
                p.parent  → /home/alim/projects/logs
                p.parents → [
                              /home/alim/projects/logs,
                              /home/alim/projects,
                              /home/alim,
                              /home,
                              /
                            ]

                          │
                          ▼
                p.name    → server.error.log

                          │
                          ▼
                p.stem    → server.error
                p.suffix  → .log
                p.suffixes → ['.error', '.log']

                          │
                          ▼
        p.with_suffix(".txt") → /home/alim/projects/logs/server.error.txt
        p.with_name("api.log") → /home/alim/projects/logs/api.log
```

---

# Kort geheugensteuntje:

* **parent** → map
* **name** → bestand + extensie
* **stem** → bestand zonder extensie
* **suffix** → extensie
* **suffixes** → meerdere extensies
* **with_suffix / with_name** → nieuwe versie van hetzelfde pad

---