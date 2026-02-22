        printed = _console.getvalue().strip()
        expected = "
".join(["0: kat", "1: hond", "2: koe"]) 
        assert_eq("enumerate index:waarde", printed == expected)
