/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var input1 = document.createElement('input');
var input2 = document.createElement('input');
var button = document.createElement('button');
button.textContent = 'Calculate';
var error1 = document.createElement('div');
error1.classList.add('error-message');
error1.textContent = "This is not a number";
var error2 = document.createElement('div');
error2.classList.add('error-message');
error2.textContent = "This is not a number";
input1.style.display = input2.style.display = button.style.display = 'block';
input1 = document.body.appendChild(input1);
input2 = document.body.appendChild(input2);
button = document.body.appendChild(button);
var res = document.createElement('div');
res.id = 'result';
button.addEventListener('click', function (e) {
  if (!isDec(input1.value)) {
    document.body.insertBefore(error1, input2);
  } else {
    error.remove();
  }

  if (!isDec(input2.value)) {
    document.body.insertBefore(error2, button);
  } else {
    error.remove();
  }

  if (isDec(input1.value) && isDec(input2.value)) {
    res.textContent = +input1.value + +input2.value;
    if (res.parentNode != document.body) document.body.appendChild(res);
  }
});

function isDec(num) {
  if (isFinite(num) && /^\d*\.?\d*$/.test(num.toString())) return true;
  return false;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImlucHV0MSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlucHV0MiIsImJ1dHRvbiIsInRleHRDb250ZW50IiwiZXJyb3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXMiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNEZWMiLCJ2YWx1ZSIsImluc2VydEJlZm9yZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJudW0iLCJpc0Zpbml0ZSIsInRlc3QiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFFQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBRUEsSUFBSUUsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRSxNQUFNLENBQUNDLFdBQVAsR0FBcUIsV0FBckI7QUFHQSxJQUFJQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0VJLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsZUFBcEI7QUFDQUYsS0FBSyxDQUFDRCxXQUFOLEdBQW9CLHNCQUFwQjtBQUVGTCxNQUFNLENBQUNTLEtBQVAsQ0FBYUMsT0FBYixHQUF1QlAsTUFBTSxDQUFDTSxLQUFQLENBQWFDLE9BQWIsR0FBdUJOLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxPQUFiLEdBQXVCLE9BQXJFO0FBRUFWLE1BQU0sR0FBR0MsUUFBUSxDQUFDVSxJQUFULENBQWNDLFdBQWQsQ0FBMEJaLE1BQTFCLENBQVQ7QUFDQUcsTUFBTSxHQUFHRixRQUFRLENBQUNVLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlQsTUFBMUIsQ0FBVDtBQUNBQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxXQUFkLENBQTBCUixNQUExQixDQUFUO0FBRUEsSUFBSVMsR0FBRyxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBVyxHQUFHLENBQUNDLEVBQUosR0FBUyxRQUFUO0FBRUFWLE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBRTdDLE1BQUcsQ0FBQ0MsS0FBSyxDQUFDakIsTUFBTSxDQUFDa0IsS0FBUixDQUFULEVBQXdCO0FBQ3hCakIsWUFBUSxDQUFDVSxJQUFULENBQWNRLFlBQWQsQ0FBMkJiLEtBQTNCLEVBQWtDSCxNQUFsQztBQUNDLEdBRkQsTUFFTztBQUFFRyxTQUFLLENBQUNjLE1BQU47QUFBZ0I7O0FBRXpCLE1BQUcsQ0FBQ0gsS0FBSyxDQUFDZCxNQUFNLENBQUNlLEtBQVIsQ0FBVCxFQUF3QjtBQUN4QmpCLFlBQVEsQ0FBQ1UsSUFBVCxDQUFjUSxZQUFkLENBQTJCYixLQUEzQixFQUFrQ0YsTUFBbEM7QUFDQyxHQUZELE1BRU87QUFBRUUsU0FBSyxDQUFDYyxNQUFOO0FBQWdCOztBQUV6QixNQUFHSCxLQUFLLENBQUNqQixNQUFNLENBQUNrQixLQUFSLENBQUwsSUFBdUJELEtBQUssQ0FBQ2QsTUFBTSxDQUFDZSxLQUFSLENBQS9CLEVBQThDO0FBQzlDTCxPQUFHLENBQUNSLFdBQUosR0FBa0IsQ0FBQ0wsTUFBTSxDQUFDa0IsS0FBUixHQUFnQixDQUFDZixNQUFNLENBQUNlLEtBQTFDO0FBQ0EsUUFBR0wsR0FBRyxDQUFDUSxVQUFKLElBQWtCcEIsUUFBUSxDQUFDVSxJQUE5QixFQUFvQ1YsUUFBUSxDQUFDVSxJQUFULENBQWNDLFdBQWQsQ0FBMEJDLEdBQTFCO0FBQy9CO0FBRUosQ0FmRDs7QUFrQkEsU0FBU0ksS0FBVCxDQUFlSyxHQUFmLEVBQW9CO0FBQ2xCLE1BQUdDLFFBQVEsQ0FBQ0QsR0FBRCxDQUFSLElBQWlCLGNBQWNFLElBQWQsQ0FBbUJGLEdBQUcsQ0FBQ0csUUFBSixFQUFuQixDQUFwQixFQUF3RCxPQUFPLElBQVA7QUFDeEQsU0FBTyxLQUFQO0FBQ0QsQyIsImZpbGUiOiJtYWluLjY1NzEwNWJkMjVmOGI2M2NjMDBhLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibGV0IGlucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG5sZXQgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHJcbmxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuYnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbGN1bGF0ZSc7XHJcblxyXG5cclxubGV0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xyXG4gIGVycm9yLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIG5vdCBhIG51bWJlclwiO1xyXG5cclxuaW5wdXQxLnN0eWxlLmRpc3BsYXkgPSBpbnB1dDIuc3R5bGUuZGlzcGxheSA9IGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbmlucHV0MSA9IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcclxuaW5wdXQyID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dDIpO1xyXG5idXR0b24gPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG5sZXQgcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnJlcy5pZCA9ICdyZXN1bHQnO1xyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cclxuaWYoIWlzRGVjKGlucHV0MS52YWx1ZSkpe1xyXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlcnJvciwgaW5wdXQyKTtcclxufSBlbHNlIHsgZXJyb3IucmVtb3ZlKCkgfVxyXG5cclxuaWYoIWlzRGVjKGlucHV0Mi52YWx1ZSkpe1xyXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlcnJvciwgYnV0dG9uKTtcclxufSBlbHNlIHsgZXJyb3IucmVtb3ZlKCkgfVxyXG5cclxuaWYoaXNEZWMoaW5wdXQxLnZhbHVlKSAmJiBpc0RlYyhpbnB1dDIudmFsdWUpKXtcclxucmVzLnRleHRDb250ZW50ID0gK2lucHV0MS52YWx1ZSArICtpbnB1dDIudmFsdWU7XHJcbmlmKHJlcy5wYXJlbnROb2RlICE9IGRvY3VtZW50LmJvZHkpIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVzKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gaXNEZWMobnVtKSB7XHJcbiAgaWYoaXNGaW5pdGUobnVtKSAmJiAvXlxcZCpcXC4/XFxkKiQvLnRlc3QobnVtLnRvU3RyaW5nKCkpKSByZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9