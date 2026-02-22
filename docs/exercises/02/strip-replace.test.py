printed = _console.getvalue().strip()
# "  spam, spam, eggs  " -> strip -> "spam, spam, eggs"
# replace alle "spam, " → "eggs"
assert_eq("Na strip + replace blijft 'eggs' over", printed == "eggs")
