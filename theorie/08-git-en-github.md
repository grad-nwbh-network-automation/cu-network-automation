# Hoofdstuk 8 — Git en GitHub

## 1) Wat is Git? Wat is GitHub?

### Git

**Git** is een **versiebeheersysteem** (version control system). Het draait **lokaal op je computer** en houdt de volledige **geschiedenis** bij van alle wijzigingen in je projectbestanden.

Stel je voor: je werkt aan een script en breekt iets. Zonder Git moet je hopen dat je een kopie hebt gemaakt. Met Git ga je gewoon **terug naar een vorige versie**.

### GitHub

**GitHub** is een **online platform** waar je Git-repositories kan hosten. Het is als een cloudopslag, maar dan specifiek voor code — met extra functies zoals samenwerking, issues, pull requests, enzovoort.

### Verschil

| Git | GitHub |
| --- | ------ |
| Software op je PC | Website / online dienst |
| Werkt lokaal | Werkt in de cloud |
| Houdt geschiedenis bij | Host je repo online |
| Gratis en open source | Gratis (met betaalde opties) |

**Kort gezegd**: Git is de **tool**, GitHub is de **dienst** die die tool online beschikbaar maakt.

### Waarom is dit belangrijk?

- **Geschiedenis**: elke wijziging wordt bijgehouden — je kan altijd terug.
- **Samenwerking**: meerdere mensen kunnen aan hetzelfde project werken.
- **Backup**: je code staat veilig op GitHub, niet alleen op je laptop.
- **Professioneel**: in de IT-wereld is Git **de standaard**. Je gaat het overal tegenkomen.

---

## 2) Belangrijke concepten

Voordat we beginnen, een paar termen die je moet kennen:

| Concept | Wat is het? |
| ------- | ----------- |
| **Repository (repo)** | Een opslagplaats voor je projectbestanden + de volledige geschiedenis van wijzigingen |
| **Commit** | Een **snapshot** van je bestanden op een bepaald moment — zoals een savegame |
| **Branch** | Een parallelle versie van je project (we gebruiken voorlopig alleen `main`) |
| **Merge** | Twee branches samenvoegen |
| **Clone** | Een kopie van een remote repo naar je lokale machine |
| **Remote** | De versie van je repo op een server (bv. GitHub) |
| **Lokaal** | De versie van je repo op je eigen computer |

---

## 3) Git installatie en setup

### Installatie

Download Git van **[git-scm.com](https://git-scm.com/downloads)** en volg de installatie-instructies voor jouw besturingssysteem (Windows/macOS/Linux).

> Er is een aparte handleiding beschikbaar voor de installatie. Volg die stap voor stap.

### Controleren

Na de installatie, open een terminal en controleer:

```bash
git --version
```

Je zou iets moeten zien zoals `git version 2.x.x`.

### Git configureren

Je moet Git vertellen **wie je bent**. Dit is belangrijk omdat elke commit jouw naam en e-mail bevat. Gebruik je **VIVES-studentengegevens**:

```bash
git config --global user.name "Voornaam Achternaam"
git config --global user.email "studentnummer@student.vives.be"
```

> **Waarom?** Elke commit die je maakt wordt gelinkt aan deze naam en e-mail. Zo weet iedereen (en jijzelf) wie welke wijziging heeft gemaakt.

### Configuratie controleren

```bash
git config --global --list
```

Dit toont al je globale instellingen. Je zou `user.name` en `user.email` moeten zien.

---

## 4) Wat is een repository?

Een **repository (repo)** is een map met je projectbestanden waarin Git alle wijzigingen bijhoudt. Er zijn twee soorten:

- **Lokale repository**: leeft op je eigen computer, in een gewone map met een verborgen `.git/` folder.
- **Remote repository**: leeft op een server zoals GitHub, toegankelijk via internet.

### De `.git/` folder

Wanneer je een repo aanmaakt (of kloont), verschijnt er een verborgen map `.git/` in je project. Daar zit:

- De volledige **geschiedenis** van alle commits
- De **configuratie** van de repo (o.a. welke remote eraan gekoppeld is)
- Info over **branches**

> **Belangrijk**: verwijder nooit de `.git/` folder, anders verlies je je hele Git-geschiedenis!

---

## 5) Een repository aanmaken op GitHub

### Stap 1 — Op GitHub

1. Ga naar [github.com](https://github.com) en log in.
2. Klik rechtsboven op **"+"** → **"New repository"**.
3. Vul in:
   - **Repository name**: bv. `python-oefeningen`
   - **Description**: bv. "Mijn Python-oefeningen voor Network Automation"
   - **Public** of **Private**: kies zelf
   - Vink **niets** aan (geen README, geen .gitignore — die maken we zelf)
4. Klik op **"Create repository"**.

GitHub toont je nu een pagina met instructies. Die gaan we volgen.

### Stap 2 — Lokaal initialiseren

Open een terminal en maak een map aan:

```bash
mkdir python-oefeningen
cd python-oefeningen
git init
```

`git init` maakt van deze map een Git-repository. Er verschijnt nu een `.git/` folder.

### Stap 3 — Koppelen aan GitHub (remote toevoegen)

```bash
git remote add origin https://github.com/JOUW-USERNAME/python-oefeningen.git
```

- `origin` is de **naam** die we geven aan de remote (standaard conventie).
- De URL komt van je GitHub-repo pagina.

Controleren:

```bash
git remote -v
```

Dit toont de fetch- en push-URL's van je remote.

---

## 6) De basis-workflow: add, commit, push

Dit is de workflow die je **elke keer** herhaalt wanneer je wijzigingen wil opslaan en naar GitHub sturen:

```
  Werkmap          Staging Area        Lokale Repo         GitHub
  (je bestanden)   (klaar om te        (commits)           (remote)
                    committen)
       │                │                   │                  │
       │── git add ────►│                   │                  │
       │                │── git commit ────►│                  │
       │                │                   │── git push ─────►│
```

### git status

Bekijk wat er veranderd is:

```bash
git status
```

Dit toont:
- Nieuwe bestanden (untracked)
- Gewijzigde bestanden
- Bestanden die klaarstaan om te committen (staged)

### git add

Zet bestanden **klaar** om te committen (= naar de staging area):

```bash
git add bestandsnaam.py     # één specifiek bestand
git add .                    # ALLES in de huidige map
```

### git commit

Maak een **snapshot** (commit) met een beschrijvende boodschap:

```bash
git commit -m "beschrijving van wat je veranderd hebt"
```

> **Tip**: schrijf duidelijke commit-boodschappen. Niet `"update"` of `"fix"`, maar bv. `"voeg hello.py toe met print-voorbeeld"`.

### git push

Stuur je commits naar GitHub:

```bash
git push
```

De **allereerste keer** moet je aangeven naar welke branch en remote:

```bash
git push -u origin main
```

Daarna volstaat `git push`.

### git pull

Met `git pull` haal je de **nieuwste wijzigingen** van GitHub naar je **lokale repo**.

```bash
git pull
```

Dit doet in één commando:

- `git fetch` (nieuwe commits downloaden)
- `git merge` (deze commits in jouw lokale branch binnenhalen)

Gebruik `git pull` bijvoorbeeld:

- Als je op **twee verschillende pc's** aan dezelfde repo werkt
- Als je **samenwerkt** en eerst de laatste versie wil hebben vóór je verder werkt

---

## 7) .gitignore en README.md

### .gitignore

Niet alle bestanden horen in Git. Sommige bestanden zijn **tijdelijk**, **groot**, of bevatten **gevoelige info**. Die zet je in een bestand genaamd `.gitignore`.

Maak een bestand `.gitignore` aan in de root van je project:

```
.venv/
__pycache__/
*.pyc
.env
```

| Patroon | Wat wordt genegeerd |
| ------- | ------------------- |
| `.venv/` | Je virtuele omgeving (kan honderden MB zijn) |
| `__pycache__/` | Door Python gegenereerde cache-bestanden |
| `*.pyc` | Gecompileerde Python-bestanden |
| `.env` | Bestanden met wachtwoorden/API-keys |

> **Belangrijk**: voeg `.gitignore` toe **voordat** je je eerste commit maakt. Zo komen deze bestanden nooit in je Git-geschiedenis terecht.

### README.md

Een `README.md` is het **visitekaartje** van je project. GitHub toont dit bestand automatisch op de hoofdpagina van je repo.

Maak een eenvoudige `README.md`:

```markdown
# Python Oefeningen

Mijn oefeningen voor het vak Network Automation aan VIVES.
```

---

## 8) Git clone

Als er al een repository op GitHub staat en je wil er lokaal mee werken, gebruik je `git clone`:

```bash
git clone https://github.com/USERNAME/repo-naam.git
```

Dit doet **drie dingen** in één keer:

1. Maakt een nieuwe map aan met de naam van de repo
2. Kopieert alle bestanden + de volledige geschiedenis
3. Stelt de remote `origin` automatisch in

### Na een clone: alles is al geconfigureerd

Na `git clone` hoef je **geen** `git init` of `git remote add` te doen. Dat is al gebeurd. Je kan dit controleren:

```bash
cd repo-naam
git remote -v
```

Je ziet dan de URL van de remote repo. Die info staat opgeslagen in `.git/config`.

Je kan meteen beginnen werken:

```bash
# wijzigingen maken
git add .
git commit -m "mijn wijziging"
git push
```

---

## 9) Handige commando's — overzicht

| Commando | Wat doet het? |
| -------- | ------------- |
| `git init` | Maak van de huidige map een Git-repo |
| `git clone <url>` | Kopieer een remote repo naar je PC |
| `git status` | Bekijk de huidige status (wat is gewijzigd?) |
| `git add <bestand>` | Zet een bestand klaar om te committen |
| `git add .` | Zet alles klaar |
| `git commit -m "msg"` | Maak een snapshot met een boodschap |
| `git push` | Stuur je commits naar de remote (GitHub) |
| `git pull` | Haal de nieuwste versie op van de remote |
| `git log` | Bekijk de commit-geschiedenis |
| `git log --oneline` | Korte versie van de geschiedenis |
| `git remote -v` | Toon de gekoppelde remote(s) |
| `git config --global --list` | Toon je Git-configuratie |

---

## 10) Oefening — Stap voor stap

### Deel A — Repository aanmaken en eerste push

**Stap 1**: Ga naar [github.com](https://github.com) en maak een nieuwe repository aan:
- Naam: `python-oefeningen`
- Laat alle opties uitgevinkt

**Stap 2**: Open een terminal en voer uit:

```bash
mkdir python-oefeningen
cd python-oefeningen
git init
```

**Stap 3**: Maak een `.gitignore` bestand aan met de volgende inhoud:

```
.venv/
__pycache__/
*.pyc
.env
```

**Stap 4**: Maak een `README.md` aan:

```markdown
# Python Oefeningen

Mijn oefeningen voor Network Automation.
```

**Stap 5**: Voeg alles toe, commit en push:

```bash
git add .
git commit -m "eerste commit: gitignore en README"
git remote add origin https://github.com/JOUW-USERNAME/python-oefeningen.git
git push -u origin main
```

**Controleer** op GitHub of je bestanden zichtbaar zijn.

---

### Deel B — Meerdere commits maken

**Stap 6**: Maak een nieuw bestand `hello.py`:

```python
print("Hello World!")
```

Commit en push:

```bash
git add hello.py
git commit -m "voeg hello.py toe"
git push
```

**Stap 7**: Pas `hello.py` aan:

```python
name = "Network Automation"
print(f"Hello {name}!")
print("Dit is mijn eerste Python project op GitHub.")
```

Commit en push:

```bash
git add hello.py
git commit -m "voeg variabele en extra print toe aan hello.py"
git push
```

**Stap 8**: Bekijk op GitHub je **commit-geschiedenis**:
- Ga naar je repo op GitHub
- Klik op **"commits"** (bovenaan, naast het aantal commits)
- Je ziet nu al je commits met tijdstip en boodschap

**Stap 9**: Bekijk het ook lokaal:

```bash
git log --oneline
```

---

### Deel C — Clone testen

**Stap 10**: Ga in je terminal naar een **andere map** (bv. je bureaublad):

```bash
cd ~/Desktop
git clone https://github.com/JOUW-USERNAME/python-oefeningen.git python-oefeningen-clone
```

**Stap 11**: Ga naar de gekloonde map en bekijk de remote-configuratie:

```bash
cd python-oefeningen-clone
git remote -v
```

Je ziet dat `origin` al automatisch is ingesteld.

**Stap 12**: Maak een wijziging, commit en push vanuit de clone:

```bash
echo "# Extra notities" >> README.md
git add README.md
git commit -m "voeg extra lijn toe aan README vanuit clone"
git push
```

**Controleer** op GitHub dat de wijziging zichtbaar is.

---

## Samenvatting

| Wat? | Hoe? |
| ---- | ---- |
| Git configureren | `git config --global user.name/email` |
| Nieuwe repo starten | `git init` + `git remote add origin <url>` |
| Bestaande repo kopiëren | `git clone <url>` |
| Wijzigingen opslaan | `git add .` → `git commit -m "msg"` → `git push` |
| Status bekijken | `git status` |
| Geschiedenis bekijken | `git log --oneline` |
| Bestanden negeren | `.gitignore` aanmaken |

**De gouden regel**: commit **vaak** en met **duidelijke boodschappen**. Zo houd je je geschiedenis overzichtelijk en kan je altijd terug naar een werkende versie.

---
