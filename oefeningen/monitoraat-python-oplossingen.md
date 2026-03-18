# Python Monitoraat — Oplossingen

De opgaven staan in [monitoraat-python-oefeningen.md](monitoraat-python-oefeningen.md).

Per oefening: één **hoofdoplossing** met stap-voor-stap uitleg. In de tekst vermelden we soms kort dat je dit later ook met andere technieken (bijv. list comprehensions) kan oplossen, maar we tonen hier slechts één uitgewerkte versie.


## Oefening 1 — Poorten classificeren

### Hoofdoplossing

```python
ports = [22, 80, 443, 8080, 23, 3306, 53, 1025, 8443, 21]

# a) Loop door de lijst en classificeer elke poort
privileged_count = 0
normal_count = 0

for port in ports:
    if port < 1024:
        print(f"Poort {port} → privileged")
        privileged_count += 1
    else:
        print(f"Poort {port} → normaal")
        normal_count += 1

# b) Print de tellingen
print(f"Privileged: {privileged_count}")
print(f"Normaal: {normal_count}")
```

**Uitleg:**
1. We maken twee tellers aan op 0.
2. De `for`-loop gaat door elke poort in de lijst.
3. `if port < 1024` bepaalt de categorie.
4. Bij elke match verhogen we de juiste teller met 1.

---

## Oefening 2 — Logregels filteren

### Hoofdoplossing

```python
logs = [
    "2025-03-01 INFO Server started",
    "2025-03-01 ERROR Disk full",
    "2025-03-01 INFO Request OK",
    "2025-03-01 WARNING High memory usage",
    "2025-03-01 ERROR Connection timeout",
    "2025-03-01 INFO User logged in",
    "2025-03-01 ERROR Permission denied",
]

# a) Filter errors in een nieuwe lijst
errors = []
for line in logs:
    if "ERROR" in line:
        errors.append(line)

# b) Print de errors en het totaal
for error in errors:
    print(error)
print(f"Aantal errors: {len(errors)}")
```

**Uitleg:**
1. We maken een lege lijst `errors`.
2. De `for`-loop gaat door elke logregel.
3. `"ERROR" in line` controleert of het woord "ERROR" in de string zit.
4. Als dat zo is, voegen we de regel toe met `.append()`.
5. Daarna printen we de errors en gebruiken `len()` voor het totaal.

---

## Oefening 3 — Hostnames nummeren

### Hoofdoplossing

```python
hostnames = ["router-gw", "switch-core", "firewall-01", "ap-floor2", "server-db"]

# a) Met enumerate
for nr, host in enumerate(hostnames, start=1):
    print(f"{nr}. {host}")

# b) Van achteren naar voren met while-loop
i = len(hostnames) - 1
while i >= 0:
    print(hostnames[i])
    i -= 1
```

**Uitleg (a):**
`enumerate(hostnames, start=1)` geeft bij elke iteratie een tuple `(nummer, element)`. `start=1` zorgt dat de nummering bij 1 begint in plaats van 0.

**Uitleg (b):**
We starten met `i = len(hostnames) - 1` (de laatste index, hier 4). Zolang `i >= 0` printen we het element en verlagen we `i` met 1.

---

## Oefening 4 — Server-info printen

### Hoofdoplossing

```python
servers = {
    "web01": {"ip": "10.0.1.1", "status": "online", "os": "Ubuntu"},
    "db01": {"ip": "10.0.2.1", "status": "offline", "os": "Debian"},
    "cache01": {"ip": "10.0.3.1", "status": "online", "os": "Ubuntu"},
}

# b) Gewone loop over de keys
for name in servers:
    info = servers[name]
    print(f"{name} — IP: {info['ip']}, Status: {info['status']}, OS: {info['os']}")

# c) Tel online servers
online_count = 0
for name in servers:
    info = servers[name]
    if info["status"] == "online":
        online_count += 1
print(f"Aantal online: {online_count}")
```

**Uitleg:**
`for name in servers:` loopt standaard over de **keys** van de dictionary. Met `info = servers[name]` haal je daarna de bijhorende value (de geneste dict) op.

---

## Oefening 5 — Online devices filteren

### Hoofdoplossing

```python
devices = [
    {"hostname": "router-gw", "ip": "10.0.0.1", "type": "router", "status": "online"},
    {"hostname": "switch-01", "ip": "10.0.0.2", "type": "switch", "status": "offline"},
    {"hostname": "switch-02", "ip": "10.0.0.3", "type": "switch", "status": "online"},
    {"hostname": "firewall", "ip": "10.0.0.4", "type": "firewall", "status": "online"},
    {"hostname": "ap-floor1", "ip": "10.0.0.5", "type": "access-point", "status": "offline"},
]

# a) Print alleen online devices
for device in devices:
    if device["status"] == "online":
        print(f"{device['hostname']} ({device['ip']}) is online")

# b) Maak lijst met alleen de IP's van online devices
online_ips = []
for device in devices:
    if device["status"] == "online":
        online_ips.append(device["ip"])
print(online_ips)
```

**Uitleg:**
Elk element in `devices` is een dictionary. We checken `device["status"]` in de `if` en halen daarna de waarden op die we nodig hebben.

---

## Oefening 6 — Geneste dictionaries

### Hoofdoplossing

```python
network = {
    "router1": {
        "hostname": "gw-router",
        "ip": "10.0.0.1",
        "vendor": "Cisco",
        "interfaces": ["Gi0/0", "Gi0/1", "Gi0/2"]
    },
    "switch1": {
        "hostname": "core-switch",
        "ip": "10.0.0.2",
        "vendor": "Juniper",
        "interfaces": ["eth0", "eth1"]
    },
    "switch2": {
        "hostname": "access-switch",
        "ip": "10.0.0.3",
        "vendor": "Cisco",
        "interfaces": ["Fa0/1", "Fa0/2", "Fa0/3", "Fa0/4"]
    }
}

# a) Specifieke waarden ophalen
print(network["router1"]["hostname"])     # gw-router
print(network["switch2"]["vendor"])       # Cisco

# b) Aantal interfaces per device
for name, info in network.items():
    print(f"{info['hostname']} heeft {len(info['interfaces'])} interfaces")

# c) Alleen Cisco-devices
for name, info in network.items():
    if info["vendor"] == "Cisco":
        print(f"{info['hostname']} ({info['ip']}) — Cisco")
```

**Uitleg:**
- `network["router1"]["hostname"]`: eerste bracket selecteert het device, tweede bracket selecteert het veld.
- `len(info['interfaces'])`: telt het aantal elementen in de interfaces-lijst.
- De filter in (c) is een combinatie van loop + if, net als bij de eerdere oefeningen.

---

## Oefening 7 — Poort valideren

### Hoofdoplossing

```python
# a) Functie schrijven
def is_valid_port(port):
    return 1 <= port <= 65535

# Testen
print(is_valid_port(80))       # True
print(is_valid_port(0))        # False
print(is_valid_port(70000))    # False
print(is_valid_port(443))      # True

# b) Gebruik in een loop
test_ports = [22, 0, 80, -1, 65535, 70000, 443, 99999]

for port in test_ports:
    if is_valid_port(port):
        print(f"{port} is geldig")
```

**Uitleg:**
- `1 <= port <= 65535` is een chained comparison. Python evalueert dit als `1 <= port and port <= 65535`.
- De functie returnt direct `True` of `False` — je hoeft geen `if` te schrijven om True/False terug te geven.

---

## Oefening 8 — Device formatteren

### Hoofdoplossing

```python
# a) Functie met default parameter
def format_device(hostname, ip, status="online"):
    return f"[{status.upper()}] {hostname} — {ip}"

# b) Testen
print(format_device("router-gw", "10.0.0.1"))
print(format_device("switch-01", "10.0.0.2", "offline"))
print(format_device("firewall", "10.0.0.4", "maintenance"))

# c) In een loop over devices
devices = [
    {"hostname": "router-gw", "ip": "10.0.0.1", "type": "router", "status": "online"},
    {"hostname": "switch-01", "ip": "10.0.0.2", "type": "switch", "status": "offline"},
    {"hostname": "switch-02", "ip": "10.0.0.3", "type": "switch", "status": "online"},
    {"hostname": "firewall", "ip": "10.0.0.4", "type": "firewall", "status": "online"},
    {"hostname": "ap-floor1", "ip": "10.0.0.5", "type": "access-point", "status": "offline"},
]

for d in devices:
    print(format_device(d["hostname"], d["ip"], d["status"]))
```

**Uitleg:**
- `status="online"` is een **default parameter**. Als je geen status meegeeft bij het aanroepen, wordt `"online"` gebruikt.
- `.upper()` zet de string om naar hoofdletters.
- De functie **returnt** een string. De `print()` gebeurt buiten de functie. Dit maakt de functie herbruikbaar (je kan het resultaat ook in een variabele opslaan).

---

## Oefening 9 — Devices tellen per status

### Hoofdoplossing

```python
def count_by_status(devices, status):
    count = 0
    for device in devices:
        if device["status"] == status:
            count += 1
    return count

# Testen
print(count_by_status(devices, "online"))    # 3
print(count_by_status(devices, "offline"))   # 2
print(count_by_status(devices, "unknown"))   # 0
```

**Uitleg:**
1. De teller `count` begint op 0.
2. We loopen door elke device en vergelijken de status.
3. Bij een match verhogen we de teller.
4. Na de loop returnen we het totaal.

---

## Oefening 10 — Flexibel filteren

### Hoofdoplossing

```python
# a) Functie
def filter_devices(devices, key, value):
    result = []
    for device in devices:
        if device[key] == value:
            result.append(device)
    return result

# b) Testen
online = filter_devices(devices, "status", "online")
for d in online:
    print(d["hostname"])

switches = filter_devices(devices, "type", "switch")
for d in switches:
    print(d["hostname"])

# c) Combineren met count_by_status
online_count = count_by_status(devices, "online")
offline_count = count_by_status(devices, "offline")
print(f"Er zijn {online_count} online devices en {offline_count} offline devices.")
```

**Uitleg:**
- De functie is **generiek**: de `key` en `value` parameters bepalen waarop gefilterd wordt. Zo kan je dezelfde functie gebruiken voor status, type, vendor, etc.
- `device[key]` werkt omdat `key` een string is (bv. `"status"`), en die string wordt als key gebruikt in de dictionary.

---

## Oefening 11 — Log parser

### Hoofdoplossing

```python
raw_logs = [
    "2025-03-15 INFO Server started successfully",
    "2025-03-15 ERROR Disk usage at 95%",
    "2025-03-15 WARNING High memory usage",
    "2025-03-15 ERROR Connection refused on port 22",
    "2025-03-15 INFO Backup completed",
]

# a) parse_log
def parse_log(line):
    parts = line.split()
    timestamp = parts[0]
    level = parts[1]
    message = " ".join(parts[2:])
    return {"timestamp": timestamp, "level": level, "message": message}

# b) get_errors
def get_errors(logs):
    errors = []
    for line in logs:
        parsed = parse_log(line)
        if parsed["level"] == "ERROR":
            errors.append(parsed)
    return errors

# c) Testen
errors = get_errors(raw_logs)
for error in errors:
    print(f"[{error['timestamp']}] {error['message']}")
```

**Uitleg parse_log:**
1. `line.split()` splitst de string op spaties → een lijst van woorden.
2. `parts[0]` = de datum, `parts[1]` = het level (INFO/ERROR/WARNING).
3. `" ".join(parts[2:])` plakt alle woorden vanaf index 2 weer aan elkaar met spaties → de message.
4. We geven een dictionary terug met drie keys.

**Uitleg get_errors:**
1. We loopen door elke ruwe logregel.
2. We parsen de regel met `parse_log()`.
3. Als het level `"ERROR"` is, voegen we het parsed resultaat toe aan de lijst.
4. We geven de lijst van error-dicts terug.

---

## Oefening 12 — Mini-project: netwerk inventaris

### Hoofdoplossing

```python
inventory = [
    {"type": "router", "hostname": "router-gw", "ip": "10.0.0.1", "vlan": 1, "status": "online"},
    {"type": "switch", "hostname": "switch-core", "ip": "10.0.1.1", "vlan": 10, "status": "online"},
    {"type": "switch", "hostname": "switch-floor1", "ip": "10.0.1.2", "vlan": 10, "status": "offline"},
    {"type": "switch", "hostname": "switch-floor2", "ip": "10.0.1.3", "vlan": 20, "status": "online"},
    {"type": "access-point", "hostname": "ap-floor1", "ip": "10.0.2.1", "vlan": 10, "status": "online"},
    {"type": "access-point", "hostname": "ap-floor2", "ip": "10.0.2.2", "vlan": 20, "status": "offline"},
    {"type": "firewall", "hostname": "fw-main", "ip": "10.0.0.254", "vlan": 1, "status": "online"},
]

# a) Alle hostnames printen
def print_hostnames(devices):
    for device in devices:
        print(device["hostname"])

print_hostnames(inventory)

# b) Filteren op type
def get_by_type(devices, device_type):
    result = []
    for device in devices:
        if device["type"] == device_type:
            result.append(device)
    return result

switches = get_by_type(inventory, "switch")
for s in switches:
    print(f"{s['hostname']} — {s['ip']}")

# c) Online devices groeperen per VLAN
def group_online_by_vlan(devices):
    groups = {}
    for device in devices:
        if device["status"] == "online":
            vlan = device["vlan"]
            if vlan not in groups:
                groups[vlan] = []
            groups[vlan].append(device["hostname"])
    return groups

result = group_online_by_vlan(inventory)
for vlan, hosts in result.items():
    print(f"VLAN {vlan}: {hosts}")
```

**Uitleg print_hostnames:**
Simpele loop die `device["hostname"]` print voor elk device.

**Uitleg get_by_type:**
Dezelfde filter-structuur als in oefening 10, maar nu specifiek op `"type"`.

**Uitleg group_online_by_vlan:**
1. We maken een lege dictionary `groups`.
2. We loopen door elk device. Alleen **online** devices worden verwerkt.
3. We halen het VLAN-nummer op.
4. Als dat VLAN nog niet als key in `groups` staat, maken we een lege lijst aan.
5. We voegen de hostname toe aan de lijst van dat VLAN.
6. Na de loop geven we de volledige dictionary terug.

---
