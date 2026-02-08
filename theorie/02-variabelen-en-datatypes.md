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


## Gebruikersinput gebruiken voor berekeningen

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


