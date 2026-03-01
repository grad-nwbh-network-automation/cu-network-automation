printed = _console.getvalue().strip()
expected = "[INFO] Server started\n[ERROR] Disk full"
assert_eq("Default level is INFO, tweede aanroep is ERROR", printed == expected)
