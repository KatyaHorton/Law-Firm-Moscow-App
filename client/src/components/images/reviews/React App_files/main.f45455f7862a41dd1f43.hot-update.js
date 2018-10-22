webpackHotUpdate("main",{

/***/ "./src/Calendar.js":
/*!*************************!*\
  !*** ./src/Calendar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/markhorton/Desktop/calendar_challenge/src/Calendar.js";

var events = [{
  start: 30,
  end: 120
}, {
  start: 300,
  end: 330
}, {
  start: 290,
  end: 330
}];

var Calendar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Calendar, _Component);

  function Calendar() {
    Object(_Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calendar);

    return Object(_Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Calendar).apply(this, arguments));
  }

  Object(_Users_markhorton_Desktop_calendar_challenge_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calendar, [{
    key: "renderDay",
    //function to render the events of the day
    value: function renderDay(e) {
      var _this = this;

      return e.map(function (event, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "event-container",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "event-start",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, "Starts at: ", _this.formatTime(event.start)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "event-finish",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, "Finishes at: ", _this.formatTime(event.end)));
      });
    } //function to adjust the time format

  }, {
    key: "formatTime",
    value: function formatTime(n) {
      var getHours = function getHours(n) {
        return n / 60 + 9;
      };

      var getMinutes = function getMinutes(n, h) {
        return n - h * 60;
      };

      var hoursF = function hoursF(hours) {
        return hours - 9;
      };

      var minutesZero = function minutesZero(m) {
        return (m < 10 ? '0' : '') + m;
      };

      if (n >= 0 && n <= 540) {
        var hours = getHours(n).toFixed(0);
        var minutesCalculated = getMinutes(n, hoursF(hours));
        var minutes = minutesZero(minutesCalculated);
        var time = "".concat(hours, ":").concat(minutes);
      }

      return time;
    } //function to get hours

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.formatTime(541);
    }
  }, {
    key: "render",
    value: function render() {
      {
        console.log('Data: ', this.renderDay(events));
      }
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "calendar-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.renderDay(events));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=main.f45455f7862a41dd1f43.hot-update.js.map