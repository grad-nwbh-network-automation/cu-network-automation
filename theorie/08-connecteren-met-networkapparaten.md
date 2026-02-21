# Hoofdstuk 8: Verbinding maken met netwerkapparaten

In deze sectie wordt besproken hoe je verbinding kunt maken met netwerkapparaten via:

- **SSH**
- **Telnet**

Python heeft verschillende modules waarmee je verbinding kunt maken met netwerkapparaten en commando’s kunt uitvoeren:

- **pexpect**
  - Een implementatie van *expect* in Python.
  - Hiermee kan je werken met eender welke interactieve sessie: SSH, Telnet, SFTP, enz.
  - Daarnaast kan je ook OS‑commando’s uitvoeren (dit kan ook met andere modules).
  - Hoewel pexpect iets minder gebruiksvriendelijk is dan andere modules, biedt het **algemenere en krachtigere functionaliteit**, waardoor het werkt in situaties waar andere modules falen.

- **paramiko**
  - Deze module laat je verbinden via **SSHv2**.
  - Gebruiksvriendelijker dan pexpect, maar heeft een beperktere functionaliteit (alleen SSH).

- **netmiko**
  - Een module die het gebruik van Paramiko vereenvoudigt voor netwerkapparaten.
  - Netmiko is een **wrapper** speciaal ontworpen voor netwerkbeheer en netwerkapparatuur.

Deze sectie behandelt alle 3 modules en beschrijft hoe je verbinding kunt maken met meerdere apparaten **parallel**.  


## Paswoorden ingeven (*intermezzo*)
Als je manueel een connectie maakt met een apparaaat, dan wordt het wachtwoord ook gewoon ingetypt. 

Bij het automatiseren van de verbinding moet je beslissen hoe het wachtwoord zal worden doorgegeven:
- Je kan het wachtwoord opvragen met user input. Het nadeel hiervan is dat iedereen kan zien welk paswoord je intypt. 
- Je login en paswoord wegschrijven naar een bestand (niet veilig)

Als een regel, laat je best dezelfde gebruiker hetzelfde wachtwoord en login gebruiken om te connecteren met een apparaat. En daarom is het genoeg om aan het begin van een script de login en wachtwoord op te vragen en dit te gebruiken om te connecteren met verschillende apparaten. 

Jammer genoeg, bij het gebruik van `input` is het paswoord zichtbaar. Het is dus beter om geen tekens zichtbaar te hebben bij het intypen ervan. Daarvoor kunnen we gebruik maken van `getpass`-module

### `getpass`-module
Met getpass kunnne we een paswoord opvragen zonder de tekens zichtbaar te hebben:
```python
import getpass

password = getpass.getpass()
# output: Password:

print(password)
# output: 123456
```

<!-- ### Omgevingsvariabelen
Een andere manier om paswoorden of gebruikersnamen te bewaren is door omgevingsvariabelen te gebruiken. 

...  -->

## De `pexpect` module
Met pexpect kunnen we volgende connecties automatiseren:
- telnet
- ssh
- ftp

Eerst en vooral dienen we de pexpect module te installeren:
```shell
pip install pexpect
```

## De `paramiko` module
Paramiko is ee implementatie van het SSHv2 protocol via Python. Paramiko voorziet client-server functionaliteit.

Zoals `pexpect` dient ook `paramiko` geïnstalleerd te worden.

```shell
pip install paramiko
```

## De `netmiko`module

Netmiko is een module dat het gemakkelijker maakt om paramiko te gebruiken voor netwerk-apparaten. Netmiko maakt gebruik van paramiko, maar creëert ook interfaces en methodes nodig om verbinding te maken met netwerkapparaten. 

Eerst dien je wel `netmiko` te installeren:
```shell
pip install netmiko
```

### Ondersteunde apparaten
Netmiko ondersteunt verschillende apparaten:
- Arista vEOS
- Cisco ASA
- Cisco IOS
- Cisco IOS-XR
- Cisco SG300
- HP Comware7
- HP ProCurve
- Juniper Junos
- Linux
- and other

De volledige lijst kan je [hier](https://github.com/ktbyers/netmiko) raadplegen.

### Apparaat parameters
om verbinding te maken met een apparaat, kan je de parameters doorgeven met een dictionary:

```python
cisco_router = {
    'device_type': 'cisco_ios',
    'host': '192.168.1.1',
    'username': 'user',
    'password': 'userpass',
    'secret': 'enablepass',
    'port': 20022,
}
```

### Connecteren via SSH
```python
ssh = ConnectHandler(cisco_router)
```

### Enable modus
Switch to enable mode:
```python
ssh.enable()
```

Exit enable mode:
```python
ssh.exit_enable_mode()
```

## Meerdere connecties met meerdere toestellen
