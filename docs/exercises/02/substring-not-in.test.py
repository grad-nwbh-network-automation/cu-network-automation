printed = _console.getvalue().strip()
# " " not in "janiek_colpaert" -> True
assert_eq("Geen spatie in gebruikersnaam → True", printed == "True")
