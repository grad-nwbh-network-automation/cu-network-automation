printed = _console.getvalue().strip()
expected = "True\nFalse"
assert_eq("is_valid_port(80)=True, is_valid_port(70000)=False", printed == expected)
