((typeof self !== 'undefined' ? self : this)["webpackJsonphello_week"] = (typeof self !== 'undefined' ? self : this)["webpackJsonphello_week"] || []).push([[1],{

/***/ "46ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWeek", function() { return HelloWeek$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "el", function() { return h; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4de4");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7db0");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4160");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("caad");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c975");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("d81d");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a9e3");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cca6");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("b64b");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ac1f");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("25f0");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("2532");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("1276");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("2909");
/* harmony import */ var _Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("d4ec");
/* harmony import */ var _Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("bee2");
/* harmony import */ var _Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("53ca");























var cssClasses = {
  CALENDAR: 'hello-week',
  DAY: 'day',
  MONTH: 'month',
  NAVIGATION: 'navigation',
  NEXT: 'next',
  PERIOD: 'period',
  PREV: 'prev',
  RTL: 'rtl',
  WEEK: 'week'
};
var cssStates = {
  IS_BEGIN_RANGE: 'is-begin-range',
  IS_DISABLED: 'is-disabled',
  IS_END_RANGE: 'is-end-range',
  IS_HIGHLIGHT: 'is-highlight',
  IS_SELECTED: 'is-selected',
  IS_RANGE: 'is-range',
  IS_TODAY: 'is-today',
  IS_WEEKEND: 'is-weekend'
};
var daysWeek = {
  FRIDAY: 5,
  MONDAY: 1,
  SATURDAY: 6,
  SUNDAY: 0,
  THURSDAY: 4,
  TUESDAY: 2,
  WEDNESDAY: 3
};
var margins = {
  RIGHT: 'margin-right',
  LEFT: 'margin-left'
};
var defaults = {
  selector: '.hello-week',
  lang: 'en-GB',
  langFolder: '../langs/',
  format: 'DD/MM/YYYY',
  monthShort: false,
  weekShort: true,
  defaultDate: null,
  minDate: null,
  maxDate: null,
  disableDaysOfWeek: null,
  timezoneOffset: new Date().getTimezoneOffset(),
  disableDates: null,
  weekStart: 0,
  daysSelected: null,
  daysHighlight: null,
  multiplePick: false,
  disablePastDays: false,
  todayHighlight: true,
  range: false,
  locked: false,
  rtl: false,
  nav: ['◀', '▶'],
  onLoad: function onLoad() {
    /** callback */
  },
  onClear: function onClear() {
    /** callback */
  },
  onNavigation: function onNavigation() {
    /** callback */
  },
  onSelect: function onSelect() {
    /** callback */
  },
  beforeCreateDay: function beforeCreateDay(data) {
    return data;
  }
};

function isDef(v) {
  return v !== undefined && v !== null;
}

function isObject(obj) {
  return obj !== null && Object(_Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_22__[/* default */ "a"])(obj) === 'object';
}

function isArray(obj) {
  return obj !== null && Array.isArray(obj);
}

function isString(val) {
  return typeof val === 'string';
}

function render(vnode, parentDom) {
  // Strings just convert to #text Nodes:
  if (vnode.split) {
    return document.createTextNode(vnode);
  } // create a DOM element with the nodeName of our VDOM element:


  var node = document.createElement(vnode.nodeName); // copy attributes onto the new node:

  var attributes = vnode.attributes || {};
  Object.keys(attributes).forEach(function (key) {
    if (key === 'class') {
      if (isString(attributes[key])) {
        node.className = attributes[key];
      } else if (isArray(attributes[key])) {
        attributes[key].forEach(function (value) {
          addClass(node, value);
        });
      }
    } else if (key === 'style') {
      if (isString(attributes[key])) {
        node.style = attributes[key];
      } else if (isObject(attributes[key])) {
        Object.keys(attributes[key]).forEach(function (props) {
          node.style[props] = attributes[key][props];
        });
      }
    } else if (key === 'dataset') {
      Object.keys(attributes[key]).forEach(function (props) {
        node.setAttribute('data-' + props, attributes[key][props]);
      });
    } else {
      node.setAttribute(key, attributes[key]);
    }
  }); // render (build) and then append child nodes:

  (vnode.children || []).forEach(function (c) {
    return node.appendChild(render(c));
  });
  return parentDom ? parentDom.appendChild(node) : node;
}

function h(nodeName, attributes) {
  var vnode = {
    nodeName: nodeName
  };

  if (attributes) {
    vnode.attributes = attributes;
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (args.length) {
    var _ref;

    vnode.children = (_ref = []).concat.apply(_ref, args);
  }

  return vnode;
}

function addClass(el, className) {
  return el.classList.add(className);
}

function removeClass(el, className) {
  return el.classList.remove(className);
}

function toggleClass(el, className) {
  return el.classList.toggle(className);
}

function existElement(className, where) {
  return isDef(where) ? where.querySelector(".".concat(className)) : document.querySelector(".".concat(className));
}

function extend(to, from) {
  return Object.assign(to, from);
}

function getIndexForEventTarget(daysOfMonth, target) {
  return Array.prototype.slice.call(daysOfMonth).indexOf(target) + 1;
}

function toDate(date, timezoneOffset) {
  var dt = setTimeZone(date, timezoneOffset);
  return defaultFormat(dt.getDate(), dt.getMonth(), dt.getFullYear());
}

function defaultFormat(day, month, year) {
  return "".concat(year, "-").concat(('0' + (month + 1)).slice(-2), "-").concat(('0' + day).slice(-2));
}

function formatDate(date, langs, formats, timezoneOffset) {
  var dt = setTimeZone(date, timezoneOffset);
  formats = formats ? formats : defaults.format;
  formats = formats.replace('dd', dt.getDate().toString());
  formats = formats.replace('DD', (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate()).toString());
  formats = formats.replace('mm', (dt.getMonth() + 1).toString());
  formats = formats.replace('MMM', langs.months[dt.getMonth()]);
  formats = formats.replace('MM', (dt.getMonth() + 1 > 9 ? dt.getMonth() + 1 : '0' + (dt.getMonth() + 1)).toString());
  formats = formats.replace('mmm', langs.monthsShort[dt.getMonth()]);
  formats = formats.replace('yyyy', dt.getFullYear().toString());
  formats = formats.replace('YYYY', dt.getFullYear().toString());
  formats = formats.replace('YY', dt.getFullYear().toString().substring(2));
  formats = formats.replace('yy', dt.getFullYear().toString().substring(2));
  return formats;
}

function setTimeZone(date, timezoneOffset) {
  var dt = isDef(date) ? new Date(date) : new Date();
  timezoneOffset = timezoneOffset ? timezoneOffset : dt.getTimezoneOffset();
  dt.setTime(dt.getTime() + timezoneOffset * 60 * 1000);
  return dt;
}

function formatDateToCompare(date) {
  var dt = new Date(date);
  return Number('' + dt.getFullYear() + (dt.getMonth() + 1) + (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate()).toString());
}

function isAfter(input, date) {
  return formatDateToCompare(input) > formatDateToCompare(date);
}

function isBefore(input, date) {
  return formatDateToCompare(input) < formatDateToCompare(date);
}

function isBetween(to, from, date) {
  return isAfter(date, to) && isBefore(date, from);
}

function isSame(input, date) {
  return formatDateToCompare(input) === formatDateToCompare(date);
}

function isSameOrAfter(input, date) {
  return isSame(input, date) || isAfter(input, date);
}

function isSameOrBefore(input, date) {
  return isSame(input, date) || isBefore(input, date);
}

function template(options, args) {
  var self = {};

  if (!isString(options.selector) && !isDef(options.selector)) {
    throw new Error('You need to specify a selector!');
  }

  self.selector = options.selector ? document.querySelector(options.selector) : options.selector;

  if (!isDef(self.selector)) {
    self.selector = render(h('div', {
      class: [options.selector, cssClasses.CALENDAR]
    }));
  } else {
    if (options.selector !== cssClasses.CALENDAR) {
      addClass(self.selector, cssClasses.CALENDAR);
    }
  }

  self.calendar = {};
  self.calendar.navigation = existElement(cssClasses.NAVIGATION, self.selector);

  if (!isDef(self.calendar.navigation)) {
    self.calendar.navigation = render(h('div', {
      class: cssClasses.NAVIGATION
    }), self.selector);
  }

  if (isDef(options.nav[0])) {
    self.calendar.prevMonth = render(h('div', {
      class: cssClasses.PREV
    }, options.nav[0]), self.calendar.navigation);
    self.calendar.prevMonth.addEventListener('click', function () {
      return args.prev.cb();
    });
  }

  self.calendar.period = existElement(cssClasses.PERIOD, self.selector);

  if (!isDef(self.calendar.period)) {
    self.calendar.period = render(h('div', {
      class: cssClasses.PERIOD
    }), self.calendar.navigation);
  }

  if (isDef(options.nav[1])) {
    self.calendar.nextMonth = render(h('div', {
      class: cssClasses.NEXT
    }, options.nav[1]), self.calendar.navigation);
    self.calendar.nextMonth.addEventListener('click', function () {
      return args.next.cb();
    });
  }

  self.calendar.week = existElement(cssClasses.WEEK, self.selector);

  if (!isDef(self.calendar.week)) {
    self.calendar.week = render(h('div', {
      class: cssClasses.WEEK
    }), self.selector);
  }

  self.calendar.month = existElement(cssClasses.MONTH, self.selector);

  if (!isDef(self.calendar.month)) {
    self.calendar.month = render(h('div', {
      class: cssClasses.MONTH
    }), self.selector);
  }

  if (options.rtl) {
    addClass(self.calendar.week, cssClasses.RTL);
    addClass(self.calendar.month, cssClasses.RTL);
  }

  return self;
}

function getIntervalOfDates(startDate, endDate, langs) {
  var dates = [];
  var currentDate = startDate;

  var addDays = function addDays(days) {
    var dt = new Date(this.valueOf());
    dt.setDate(dt.getDate() + days);
    return dt.getTime();
  };

  while (currentDate <= endDate) {
    dates.push(formatDate(currentDate, langs));
    currentDate = addDays.call(currentDate, 1);
  }

  return dates;
}

function date(dt) {
  if (isDef(dt)) {
    return new Date(dt);
  }

  return new Date();
}
/**
 * Set min date.
 * @param {string} date
 */


function _setMinDate(dt) {
  var min = date(dt);
  return toDate(min.setDate(min.getDate() - 1));
}
/**
 * Set max date.
 * @param {string} date
 */


function _setMaxDate(dt) {
  var max = date(dt);
  return toDate(max.setDate(max.getDate() + 1));
}

var HelloWeek =
/*#__PURE__*/
function () {
  function HelloWeek(options) {
    var _this = this;

    Object(_Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_20__[/* default */ "a"])(this, HelloWeek);

    this.todayDate = toDate(new Date());
    this.date = new Date();
    this.intervalRange = {};
    this.daysSelected = [];
    this.options = extend(extend({}, defaults), options);
    this.defaultsOptions = extend(extend({}, defaults), options);

    var _template = template(this.options, {
      prev: {
        cb: function cb() {
          return _this.prev();
        }
      },
      next: {
        cb: function cb() {
          return _this.next();
        }
      }
    }),
        calendar = _template.calendar,
        selector = _template.selector;

    this.selector = selector;
    this.calendar = calendar;
    this.isRTL = this.options.rtl ? margins.RIGHT : margins.LEFT;
    __webpack_require__("c23e")(this.options.langFolder + this.options.lang + ".js").then(function (data) {
      return data.default;
    }).then(function (lang) {
      _this.langs = lang;

      _this.init();
    });
  }

  Object(_Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])(HelloWeek, [{
    key: "destroy",
    value: function destroy() {
      this.removeStatesClass();
      this.selector.remove();
    }
    /**
     * Change the month to the previous, also you can send a callback function like a parameter.
     */

  }, {
    key: "prev",
    value: function prev(callback) {
      var prevMonth = this.date.getMonth() - 1;
      this.date.setMonth(prevMonth);
      this.update();
      this.options.onNavigation();

      if (callback) {
        callback();
      }
    }
    /**
     * Change the month to the next, also you can send a callback function like a parameter.
     */

  }, {
    key: "next",
    value: function next(callback) {
      var nextMonth = this.date.getMonth() + 1;
      this.date.setMonth(nextMonth);
      this.update();
      this.options.onNavigation();

      if (callback) {
        callback();
      }
    }
    /**
     * Update and redraws the events for the current month.
     */

  }, {
    key: "update",
    value: function update() {
      this.clearCalendar();
      this.mounted();
    }
    /**
     * Reset calendar
     */

  }, {
    key: "reset",
    value: function reset(options, callback) {
      this.clearCalendar();
      this.options = extend(options, this.defaultsOptions);
      this.init(callback);
    }
    /**
     * Move the calendar to arbitrary day.
     */

  }, {
    key: "goToDate",
    value: function goToDate() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.todayDate;
      this.date = new Date(date);
      this.date.setDate(1);
      this.update();
    }
    /**
     * Returns the selected days with the format specified.
     */

  }, {
    key: "getDaySelected",
    value: function getDaySelected() {
      var _this2 = this;

      return this.daysSelected.sort(function (a, b) {
        return formatDateToCompare(a) - formatDateToCompare(b);
      }).map(function (day) {
        return formatDate(day, _this2.langs, _this2.options.format);
      });
    }
    /**
     * Gets last day selected.
     */

  }, {
    key: "getLastDaySelected",
    value: function getLastDaySelected() {
      return this.lastSelectedDay;
    }
    /**
     * Returns the highlight dates.
     */

  }, {
    key: "getDaysHighlight",
    value: function getDaysHighlight() {
      return this.daysHighlight;
    }
    /**
     * Returns the current month selected.
     */

  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.date.getMonth() + 1;
    }
    /**
     * Returns the current year selected.
     */

  }, {
    key: "getYear",
    value: function getYear() {
      return this.date.getFullYear();
    }
    /**
     * Set highlight dates,
     */

  }, {
    key: "setDaysHighlight",
    value: function setDaysHighlight(daysHighlight) {
      this.daysHighlight = [].concat(Object(_Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(this.daysHighlight), Object(_Users_pedroladeira_Sites_general_vue_hello_week_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_19__[/* default */ "a"])(daysHighlight));
    }
    /**
     * Sets calendar with multiple pick.
     */

  }, {
    key: "setMultiplePick",
    value: function setMultiplePick(state) {
      this.options.multiplePick = state;
    }
    /**
     * Sets calendar with disable past days.
     */

  }, {
    key: "setDisablePastDays",
    value: function setDisablePastDays(state) {
      this.options.disablePastDays = state;
    }
    /**
     * Sets calendar with today highlight.
     */

  }, {
    key: "setTodayHighlight",
    value: function setTodayHighlight(state) {
      this.options.todayHighlight = state;
    }
    /**
     * Sets calendar range.
     */

  }, {
    key: "setRange",
    value: function setRange(value) {
      if (isArray(this.options.range)) {
        this.intervalRange.begin = this.options.range[0];
        this.intervalRange.end = this.options.range[1];
      } else {
        this.options.range = value;
      }
    }
    /**
     * Sets calendar locked.
     */

  }, {
    key: "setLocked",
    value: function setLocked(state) {
      this.options.locked = state;
    }
    /**
     * Set min date.
     */

  }, {
    key: "setMinDate",
    value: function setMinDate(date) {
      this.options.minDate = _setMinDate(date);
    }
    /**
     * Set max date.
     */

  }, {
    key: "setMaxDate",
    value: function setMaxDate(date) {
      this.options.maxDate = _setMaxDate(date);
    }
  }, {
    key: "init",
    value: function init(callback) {
      this.daysHighlight = this.options.daysHighlight ? this.options.daysHighlight : [];
      this.daysSelected = this.options.daysSelected ? this.options.daysSelected : [];

      if (this.daysSelected.length && !this.options.multiplePick) {
        throw new Error("There are ".concat(this.daysSelected.length, " dates selected, but the multiplePick option is FALSE!"));
      }

      if (this.options.defaultDate) {
        this.date = setTimeZone(this.options.defaultDate, this.options.timezoneOffset);
        this.defaultDate = setTimeZone(this.options.defaultDate, this.options.timezoneOffset);
        this.defaultDate.setDate(this.defaultDate.getDate());
      }

      this.date.setDate(1);

      if (this.options.minDate) {
        this.setMinDate(this.options.minDate);
      }

      if (this.options.maxDate) {
        this.setMaxDate(this.options.maxDate);
      }

      if (this.options.range) {
        this.setRange(this.options.range);
      }

      this.mounted();
      this.options.onLoad();

      if (callback) {
        callback();
      }
    }
  }, {
    key: "selectDay",
    value: function selectDay(callback) {
      this.daysOfMonth = this.selector.querySelectorAll('.' + cssClasses.MONTH + ' .' + cssClasses.DAY);

      for (var _i = 0, _Object$keys = Object.keys(this.daysOfMonth); _i < _Object$keys.length; _i++) {
        var i = _Object$keys[_i];
        this.handleClickInteraction(this.daysOfMonth[i], callback);

        if (this.options.range) {
          this.handleMouseInteraction(this.daysOfMonth[i]);
        }
      }
    }
  }, {
    key: "handleClickInteraction",
    value: function handleClickInteraction(target, callback) {
      var _this3 = this;

      target.addEventListener('click', function (event) {
        var index = getIndexForEventTarget(_this3.daysOfMonth, event.target);

        if (_this3.days[index].locked) {
          return;
        }

        _this3.lastSelectedDay = _this3.days[index].date;

        if (!_this3.options.range) {
          if (_this3.options.multiplePick) {
            if (_this3.days[index].date) {
              _this3.daysSelected = _this3.daysSelected.filter(function (day) {
                return formatDateToCompare(day) !== formatDateToCompare(_this3.lastSelectedDay);
              });
            }

            if (!_this3.days[index].isSelected) {
              _this3.daysSelected.push(_this3.lastSelectedDay);
            }
          } else {
            if (!_this3.days[index].locked) {
              _this3.removeStatesClass();
            }

            _this3.daysSelected = [];

            _this3.daysSelected.push(_this3.lastSelectedDay);
          }
        }

        toggleClass(event.target, cssStates.IS_SELECTED);
        _this3.days[index].isSelected = !_this3.days[index].isSelected;

        if (_this3.options.range) {
          if (_this3.intervalRange.begin && _this3.intervalRange.end) {
            _this3.intervalRange = {};

            _this3.removeStatesClass();
          }

          if (_this3.intervalRange.begin && !_this3.intervalRange.end) {
            _this3.intervalRange.end = _this3.days[index].date;
            _this3.daysSelected = getIntervalOfDates(_this3.intervalRange.begin, _this3.intervalRange.end, _this3.langs);
            addClass(event.target, cssStates.IS_END_RANGE);

            if (_this3.intervalRange.begin > _this3.intervalRange.end) {
              _this3.intervalRange = {};

              _this3.removeStatesClass();
            }
          }

          if (!_this3.intervalRange.begin) {
            _this3.intervalRange.begin = _this3.days[index].date;
          }

          addClass(event.target, cssStates.IS_SELECTED);
        }

        _this3.options.onSelect();

        if (callback) {
          callback();
        }
      });
    }
  }, {
    key: "handleMouseInteraction",
    value: function handleMouseInteraction(target) {
      var _this4 = this;

      target.addEventListener('mouseover', function (event) {
        var index = getIndexForEventTarget(_this4.daysOfMonth, event.target);

        if (!_this4.intervalRange.begin || _this4.intervalRange.begin && _this4.intervalRange.end) {
          return;
        }

        _this4.removeStatesClass();

        for (var i = 1; i <= Object.keys(_this4.days).length; i++) {
          _this4.days[i].isSelected = false;

          if (isSameOrAfter(_this4.days[index].date, _this4.intervalRange.begin)) {
            if (isSameOrAfter(_this4.days[i].date, _this4.intervalRange.begin) && isSameOrBefore(_this4.days[i].date, _this4.days[index].date)) {
              addClass(_this4.days[i].element, cssStates.IS_SELECTED);
              addClass(_this4.days[i].element, cssStates.IS_RANGE);

              if (isSame(_this4.days[i].date, _this4.intervalRange.begin)) {
                addClass(_this4.days[i].element, cssStates.IS_BEGIN_RANGE);
              }
            }
          }
        }
      });
    }
  }, {
    key: "creatWeek",
    value: function creatWeek(dayShort) {
      render(h('span', {
        class: cssClasses.DAY
      }, dayShort), this.calendar.week);
    }
  }, {
    key: "createMonth",
    value: function createMonth() {
      var currentMonth = this.date.getMonth();

      while (this.date.getMonth() === currentMonth) {
        this.createDay(this.date);
        this.date.setDate(this.date.getDate() + 1);
      }

      this.date.setMonth(this.date.getMonth() - 1);
      this.selectDay();
    }
  }, {
    key: "createDay",
    value: function createDay(date) {
      var num = date.getDate();
      var day = date.getDay();
      var dayOptions = {
        day: num,
        date: toDate(date),
        isWeekend: false,
        locked: false,
        isToday: false,
        isRange: false,
        isSelected: false,
        isHighlight: false,
        attributes: {
          class: [cssClasses.DAY],
          style: {}
        },
        node: undefined,
        element: undefined
      };
      this.days = this.days || {};

      if (day === daysWeek.SUNDAY || day === daysWeek.SATURDAY) {
        dayOptions.attributes.class.push(cssStates.IS_WEEKEND);
        dayOptions.isWeekend = true;
      }

      if (this.options.locked || this.options.disableDaysOfWeek && this.options.disableDaysOfWeek.includes(day) || this.options.disablePastDays && isSameOrBefore(this.date, this.defaultDate) || this.options.minDate && isSameOrAfter(this.options.minDate, dayOptions.date) || this.options.maxDate && isSameOrBefore(this.options.maxDate, dayOptions.date)) {
        dayOptions.attributes.class.push(cssStates.IS_DISABLED);
        dayOptions.locked = true;
      }

      if (this.options.disableDates) {
        this.setDaysDisable(dayOptions);
      }

      if (this.options.todayHighlight && isSame(this.todayDate, dayOptions.date)) {
        dayOptions.attributes.class.push(cssStates.IS_TODAY);
        dayOptions.isToday = true;
      }

      this.daysSelected.find(function (daySelected) {
        if (isSame(daySelected, dayOptions.date)) {
          dayOptions.attributes.class.push(cssStates.IS_SELECTED);
          dayOptions.isSelected = true;
        }
      });

      if (isBetween(this.intervalRange.begin, this.intervalRange.end, dayOptions.date)) {
        dayOptions.attributes.class.push(cssStates.IS_RANGE);
        dayOptions.isRange = true;
      }

      if (isSame(dayOptions.date, this.intervalRange.begin)) {
        dayOptions.attributes.class.push(cssStates.IS_BEGIN_RANGE);
      }

      if (isSame(dayOptions.date, this.intervalRange.end)) {
        dayOptions.attributes.class.push(cssStates.IS_END_RANGE);
      }

      if (this.daysHighlight) {
        this.setDayHighlight(dayOptions);
      }

      if (dayOptions.day === 1) {
        if (this.options.weekStart === daysWeek.SUNDAY) {
          dayOptions.attributes.style[this.isRTL] = day * (100 / Object.keys(daysWeek).length) + '%';
        } else {
          if (day === daysWeek.SUNDAY) {
            dayOptions.attributes.style[this.isRTL] = (Object.keys(daysWeek).length - this.options.weekStart) * (100 / Object.keys(daysWeek).length) + '%';
          } else {
            dayOptions.attributes.style[this.isRTL] = (day - 1) * (100 / Object.keys(daysWeek).length) + '%';
          }
        }
      }

      dayOptions.node = h('div', dayOptions.attributes, dayOptions.day.toString());
      dayOptions = this.options.beforeCreateDay(dayOptions);
      dayOptions.element = render(dayOptions.node, this.calendar.month);
      this.days[dayOptions.day] = dayOptions;
    }
  }, {
    key: "setDaysDisable",
    value: function setDaysDisable(dayOptions) {
      if (isArray(this.options.disableDates[0])) {
        this.options.disableDates.map(function (date) {
          if (isSameOrAfter(dayOptions.date, date[0]) && isSameOrBefore(dayOptions.date, date[1])) {
            dayOptions.attributes.class.push(cssStates.IS_DISABLED);
            dayOptions.locked = true;
          }
        });
      } else {
        this.options.disableDates.map(function (date) {
          if (isSame(dayOptions.date, date)) {
            dayOptions.attributes.class.push(cssStates.IS_DISABLED);
            dayOptions.locked = true;
          }
        });
      }
    }
  }, {
    key: "setDayHighlight",
    value: function setDayHighlight(dayOptions) {
      var _this5 = this;

      var _loop = function _loop(day) {
        if (_this5.daysHighlight[day].days[0] instanceof Array) {
          _this5.daysHighlight[day].days.map(function (date) {
            if (isSameOrAfter(dayOptions.date, date[0]) && isSameOrBefore(dayOptions.date, date[1])) {
              _this5.setStyleDayHighlight(day, dayOptions);
            }
          });
        } else {
          _this5.daysHighlight[day].days.map(function (date) {
            if (isSame(dayOptions.date, date)) {
              _this5.setStyleDayHighlight(day, dayOptions);
            }
          });
        }
      };

      for (var day in this.daysHighlight) {
        _loop(day);
      }
    }
  }, {
    key: "setStyleDayHighlight",
    value: function setStyleDayHighlight(day, dayOptions) {
      var attributes = this.daysHighlight[day].attributes;

      for (var key in attributes) {
        if (dayOptions.attributes[key] && attributes[key]) {
          dayOptions.attributes[key] = extend(dayOptions.attributes[key], attributes[key]);
        } else if (attributes[key]) {
          dayOptions.attributes[key] = attributes[key];
        }
      }

      dayOptions.attributes.class.push(cssStates.IS_HIGHLIGHT);
      dayOptions.isHighlight = true;
    }
  }, {
    key: "monthsAsString",
    value: function monthsAsString(monthIndex) {
      return this.options.monthShort ? this.langs.monthsShort[monthIndex] : this.langs.months[monthIndex];
    }
  }, {
    key: "weekAsString",
    value: function weekAsString(weekIndex) {
      return this.options.weekShort ? this.langs.daysShort[weekIndex] : this.langs.days[weekIndex];
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var listDays = [];

      if (this.calendar.period) {
        this.calendar.period.innerHTML = this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear();
      }

      this.calendar.week.textContent = '';

      for (var i = this.options.weekStart; i < this.langs.daysShort.length; i++) {
        listDays.push(i);
      }

      for (var _i2 = 0; _i2 < this.options.weekStart; _i2++) {
        listDays.push(_i2);
      }

      for (var _i3 = 0, _listDays = listDays; _i3 < _listDays.length; _i3++) {
        var day = _listDays[_i3];
        this.creatWeek(this.weekAsString(day));
      }

      this.createMonth();
    }
  }, {
    key: "clearCalendar",
    value: function clearCalendar() {
      this.calendar.month.textContent = '';
    }
  }, {
    key: "removeStatesClass",
    value: function removeStatesClass() {
      for (var _i4 = 0, _Object$keys2 = Object.keys(this.daysOfMonth); _i4 < _Object$keys2.length; _i4++) {
        var i = _Object$keys2[_i4];
        removeClass(this.daysOfMonth[i], cssStates.IS_SELECTED);
        removeClass(this.daysOfMonth[i], cssStates.IS_RANGE);
        removeClass(this.daysOfMonth[i], cssStates.IS_BEGIN_RANGE);
        removeClass(this.daysOfMonth[i], cssStates.IS_END_RANGE);
        this.days[+i + 1].isSelected = false;
      }
    }
  }]);

  return HelloWeek;
}();

var HelloWeek$1 = HelloWeek;
window.HelloWeek = HelloWeek$1;
/* harmony default export */ __webpack_exports__["default"] = (HelloWeek);


/***/ })

}]);
//# sourceMappingURL=hello-week.common.1.js.map