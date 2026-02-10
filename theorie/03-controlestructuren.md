# Hoofdstuk 3: Controle-structuren

**Patroon**

```python
if cond:
    ...
elif other:
    ...
else:
    ...
```

**Lees dit als**: “Als dit waar is → doe A, anders als dát waar is → doe B, anders → doe C.”

**Voorbeeld — Omgeving**

```python
env = input("Welke omgeving? (dev/test/prod): ").strip().lower()

if env == "dev":
    print("Dev: extra logging aan")
elif env == "test":
    print("Test: dummy data gebruiken")
elif env == "prod":
    print("Prod: voorzichtig, echte systemen!")
else:
    print("Onbekende omgeving")
```

**Waarom nuttig?** Ander **gedrag per omgeving** (paden, strengere checks…).

**Voorbeeld — Validatie met fouten afvangen**

```python
try:
    port = int(input("Poort: ").strip())
    if 1 <= port <= 65535:
        if port < 1024:
            print("Geldig én privileged (root nodig op Linux)")
        else:
            print("Geldig")
    else:
        print("Ongeldige range")
except ValueError:
    print("Geen getal ingevoerd")
```

**Wat doen `try` en `except`?**

* In `try` zet je code die **kan falen**.
* Als er bv. bij `int(...)` **geen getal** staat, krijg je een **`ValueError`**.
* Met `except ValueError` **vang** je die fout af en toon je een nette boodschap.
  *(We gaan later dieper in op fouten/excepties.)*

**Mini-oefening (6 min)**: vraag **bestandsnaam**.

* Eindigt op `.log` → “logbestand”;
* op `.txt` → “tekstbestand”;
* anders → “onbekend type”. (Gebruik `if/elif/else`.)