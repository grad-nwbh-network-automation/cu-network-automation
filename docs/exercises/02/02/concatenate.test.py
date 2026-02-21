printed = _console.getvalue()
assert_eq("'Het is mooi weer' is aanwezig in de console output", "Het is mooi weer".lower() in printed.lower())