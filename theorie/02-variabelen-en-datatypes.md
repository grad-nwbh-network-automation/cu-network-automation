# Hoofdstuk 2: Variabelen en datatypes
## Variabelen & types (waarom meerdere?)

* Data komt in **vormen**: getallen om te rekenen, tekst om te tonen/zoeken, collecties om door te lopen. **Verschillende types** maken code **duidelijker en veiliger**.

### Primitieven

Bijvoorbeeld
```python
age = 34          # int
ratio = 3.14      # float
msg = "ready"     # str
ok = True         # bool
nothing = None    # NoneType
```

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


## Casting: Gebruikersinput gebruiken voor berekeningen

**Gebruikersinput ophalen**

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


