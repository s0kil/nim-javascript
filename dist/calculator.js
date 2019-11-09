/* Generated by the Nim Compiler v1.0.2 */
/*   (c) 2019 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;

function toJSStr(s_23304) {
										var Tmp5;
						var Tmp7;

	var result_23305 = null;

		var res_23363 = new_seq_23336((s_23304 != null ? s_23304.length : 0));
		var i_23365 = 0;
		var j_23367 = 0;
		L1: do {
				L2: while (true) {
				if (!(i_23365 < (s_23304 != null ? s_23304.length : 0))) break L2;
					var c_23368 = s_23304[i_23365];
					if ((c_23368 < 128)) {
					res_23363[j_23367] = String.fromCharCode(c_23368);
					i_23365 += 1;
					}
					else {
						var helper_23391 = new_seq_23336(0);
						L3: do {
								L4: while (true) {
								if (!true) break L4;
									var code_23392 = c_23368.toString(16);
									if (((code_23392 != null ? code_23392.length : 0) == 1)) {
									if (helper_23391 != null) { helper_23391.push("%0"); } else { helper_23391 = ["%0"]; };
									}
									else {
									if (helper_23391 != null) { helper_23391.push("%"); } else { helper_23391 = ["%"]; };
									}
									
									if (helper_23391 != null) { helper_23391.push(code_23392); } else { helper_23391 = [code_23392]; };
									i_23365 += 1;
										if (((s_23304 != null ? s_23304.length : 0) <= i_23365)) Tmp5 = true; else {											Tmp5 = (s_23304[i_23365] < 128);										}									if (Tmp5) {
									break L3;
									}
									
									c_23368 = s_23304[i_23365];
								}
						} while(false);
++excHandler;
						Tmp7 = framePtr;
						try {
						res_23363[j_23367] = decodeURIComponent(helper_23391.join(""));
--excHandler;
} catch (EXC) {
 var prevJSError = lastJSError;
 lastJSError = EXC;
 --excHandler;
						framePtr = Tmp7;
						res_23363[j_23367] = helper_23391.join("");
						lastJSError = prevJSError;
						} finally {
						framePtr = Tmp7;
						}
					}
					
					j_23367 += 1;
				}
		} while(false);
		if (res_23363 === null) res_23363 = [];
               if (res_23363.length < j_23367) { for (var i=res_23363.length;i<j_23367;++i) res_23363.push(null); }
               else { res_23363.length = j_23367; };
		result_23305 = res_23363.join("");

	return result_23305;

}

function rawEcho() {
		      var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

	
}

function cstrToNimstr(c_23287) {
		  var ln = c_23287.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_23287.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_23287.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

	
}
var nim_program_result = 0;
var global_raise_hook_18618 = [null];
var local_raise_hook_18623 = [null];
var out_of_mem_hook_18626 = [null];
  if (!Math.trunc) {
    Math.trunc = function(v) {
      v = +v;
      if (!isFinite(v)) return v;

      return (v - v % 1)   ||   (v < 0 ? -0 : v === 0 ? v : 0);
    };
  }

function new_seq_23336(len_23339) {
	var result_23341 = null;

		result_23341 = new Array(len_23339); for (var i=0;i<len_23339;++i) {result_23341[i]=null;}
	return result_23341;

}

function add_45014(a_45016, b_45017) {
	var result_45018 = 0;

	BeforeRet: do {
		result_45018 = (a_45016 + b_45017);
		break BeforeRet;
	} while (false);

	return result_45018;

}

function on_load_45032(event_45034) {
		rawEcho(cstrToNimstr((add_45014(5, 5))+""));

	
}
window.onload = on_load_45032;