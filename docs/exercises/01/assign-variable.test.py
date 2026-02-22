num_assigned = ("num" in locals() or "num" in globals()) and num is not None
assert_eq("variabele 'num' is aangemaakt en er is een waarde toegekend", num_assigned)