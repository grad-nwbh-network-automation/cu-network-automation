        printed = _console.getvalue().strip()
        expected = "
".join(["apple", "banana", "cherry"])  # exact 3 lijnen
        assert_eq("Drie fruits op aparte lijnen", printed == expected)
