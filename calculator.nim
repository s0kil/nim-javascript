import dom

proc onLoad(event: Event) =
  let
    output = document.createTextNode("")
    input = document.createElement("input")

  input.addEventListener("input",
    proc(event: Event) = output.nodeValue = input.value
  )

  document.body.appendChild(input)
  document.body.appendChild(document.createElement("hr"))
  document.body.appendChild(output)

window.onload = onLoad
