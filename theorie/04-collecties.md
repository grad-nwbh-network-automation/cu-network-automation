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