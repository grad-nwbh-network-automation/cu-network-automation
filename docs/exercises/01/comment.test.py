# Test 1: num bestaat en is 5
try:
    _num_ok = (num == 5)
except NameError:
    _num_ok = False
assert_eq("num is 5", _num_ok)

# Test 2: '😈😈😈' is niet geprint (regel is gecommentarieerd)
_printed = _console.getvalue()
_lines = [ln.strip() for ln in _printed.splitlines()]
assert_eq("geen print van 😈😈😈", "😈😈😈" not in _lines)

# Test 3: er is minstens één keer '5' geprint
assert_eq("print bevat 5", "5" in _lines)

# Test 4: de laatste geprinte waarde is 5
_last = _lines[-1] if _lines else ""
assert_eq("laatste print is 5", _last == "5")