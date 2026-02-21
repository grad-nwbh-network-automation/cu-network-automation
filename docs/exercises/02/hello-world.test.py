printed = _console.getvalue()
assert_eq("'Hallo wereld' is aanwezig in de console output", "Hallo wereld".lower() in printed.lower())