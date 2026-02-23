printed = _console.getvalue().strip()
# "programmeren"[:7] == "programm"
assert_eq("Slice van de eerste 7 tekens is 'program'", printed == "program")
