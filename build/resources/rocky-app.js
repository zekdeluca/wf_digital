/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var rocky = __webpack_require__(2);

	rocky.on('draw', function(event) {
	  // Get the CanvasRenderingContext2D object
	  var ctx = event.context;

	  // Clear the screen
	  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

	  // Determine the width and height of the display
	  var w = ctx.canvas.unobstructedWidth;
	  var h = ctx.canvas.unobstructedHeight;

	  // Current date/time
	  var d = new Date();

	  // Set the text color
	  ctx.fillStyle = 'white';

	  // Center align the text
	  ctx.textAlign = 'center';

	  // Display the time, in the middle of the screen
	  ctx.fillText(d.toLocaleTimeString(), w / 2, h / 2, w);
	});

	rocky.on('minutechange', function(event) {
	  // Display a message in the system logs
	  console.log("Another minute with your Pebble!");

	  // Request the screen to be redrawn on next pass
	  rocky.requestDraw();
	});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = _rocky;


/***/ })
/******/ ]);