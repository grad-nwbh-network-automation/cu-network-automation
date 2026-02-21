# Hoofdstuk 4: Collecties + **indexeren** (We gaan hier later dieper op in.)

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

## List

Een lijst (list) in Python is:
- Een **sequentie van elementen** die gescheiden worden door komma’s en tussen **blokhaken** staan.
- Een **mutable** (wijzigbaar) en **geordend** datatype.

## Dictionary

Dictionaries zijn wijzigbare, geordende datatypes
- De gegevens in een dictionary bestaan uit **paren** in de vorm *key: value*.
- Waarden zijn **toegankelijk via hun sleutel**, niet via een index zoals bij lijsten.
- Items in een dictionary worden **opgeslagen in de volgorde waarin ze toegevoegd zijn**.
- Omdat dictionaries **mutable (wijzigbaar)** zijn, kunnen items worden aangepast, toegevoegd of verwijderd.
- Een **sleutel** moet een **immutable** (onveranderlijk) object zijn: bijvoorbeeld een *getal*, *string* of *tuple*.
- Een **waarde** kan gegevens van **eender welk type** bevatten.

Voorbeeld:
```python
london = {'name': 'London1', 'location': 'London Str', 'vendor': 'Cisco'}
```

Een waarde opvragen uit een dictionary

Om een waarde uit een dictionary te halen, moet je **verwijzen naar de sleutel**.  
Dit werkt op bijna dezelfde manier als bij lijsten, **maar je gebruikt een sleutel in plaats van een nummer**.
```python
In [1]: london = {'name': 'London1', 'location': 'London Str'}
In [2]: london['name']
Out[2]: 'London1'
In [3]: london['location']
Out[3]: 'London Str'
```

Op deze manier kan je ook een nieuwe waarde toevoegen:
```python
In [4]: london['vendor'] = 'Cisco'
In [5]: print(london)
{'vendor': 'Cisco', 'name': 'London1', 'location': 'London Str'}
``` 

Je kan een dictionary ook gebruiken als waarde in een dictionary:
```python
london_co = {
    'r1': {
        'hostname': 'london_r1',
        'location': '21 New Globe Walk',
        'vendor': 'Cisco',
        'model': '4451',
        'ios': '15.4',
        'ip': '10.255.0.1'
    },
    'r2': {
        'hostname': 'london_r2',
        'location': '21 New Globe Walk',
        'vendor': 'Cisco',
        'model': '4451',
        'ios': '15.4',
        'ip': '10.255.0.2'
    },
    'sw1': {
        'hostname': 'london_sw1',
        'location': '21 New Globe Walk',
        'vendor': 'Cisco',
        'model': '3850',
        'ios': '3.6.XE',
        'ip': '10.255.0.101'
    }
}
```

Waarden uit een geneste dictionary kan je op volgende manier ophalen:
```python
In [7]: london_co['r1']['ios']
Out[7]: '15.4'
In [8]: london_co['r1']['model']
Out[8]: '4451'
In [9]: london_co['sw1']['ip']
Out[9]: '10.255.0.101'
```

## Tuple

Een tuple in Python is:

- Een **sequentie van elementen** die gescheiden worden door komma’s en tussen **haakjes** staan.
- Een **immutable** (onveranderlijk) en **geordend** datatype.

In eenvoudige woorden: een tuple is een lijst die **niet gewijzigd kan worden**.  
Je kan zeggen dat een tuple "read‑only rechten" heeft. Dit kan helpen om onbedoelde wijzigingen te voorkomen.

Een lege tuple aanmaken

```python
In [1]: tuple1 = tuple()
In [2]: print(tuple1)
()
```

Tuple met 1 element:
```python
In [3]: tuple2 = ('password',)
```

Een tuple maken van een lijst:
```python
In [4]: list_keys = ['hostname', 'location', 'vendor', 'model', 'ios', 'ip']
In [5]: tuple_keys = tuple(list_keys)
In [6]: tuple_keys
Out[6]: ('hostname', 'location', 'vendor', 'model', 'ios', 'ip')
```

Elementen opvragen (zoals bij een lijst, via index)
```python
In [7]: tuple_keys[0]
Out[7]: 'hostname'
```

Maar omdat Tuple immutable is, kan je daar geen nieuwe waarde aan toekennen:
```shell
In [8]: tuple_keys[1] = 'test'

<ipython-input-9-1c7162cdefa3> in <module>()
----> 1 tuple_keys[1] = 'test'
TypeError: 'tuple' object does not support item assignment
```

## Set

Een set in Python is:

- Een **mutable** (wijzigbaar), **ongeordend** datatype.
- Een set bevat **altijd unieke elementen**.
- Een set is een **sequentie van elementen** die gescheiden worden door komma’s en tussen **accolades** staan.

Sets zijn heel handig om dubbele waarden automatisch te verwijderen.

### Voorbeeld: dubbele elementen verwijderen

```python
vlans = [10, 20, 30, 40, 100, 10]
set(vlans)
# Output:
# {10, 20, 30, 40, 100}
``