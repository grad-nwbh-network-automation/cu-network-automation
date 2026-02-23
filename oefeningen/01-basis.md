# Basis oefeningen (intermediate)

oefeningen op `if/elif/else`, `for`, `while`, `try/except`, `strip()`, `lower()`, `len()`, `endswith()`, `in`, enz.

## 1. Critical process-check

Schrijf een script dat:

1. De gebruiker vraagt naar een **process-naam** (bv. `sshd`, `nginx`, `chrome`).
2. De invoer omzet naar **lowercase** met `.strip().lower()`.
3. Een **lijst** heeft met “kritieke processen”, bv. `["sshd", "nginx", "postgres"]`.
4. Met een `if/elif/else` bepaalt:

   * Als de naam in de lijst zit → print:
     `"<proc> is een kritisch proces."`
   * Als de naam gelijk is aan `"chrome"` of `"firefox"` →
     `"<proc> is een client-applicatie."`
   * Anders →
     `"<proc> is een onbekend of niet-kritiek proces."`

Gebruik zeker: **`in`, `lower()`, `strip()` en een `if/elif/else`**.

---

## 2. Log-regel analyseren

Schrijf een script dat:

1. De gebruiker vraagt om **één log-regel** als tekst.
   (vb. `"2025-11-24 ERROR Disk full"`).
2. De invoer omzet naar **uppercase** of **lowercase** (je kiest).
3. Controleert met `if/elif/else`:

   * Bevat de tekst `"error"` → print `"Error gevonden!"`
   * Anders als de tekst `"warn"` bevat → print `"Warning gevonden."`
   * Anders → print `"Geen fouten gevonden."`

Gebruik: `in`, `lower()` of `upper()`.

---

## 3. Backup-bestandsnaam controleren

Schrijf een script dat:

1. De gebruiker vraagt naar een **bestandsnaam of pad**, bv. `"server.conf.bak"` of `"notes.txt"`.
2. Spaties aan begin/einde verwijdert met `.strip()`.
3. Met `if/elif/else` beslist:

   * Eindigt op `.bak` → `"Dit lijkt een backupbestand."`
   * Eindigt op `.conf` → `"Dit lijkt een config-bestand."`
   * Eindigt op `.yml` of `.yaml` → `"Dit lijkt een YAML-config."`
   * Anders → `"Onbekend type bestand."`

Gebruik: `.strip()`, `.endswith()` (mag met tuple: `endswith((".yml", ".yaml"))`).

---

## 4. Poortlijst klasseren met for-loop

Maak een lijst:

```python
ports = [22, 53, 80, 443, 8080, 3306, 65535]
```

Schrijf een script dat:

1. Over deze lijst loopt met een `for`-loop.
2. Voor elke poort:

   * Als `< 1024` → print: `"<poort> = well-known/privileged"`
   * Als tussen `1024` en `49151` → print: `"<poort> = registered"`
   * Anders → `"<poort> = dynamic/private"`

Gebruik: `for`, `if/elif/else`.

---

## 5. Gebruikersnaam-validatie

Schrijf een script dat:

1. Een **gebruikersnaam** vraagt (string).
2. `strip()` en `lower()` toepast.
3. De lengte controleert met `len()`:

   * `len < 3` → `"Gebruikersnaam te kort."`
   * `len > 15` → `"Gebruikersnaam te lang."`
   * Anders:

     * Als de naam `"admin"` bevat (bv. `superadmin`, `admin01`) → `"Naam mag 'admin' niet bevatten."`
     * Anders → `"Gebruikersnaam OK."`

Gebruik: `strip()`, `lower()`, `len()`, `in`, geneste `if`.

---

## 6. Herstart-bevestiging met while-loop

Schrijf een script dat:

1. Blijft vragen:

   ```text
   Service herstarten? (y/n):
   ```
2. Op elke input `.strip().lower()` toepast.
3. Zolang de invoer **niet** `"y"` of `"n"` is, moet de vraag **opnieuw** gesteld worden.
4. Als `"y"` → print `"Service wordt herstart..."`
   Als `"n"` → print `"Herstart afgebroken."`

Gebruik: `while`, `strip()`, `lower()`, `if/elif/else`.

---

## 7. Response-tijden meten met try/except

Schrijf een script dat:

1. Een `for`-loop gebruikt om **5 keer** te vragen:

   ```text
   Response time (ms):
   ```
2. Elke invoer probeert om te zetten naar `float` of `int` met `try/except ValueError`.

   * Bij fout → print `"Ongeldige waarde, wordt overgeslagen."` en tel die **niet** mee.
3. De som en het **aantal geldige waardes** bijhoudt.
4. Na de loop:

   * Als er minstens 1 geldige invoer was → print de **gemiddelde** response time.
   * Anders → `"Geen geldige metingen."`

Gebruik: `for`, `try/except ValueError`, accumulatie, `if`.

---

## 8. Kleine “monitor”-menu met while

Schrijf een script dat in een **loop** blijft draaien tot de gebruiker `"q"` kiest.

Toon telkens:

```text
Kies een optie:
1) Toon hostname
2) Toon fictieve CPU-load
3) Toon fictieve disk-usage
q) Stop
```

* Vraag daarna om een keuze (string).
* Gebruik `.strip().lower()`.
* Gebruik `if/elif/else`:

  * `"1"` → print `"Hostname: server01"` (hardcoded, geen echte systeminfo).
  * `"2"` → print `"CPU load: 37%"` (mag gewoon fake zijn).
  * `"3"` → print `"Disk usage: 82%"`.
  * `"q"` → verlaat de while-loop en print `"Programma beëindigd."`.
  * Andere invoer → `"Ongeldige keuze."`

Gebruik: `while`, `if/elif/else`, `strip()`, `lower()`.

---

## 9. Extensie-teller met for-loop

Schrijf een script dat:

1. Vraagt:

   ```text
   Hoeveel bestandsnamen wil je ingeven?
   ```

   (Gebruik `int()` met `try/except ValueError`. Bij fout: `"Geen geldig getal."` en programma stoppen.)
2. Dan in een `for`-loop voor elk bestand:

   * de bestandsnaam vraagt (string),
   * met `strip().lower()` verwerkt,
   * telt hoeveel eindigen op:

     * `.log`
     * `.txt`
     * iets anders
3. Aan het einde een overzicht print, bv.:

```text
Aantal .log-bestanden: X
Aantal .txt-bestanden: Y
Aantal andere bestanden: Z
Totaal: N
```

Gebruik: `for`, `endswith()`, `strip()`, `lower()`, tellers.

---

## 10. Wachtwoord-policy check

Schrijf een script dat:

1. Een wachtwoord vraagt.
2. Met `len()` controleert:

   * korter dan 8 → `"Te kort, minstens 8 tekens nodig."`
3. Daarna extra checks:

   * als het wachtwoord `"password"` of `"1234"` bevat (case-insensitive) → `"Te zwak: bevat verboden patroon."`
   * anders als het wachtwoord **geen** cijfer bevat (je mag bv. checken op `"0" in pw or "1" in pw ..."` of simpeler: gewoon één check op een paar cijfers) → `"Voeg minstens één cijfer toe."`
   * anders → `"Wachtwoord aanvaard (basic check)."`

Gebruik: `lower()`, `len()`, `in`, `if/elif/else`. Geen regex, gewoon basis.

