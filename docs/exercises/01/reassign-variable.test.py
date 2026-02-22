# Test 1: num is reassigned to 10
try:
    _val = num
    _reassigned = (_val == 10)
except NameError:
    _reassigned = False
assert_eq("num is nu 10", _reassigned)

# Test 2: printed 10 at least once
_printed = _console.getvalue()
_lines = [ln.strip() for ln in _printed.splitlines() if ln.strip() != ""]
assert_eq("printed 10", "10" in _lines)

# Test 3: last printed value is 10
_last = _lines[-1] if _lines else ""
assert_eq("laatst geprintte value is 10", _last == "10")
