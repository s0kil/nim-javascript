import dom

func add(a, b: int): int =
  return a + b

proc onLoad(event: Event) =
  echo add(5, 5)

window.onload = onLoad