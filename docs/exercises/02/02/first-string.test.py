# Test: text is a string
try:
    _is_string = isinstance(text, str)
except NameError:
    _is_string = False

assert_eq("text is a string", _is_string)