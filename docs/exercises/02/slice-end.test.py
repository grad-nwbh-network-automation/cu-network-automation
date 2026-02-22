printed = _console.getvalue().strip()
# Laatste 4 tekens van "programmeren" zijn "eren"
assert_eq("Laatste 4 tekens zijn 'eren'", printed == "eren")
