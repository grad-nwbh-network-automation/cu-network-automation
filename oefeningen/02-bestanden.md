# Oefeningen op bestanden (intermediate)

## Notitieblok in een map (schrijven + lezen)

### Aanlevering (voor alle 3)

* Zet elk script in `lesson1/labs/` met duidelijke namen:
  * `notes_cli.py`, `conf_backup.py`, `log_filter_daily.py`
* Voeg relevante testbestanden toe (`configs/*.conf`, eventueel dummy logs).
* Zorg dat elk script **zonder crash** draait en **nette output** print.
* Schrijf bovenaan per script in een korte header (comment) wat het doet, welke modules je gebruikt en *waarom* (bv. `shutil` voor kopiëren met metadata).

**Doel**
Oefen met `pathlib`, relatieve paden, mappen maken, **overschrijven** vs **append**, en veilig opnieuw draaien (idempotent).

**Context**
Je maakt een mini-notitieblok dat in `data/<projectnaam>/` één bestand beheert en er zinnen aan toevoegt.

**Vereisten / Stappen**

1. Vraag via `input()` een **projectnaam** (bv. `netwerk-audit`), trim met `.strip()`.
2. Maak de map `data/<projectnaam>/` aan met `mkdir(exist_ok=True, parents=True)`.
3. Werk met het bestand `data/<projectnaam>/notes.txt`.
4. Als het bestand **nog niet bestaat**: maak het en schrijf één regel `Start\n` (met `write_text(..., encoding="utf-8")`).
5. Vraag de gebruiker hoeveel regels hij wil toevoegen (**positief geheel getal**). Gebruik `try/except ValueError`.
6. Open het bestand in **append**-modus (`open("a", encoding="utf-8")`) en voeg zoveel regels toe als gevraagd (één invoer per regel).
7. Lees daarna de **volledige inhoud** en print:

   * `Aantal nieuwe regels toegevoegd: X`
   * `Bestand:` met het **absolute pad** (`resolve()`)
   * `Inhoud:` gevolgd door de tekst.

**Regels / Validatie**

* `projectnaam` mag niet leeg zijn (toon een nette fout en stop).
* Aantal regels moet `>= 1` zijn.
* Script moet **idempotent** zijn: een tweede run mag niets breken.

**Verwachte output (voorbeeld)**

```
Project: netwerk-audit
Hoeveel regels toevoegen? 3
Aantal nieuwe regels toegevoegd: 3
Bestand: /.../data/netwerk-audit/notes.txt
Inhoud:
Start
Check gateways
Controle VLANs
Afspraak met team
```

**Challenge (+ `datetime`)**
*Wat & waarom:* Met `from datetime import datetime` en `datetime.now().isoformat()` kun je elke regel **tijdstempelen**.
*Opdracht:* Voeg vóór elke regel `[2025-11-26T13:05:42.123456] ` toe.

---

## Config-backup (.conf → .bak)

**Doel**
Oefen bestandsselectie, extensie-checks, en **kopiëren** met behoud van metadata.

**Context**
Je kopieert alle `.conf`-bestanden uit `configs/` naar `backup/` met de extensie `.bak`.

**Vereisten / Stappen**

1. Garandeer de mappen `configs/` en `backup/` in de projectroot.
2. Toon de **CWD** en het **absolute pad** van beide mappen.
3. Tel alle bestanden in `configs/` die eindigen op `.conf` (case-insensitive).
4. Kopieer elk bestand naar `backup/` met dezelfde bestandsnaam maar extensie **`.bak`**.
   *Voorbeeld:* `configs/server.conf` → `backup/server.bak`
5. Print een **samenvatting**:

   ```
   Gevonden .conf: X
   Gekopieerd: X
   Backup-map: <absoluut pad>
   ```
6. Schrijf dezelfde samenvatting ook naar `backup/summary.txt`.

**Regels / Validatie**

* Als er **geen** `.conf`-bestanden zijn: print “Geen .conf gevonden.” en maak `summary.txt` toch aan met die melding.
* Script is **idempotent**: een tweede run overschrijft bestaande `.bak` veilig.

**Verwachte output (voorbeeld)**

```
CWD: /.../project
configs: /.../project/configs
backup:  /.../project/backup
Gevonden .conf: 3
Gekopieerd: 3
Backup-map: /.../project/backup
```

**Challenge (+ `shutil`)**
*Wat & waarom:* De standaardmodule **`shutil`** bevat handige functies voor bestandsoperaties.

* **`shutil.copy2(src, dst)`** kopieert een bestand **met metadata** (timestamps e.d.).
* Gebruik `copy2` i.p.v. zelf lezen/schrijven.
  *Opdracht:* Implementeer de kopie met `shutil.copy2` en behandel fouten met `try/except` (bv. permissies).