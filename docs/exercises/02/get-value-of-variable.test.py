printed = _console.getvalue()
assert_eq("0.3 wordt geprint naar de console", "0.3".lower() in printed.lower())