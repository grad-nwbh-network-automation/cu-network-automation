printed = _console.getvalue()
assert_eq("5 wordt geprint naar de console", "5".lower() in printed.lower())