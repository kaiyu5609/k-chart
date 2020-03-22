
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
      key: "_initStage",
      value: function _initStage() {}
    }, {
      key: "_initElements",
      value: function _initElements() {}
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
            } // if (Math.abs(e.deltaY) < 5 || Math.abs(e.deltaY) > 20) {


            self.scaleChart(-Math.sign(e.deltaY)); // }
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

      _this._initElements();

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

      _this._initElements();

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
      key: "_initElements",
      value: function _initElements() {
        var options = this.$options;
        var $el = this.$elements.$el = $(options.el);
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

        if (xData[mouseIndex] > figureWidth - 150 || this._item.left === null && this._item.right === null) {
          item.left = left ? left : 30;
          item.right = null;
        } else if (xData[mouseIndex] < 150 + 30) {
          item.left = null;
          item.right = 0;
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

  var klineData = [[1511366400000, 50.0993, 51.0718, 49.4313, 49.7751, 4180781, 214184689.88, -0.3711, -0.74, 2.04], [1511452800000, 49.3429, 49.7653, 44.7947, 44.7947, 10734971, 507082700.84, -4.9827, -10.01, 5.23], [1511712000000, 44.0874, 44.1954, 42.8103, 43.5471, 5661628, 250025913.73, -1.2498, -2.79, 2.76], [1511798400000, 43.3997, 43.999, 43.2131, 43.8614, 2515884, 111922358.02, 0.3135, 0.72, 1.23], [1511884800000, 43.7141, 43.7141, 42.3192, 42.9184, 3241206, 141514512.83, -0.943, -2.15, 1.58], [1511971200000, 42.9086, 42.9184, 41.6512, 41.6512, 3623314, 155467286.06, -1.2661, -2.95, 1.77], [1512057600000, 41.6512, 42.2995, 41.6021, 41.8084, 4127200, 175819272.62, 0.1583, 0.38, 2.01], [1512316800000, 41.8182, 41.8477, 40.4724, 40.718, 4050527, 169839013.93, -1.0912, -2.61, 1.97], [1512403200000, 40.5706, 40.5706, 38.881, 39.3918, 3645993, 147689254.42, -1.3274, -3.26, 1.78], [1512489600000, 39.4409, 40.2563, 39.156, 40.2268, 3328384, 134948505.13, 0.8351, 2.12, 1.62], [1512576000000, 40.1679, 40.7769, 39.6276, 40.1777, 2561701, 104743603.36, -0.0483, -0.12, 1.25], [1512662400000, 40.3348, 41.5038, 40.1777, 41.3074, 3912076, 163540878.93, 1.129, 2.81, 1.91], [1512921600000, 41.3172, 42.9675, 41.3172, 42.6925, 4727797, 203918063.62, 1.3838, 3.35, 2.3], [1513008000000, 42.663, 42.9773, 41.9066, 42.2406, 2805896, 121009898.2, -0.4525, -1.06, 1.37], [1513094400000, 42.2209, 42.2209, 41.5038, 41.9557, 1917021, 81523881.8, -0.283, -0.67, 0.93], [1513180800000, 42.0932, 42.3978, 40.9439, 41.3172, 2375553, 100469783.37, -0.6377, -1.52, 1.16], [1513267200000, 41.3467, 41.6315, 41.1109, 40.9439, 1761777, 73725811.86, 0, 0, 0.28], [1513526400000, 41.1797, 41.6315, 40.0991, 40.6001, 2454808, 101744483.82, -0.3439, -0.84, 1.2], [1513612800000, 40.7376, 40.8457, 40.1875, 40.4134, 1984000, 81650535.78, -0.1868, -0.46, 0.97], [1513699200000, 40.4822, 41.2386, 40.4527, 40.6001, 2040296, 84618530.67, 0.1859, 0.46, 0.99], [1513785600000, 40.3741, 40.4134, 39.323, 39.9812, 3113693, 126268497.88, -0.6171, -1.52, 1.52], [1513872000000, 40.0303, 40.3643, 39.8142, 39.9714, 2066814, 84296917.95, -0.008, -0.02, 1.01], [1514131200000, 40.0794, 40.1679, 37.211, 37.6236, 6585955, 255644861.24, -2.3462, -5.87, 3.21], [1514217600000, 37.7316, 38.1049, 37.3289, 38.0755, 3169970, 122013523.42, 0.4515, 1.2, 1.54], [1514304000000, 37.9281, 38.8515, 37.8102, 38.1049, 3708891, 144434192.16, 0.0305, 0.08, 1.81], [1514390400000, 38.2425, 38.2425, 37.3387, 37.5941, 2927481, 112490609.59, -0.5106, -1.34, 1.43], [1514476800000, 37.9183, 39.0578, 37.8299, 38.8908, 4202788, 164686969.19, 1.297, 3.45, 2.05], [1514822400000, 39.2052, 39.4704, 38.5273, 39.0775, 3197416, 126769960.82, 0.1867, 0.48, 1.56], [1514908800000, 39.1953, 39.8731, 39.0087, 39.8437, 3913277, 157416236.13, 0.7659, 1.96, 1.91], [1514995200000, 40.8751, 42.4174, 40.8751, 41.8968, 8300770, 352188889.12, 2.052, 5.15, 4.04], [1515081600000, 41.2582, 41.7003, 40.7769, 41.327, 4260338, 178822929.64, -0.5698, -1.36, 2.08], [1515340800000, 41.3368, 41.6315, 40.5903, 40.7573, 3569519, 148331795.33, -0.5703, -1.38, 1.74], [1515427200000, 40.7671, 40.8653, 39.883, 40.0794, 3138719, 128433609.37, -0.6765, -1.66, 1.53], [1515513600000, 40.0794, 40.0893, 38.5666, 39.0283, 3864030, 154433748.31, -1.0501, -2.62, 1.88], [1515600000000, 39.0185, 39.6177, 38.2916, 39.5392, 3218477, 127628627.78, 0.5113, 1.31, 1.57], [1515686400000, 39.3034, 39.49, 38.8515, 38.9301, 1957690, 77988684.45, -0.6089, -1.54, 0.95], [1515945600000, 38.9006, 38.9006, 37.5647, 37.7808, 3085317, 119879209.93, -1.1484, -2.95, 1.49], [1516032000000, 37.3584, 37.8102, 34.8829, 35.9045, 9331699, 348068311.98, -1.8778, -4.97, 4.51], [1516118400000, 36.0518, 36.9458, 35.7571, 36.8475, 4757332, 176297544.97, 0.9443, 2.63, 2.29], [1516204800000, 36.8475, 36.8475, 36.3269, 36.5528, 2482269, 92277619.95, -0.2948, -0.8, 1.18], [1516291200000, 36.6314, 36.7297, 35.7571, 35.9536, 3698738, 135552969.22, -0.5995, -1.64, 1.78], [1516550400000, 36.101, 36.1206, 34.9909, 35.934, 4141616, 150182330.42, -0.018, -0.05, 2], [1516636800000, 36.101, 36.8475, 36.101, 36.2483, 3488377, 129575520.15, 0.3126, 0.87, 1.67], [1516723200000, 36.2778, 36.6118, 35.8554, 36.4939, 3453787, 127530201.2, 0.2465, 0.68, 1.66], [1516809600000, 36.5135, 37.1128, 36.3957, 36.435, 4764902, 178153342.09, -0.0584, -0.16, 2.29], [1516896000000, 36.1992, 36.3367, 35.9438, 36.1304, 2734708, 100537664.4, -0.3061, -0.84, 1.31], [1517155200000, 36.2188, 36.2287, 35.1285, 35.1481, 3831350, 138372268.6, -0.9828, -2.72, 1.83], [1517241600000, 35.0793, 35.541, 35.0793, 35.433, 2241289, 80593953.79, 0.2847, 0.81, 1.08], [1517328000000, 35.2758, 35.3151, 33.5862, 33.8514, 4552447, 158072895.75, -1.5803, -4.46, 2.2], [1517414400000, 33.8612, 34.1461, 32.427, 32.5154, 3515540, 118929725.65, -1.3372, -3.95, 1.68], [1517500800000, 32.3288, 32.9575, 31.4152, 32.928, 3089322, 101995933.53, 0.4129, 1.27, 1.49], [1517760000000, 32.2207, 33.6353, 31.759, 32.6922, 2641488, 88767735.92, -0.2371, -0.72, 1.28], [1517846400000, 31.985, 32.8985, 30.9535, 31.091, 2890221, 94203126.44, -1.602, -4.9, 1.38], [1517932800000, 31.7197, 32.0734, 30.482, 31.3563, 3358651, 107136278.89, 0.2643, 0.85, 1.62], [1518019200000, 31.3366, 32.2698, 31.0321, 32.1913, 2536310, 82549560.27, 0.8341, 2.66, 1.21], [1518105600000, 31.4349, 32.1421, 31.1205, 31.6019, 2260758, 72832428.15, -0.5891, -1.83, 1.09], [1518364800000, 31.6019, 33.6255, 31.6019, 33.3799, 3456564, 115767929.72, 1.7791, 5.63, 1.66], [1518451200000, 33.4978, 33.6549, 32.9378, 33.0164, 2733570, 92559682.79, -0.3638, -1.09, 1.31], [1518537600000, 32.9477, 33.2915, 32.7708, 32.9673, 1507350, 50601438.95, -0.0495, -0.15, 0.71], [1519228800000, 33.262, 34.097, 33.262, 33.596, 2529691, 86666902.21, 0.6297, 1.91, 1.22], [1519315200000, 33.3995, 33.5272, 32.9575, 33.3406, 2103762, 71153440.44, -0.2553, -0.76, 1.01], [1519574400000, 33.429, 35.7768, 33.2817, 35.1874, 6779366, 239182271.3, 1.8471, 5.54, 3.27], [1519660800000, 35.1972, 35.1972, 34.4408, 34.4998, 4755204, 168392485.17, -0.6861, -1.95, 2.29], [1519747200000, 34.2149, 35.0793, 33.9693, 34.6668, 3407488, 119904469.13, 0.1656, 0.48, 1.65], [1519833600000, 34.372, 35.0302, 34.1854, 34.9713, 3123691, 110340424.64, 0.3051, 0.88, 1.48], [1519920000000, 34.765, 35.3446, 34.5783, 34.8337, 3092927, 110139264.23, -0.1364, -0.39, 1.48], [1520179200000, 34.8239, 35.0106, 34.4899, 34.6373, 2654773, 93842212.6, -0.1951, -0.56, 1.27], [1520265600000, 34.5882, 35.7768, 34.5587, 35.7375, 5002129, 180044347.93, 1.1014, 3.18, 2.39], [1520352000000, 35.7571, 36.0224, 35.0597, 35.0695, 3290585, 118550371.04, -0.6683, -1.87, 1.59], [1520438400000, 34.9713, 35.4624, 34.8141, 35.099, 2027898, 72306939.3, 0.0281, 0.08, 0.97], [1520524800000, 35.099, 35.8357, 34.9909, 35.7866, 3583661, 129640498.3, 0.6879, 1.96, 1.71], [1520784000000, 35.8554, 36.9949, 35.8554, 36.9556, 7481624, 278259620.89, 1.1702, 3.27, 3.6], [1520870400000, 36.9851, 37.0931, 36.209, 36.3269, 4139898, 153900354.41, -0.6282, -1.7, 2], [1520956800000, 36.3367, 36.7297, 36.1599, 36.209, 3059391, 113508057.79, -0.1162, -0.32, 1.48], [1521043200000, 36.0715, 36.1697, 34.7552, 35.3642, 4378559, 157629454.44, -0.8436, -2.33, 2.09], [1521129600000, 35.266, 35.6098, 34.932, 35.0302, 2458854, 88235205.54, -0.3324, -0.94, 1.18], [1521388800000, 35.0204, 35.2169, 34.4408, 34.5096, 3579926, 127176435.55, -0.522, -1.49, 1.71], [1521475200000, 34.3917, 34.5096, 33.596, 34.5096, 3390867, 117761111.26, 0, 0, 1.64], [1521561600000, 34.3819, 35.0892, 34.0184, 34.0872, 2608399, 92006144.03, -0.421, -1.22, 1.25], [1521648000000, 33.9889, 34.4605, 33.596, 33.6844, 2045832, 71007854.13, -0.4022, -1.18, 0.98], [1521734400000, 32.6137, 32.6726, 31.1402, 31.317, 4778621, 155091789.69, -2.3681, -7.03, 2.29], [1521993600000, 30.8356, 31.7983, 28.4977, 31.759, 3631183, 112499140.56, 0.4416, 1.41, 1.75], [1522080000000, 31.926, 32.8298, 31.926, 32.6431, 3700378, 122166458.36, 0.8829, 2.78, 1.78], [1522166400000, 32.1225, 32.3681, 31.4545, 32.1225, 2635068, 85996996.09, -0.519, -1.59, 1.27], [1522252800000, 32.319, 32.7119, 32.1127, 32.5645, 2096026, 69184515.19, 0.4433, 1.38, 1.01], [1522339200000, 32.6922, 34.1854, 32.594, 33.5567, 4508958, 153023256.2, 0.9932, 3.05, 2.18], [1522598400000, 33.5567, 34.1166, 33.1048, 33.4585, 3365186, 114764850.53, -0.0973, -0.29, 1.63], [1522684800000, 32.9771, 33.1441, 32.6137, 32.9182, 2266298, 75767382.84, -0.5387, -1.61, 1.09], [1522771200000, 32.9182, 33.2522, 32.4074, 32.4368, 2442598, 81879956.02, -0.4806, -1.46, 1.17], [1523203200000, 32.2207, 32.2502, 31.4349, 32.0144, 2533791, 82363685.32, -0.4217, -1.3, 1.22], [1523289600000, 31.8474, 32.5645, 31.7394, 32.427, 2625389, 85949727.72, 0.413, 1.29, 1.26], [1523376000000, 32.6333, 33.0361, 32.4368, 32.7708, 2587877, 86412412.58, 0.3437, 1.06, 1.25], [1523462400000, 32.4565, 33.0557, 32.427, 32.6824, 2197140, 73305067.79, -0.0885, -0.27, 1.06], [1523548800000, 32.9084, 33.095, 32.4761, 32.7119, 1572264, 52444000.43, 0.0294, 0.09, 0.76], [1523808000000, 32.6726, 32.7021, 31.7001, 31.985, 2591547, 84656280.67, -0.7262, -2.22, 1.23], [1523894400000, 31.8867, 32.5351, 31.3366, 31.4349, 2169600, 70579737.84, -0.5501, -1.72, 1.04], [1523980800000, 31.7885, 31.9064, 30.7767, 31.2973, 2865066, 91234608.21, -0.1383, -0.44, 1.39], [1524067200000, 31.4054, 32.0243, 31.3661, 31.9162, 2337740, 75714463.43, 0.6197, 1.98, 1.11], [1524153600000, 31.9555, 32.0243, 30.9437, 30.9633, 2447392, 78226912, -0.9543, -2.99, 1.18], [1524412800000, 30.5508, 31.4054, 29.6666, 29.9122, 3573322, 110164328.6, -1.0496, -3.39, 1.71], [1524499200000, 29.9908, 30.5999, 29.8631, 30.5999, 2626195, 81242233.02, 0.688, 2.3, 1.26], [1524585600000, 30.256, 31.3366, 30.2069, 31.1794, 2598049, 82083506.81, 0.5784, 1.89, 1.26], [1524672000000, 31.1696, 31.1696, 30.4525, 30.4722, 1889982, 59282887.49, -0.7078, -2.27, 0.91], [1524758400000, 30.6293, 30.9437, 30.2462, 30.7963, 1831514, 57218483.26, 0.323, 1.06, 0.88], [1525190400000, 30.816, 31.2187, 30.0006, 30.4722, 2283710, 71044766.4, -0.3234, -1.05, 1.1], [1525276800000, 30.5508, 31.484, 29.9613, 31.484, 2949148, 92543673.04, 1.0117, 3.32, 1.39], [1525363200000, 31.4741, 31.4741, 30.9437, 31.1303, 2115663, 67216082.51, -0.3526, -1.12, 1.02], [1525622400000, 31.1893, 32.7414, 31.1893, 32.6235, 5195476, 170624638.27, 1.4942, 4.8, 2.46], [1525708800000, 32.4172, 32.653, 32.0636, 32.653, 4080390, 134355232.81, 0.0294, 0.09, 1.91], [1525795200000, 32.5646, 33.0496, 32.4161, 32.5151, 3969235, 131056757.01, -0.1371, -0.42, 1.91], [1525881600000, 32.5943, 32.9407, 32.0895, 32.525, 2893597, 95063656.48, 0.0098, 0.03, 1.38], [1525968000000, 32.5349, 35.336, 32.4458, 34.4254, 8881631, 301501841.96, 1.8995, 5.84, 4.23], [1526227200000, 33.8513, 35.0094, 33.5544, 33.9899, 7519365, 259812972.36, -0.4372, -1.27, 3.65], [1526313600000, 34.1087, 34.3759, 33.6534, 34.2473, 4341804, 149308294.65, 0.2583, 0.76, 2.08], [1526400000000, 34.0196, 35.1381, 33.8513, 34.663, 6901979, 241624484.4, 0.4144, 1.21, 3.32], [1526486400000, 34.6729, 34.9797, 33.7622, 33.881, 4948101, 171819871.47, -0.7834, -2.26, 2.38], [1526572800000, 33.6534, 33.8117, 32.5646, 33.1585, 6638589, 222561863.5, -0.7216, -2.13, 3.21], [1526832000000, 33.6633, 33.9107, 33.2574, 33.5346, 4902959, 166791926.1, 0.3747, 1.13, 2.36], [1526918400000, 33.2871, 33.9701, 33.2673, 33.9701, 3885408, 132145984.9, 0.4359, 1.3, 1.84], [1527004800000, 34.0394, 34.0394, 32.8714, 32.8912, 4062814, 136757504.88, -1.0803, -3.18, 1.96], [1527091200000, 32.8318, 33.9305, 32.7922, 33.8315, 5781254, 196140489.39, 0.9407, 2.86, 2.73], [1527177600000, 33.7524, 33.782, 32.4755, 32.723, 5356395, 178337404.22, -1.1097, -3.28, 2.59], [1527436800000, 32.723, 32.812, 32.0796, 32.4953, 2733375, 89691625.85, -0.2291, -0.7, 1.31], [1527523200000, 32.4953, 32.723, 31.5154, 31.6342, 3455528, 112140591.92, -0.8611, -2.65, 1.67], [1527609600000, 30.9809, 31.4758, 29.9119, 30.3177, 4005741, 124593670.85, -1.316, -4.16, 1.93], [1527696000000, 30.684, 31.3372, 30.684, 30.9908, 2466636, 77233211.22, 0.6731, 2.22, 1.19], [1527782400000, 30.9314, 31.4758, 30.6939, 31.0106, 2307196, 72482292.2, 0.0186, 0.06, 1.11], [1528041600000, 31.2976, 31.4659, 30.5949, 30.6939, 2391576, 74776613.08, -0.3163, -1.02, 1.15], [1528128000000, 30.7532, 31.7628, 30.7532, 31.7233, 3167714, 100483224.7, 1.0283, 3.35, 1.51], [1528214400000, 31.7727, 31.8222, 31.3768, 31.6441, 2458045, 78437864.79, -0.0793, -0.25, 1.17], [1528300800000, 31.8024, 32.2973, 31.6045, 31.6738, 2564001, 82648448.8, 0.0285, 0.09, 1.24], [1528387200000, 31.5748, 31.5748, 30.872, 31.1492, 2479090, 78017156.72, -0.5258, -1.66, 1.17], [1528646400000, 31.07, 31.5352, 30.8423, 30.9413, 1817772, 57155063.14, -0.2087, -0.67, 0.86], [1528732800000, 31.0106, 31.3273, 30.2583, 31.2976, 2226632, 69661482.79, 0.3558, 1.15, 1.07], [1528819200000, 31.2877, 31.2877, 30.486, 30.5157, 2023779, 63153704.25, -0.7825, -2.5, 0.97], [1528905600000, 30.5652, 30.9314, 30.387, 30.585, 1382294, 42894072.55, 0.0702, 0.23, 0.65], [1528992000000, 30.6048, 30.8621, 29.7931, 29.8525, 2328631, 70951946.68, -0.7309, -2.39, 1.11], [1529337600000, 29.1795, 29.5655, 26.8633, 27.0514, 4283385, 121404386.45, -2.8001, -9.38, 2.05], [1529424000000, 27.0217, 27.6749, 26.7247, 27.477, 2513899, 69394267.05, 0.4247, 1.57, 1.21], [1529510400000, 27.4671, 27.5958, 26.0418, 26.0517, 3263888, 88382675.95, -1.4261, -5.19, 1.56], [1529596800000, 26.022, 27.1207, 25.7547, 26.8336, 2440661, 65576571.34, 0.7816, 3, 1.18], [1529856000000, 27.3681, 27.5463, 26.8237, 26.8534, 2110255, 57969581.41, 0.0188, 0.07, 1.01], [1529856000000, 27.3681, 27.5463, 26.8237, 26.8534, 2110255, 57969581.41, 0.0188, 0.07, 1.01], [1529942400000, 26.6258, 27.378, 26.2892, 27.2889, 2026339, 55390595.92, 0.435, 1.62, 0.98], [1530028800000, 27.2196, 27.5364, 26.9821, 27.1701, 1508487, 41471384.83, -0.1201, -0.44, 0.73], [1530115200000, 27.1405, 27.5067, 26.9227, 26.9326, 1609931, 44345991.58, -0.2364, -0.87, 0.78], [1530201600000, 26.9425, 27.962, 26.9425, 27.9323, 2327309, 64952713.7, 0.9992, 3.71, 1.1], [1530460800000, 27.8135, 28.0907, 26.9029, 27.2691, 2087959, 58099131.03, -0.662, -2.37, 1.01], [1530547200000, 27.2691, 27.8234, 26.6554, 27.7244, 2375814, 65739760, 0.4554, 1.67, 1.14], [1530633600000, 27.5661, 27.5661, 26.9722, 27.1207, 1880679, 51680472.63, -0.6044, -2.18, 0.91], [1530720000000, 27.2592, 27.3087, 26.2991, 26.3288, 1658936, 44917512.39, -0.7919, -2.92, 0.8], [1530806400000, 26.3288, 26.9128, 25.9428, 26.5763, 1982000, 53163343.1, 0.2475, 0.94, 0.96], [1531065600000, 26.4278, 27.3186, 26.4278, 27.3186, 2114041, 57804180.65, 0.7415, 2.79, 1.01], [1531152000000, 27.7046, 27.7046, 27.1306, 27.4968, 1807591, 50040988.51, 0.1776, 0.65, 0.87], [1531238400000, 27.1701, 27.2889, 26.5268, 26.8435, 2174217, 58924751.28, -0.6545, -2.38, 1.05], [1531324800000, 26.7247, 28.0808, 26.6258, 27.8729, 3824363, 106646287.54, 1.0282, 3.83, 1.85], [1531411200000, 27.9125, 27.9224, 27.5661, 27.7343, 2406135, 67311633.81, -0.1394, -0.5, 1.16], [1531670400000, 27.7244, 27.9026, 27.4869, 27.7739, 1544786, 43146001.61, 0.0388, 0.14, 0.72], [1531756800000, 27.7838, 27.7937, 27.3186, 27.665, 1731511, 48110085.25, -0.1083, -0.39, 0.83], [1531843200000, 27.9917, 30.1297, 27.7937, 29.3279, 8493445, 249121710.68, 1.6627, 6.01, 4.08], [1531929600000, 29.031, 29.2289, 28.3876, 28.734, 4030046, 117066672.52, -0.5924, -2.02, 1.94], [1532016000000, 28.4668, 28.9419, 28.4668, 28.8429, 2615250, 76011437.38, 0.1092, 0.38, 1.24], [1532275200000, 28.6351, 29.0706, 28.4767, 29.031, 2821783, 82381279.8, 0.1875, 0.65, 1.35], [1532361600000, 28.8825, 29.3477, 28.7439, 29.2388, 3189592, 93816400.13, 0.209, 0.72, 1.53], [1532448000000, 29.4071, 29.803, 28.9815, 29.031, 3633205, 107845578.84, -0.2076, -0.71, 1.75], [1532534400000, 29.1003, 29.1102, 28.3381, 28.4866, 2783449, 80472101.35, -0.5458, -1.88, 1.34], [1532620800000, 28.5856, 28.8231, 28.3678, 28.4173, 1485540, 42858290.33, -0.0684, -0.24, 0.71], [1532880000000, 28.4173, 28.6648, 27.962, 28.1006, 1587390, 45288557.1, -0.3154, -1.11, 0.76], [1532966400000, 27.9818, 28.2886, 27.9125, 28.1699, 1305159, 37069429.25, 0.0702, 0.25, 0.62], [1533052800000, 28.4965, 28.5856, 27.8432, 27.9323, 1894484, 54059729.39, -0.2366, -0.84, 0.91], [1533139200000, 27.9422, 28.0709, 26.4872, 27.0118, 2548552, 69682016.94, -0.9218, -3.3, 1.23], [1533225600000, 27.0514, 27.3978, 26.7247, 26.7247, 1369354, 37343560.86, -0.2863, -1.06, 0.64], [1533484800000, 26.6653, 27.1009, 26.309, 26.6258, 1253735, 33877084.27, -0.0989, -0.37, 0.61], [1533571200000, 26.6258, 27.3879, 26.5268, 27.3384, 1460917, 39876464.42, 0.7135, 2.68, 0.7], [1533657600000, 27.3186, 27.3186, 26.8732, 26.9227, 1227668, 33569792.88, -0.4155, -1.52, 0.59], [1533744000000, 26.7247, 27.5661, 26.7247, 27.3879, 1749666, 48373032.06, 0.4658, 1.73, 0.84], [1533830400000, 27.5166, 27.5166, 27.2196, 27.4374, 1154806, 31923821.14, 0.0493, 0.18, 0.55], [1534089600000, 27.0514, 27.4176, 26.8237, 27.3978, 1373168, 37614495.71, -0.0384, -0.14, 0.66], [1534176000000, 27.3087, 27.3681, 27.0514, 27.1899, 1069691, 29353480.88, -0.2082, -0.76, 0.51], [1534262400000, 27.3087, 27.3087, 26.5268, 26.5565, 1450709, 39327757.35, -0.6335, -2.33, 0.7], [1534348800000, 26.3387, 26.8039, 25.8834, 26.4971, 1027653, 27466172.63, -0.0584, -0.22, 0.5], [1534435200000, 26.8435, 26.8633, 26.2991, 26.309, 1183601, 31797608.79, -0.1881, -0.71, 0.57], [1534694400000, 26.309, 26.6851, 26.1704, 26.6159, 1077703, 28783285.78, 0.3078, 1.17, 0.52], [1534780800000, 26.6456, 26.9326, 26.4377, 26.9128, 1289340, 34876474.58, 0.2981, 1.12, 0.62], [1534867200000, 26.8237, 26.9029, 26.3387, 26.3684, 1175974, 31561595.84, -0.5436, -2.02, 0.57], [1534953600000, 26.3783, 26.6851, 26.3486, 26.5664, 1133926, 30409296.42, 0.1978, 0.75, 0.54], [1535040000000, 26.606, 26.606, 26.1309, 26.1506, 1698014, 45106748.52, -0.4144, -1.56, 0.82], [1535299200000, 26.1309, 26.7346, 26.1309, 26.7049, 1633278, 43797460.12, 0.5544, 2.12, 0.79], [1535385600000, 26.8237, 26.9623, 26.6554, 26.794, 1381281, 37388029.74, 0.0881, 0.33, 0.66], [1535472000000, 26.8732, 26.8732, 26.408, 26.6357, 1056440, 28374503.23, -0.1581, -0.59, 0.51], [1535558400000, 26.507, 26.6258, 26.309, 26.3288, 987500, 26373425, -0.3063, -1.15, 0.46], [1535644800000, 26.1704, 26.5169, 26.121, 26.1605, 888800, 23558984, -0.1685, -0.64, 0.43], [1535904000000, 26.0814, 26.2298, 25.7547, 26.0319, 1251220, 32812744.09, -0.1282, -0.49, 0.6], [1535990400000, 26.1309, 26.5268, 25.9428, 26.5268, 1427933, 37910075.25, 0.4946, 1.9, 0.69], [1536076800000, 26.4377, 26.5565, 26.1012, 26.1309, 981426, 26145382.78, -0.3952, -1.49, 0.47], [1536163200000, 26.121, 26.408, 25.9725, 26.0022, 1116233, 29449792.51, -0.128, -0.49, 0.54], [1536249600000, 26.0121, 26.3882, 25.8141, 25.8933, 1217200, 32046213.68, -0.1092, -0.42, 0.59], [1536508800000, 26.1012, 26.1012, 24.5967, 24.6165, 2207968, 55766550.76, -1.2765, -4.93, 1.07], [1536595200000, 24.4878, 25.0223, 24.4482, 24.7352, 831860, 20783211.4, 0.1182, 0.48, 0.4], [1536681600000, 24.7352, 25.4182, 24.656, 25.0223, 1049763, 26541615.73, 0.2869, 1.16, 0.51], [1536768000000, 25.1213, 25.5271, 24.8441, 25.141, 946000, 24010891.47, 0.1176, 0.47, 0.45], [1536854400000, 25.2994, 25.4875, 24.9233, 24.9926, 1117596, 28527578.24, -0.1483, -0.59, 0.54], [1537113600000, 24.9431, 24.9431, 24.1215, 24.4977, 827562, 20461053.38, -0.4949, -1.98, 0.4], [1537200000000, 24.369, 24.8243, 24.3096, 24.8243, 864057, 21511931.24, 0.3258, 1.33, 0.41], [1537286400000, 24.6362, 25.1608, 24.6362, 24.953, 1156261, 29143732.24, 0.1291, 0.52, 0.56], [1537372800000, 24.7946, 25.1806, 24.7946, 25.0916, 1143000, 28920024, 0.1397, 0.56, 0.55], [1537459200000, 24.9431, 25.6162, 24.8045, 25.4875, 1915843, 48982248.3, 0.3964, 1.58, 0.91], [1537804800000, 25.24, 25.3786, 24.9926, 25.0421, 1329400, 33747430.9, -0.446, -1.75, 0.64], [1537891200000, 25.1707, 25.2895, 25.0025, 25.0619, 1203933, 30583335.27, 0.02, 0.08, 0.58], [1537977600000, 25.141, 25.141, 24.4878, 24.5076, 1269791, 31838600.69, -0.5539, -2.21, 0.61], [1538064000000, 24.6362, 24.8936, 24.5967, 24.8243, 1187409, 29712184.15, 0.3162, 1.29, 0.55], [1538928000000, 24.4977, 24.9134, 24.2898, 24.369, 1360315, 33682211.35, -0.4543, -1.83, 0.65], [1539014400000, 24.3195, 24.5571, 24.2403, 24.2997, 819951, 20199465.08, -0.0682, -0.28, 0.39], [1539100800000, 24.2799, 24.5175, 24.1512, 24.3096, 599915, 14743555.96, 0.0097, 0.04, 0.29], [1539187200000, 23.9533, 23.9533, 21.8747, 21.8846, 2548550, 58314005.92, -2.4262, -9.98, 1.23], [1539273600000, 21.7757, 21.7757, 19.7961, 20.7859, 3177830, 66503809.8, -1.0986, -5.02, 1.54], [1539532800000, 22.5181, 22.8645, 21.6767, 22.1221, 4251920, 95863531.9, 1.3365, 6.43, 2.05], [1539619200000, 21.6866, 22.5676, 21.6866, 21.9935, 2570271, 57643020.28, -0.1283, -0.58, 1.25], [1539705600000, 22.4785, 23.5574, 22.3894, 23.0625, 3840558, 89212842.19, 1.0689, 4.86, 1.86], [1539792000000, 23.4089, 23.4089, 22.5082, 22.716, 2670018, 61850045.44, -0.3459, -1.5, 1.29], [1539878400000, 22.3795, 23.1416, 22.3795, 23.0427, 2081905, 48128392.28, 0.3271, 1.44, 1], [1540137600000, 23.1119, 24.9431, 23.1119, 24.6956, 4060476, 99276403.7, 1.6522, 7.17, 1.95], [1540224000000, 24.7055, 24.7055, 23.9533, 24.2502, 2293584, 56360255.81, -0.4445, -1.8, 1.11], [1540310400000, 24.082, 24.5769, 23.7157, 23.9038, 2140940, 52030826.4, -0.3468, -1.43, 1.03], [1540396800000, 23.1119, 24.4482, 22.5775, 24.3195, 2021212, 48460404.08, 0.4159, 1.74, 0.98], [1540483200000, 24.5472, 24.5472, 23.8048, 23.9434, 1525214, 37156397.74, -0.377, -1.55, 0.74], [1540742400000, 24.0028, 24.0028, 23.3891, 23.5574, 1360239, 32571577.4, -0.3855, -1.61, 0.66], [1540828800000, 23.5574, 25.8141, 23.5574, 25.3984, 6504493, 164846460.63, 1.8421, 7.82, 3.13], [1540915200000, 25.2499, 27.3186, 25.2499, 26.9128, 7784537, 209013083.54, 1.5138, 5.96, 3.77], [1541001600000, 26.794, 27.863, 26.6752, 27.5661, 7858056, 218284772.91, 0.654, 2.43, 3.8], [1541088000000, 28.0214, 29.5556, 27.5661, 29.1102, 8186647, 233668668.23, 1.5437, 5.6, 3.89], [1541347200000, 28.9518, 29.1003, 28.2589, 28.5559, 5666473, 163966702.27, -0.5531, -1.9, 2.7], [1541433600000, 28.5064, 29.1003, 28.1501, 28.5955, 5266360, 152814511.56, 0.04, 0.14, 2.54], [1541520000000, 28.5064, 30.1792, 28.5064, 29.6249, 6230700, 185770602.88, 1.0294, 3.6, 3.02], [1541606400000, 29.6744, 29.7139, 28.6054, 29.0409, 3937174, 115567950.77, -0.5836, -1.97, 1.91], [1541692800000, 28.645, 29.3774, 28.6351, 28.9815, 2626951, 77145155.03, -0.0581, -0.2, 1.27], [1541952000000, 28.7637, 30.3474, 28.7637, 29.6942, 4381096, 131798186.12, 0.7129, 2.46, 2.1], [1542038400000, 29.4764, 30.288, 28.8924, 29.9911, 4552157, 136915299.2, 0.2969, 1, 2.2], [1542124800000, 29.8525, 30.0703, 29.0706, 29.3576, 3926564, 117108394.05, -0.6328, -2.11, 1.9], [1542211200000, 29.2685, 30.2682, 29.2685, 30.0406, 3821909, 115772411.07, 0.684, 2.33, 1.86], [1542297600000, 30.2484, 31.0601, 29.9218, 30.4662, 3611039, 111566535.51, 0.4266, 1.42, 1.75], [1542556800000, 29.704, 30.5355, 29.5853, 30.1693, 2679851, 81308521.56, -0.2955, -0.97, 1.29], [1542643200000, 29.9713, 30.0505, 28.9518, 29.1201, 2996414, 89236233.39, -1.0499, -3.48, 1.44], [1542729600000, 28.645, 30.7334, 28.5658, 30.6444, 5500714, 168041627.45, 1.523, 5.23, 2.65], [1542816000000, 30.7433, 30.8324, 29.5061, 29.6744, 3942612, 119188310.16, -0.9715, -3.17, 1.91], [1542902400000, 29.7535, 30.0307, 28.9023, 29.2982, 2984922, 89260669.33, -0.3769, -1.27, 1.44], [1543161600000, 29.2784, 29.4269, 27.4275, 28.0016, 4984815, 141146301.14, -1.298, -4.43, 2.4], [1543248000000, 28.0313, 28.645, 27.8333, 28.3579, 3406134, 97453347.66, 0.3556, 1.27, 1.65], [1543334400000, 28.4074, 29.4566, 28.2094, 29.1893, 3420001, 100104114.3, 0.8309, 2.93, 1.66], [1543420800000, 29.318, 29.8426, 28.4866, 28.4866, 2925365, 86127406.04, -0.7035, -2.41, 1.4], [1543507200000, 28.3876, 29.6546, 28.3282, 29.3081, 2959492, 87295582.11, 0.8204, 2.88, 1.43], [1543766400000, 30.288, 30.3573, 29.4962, 29.615, 4090879, 123400457.29, 0.3077, 1.05, 1.98], [1543852800000, 29.7733, 30.3078, 29.5457, 30.288, 3688877, 111712610.53, 0.6723, 2.27, 1.76], [1543939200000, 29.6942, 29.803, 29.219, 29.4962, 3400890, 101187681.7, -0.7905, -2.61, 1.65], [1544025600000, 29.1102, 29.2487, 28.4074, 28.6549, 2689787, 78425180.04, -0.8406, -2.85, 1.3], [1544112000000, 28.9518, 29.2784, 28.7043, 29.1003, 1948800, 57214942.44, 0.4442, 1.55, 0.94], [1544371200000, 29.0904, 29.0904, 28.2886, 28.546, 1901638, 54989613.16, -0.5529, -1.9, 0.92], [1544457600000, 28.7934, 29.1498, 28.6252, 29.0508, 1369648, 39979669.61, 0.5053, 1.77, 0.66], [1544544000000, 29.1498, 29.2883, 28.5856, 28.8231, 1503130, 43883342.85, -0.2266, -0.78, 0.73], [1544630400000, 28.8033, 29.1893, 28.1896, 28.9518, 2462528, 71662993.47, 0.1297, 0.45, 1.2], [1544716800000, 28.734, 29.1597, 28.2688, 28.3084, 2029507, 58806796.92, -0.6427, -2.22, 0.97], [1544976000000, 28.447, 28.447, 27.6057, 27.8036, 1951731, 54866583.58, -0.5039, -1.78, 0.94], [1545062400000, 27.7145, 28.2193, 27.3384, 28.0313, 2006190, 56345023.66, 0.228, 0.82, 0.97], [1545148800000, 28.0214, 28.061, 27.6057, 27.6453, 1838383, 51636909.94, -0.3868, -1.38, 0.89], [1545235200000, 27.6453, 27.9521, 27.477, 27.8729, 2103417, 58974549.23, 0.2267, 0.82, 1.02], [1545321600000, 27.7244, 28.0214, 27.3384, 27.764, 2017321, 56500097.75, -0.1087, -0.39, 0.98], [1545580800000, 27.7145, 29.3972, 27.6057, 29.3477, 3957856, 115737060.38, 1.5826, 5.7, 1.9], [1545667200000, 29.031, 30.0703, 28.7043, 29.5952, 3870451, 114779894.42, 0.2465, 0.84, 1.88], [1545753600000, 29.3972, 30.2781, 29.3477, 29.6447, 2672283, 80199412.19, 0.0503, 0.17, 1.29], [1545840000000, 30.0604, 30.1891, 29.1597, 29.3873, 1867305, 55686085.97, -0.2579, -0.87, 0.9], [1545926400000, 29.7535, 29.7931, 28.2985, 28.3876, 2437453, 70382141.54, -0.9991, -3.4, 1.18], [1546358400000, 28.2886, 29.2982, 28.2094, 28.8033, 2200970, 64420672, 0.4145, 1.46, 1.07], [1546444800000, 29.0013, 29.7832, 28.4965, 28.9023, 2545893, 75353473, 0.0979, 0.34, 1.23], [1546531200000, 28.2193, 29.1696, 28.2094, 29.0805, 2376739, 68869599, 0.1792, 0.62, 1.13], [1546790400000, 29.3477, 29.3477, 28.5064, 29.1498, 2552085, 74331304, 0.0698, 0.24, 1.23], [1546876800000, 28.9815, 29.0508, 28.5262, 28.932, 2110640, 61486418, -0.2186, -0.75, 1.02], [1546963200000, 28.7835, 30.4761, 28.5757, 29.9416, 5408244, 162837863, 1.0097, 3.49, 2.61], [1547049600000, 29.8426, 30.1, 29.5457, 30.0505, 3568407, 107679961, 0.1078, 0.36, 1.69], [1547136000000, 29.9812, 30.1, 29.1992, 29.7931, 3298072, 98541547, -0.2584, -0.86, 1.58], [1547395200000, 29.6249, 29.6249, 28.7043, 28.7934, 3283460, 96136461, -1.0011, -3.36, 1.59], [1547481600000, 28.7835, 28.7835, 27.7145, 28.6054, 3530589, 100989525, -0.1872, -0.65, 1.69], [1547568000000, 28.5064, 28.8033, 28.2589, 28.6054, 1694888, 48856965, 0, 0, 0.82], [1547654400000, 28.6054, 28.645, 27.8135, 27.8432, 1834755, 52090983, -0.7609, -2.66, 0.87], [1547740800000, 28.0115, 28.3876, 27.9125, 28.2787, 1668572, 47587717, 0.4344, 1.56, 0.8], [1547740800000, 28.0115, 28.3876, 27.9125, 28.2787, 1668572, 47587717, 0.4344, 1.56, 0.8], [1548000000000, 28.3876, 28.5955, 28.1896, 28.3678, 1478213, 42417350, 0.0905, 0.32, 0.71], [1548086400000, 28.3975, 28.5064, 28.0313, 28.2391, 1396235, 39841504, -0.1277, -0.45, 0.68], [1548172800000, 28.0412, 28.4371, 28.0115, 28.2292, 1044785, 29778015, -0.0113, -0.04, 0.5], [1548259200000, 28.1501, 28.6845, 28.061, 28.5955, 2100485, 60549982, 0.367, 1.3, 1.01], [1548345600000, 28.5262, 28.7835, 28.0709, 28.2292, 2216395, 63412863, -0.366, -1.28, 1.08], [1548604800000, 28.2094, 28.6549, 28.1402, 28.2985, 1727426, 49588643, 0.0706, 0.25, 0.84], [1548691200000, 28.1105, 28.1896, 26.3882, 27.1899, 2710421, 74440673, -1.1093, -3.92, 1.32], [1548777600000, 26.7544, 27.6848, 26.7544, 27.3087, 1825720, 50548064, 0.1196, 0.44, 0.89], [1548864000000, 27.6156, 27.9125, 26.9524, 27.0316, 1462691, 40562922, -0.2758, -1.01, 0.7], [1548950400000, 27.1701, 27.8036, 27.1701, 27.7838, 2007370, 55850070, 0.7515, 2.78, 0.97], [1549814400000, 27.8135, 29.5457, 27.8135, 29.4071, 3869148, 112939381, 1.6226, 5.84, 1.86], [1549900800000, 29.3576, 29.8921, 29.2091, 29.6447, 3174939, 95002861, 0.2382, 0.81, 1.53], [1549987200000, 29.6744, 31.6738, 29.6447, 31.2283, 7383785, 230890471, 1.5831, 5.34, 3.55], [1550073600000, 31.2283, 32.1687, 30.7136, 31.5649, 4146996, 131748566, 0.3373, 1.08, 2], [1550160000000, 31.5055, 31.8519, 31.0799, 31.258, 3079647, 97968643, -0.3062, -0.97, 1.46], [1550419200000, 31.7529, 32.1984, 30.6642, 32.1093, 4974428, 159063440, 0.8502, 2.72, 2.38], [1550505600000, 32.0202, 32.1489, 31.3966, 31.6045, 3203856, 102615763, -0.5041, -1.57, 1.55], [1550592000000, 31.555, 32.1291, 31.0403, 31.4065, 2941738, 93712269, -0.1991, -0.63, 1.42], [1550678400000, 31.4263, 32.812, 31.4065, 31.8321, 5195136, 168580952, 0.4271, 1.36, 2.52], [1550764800000, 31.9212, 32.6042, 31.4659, 32.525, 3501097, 113672928, 0.6939, 2.18, 1.68], [1551024000000, 33.1486, 34.4155, 33.1288, 34.1087, 6887706, 236618435, 1.584, 4.87, 3.33], [1551110400000, 34.3858, 34.8114, 33.5346, 34.0097, 5500271, 190099069, -0.0989, -0.29, 2.67], [1551196800000, 33.8414, 34.3363, 32.6636, 32.9605, 3888872, 131294628, -1.0474, -3.08, 1.87], [1551283200000, 33.0496, 33.7524, 32.7526, 33.5049, 2922200, 98568730, 0.5439, 1.65, 1.41], [1551369600000, 33.5049, 33.7326, 32.7625, 33.5643, 2701064, 90585032, 0.0603, 0.18, 1.27], [1551628800000, 33.6336, 34.4056, 33.2476, 33.5247, 4233719, 144952317, -0.0403, -0.12, 2.05], [1551715200000, 33.5148, 34.3363, 33.1981, 34.2077, 3481301, 119730217, 0.6839, 2.04, 1.66], [1551801600000, 34.2275, 34.6234, 33.8513, 34.5145, 4420555, 152614476, 0.3079, 0.9, 2.14], [1551888000000, 34.2572, 34.9203, 33.9206, 34.6135, 5200033, 180978637, 0.1001, 0.29, 2.52], [1551974400000, 34.2769, 36.1081, 32.6141, 33.0001, 8963166, 309754680, -1.613, -4.66, 4.34], [1552233600000, 33.0001, 34.1285, 33.0001, 33.9899, 4534125, 154035232, 0.99, 3, 2.19], [1552320000000, 34.2769, 35.4251, 34.0592, 34.9401, 6320937, 223063256, 0.9517, 2.8, 3.05], [1552406400000, 34.9401, 35.2371, 33.6633, 33.9008, 4451359, 154204781, -1.0377, -2.97, 2.16], [1552492800000, 33.8612, 34.5244, 33.6831, 33.8216, 3260362, 112057892, -0.078, -0.23, 1.58], [1552579200000, 34.2077, 34.4155, 33.6039, 33.881, 2580366, 88303493, 0.0609, 0.18, 1.25], [1552838400000, 33.9107, 35.336, 33.1882, 35.1084, 5811623, 203143349, 1.2265, 3.62, 2.82], [1552924800000, 35.1084, 35.1183, 34.2473, 34.4551, 3475575, 121243599, -0.653, -1.86, 1.68], [1553011200000, 34.465, 34.8213, 33.9998, 34.7125, 2897196, 100656054, 0.2584, 0.75, 1.38], [1553097600000, 34.5442, 34.9896, 34.2077, 34.6729, 2920690, 102216292, -0.0382, -0.11, 1.41], [1553184000000, 34.7125, 35.5538, 34.2077, 35.4647, 3725419, 131604348, 0.7906, 2.28, 1.79], [1553443200000, 34.7422, 35.0985, 34.2967, 34.4452, 3897133, 136367264, -1.0178, -2.87, 1.88], [1553529600000, 34.7422, 34.7422, 33.4752, 33.594, 2878954, 98668477, -0.8508, -2.47, 1.4], [1553616000000, 33.8018, 33.98, 33.3663, 33.7029, 1868355, 63540186, 0.1075, 0.32, 0.91], [1553702400000, 33.5049, 33.8414, 33.01, 33.1189, 2083569, 70407485, -0.583, -1.73, 1.01], [1553788800000, 33.3762, 34.7125, 33.1189, 34.5937, 3175701, 109670186, 1.4738, 4.45, 1.53], [1554048000000, 34.9896, 35.8309, 34.7422, 35.6627, 4148408, 148591642, 1.0689, 3.09, 2], [1554134400000, 36.0784, 36.0982, 35.0985, 35.7518, 3329674, 119475019, 0.0892, 0.25, 1.6], [1554220800000, 35.7518, 35.9794, 35.3459, 35.6627, 3007189, 108113503, -0.0894, -0.25, 1.44], [1554307200000, 36.2467, 36.504, 35.6627, 36.2071, 3703747, 134814062, 0.5456, 1.53, 1.78], [1554652800000, 36.1972, 36.217, 34.465, 34.7718, 4393913, 156076112, -1.4337, -3.96, 2.12], [1554739200000, 34.5244, 35.2668, 34.5145, 34.9401, 2538648, 89528600, 0.1669, 0.48, 1.23], [1554825600000, 35.0094, 35.2173, 34.2473, 34.9599, 2337518, 81917807, 0.021, 0.06, 1.13], [1554912000000, 34.9599, 35.1678, 34.2077, 34.3066, 1732295, 60414225, -0.6538, -1.87, 0.83], [1554998400000, 34.5442, 35.0193, 34.0394, 34.4749, 1680413, 58830163, 0.1681, 0.49, 0.81], [1555257600000, 35.0094, 35.1876, 33.9008, 33.9701, 2489553, 86889665, -0.5033, -1.46, 1.2], [1555344000000, 33.9701, 34.7916, 33.7524, 34.6927, 1734331, 60148312, 0.7235, 2.13, 0.83], [1555430400000, 34.9203, 35.3162, 34.465, 35.0391, 2366043, 83724086, 0.3469, 1, 1.15], [1555516800000, 34.9401, 35.1381, 34.4452, 34.5343, 2249855, 78790507, -0.5046, -1.44, 1.09], [1555603200000, 34.5244, 34.851, 33.9503, 34.7422, 2363849, 82393573, 0.2072, 0.6, 1.13], [1555862400000, 35.0787, 35.0787, 33.0298, 33.3465, 4303283, 147286099, -1.3967, -4.02, 2.08], [1555948800000, 33.6138, 33.8513, 33.2574, 33.4257, 2235301, 75886755, 0.08, 0.24, 1.08], [1556035200000, 33.4257, 33.6435, 32.3567, 33.5247, 2651208, 88703741, 0.1003, 0.3, 1.28], [1556121600000, 33.5148, 33.9107, 32.4161, 32.4458, 3661924, 122189837, -1.0795, -3.22, 1.76], [1556208000000, 32.4359, 32.4359, 29.3972, 30.2187, 6346123, 196098802, -2.2257, -6.86, 3.08], [1556467200000, 30.2385, 31.6045, 29.8624, 30.8126, 3360919, 104503857, 0.5953, 1.97, 1.62], [1556553600000, 30.1792, 30.288, 29.6051, 29.9713, 4068315, 122780512, -0.8412, -2.73, 1.97], [1557072000000, 29.1003, 29.1003, 26.9722, 27.6552, 6546421, 182099108, -2.3168, -7.73, 3.18], [1557158400000, 27.3087, 28.1995, 27.3087, 27.7145, 4699493, 131915814, 0.0581, 0.21, 2.28], [1557244800000, 27.4176, 27.5166, 26.5466, 27.1207, 3424678, 93819926, -0.5931, -2.14, 1.65], [1557331200000, 26.7742, 27.4869, 26.7247, 27.1602, 2474795, 67927610, 0.0407, 0.15, 1.19], [1557417600000, 27.279, 28.2094, 26.5466, 27.6848, 4899652, 135807850, 0.5242, 1.93, 2.37], [1557676800000, 26.9722, 27.279, 26.7346, 26.9425, 3949976, 107846724, -0.7419, -2.68, 1.91], [1557763200000, 26.5268, 26.9425, 26.4179, 26.5763, 3283093, 88501742, -0.3664, -1.36, 1.59], [1557849600000, 26.8237, 26.9821, 26.5268, 26.8732, 3112179, 84055817, 0.2976, 1.12, 1.49], [1557936000000, 26.9029, 27.2493, 26.7544, 27.1306, 3668481, 100242344, 0.258, 0.96, 1.77], [1558022400000, 27.2889, 27.2889, 26.0616, 26.121, 3538663, 94945822, -1.0092, -3.72, 1.71], [1558281600000, 26.121, 26.121, 24.755, 25.4083, 3556427, 90524000, -0.7131, -2.73, 1.72], [1558368000000, 25.2895, 26.0715, 25.24, 25.9329, 2435666, 63420619, 0.5234, 2.06, 1.17], [1558454400000, 25.9131, 26.1902, 25.537, 25.6854, 1672336, 43708163, -0.2464, -0.95, 0.8], [1558540800000, 25.5964, 25.9032, 25.2499, 25.438, 2004058, 51795896, -0.2466, -0.96, 0.97], [1558627200000, 25.2598, 25.6854, 25.2301, 25.2598, 1593301, 40880082, -0.1781, -0.7, 0.77], [1558886400000, 25.3291, 26.022, 24.9629, 26.0022, 2425153, 63116172, 0.7426, 2.94, 1.17], [1558972800000, 26.0319, 26.1803, 25.7151, 25.8735, 2118599, 55552180, -0.1274, -0.49, 1.02], [1559059200000, 25.7349, 26.2298, 25.5865, 25.7745, 1998827, 52241749, -0.0983, -0.38, 0.97], [1559145600000, 25.7646, 25.7844, 25.24, 25.4677, 1913456, 49140138, -0.3067, -1.19, 0.92], [1559232000000, 25.6854, 25.8834, 25.4875, 25.5469, 1535464, 39805654, 0.079, 0.31, 0.74], [1559491200000, 25.5469, 25.5865, 24.9728, 25.0718, 2229268, 56713657, -0.4752, -1.86, 1.08], [1559577600000, 25.3291, 25.3291, 24.7451, 24.8441, 2414087, 60676911, -0.2282, -0.91, 1.17], [1559664000000, 24.9926, 25.1213, 24.3492, 24.3591, 3136390, 77966783, -0.4844, -1.95, 1.51], [1559750400000, 24.63, 24.65, 23.3, 23.5, 3277358, 78088305, -0.86, -3.53, 1.59], [1560096000000, 23.77, 23.83, 23.43, 23.59, 3235346, 76486856, 0.09, 0.38, 1.57], [1560182400000, 23.62, 24.85, 23.52, 24.85, 4239712, 103161827, 1.26, 5.34, 2.04], [1560268800000, 24.83, 25.09, 24.46, 24.5, 3148948, 77858186, -0.35, -1.41, 1.53], [1560355200000, 24.51, 24.88, 24.42, 24.7, 1995488, 49149108, 0.2, 0.82, 0.97], [1560441600000, 24.73, 24.87, 24.15, 24.18, 2020493, 49425509, -0.52, -2.11, 0.96], [1560700800000, 24.2, 24.67, 23.48, 23.69, 4032084, 95964823, -0.49, -2.03, 1.95], [1560787200000, 23.79, 24.35, 23.62, 23.95, 3836690, 91813277, 0.26, 1.1, 1.86], [1560873600000, 24.5, 24.86, 24.4, 24.48, 5112165, 125877474, 0.53, 2.21, 2.47], [1560960000000, 24.45, 25.21, 24.3, 25.19, 4810624, 119724287, 0.71, 2.9, 2.32], [1561046400000, 25.4, 26, 25.32, 25.5, 5233396, 134041247, 0.31, 1.23, 2.53], [1561305600000, 26, 27.53, 26, 27.05, 10164974, 273564770, 1.55, 6.08, 4.95], [1561392000000, 27.22, 27.22, 26.3, 26.77, 5648334, 150306284, -0.28, -1.04, 2.75], [1561478400000, 26.58, 26.92, 26.43, 26.75, 3771565, 100570329, -0.02, -0.07, 1.84], [1561564800000, 26.75, 26.94, 26.55, 26.64, 4675713, 124902852, -0.11, -0.41, 2.26], [1561651200000, 26.5, 26.51, 25.75, 26.03, 5365560, 139904122, -0.61, -2.29, 2.6], [1561910400000, 26.62, 27.49, 26.42, 27.32, 7603313, 205627598, 1.29, 4.96, 3.68], [1561996800000, 27.44, 27.44, 26.8, 26.93, 4637472, 125470162, -0.39, -1.43, 2.24], [1562083200000, 26.66, 26.78, 26.19, 26.3, 3627610, 95974961, -0.63, -2.34, 1.77], [1562169600000, 26.3, 26.69, 25.94, 26.14, 2978819, 78131220, -0.16, -0.61, 1.44], [1562256000000, 26, 26.34, 25.66, 26.19, 3813583, 99201873, 0.05, 0.19, 1.86], [1562515200000, 26.2, 26.2, 25, 25.17, 4203522, 106639238, -1.02, -3.89, 2.05], [1562601600000, 25.11, 25.44, 25, 25.32, 2329089, 58762005, 0.15, 0.6, 1.13], [1562688000000, 25.38, 25.45, 24.8, 24.83, 2730584, 68416073, -0.49, -1.94, 1.33], [1562774400000, 24.9, 25.39, 24.89, 25.01, 2317438, 58210807, 0.18, 0.72, 1.13], [1562860800000, 25.07, 25.34, 24.88, 25.21, 1810690, 45592025, 0.2, 0.8, 0.88], [1563120000000, 25.24, 25.24, 24.4, 25.05, 3645180, 90446556, -0.16, -0.63, 1.78], [1563206400000, 25.06, 25.16, 24.78, 25.11, 1929412, 48243355, 0.06, 0.24, 0.93], [1563292800000, 25.09, 25.27, 24.95, 25.02, 2163095, 54247419, -0.09, -0.36, 1.05], [1563379200000, 24.89, 24.9, 24.43, 24.44, 2494095, 61288135, -0.58, -2.32, 1.22], [1563465600000, 24.65, 24.79, 24.36, 24.52, 1986208, 48855118, 0.08, 0.33, 0.97], [1563724800000, 24.42, 24.69, 23.91, 24.13, 1984002, 48046166, -0.39, -1.59, 0.97], [1563811200000, 24.15, 24.42, 24.12, 24.42, 1420807, 34463670, 0.29, 1.2, 0.69], [1563897600000, 26.86, 26.86, 26.86, 26.86, 3445472, 92545377, 2.44, 9.99, 1.68], [1563984000000, 29, 29.55, 28.3, 29.55, 16477647, 482727350, 2.69, 10.01, 8.03], [1564070400000, 31.6, 31.8, 30, 30.5, 25801569, 796885174, 0.95, 3.21, 12.57], [1564329600000, 31.58, 31.93, 30.88, 30.95, 18209015, 571386387, 0.45, 1.48, 8.87], [1564416000000, 31.35, 32.3, 31.11, 31.54, 14764387, 466810819, 0.59, 1.91, 7.19], [1564502400000, 31.69, 33.78, 31.17, 33.35, 15979402, 518393165, 1.81, 5.74, 7.79], [1564588800000, 32.83, 33.76, 32.48, 33.19, 14069312, 465362841, -0.16, -0.48, 6.85], [1564675200000, 31.8, 33.36, 30.95, 32.9, 15487136, 497130994, -0.29, -0.87, 7.55], [1564934400000, 32.36, 33.09, 31.62, 31.8, 11679854, 378644768, -1.1, -3.34, 5.69], [1565020800000, 30.92, 32.2, 30.41, 31.72, 11411327, 357044976, -0.08, -0.25, 5.56], [1565107200000, 31.7, 31.88, 30.28, 30.33, 10614535, 328437515, -1.39, -4.38, 5.17], [1565193600000, 30.63, 31.43, 30.4, 30.91, 10244014, 317576936, 0.58, 1.91, 4.99], [1565280000000, 31.59, 34, 31.29, 33.8, 19867908, 664914385, 2.89, 9.35, 9.68], [1565539200000, 33.49, 35.88, 33.1, 35.32, 19304199, 663449284, 1.52, 4.5, 9.41], [1565625600000, 35.21, 38.5, 34.77, 38.2, 19658295, 722150846, 2.88, 8.15, 9.58], [1565712000000, 39.01, 40.98, 37.55, 38.09, 21761646, 854442182, -0.11, -0.29, 10.6], [1565798400000, 37.52, 39.28, 37.38, 38.71, 15624059, 596337491, 0.62, 1.63, 7.61], [1565884800000, 38.59, 39, 37.79, 37.81, 11447475, 437861886, -0.9, -2.32, 5.58], [1566144000000, 38.51, 40.08, 37.86, 39.13, 17486225, 681965080, 1.32, 3.49, 8.52], [1566144000000, 38.51, 40.08, 37.86, 39.13, 17486225, 681965080, 1.32, 3.49, 8.52], [1566230400000, 38.45, 39.66, 37.91, 38.38, 11538063, 446392065, -0.75, -1.92, 5.62], [1566316800000, 38.55, 39.5, 37.61, 39.5, 12140440, 468622289, 1.12, 2.92, 5.92], [1566403200000, 39.49, 42.2, 39.18, 42, 16301793, 670117754, 2.5, 6.33, 7.94], [1566489600000, 41.38, 41.6, 39.6, 40.05, 14036068, 567238048, -1.95, -4.64, 6.84], [1566748800000, 38.6, 39.45, 38.3, 38.81, 10383382, 403108705, -1.24, -3.1, 5.06], [1566835200000, 39.01, 39.97, 38.65, 38.89, 9515769, 372387780, 0.08, 0.21, 4.64], [1566921600000, 38.3, 39.2, 38.15, 38.2, 8406477, 324482951, -0.69, -1.77, 4.1], [1567008000000, 38, 39.01, 37.83, 38.2, 8435726, 324184253, 0, 0, 4.11], [1567094400000, 38.18, 38.85, 36.5, 36.83, 12147558, 455493707, -1.37, -3.59, 5.92], [1567353600000, 37.22, 38.16, 36.72, 37.75, 9823516, 367793606, 0.92, 2.5, 4.79], [1567440000000, 37.77, 38.97, 36.8, 38.96, 11429154, 434273247, 1.21, 3.21, 5.57], [1567526400000, 38.97, 39.19, 37.67, 38.22, 8956099, 342540945, -0.74, -1.9, 4.36], [1567612800000, 38.22, 40.1, 38.05, 38.65, 13432605, 523668653, 0.43, 1.13, 6.54], [1567699200000, 38.55, 39.58, 38.06, 38.42, 9071027, 351720473, -0.23, -0.6, 4.42], [1567958400000, 38.58, 41.1, 38.58, 41, 13637255, 542155003, 2.58, 6.72, 6.64], [1568044800000, 40.9, 40.95, 38.87, 39.3, 10807622, 427899544, -1.7, -4.15, 5.27], [1568131200000, 39.4, 39.55, 37.71, 37.73, 8931189, 342983411, -1.57, -3.99, 4.35], [1568217600000, 37.73, 38.34, 37.26, 38.26, 4686826, 177603944, 0.53, 1.4, 2.28], [1568563200000, 38.6, 41.99, 38.58, 41.05, 18717746, 759279619, 2.79, 7.29, 9.12], [1568649600000, 41.35, 43.11, 41.18, 42.79, 20059383, 848400089, 1.74, 4.24, 9.77], [1568736000000, 42.79, 42.79, 40.67, 41.95, 13313909, 553924077, -0.84, -1.96, 6.49], [1568822400000, 42.2, 44.84, 41.42, 44.33, 15919012, 690952640, 2.38, 5.67, 7.76], [1568908800000, 43.99, 47.08, 43.53, 44.48, 16834788, 759110174, 0.15, 0.34, 8.2], [1569168000000, 44.28, 45.44, 43.3, 44.49, 11321856, 504790312, 0.01, 0.02, 5.52], [1569254400000, 44.9, 45.2, 43.86, 44.19, 10621579, 472879645, -0.3, -0.67, 5.18], [1569340800000, 43.85, 44, 42.2, 43.22, 10556442, 454496019, -0.97, -2.2, 5.14], [1569427200000, 43.55, 43.57, 39.24, 39.47, 13117655, 534853033, -3.75, -8.68, 6.39], [1569513600000, 39.65, 41.9, 39.65, 41.3, 10503795, 430615536, 1.83, 4.64, 5.12], [1569772800000, 41.99, 41.99, 39.9, 40.75, 6892155, 282017379, -0.55, -1.33, 3.36], [1570464000000, 41.4, 41.78, 39.36, 39.84, 7727752, 312966108, -0.91, -2.23, 3.77], [1570550400000, 39.31, 40.13, 38.41, 39.77, 8988376, 353519849, -0.07, -0.18, 4.38], [1570636800000, 40.28, 41.62, 39.69, 40.85, 10005736, 407255562, 1.08, 2.72, 4.88], [1570723200000, 41.1, 41.56, 39.74, 39.77, 7821095, 316059647, -1.08, -2.64, 3.81], [1570982400000, 40.6, 43.75, 40.1, 43.75, 14872962, 627084736, 3.98, 10.01, 7.25], [1571068800000, 43, 43.18, 41.53, 41.93, 10941783, 462894080, -1.82, -4.16, 5.33], [1571155200000, 41.71, 42.49, 41.19, 41.35, 7083230, 295756307, -0.58, -1.38, 3.45], [1571241600000, 41.48, 42.88, 40.77, 41.5, 9226135, 387463127, 0.15, 0.36, 4.5], [1571328000000, 41.92, 41.92, 39.56, 40.25, 8552945, 346643970, -1.25, -3.01, 4.17], [1571587200000, 39.73, 39.9, 38.61, 39.2, 5292773, 207259088, -1.05, -2.61, 2.58], [1571673600000, 39.55, 40.2, 39.15, 40.05, 5051505, 200677192, 0.85, 2.17, 2.46], [1571760000000, 39.91, 40.78, 39.3, 39.66, 5244729, 209542965, -0.39, -0.97, 2.56], [1571846400000, 39.53, 40.12, 38.8, 39.57, 4686614, 184768660, -0.09, -0.23, 2.28], [1571932800000, 39.57, 41.08, 39.2, 40.91, 7100994, 286564724, 1.34, 3.39, 3.46], [1572192000000, 41, 41.7, 40.5, 41.09, 6411565, 263996289, 0.18, 0.44, 3.12], [1572278400000, 40.9, 40.9, 38.91, 38.95, 11716291, 461519329, -2.14, -5.21, 5.71], [1572364800000, 38.95, 38.95, 37.28, 38.06, 5936259, 226491969, -0.89, -2.28, 2.89], [1572451200000, 37.83, 38.47, 37.39, 37.5, 5841664, 220175813, -0.56, -1.47, 2.85], [1572537600000, 37.34, 37.74, 37.2, 37.53, 5927806, 222220425, 0.03, 0.08, 2.89], [1572796800000, 37.53, 38.6, 37.53, 37.91, 8122567, 308823274, 0.38, 1.01, 3.96], [1572883200000, 37.92, 41.5, 37.68, 40.49, 16666602, 661936177, 2.58, 6.81, 8.12], [1572969600000, 40.97, 41.48, 39.66, 40.17, 13645798, 553995396, -0.32, -0.79, 6.65], [1573056000000, 39.67, 39.8, 37.97, 38.63, 14614428, 566881569, -1.54, -3.83, 7.12], [1573142400000, 38.8, 39.38, 38.5, 38.66, 8871469, 344699800, 0.03, 0.08, 4.32], [1573401600000, 38.02, 38.34, 36.42, 36.48, 9803002, 365400881, -2.18, -5.64, 4.78], [1573488000000, 36.67, 36.7, 35.43, 36.26, 6524405, 234704830, -0.22, -0.6, 3.18], [1573574400000, 36.28, 36.34, 35.7, 36.02, 4923704, 177372531, -0.24, -0.66, 2.4], [1573660800000, 36.05, 37.69, 36.05, 37.64, 8169348, 302321935, 1.62, 4.5, 3.98], [1573747200000, 37.28, 37.59, 36.43, 36.93, 7204534, 265500074, -0.71, -1.89, 3.51], [1574006400000, 36.9, 37.13, 36.36, 36.78, 3976109, 146273220, -0.15, -0.41, 1.94], [1574092800000, 36.89, 37.64, 36.41, 37.51, 7505373, 279267405, 0.73, 1.98, 3.66], [1574179200000, 37.5, 37.5, 36.66, 36.81, 5336367, 197320419, -0.7, -1.87, 2.6], [1574265600000, 36.53, 36.77, 36, 36.5, 4079903, 148147523, -0.31, -0.84, 1.99], [1574352000000, 36.44, 37.8, 36.3, 36.68, 8250452, 306343236, 0.18, 0.49, 4.02], [1574611200000, 36.3, 36.48, 34.93, 35.16, 6989293, 247534854, -1.52, -4.14, 3.41], [1574697600000, 35.28, 35.89, 35, 35.76, 4304988, 153468524, 0.6, 1.71, 2.1], [1574784000000, 35.69, 37.27, 35.4, 36.72, 7701535, 281834519, 0.96, 2.68, 3.75], [1574870400000, 36.72, 38.48, 36.5, 37.49, 10463935, 394639040, 0.77, 2.1, 5.1], [1574956800000, 37.58, 37.95, 36.85, 37.21, 5869981, 218972670, -0.28, -0.75, 2.86], [1575216000000, 37.41, 37.69, 36.75, 37.49, 4532321, 169044174, 0.28, 0.75, 2.21], [1575302400000, 37.35, 37.58, 36.9, 37.57, 4566095, 170100427, 0.08, 0.21, 2.22], [1575388800000, 37.08, 39.12, 37.08, 38.67, 10152645, 390272659, 1.1, 2.93, 4.95], [1575475200000, 38.74, 39.6, 38.33, 39.41, 11114491, 434433302, 0.74, 1.91, 5.42], [1575561600000, 39.42, 40.49, 39.15, 39.72, 11255877, 447157922, 0.31, 0.79, 5.48], [1575820800000, 40.07, 40.4, 39.4, 39.78, 7107485, 283469784, 0.06, 0.15, 3.46], [1575907200000, 39.51, 40.8, 39.21, 40.8, 9252650, 370754872, 1.02, 2.56, 4.51], [1575993600000, 40.66, 40.7, 38.9, 38.99, 10827886, 428686177, -1.81, -4.44, 5.28], [1576080000000, 38.84, 39.31, 38.23, 38.45, 7848554, 304455269, -0.54, -1.38, 3.82], [1576166400000, 38.85, 40.32, 38.52, 40.09, 12344413, 489375966, 1.64, 4.27, 5.93], [1576425600000, 40.4, 42.39, 40.15, 41.9, 14959871, 616617415, 1.81, 4.51, 7.24], [1576512000000, 41.67, 43.43, 41.53, 42.28, 13809202, 584422852, 0.38, 0.91, 6.73], [1576598400000, 42.1, 42.42, 41.42, 41.61, 9357024, 391519742, -0.67, -1.58, 4.56], [1576684800000, 41.59, 42.1, 41.06, 41.39, 6186405, 255896293, -0.22, -0.53, 3.01], [1576771200000, 41.38, 41.8, 40.8, 40.8, 6925833, 285888762, -0.59, -1.43, 3.3], [1577030400000, 40.4, 41.18, 39.27, 39.41, 7475973, 299918846, -1.39, -3.41, 3.64], [1577116800000, 39.57, 41.52, 39.57, 41.5, 8972735, 364761881, 2.09, 5.3, 4.37], [1577203200000, 41.54, 41.54, 40.5, 41.21, 8920945, 365526896, -0.29, -0.7, 4.35], [1577289600000, 41.3, 42.15, 41.1, 41.46, 8289877, 344825723, 0.25, 0.61, 3.98], [1577376000000, 41.55, 42.6, 40.41, 40.61, 10652042, 442148930, -0.85, -2.05, 5.19], [1577635200000, 40.25, 40.99, 39, 40.74, 6568327, 264123944, 0.13, 0.32, 3.18], [1577721600000, 40.6, 41.39, 40.3, 40.74, 5046759, 206147875, 0, 0, 2.42], [1577894400000, 41.11, 42.13, 40.71, 41.72, 8011732, 332796075, 0.98, 2.41, 3.87], [1577980800000, 41.85, 42.49, 41.41, 42.08, 7829801, 328971564, 0.36, 0.86, 3.78], [1578240000000, 41.8, 43.74, 41.5, 43.17, 12766082, 548603147, 1.09, 2.59, 6.17], [1578326400000, 43.04, 43.08, 42.18, 42.86, 7548780, 321388081, -0.31, -0.72, 3.63], [1578412800000, 42.67, 42.88, 41.52, 41.63, 7645812, 321470634, -1.23, -2.87, 3.69], [1578499200000, 42.15, 42.49, 41.8, 42.28, 5931130, 250130544, 0.65, 1.56, 2.85], [1578585600000, 42.48, 42.48, 41.5, 42.13, 6184839, 259274694, -0.15, -0.35, 2.98], [1578844800000, 42.11, 42.9, 41.99, 42.65, 8863887, 377228871, 0.52, 1.23, 4.28], [1578931200000, 43, 44.16, 42.51, 43.12, 11283939, 489434473, 0.47, 1.1, 5.47], [1579017600000, 42.89, 43.4, 41.71, 42.19, 7505858, 317055182, -0.93, -2.16, 3.62], [1579104000000, 44.3, 46.41, 43.51, 46.41, 13433926, 608578920, 4.22, 10, 6.51], [1579190400000, 46.98, 47.28, 44.66, 45.76, 18695269, 855765680, -0.65, -1.4, 9.03], [1579449600000, 45.79, 47.79, 45.38, 47.32, 11569119, 539078536, 1.56, 3.41, 5.55], [1579536000000, 46.76, 47.24, 46.06, 46.48, 8394902, 391098956, -0.84, -1.78, 4.05], [1579622400000, 46.03, 49.58, 45.01, 49.06, 11576024, 550195072, 2.58, 5.55, 5.55], [1579708800000, 47.93, 48.88, 45.96, 46.5, 10602246, 503301921, -2.56, -5.22, 5.11], [1580659200000, 41.85, 41.85, 41.85, 41.85, 1077600, 45097560, -4.65, -10, 0.52], [1580745600000, 38.8, 43.95, 38.72, 42.52, 12613930, 533420079, 0.67, 1.6, 6.1], [1580832000000, 42.95, 44.48, 42.24, 42.53, 10439353, 452696323, 0.01, 0.02, 5.06], [1580918400000, 41.5, 43.98, 41.38, 43.42, 10694883, 454266630, 0.89, 2.09, 5.17], [1581004800000, 42.99, 43.25, 41.88, 42.91, 9515944, 405648544, -0.51, -1.17, 4.57], [1581264000000, 42.4, 44.65, 41.68, 44.45, 11468584, 498368730, 1.54, 3.59, 5.5], [1581350400000, 44.5, 44.57, 43.5, 44.05, 7536608, 331321828, -0.4, -0.9, 3.62], [1581436800000, 43.95, 46.31, 43.57, 45.74, 11995310, 545828325, 1.69, 3.84, 5.78], [1581523200000, 45.48, 46.55, 44.8, 45.61, 10686765, 488490655, -0.13, -0.28, 5.16], [1581609600000, 45.63, 47.3, 45.36, 46, 10891737, 504955511, 0.39, 0.86, 5.21], [1581868800000, 46.11, 48.24, 46.11, 48.17, 12310811, 584665007, 2.17, 4.72, 5.82], [1581955200000, 49.28, 49.28, 47, 48.28, 12253666, 590925179, 0.11, 0.23, 5.93], [1582041600000, 48.28, 48.28, 46, 46.16, 12514736, 589149807, -2.12, -4.39, 6.04], [1582128000000, 46.58, 47.1, 46.09, 46.92, 8845406, 413696251, 0.76, 1.65, 4.25], [1582214400000, 46.97, 48.5, 46.84, 48.3, 14236456, 683163241, 1.38, 2.94, 6.8], [1582473600000, 48.3, 52.13, 47.91, 50.96, 15637783, 779467649, 2.66, 5.51, 7.56], [1582560000000, 49.98, 51.08, 47.2, 50.96, 16695722, 831051426, 0, 0, 8.08], [1582646400000, 49.69, 50.58, 47, 47.6, 11768725, 575990929, -3.36, -6.59, 5.68], [1582732800000, 48, 48.39, 45.97, 47.44, 8839251, 419179836, -0.16, -0.34, 4.27], [1582819200000, 45.26, 46.32, 44, 44.39, 10350491, 467514641, -3.05, -6.43, 5], [1583078400000, 44.69, 45.95, 44.16, 45.61, 6368044, 287637685, 1.22, 2.75, 3.07], [1583164800000, 47.05, 48.17, 46.6, 46.99, 9171862, 434276906, 1.38, 3.03, 4.44], [1583251200000, 46.48, 47.3, 45.96, 46.65, 4859490, 225974619, -0.34, -0.72, 2.34], [1583337600000, 47.42, 47.6, 46.18, 46.69, 4954523, 231672090, 0.04, 0.09, 2.39], [1583424000000, 45.8, 46.8, 45.18, 45.85, 4401961, 203311415, -0.84, -1.8, 2.12], [1583683200000, 45.08, 45.08, 43.27, 43.66, 5607615, 247634922, -2.19, -4.78, 2.72], [1583769600000, 43.11, 44.9, 42.36, 44.69, 6078661, 266057952, 1.03, 2.36, 2.93], [1583856000000, 45, 45, 43.15, 43.19, 5469360, 240547117, -1.5, -3.36, 2.65], [1583942400000, 42.08, 42.4, 41.02, 41.3, 6186181, 257404727, -1.89, -4.38, 2.99], [1584028800000, 38.38, 40.76, 38.3, 40.7, 9859050, 388531108, -0.6, -1.45, 4.72], [1584288000000, 40.9, 40.96, 37.06, 37.34, 7470278, 291138470, -3.36, -8.26, 3.6], [1584374400000, 37.33, 38.48, 36, 37.2, 5037455, 187345746, -0.14, -0.37, 2.44], [1584460800000, 37.5, 38.25, 36.63, 36.68, 4978512, 187269474, -0.52, -1.4, 2.41], [1584547200000, 37.01, 37.24, 35.8, 37.13, 4636570, 170366339, 0.45, 1.23, 2.24], [1584633600000, 37.55, 37.8, 36.7, 37.34, 4554647, 169766723, 0.21, 0.57, 2.19]];
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
