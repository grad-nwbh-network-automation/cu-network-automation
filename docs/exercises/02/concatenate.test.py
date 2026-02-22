printed = _console.getvalue()
expected = "Hallo wereld"
assert_eq(f"Output bevat '{expected}' (ongeacht hoofdletters)", expected.lower() in printed.lower())
