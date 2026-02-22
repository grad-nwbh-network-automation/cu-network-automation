        printed = _console.getvalue().strip()
        expected = "
".join(["d","c","b","a"]) 
        assert_eq("Reverse iteratie d,c,b,a", printed == expected)
