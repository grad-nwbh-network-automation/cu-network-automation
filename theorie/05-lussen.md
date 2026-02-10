# Lussen

**`for` met `range`**

```python
for i in range(1, 6):
    print("i =", i)
```

**Lees**: “Loop van 1 t/m 5; print i elke keer.”

**`for` over lijst + tellen**

```python
levels = ["INFO", "WARN", "ERROR"]
for idx, level in enumerate(levels, start=1):
    print(idx, level)
```

**Lees**: “Loop over de lijst; `idx` telt mee vanaf 1; print nummer en waarde.”

**`while` aftellen**

```python
count = 3
while count > 0:
    print("count:", count)
    count -= 1
print("GO!")
```

**Lees**: “Zolang `count` groter dan 0 is, print en verlaag. Daarna ‘GO!’.”

**Waarom nuttig?** Over **servers** itereren, **retries**, **logregels** verwerken.

**Mini-oefening (6 min)**: lijst `["nginx","sshd","postgres"]` → print `check <naam>` per item. Bonus: nummer ze (1., 2., 3.).

---

## Extra mini-oefeningen

### **FOR-oefeningen**

1. **Print alle woorden in een lijst**:

```python
words = ["server", "client", "router", "switch"]
# Print elk woord
```

2. **Print alle getallen van 5 t/m 10**:

```python
# Gebruik range(5, 11)
```

3. **Print namen mét nummer**:

```python
names = ["Amina", "Yunus", "Sara"]
# Output:
# 1. Amina
# 2. Yunus
# 3. Sara
```

4. **Print alleen even getallen**:

```python
numbers = [1,2,3,4,5,6,7,8]
# Print alleen de even (2,4,6,8)
```

5. **Lengte van elk woord**:

```python
words = ["python", "api", "database"]
# Print: python = 6, api = 3, database = 8
```

---

### **WHILE-oefeningen**

1. **Tel van 1 tot 5**:

```python
# Gebruik while, geen for
# Output: 1 2 3 4 5
```

2. **Tel terug van 10 naar 1**:

```python
# Print 10,9,8... tot 1
```

3. **Vraag input tot gebruiker 'exit' typt**:

```python
# while input("Type iets: ") != "exit":
#     print("Nog eens!")
```

4. **Laat teller lopen tot 20**:

```python
count = 0
# Verhoog count telkens met 1 tot het 20 is
```

5. **Herhaal wachtwoordprompt tot juist**:

```python
correct = "admin"
# Vraag via input(); while fout -> opnieuw vragen
```

---

### **Bonus for/while + if**

**FOR + IF**:

```python
numbers = [3, 8, 12, 5, 20]
# Print alleen de getallen > 10
```

**WHILE + IF**:

```python
count = 0
# Print "even" of "oneven" terwijl count van 0 t/m 5 loopt
```
