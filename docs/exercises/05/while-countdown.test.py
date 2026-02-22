        printed = _console.getvalue().strip()
        expected = "
".join(["5","4","3","2","1","start!"])
        assert_eq("Aftellen 5..1 en start!", printed == expected)
