var on_load_45014, out_of_mem_hook_18626, local_raise_hook_18623, global_raise_hook_18618, nim_program_result, lastJSError, excHandler, framePtr;
(function () {
  var _$0 = this;

  var _F = function (event_45016) {
    function HEX3Aanonymous_45019(event_45021) {
      output_45017.nodeValue = input_45018.value;
    }

    var output_45017 = document.createTextNode("");
    var input_45018 = document.createElement("input");
    input_45018.addEventListener("input", HEX3Aanonymous_45019, false);
    document.body.appendChild(input_45018);
    document.body.appendChild(document.createElement("hr"));
    document.body.appendChild(output_45017);
  };

  _$0.on_load_45014 = _F;
  _$0.framePtr = null;
  _$0.excHandler = 0;
  _$0.lastJSError = null;
  _$0.nim_program_result = 0;
  var _8 = [null];
  _$0.global_raise_hook_18618 = _8;
  var _A = [null];
  _$0.local_raise_hook_18623 = _A;
  var _C = [null];
  _$0.out_of_mem_hook_18626 = _C;
  _$0.onload = _F;
}).call(this);