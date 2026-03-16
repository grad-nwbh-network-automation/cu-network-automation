# Python Monitoraat — Oefeningen

**Onderwerpen**: variabelen, f-strings, lists, dictionaries, l

Werk op je eigen tempo. Sla niets over — elke oefening bouwt voort op de vorige concepten. Vraag hulp als je ergens vast zit.

## Blok A — Opwarming: loops + lists


### Oefening 1 — Poorten classificeren 

Gegeven:

```python
ports = [22, 80, 443, 8080, 23, 3306, 53, 1025, 8443, 21]
```

**a)** Gebruik een `for`-loop om door de lijst te lopen. Print voor elke poort of het een **privileged** poort is (kleiner dan 1024) of een **normale** poort.

**Verwachte output:**

```
Poort 22 → privileged
Poort 80 → privileged
Poort 443 → privileged
Poort 8080 → normaal
Poort 23 → privileged
Poort 3306 → normaal
Poort 53 → privileged
Poort 1025 → normaal
Poort 8443 → normaal
Poort 21 → privileged
```

**b)** Tel hoeveel poorten privileged zijn en hoeveel normaal. Print het resultaat.

**Verwachte output:**

```
Privileged: 6
Normaal: 4
```

---

### Oefening 2 — Logregels filteren 

Gegeven:

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
```

**a)** Maak een **nieuwe lege lijst** `errors`. Gebruik een `for`-loop om alleen de regels die `"ERROR"` bevatten toe te voegen aan `errors`.

**b)** Print elke error-regel en print daarna het totaal aantal errors.

**Verwachte output:**

```
2025-03-01 ERROR Disk full
2025-03-01 ERROR Connection timeout
2025-03-01 ERROR Permission denied
Aantal errors: 3
```

---

### Oefening 3 — Hostnames nummeren 

Gegeven:

```python
hostnames = ["router-gw", "switch-core", "firewall-01", "ap-floor2", "server-db"]
```

**a)** Gebruik `enumerate()` met `start=1` om de hostnames genummerd te printen.

**Verwachte output:**

```
1. router-gw
2. switch-core
3. firewall-01
4. ap-floor2
5. server-db
```

**b)** Gebruik nu een `while`-loop om dezelfde lijst **van achteren naar voren** te printen (het laatste element eerst).

**Verwachte output:**

```
server-db
ap-floor2
firewall-01
switch-core
router-gw
```



## Blok B — Dictionaries + loops


### Oefening 4 — Server-info printen 

**a)** Maak een dictionary `servers` met drie servers als keys en hun info als geneste dictionaries:

```python
servers = {
    "web01": {"ip": "10.0.1.1", "status": "online", "os": "Ubuntu"},
    "db01": {"ip": "10.0.2.1", "status": "offline", "os": "Debian"},
    "cache01": {"ip": "10.0.3.1", "status": "online", "os": "Ubuntu"},
}
```

**b)** Loop door de dictionary met `.items()` en print voor elke server:

**Verwachte output:**

```
web01 — IP: 10.0.1.1, Status: online, OS: Ubuntu
db01 — IP: 10.0.2.1, Status: offline, OS: Debian
cache01 — IP: 10.0.3.1, Status: online, OS: Ubuntu
```

**c)** Tel hoeveel servers `"online"` zijn en print het resultaat.

---

### Oefening 5 — Online devices filteren

Gegeven:

```python
devices = [
    {"hostname": "router-gw", "ip": "10.0.0.1", "type": "router", "status": "online"},
    {"hostname": "switch-01", "ip": "10.0.0.2", "type": "switch", "status": "offline"},
    {"hostname": "switch-02", "ip": "10.0.0.3", "type": "switch", "status": "online"},
    {"hostname": "firewall", "ip": "10.0.0.4", "type": "firewall", "status": "online"},
    {"hostname": "ap-floor1", "ip": "10.0.0.5", "type": "access-point", "status": "offline"},
]
```

**a)** Loop door de lijst en print **alleen** de devices die `"online"` zijn.

**Verwachte output:**

```
router-gw (10.0.0.1) is online
switch-02 (10.0.0.3) is online
firewall (10.0.0.4) is online
```

**b)** Maak een nieuwe lijst `online_ips` die alleen de IP-adressen van online devices bevat. Print de lijst.

**Verwachte output:**

```
['10.0.0.1', '10.0.0.3', '10.0.0.4']
```

---

### Oefening 6 — Geneste dictionaries 

Gegeven:

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
```

**a)** Print de hostname van `"router1"` en de vendor van `"switch2"`.

**b)** Print het **aantal interfaces** van elk device.

**Verwachte output:**

```
gw-router heeft 3 interfaces
core-switch heeft 2 interfaces
access-switch heeft 4 interfaces
```

**c)** Loop door alle devices en print alleen de devices van vendor `"Cisco"`.

**Verwachte output:**

```
gw-router (10.0.0.1) — Cisco
access-switch (10.0.0.3) — Cisco
```


## Blok C — Functies basis

---

### Oefening 7 — Poort valideren

**a)** Schrijf een functie `is_valid_port(port)` die `True` teruggeeft als de poort tussen 1 en 65535 ligt, anders `False`.

```python
print(is_valid_port(80))       # True
print(is_valid_port(0))        # False
print(is_valid_port(70000))    # False
print(is_valid_port(443))      # True
```

**b)** Gegeven:

```python
test_ports = [22, 0, 80, -1, 65535, 70000, 443, 99999]
```

Gebruik je functie `is_valid_port()` in een `for`-loop om alleen de **geldige** poorten te printen.

**Verwachte output:**

```
22 is geldig
80 is geldig
65535 is geldig
443 is geldig
```

---

### Oefening 8 — Device formatteren

**a)** Schrijf een functie `format_device(hostname, ip, status="online")` die een geformatteerde string **teruggeeft** (niet print!):

```
[ONLINE] router-gw — 10.0.0.1
```

De status moet in **hoofdletters** staan.

**b)** Test je functie:

```python
print(format_device("router-gw", "10.0.0.1"))
print(format_device("switch-01", "10.0.0.2", "offline"))
print(format_device("firewall", "10.0.0.4", "maintenance"))
```

**Verwachte output:**

```
[ONLINE] router-gw — 10.0.0.1
[OFFLINE] switch-01 — 10.0.0.2
[MAINTENANCE] firewall — 10.0.0.4
```

**c)** Gebruik je functie in een loop over de `devices`-lijst van oefening 5. Print het resultaat van `format_device()` voor elk device.

---

### Oefening 9 — Devices tellen per status 

**a)** Schrijf een functie `count_by_status(devices, status)` die telt hoeveel devices de opgegeven status hebben. De functie **returnt** het aantal (een integer).

**b)** Gebruik dezelfde `devices`-lijst van oefening 5. Test:

```python
print(count_by_status(devices, "online"))    # 3
print(count_by_status(devices, "offline"))   # 2
print(count_by_status(devices, "unknown"))   # 0
```

---

## Blok D — Functies + collecties combineren


### Oefening 10 — Flexibel filteren 

**a)** Schrijf een functie `filter_devices(devices, key, value)` die:

- Een lijst van dictionaries ontvangt
- Filtert op een opgegeven key-value paar
- Een **nieuwe lijst** teruggeeft met alleen de matching devices

**b)** Test met de `devices`-lijst van oefening 5:

```python
online = filter_devices(devices, "status", "online")
switches = filter_devices(devices, "type", "switch")
```

Print de resultaten:

```python
for d in online:
    print(d["hostname"])
```

**Verwachte output:**

```
router-gw
switch-02
firewall
```

```python
for d in switches:
    print(d["hostname"])
```

**Verwachte output:**

```
switch-01
switch-02
```

**c)** Gebruik `filter_devices()` en `count_by_status()` (oefening 9) samen om te printen:

```
Er zijn 3 online devices en 2 offline devices.
```

---

### Oefening 11 — Log parser

Gegeven:

```python
raw_logs = [
    "2025-03-15 INFO Server started successfully",
    "2025-03-15 ERROR Disk usage at 95%",
    "2025-03-15 WARNING High memory usage",
    "2025-03-15 ERROR Connection refused on port 22",
    "2025-03-15 INFO Backup completed",
]
```

**a)** Schrijf een functie `parse_log(line)` die een logregel ontvangt en een **dictionary** teruggeeft:

```python
parse_log("2025-03-15 ERROR Disk usage at 95%")
```

Moet teruggeven:

```python
{"timestamp": "2025-03-15", "level": "ERROR", "message": "Disk usage at 95%"}
```

**Tip:** gebruik `.split()` om de string op te splitsen. De eerste waarde is de timestamp, de tweede is het level, de rest is de message.

**b)** Schrijf een functie `get_errors(logs)` die een lijst van ruwe logregels ontvangt en een **lijst van dictionaries** teruggeeft met alleen de ERROR-entries (gebruik `parse_log()` hierin).

**c)** Test:

```python
errors = get_errors(raw_logs)
for error in errors:
    print(f"[{error['timestamp']}] {error['message']}")
```

**Verwachte output:**

```
[2025-03-15] Disk usage at 95%
[2025-03-15] Connection refused on port 22
```

---

### Oefening 12 — Mini-project: netwerk inventaris

Gegeven:

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
```

**a)** Schrijf een functie `print_hostnames(devices)` die alle hostnames print, elk op een nieuwe regel.

**b)** Schrijf een functie `get_by_type(devices, device_type)` die een lijst teruggeeft met alleen de devices van het opgegeven type.

Test:

```python
switches = get_by_type(inventory, "switch")
for s in switches:
    print(f"{s['hostname']} — {s['ip']}")
```

**Verwachte output:**

```
switch-core — 10.0.1.1
switch-floor1 — 10.0.1.2
switch-floor2 — 10.0.1.3
```

**c)** Schrijf een functie `group_online_by_vlan(devices)` die een **dictionary** teruggeeft waar de keys VLAN-nummers zijn en de values een **lijst van hostnames** van online devices in dat VLAN.

Test:

```python
result = group_online_by_vlan(inventory)
for vlan, hosts in result.items():
    print(f"VLAN {vlan}: {hosts}")
```

**Verwachte output:**

```
VLAN 1: ['router-gw', 'fw-main']
VLAN 10: ['switch-core', 'ap-floor1']
VLAN 20: ['switch-floor2']
```

---

## Klaar?

Als je alle oefeningen hebt afgewerkt, probeer dan je oplossingen nog eens te bekijken:
- Kan je ergens een **while-loop** vervangen door een **for-loop** (of omgekeerd)?
- Kan je ergens een functie hergebruiken die je eerder geschreven hebt?
- Zijn je variabelenamen duidelijk?

De oplossingen worden na de les beschikbaar gesteld.

