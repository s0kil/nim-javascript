## Steps

1. `dist/calculator.js` Nim JS Output

2. `dist/calculator.prepack.js` Partial Evaluation With Prepack

3. `dist/calculator.min.js` Optimized with Closure Compiler

## Conclusion

The result (`dist/calculator.min.js`) is like hand written JavaScript.

#### Before (Nim JS)

```nim
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
```

#### After (JavaScript)

```javascript
this.onload = function() {
  var b = document.createTextNode(""),
    a = document.createElement("input");
  a.addEventListener(
    "input",
    function() {
      b.nodeValue = a.value;
    },
    !1
  );
  document.body.appendChild(a);
  document.body.appendChild(document.createElement("hr"));
  document.body.appendChild(b);
};
```
