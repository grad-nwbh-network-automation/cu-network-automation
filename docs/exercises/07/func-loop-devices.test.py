printed = _console.getvalue().strip()
expected = "192.168.1.1\n192.168.1.2\n10.0.0.1"
assert_eq("list_hosts print alle 3 hosts", printed == expected)
