# Hoofdstuk 7 — Functies

## Waarom functies?

Stel je voor: je hebt een stuk code dat je op **vijf verschillende plaatsen** in je script gebruikt. Zonder functies kopieer je die code vijf keer. Eén foutje? Vijf keer aanpassen. Met functies schrijf je die code **één keer**, geef je er een naam aan, en **roep je ze aan** waar nodig.

**Voordelen:**

* **Geen herhaling** (DRY: *Don't Repeat Yourself*) — je schrijft logica één keer.
* **Leesbaarheid** — een functienaam zoals `is_valid_port()` zegt meteen wat de code doet.
* **Testbaarheid** — je kan een functie los testen zonder de rest van je programma te draaien.
* **Hergebruik** — eenmaal geschreven, overal te gebruiken.

> **Context**: denk aan helpers zoals `is_valid_port()`, `format_hostname()`, `filter_errors()`. Als sysadmin/netwerk-engineer schrijf je dit soort functies vaak.

---

## 1) Een functie definiëren en aanroepen

### Hoe maak je een functie?

```python
def naam_van_functie():
    # ingesprongen blok = de body
    print("Hallo")
```

* Het keyword `def` start de definitie.
* Na de naam komen **haakjes** `()` en een **dubbele punt** `:`.
* De **body** is ingesprongen (net zoals bij `if` en `for`).
* De code in de body **draait pas** wanneer je de functie **aanroept**.

### Aanroepen

```python
def hello():
    print("Hello from a function!")

hello()       # eerste aanroep
hello()       # tweede aanroep
```

**Output:**

```
Hello from a function!
Hello from a function!
```

De functie wordt **gedefinieerd** op regel 1-2, maar pas **uitgevoerd** op regel 4 en 5.

---

### Oefening 1 — Eerste functie (2 min)

Maak een functie `welkom()` die het volgende print:

```
Welkom bij Network Automation!
```

Roep de functie **twee keer** aan.

<details>
<summary>Oplossing</summary>

```python
def welkom():
    print("Welkom bij Network Automation!")

welkom()
welkom()
```

</details>

---

### Oefening 2 — Meerdere regels (3 min)

Maak een functie `banner()` die een banner print met drie regels:

```
========================
  System Health Check
========================
```

Roep de functie één keer aan.

<details>
<summary>Oplossing</summary>

```python
def banner():
    print("========================")
    print("  System Health Check")
    print("========================")

banner()
```

</details>

---

## 2) Parameters en argumenten

Een functie wordt pas echt nuttig als je er **data aan kan meegeven**. Dat doe je met **parameters**.

* **Parameter** = de variabele in de functie-definitie.
* **Argument** = de waarde die je meegeeft bij de aanroep.

### Eén parameter

```python
def greet(name):
    print(f"Hallo {name}!")

greet("Amina")    # argument = "Amina"
greet("Yunus")    # argument = "Yunus"
```

**Output:**

```
Hallo Amina!
Hallo Yunus!
```

### Meerdere parameters

De **volgorde** bepaalt welk argument in welke parameter komt. Dit noemen we **positional arguments**.

```python
def full_name(first, last):
    print(f"{first} {last}")

full_name("Amina", "Yildiz")    # first="Amina", last="Yildiz"
```

### Keyword arguments

Je kan ook de **naam** van de parameter gebruiken bij de aanroep. Dan maakt de volgorde **niet** uit.

```python
full_name(last="Yildiz", first="Amina")    # zelfde resultaat
```

> **Regel**: positional arguments komen altijd **vóór** keyword arguments.

### Default values

Een parameter kan een **standaardwaarde** krijgen. Als je geen argument meegeeft, wordt de standaardwaarde gebruikt.

```python
def greet(name="vriend"):
    print(f"Hallo {name}!")

greet()          # Hallo vriend!
greet("Sara")    # Hallo Sara!
```

---

### Oefening 3 — Eén parameter (3 min)

Maak een functie `check_service(service)` die print:

```
Checking service: <naam>...
```

Test met `"nginx"`, `"sshd"` en `"postgres"`.

<details>
<summary>Oplossing</summary>

```python
def check_service(service):
    print(f"Checking service: {service}...")

check_service("nginx")
check_service("sshd")
check_service("postgres")
```

</details>

---

### Oefening 4 — Twee parameters (3 min)

Maak een functie `device_info(hostname, ip)` die print:

```
Device: <hostname> — IP: <ip>
```

Test met `device_info("switch01", "192.168.1.1")`.

<details>
<summary>Oplossing</summary>

```python
def device_info(hostname, ip):
    print(f"Device: {hostname} — IP: {ip}")

device_info("switch01", "192.168.1.1")
device_info("router01", "10.0.0.1")
```

</details>

---

### Oefening 5 — Default waarde (4 min)

Maak een functie `log_message(message, level="INFO")` die print:

```
[<level>] <message>
```

Test:

* `log_message("Server started")` → `[INFO] Server started`
* `log_message("Disk full", "ERROR")` → `[ERROR] Disk full`

<details>
<summary>Oplossing</summary>

```python
def log_message(message, level="INFO"):
    print(f"[{level}] {message}")

log_message("Server started")
log_message("Disk full", "ERROR")
log_message("Low memory", "WARN")
```

</details>

---

## 3) Return-waarde

Tot nu toe hebben onze functies alleen iets **geprint**. Maar vaak wil je dat een functie een **resultaat teruggeeft** zodat je er verder mee kan werken.

### `return` vs `print`

```python
def add_print(a, b):
    print(a + b)       # toont het resultaat, maar geeft niets terug

def add_return(a, b):
    return a + b       # geeft het resultaat terug aan de aanroeper
```

Het verschil:

```python
result1 = add_print(3, 4)     # print "7", maar result1 = None
result2 = add_return(3, 4)    # print niets, maar result2 = 7

print(result1)    # None
print(result2)    # 7
```

**Vuistregel**: gebruik `return` als je het resultaat **ergens anders nodig hebt**. Gebruik `print` alleen als je iets wil **tonen**.

### Zonder `return` → `None`

Als een functie geen `return` heeft, geeft ze automatisch `None` terug.

```python
def say_hello():
    print("Hello!")

result = say_hello()    # print "Hello!"
print(result)           # None
```

### Meerdere returns

Een functie stopt zodra ze een `return` tegenkomt.

```python
def check_port(port):
    if port < 1 or port > 65535:
        return "ongeldig"
    if port < 1024:
        return "privileged"
    return "normaal"

print(check_port(80))       # privileged
print(check_port(8080))     # normaal
print(check_port(70000))    # ongeldig
```

---

### Oefening 6 — True/False teruggeven (3 min)

Schrijf een functie `is_even(n)` die `True` teruggeeft als `n` even is, anders `False`.

Test met `is_even(4)`, `is_even(7)` en `is_even(0)`.

<details>
<summary>Oplossing</summary>

```python
def is_even(n):
    return n % 2 == 0

print(is_even(4))    # True
print(is_even(7))    # False
print(is_even(0))    # True
```

</details>

---

### Oefening 7 — Berekening teruggeven (4 min)

Schrijf een functie `celsius_to_fahrenheit(c)` die de Fahrenheit-waarde teruggeeft.

**Formule**: `F = C * 9/5 + 32`

Test:

* `celsius_to_fahrenheit(0)` → `32.0`
* `celsius_to_fahrenheit(100)` → `212.0`

<details>
<summary>Oplossing</summary>

```python
def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

print(celsius_to_fahrenheit(0))      # 32.0
print(celsius_to_fahrenheit(100))    # 212.0
print(celsius_to_fahrenheit(20))     # 68.0
```

</details>

---

### Oefening 8 — Functie met een list (5 min) ⭐

Schrijf een functie `count_errors(lines)` die een **lijst van strings** ontvangt en **telt** hoeveel regels het woord `"ERROR"` bevatten. Geef het aantal terug.

Test met:

```python
logs = [
    "2025-01-01 INFO Server started",
    "2025-01-01 ERROR Disk full",
    "2025-01-01 INFO Request OK",
    "2025-01-01 ERROR Timeout",
]
print(count_errors(logs))    # 2
```

<details>
<summary>Oplossing</summary>

```python
def count_errors(lines):
    count = 0
    for line in lines:
        if "ERROR" in line:
            count += 1
    return count

logs = [
    "2025-01-01 INFO Server started",
    "2025-01-01 ERROR Disk full",
    "2025-01-01 INFO Request OK",
    "2025-01-01 ERROR Timeout",
]
print(count_errors(logs))    # 2
```

</details>

---

## 4) Scope — lokale en globale variabelen

**Scope** betekent: *waar is een variabele zichtbaar?*

### Lokale variabelen

Een variabele die **binnen** een functie wordt gemaakt, bestaat **alleen binnen die functie**. Dit noemen we een **lokale variabele**.

```python
def my_function():
    x = 10          # lokale variabele
    print(x)        # werkt: x bestaat hier

my_function()
# print(x)          # FOUT: x bestaat hier niet meer
```

### Globale variabelen

Een variabele die **buiten** alle functies wordt gemaakt, is een **globale variabele**. Ze is overal leesbaar.

```python
server_name = "web01"       # globale variabele

def show_server():
    print(server_name)      # werkt: globale variabelen zijn leesbaar

show_server()               # web01
```

### Lokaal gaat voor op globaal

Als je binnen een functie een variabele maakt met **dezelfde naam** als een globale, dan maakt Python een **nieuwe lokale variabele**. De globale blijft ongewijzigd.

```python
name = "globaal"

def test():
    name = "lokaal"
    print(name)         # lokaal

test()
print(name)             # globaal (ongewijzigd!)
```

### Samengevat

| Waar gemaakt?        | Zichtbaar waar?              | Noemt men…  |
| -------------------- | ---------------------------- | ----------- |
| Binnen een functie   | Alleen binnen die functie    | **lokaal**  |
| Buiten alle functies | Overal (lezen)               | **globaal** |

> **Tip**: vermijd het aanpassen van globale variabelen vanuit functies. Geef data mee als parameter en gebruik `return` om resultaten terug te geven. Dat maakt je code voorspelbaarder.

---

### Oefening 9 — Scope voorspellen (3 min)

Bekijk de volgende code **zonder ze uit te voeren**. Wat wordt er geprint?

```python
x = 5

def change_x():
    x = 99
    print("Binnen:", x)

change_x()
print("Buiten:", x)
```

<details>
<summary>Oplossing</summary>

```
Binnen: 99
Buiten: 5
```

De `x = 99` binnen de functie maakt een **nieuwe lokale variabele**. De globale `x` blijft `5`.

</details>

---

## 5) Docstrings — je functie documenteren

Een **docstring** is een korte beschrijving van wat je functie doet. Je plaatst die direct na de `def`-regel, tussen driedubbele aanhalingstekens.

```python
def is_valid_port(port):
    """Controleer of een poort geldig is (1 t/m 65535)."""
    return 1 <= port <= 65535
```

### Waarom?

* Andere programmeurs (of jijzelf over 2 weken) begrijpen meteen wat de functie doet.
* Tools zoals `help()` tonen de docstring:

```python
help(is_valid_port)
```

**Output:**

```
Help on function is_valid_port:

is_valid_port(port)
    Controleer of een poort geldig is (1 t/m 65535).
```

### Wanneer schrijf je een docstring?

* Bij functies die je **hergebruikt** of die niet vanzelfsprekend zijn.
* In een echte omgeving: bij (bijna) **elke** functie.

---

### Oefening 10 — Docstring toevoegen (3 min)

De volgende functie werkt, maar heeft geen documentatie. Voeg een passende docstring toe.

```python
def format_host(host, ip="0.0.0.0"):
    return f"host={host} ip={ip}"
```

<details>
<summary>Oplossing</summary>

```python
def format_host(host, ip="0.0.0.0"):
    """Geef een geformateerde string terug met hostnaam en IP-adres."""
    return f"host={host} ip={ip}"
```

</details>

---

## 6) Functies combineren met wat je al kent

Nu gaan we functies combineren met **lists**, **dictionaries**, **lussen** en **bestanden** — alles wat je al geleerd hebt.

### Functies + lists

```python
def filter_long_names(names, min_length=5):
    """Geef een nieuwe lijst terug met namen langer dan min_length."""
    result = []
    for name in names:
        if len(name) >= min_length:
            result.append(name)
    return result

servers = ["web01", "db", "loadbalancer", "fw"]
long_names = filter_long_names(servers)
print(long_names)    # ['web01', 'loadbalancer']
```

### Functies + dictionaries

```python
def get_device_ip(devices, hostname):
    """Zoek het IP-adres op basis van de hostnaam."""
    if hostname in devices:
        return devices[hostname]
    return "niet gevonden"

network = {
    "router01": "10.0.0.1",
    "switch01": "10.0.0.2",
    "firewall01": "10.0.0.3",
}

print(get_device_ip(network, "switch01"))      # 10.0.0.2
print(get_device_ip(network, "printer01"))     # niet gevonden
```

### Functies + bestanden

```python
from pathlib import Path

def read_lines(filepath):
    """Lees een bestand en geef de regels terug als lijst."""
    path = Path(filepath)
    if not path.exists():
        return []
    return path.read_text(encoding="utf-8").splitlines()

def count_keyword(lines, keyword):
    """Tel hoeveel regels een bepaald keyword bevatten."""
    count = 0
    for line in lines:
        if keyword in line:
            count += 1
    return count

lines = read_lines("data/log.txt")
errors = count_keyword(lines, "ERROR")
print(f"Aantal errors: {errors}")
```

Merk op hoe we **twee functies combineren**: de output van `read_lines()` gebruiken we als input voor `count_keyword()`. Dit is de kracht van functies.

---

### Oefening 11 — Functie met list (4 min)

Schrijf een functie `total_ports(ports)` die een lijst van poortnummers ontvangt en de **som** teruggeeft.

Test met:

```python
ports = [80, 443, 8080, 22]
print(total_ports(ports))    # 8625
```

<details>
<summary>Oplossing</summary>

```python
def total_ports(ports):
    """Bereken de som van alle poortnummers."""
    total = 0
    for port in ports:
        total += port
    return total

ports = [80, 443, 8080, 22]
print(total_ports(ports))    # 8625
```

</details>

---

### Oefening 12 — Functies + dict + lus (6 min) ⭐

Gegeven een dictionary met servers en hun status:

```python
servers = {
    "web01": "online",
    "web02": "offline",
    "db01": "online",
    "db02": "offline",
    "cache01": "online",
}
```

Schrijf een functie `get_offline_servers(servers)` die een **lijst** teruggeeft met de namen van alle servers die `"offline"` zijn.

Verwachte output:

```python
print(get_offline_servers(servers))    # ['web02', 'db02']
```

<details>
<summary>Oplossing</summary>

```python
def get_offline_servers(servers):
    """Geef een lijst terug van alle servers met status 'offline'."""
    offline = []
    for name, status in servers.items():
        if status == "offline":
            offline.append(name)
    return offline

servers = {
    "web01": "online",
    "web02": "offline",
    "db01": "online",
    "db02": "offline",
    "cache01": "online",
}

print(get_offline_servers(servers))    # ['web02', 'db02']
```

</details>

---

### Oefening 13 — Mini-project: log-analyzer (10 min) ⭐⭐

Dit is een grotere oefening die **meerdere functies combineert**.

**Opdracht**: schrijf drie functies en een hoofdprogramma.

**Functie 1**: `create_log_file(filepath, lines)`
— Schrijft een lijst van regels naar een bestand (overschrijft).

**Functie 2**: `read_log_file(filepath)`
— Leest een bestand en geeft de regels terug als een lijst.

**Functie 3**: `count_by_level(lines)`
— Ontvangt een lijst van logregels en telt per level (INFO, WARN, ERROR) hoeveel er zijn. Geeft een dictionary terug.

**Hoofdprogramma**:

```python
log_data = [
    "2025-01-01 INFO Server started",
    "2025-01-01 WARN Low memory",
    "2025-01-01 ERROR Disk full",
    "2025-01-01 INFO Request handled",
    "2025-01-01 ERROR Connection timeout",
    "2025-01-01 INFO Backup complete",
]

create_log_file("data/system.log", log_data)
lines = read_log_file("data/system.log")
counts = count_by_level(lines)

for level, amount in counts.items():
    print(f"{level}: {amount}")
```

**Verwachte output:**

```
INFO: 3
WARN: 1
ERROR: 2
```

<details>
<summary>Oplossing</summary>

```python
from pathlib import Path

def create_log_file(filepath, lines):
    """Schrijf een lijst van regels naar een bestand."""
    path = Path(filepath)
    path.parent.mkdir(exist_ok=True)
    content = "\n".join(lines) + "\n"
    path.write_text(content, encoding="utf-8")

def read_log_file(filepath):
    """Lees een bestand en geef de regels terug als lijst."""
    path = Path(filepath)
    if not path.exists():
        return []
    return path.read_text(encoding="utf-8").splitlines()

def count_by_level(lines):
    """Tel per level (INFO, WARN, ERROR) hoeveel logregels er zijn."""
    counts = {"INFO": 0, "WARN": 0, "ERROR": 0}
    for line in lines:
        for level in counts:
            if level in line:
                counts[level] += 1
    return counts

log_data = [
    "2025-01-01 INFO Server started",
    "2025-01-01 WARN Low memory",
    "2025-01-01 ERROR Disk full",
    "2025-01-01 INFO Request handled",
    "2025-01-01 ERROR Connection timeout",
    "2025-01-01 INFO Backup complete",
]

create_log_file("data/system.log", log_data)
lines = read_log_file("data/system.log")
counts = count_by_level(lines)

for level, amount in counts.items():
    print(f"{level}: {amount}")
```

</details>

---

## Samenvatting

| Concept               | Wat je moet onthouden                                                  |
| --------------------- | ---------------------------------------------------------------------- |
| `def naam():`         | Definieer een functie                                                  |
| Parameters            | Variabelen in de definitie die data ontvangen                          |
| Argumenten            | Waarden die je meegeeft bij de aanroep                                 |
| Default values        | `def f(x=10):` — standaardwaarde als je niets meegeeft                |
| Keyword arguments     | `f(name="Amina")` — volgorde maakt niet uit                           |
| `return`              | Geeft een resultaat terug aan de aanroeper                             |
| Zonder `return`       | Functie geeft `None` terug                                             |
| Scope                 | Lokale variabelen bestaan alleen binnen de functie                     |
| Docstrings            | `"""Beschrijving."""` direct na `def` — documenteert je functie        |

**De gouden regel**: maak functies die **één ding doen**, een **duidelijke naam** hebben, en data ontvangen via **parameters** en teruggeven via **`return`**.

---
