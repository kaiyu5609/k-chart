
/**
 * kchart v0.0.1
 * (c) 2020 kaiyu5609
 * @license MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('konva'), require('jquery'), require('d3'), require('moment')) :
  typeof define === 'function' && define.amd ? define(['konva', 'jquery', 'd3', 'moment'], factory) :
  (global = global || self, global.kchart = factory(global.Konva, global.jQuery, global.d3, global.moment));
}(this, function (Konva$1, $, d3, moment) { 'use strict';

  Konva$1 = Konva$1 && Konva$1.hasOwnProperty('default') ? Konva$1['default'] : Konva$1;
  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  d3 = d3 && d3.hasOwnProperty('default') ? d3['default'] : d3;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  // Copyright Joyent, Inc. and other Node contributors.

  var R = typeof Reflect === 'object' ? Reflect : null;
  var ReflectApply = R && typeof R.apply === 'function'
    ? R.apply
    : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };

  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === 'function') {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target)
        .concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys(target) {
      return Object.getOwnPropertyNames(target);
    };
  }

  function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
  }

  var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
  };

  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  var events = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  var defaultMaxListeners = 10;

  function checkListener(listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }

  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
      }
      defaultMaxListeners = arg;
    }
  });

  EventEmitter.init = function() {

    if (this._events === undefined ||
        this._events === Object.getPrototypeOf(this)._events) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
    }
    this._maxListeners = n;
    return this;
  };

  function _getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };

  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    var doError = (type === 'error');

    var events = this._events;
    if (events !== undefined)
      doError = (doError && events.error === undefined);
    else if (!doError)
      return false;

    // If there is no 'error' event listener then throw.
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
      }
      // At least give some kind of context to the user
      var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
      err.context = er;
      throw err; // Unhandled 'error' event
    }

    var handler = events[type];

    if (handler === undefined)
      return false;

    if (typeof handler === 'function') {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    checkListener(listener);

    events = target._events;
    if (events === undefined) {
      events = target._events = Object.create(null);
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener !== undefined) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (existing === undefined) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
        // If we've already got an array, just append.
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }

      // Check for listener leak
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        // No error code for this since it is a Warning
        // eslint-disable-next-line no-restricted-syntax
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + String(type) + ' listeners ' +
                            'added. Use emitter.setMaxListeners() to ' +
                            'increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }

    return target;
  }

  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }

  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // Emits a 'removeListener' event if and only if the listener was removed.
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        checkListener(listener);

        events = this._events;
        if (events === undefined)
          return this;

        list = events[type];
        if (list === undefined)
          return this;

        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length - 1; i >= 0; i--) {
            if (list[i] === listener || list[i].listener === listener) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }

          if (list.length === 1)
            events[type] = list[0];

          if (events.removeListener !== undefined)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events, i;

        events = this._events;
        if (events === undefined)
          return this;

        // not listening for removeListener, no need to emit
        if (events.removeListener === undefined) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i = 0; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners !== undefined) {
          // LIFO order
          for (i = listeners.length - 1; i >= 0; i--) {
            this.removeListener(type, listeners[i]);
          }
        }

        return this;
      };

  function _listeners(target, type, unwrap) {
    var events = target._events;

    if (events === undefined)
      return [];

    var evlistener = events[type];
    if (evlistener === undefined)
      return [];

    if (typeof evlistener === 'function')
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];

    return unwrap ?
      unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }

  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };

  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events !== undefined) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener !== undefined) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };

  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }

  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  var Chart = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Chart, _EventEmitter);

    function Chart() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Chart);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this));
      var defaults = {
        ctype: '',
        width: 640,
        height: 220,
        left: 0,
        stateHeight: 20,
        figureHeight: 220,
        figureWidth: 640,
        autoFetchData: true,
        sliceType: true,
        mouseLineType: true,
        kwidth: 6,
        kpadding: 1.5,
        period: 'day',
        xAxis: {
          display: true
        },
        tooltips: true
      };
      options = _this.$options = Object.assign({}, defaults, options);
      _this.allDataSet = options.allDataSet || {};
      _this.dataSet = options.dataSet || {};
      _this.$colors = {
        'ma5': '#f80',
        'ma10': '#08c',
        'ma20': '#d3a',
        'ma30': '#f45',
        'ma60': '#608',
        'ma5_o': 'rgba(255, 136, 0, 0.2)',
        'ma10_o': 'rgba(0, 136, 204, 0.2)',
        'ma20_o': 'rgba(221, 51, 170, 0.2)',
        'ma30_o': 'rgba(255, 68, 85, 0.2)',
        'ma60_o': 'rgba(102, 0, 136, 0.2)',
        'red': '#e30',
        'green': '#0a0',
        'blue': '#06c',
        'close': '#06c',
        'text': '#333'
      };
      _this.mouseIndex = 0;
      _this.currentIndex = 0;
      _this.scaleing = false;
      _this.$elements = {};
      _this.layers = {};
      _this.groups = {};

      _this._initOptions();

      _this._initElements();

      return _this;
    }

    _createClass(Chart, [{
      key: "setOptions",
      value: function setOptions(key, val) {
        var options = this.$options;

        if (_typeof(key) === 'object') {
          val = key;

          for (var name in val) {
            options[name] = val[name];
          }
        } else {
          options[key] = val;
        }

        return this;
      }
    }, {
      key: "_initOptions",
      value: function _initOptions() {
        var options = this.$options;
        var width = options.width,
            left = options.left,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            figureWidth = options.figureWidth,
            kwidth = options.kwidth,
            kpadding = options.kpadding;
        left = Math.max(0, left);
        var figureWidth = width - left;
        var kspan = kwidth + 2 * kpadding;
        var paddingY = 0.03 * (figureHeight - stateHeight);
        var count = Math.floor(figureWidth / kspan);
        var begin = Date.now() + 864e5;
        this.setOptions({
          left: left,
          figureWidth: figureWidth,
          kspan: kspan,
          paddingY: paddingY,
          count: count,
          startIndex: -count,
          begin: begin
        });
      }
    }, {
      key: "_initElements",
      value: function _initElements() {}
    }, {
      key: "_initStage",
      value: function _initStage() {}
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        var self = this;
        var options = this.$options;
        var kwidth = options.kwidth,
            kpadding = options.kpadding,
            left = options.left;
        this.allDataSet.on('data-changed', function (res) {
          var uid = res.uid,
              mode = res.mode,
              data = res.data;

          if (options.stopIndex === undefined) {
            options.stopIndex = data.length;
          } else {
            options.stopIndex += data.length;
          }

          if (mode === 'moveChart') ; else if (mode === 'scaleChart') {
            options.startIndex = -options.count;
          }

          self.update();
        });

        function startHandler(e) {
          switch (e.type) {
            case 'touchstart':
              self._mouseX = self.stage.getPointerPosition().x - left;
              break;

            case 'mousedown':
              self._mouseX = e.evt.offsetX - left;
              break;
          }

          self._isDrag = true;
        }

        function endHandler(e) {
          self._isDrag = false;
        }

        function leaveHandler(e) {
          self._isDrag = false;
          self.scaleing = false;
          self.removeMouseLine();
          self.emit('remove-mouse-line');
        }

        function wheelHandler(e) {
          var x;

          if (self.scaleing) {
            e = e.originalEvent;
            e.preventDefault();
            x = e.offsetX - left;

            if (x < 0) {
              return;
            }

            if (e.deltaX) {
              var index = Math.round(e.deltaX / (kwidth + 2 * kpadding));
              self.moveChart(index);
            }

            if (Math.abs(e.deltaY) < 5 || Math.abs(e.deltaY) > 20) {
              self.scaleChart(-Math.sign(e.deltaY));
            }
          }
        }

        this.stage.on('mousedown', startHandler);
        this.stage.on('touchstart', startHandler);
        this.stage.on('mouseup', endHandler);
        this.stage.on('touchend', endHandler);
        this.stage.on('mouseleave', leaveHandler);
        this.$elements.$el.on('mousewheel', wheelHandler);
      }
    }, {
      key: "fetchData",
      value: function fetchData(params) {
        var _this2 = this;

        this.stop = true;
        return this.allDataSet.fetchKlineData(params).then(function () {
          _this2.stop = false;
        });
      }
    }, {
      key: "addGrid",
      value: function addGrid() {
        var _this3 = this;

        var _this$$options = this.$options,
            left = _this$$options.left,
            figureWidth = _this$$options.figureWidth,
            figureHeight = _this$$options.figureHeight,
            stateHeight = _this$$options.stateHeight;
        var data = this.dataSet.getGridData({
          left: left,
          figureWidth: figureWidth,
          figureHeight: figureHeight,
          stateHeight: stateHeight,
          stroke: 'rgba(225, 225, 225, 1)',
          strokeWidth: 1,
          font: '22px Helvetica',
          $colors: this.$colors
        });
        data.lines.forEach(function (opts) {
          var node = new Konva$1.Line(opts);

          _this3.groups.main.add(node);
        });
        data.rects.forEach(function (opts) {
          var node = new Konva$1.Rect(opts);

          _this3.groups.main.add(node);
        });
        return this;
      }
    }, {
      key: "addYTicks",
      value: function addYTicks() {
        var _this4 = this;

        var _this$$options2 = this.$options,
            left = _this$$options2.left,
            figureHeight = _this$$options2.figureHeight,
            stateHeight = _this$$options2.stateHeight;
        var data = this.dataSet.getYTickData({
          left: left,
          figureHeight: figureHeight,
          stateHeight: stateHeight,
          $colors: this.$colors
        });
        data.texts.forEach(function (opts) {
          var node = new Konva$1.Text(opts);

          _this4.groups.tickLabel.add(node);
        });
        return this;
      }
    }, {
      key: "drawTickLabel",
      value: function drawTickLabel() {
        var _this$$options3 = this.$options,
            width = _this$$options3.width,
            height = _this$$options3.height;

        if (!this.groups.tickLabel) {
          this.groups.tickLabel = new Konva$1.Group({
            x: 0,
            y: 0,
            width: width,
            height: height
          });
        } else {
          this.groups.tickLabel.destroy();
        }

        this.addYTicks();
        this.layers.tickLabel.add(this.groups.tickLabel).draw();
        return this;
      }
    }, {
      key: "addMouseLine",
      value: function addMouseLine(data) {
        this.mouseLine.addMouseLine(data);
        return this;
      }
    }, {
      key: "removeMouseLine",
      value: function removeMouseLine() {
        this._mouseX = -999;
        this._mouseY = -999;
        this.mouseLine.addMouseLine({
          type: true,
          mouseX: this._mouseX,
          mouseY: this._mouseY
        });
        return this;
      }
      /**
       * 
       * @param {*} index 
       * @param {*} data.flag 为true，外部触发的moveChart
       */

    }, {
      key: "moveChart",
      value: function moveChart() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = this.$options;
        var startIndex = options.startIndex,
            stopIndex = options.stopIndex,
            count = options.count;
        var emitter = data.emitter;
        var allKlineData = this.allDataSet.getData();
        var klineData = this.dataSet.getData();

        if (klineData.length !== allKlineData.length) {
          /**
           * 临界点：
           * 1. 向右钻取数据，stopIndex <= allKlineData.length
           * 2. 向左钻取数据，startIndex >= -allKlineData.length
           * 3. this.stop
           */
          if (index > 0 && stopIndex >= allKlineData.length || index < 0 && startIndex + allKlineData.length <= 0 || this.stop) {
            return;
          }

          options.startIndex = Math.min(-count, startIndex + index);
          options.stopIndex = Math.min(allKlineData.length, stopIndex + index);

          if (options.startIndex + allKlineData.length < count / 2 && index < 0 && !this.allDataSet.getState('isAllData') && (!emitter || emitter === this)) {
            this.fetchData({
              uid: this.uid,
              count: -2 * count,
              mode: 'moveChart'
            });
          } else {
            this.update();
          }

          if (!emitter || emitter === this) {
            this.emit('move-chart', {
              index: index
            });
          }
        }
      }
    }, {
      key: "moveChartWithMouseLine",
      value: function moveChartWithMouseLine() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.moveChart(index); // 左移（<）、右移（>）时，触发 `mouseline`

        this.addMouseLine({
          type: false
        });
        return this;
      }
      /**
       * 
       * @param {*} data.flag 为true，外部触发的resetScaleChart
       */

    }, {
      key: "resetScaleChart",
      value: function resetScaleChart() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var kwidth = this.$options.kwidth;
        var emitter = data.emitter;

        if (kwidth !== 6) {
          this.$options.kwidth = 6;
          this.scaleChart(0, {
            reset: true,
            emitter: emitter
          });
          this.emit('reset-scale-chart');
        }
      }
      /**
       * 
       * @param {*} scale 
       * @param {*} data.flag 为true，外部触发的scaleChart
       */

    }, {
      key: "scaleChart",
      value: function scaleChart() {
        var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var options = this.$options;
        var kwidth = options.kwidth,
            kpadding = options.kpadding,
            figureWidth = options.figureWidth;
        var reset = data.reset,
            emitter = data.emitter;
        var allKlineData = this.allDataSet.getData();
        options.kwidth = scale > 0 ? Math.min(17, kwidth + scale) : Math.max(0, kwidth + scale);

        if (options.kwidth !== kwidth || reset == true) {
          this.$elements.$el.attr('kwidth', options.kwidth);
          options.kspan = options.kwidth + 2 * kpadding;
          options.count = Math.floor(figureWidth / options.kspan);

          if (options.count > allKlineData.length) {
            this.fetchData({
              uid: this.uid,
              count: -options.count,
              mode: 'scaleChart'
            });
          } else {
            options.startIndex = -options.count - (allKlineData.length - options.stopIndex);
            this.update();
          }

          if (!emitter || emitter === this) {
            this.emit('scale-chart', {
              scale: scale,
              reset: reset
            });
          }
        } // 缩放图形时，隐藏十字辅助线


        this.removeMouseLine();
        this.emit('remove-mouse-line');
      }
    }, {
      key: "render",
      value: function render() {
        this.update();
      }
    }, {
      key: "destroy",
      value: function destroy() {// TODO
      }
    }]);

    return Chart;
  }(events);

  var measureText = function () {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    return function (text) {
      ctx.font = '11px "Helvetica"';
      return ctx.measureText(text);
    };
  }();
  function ma(data, ma) {
    if (ma === 0) {
      ma = 5;
    }

    var res = [];
    data.forEach(function (item, index) {
      if (index < ma) {
        res[index] = undefined;
      } else {
        for (var i = 0, j = 0; j < ma; j++) {
          i += data[index - j];
        }

        res[index] = i / ma;
      }
    });
    return res;
  }
  function getTimeFormatStr(v) {
    var timeFormatStr = "YYYY-MM";

    if (["day", "week", "month", "quarter", "year"].indexOf(v) > -1) {
      timeFormatStr = "YYYY-MM";
    } else if (["15m", "30m", "60m", "120m"].indexOf(v) > -1) {
      timeFormatStr = "MM-DD";
    } else if (["1m", "5m"].indexOf(v) > -1) {
      timeFormatStr = "HH:mm";
    }

    return timeFormatStr;
  }
  function floor(v) {
    return Math.floor(v) + .5;
  }
  function parseVolume(val) {
    if (null === val) {
      return '--';
    }

    var num = parseInt(val, 10),
        _val = val;

    if (num < 1e5) {
      return num;
    }

    for (var i = 0; _val > 1e4 && i < 3;) {
      _val /= 1e4;
      i += 1;
    }

    var n = (num = Math.round(100 * _val) / 100).toString(),
        r = n.indexOf('.');

    for (r < 0 && (r = n.length, n += '.'); n.length <= r + 2;) {
      n += '0';
    }

    return num + ['', '万', '亿', '万亿'][i];
  }
  function parseAmount(val) {
    var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    return null == val || Number.isNaN(val) ? '-' : val / 1e4 > 1 && val / 1e4 < 1e4 ? ''.concat((val / 1e4).toFixed(2), '万') : val / 1e4 >= 1e4 ? ''.concat((val / 1e8).toFixed(2), '亿') : val.toFixed(toFixed);
  }
  function isDifPeriod(timestamp, timestamp0, period) {
    var date = new Date(timestamp),
        date0 = new Date(timestamp0);
    var periods = ['day', 'week', 'month', 'quarter', 'year'];
    var minutes1 = ['15m', '30m', '60m', '120m'];
    var minutes2 = ['1m', '5m'];

    if (periods.indexOf(period) > -1 && date.getMonth() !== date0.getMonth() || minutes1.indexOf(period) > -1 && date.getDay() !== date0.getDay() || minutes2.indexOf(period) > -1 && date.getHours() !== date0.getHours() && 0 === date.getMinutes()) {
      return true;
    }

    return false;
  }

  var ToolTips = /*#__PURE__*/function () {
    function ToolTips(context) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ToolTips);

      var defaults = {};
      options = this.$options = Object.assign({}, defaults, options);
      this.context = context;
      this.$elements = {};

      this._init();
    }

    _createClass(ToolTips, [{
      key: "_init",
      value: function _init() {
        var options = this.$options;
        var $tooltips = this.$elements.$tooltips = this.$elements.$tooltips || $('<div/>');
        $tooltips.attr('id', 'k-tooltips');
        $tooltips.css({
          position: 'absolute',
          top: options.stateHeight
        });

        if (this.context.$elements.$el) {
          this.context.$elements.$el.append($tooltips);
        }
      }
    }, {
      key: "getColor",
      value: function getColor(val, lastClose) {
        var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var $colors = this.context.$colors;
        return (val - lastClose) * opacity < 0 ? $colors.green : (val - lastClose) * opacity > 0 ? $colors.red : $colors.text;
      }
    }, {
      key: "parseVolume",
      value: function parseVolume$1() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var quoteLotSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var quoteType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 11;
        var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        if (null === val) {
          return '--';
        }

        var num = val;
        num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 ? ''.concat(parseVolume(val / quoteLotSize), '手') : [30, 31, 32, 33, 34, 0, 3, 4, 5, 6, 7, 26, 27, 28, 8, 35].indexOf(+quoteType) > -1 ? ''.concat(parseVolume(val), '股') : parseVolume(val);
        return flag ? num : parseFloat(num);
      }
    }, {
      key: "getTooltips",
      value: function getTooltips(item) {
        if (!item.display) {
          return '';
        }

        return "<ul class=\"overlay\">\n            <li>\n                <span>\u65F6\u95F4</span>\n                <span>".concat(item.time, "</span>\n            </li>\n            <li>\n                <span>\u5F00\u76D8\u4EF7</span>\n                <span style=\"color: ").concat(this.getColor(item.open, item.lastClose), ";\">").concat(item.open.toFixed(2), "</span>\n            </li>\n            <li>\n                <span>\u6700\u9AD8\u4EF7</span>\n                <span style=\"color: ").concat(this.getColor(item.high, item.lastClose), ";\">").concat(item.high.toFixed(2), "</span>\n            </li>\n            <li>\n                <span>\u6700\u4F4E\u4EF7</span>\n                <span style=\"color: ").concat(this.getColor(item.low, item.lastClose), ";\">").concat(item.low.toFixed(2), "</span>\n            \n            </li>\n            <li>\n                <span>\u6536\u76D8\u4EF7</span>\n                <span style=\"color: ").concat(this.getColor(item.close, item.lastClose), ";\">").concat(item.close.toFixed(2), "</span>\n            </li>\n            <li>\n                <span>\u6DA8\u8DCC\u989D</span>\n                <span style=\"color: ").concat(this.getColor(item.close, item.lastClose), ";\">").concat(item.chg.toFixed(2), "</span>\n            </li>\n            <li>\n                <span>\u6DA8\u8DCC\u5E45</span>\n                <span style=\"color: ").concat(this.getColor(item.close, item.lastClose), ";\">").concat(item.percent.toFixed(2), "%</span>\n            </li>\n            <li>\n                <span>\u6210\u4EA4\u91CF</span>\n                <span>").concat(this.parseVolume(item.volume), "</span>\n            </li>\n            <li>\n                <span>\u6210\u4EA4\u989D</span>\n                <span>").concat(parseAmount(item.amount), "</span>\n            </li>\n                <li>\n                <span>\u6362\u624B\u7387</span>\n                <span>").concat(item.turnoverrate.toFixed(2), "%</span>\n            </li>\n        </ul>");
      }
    }, {
      key: "setData",
      value: function setData(data) {
        if (!data) {
          this.$elements.$tooltips.html('');
          return;
        }

        var tooltips = this.getTooltips(data);
        this.$elements.$tooltips.html(tooltips);

        if (data.left !== null) {
          this.$elements.$tooltips.css('left', data.left);
        } else {
          this.$elements.$tooltips.css('left', '');
        }

        if (data.right !== null) {
          this.$elements.$tooltips.css('right', data.right);
        } else {
          this.$elements.$tooltips.css('right', '');
        }
      }
    }]);

    return ToolTips;
  }();

  var MouseLine = /*#__PURE__*/function (_EventEmitter) {
    _inherits(MouseLine, _EventEmitter);

    function MouseLine(context) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MouseLine);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MouseLine).call(this));
      var defaults = {};
      options = _this.$options = Object.assign({}, defaults, options);
      _this.context = context;
      _this.dataSet = options.dataSet || {};
      _this.groups = {};
      _this.tooltips = new ToolTips(context, options);
      return _this;
    }
    /**
     * 
     * @param {boolean} type 
     *  type: true，yMouseLine 跟随鼠标自由移动
     *  type: false，yMouseLine 指示到`currentIndex`对应的收盘价位置
     */


    _createClass(MouseLine, [{
      key: "addMouseLine",
      value: function addMouseLine(data) {
        var _this2 = this;

        var context = this.context;
        var _this$$options = this.$options,
            ctype = _this$$options.ctype,
            width = _this$$options.width,
            height = _this$$options.height,
            left = _this$$options.left,
            figureWidth = _this$$options.figureWidth,
            figureHeight = _this$$options.figureHeight,
            stateHeight = _this$$options.stateHeight,
            period = _this$$options.period,
            xAxis = _this$$options.xAxis,
            tooltips = _this$$options.tooltips;
        var _data = data,
            type = _data.type,
            mouseIndex = _data.mouseIndex,
            isValidPoint = _data.isValidPoint,
            mouseX = _data.mouseX,
            mouseY = _data.mouseY,
            isDrag = _data.isDrag,
            emitter = _data.emitter;
        var data = {
          lines: [],
          rects: [],
          texts: [],
          circles: []
        }; // TODO

        if (type === false || mouseIndex >= 0 && !isDrag && isValidPoint) {
          data = this.dataSet.getMouseLineData({
            ctype: ctype,
            type: type,
            mouseIndex: mouseIndex,
            mouseY: mouseY,
            left: left,
            figureWidth: figureWidth,
            figureHeight: figureHeight,
            stateHeight: stateHeight,
            period: period,
            $colors: context.$colors,
            xAxis: xAxis,
            emitter: emitter
          });
          context.currentIndex = context.mouseIndex;

          if (tooltips) {
            this.tooltips.setData(data.item);
          }

          this.emit('mouseline-move');
        } else {
          this.tooltips.setData();
        }

        if (!this.groups.main) {
          this.groups.main = new Konva.Group({
            x: 0,
            y: 0,
            width: width,
            height: height
          });
        } else {
          this.groups.main.destroy();
        }

        data.lines.forEach(function (opts) {
          var node = new Konva.Line(opts);

          _this2.groups.main.add(node);
        });
        data.circles.forEach(function (opts) {
          var node = new Konva.Circle(opts);

          _this2.groups.main.add(node);
        });
        data.rects.forEach(function (opts) {
          var node = new Konva.Rect(opts);

          _this2.groups.main.add(node);
        });
        data.texts.forEach(function (opts) {
          var node = new Konva.Text(opts);

          _this2.groups.main.add(node);
        });
        context.layers.mouseLine.add(this.groups.main).draw();
        return this;
      }
    }]);

    return MouseLine;
  }(events);

  var uid = 0;

  var Kline = /*#__PURE__*/function (_Chart) {
    _inherits(Kline, _Chart);

    function Kline() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Kline);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Kline).call(this, options));
      var defaults = {
        ctype: 'kline',
        left: 0,
        width: 640,
        height: 220,
        figureWidth: 640,
        stateHeight: 20,
        figureHeight: 220,
        maList: ['ma5', 'ma10', 'ma20', 'ma30', 'ma60'],
        maLineType: 'ma'
      };
      options = _this.$options = Object.assign(_this.$options, defaults, options);
      _this.uid = 'kline' + uid++;
      _this.activeMa = {
        'ma5': true,
        'ma10': true,
        'ma20': true,
        'ma30': true,
        'ma60': true
      };

      _this._initStage();

      _this.mouseLine = new MouseLine(_assertThisInitialized(_this), options);

      _this._bindEvents();

      if (options.autoFetchData) {
        _this.fetchData({
          uid: _this.uid,
          count: -2 * options.count,
          mode: 'init'
        });
      }

      return _this;
    }

    _createClass(Kline, [{
      key: "_initElements",
      value: function _initElements() {
        var options = this.$options;
        var $el = this.$elements.$el = $(options.el);

        var $selList = this.$elements.$selList = this._createSelList();

        $el.append($selList);
      }
    }, {
      key: "_createSelList",
      value: function _createSelList() {
        var $selList = $('<ul/>');
        $selList.attr('id', 'sel-list');
        $selList.attr('class', 'sel-list');
        $selList.css({
          position: 'absolute',
          top: 20
        });
        var selItems = [{
          text: '均线',
          type: 'ma',
          ma: 'ma'
        }, {
          text: '关闭',
          type: 'ma',
          ma: null
        }];
        selItems.forEach(function (item, index) {
          var $selItem = $('<li/>');

          if (index === 0) {
            $selItem.addClass('active');
          }

          $selItem.data('type', item.type);
          $selItem.data('ma', item.ma);
          $selItem.text(item.text);
          $selList.append($selItem);
        });
        return $selList;
      }
    }, {
      key: "_initStage",
      value: function _initStage() {
        var _this$$options = this.$options,
            el = _this$$options.el,
            width = _this$$options.width,
            height = _this$$options.height;
        var stage = this.stage = new Konva$1.Stage({
          container: el,
          width: width,
          height: height
        });
        var main = this.layers.main = new Konva$1.Layer();
        stage.add(main);
        var maLine = this.layers.maLine = new Konva$1.Layer();
        stage.add(maLine);
        var tickLabel = this.layers.tickLabel = new Konva$1.Layer();
        stage.add(tickLabel);
        var mouseLine = this.layers.mouseLine = new Konva$1.Layer();
        stage.add(mouseLine);
        stage.container().style.position = 'relative';
      }
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        var self = this;
        var options = this.$options;
        var kspan = options.kspan,
            kwidth = options.kwidth,
            left = options.left,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            mouseLineType = options.mouseLineType,
            maList = options.maList;

        _get(_getPrototypeOf(Kline.prototype), "_bindEvents", this).call(this);

        function clickHandler(e) {
          var x, y, maIndex, ma;
          self.scaleing = true;

          switch (e.type) {
            case 'touchstart':
              x = self.stage.getPointerPosition().x - left;
              y = self.stage.getPointerPosition().y;
              break;

            case 'click':
              x = e.evt.offsetX - left;
              y = e.evt.offsetY;
              break;
          }

          if (x > 30) {
            if (y <= 20) {
              maIndex = self.maPosition.findIndex(function (d) {
                return d > x;
              });
              ma = maList[maIndex];
              self.activeMa[ma] = !self.activeMa[ma];
              self.update();
            }
          } else {
            if (y <= 20) {
              self.$elements.$selList.css({
                left: left - 20
              });
              self.$elements.$selList.toggle();
            }
          }
        }

        function moveHandler(e) {
          self.stage.container().style.cursor = 'pointer';
          var x,
              y,
              xData = self.dataSet.getData('xData'),
              isValidPoint;

          switch (e.type) {
            case 'touchmove':
              x = self.stage.getPointerPosition().x - left;
              y = self.stage.getPointerPosition().y;
              break;

            case 'mousemove':
              x = e.evt.offsetX - left;
              y = e.evt.offsetY;
              break;
          }
          /**
           * `hank`
           * 鼠标在右上工具栏内，不计算如 move 的范围
           */


          if (x > figureWidth - 150 && y < stateHeight) {
            self.removeMouseLine();
            self.emit('remove-mouse-line');
            return;
          }

          if (self._isDrag) {
            if (Math.abs(self._mouseX - x) < kspan) {
              return;
            }

            var index = Math.round((self._mouseX - x) / kspan);

            if (x >= 0) {
              self.moveChart(index);
            }
          }

          self.mouseIndex = xData.findIndex(function (v) {
            // return v >= x
            return v + kwidth >= x;
          });
          self._mouseX = x;
          self._mouseY = y;
          isValidPoint = self._mouseX >= 0 && self._mouseX <= figureWidth && self._mouseY >= stateHeight && self._mouseY <= figureHeight; // TODO

          self.addMouseLine({
            emitter: 'self',
            type: mouseLineType,
            mouseIndex: self.mouseIndex,
            isValidPoint: isValidPoint,
            mouseX: self._mouseX,
            mouseY: self._mouseY,
            isDrag: self._isDrag
          }); // TODO

          self.emit('add-mouse-line', {
            emitter: 'other',
            type: mouseLineType,
            mouseIndex: self.mouseIndex,
            isValidPoint: isValidPoint,
            mouseX: self._mouseX,
            mouseY: self._mouseY,
            isDrag: self._isDrag
          });
        }

        function maLineSelHandler(e) {
          var $target = $(e.target);
          var type = $target.data('ma');
          var maLineType = self.$options.maLineType;
          self.$elements.$selList.hide();

          if (maLineType == type) {
            return;
          }

          self.$options.maLineType = type;
          $target.siblings().removeClass('active');
          type && $target.addClass('active');

          if (kwidth > 0) {
            self.drawMaLine();
          }
        }

        this.stage.on('click', clickHandler);
        this.stage.on('mousemove', moveHandler);
        this.stage.on('touchmove', moveHandler);
        this.mouseLine.on('mouseline-move', function () {
          self.drawMaLine();
        });
        this.$elements.$selList.on('click', maLineSelHandler);
      }
    }, {
      key: "addKline",
      value: function addKline() {
        var _this2 = this;

        var _this$$options2 = this.$options,
            left = _this$$options2.left,
            kspan = _this$$options2.kspan,
            kwidth = _this$$options2.kwidth,
            stateHeight = _this$$options2.stateHeight,
            figureWidth = _this$$options2.figureWidth,
            figureHeight = _this$$options2.figureHeight,
            sliceType = _this$$options2.sliceType,
            period = _this$$options2.period,
            xAxis = _this$$options2.xAxis;
        var data = this.dataSet.getKlineData({
          left: left,
          kspan: kspan,
          kwidth: kwidth,
          stateHeight: stateHeight,
          figureWidth: figureWidth,
          figureHeight: figureHeight,
          sliceType: sliceType,
          period: period,
          $colors: this.$colors,
          xAxis: xAxis
        });
        data.texts.forEach(function (opts) {
          var node = new Konva$1.Text(opts);

          _this2.groups.main.add(node);
        });
        data.lines.forEach(function (opts) {
          var node = new Konva$1.Line(opts);

          _this2.groups.main.add(node);
        });
        data.rects.forEach(function (opts) {
          var node = new Konva$1.Rect(opts);

          _this2.groups.main.add(node);
        });
        return this;
      }
    }, {
      key: "addExtentTips",
      value: function addExtentTips() {
        var _this3 = this;

        var _this$$options3 = this.$options,
            left = _this$$options3.left,
            kspan = _this$$options3.kspan,
            kwidth = _this$$options3.kwidth,
            figureWidth = _this$$options3.figureWidth;
        var data = this.dataSet.getExtentTipData({
          left: left,
          kspan: kspan,
          kwidth: kwidth,
          figureWidth: figureWidth,
          $colors: this.$colors
        });
        data.lines.forEach(function (opts) {
          var node = new Konva$1.Line(opts);

          _this3.groups.main.add(node);
        });
        data.texts.forEach(function (opts) {
          var node = new Konva$1.Text(opts);

          _this3.groups.main.add(node);
        });
        return this;
      }
    }, {
      key: "drawKline",
      value: function drawKline() {
        var _this$$options4 = this.$options,
            width = _this$$options4.width,
            height = _this$$options4.height;

        if (!this.groups.main) {
          this.groups.main = new Konva$1.Group({
            x: 0,
            y: 0,
            width: width,
            height: height
          });
        } else {
          this.groups.main.destroy();
        }

        this.addGrid().addKline().addExtentTips();
        this.layers.main.add(this.groups.main).draw();
        return this;
      }
    }, {
      key: "drawMaLine",
      value: function drawMaLine() {
        var _this4 = this;

        var _this$$options5 = this.$options,
            width = _this$$options5.width,
            height = _this$$options5.height,
            left = _this$$options5.left,
            maList = _this$$options5.maList,
            maLineType = _this$$options5.maLineType,
            kspan = _this$$options5.kspan,
            kwidth = _this$$options5.kwidth,
            stateHeight = _this$$options5.stateHeight,
            startIndex = _this$$options5.startIndex,
            stopIndex = _this$$options5.stopIndex;

        if (!this.groups.maline) {
          this.groups.maline = new Konva$1.Group({
            x: 0,
            y: 0,
            width: width,
            height: height
          });
        } else {
          this.groups.maline.destroy();
        }

        var data = this.dataSet.getMaLineData({
          left: left,
          maList: maList,
          maLineType: maLineType,
          activeMa: this.activeMa,
          $colors: this.$colors,
          kspan: kspan,
          kwidth: kwidth,
          stateHeight: stateHeight,
          startIndex: startIndex,
          stopIndex: stopIndex,
          currentIndex: this.currentIndex
        });
        this.maPosition = data.maPosition;
        data.lines.forEach(function (opts) {
          var node = new Konva$1.Line(opts);

          _this4.groups.maline.add(node);
        });
        data.texts.forEach(function (opts) {
          var node = new Konva$1.Text(opts);

          _this4.groups.maline.add(node);
        });
        this.layers.maLine.add(this.groups.maline).draw();
        return this;
      }
    }, {
      key: "setScale",
      value: function setScale() {
        var _this$$options6 = this.$options,
            maList = _this$$options6.maList,
            kwidth = _this$$options6.kwidth,
            startIndex = _this$$options6.startIndex,
            stopIndex = _this$$options6.stopIndex,
            figureHeight = _this$$options6.figureHeight,
            stateHeight = _this$$options6.stateHeight,
            paddingY = _this$$options6.paddingY,
            width = _this$$options6.width,
            height = _this$$options6.height; // console.log(startIndex, stopIndex)

        var data = this.allDataSet.slice(startIndex, stopIndex);
        this.dataSet.setData(data);
        this.currentIndex = this.currentIndex || data.length - 1;
        var extent = this.dataSet.extent({
          maList: maList,
          kwidth: kwidth,
          activeMa: this.activeMa,
          startIndex: startIndex,
          stopIndex: stopIndex,
          figureHeight: figureHeight,
          stateHeight: stateHeight,
          paddingY: paddingY
        }); // console.log('extent:', extent)
        // console.log(extent)

        this.dataSet.setScale({
          domain: extent,
          range: [figureHeight - paddingY, stateHeight + paddingY]
        });
        return this;
      }
    }, {
      key: "update",
      value: function update() {
        this.setScale();
        this.drawKline().drawMaLine().drawTickLabel();
      }
    }, {
      key: "redraw",
      value: function redraw() {
        this.drawKline().drawMaLine().drawTickLabel();
      }
    }]);

    return Kline;
  }(Chart);

  var uid$1 = 0;

  var Volume = /*#__PURE__*/function (_Chart) {
    _inherits(Volume, _Chart);

    function Volume() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Volume);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Volume).call(this, options));
      var defaults = {
        ctype: 'volume',
        left: 0,
        width: 640,
        height: 90,
        figureWidth: 640,
        stateHeight: 20,
        figureHeight: 70
      };
      options = _this.$options = Object.assign(_this.$options, defaults, options);
      _this.uid = 'volume' + uid$1++;

      _this._initStage();

      _this.mouseLine = new MouseLine(_assertThisInitialized(_this), options);

      _this._bindEvents();

      if (options.autoFetchData) {
        _this.fetchData({
          uid: _this.uid,
          count: -2 * options.count,
          mode: 'init'
        });
      }

      return _this;
    }

    _createClass(Volume, [{
      key: "_initElements",
      value: function _initElements() {
        var options = this.$options;
        var $el = this.$elements.$el = $(options.el);
      }
    }, {
      key: "_initStage",
      value: function _initStage() {
        var _this$$options = this.$options,
            el = _this$$options.el,
            width = _this$$options.width,
            height = _this$$options.height;
        var stage = this.stage = new Konva$1.Stage({
          container: el,
          width: width,
          height: height
        });
        var main = this.layers.main = new Konva$1.Layer();
        stage.add(main);
        var maLine = this.layers.maLine = new Konva$1.Layer();
        stage.add(maLine);
        var tickLabel = this.layers.tickLabel = new Konva$1.Layer();
        stage.add(tickLabel);
        var mouseLine = this.layers.mouseLine = new Konva$1.Layer();
        stage.add(mouseLine);
        stage.container().style.position = 'relative';
      }
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        var self = this;
        var options = this.$options;
        var kspan = options.kspan,
            kwidth = options.kwidth,
            left = options.left,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            mouseLineType = options.mouseLineType;

        _get(_getPrototypeOf(Volume.prototype), "_bindEvents", this).call(this);

        function clickHandler(e) {
          self.scaleing = true;
        }

        function moveHandler(e) {
          self.stage.container().style.cursor = 'pointer';
          var x,
              y,
              xData = self.dataSet.getData('xData'),
              isValidPoint;

          switch (e.type) {
            case 'touchmove':
              x = self.stage.getPointerPosition().x - left;
              y = self.stage.getPointerPosition().y;
              break;

            case 'mousemove':
              x = e.evt.offsetX - left;
              y = e.evt.offsetY;
              break;
          }

          if (self._isDrag) {
            if (Math.abs(self._mouseX - x) < kspan) {
              return;
            }

            var index = Math.round((self._mouseX - x) / kspan);

            if (x >= 0) {
              self.moveChart(index);
            }
          }

          self.mouseIndex = xData.findIndex(function (v) {
            // return v >= x
            return v + kwidth >= x;
          });
          self._mouseX = x;
          self._mouseY = y;
          isValidPoint = self._mouseX >= 0 && self._mouseX <= figureWidth && self._mouseY >= stateHeight && self._mouseY <= figureHeight; // TODO

          self.addMouseLine({
            emitter: 'self',
            type: mouseLineType,
            mouseIndex: self.mouseIndex,
            isValidPoint: isValidPoint,
            mouseX: self._mouseX,
            mouseY: self._mouseY,
            isDrag: self._isDrag
          }); // TODO

          self.emit('add-mouse-line', {
            emitter: 'other',
            type: mouseLineType,
            mouseIndex: self.mouseIndex,
            isValidPoint: isValidPoint,
            mouseX: self._mouseX,
            mouseY: self._mouseY,
            isDrag: self._isDrag
          });
        }

        this.stage.on('click', clickHandler);
        this.stage.on('mousemove', moveHandler);
        this.stage.on('touchmove', moveHandler);
      }
    }, {
      key: "addVrect",
      value: function addVrect() {
        var _this2 = this;

        var _this$$options2 = this.$options,
            left = _this$$options2.left,
            kspan = _this$$options2.kspan,
            kwidth = _this$$options2.kwidth,
            stateHeight = _this$$options2.stateHeight,
            figureWidth = _this$$options2.figureWidth,
            figureHeight = _this$$options2.figureHeight,
            sliceType = _this$$options2.sliceType,
            period = _this$$options2.period,
            xAxis = _this$$options2.xAxis;
        var data = this.dataSet.getVrectData({
          left: left,
          kspan: kspan,
          kwidth: kwidth,
          stateHeight: stateHeight,
          figureWidth: figureWidth,
          figureHeight: figureHeight,
          sliceType: sliceType,
          period: period,
          $colors: this.$colors,
          xAxis: xAxis
        });
        data.texts.forEach(function (opts) {
          var node = new Konva$1.Text(opts);

          _this2.groups.main.add(node);
        });
        data.lines.forEach(function (opts) {
          var node = new Konva$1.Line(opts);

          _this2.groups.main.add(node);
        });
        data.rects.forEach(function (opts) {
          var node = new Konva$1.Rect(opts);

          _this2.groups.main.add(node);
        });
        return this;
      }
    }, {
      key: "addFillRect",
      value: function addFillRect() {
        var _this3 = this;

        var _this$$options3 = this.$options,
            left = _this$$options3.left,
            stateHeight = _this$$options3.stateHeight,
            figureWidth = _this$$options3.figureWidth;
        var data = this.dataSet.getFillRectData({
          left: left,
          stateHeight: stateHeight,
          figureWidth: figureWidth
        });
        data.rects.forEach(function (opts) {
          var node = new Konva$1.Rect(opts);

          _this3.groups.main.add(node);
        });
        return this;
      }
    }, {
      key: "drawVolume",
      value: function drawVolume() {
        var _this$$options4 = this.$options,
            width = _this$$options4.width,
            height = _this$$options4.height;

        if (!this.groups.main) {
          this.groups.main = new Konva$1.Group({
            x: 0,
            y: 0,
            width: width,
            height: height
          });
        } else {
          this.groups.main.destroy();
        }

        this.addGrid().addVrect().addFillRect();
        this.layers.main.add(this.groups.main).draw();
        return this;
      }
    }, {
      key: "setScale",
      value: function setScale() {
        var _this$$options5 = this.$options,
            maList = _this$$options5.maList,
            kwidth = _this$$options5.kwidth,
            startIndex = _this$$options5.startIndex,
            stopIndex = _this$$options5.stopIndex,
            figureHeight = _this$$options5.figureHeight,
            stateHeight = _this$$options5.stateHeight,
            paddingY = _this$$options5.paddingY,
            width = _this$$options5.width,
            height = _this$$options5.height; // console.log(startIndex, stopIndex)

        var data = this.allDataSet.slice(startIndex, stopIndex);
        this.dataSet.setData(data);
        this.currentIndex = this.currentIndex || data.length - 1;
        var extent = this.dataSet.extent(); // console.log('extent:', extent)

        this.dataSet.setScale({
          domain: extent,
          range: [figureHeight, stateHeight]
        });
        return this;
      }
    }, {
      key: "update",
      value: function update() {
        this.setScale();
        this.drawVolume().drawTickLabel();
      }
    }, {
      key: "redraw",
      value: function redraw() {
        this.drawVolume().drawTickLabel();
      }
    }]);

    return Volume;
  }(Chart);

  var DataSet = /*#__PURE__*/function (_EventEmitter) {
    _inherits(DataSet, _EventEmitter);

    function DataSet() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DataSet).call(this));
      var defaults = {};
      _this.options = Object.assign({}, defaults, options);
      _this.$state = {};
      _this.$scale = {};
      _this.allDataSet = _this.options.allDataSet;
      return _this;
    }

    _createClass(DataSet, [{
      key: "getState",
      value: function getState(key) {
        return this.$state[key];
      }
    }, {
      key: "setState",
      value: function setState(key, val) {
        this.$state[key] = val;
      }
    }, {
      key: "parseVolume",
      value: function parseVolume$1() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var quoteLotSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
        var quoteType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 11;
        var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

        if (null === val) {
          return '--';
        }

        var num = val;
        num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 ? ''.concat(parseVolume(val / quoteLotSize)) : [30, 31, 32, 33, 34, 0, 3, 4, 5, 6, 7, 26, 27, 28, 8, 35].indexOf(+quoteType) > -1 ? ''.concat(parseVolume(val), '股') : parseVolume(val);
        return flag ? num : parseFloat(num);
      }
    }]);

    return DataSet;
  }(events);

  var KlineVolumeDataSet = /*#__PURE__*/function (_DataSet) {
    _inherits(KlineVolumeDataSet, _DataSet);

    function KlineVolumeDataSet(options) {
      var _this;

      _classCallCheck(this, KlineVolumeDataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(KlineVolumeDataSet).call(this, options));
      var defaults = {};
      _this.options = Object.assign(_this.options, defaults, options);
      _this.$scale = {};
      _this._data = {
        data: [],
        closeData: [],
        highData: [],
        lowData: [],
        volumeData: [],
        extent: {},
        xData: []
      };
      return _this;
    }

    _createClass(KlineVolumeDataSet, [{
      key: "extent",
      value: function extent(options) {}
    }, {
      key: "getScale",
      value: function getScale() {
        return this.$scale.linear;
      }
    }, {
      key: "setScale",
      value: function setScale(options) {
        var domain = options.domain,
            range = options.range;
        var linear = this.$scale.linear = d3.scaleLinear().domain(domain).range(range);
        return linear;
      }
    }, {
      key: "resetData",
      value: function resetData() {
        for (var key in this._data) {
          if (Array.isArray(this._data[key])) {
            this._data[key].length = 0;
          }
        }

        this._data.extent = {};
      }
    }, {
      key: "setData",
      value: function setData() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        this.resetData();
        this._data.data = data;
      }
    }, {
      key: "getData",
      value: function getData(key) {
        return key && this._data[key] ? this._data[key] : this._data.data;
      }
    }, {
      key: "getGridData",
      value: function getGridData(options) {
        var nice = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
        var result = {
          lines: [],
          rects: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var left = options.left,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            stroke = options.stroke,
            strokeWidth = options.strokeWidth,
            font = options.font;
        var span = (figureHeight - stateHeight) / nice;

        for (var i = 1; i < nice; i++) {
          result.lines.push({
            points: [left, floor(stateHeight + span * i), floor(left + figureWidth), floor(stateHeight + span * i)],
            stroke: stroke,
            strokeWidth: strokeWidth,
            font: font
          });
        }

        result.rects.push({
          x: left,
          y: stateHeight,
          width: Math.floor(figureWidth),
          height: Math.floor(figureHeight - stateHeight),
          stroke: stroke,
          strokeWidth: strokeWidth
        });
        return result;
      }
    }, {
      key: "getKlineVolumeData",
      value: function getKlineVolumeData(options, callback) {
        var _this2 = this;

        var columns = this.options.columns;
        var result = {
          lines: [],
          rects: [],
          texts: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var left = options.left,
            kspan = options.kspan,
            kwidth = options.kwidth,
            stateHeight = options.stateHeight,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            sliceType = options.sliceType,
            period = options.period,
            $colors = options.$colors,
            xAxis = options.xAxis;
        var closeLineOpts = {
          stroke: $colors.close,
          strokeWidth: 1,
          points: []
        };
        var timeFormatStr = getTimeFormatStr(period);
        var timestamp0 = data[0][columns.indexOf('timestamp')];
        var time0 = moment(timestamp0).format(timeFormatStr);
        var timeWidth0 = measureText(time0).width * 2;
        data.forEach(function (item, index) {
          var timestamp = item[columns.indexOf('timestamp')];
          var time = moment(timestamp).format(timeFormatStr);
          var timeWidth = measureText(time).width;
          var open = item[columns.indexOf('open')];
          var close = item[columns.indexOf('close')];
          var volume = item[columns.indexOf('volume')];
          var x = floor(left + index * kspan + kwidth / 2);

          _this2._data.xData.push(x - left); // x轴刻度值


          if (x > timeWidth0 && isDifPeriod(timestamp, timestamp0, period)) {
            timestamp0 = timestamp; // mainTickLine

            var tickOpts = {
              stroke: 'rgba(225, 225, 225, 1)',
              strokeWidth: 1,
              points: [x, stateHeight, x, figureHeight]
            };
            result.lines.push(tickOpts); // mainTickLabel

            var textLeft = Math.max(x, timeWidth / 2);
            textLeft = Math.min(textLeft, left + figureWidth - timeWidth / 2);
            var textOpts = {
              x: textLeft - timeWidth / 2,
              // konva 文字无法居中，这里做了hank
              y: figureHeight + 4,
              text: time,
              fill: $colors.text,
              fontSize: 11,
              align: 'center',
              verticalAlign: 'middle'
            };

            if (xAxis.display) {
              result.texts.push(textOpts);
            }

            timeWidth0 = textLeft + timeWidth * 2;
          }

          var _callback = callback({
            item: item,
            index: index,
            x: x,
            open: open,
            close: close,
            volume: volume
          }),
              klineOpts = _callback.klineOpts,
              rectOpts = _callback.rectOpts,
              closeLinePoint = _callback.closeLinePoint;

          if (klineOpts) {
            result.lines.push(klineOpts);
          }

          if (rectOpts) {
            result.rects.push(rectOpts);
          }

          if (closeLinePoint) {
            closeLineOpts.points = closeLineOpts.points.concat(closeLinePoint);
          }
        });

        if (kwidth <= 0) {
          result.lines.push(closeLineOpts);
        }

        return result;
      }
    }, {
      key: "getFillRectData",
      value: function getFillRectData(options) {
        var left = options.left,
            stateHeight = options.stateHeight,
            figureWidth = options.figureWidth;
        var result = {
          rects: []
        };
        var rectOpts = {
          x: left,
          y: 0,
          width: figureWidth,
          height: stateHeight,
          fill: '#f9f9f9'
        };
        result.rects.push(rectOpts);
        return result;
      }
    }]);

    return KlineVolumeDataSet;
  }(DataSet);

  var MouseLineDataSet = /*#__PURE__*/function (_DataSet) {
    _inherits(MouseLineDataSet, _DataSet);

    function MouseLineDataSet(context) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MouseLineDataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MouseLineDataSet).call(this, options));
      var defaults = {};
      _this.options = Object.assign(_this.options, defaults, options);
      _this.context = context;
      _this._item = {
        left: null,
        right: null
      };
      return _this;
    }

    _createClass(MouseLineDataSet, [{
      key: "getMouseLineData",
      value: function getMouseLineData(options) {
        var context = this.context;
        var result = {
          lines: [],
          circles: [],
          rects: [],
          texts: [],
          item: {
            display: false
          }
        };
        var data = context.getData();

        if (!data.length) {
          return result;
        }

        var ctype = options.ctype,
            type = options.type,
            left = options.left,
            height = options.height,
            mouseIndex = options.mouseIndex,
            mouseY = options.mouseY,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            period = options.period,
            $colors = options.$colors,
            xAxis = options.xAxis,
            emitter = options.emitter;

        if (!data[mouseIndex]) {
          return result;
        }

        var columns = this.options.columns;
        var xData = context.getData('xData');
        var extent = context.getData('extent');
        var scaleLinear = context.getScale();
        var cols = ['timestamp', 'open', 'high', 'low', 'close', 'volume', 'amount', 'chg', 'percent', 'turnoverrate'];
        var values = cols.map(function (d) {
          return data[mouseIndex] ? data[mouseIndex][columns.indexOf(d)] : 0;
        });
        var lastClose = data[mouseIndex - 1] ? data[mouseIndex - 1][columns.indexOf('close')] : null;
        var item = {
          display: true,
          timestamp: values[0],
          open: values[1],
          high: values[2],
          low: values[3],
          close: values[4],
          volume: values[5],
          amount: values[6],
          chg: values[7],
          percent: values[8],
          turnoverrate: values[9],
          lastClose: lastClose
        }; // TODO

        var xText = item.time = moment(item.timestamp).format('YYYY-MM-DD');
        var yText = ctype === 'volume' ? extent.max - (mouseY - stateHeight) / (figureHeight - stateHeight) * (extent.max - extent.min) : type ? extent.phigh - (mouseY - stateHeight) / (figureHeight - stateHeight) * (extent.phigh - extent.plow) : item.close; // TODO

        yText = ctype === 'volume' ? this.parseVolume(yText) : Number(yText).toFixed(2);
        var xTextWidth = measureText(xText).width;
        var yTextWidth = measureText(yText).width; // console.log(item, item.time, xText)

        var xTextLeft = xData[mouseIndex] - xTextWidth / 2;
        xTextLeft = Math.max(0, xTextLeft);
        xTextLeft = Math.min(figureWidth - xTextWidth, xTextLeft);

        if (xData[mouseIndex] > figureWidth - 150) {
          item.left = left ? left : 30;
          item.right = null;
        } else if (xData[mouseIndex] < 150 + 30) {
          item.left = null;
          item.right = 0;
        } else {
          item.left = this._item.left || (left ? left : 30);
          item.right = this._item.right;
        }

        this._item.left = item.left;
        this._item.right = item.right;
        var yTop = type ? mouseY : scaleLinear(item.close);
        var lines;

        if (emitter !== 'self') {
          lines = [{
            strokeWidth: 1,
            stroke: $colors.text,
            points: [left + xData[mouseIndex], stateHeight, left + xData[mouseIndex], figureHeight],
            dash: [2, 3]
          }];
        } else {
          lines = [{
            strokeWidth: 1,
            stroke: $colors.text,
            points: [left, yTop, left + figureWidth, yTop],
            dash: [2, 3]
          }, {
            strokeWidth: 1,
            stroke: $colors.text,
            points: [left + xData[mouseIndex], stateHeight, left + xData[mouseIndex], figureHeight],
            dash: [2, 3]
          }];
        }

        if (type === false) {
          result.circles.push({
            x: left + xData[mouseIndex],
            y: yTop,
            radius: 3,
            fill: '#fff',
            stroke: $colors.blue,
            strokeWidth: 1
          });
        }

        var rects;

        if (emitter !== 'self') {
          rects = [{
            x: left + xTextLeft - 3,
            y: floor(figureHeight),
            width: xTextWidth + 3,
            height: 16,
            fill: '#eaeaea',
            display: xAxis.display
          }];
        } else {
          rects = [{
            x: left ? left - yTextWidth - 4 : 0,
            y: floor(yTop - 9),
            width: left ? yTextWidth + 4 : yTextWidth + 3,
            height: 16,
            fill: '#eaeaea'
          }, {
            x: left + xTextLeft - 3,
            y: floor(figureHeight),
            width: xTextWidth + 3,
            height: 16,
            fill: '#eaeaea',
            display: xAxis.display
          }];
        }

        var texts;

        if (emitter !== 'self') {
          texts = [{
            x: left + xTextLeft,
            y: figureHeight + 4,
            text: xText,
            fill: $colors.blue,
            fontSize: 11,
            align: 'center',
            verticalAlign: 'middle',
            display: xAxis.display
          }];
        } else {
          texts = [{
            x: left ? left - yTextWidth - 2 : 1,
            y: yTop - 5,
            text: yText,
            fill: $colors.blue,
            fontSize: 11,
            align: 'center',
            verticalAlign: 'middle'
          }, {
            x: left + xTextLeft,
            y: figureHeight + 4,
            text: xText,
            fill: $colors.blue,
            fontSize: 11,
            align: 'center',
            verticalAlign: 'middle',
            display: xAxis.display
          }];
        }

        lines.forEach(function (d, i) {
          result.lines.push(d);
        });
        rects.forEach(function (d, i) {
          if (d.display !== false) {
            result.rects.push(d);
          }
        });
        texts.forEach(function (d, i) {
          if (d.display !== false) {
            result.texts.push(d);
          }
        });
        result.item = item;
        return result;
      }
    }]);

    return MouseLineDataSet;
  }(DataSet);

  var KlineDataSet = /*#__PURE__*/function (_KlineVolumeDataSet) {
    _inherits(KlineDataSet, _KlineVolumeDataSet);

    function KlineDataSet(options) {
      var _this;

      _classCallCheck(this, KlineDataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(KlineDataSet).call(this, options));
      var defaults = {};
      _this.options = Object.assign(_this.options, defaults, options);
      _this.mouseLine = new MouseLineDataSet(_assertThisInitialized(_this), _this.options);
      return _this;
    }

    _createClass(KlineDataSet, [{
      key: "setData",
      value: function setData() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var columns = this.options.columns;

        _get(_getPrototypeOf(KlineDataSet.prototype), "setData", this).call(this, data);

        this._data.data.forEach(function (item, index) {
          _this2._data.closeData[index] = item[columns.indexOf("close")];
          _this2._data.highData[index] = item[columns.indexOf("high")];
          _this2._data.lowData[index] = item[columns.indexOf("low")];
        });
      }
    }, {
      key: "extent",
      value: function extent(options) {
        var _this3 = this;
        var maList = options.maList,
            activeMa = options.activeMa,
            kwidth = options.kwidth,
            startIndex = options.startIndex,
            stopIndex = options.stopIndex,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            paddingY = options.paddingY;
        var closeMaxData = [];
        var closeMinData = [];
        maList.forEach(function (maItem) {
          if (activeMa[maItem]) {
            // `注意`：需要从所有的收盘价中计算均线
            var allCloseData = ma(_this3.allDataSet.getData('closeData'), Number(maItem.replace(/[^\d]/g, "")));
            var closeData = allCloseData.slice(startIndex, stopIndex);
            closeMaxData.push(d3.max(closeData));
            closeMinData.push(d3.min(closeData));
          }
        });
        var highVal = d3.max(this.getData('highData'));
        var lowVal = d3.min(this.getData('lowData'));
        closeMaxData.push(highVal);
        closeMinData.push(lowVal);
        var maxVal = d3.max(closeMaxData);
        var minVal = d3.min(closeMinData);

        if (maxVal === minVal) {
          minVal = .99 * minVal;
        }

        var phigh = maxVal + (maxVal - minVal) / (figureHeight - stateHeight - 2 * paddingY) * paddingY;
        var plow = minVal - (maxVal - minVal) / (figureHeight - stateHeight - 2 * paddingY) * paddingY;
        this._data.extent = {
          high: highVal,
          low: lowVal,
          max: maxVal,
          min: minVal,
          phigh: phigh,
          plow: plow
        };
        return [minVal, maxVal];
      }
    }, {
      key: "getGridData",
      value: function getGridData(options) {
        return _get(_getPrototypeOf(KlineDataSet.prototype), "getGridData", this).call(this, options);
      }
    }, {
      key: "getKlineData",
      value: function getKlineData(options) {
        var columns = this.options.columns;
        var left = options.left,
            kspan = options.kspan,
            kwidth = options.kwidth,
            stateHeight = options.stateHeight,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            sliceType = options.sliceType,
            period = options.period,
            $colors = options.$colors,
            xAxis = options.xAxis;
        var scaleLinear = this.getScale();
        return this.getKlineVolumeData(options, function (data) {
          var item = data.item,
              index = data.index,
              x = data.x,
              open = data.open,
              close = data.close;
          var result = {};
          var opts = {}; // 绘制k线的中线

          var klineOpts = {};

          if (kwidth > 0) {
            opts.strokeWidth = 1;

            if (open <= close) {
              opts.stroke = $colors.red;
            } else if (open > close) {
              opts.stroke = $colors.green;
            }

            if (open == close && data[index - 1]) {
              opts.stroke = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green;
            }

            klineOpts.points = [x, floor(scaleLinear(item[columns.indexOf("high")])), x, floor(scaleLinear(open)), x, floor(scaleLinear(item[columns.indexOf("low")])), x, floor(scaleLinear(close))];
            result.klineOpts = Object.assign({}, opts, klineOpts);
          } // 绘制k线的body


          var rectOpts = {
            x: floor(left + index * kspan),
            y: floor(scaleLinear(Math.max(open, close))),
            width: floor(kwidth),
            height: floor(Math.abs(scaleLinear(open) - scaleLinear(close)))
          };
          var rectFill = sliceType ? $colors.red : '#fff';

          if (kwidth > 1) {
            if (open <= close) {
              rectOpts.fill = rectFill;
            } else {
              rectOpts.fill = $colors.green;
            }

            if (open == close && data[index - 1]) {
              rectOpts.fill = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green;
            }

            result.rectOpts = Object.assign({}, opts, rectOpts);
          }

          if (kwidth <= 0) {
            result.closeLinePoint = [x, floor(scaleLinear(item[columns.indexOf("close")]))];
          }

          return result;
        });
      }
    }, {
      key: "getMaLineData",
      value: function getMaLineData(options) {
        var _this4 = this;

        var result = {
          lines: [],
          texts: [],
          maPosition: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var left = options.left,
            maList = options.maList,
            maLineType = options.maLineType,
            activeMa = options.activeMa,
            kspan = options.kspan,
            kwidth = options.kwidth,
            stateHeight = options.stateHeight,
            $colors = options.$colors,
            startIndex = options.startIndex,
            stopIndex = options.stopIndex,
            currentIndex = options.currentIndex;
        var scaleLinear = this.getScale();
        var maLineTypeName = maLineType == null || kwidth <= 0 ? '选择指标' : '均线';
        var maLineTypeNameWidth = measureText(maLineTypeName).width;
        var maLineTypeNameLeft = maLineTypeNameWidth + 5;
        result.texts.push({
          x: left,
          y: floor((stateHeight - 11) / 2),
          text: maLineTypeName,
          fill: $colors.text,
          fontSize: 11,
          align: 'left',
          verticalAlign: 'middle'
        });

        if (kwidth <= 0 || maLineType == null) {
          return result;
        }

        maList.forEach(function (maItem) {
          var maDays = Number(maItem.replace(/[^\d]/g, '')); // `注意`：需要从所有的收盘价中计算均线

          var allCloseData = ma(_this4.allDataSet.getData('closeData'), maDays);
          var closeData = allCloseData.slice(startIndex, stopIndex);
          var maKeyVal = maItem.toLocaleUpperCase() + ':' + parseAmount(closeData[currentIndex]);
          var maKeyValWidth = measureText(maKeyVal).width;

          if (activeMa[maItem]) {
            var lineOpts = {
              ma: maDays,
              stroke: $colors[maItem],
              strokeWidth: 1,
              points: []
            };
            closeData.forEach(function (d, i) {
              if (scaleLinear(d)) {
                lineOpts.points.push(left + i * kspan + kwidth / 2, scaleLinear(d), left + i * kspan + kwidth / 2, scaleLinear(d));
              }
            });
            result.lines.push(lineOpts);
          }

          var textOpts = {
            x: left + maLineTypeNameLeft,
            y: floor((stateHeight - 11) / 2),
            text: maKeyVal,
            fill: activeMa[maItem] ? $colors[maItem] : $colors[maItem + '_o'],
            fontSize: 11,
            align: 'left',
            verticalAlign: 'middle'
          };
          result.texts.push(textOpts);
          maLineTypeNameLeft += maKeyValWidth + 5;
          result.maPosition.push(maLineTypeNameLeft);
        });
        return result;
      }
    }, {
      key: "getYTickData",
      value: function getYTickData(options) {
        var result = {
          texts: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var left = options.left,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            $colors = options.$colors;
        var extent = this.getData('extent');
        var span = (figureHeight - stateHeight) / 6; // 最高刻度值

        var text = Number(extent.phigh).toFixed(2);
        var xText = left ? left - measureText(text).width - 2 : 1;
        result.texts.push({
          x: xText,
          y: floor(stateHeight),
          text: text,
          fill: $colors.text,
          fontSize: 11,
          align: 'left',
          verticalAlign: 'top'
        });

        for (var i = 1; i < 6; i++) {
          text = Number(extent.phigh - span * i / (figureHeight - stateHeight) * (extent.phigh - extent.plow)).toFixed(2);
          xText = left ? left - measureText(text).width - 2 : 1;
          result.texts.push({
            x: xText,
            y: floor(stateHeight + span * i) - 5,
            text: text,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'middle'
          });
        } // 最低刻度值


        text = Number(extent.plow).toFixed(2);
        xText = left ? left - measureText(text).width - 2 : 1;
        result.texts.push({
          x: xText,
          y: floor(figureHeight) - 10,
          text: text,
          fill: $colors.text,
          fontSize: 11,
          align: 'left',
          verticalAlign: 'bottom'
        });
        return result;
      }
    }, {
      key: "getExtentTipData",
      value: function getExtentTipData(options) {
        var _this5 = this;

        var result = {
          lines: [],
          texts: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var columns = this.options.columns;
        var scaleLinear = this.getScale();
        var left = options.left,
            kspan = options.kspan,
            kwidth = options.kwidth,
            figureWidth = options.figureWidth,
            $colors = options.$colors;

        if (kwidth <= 0) {
          return result;
        }

        var extentList = ['high', 'low'];
        extentList.forEach(function (name) {
          var dataIndex = data.map(function (item) {
            return item[columns.indexOf(name)];
          }).lastIndexOf(_this5._data.extent[name]);
          var x = left + floor(dataIndex * kspan + kwidth / 2);
          var y = scaleLinear(_this5._data.extent[name]);
          var displayReverse = x > figureWidth / 2;
          result.lines.push({
            stroke: $colors.text,
            strokeWidth: 1,
            points: [x, y, x + (displayReverse ? -12 : 16), y]
          });
          result.texts.push({
            x: x + (displayReverse ? -38 : 16),
            y: y - 4,
            text: Number(_this5._data.extent[name]).toFixed(2),
            fill: $colors.text,
            fontSize: 11,
            align: displayReverse ? 'right' : 'left',
            verticalAlign: 'middle'
          });
        });
        return result;
      }
    }, {
      key: "getMouseLineData",
      value: function getMouseLineData(options) {
        return this.mouseLine.getMouseLineData(options);
      }
    }]);

    return KlineDataSet;
  }(KlineVolumeDataSet);

  var klineData = [[1545321600000, 2017321, 27.7244, 28.0214, 27.3384, 27.764, -0.1087, -0.39, 0.98, 56500097.75, null, null, 14.8075, 3.5395, 0.3512, -157.849, 5757086850.9, 251010577, 2103054, 1.02, 11620, null, null, null], [1545580800000, 3957856, 27.7145, 29.3972, 27.6057, 29.3477, 1.5826, 5.7, 1.9, 115737060.38, null, null, 15.6521, 3.7414, 0.3712, -166.8529, 6085476831.7, 251810097, 2103054, 1.02, 0, null, null, null], [1545667200000, 3870451, 29.031, 30.0703, 28.7043, 29.5952, 0.2465, 0.84, 1.88, 114779894.42, null, null, 15.7841, 3.773, 0.3743, -168.2598, 6136787766.2, 246565763, 2103054, 1.02, 0, null, null, null], [1545753600000, 2672283, 29.3972, 30.2781, 29.3477, 29.6447, 0.0503, 0.17, 1.29, 80199412.19, null, null, 15.8105, 3.7793, 0.375, -168.5411, 6147049953.1, 249423081, 2103054, 1.02, 0, null, null, null], [1545840000000, 1867305, 30.0604, 30.1891, 29.1597, 29.3873, -0.2579, -0.87, 0.9, 55686085.97, null, null, 15.6733, 3.7465, 0.3717, -167.078, 6093686581.22, 248601524, 2158997, 1.05, 55943, null, null, null], [1545926400000, 2437453, 29.7535, 29.7931, 28.2985, 28.3876, -0.9991, -3.4, 1.18, 70382141.54, null, null, 15.1401, 3.619, 0.3591, -161.3943, 5886390405.84, 245598096, 2192336, 1.06, 33339, null, null, null], [1546358400000, 2200970, 28.2886, 29.2982, 28.2094, 28.8033, 0.4145, 1.46, 1.07, 64420672, null, null, 14.8805, 3.4121, 0.3463, 48.8882, 5972592775.8, 243002264, 1921262, 0.93, -271074, null, null, null], [1546444800000, 2545893, 29.0013, 29.7832, 28.4965, 28.9023, 0.0979, 0.34, 1.23, 75353473, null, null, 14.9317, 3.4238, 0.3474, 49.0562, 5993117149.6, 242199462, 1743332, 0.84, -177930, null, null, null], [1546531200000, 2376739, 28.2193, 29.1696, 28.2094, 29.0805, 0.1792, 0.62, 1.13, 68869599, null, null, 15.0237, 3.4449, 0.3496, 49.3586, 6030061022.44, 239756053, null, null, null, null, null, null], [1546790400000, 2552085, 29.3477, 29.3477, 28.5064, 29.1498, 0.0698, 0.24, 1.23, 74331304, null, null, 15.0595, 3.4531, 0.3504, 49.4762, 6044428084.1, 239451633, 1454612, 0.7, -288720, null, null, null], [1546876800000, 2110640, 28.9815, 29.0508, 28.5262, 28.932, -0.2186, -0.75, 1.02, 61486418, null, null, 14.947, 3.4273, 0.3478, 49.1066, 5999274461.74, 240971424, 1377780, 0.67, -76832, null, null, null], [1546963200000, 5408244, 28.7835, 30.4761, 28.5757, 29.9416, 1.0097, 3.49, 2.61, 162837863, null, null, 15.4686, 3.5469, 0.3599, 50.8202, 6208623074.5, 244143224, 1048217, 0.51, -329563, null, null, null], [1547049600000, 3568407, 29.8426, 30.1, 29.5457, 30.0505, 0.1078, 0.36, 1.69, 107679961, null, null, 15.5248, 3.5598, 0.3612, 51.005, 6231199885.68, 245137203, 1033417, 0.5, -14800, null, null, null], [1547136000000, 3298072, 29.9812, 30.1, 29.1992, 29.7931, -0.2584, -0.86, 1.58, 98541547, null, null, 15.3919, 3.5293, 0.3582, 50.5682, 6177836513.8, 253887691, 893857, 0.43, -139560, null, null, null], [1547395200000, 3283460, 29.6249, 29.6249, 28.7043, 28.7934, -1.0011, -3.36, 1.59, 96136461, null, null, 14.8754, 3.4109, 0.3461, 48.8714, 5970540338.42, 254955943, 836437, 0.4, -57420, null, null, null], [1547481600000, 3530589, 28.7835, 28.7835, 27.7145, 28.6054, -0.1872, -0.65, 1.69, 100989525, null, null, 14.7782, 3.3886, 0.3439, 48.5522, 5931544028.2, 252290979, 696737, 0.33, -139700, null, null, null], [1547568000000, 1694888, 28.5064, 28.8033, 28.2589, 28.6054, 0, 0, 0.82, 48856965, null, null, 14.7782, 3.3886, 0.3439, 48.5522, 5931544028.2, 257768360, 582285, 0.28, -114452, null, null, null], [1547654400000, 1834755, 28.6054, 28.645, 27.8135, 27.8432, -0.7609, -2.66, 0.87, 52090983, null, null, 14.3845, 3.2983, 0.3347, 47.2586, 5773506349.94, 255185282, 497303, 0.24, -84982, null, null, null], [1547740800000, 1668572, 28.0115, 28.3876, 27.9125, 28.2787, 0.4344, 1.56, 0.8, 47587717, null, null, 14.6095, 3.3499, 0.3399, 47.9978, 5863813594.66, 251839376, 414414, 0.2, -82889, null, null, null], [1548000000000, 1478213, 28.3876, 28.5955, 28.1896, 28.3678, 0.0905, 0.32, 0.71, 42417350, null, null, 14.6555, 3.3605, 0.341, 48.149, 5882285531.08, 245988824, 404914, 0.19, -9500, null, null, null], [1548086400000, 1396235, 28.3975, 28.5064, 28.0313, 28.2391, -0.1277, -0.45, 0.68, 39841504, null, null, 14.589, 3.3452, 0.3395, 47.9306, 5855603845.14, 250203479, 310705, 0.15, -94209, null, null, null], [1548172800000, 1044785, 28.0412, 28.4371, 28.0115, 28.2292, -0.0113, -0.04, 0.5, 29778015, null, null, 14.5839, 3.344, 0.3394, 47.9138, 5853551407.76, 249356034, 310659, 0.15, -46, null, null, null], [1548259200000, 2100485, 28.1501, 28.6845, 28.061, 28.5955, 0.367, 1.3, 1.01, 60549982, null, null, 14.7731, 3.3874, 0.3438, 48.5354, 5929491590.82, 251687260, 265388, 0.12, -45271, null, null, null], [1548345600000, 2216395, 28.5262, 28.7835, 28.0709, 28.2292, -0.366, -1.28, 1.08, 63412863, null, null, 14.5839, 3.344, 0.3394, 47.9138, 5853551407.76, 244422304, 225388, 0.1, -40000, null, null, null], [1548604800000, 1727426, 28.2094, 28.6549, 28.1402, 28.2985, 0.0706, 0.25, 0.84, 49588643, null, null, 14.6197, 3.3523, 0.3402, 48.0314, 5867918469.42, 241851360, 225388, 0.1, 0, null, null, null], [1548691200000, 2710421, 28.1105, 28.1896, 26.3882, 27.1899, -1.1093, -3.92, 1.32, 74440673, null, null, 14.047, 3.2209, 0.3269, 46.1498, 5638045482.86, 242737353, 134106, 0.06, -91282, null, null, null], [1548777600000, 1825720, 26.7544, 27.6848, 26.7544, 27.3087, 0.1196, 0.44, 0.89, 50548064, null, null, 14.1084, 3.235, 0.3283, 46.3514, 5662674731.42, 238246520, 112006, 0.05, -22100, null, null, null], [1548864000000, 1462691, 27.6156, 27.9125, 26.9524, 27.0316, -0.2758, -1.01, 0.7, 40562922, null, null, 13.9652, 3.2022, 0.325, 45.881, 5605206484.78, 238193986, 90506, 0.04, -21500, null, null, null], [1548950400000, 2007370, 27.1701, 27.8036, 27.1701, 27.7838, 0.7515, 2.78, 0.97, 55850070, null, null, 14.3538, 3.2913, 0.334, 47.1578, 5761191725.66, 231224152, 90506, 0.04, 0, null, null, null], [1549814400000, 3869148, 27.8135, 29.5457, 27.8135, 29.4071, 1.6226, 5.84, 1.86, 112939381, null, null, 15.1924, 3.4836, 0.3535, 49.913, 6097791455.98, 227609674, 90506, 0.04, 0, null, null, null], [1549900800000, 3174939, 29.3576, 29.8921, 29.2091, 29.6447, 0.2382, 0.81, 1.53, 95002861, null, null, 15.3152, 3.5117, 0.3564, 50.3162, 6147049953.1, 228219220, 80506, 0.03, -10000, null, null, null], [1549987200000, 7383785, 29.6744, 31.6738, 29.6447, 31.2283, 1.5831, 5.34, 3.55, 230890471, null, null, 16.1333, 3.6993, 0.3754, 53.0042, 6475439933.9, 226488284, 80506, 0.03, 0, null, null, null], [1550073600000, 4146996, 31.2283, 32.1687, 30.7136, 31.5649, 0.3373, 1.08, 2, 131748566, null, null, 16.3072, 3.7392, 0.3795, 53.5754, 6545222804.82, 226519547, 80410, 0.03, -96, null, null, null], [1550160000000, 3079647, 31.5055, 31.8519, 31.0799, 31.258, -0.3062, -0.97, 1.46, 97968643, null, null, 16.1487, 3.7028, 0.3758, 53.0546, 6481597246.04, 226344725, 80410, 0.03, 0, null, null, null], [1550419200000, 4974428, 31.7529, 32.1984, 30.6642, 32.1093, 0.8502, 2.72, 2.38, 159063440, null, null, 16.5885, 3.8037, 0.386, 54.4994, 6658106860.72, 228168805, 80410, 0.03, 0, null, null, null], [1550505600000, 3203856, 32.0202, 32.1489, 31.3966, 31.6045, -0.5041, -1.57, 1.55, 102615763, null, null, 16.3277, 3.7439, 0.3799, 53.6426, 6553432554.34, 220499997, 80410, 0.03, 0, null, null, null], [1550592000000, 2941738, 31.555, 32.1291, 31.0403, 31.4065, -0.1991, -0.63, 1.42, 93712269, null, null, 16.2254, 3.7204, 0.3775, 53.3066, 6512383806.74, 221022791, 80410, 0.03, 0, null, null, null], [1550678400000, 5195136, 31.4263, 32.812, 31.4065, 31.8321, 0.4271, 1.36, 2.52, 168580952, null, null, 16.4453, 3.7708, 0.3827, 54.029, 6600638614.08, 223796343, 79410, 0.03, -1000, null, null, null], [1550764800000, 3501097, 31.9212, 32.6042, 31.4659, 32.525, 0.6939, 2.18, 1.68, 113672928, null, null, 16.8032, 3.8529, 0.391, 55.205, 6744309230.68, 216924837, 79410, 0.03, 0, null, null, null], [1551024000000, 6887706, 33.1486, 34.4155, 33.1288, 34.1087, 1.584, 4.87, 3.33, 236618435, null, null, 17.6214, 4.0405, 0.41, 57.893, 7072699211.48, 212375648, 77410, 0.03, -2000, null, null, null], [1551110400000, 5500271, 34.3858, 34.8114, 33.5346, 34.0097, -0.0989, -0.29, 2.67, 190099069, null, null, 17.5703, 4.0288, 0.4088, 57.725, 7052174837.68, 209543304, 77310, 0.03, -100, null, null, null], [1551196800000, 3888872, 33.8414, 34.3363, 32.6636, 32.9605, -1.0474, -3.08, 1.87, 131294628, null, null, 17.0282, 3.9045, 0.3962, 55.9442, 6834616475.4, 212507134, 77310, 0.03, 0, null, null, null], [1551283200000, 2922200, 33.0496, 33.7524, 32.7526, 33.5049, 0.5439, 1.65, 1.41, 98568730, null, null, 17.3095, 3.969, 0.4028, 56.8682, 6947500531.3, 212298264, 77310, 0.03, 0, null, null, null], [1551369600000, 2701064, 33.5049, 33.7326, 32.7625, 33.5643, 0.0603, 0.18, 1.27, 90585032, null, null, 17.3401, 3.976, 0.4035, 56.969, 6959815155.58, 214339803, 77310, 0.03, 0, null, null, null], [1551628800000, 4233719, 33.6336, 34.4056, 33.2476, 33.5247, -0.0403, -0.12, 2.05, 144952317, null, null, 17.3197, 3.9713, 0.403, 56.9018, 6951605406.06, 217934683, 77310, 0.03, 0, null, null, null], [1551715200000, 3481301, 33.5148, 34.3363, 33.1981, 34.2077, 0.6839, 2.04, 1.66, 119730217, null, null, 17.6725, 4.0523, 0.4112, 58.061, 7093223585.28, 214266430, 77010, 0.03, -300, null, null, null], [1551801600000, 4420555, 34.2275, 34.6234, 33.8513, 34.5145, 0.3079, 0.9, 2.14, 152614476, null, null, 17.8311, 4.0886, 0.4149, 58.5818, 7156849144.06, 219464377, 77010, 0.03, 0, null, null, null], [1551888000000, 5200033, 34.2572, 34.9203, 33.9206, 34.6135, 0.1001, 0.29, 2.52, 180978637, null, null, 17.8822, 4.1003, 0.4161, 58.7498, 7177373517.86, 225742925, 77010, 0.03, 0, null, null, null], [1551974400000, 8963166, 34.2769, 36.1081, 32.6141, 33.0001, -1.613, -4.66, 4.34, 309754680, null, null, 17.0487, 3.9092, 0.3967, 56.0114, 6842826224.92, 247284234, 77010, 0.03, 0, null, null, null], [1552233600000, 4534125, 33.0001, 34.1285, 33.0001, 33.9899, 0.99, 3, 2.19, 154035232, null, null, 17.56, 4.0265, 0.4086, 57.6914, 7048069962.92, 239265610, 77010, 0.03, 0, null, null, null], [1552320000000, 6320937, 34.2769, 35.4251, 34.0592, 34.9401, 0.9517, 2.8, 3.05, 223063256, null, null, 18.0509, 4.139, 0.42, 59.3042, 7245103951.4, 236626833, 76310, 0.03, -700, null, null, null], [1552406400000, 4451359, 34.9401, 35.2371, 33.6633, 33.9008, -1.0377, -2.97, 2.16, 154204781, null, null, 17.514, 4.0159, 0.4075, 57.5402, 7029598026.5, 242188109, 76310, 0.03, 0, null, null, null], [1552492800000, 3260362, 33.8612, 34.5244, 33.6831, 33.8216, -0.078, -0.23, 1.58, 112057892, null, null, 17.4731, 4.0065, 0.4066, 57.4058, 7013178527.46, 243102301, 76310, 0.03, 0, null, null, null], [1552579200000, 2580366, 34.2077, 34.4155, 33.6039, 33.881, 0.0609, 0.18, 1.25, 88303493, null, null, 17.5038, 4.0136, 0.4073, 57.5066, 7025493151.74, 240484788, 76310, 0.03, 0, null, null, null], [1552838400000, 5811623, 33.9107, 35.336, 33.1882, 35.1084, 1.2265, 3.62, 2.82, 203143349, null, null, 18.1379, 4.159, 0.422, 59.5898, 7279995386.86, 232164105, 76310, 0.03, 0, null, null, null], [1552924800000, 3475575, 35.1084, 35.1183, 34.2473, 34.4551, -0.653, -1.86, 1.68, 121243599, null, null, 17.8004, 4.0816, 0.4142, 58.481, 7144534519.78, 244163188, 76310, 0.03, 0, null, null, null], [1553011200000, 2897196, 34.465, 34.8213, 33.9998, 34.7125, 0.2584, 0.75, 1.38, 100656054, null, null, 17.9333, 4.1121, 0.4173, 58.9178, 7197897891.66, 239921150, 76310, 0.03, 0, null, null, null], [1553097600000, 2920690, 34.5442, 34.9896, 34.2077, 34.6729, -0.0382, -0.11, 1.41, 102216292, null, null, 17.9129, 4.1074, 0.4168, 58.8506, 7189688142.14, 247861240, 76310, 0.03, 0, null, null, null], [1553184000000, 3725419, 34.7125, 35.5538, 34.2077, 35.4647, 0.7906, 2.28, 1.79, 131604348, null, null, 18.322, 4.2012, 0.4263, 60.1946, 7353883132.54, 255967232, 76310, 0.03, 0, null, null, null], [1553443200000, 3897133, 34.7422, 35.0985, 34.2967, 34.4452, -1.0178, -2.87, 1.88, 136367264, null, null, 17.7953, 4.0804, 0.4141, 58.4642, 7142482082.4, 245952250, 76310, 0.03, 0, null, null, null], [1553529600000, 2878954, 34.7422, 34.7422, 33.4752, 33.594, -0.8508, -2.47, 1.4, 98668477, null, null, 17.3555, 3.9796, 0.4038, 57.0194, 6965972467.72, 244973700, 76310, 0.03, 0, null, null, null], [1553616000000, 1868355, 33.8018, 33.98, 33.3663, 33.7029, 0.1075, 0.32, 0.91, 63540186, null, null, 17.4117, 3.9925, 0.4052, 57.2042, 6988549278.9, 239943919, 76310, 0.03, 0, null, null, null], [1553702400000, 2083569, 33.5049, 33.8414, 33.01, 33.1189, -0.583, -1.73, 1.01, 70407485, null, null, 17.11, 3.9233, 0.3981, 56.213, 6867455473.48, 240267536, 76310, 0.03, 0, null, null, null], [1553788800000, 3175701, 33.3762, 34.7125, 33.1189, 34.5937, 1.4738, 4.45, 1.53, 109670186, null, null, 17.872, 4.098, 0.4159, 58.7162, 7173268643.1, 239222691, 76310, 0.03, 0, null, null, null], [1554048000000, 4148408, 34.9896, 35.8309, 34.7422, 35.6627, 1.0689, 3.09, 2, 148591642, null, null, 18.8065, 4.0691, 0.417, 51.2303, 7394931880.14, 230625858, 76310, 0.03, 0, null, null, null], [1554134400000, 3329674, 36.0784, 36.0982, 35.0985, 35.7518, 0.0892, 0.25, 1.6, 119475019, null, null, 18.8534, 4.0793, 0.4181, 51.3583, 7413403816.56, 233963239, 76110, 0.03, -200, null, null, null], [1554220800000, 3007189, 35.7518, 35.9794, 35.3459, 35.6627, -0.0894, -0.25, 1.44, 108113503, null, null, 18.8065, 4.0691, 0.417, 51.2303, 7394931880.14, 233008531, 76110, 0.03, 0, null, null, null], [1554307200000, 3703747, 36.2467, 36.504, 35.6627, 36.2071, 0.5456, 1.53, 1.78, 134814062, null, null, 19.0935, 4.1312, 0.4234, 52.0124, 7507815936.04, 241796887, 75610, 0.03, -500, null, null, null], [1554652800000, 4393913, 36.1972, 36.217, 34.465, 34.7718, -1.4337, -3.96, 2.12, 156076112, null, null, 18.3367, 3.9675, 0.4066, 49.9507, 7210212515.94, 243082078, 75610, 0.03, 0, null, null, null], [1554739200000, 2538648, 34.5244, 35.2668, 34.5145, 34.9401, 0.1669, 0.48, 1.23, 89528600, null, null, 18.4254, 3.9867, 0.4086, 50.1924, 7245103951.4, 242552919, 73610, 0.03, -2000, null, null, null], [1554825600000, 2337518, 35.0094, 35.2173, 34.2473, 34.9599, 0.021, 0.06, 1.13, 81917807, null, null, 18.4359, 3.9889, 0.4088, 50.2208, 7249208826.16, 236001137, 72610, 0.03, -1000, null, null, null], [1554912000000, 1732295, 34.9599, 35.1678, 34.2077, 34.3066, -0.6538, -1.87, 0.83, 60414225, null, null, 18.0914, 3.9144, 0.4012, 49.2824, 7113747959.08, 236782873, 72610, 0.03, 0, null, null, null], [1554998400000, 1680413, 34.5442, 35.0193, 34.0394, 34.4749, 0.1681, 0.49, 0.81, 58830163, null, null, 18.1801, 3.9336, 0.4032, 49.5241, 7148639394.54, 231878313, 72610, 0.03, 0, null, null, null], [1555257600000, 2489553, 35.0094, 35.1876, 33.9008, 33.9701, -0.5033, -1.46, 1.2, 86889665, null, null, 17.9139, 3.876, 0.3973, 48.7989, 7043965088.16, 234250749, null, null, null, null, null, null], [1555344000000, 1734331, 33.9701, 34.7916, 33.7524, 34.6927, 0.7235, 2.13, 0.83, 60148312, null, null, 18.2949, 3.9584, 0.4057, 49.8369, 7193793016.9, 235677220, null, null, null, null, null, null], [1555430400000, 2366043, 34.9203, 35.3162, 34.465, 35.0391, 0.3469, 1, 1.15, 83724086, null, null, 18.4776, 3.998, 0.4098, 50.3346, 7265628325.2, 237424954, null, null, null, null, null, null], [1555516800000, 2249855, 34.9401, 35.1381, 34.4452, 34.5343, -0.5046, -1.44, 1.09, 78790507, null, null, 18.2114, 3.9404, 0.4038, 49.6094, 7160954018.82, 240366750, null, null, null, null, null, null], [1555603200000, 2363849, 34.5244, 34.851, 33.9503, 34.7422, 0.2072, 0.6, 1.13, 82393573, null, null, 18.321, 3.9641, 0.4063, 49.908, 7204055203.8, 255202166, null, null, null, null, null, null], [1555862400000, 4303283, 35.0787, 35.0787, 33.0298, 33.3465, -1.3967, -4.02, 2.08, 147286099, null, null, 17.5851, 3.8049, 0.39, 47.9031, 6914661533.22, 249750348, null, null, null, null, null, null], [1555948800000, 2235301, 33.6138, 33.8513, 33.2574, 33.4257, 0.08, 0.24, 1.08, 75886755, null, null, 17.6268, 3.8139, 0.3909, 48.0169, 6931081032.26, 246208103, null, null, null, null, null, null], [1556035200000, 2651208, 33.4257, 33.6435, 32.3567, 33.5247, 0.1003, 0.3, 1.28, 88703741, null, null, 17.679, 3.8252, 0.392, 48.1591, 6951605406.06, 248077690, null, null, null, null, null, null], [1556121600000, 3661924, 33.5148, 33.9107, 32.4161, 32.4458, -1.0795, -3.22, 1.76, 122189837, null, null, 17.1101, 3.7021, 0.3794, 46.6092, 6727889731.64, 251772727, null, null, null, null, null, null], [1556208000000, 6346123, 32.4359, 32.4359, 29.3972, 30.2187, -2.2257, -6.86, 3.08, 196098802, null, null, 15.9356, 3.448, 0.3534, 43.41, 6266091321.14, 243649500, null, null, null, null, null, null], [1556467200000, 3360919, 30.2385, 31.6045, 29.8624, 30.8126, 0.5953, 1.97, 1.62, 104503857, null, null, 16.2488, 3.5157, 0.3603, 44.2631, 6389237563.94, 236459956, null, null, null, null, null, null], [1556553600000, 4068315, 30.1792, 30.288, 29.6051, 29.9713, -0.8412, -2.73, 1.97, 122780512, null, null, 15.8052, 3.4197, 0.3505, 43.0545, 6214780386.64, 237453597, null, null, null, null, null, null], [1557072000000, 6546421, 29.1003, 29.1003, 26.9722, 27.6552, -2.3168, -7.73, 3.18, 182099108, null, null, 14.5838, 3.1555, 0.3234, 39.7273, 5734510039.72, 234124530, null, null, null, null, null, null], [1557158400000, 4699493, 27.3087, 28.1995, 27.3087, 27.7145, 0.0581, 0.21, 2.28, 131915814, null, null, 14.6151, 3.1622, 0.3241, 39.8126, 5746824664, 238181180, null, null, null, null, null, null], [1557244800000, 3424678, 27.4176, 27.5166, 26.5466, 27.1207, -0.5931, -2.14, 1.65, 93819926, null, null, 14.3019, 3.0945, 0.3172, 38.9595, 5623678421.2, 241161402, null, null, null, null, null, null], [1557331200000, 2474795, 26.7742, 27.4869, 26.7247, 27.1602, 0.0407, 0.15, 1.19, 67927610, null, null, 14.3228, 3.099, 0.3176, 39.0164, 5631888170.72, 237819060, null, null, null, null, null, null], [1557417600000, 4899652, 27.279, 28.2094, 26.5466, 27.6848, 0.5242, 1.93, 2.37, 135807850, null, null, 14.5994, 3.1589, 0.3237, 39.77, 5740667351.86, 239265500, null, null, null, null, null, null], [1557676800000, 3949976, 26.9722, 27.279, 26.7346, 26.9425, -0.7419, -2.68, 1.91, 107846724, null, null, 14.2079, 3.0741, 0.3151, 38.7036, 5586734548.36, 245129345, null, null, null, null, null, null], [1557763200000, 3283093, 26.5268, 26.9425, 26.4179, 26.5763, -0.3664, -1.36, 1.59, 88501742, null, null, 14.0148, 3.0324, 0.3108, 38.1775, 5510794365.3, 248736298, null, null, null, null, null, null], [1557849600000, 3112179, 26.8237, 26.9821, 26.5268, 26.8732, 0.2976, 1.12, 1.49, 84055817, null, null, 14.1714, 3.0662, 0.3143, 38.6041, 5572367486.7, 255861219, null, null, null, null, null, null], [1557936000000, 3668481, 26.9029, 27.2493, 26.7544, 27.1306, 0.258, 0.96, 1.77, 100242344, null, null, 14.3071, 3.0956, 0.3173, 38.9737, 5625730858.58, 260473381, null, null, null, null, null, null], [1558022400000, 3538663, 27.2889, 27.2889, 26.0616, 26.121, -1.0092, -3.72, 1.71, 94945822, null, null, 13.7747, 2.9804, 0.3055, 37.5234, 5416382245.82, 265234203, null, null, null, null, null, null], [1558281600000, 3556427, 26.121, 26.121, 24.755, 25.4083, -0.7131, -2.73, 1.72, 90524000, null, null, 13.3989, 2.8991, 0.2971, 36.4997, 5268606754.46, 265502111, null, null, null, null, null, null], [1558368000000, 2435666, 25.2895, 26.0715, 25.24, 25.9329, 0.5234, 2.06, 1.17, 63420619, null, null, 13.6755, 2.959, 0.3033, 37.2533, 5377385935.6, 263672644, null, null, null, null, null, null], [1558454400000, 1672336, 25.9131, 26.1902, 25.537, 25.6854, -0.2464, -0.95, 0.8, 43708163, null, null, 13.545, 2.9307, 0.3004, 36.8978, 5326075001.1, 261570866, null, null, null, null, null, null], [1558540800000, 2004058, 25.5964, 25.9032, 25.2499, 25.438, -0.2466, -0.96, 0.97, 51795896, null, null, 13.4145, 2.9025, 0.2975, 36.5423, 5274764066.6, 259448859, null, null, null, null, null, null], [1558627200000, 1593301, 25.2598, 25.6854, 25.2301, 25.2598, -0.1781, -0.7, 0.77, 40880082, null, null, 13.3206, 2.8822, 0.2954, 36.2864, 5237820193.76, 262111038, null, null, null, null, null, null], [1558886400000, 2425153, 25.3291, 26.022, 24.9629, 26.0022, 0.7426, 2.94, 1.17, 63116172, null, null, 13.7121, 2.9669, 0.3041, 37.3528, 5391752997.26, 260869487, null, null, null, null, null, null], [1558972800000, 2118599, 26.0319, 26.1803, 25.7151, 25.8735, -0.1274, -0.49, 1.02, 55552180, null, null, 13.6442, 2.9522, 0.3026, 37.168, 5365071311.32, 262277928, null, null, null, null, null, null], [1559059200000, 1998827, 25.7349, 26.2298, 25.5865, 25.7745, -0.0983, -0.38, 0.97, 52241749, null, null, 13.592, 2.9409, 0.3014, 37.0258, 5344546937.52, 266512285, null, null, null, null, null, null], [1559145600000, 1913456, 25.7646, 25.7844, 25.24, 25.4677, -0.3067, -1.19, 0.92, 49140138, null, null, 13.4302, 2.9059, 0.2978, 36.585, 5280921378.74, 263606026, null, null, null, null, null, null], [1559232000000, 1535464, 25.6854, 25.8834, 25.4875, 25.5469, 0.079, 0.31, 0.74, 39805654, null, null, 13.472, 2.9149, 0.2987, 36.6987, 5297340877.78, 264319256, null, null, null, null, null, null], [1559491200000, 2229268, 25.5469, 25.5865, 24.9728, 25.0718, -0.4752, -1.86, 1.08, 56713657, null, null, 13.2214, 2.8607, 0.2932, 36.0162, 5198823883.54, 263793923, null, null, null, null, null, null], [1559577600000, 2414087, 25.3291, 25.3291, 24.7451, 24.8441, -0.2282, -0.91, 1.17, 60676911, null, null, 13.1014, 2.8347, 0.2905, 35.6892, 5151617823.8, 266043814, null, null, null, null, null, null], [1559664000000, 3136390, 24.9926, 25.1213, 24.3492, 24.3591, -0.4844, -1.95, 1.51, 77966783, null, null, 12.8456, 2.7794, 0.2849, 34.9925, 5051048392.18, 270801258, null, null, null, null, null, null], [1559750400000, 3277358, 24.63, 24.65, 23.3, 23.5, -0.86, -3.53, 1.59, 78088305, null, null, 12.2662, 2.7311, 0.272, 33.4142, 4823227843, 273860349, null, null, null, null, null, null], [1560096000000, 3235346, 23.77, 23.83, 23.43, 23.59, 0.09, 0.38, 1.57, 76486856, null, null, 12.3132, 2.7416, 0.2731, 33.5422, 4841699779.42, 279470750, null, null, null, null, null, null], [1560182400000, 4239712, 23.62, 24.85, 23.52, 24.85, 1.26, 5.34, 2.04, 103161827, null, null, 12.9709, 2.888, 0.2876, 35.3337, 5100306889.3, 289876569, null, null, null, null, null, null], [1560268800000, 3148948, 24.83, 25.09, 24.46, 24.5, -0.35, -1.41, 1.53, 77858186, null, null, 12.7882, 2.8474, 0.2836, 34.8361, 5028471581, 284521293, null, null, null, null, null, null], [1560355200000, 1995488, 24.51, 24.88, 24.42, 24.7, 0.2, 0.82, 0.97, 49149108, null, null, 12.8926, 2.8706, 0.2859, 35.1204, 5069520328.6, 286405113, null, null, null, null, null, null], [1560441600000, 2020493, 24.73, 24.87, 24.15, 24.18, -0.52, -2.11, 0.96, 49425509, null, null, 12.6212, 2.8102, 0.2799, 34.3811, 4962793584.84, 281936542, null, null, null, null, null, null], [1560700800000, 4032084, 24.2, 24.67, 23.48, 23.69, -0.49, -2.03, 1.95, 95964823, null, null, 12.3654, 2.7532, 0.2742, 33.6843, 4862224153.22, 291451125, 241584, 0.11, null, null, null, null], [1560787200000, 3836690, 23.79, 24.35, 23.62, 23.95, 0.26, 1.1, 1.86, 91813277, null, null, 12.5011, 2.7834, 0.2772, 34.054, 4915587525.1, 290975604, 790187, 0.38, 548603, null, null, null], [1560873600000, 5112165, 24.5, 24.86, 24.4, 24.48, 0.53, 2.21, 2.47, 125877474, null, null, 12.7777, 2.845, 0.2834, 34.8076, 5024366706.24, 293650314, 1555207, 0.75, 765020, null, null, null], [1560960000000, 4810624, 24.45, 25.21, 24.3, 25.19, 0.71, 2.9, 2.32, 119724287, null, null, 13.1483, 2.9275, 0.2916, 35.8172, 5170089760.22, 293501941, 1640795, 0.79, 85588, null, null, null], [1561046400000, 5233396, 25.4, 26, 25.32, 25.5, 0.31, 1.23, 2.53, 134041247, null, null, 13.3102, 2.9636, 0.2952, 36.2579, 5233715319, 288998950, 1780979, 0.86, 140184, null, null, null], [1561305600000, 10164974, 26, 27.53, 26, 27.05, 1.55, 6.08, 4.95, 273564770, null, null, 14.1192, 3.1437, 0.3131, 38.4619, 5551843112.9, 291262212, 1697017, 0.82, -83962, null, null, null], [1561392000000, 5648334, 27.22, 27.22, 26.3, 26.77, -0.28, -1.04, 2.75, 150306284, null, null, 13.9731, 3.1112, 0.3099, 38.0637, 5494374866.26, 292475657, 1801876, 0.87, 104859, null, null, null], [1561478400000, 3771565, 26.58, 26.92, 26.43, 26.75, -0.02, -0.07, 1.84, 100570329, null, null, 13.9626, 3.1088, 0.3096, 38.0353, 5490269991.5, 294160254, 1727117, 0.84, -74759, null, null, null], [1561564800000, 4675713, 26.75, 26.94, 26.55, 26.64, -0.11, -0.41, 2.26, 124902852, null, null, 13.9052, 3.0961, 0.3084, 37.8789, 5467693180.32, 296686485, 1592117, 0.77, -135000, null, null, null], [1561651200000, 5365560, 26.5, 26.51, 25.75, 26.03, -0.61, -2.29, 2.6, 139904122, null, null, 13.5868, 3.0252, 0.3013, 37.0115, 5342494500.14, 297497294, 1592117, 0.77, 0, null, null, null], [1561910400000, 7603313, 26.62, 27.49, 26.42, 27.32, 1.29, 4.96, 3.68, 205627598, null, null, 12.7926, 3.0156, 0.307, 6.0553, 5607258922.16, 297531264, 1592117, 0.77, 0, null, null, null], [1561996800000, 4637472, 27.44, 27.44, 26.8, 26.93, -0.39, -1.43, 2.24, 125470162, null, null, 12.61, 2.9726, 0.3026, 5.9689, 5527213864.34, 299475803, 1506119, 0.73, -85998, null, null, null], [1562083200000, 3627610, 26.66, 26.78, 26.19, 26.3, -0.63, -2.34, 1.77, 95974961, null, null, 12.315, 2.9031, 0.2955, 5.8292, 5397910309.4, 298607483, 1587199, 0.77, 81080, null, null, null], [1562169600000, 2978819, 26.3, 26.69, 25.94, 26.14, -0.16, -0.61, 1.44, 78131220, null, null, 12.2401, 2.8854, 0.2937, 5.7938, 5365071311.32, 301992432, 1595999, 0.77, 8800, null, null, null], [1562256000000, 3813583, 26, 26.34, 25.66, 26.19, 0.05, 0.19, 1.86, 99201873, null, null, 12.2635, 2.8909, 0.2943, 5.8049, 5375333498.22, 303133818, 1344635, 0.65, -251364, null, null, null], [1562515200000, 4203522, 26.2, 26.2, 25, 25.17, -1.02, -3.89, 2.05, 106639238, null, null, 11.7859, 2.7783, 0.2828, 5.5788, 5165984885.46, 301596503, 943717, 0.45, -400918, null, null, null], [1562601600000, 2329089, 25.11, 25.44, 25, 25.32, 0.15, 0.6, 1.13, 58762005, null, null, 11.8561, 2.7949, 0.2845, 5.612, 5196771446.16, 305900345, 774081, 0.37, -169636, null, null, null], [1562688000000, 2730584, 25.38, 25.45, 24.8, 24.83, -0.49, -1.94, 1.33, 68416073, null, null, 11.6267, 2.7408, 0.279, 5.5034, 5096202014.54, 305834164, 710966, 0.34, -63115, null, null, null], [1562774400000, 2317438, 24.9, 25.39, 24.89, 25.01, 0.18, 0.72, 1.13, 58210807, null, null, 11.711, 2.7607, 0.281, 5.5433, 5133145887.38, 301488681, 783866, 0.38, 72900, null, null, null], [1562860800000, 1810690, 25.07, 25.34, 24.88, 25.21, 0.2, 0.8, 0.88, 45592025, null, null, 11.8046, 2.7827, 0.2833, 5.5876, 5174194634.98, 301649454, 675013, 0.32, -108853, null, null, null], [1563120000000, 3645180, 25.24, 25.24, 24.4, 25.05, -0.16, -0.63, 1.78, 90446556, null, null, 11.7297, 2.7651, 0.2815, 5.5522, 5141355636.9, 303314494, 833149, 0.4, 158136, null, null, null], [1563206400000, 1929412, 25.06, 25.16, 24.78, 25.11, 0.06, 0.24, 0.93, 48243355, null, null, 11.7578, 2.7717, 0.2822, 5.5655, 5153670261.18, 301759648, 899241, 0.43, 66092, null, null, null], [1563292800000, 2163095, 25.09, 25.27, 24.95, 25.02, -0.09, -0.36, 1.05, 54247419, null, null, 11.7157, 2.7618, 0.2811, 5.5455, 5135198324.76, 298905933, 747749, 0.36, -151492, null, null, null], [1563379200000, 2494095, 24.89, 24.9, 24.43, 24.44, -0.58, -2.32, 1.22, 61288135, null, null, 11.4441, 2.6977, 0.2746, 5.417, 5016156956.72, 300081325, 673649, 0.32, -74100, null, null, null], [1563465600000, 1986208, 24.65, 24.79, 24.36, 24.52, 0.08, 0.33, 0.97, 48855118, null, null, 11.4815, 2.7066, 0.2755, 5.4347, 5032576455.76, 299507021, 664849, 0.32, -8800, null, null, null], [1563724800000, 1984002, 24.42, 24.69, 23.91, 24.13, -0.39, -1.59, 0.97, 48046166, null, null, 11.2989, 2.6635, 0.2711, 5.3483, 4952531397.94, 298883032, 455172, 0.22, -209677, null, null, null], [1563811200000, 1420807, 24.15, 24.42, 24.12, 24.42, 0.29, 1.2, 0.69, 34463670, null, null, 11.4347, 2.6955, 0.2744, 5.4125, 5012052081.96, 297834550, 423972, 0.2, -31200, null, null, null], [1563897600000, 3445472, 26.86, 26.86, 26.86, 26.86, 2.44, 9.99, 1.68, 92545377, null, null, 12.5773, 2.9649, 0.3018, 5.9534, 5512846802.68, 321723357, 423472, 0.2, -500, null, null, null], [1563984000000, 16477647, 29, 29.55, 28.3, 29.55, 2.69, 10.01, 8.03, 482727350, null, null, 13.8368, 3.2618, 0.3321, 6.5496, 6064952457.9, 341388377, 359302, 0.17, -64170, null, null, null], [1564070400000, 25801569, 31.6, 31.8, 30, 30.5, 0.95, 3.21, 12.57, 796885174, null, null, 14.2817, 3.3667, 0.3427, 6.7601, 6259934009, 341523864, 263299, 0.12, -96003, null, null, null], [1564329600000, 18209015, 31.58, 31.93, 30.88, 30.95, 0.45, 1.48, 8.87, 571386387, null, null, 14.4924, 3.4163, 0.3478, 6.8599, 6352293691.1, 368255746, 213099, 0.1, -50200, null, null, null], [1564416000000, 14764387, 31.35, 32.3, 31.11, 31.54, 0.59, 1.91, 7.19, 466810819, null, null, 14.7687, 3.4815, 0.3544, 6.9907, 6473387496.52, 373660568, 373199, 0.18, 160100, null, null, null], [1564502400000, 15979402, 31.69, 33.78, 31.17, 33.35, 1.81, 5.74, 7.79, 518393165, null, null, 15.6162, 3.6812, 0.3748, 7.3918, 6844878662.3, 388150196, 231221, 0.11, -141978, null, null, null], [1564588800000, 14069312, 32.83, 33.76, 32.48, 33.19, -0.16, -0.48, 6.85, 465362841, null, null, 15.5413, 3.6636, 0.373, 7.3564, 6812039664.22, 359954455, 159899, 0.07, -71322, null, null, null], [1564675200000, 15487136, 31.8, 33.36, 30.95, 32.9, -0.29, -0.87, 7.55, 497130994, null, null, 15.4055, 3.6316, 0.3697, 7.2921, 6752518980.2, 339463898, 270099, 0.13, 110200, null, null, null], [1564934400000, 11679854, 32.36, 33.09, 31.62, 31.8, -1.1, -3.34, 5.69, 378644768, null, null, 14.8904, 3.5102, 0.3573, 7.0483, 6526750868.4, 333300967, 304599, 0.14, 34500, null, null, null], [1565020800000, 11411327, 30.92, 32.2, 30.41, 31.72, -0.08, -0.25, 5.56, 357044976, null, null, 14.853, 3.5013, 0.3564, 7.0306, 6510331369.36, 332461817, 583299, 0.28, 278700, null, null, null], [1565107200000, 10614535, 31.7, 31.88, 30.28, 30.33, -1.39, -4.38, 5.17, 328437515, null, null, 14.2021, 3.3479, 0.3408, 6.7225, 6225042573.54, 323500562, 662799, 0.32, 79500, null, null, null], [1565193600000, 10244014, 30.63, 31.43, 30.4, 30.91, 0.58, 1.91, 4.99, 317576936, null, null, 14.4737, 3.4119, 0.3473, 6.851, 6344083941.58, 300418417, 763893, 0.37, 101094, null, null, null], [1565280000000, 19867908, 31.59, 34, 31.29, 33.8, 2.89, 9.35, 9.68, 664914385, null, null, 15.8269, 3.7309, 0.3798, 7.4916, 6937238344.4, 299864072, 710411, 0.34, -53482, null, null, null], [1565539200000, 19304199, 33.49, 35.88, 33.1, 35.32, 1.52, 4.5, 9.41, 663449284, null, null, 16.5387, 3.8987, 0.3969, 7.8285, 7249208826.16, 335752344, 696846, 0.33, -13565, null, null, null], [1565625600000, 19658295, 35.21, 38.5, 34.77, 38.2, 2.88, 8.15, 9.58, 722150846, null, null, 17.8872, 4.2166, 0.4293, 8.4668, 7840310791.6, 327449519, 763233, 0.37, 66387, null, null, null], [1565712000000, 21761646, 39.01, 40.98, 37.55, 38.09, -0.11, -0.29, 10.6, 854442182, null, null, 17.8357, 4.2045, 0.428, 8.4424, 7817733980.42, 374580788, 844357, 0.41, 81124, null, null, null], [1565798400000, 15624059, 37.52, 39.28, 37.38, 38.71, 0.62, 1.63, 7.61, 596337491, null, null, 18.126, 4.2729, 0.435, 8.5798, 7944985097.98, 367528374, 523057, 0.25, -321300, null, null, null], [1565884800000, 11447475, 38.59, 39, 37.79, 37.81, -0.9, -2.32, 5.58, 437861886, null, null, 17.7046, 4.1736, 0.4249, 8.3804, 7760265733.78, 357922418, 525657, 0.25, 2600, null, null, null], [1566144000000, 17486225, 38.51, 40.08, 37.86, 39.13, 1.32, 3.49, 8.52, 681965080, null, null, 18.3227, 4.3193, 0.4397, 8.6729, 8031187467.94, 389816549, 413958, 0.2, -111699, null, null, null], [1566230400000, 11538063, 38.45, 39.66, 37.91, 38.38, -0.75, -1.92, 5.62, 446392065, null, null, 17.9715, 4.1727, 0.4313, 8.5067, 7877254664.44, 356947294, 998775, 0.48, 584817, null, null, null], [1566316800000, 12140440, 38.55, 39.5, 37.61, 39.5, 1.12, 2.92, 5.92, 468622289, null, null, 18.496, 4.2945, 0.4439, 8.7549, 8107127651, 367571031, 433587, 0.21, -565188, null, null, null], [1566403200000, 16301793, 39.49, 42.2, 39.18, 42, 2.5, 6.33, 7.94, 670117754, null, null, 19.6666, 4.5663, 0.472, 9.3091, 8620236996, 391831760, 231424, 0.11, -202163, null, null, null], [1566489600000, 14036068, 41.38, 41.6, 39.6, 40.05, -1.95, -4.64, 6.84, 567238048, null, null, 18.7535, 4.3543, 0.45, 8.8768, 8220011706.9, 395618418, 319109, 0.15, 87685, null, null, null], [1566748800000, 10383382, 38.6, 39.45, 38.3, 38.81, -1.24, -3.1, 5.06, 403108705, null, null, 18.1729, 4.2195, 0.4361, 8.602, 7965509471.78, 454904617, 441059, 0.21, 121950, null, null, null], [1566835200000, 9515769, 39.01, 39.97, 38.65, 38.89, 0.08, 0.21, 4.64, 372387780, null, null, 18.2103, 4.2282, 0.437, 8.6197, 7981928970.82, 455064323, 151224, 0.07, -289835, null, null, null], [1566921600000, 8406477, 38.3, 39.2, 38.15, 38.2, -0.69, -1.77, 4.1, 324482951, null, null, 17.8872, 4.1532, 0.4293, 8.4668, 7840310791.6, 450460415, 290032, 0.14, 138808, null, null, null], [1567008000000, 8435726, 38, 39.01, 37.83, 38.2, 0, 0, 4.11, 324184253, null, null, 17.8872, 4.1532, 0.4293, 8.4668, 7840310791.6, 433808448, 770617, 0.37, 480585, null, null, null], [1567094400000, 12147558, 38.18, 38.85, 36.5, 36.83, -1.37, -3.59, 5.92, 455493707, null, null, 17.2457, 4.0042, 0.4139, 8.1632, 7559126870.54, 420473292, 1253360, 0.61, 482743, null, null, null], [1567353600000, 9823516, 37.22, 38.16, 36.72, 37.75, 0.92, 2.5, 4.79, 367793606, null, null, 17.6765, 4.1042, 0.4242, 8.3671, 7747951109.5, 394546471, 879785, 0.42, -373575, null, null, null], [1567440000000, 11429154, 37.77, 38.97, 36.8, 38.96, 1.21, 3.21, 5.57, 434273247, null, null, 18.2431, 4.2358, 0.4378, 8.6353, 7996296032.48, 399605219, 944155, 0.46, 64370, null, null, null], [1567526400000, 8956099, 38.97, 39.19, 37.67, 38.22, -0.74, -1.9, 4.36, 342540945, null, null, 17.8966, 4.1553, 0.4295, 8.4712, 7844415666.36, 400828042, 513647, 0.25, -430508, null, null, null], [1567612800000, 13432605, 38.22, 40.1, 38.05, 38.65, 0.43, 1.13, 6.54, 523668653, null, null, 18.0979, 4.2021, 0.4343, 8.5665, 7932670473.7, 427405330, 642522, 0.31, 128875, null, null, null], [1567699200000, 9071027, 38.55, 39.58, 38.06, 38.42, -0.23, -0.6, 4.42, 351720473, null, null, 17.9902, 4.1771, 0.4317, 8.5156, 7885464413.96, 422779451, 682951, 0.33, 40429, null, null, null], [1567958400000, 13637255, 38.58, 41.1, 38.58, 41, 2.58, 6.72, 6.64, 542155003, null, null, 19.1983, 4.5257, 0.4607, 9.0874, 8414993258, 392564009, 1004049, 0.48, 321098, null, null, null], [1568044800000, 10807622, 40.9, 40.95, 38.87, 39.3, -1.7, -4.15, 5.27, 427899544, null, null, 18.4023, 4.2734, 0.4416, 8.7106, 8066078903.4, 389616854, 509515, 0.24, -494534, null, null, null], [1568131200000, 8931189, 39.4, 39.55, 37.71, 37.73, -1.57, -3.99, 4.35, 342983411, null, null, 17.6671, 4.1027, 0.424, 8.3626, 7743846234.74, 398643182, 700915, 0.34, 191400, null, null, null], [1568217600000, 4686826, 37.73, 38.34, 37.26, 38.26, 0.53, 1.4, 2.28, 177603944, null, null, 18.0859, 4.1999, 0.434, 8.5608, 7927385455.88, 396191806, 605015, 0.29, -95900, null, null, null], [1568563200000, 18717746, 38.6, 41.99, 38.58, 41.05, 2.79, 7.29, 9.12, 759279619, null, null, 19.4047, 4.5062, 0.4657, 9.1851, 8505467144.9, 368786605, 1740335, 0.83, 1135320, null, null, null], [1568649600000, 20059383, 41.35, 43.11, 41.18, 42.79, 1.74, 4.24, 9.77, 848400089, null, null, 20.2273, 4.6972, 0.4854, 9.5744, 8865991209.02, 353185785, 1530067, 0.73, -210268, null, null, null], [1568736000000, 13313909, 42.79, 42.79, 40.67, 41.95, -0.84, -1.96, 6.49, 553924077, null, null, 19.8302, 4.605, 0.4759, 9.3865, 8691945109.1, 384462708, 881749, 0.42, -648318, null, null, null], [1568822400000, 15919012, 42.2, 44.84, 41.42, 44.33, 2.38, 5.67, 7.76, 690952640, null, null, 20.9552, 4.8662, 0.5029, 9.919, 9185075725.54, 379673221, 640438, 0.3, -241311, null, null, null], [1568908800000, 16834788, 43.99, 47.08, 43.53, 44.48, 0.15, 0.34, 8.2, 759110174, null, null, 21.0261, 4.8827, 0.5046, 9.9526, 9216155386.24, 365640151, 774347, 0.37, 133909, null, null, null], [1569168000000, 11321856, 44.28, 45.44, 43.3, 44.49, 0.01, 0.02, 5.52, 504790312, null, null, 21.0309, 4.8838, 0.5047, 9.9548, 9218227363.62, 363089379, 1388329, 0.67, 613982, null, null, null], [1569254400000, 10621579, 44.9, 45.2, 43.86, 44.19, -0.3, -0.67, 5.18, 472879645, null, null, 20.8891, 4.8509, 0.5013, 9.8877, 9156068042.22, 352683078, 1705307, 0.82, 316978, null, null, null], [1569340800000, 10556442, 43.85, 44, 42.2, 43.22, -0.97, -2.2, 5.14, 454496019, null, null, 20.4305, 4.7444, 0.4903, 9.6707, 8955086236.36, 339911647, 2164690, 1.04, 459383, null, null, null], [1569427200000, 13117655, 43.55, 43.57, 39.24, 39.47, -3.75, -8.68, 6.39, 534853033, null, null, 18.6579, 4.3327, 0.4477, 8.8316, 8178094718.86, 328361090, 2176542, 1.05, 11852, null, null, null], [1569513600000, 10503795, 39.65, 41.9, 39.65, 41.3, 1.83, 4.64, 5.12, 430615536, null, null, 19.5229, 4.5336, 0.4685, 9.241, 8557266579.4, 316862225, 2777856, 1.34, 601314, null, null, null], [1569772800000, 6892155, 41.99, 41.99, 39.9, 40.75, -0.55, -1.33, 3.36, 282017379, null, null, 19.2629, 4.4733, 0.4623, 9.118, 8443307823.5, 314634082, 2583356, 1.24, -194500, null, null, null], [1570464000000, 7727752, 41.4, 41.78, 39.36, 39.84, -0.91, -2.23, 3.77, 312966108, null, null, 18.8328, 4.3734, 0.4519, 8.9144, 8254757881.92, 340170242, 2299956, 1.11, -283400, null, null, null], [1570550400000, 8988376, 39.31, 40.13, 38.41, 39.77, -0.07, -0.18, 4.38, 353519849, null, null, 18.7997, 4.3657, 0.4512, 8.8987, 8240254040.26, 329183960, 2501652, 1.2, 201696, null, null, null], [1570636800000, 10005736, 40.28, 41.62, 39.69, 40.85, 1.08, 2.72, 4.88, 407255562, null, null, 19.31, 4.509, 0.46340201870931574, 9.140360285881613, 8464027597, 360289559, 2298226, 1.1, -203426, null, null, null], [1570723200000, 7821095, 41.1, 41.56, 39.74, 39.77, -1.08, -2.64, 3.81, 316059647, null, null, 18.8, 4.39, 0.4511505087917065, 8.898705717770536, 8240254040, 368215076, 2156672, 1.04, -141554, null, null, null], [1570982400000, 14872962, 40.6, 43.75, 40.1, 43.75, 3.98, 10.01, 7.25, 627084736, null, null, 20.681, 4.829, 0.49629959168590976, 9.789247553085714, 9064901038, 354696505, 2304355, 1.11, 147683, null, null, null], [1571068800000, 10941783, 43, 43.18, 41.53, 41.93, -1.82, -4.16, 5.33, 462894080, null, null, 19.821, 4.628, 0.475653528626925, 9.382014853992688, 8687801154, 361500679, 1656455, 0.79, -647900, null, null, null], [1571155200000, 7083230, 41.71, 42.49, 41.19, 41.35, -0.58, -1.38, 3.45, 295756307, null, null, 19.547, 4.564, 0.46907401404255616, 9.25223740076785, 8567626466, 359885377, 1544555, 0.74, -111900, null, null, null], [1571241600000, 9226135, 41.48, 42.88, 40.77, 41.5, 0.15, 0.36, 4.5, 387463127, null, null, 19.617, 4.581, 0.4707756126589531, 9.285800535557692, 8598706127, 339536400, 1393655, 0.67, -150900, null, null, null], [1571328000000, 8552945, 41.92, 41.92, 39.56, 40.25, -1.25, -3.01, 4.17, 346643970, null, null, 19.027, 4.443, 0.4565956243532269, 9.006107748882053, 8339708955, 319690676, 1425082, 0.68, 31427, null, null, null], [1571587200000, 5292773, 39.73, 39.9, 38.61, 39.2, -1.05, -2.61, 2.58, 207259088, null, null, 18.53, 4.327, 0.4446844341479471, 8.771165807512963, 8122151330, 321886561, 1301482, 0.62, -123600, null, null, null], [1571673600000, 5051505, 39.55, 40.2, 39.15, 40.05, 0.85, 2.17, 2.46, 200677192, null, null, 18.932, 4.421, 0.45432682619803094, 8.961356902495595, 8298269407, 321325536, 1329416, 0.64, 27934, null, null, null], [1571760000000, 5244729, 39.91, 40.78, 39.3, 39.66, -0.39, -0.97, 2.56, 209542965, null, null, 18.748, 4.377, 0.4499026698282485, 8.874092752689947, 8217462289, 323559616, 1458018, 0.7, 128602, null, null, null], [1571846400000, 4686614, 39.53, 40.12, 38.8, 39.57, -0.09, -0.23, 2.28, 184768660, null, null, 18.705, 4.368, 0.44888171069126004, 8.853954872463985, 8198814493, 320221459, 1672778, 0.8, 214760, null, null, null], [1571932800000, 7100994, 39.57, 41.08, 39.2, 40.91, 1.34, 3.39, 3.46, 286564724, null, null, 19.339, 4.515, 0.4640826581887243, 9.153785540445494, 8476459462, 330951580, 1876343, 0.9, 203565, null, null, null], [1572192000000, 6411565, 41, 41.7, 40.5, 41.09, 0.18, 0.44, 3.12, 263996289, null, null, 18.276, 4.134, 0.4704494571214787, 9.683169639213554, 8513755054, 343898353, 1642861, 0.79, -233482, null, null, null], [1572278400000, 11716291, 40.9, 40.9, 38.91, 38.95, -2.14, -5.21, 5.71, 461519329, null, null, 17.324, 3.919, 0.4459480738758457, 9.178862435174022, 8070351895, 323910694, 2013372, 0.97, 370511, null, null, null], [1572364800000, 5936259, 38.95, 38.95, 37.28, 38.06, -0.89, -2.28, 2.89, 226491969, null, null, 16.928, 3.829, 0.43575824624704385, 8.969127195754764, 7885945908, 326156969, 2005872, 0.96, -7500, null, null, null], [1572451200000, 5841664, 37.83, 38.47, 37.39, 37.5, -0.56, -1.47, 2.85, 220175813, null, null, 16.679, 3.773, 0.42934666933379795, 8.837158955668572, 7769915175, 337947033, 1952872, 0.94, -53000, null, null, null], [1572537600000, 5927806, 37.34, 37.74, 37.2, 37.53, 0.03, 0.08, 2.89, 222220425, null, null, 16.693, 3.776, 0.4296901466615289, 8.844228682673878, 7776131107, 349021822, 1970272, 0.95, 17400, null, null, null], [1572796800000, 8122567, 37.53, 38.6, 37.53, 37.91, 0.38, 1.01, 3.96, 308823274, null, null, 16.862, 3.814, 0.43404085960838895, 8.93377856072824, 7854866248, 353690107, 1982772, 0.95, 12500, null, null, null], [1572883200000, 16666602, 37.92, 41.5, 37.68, 40.49, 2.58, 6.81, 8.12, 661936177, null, null, 18.009, 4.073, 0.46357991045634395, 9.541775096832742, 8389436412, 396201778, 2302858, 1.11, 320086, null, null, null], [1572969600000, 13645798, 40.97, 41.48, 39.66, 40.17, -0.32, -0.79, 6.65, 553995396, null, null, 17.867, 4.041, 0.45991615216494586, 9.466364672788991, 8323133135, 372669849, 3052958, 1.47, 750100, null, null, null], [1573056000000, 14614428, 39.67, 39.8, 37.97, 38.63, -1.54, -3.83, 7.12, 566881569, null, null, 17.182, 3.886, 0.44228431563970516, 9.103452012267628, 8004048619, 427256498, 2323658, 1.12, -729300, null, null, null], [1573142400000, 8871469, 38.8, 39.38, 38.5, 38.66, 0.03, 0.08, 4.32, 344699800, null, null, 17.195, 3.889, 0.44262779296743615, 9.110521739272933, 8010264551, 414312067, 2279158, 1.09, -44500, null, null, null], [1573401600000, 9803002, 38.02, 38.34, 36.42, 36.48, -2.18, -5.64, 4.78, 365400881, null, null, 16.226, 3.67, 0.4176684399146568, 8.596788231801423, 7558573482, 384580751, 2251458, 1.08, -27700, null, null, null], [1573488000000, 6524405, 36.67, 36.7, 35.43, 36.26, -0.22, -0.6, 3.18, 234704830, null, null, 16.128, 3.648, 0.41514960614112456, 8.544943566337615, 7512989980, 371055908, 3195260, 1.54, 943802, null, null, null], [1573574400000, 4923704, 36.28, 36.34, 35.7, 36.02, -0.24, -0.66, 2.4, 177372531, null, null, 16.021, 3.6234, 0.4124, 8.4884, 7463262522.76, 366759853, 3177360, 1.53, -17900, null, null, null], [1573660800000, 8169348, 36.05, 37.69, 36.05, 37.64, 1.62, 4.5, 3.98, 302321935, null, null, 16.7415, 3.7863, 0.4309, 8.8702, 7798922858.32, 369669909, 3233013, 1.56, 55653, null, null, null], [1573747200000, 7204534, 37.28, 37.59, 36.43, 36.93, -0.71, -1.89, 3.51, 265500074, null, null, 16.426, 3.715, 0.42282059994113663, 8.70283413915571, 7651812464, 375673210, 3244413, 1.56, 11400, null, null, null], [1574006400000, 3976109, 36.9, 37.13, 36.36, 36.78, -0.15, -0.41, 1.94, 146273220, null, null, 16.359, 3.6998, 0.4211, 8.6675, 7620732803.64, 376791512, 3133113, 1.51, -111300, null, null, null], [1574092800000, 7505373, 36.89, 37.64, 36.41, 37.51, 0.73, 1.98, 3.66, 279267405, null, null, 16.6837, 3.7732, 0.4295, 8.8395, 7771987152.38, 391602062, 3232513, 1.56, 99400, null, null, null], [1574179200000, 5336367, 37.5, 37.5, 36.66, 36.81, -0.7, -1.87, 2.6, 197320419, null, null, 16.3724, 3.7028, 0.4214, 8.6746, 7626948735.78, 385143296, 3206523, 1.54, -25990, null, null, null], [1574265600000, 4079903, 36.53, 36.77, 36, 36.5, -0.31, -0.84, 1.99, 148147523, null, null, 16.2345, 3.6716, 0.4179, 8.6015, 7562717437, 392230402, 3304427, 1.59, 97904, null, null, null], [1574352000000, 8250452, 36.44, 37.8, 36.3, 36.68, 0.18, 0.49, 4.02, 306343236, null, null, 16.315, 3.69, 0.4199582888398734, 8.643919746686597, 7600013030, 379140297, 3687522, 1.77, 383095, null, null, null], [1574611200000, 6989293, 36.3, 36.48, 34.93, 35.16, -1.52, -4.14, 3.41, 247534854, null, null, 15.6385, 3.5368, 0.4026, 8.2857, 7285072468.08, 399723242, 3137908, 1.51, -549614, null, null, null], [1574697600000, 4304988, 35.28, 35.89, 35, 35.76, 0.6, 1.71, 2.1, 153468524, null, null, 15.9053, 3.5972, 0.4094, 8.4271, 7409391110.88, 397572058, 3475351, 1.67, 337443, null, null, null], [1574784000000, 7701535, 35.69, 37.27, 35.4, 36.72, 0.96, 2.68, 3.75, 281834519, null, null, 16.3323, 3.6938, 0.4204, 8.6533, 7608300939.36, 393451811, 3865376, 1.86, 390025, null, null, null], [1574870400000, 10463935, 36.72, 38.48, 36.5, 37.49, 0.77, 2.1, 5.1, 394639040, null, null, 16.6748, 3.7712, 0.4292, 8.8348, 7767843197.62, 400498722, 4209876, 2.03, 344500, null, null, null], [1574956800000, 5869981, 37.58, 37.95, 36.85, 37.21, -0.28, -0.75, 2.86, 218972670, null, null, 16.55, 3.743, 0.42602638842538837, 8.768818259767484, 7709827831, 396467539, 4365876, 2.1, 156000, null, null, null], [1575216000000, 4532321, 37.41, 37.69, 36.75, 37.49, 0.28, 0.75, 2.21, 169044174, null, null, 16.6748, 3.7712, 0.4292, 8.8348, 7767843197.62, 386804202, 3987076, 1.92, -378800, null, null, null], [1575302400000, 4566095, 37.35, 37.58, 36.9, 37.57, 0.08, 0.21, 2.22, 170100427, null, null, 16.7104, 3.7793, 0.4301, 8.8537, 7784419016.66, 383976277, 4092276, 1.97, 105200, null, null, null], [1575388800000, 10152645, 37.08, 39.12, 37.08, 38.67, 1.1, 2.93, 4.95, 390272659, null, null, 17.1997, 3.8899, 0.4427, 9.1129, 8012336528.46, 397144765, 3831576, 1.84, -260700, null, null, null], [1575475200000, 11114491, 38.74, 39.6, 38.33, 39.41, 0.74, 1.91, 5.42, 434433302, null, null, 17.5288, 3.9644, 0.4512, 9.2873, 8165662854.58, 408598744, 3497781, 1.68, -333795, null, null, null], [1575561600000, 11255877, 39.42, 40.49, 39.15, 39.72, 0.31, 0.79, 5.48, 447157922, null, null, 17.667, 3.996, 0.454763992138466, 9.360318765434704, 8229894153, 422811456, 3511298, 1.69, 13517, null, null, null], [1575820800000, 7107485, 40.07, 40.4, 39.4, 39.78, 0.06, 0.15, 3.46, 283469784, null, null, 17.6934, 4.0016, 0.4555, 9.3745, 8242326017.64, 409863971, 3539338, 1.7, 28040, null, null, null], [1575907200000, 9252650, 39.51, 40.8, 39.21, 40.8, 1.02, 2.56, 4.51, 370754872, null, null, 18.147, 4.1042, 0.4671, 9.6148, 8453667710.4, 415292661, 3729146, 1.79, 189808, null, null, null], [1575993600000, 10827886, 40.66, 40.7, 38.9, 38.99, -1.81, -4.44, 5.28, 428686177, null, null, 17.342, 3.9221, 0.4464, 9.1883, 8078639804.62, 410714280, 3561865, 1.71, -167281, null, null, null], [1576080000000, 7848554, 38.84, 39.31, 38.23, 38.45, -0.54, -1.38, 3.82, 304455269, null, null, 17.1018, 3.8678, 0.4402, 9.061, 7966753026.1, 416383967, 3905068, 1.88, 343203, null, null, null], [1576166400000, 12344413, 38.85, 40.32, 38.52, 40.09, 1.64, 4.27, 5.93, 489375966, null, null, 17.831, 4.033, null, 9.447512067062393, 8306557316, 424263611, 4417768, 2.13, 512700, null, null, null], [1576425600000, 14959871, 40.4, 42.39, 40.15, 41.9, 1.81, 4.51, 7.24, 616617415, null, null, 18.6363, 4.2148, 0.4797, 9.8741, 8681585222.2, 456753504, 4254168, 2.05, -163600, null, null, null], [1576512000000, 13809202, 41.67, 43.43, 41.53, 42.28, 0.38, 0.91, 6.73, 584422852, null, null, 18.8053, 4.2531, 0.4841, 9.9636, 8760320362.64, 461526669, 4533835, 2.18, 279667, null, null, null], [1576598400000, 9357024, 42.1, 42.42, 41.42, 41.61, -0.67, -1.58, 4.56, 391519742, null, null, 18.5073, 4.1857, 0.4764, 9.8057, 8621497878.18, 451702759, 4738535, 2.28, 204700, null, null, null], [1576684800000, 6186405, 41.59, 42.1, 41.06, 41.39, -0.22, -0.53, 3.01, 255896293, null, null, 18.4095, 4.1635, 0.4739, 9.7539, 8575914375.82, 453946742, 4574735, 2.2, -163800, null, null, null], [1576771200000, 6925833, 41.38, 41.8, 40.8, 40.8, -0.59, -1.43, 3.3, 285888762, null, null, 18.147, 4.105, null, 9.614828943312466, 8453667710, 483393018, 4408535, 2.12, -166200, null, null, null], [1577030400000, 7475973, 40.4, 41.18, 39.27, 39.41, -1.39, -3.41, 3.64, 299918846, null, null, 17.5288, 3.9644, 0.4512, 9.2873, 8165662854.58, 455818388, 4792835, 2.31, 384300, null, null, null], [1577116800000, 8972735, 39.57, 41.52, 39.57, 41.5, 2.09, 5.3, 4.37, 364761881, null, null, 18.4584, 4.1746, 0.4751, 9.7798, 8598706127, 458599217, 4792835, 2.31, 0, null, null, null], [1577203200000, 8920945, 41.54, 41.54, 40.5, 41.21, -0.29, -0.7, 4.35, 365526896, null, null, 18.3294, 4.1454, 0.4718, 9.7114, 8538618782.98, 500249400, 4792835, 2.31, 0, null, null, null], [1577289600000, 8289877, 41.3, 42.15, 41.1, 41.46, 0.25, 0.61, 3.98, 344825723, null, null, 18.4406, 4.1706, 0.4747, 9.7704, 8590418217.48, 491111584, null, null, null, null, null, null], [1577376000000, 10652042, 41.55, 42.6, 40.41, 40.61, -0.85, -2.05, 5.19, 442148930, null, null, 18.0625, 4.0851, 0.465, 9.5701, 8414300140.18, 514293037, 3965566, 1.91, -827269, null, null, null], [1577635200000, 6568327, 40.25, 40.99, 39, 40.74, 0.13, 0.32, 3.18, 264123944, null, null, 18.1204, 4.0982, 0.4664, 9.6007, 8441235846.12, 530649811, 4214948, 2.03, 249382, null, null, null], [1577721600000, 5046759, 40.6, 41.39, 40.3, 40.74, 0, 0, 2.42, 206147875, null, null, 18.1204, 4.0982, 0.4664, 9.6007, 8441235846.12, 512770914, 4446748, 2.14, 231800, null, null, null], [1577894400000, 8011732, 41.11, 42.13, 40.71, 41.72, 0.98, 2.41, 3.87, 332796075, null, null, 18.5562, 4.1967, 0.4777, 9.8316, 8644289629.36, 507752212, 4752578, 2.29, 305830, null, null, null], [1577980800000, 7829801, 41.85, 42.49, 41.41, 42.08, 0.36, 0.86, 3.78, 328971564, null, null, 18.7164, 4.2329, 0.4818, 9.9165, 8718880815.04, 508743839, 4893034, 2.36, 140456, null, null, null], [1578240000000, 12766082, 41.8, 43.74, 41.5, 43.17, 1.09, 2.59, 6.17, 548603147, null, null, 19.2012, 4.3426, 0.4943, 10.1733, 8944726349.46, 519334990, 4956820, 2.39, 63786, null, null, null], [1578326400000, 7548780, 43.04, 43.08, 42.18, 42.86, -0.31, -0.72, 3.63, 321388081, null, null, 19.0633, 4.3114, 0.4907, 10.1003, 8880495050.68, 518646889, 4666139, 2.25, -290681, null, null, null], [1578412800000, 7645812, 42.67, 42.88, 41.52, 41.63, -1.23, -2.87, 3.69, 321470634, null, null, 18.5162, 4.1877, 0.4766, 9.8104, 8625641832.94, 513819576, 4612046, 2.22, -54093, null, null, null], [1578499200000, 5931130, 42.15, 42.49, 41.8, 42.28, 0.65, 1.56, 2.85, 250130544, null, null, 18.8053, 4.2531, 0.4841, 9.9636, 8760320362.64, 502269857, 4748074, 2.29, 136028, null, null, null], [1578585600000, 6184839, 42.48, 42.48, 41.5, 42.13, -0.15, -0.35, 2.98, 259274694, null, null, 18.7386, 4.238, 0.4824, 9.9283, 8729240701.94, 489241481, 4796674, 2.31, 48600, null, null, null], [1578844800000, 8863887, 42.11, 42.9, 41.99, 42.65, 0.52, 1.23, 4.28, 377228871, null, null, 18.9699, 4.2903, 0.4883, 10.0508, 8836983525.7, 442849593, 4955474, 2.39, 158800, null, null, null], [1578931200000, 11283939, 43, 44.16, 42.51, 43.12, 0.47, 1.1, 5.47, 489434473, null, null, 19.1789, 4.3376, 0.4937, 10.1616, 8934366462.56, 442491304, 5105768, 2.46, 150294, null, null, null], [1579017600000, 7505858, 42.89, 43.4, 41.71, 42.19, -0.93, -2.16, 3.62, 317055182, null, null, 18.7653, 4.244, 0.483, 9.9424, 8741672566.22, 437727772, 4898868, 2.36, -206900, null, null, null], [1579104000000, 13433926, 44.3, 46.41, 43.51, 46.41, 4.22, 10, 6.51, 608578920, null, null, 20.6423, 4.6685, 0.5314, 10.9369, 9616047020.58, 462620418, 5110860, 2.46, 211992, null, null, null], [1579190400000, 18695269, 46.98, 47.28, 44.66, 45.76, -0.65, -1.4, 9.03, 855765680, null, null, 20.3531, 4.6031, 0.5239, 10.7837, 9481368490.88, 419385737, 4897097, 2.36, -213763, null, null, null], [1579449600000, 11569119, 45.79, 47.79, 45.38, 47.32, 1.56, 3.41, 5.55, 539078536, null, null, 21.047, 4.7601, 0.5418, 11.1513, 9804596962.16, 429037757, 4914847, 2.37, 17750, null, null, null], [1579536000000, 8394902, 46.76, 47.24, 46.06, 46.48, -0.84, -1.78, 4.05, 391098956, null, null, 20.6734, 4.6756, 0.5322, 10.9534, 9630550862.24, 430573561, 4686629, 2.26, -228218, null, null, null], [1579622400000, 11576024, 46.03, 49.58, 45.01, 49.06, 2.58, 5.55, 5.55, 550195072, null, null, 21.8209, 4.9351, 0.5617, 11.5614, 10165121026.28, 446637006, 4761843, 2.29, 75214, null, null, null], [1579708800000, 10602246, 47.93, 48.88, 45.96, 46.5, -2.56, -5.22, 5.11, 503301921, null, null, 20.6823, 4.6776, 0.5324, 10.9581, 9634694817, 453176776, 4681724, 2.25, -80119, null, null, null], [1580659200000, 1077600, 41.85, 41.85, 41.85, 41.85, -4.65, -10, 0.52, 45097560, null, null, 18.6141, 4.2098, 0.4792, 9.8623, 8671225335.3, 431525008, 4688224, 2.26, 6500, null, null, null], [1580745600000, 12613930, 38.8, 43.95, 38.72, 42.52, 0.67, 1.6, 6.1, 533420079, null, null, 18.9121, 4.2772, 0.4868, 10.0202, 8810047819.76, 421055490, 5471262, 2.64, 783038, null, null, null], [1580832000000, 10439353, 42.95, 44.48, 42.24, 42.53, 0.01, 0.02, 5.06, 452696323, null, null, 18.9165, 4.2782, 0.4869, 10.0225, 8812119797.14, 420436623, 5265996, 2.54, -205266, null, null, null], [1580918400000, 10694883, 41.5, 43.98, 41.38, 43.42, 0.89, 2.09, 5.17, 454266630, null, null, 19.3124, 4.3677, 0.4971, 10.2323, 8996525783.96, 426933030, 5510527, 2.65, 244531, null, null, null], [1581004800000, 9515944, 42.99, 43.25, 41.88, 42.91, -0.51, -1.17, 4.57, 405648544, null, null, 19.0855, 4.3164, 0.4913, 10.1121, 8890854937.58, 425537340, 5613787, 2.7, 103260, null, null, null], [1581264000000, 11468584, 42.4, 44.65, 41.68, 44.45, 1.54, 3.59, 5.5, 498368730, null, null, 19.7705, 4.4714, 0.5089, 10.475, 9209939454.1, 449379769, 5410430, 2.61, -203357, null, null, null], [1581350400000, 7536608, 44.5, 44.57, 43.5, 44.05, -0.4, -0.9, 3.62, 331321828, null, null, 19.5926, 4.4311, 0.5043, 10.3807, 9127060358.9, 444693922, 5493318, 2.65, 82888, null, null, null], [1581436800000, 11995310, 43.95, 46.31, 43.57, 45.74, 1.69, 3.84, 5.78, 545828325, null, null, 20.3443, 4.6011, 0.5237, 10.779, 9477224536.12, 447646437, 5376784, 2.59, -33646, null, null, null], [1581523200000, 10686765, 45.48, 46.55, 44.8, 45.61, -0.13, -0.28, 5.16, 488490655, null, null, 20.2864, 4.588, 0.5222, 10.7483, 9450288830.18, 441633710, 5786634, 2.79, 409850, null, null, null], [1581609600000, 10891737, 45.63, 47.3, 45.36, 46, 0.39, 0.86, 5.21, 504955511, null, null, 20.46, 4.628, null, 10.84024831895345, 9531095948, 425444490, 5642893, 2.72, -143741, null, null, null], [1581868800000, 12310811, 46.11, 48.24, 46.11, 48.17, 2.17, 4.72, 5.82, 584665007, null, null, 21.4251, 4.8456, 0.5515, 11.3516, 9980715039.46, 434393991, 5824299, 2.81, 181406, null, null, null], [1581955200000, 12253666, 49.28, 49.28, 47, 48.28, 0.11, 0.23, 5.93, 590925179, null, null, 21.474, 4.8566, 0.5528, 11.3775, 10003506790.64, 457943357, 5723652, 2.76, -100647, null, null, null], [1582041600000, 12514736, 48.28, 48.28, 46, 46.16, -2.12, -4.39, 6.04, 589149807, null, null, 20.5311, 4.6434, 0.5285, 10.878, 9564247586.08, 423187347, 5838352, 2.81, 114700, null, null, null], [1582128000000, 8845406, 46.58, 47.1, 46.09, 46.92, 0.76, 1.65, 4.25, 413696251, null, null, 20.8691, 4.7198, 0.5372, 11.0571, 9721717866.96, 414305545, 6074852, 2.93, 236500, null, null, null], [1582214400000, 14236456, 46.97, 48.5, 46.84, 48.3, 1.38, 2.94, 6.8, 683163241, null, null, 21.483, 4.859, 0.5529985100798287, 11.382260734446179, 10007650745, 443870474, 6106033, 2.94, 31181, null, null, null], [1582473600000, 15637783, 48.3, 52.13, 47.91, 50.96, 2.66, 5.51, 7.56, 779467649, null, null, 22.666, 5.127, 0.5834535004868189, 12.009109876277282, 10558796728, null, 6054199, 2.92, -51834, null, null, null], [1582560000000, 16695722, 49.98, 51.08, 47.2, 50.96, 0, 0, 8.08, 831051426, null, null, 22.666, 5.127, 0.5834535004868189, 12.009109876277282, 10558796728, null, null, null, null, null, null, null]];
  klineData.forEach(function (item, index) {
    var volume = item.splice(1, 1);
    item.splice(5, 0, volume[0]);
    item.length = 10;
    var amount = item.splice(9, 1);
    item.splice(6, 0, amount[0]);
  });
  var startIndex = 0,
      stopIndex = klineData.length,
      data;
  function queryKlineData(count) {
    if (stopIndex <= 0) {
      return [];
    }

    startIndex += count;
    data = klineData.slice(startIndex, stopIndex);
    stopIndex -= data.length;
    return data;
  }

  var RemoteDataSet = /*#__PURE__*/function (_DataSet) {
    _inherits(RemoteDataSet, _DataSet);

    function RemoteDataSet(options) {
      var _this;

      _classCallCheck(this, RemoteDataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RemoteDataSet).call(this, options));
      var defaults = {};
      _this.options = Object.assign(_this.options, defaults, options);
      _this.$state = {
        fetched: false,
        isAllData: false
      };
      _this._data = {
        klineData: [],
        closeData: [],
        highData: [],
        lowData: [],
        chgData: [],
        volumeData: []
      };
      return _this;
    }

    _createClass(RemoteDataSet, [{
      key: "fetchKlineData",
      value: function fetchKlineData(options) {
        var self = this;
        var uid = options.uid,
            count = options.count,
            mode = options.mode;
        var data;
        return new Promise(function (resolve) {
          setTimeout(function () {
            data = queryKlineData(count);

            if (data.length < -count) {
              self.setState('isAllData', true);
            }

            var res = {
              data: data,
              uid: uid,
              mode: mode
            };
            resolve(res);
            self.setData(data);
            self.emit('data-changed', res);
          });
        });
      }
    }, {
      key: "slice",
      value: function slice(startIndex, stopIndex) {
        var data = this._data.klineData.slice(startIndex, stopIndex);

        return data;
      }
    }, {
      key: "setData",
      value: function setData() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var columns = this.options.columns;
        this._data.klineData = data.concat(this._data.klineData);

        this._data.klineData.forEach(function (item, index) {
          _this2._data.closeData[index] = item[columns.indexOf("close")];
          _this2._data.highData[index] = item[columns.indexOf("high")];
          _this2._data.lowData[index] = item[columns.indexOf("low")];
          _this2._data.chgData[index] = item[columns.indexOf("chg")];
          _this2._data.volumeData[index] = item[columns.indexOf("volume")];
        });
      }
    }, {
      key: "getData",
      value: function getData(key) {
        return key && this._data[key] ? this._data[key] : this._data.klineData;
      }
    }]);

    return RemoteDataSet;
  }(DataSet);

  var VolumeDataSet = /*#__PURE__*/function (_KlineVolumeDataSet) {
    _inherits(VolumeDataSet, _KlineVolumeDataSet);

    function VolumeDataSet(options) {
      var _this;

      _classCallCheck(this, VolumeDataSet);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(VolumeDataSet).call(this, options));
      var defaults = {};
      _this.options = Object.assign(_this.options, defaults, options);
      _this.mouseLine = new MouseLineDataSet(_assertThisInitialized(_this), _this.options);
      return _this;
    }

    _createClass(VolumeDataSet, [{
      key: "setData",
      value: function setData() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var columns = this.options.columns;

        _get(_getPrototypeOf(VolumeDataSet.prototype), "setData", this).call(this, data);

        this._data.data.forEach(function (item, index) {
          _this2._data.closeData[index] = item[columns.indexOf("close")];
          _this2._data.highData[index] = item[columns.indexOf("high")];
          _this2._data.lowData[index] = item[columns.indexOf("low")];
          _this2._data.volumeData[index] = item[columns.indexOf("volume")];
        });
      }
    }, {
      key: "extent",
      value: function extent() {
        var volumeData = this.getData('volumeData'); // console.log(volumeData)

        var maxVal = d3.max(volumeData);
        var minVal = 0;
        this._data.extent = {
          max: maxVal,
          min: minVal
        };
        return [minVal, maxVal];
      }
    }, {
      key: "getGridData",
      value: function getGridData(options) {
        return _get(_getPrototypeOf(VolumeDataSet.prototype), "getGridData", this).call(this, options, 2);
      }
    }, {
      key: "getVrectData",
      value: function getVrectData(options) {
        var columns = this.options.columns;
        var left = options.left,
            kspan = options.kspan,
            kwidth = options.kwidth,
            stateHeight = options.stateHeight,
            figureWidth = options.figureWidth,
            figureHeight = options.figureHeight,
            sliceType = options.sliceType,
            period = options.period,
            $colors = options.$colors,
            xAxis = options.xAxis;
        var scaleLinear = this.getScale();
        return this.getKlineVolumeData(options, function (data) {
          var item = data.item,
              index = data.index,
              x = data.x,
              open = data.open,
              close = data.close,
              volume = data.volume;
          var result = {};
          var opts = {};
          opts.strokeWidth = 1;

          if (open <= close) {
            opts.stroke = $colors.red;
          } else if (open > close) {
            opts.stroke = $colors.green;
          }

          if (open == close && data[index - 1]) {
            opts.stroke = close >= data[index - 1][columns.indexOf('close')] ? $colors.red : $colors.green;
          } // 绘制k线的body


          var rectOpts = {
            x: floor(left + index * kspan),
            y: floor(scaleLinear(volume)),
            width: floor(kwidth),
            height: figureHeight - floor(scaleLinear(volume))
          };
          var rectFill = sliceType ? $colors.red : kwidth <= 0 ? $colors.red : '#fff';

          if (open <= close) {
            rectOpts.fill = rectFill;
          } else {
            rectOpts.fill = $colors.green;
          }

          if (open == close && data[index - 1]) {
            rectOpts.fill = close >= data[index - 1][columns.indexOf('close')] ? rectFill : $colors.green;
          }

          result.rectOpts = Object.assign({}, opts, rectOpts);
          return result;
        });
      }
    }, {
      key: "getYTickData",
      value: function getYTickData(options) {
        var result = {
          texts: []
        };
        var data = this.getData();

        if (!data.length) {
          return result;
        }

        var left = options.left,
            figureHeight = options.figureHeight,
            stateHeight = options.stateHeight,
            $colors = options.$colors;
        var extent = this.getData('extent');
        var span = (figureHeight - stateHeight) / 2; // 最高刻度值

        var text = this.parseVolume(extent.max);
        var xText = left ? left - measureText(text).width - 2 : 1;
        result.texts.push({
          x: xText,
          y: floor(stateHeight),
          text: text,
          fill: $colors.text,
          fontSize: 11,
          align: 'left',
          verticalAlign: 'top'
        });

        for (var i = 1; i < 2; i++) {
          text = extent.max - span * i / (figureHeight - stateHeight) * (extent.max - extent.min);
          text = this.parseVolume(text);
          xText = left ? left - measureText(text).width - 2 : 1;
          result.texts.push({
            x: xText,
            y: floor(stateHeight + span * i) - 5,
            text: text,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'middle'
          });
        } // 最低刻度值


        text = Number(extent.min).toFixed(2);
        xText = left ? left - measureText(text).width - 2 : 1;
        result.texts.push({
          x: xText,
          y: floor(figureHeight) - 10,
          text: text,
          fill: $colors.text,
          fontSize: 11,
          align: 'left',
          verticalAlign: 'bottom'
        });
        return result;
      }
    }, {
      key: "getMouseLineData",
      value: function getMouseLineData(options) {
        return this.mouseLine.getMouseLineData(options);
      }
    }]);

    return VolumeDataSet;
  }(KlineVolumeDataSet);

  var index = {
    version: '0.0.1',
    Kline: Kline,
    Volume: Volume,
    KlineDataSet: KlineDataSet,
    RemoteDataSet: RemoteDataSet,
    VolumeDataSet: VolumeDataSet
  };

  return index;

}));
//# sourceMappingURL=kchart.js.map
