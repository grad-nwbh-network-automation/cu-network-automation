printed = _console.getvalue().strip()
expected = "\n".join(["1","2","4","5"])  # 3 ontbreekt
assert_eq("1,2,4,5 op aparte lijnen", printed == expected)