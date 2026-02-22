        printed = _console.getvalue().strip()
        expected_lines = []
        for a in range(1,4):
            for b in range(1,4):
                expected_lines.append(f"{a}x{b}={a*b}")
        expected = "
".join(expected_lines)
        assert_eq("Tafel 1..3 x 1..3", printed == expected)
