printed = _console.getvalue().strip()
expected = "192.168.1.1\n192.168.1.2"
assert_eq("find_cisco filtert alleen cisco_ios devices", printed == expected)
