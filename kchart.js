(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kchart"],{

  /***/ "../dist/kchart.css":
  /*!**************************!*\
    !*** ../dist/kchart.css ***!
    \**************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  
  var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./kchart.css */ "../node_modules/css-loader/dist/cjs.js!../dist/kchart.css");
  
  if(typeof content === 'string') content = [[module.i, content, '']];
  
  var transform;
  var insertInto;
  
  
  
  var options = {"hmr":true}
  
  options.transform = transform
  options.insertInto = undefined;
  
  var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);
  
  if(content.locals) module.exports = content.locals;
  
  if(true) {
    module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js!./kchart.css */ "../node_modules/css-loader/dist/cjs.js!../dist/kchart.css", function() {
      var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./kchart.css */ "../node_modules/css-loader/dist/cjs.js!../dist/kchart.css");
  
      if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
  
      var locals = (function(a, b) {
        var key, idx = 0;
  
        for(key in a) {
          if(!b || a[key] !== b[key]) return false;
          idx++;
        }
  
        for(key in b) idx--;
  
        return idx === 0;
      }(content.locals, newContent.locals));
  
      if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
  
      update(newContent);
    });
  
    module.hot.dispose(function() { update(); });
  }
  
  /***/ }),
  
  /***/ "../dist/kchart.js":
  /*!*************************!*\
    !*** ../dist/kchart.js ***!
    \*************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * kchart v0.0.1
   * (c) 2020 kaiyu5609
   * @license MIT
   */
  (function (global, factory) {
     true ? module.exports = factory(__webpack_require__(/*! konva */ "konva"), __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! d3 */ "d3"), __webpack_require__(/*! moment */ "moment")) : undefined;
  })(this, function (Konva$1, $, d3, moment) {
    'use strict';
  
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
    } // Copyright Joyent, Inc. and other Node contributors.
  
  
    var R = typeof Reflect === 'object' ? Reflect : null;
    var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
  
    if (R && typeof R.ownKeys === 'function') {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
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
  
    var events = EventEmitter; // Backwards-compat with node 0.10.x
  
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
  
    var defaultMaxListeners = 10;
  
    function checkListener(listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
  
    Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
      enumerable: true,
      get: function () {
        return defaultMaxListeners;
      },
      set: function (arg) {
        if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
        }
  
        defaultMaxListeners = arg;
      }
    });
  
    EventEmitter.init = function () {
      if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
      }
  
      this._maxListeners = this._maxListeners || undefined;
    }; // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
  
  
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
      }
  
      this._maxListeners = n;
      return this;
    };
  
    function _getMaxListeners(that) {
      if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
  
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
  
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
  
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  
      var doError = type === 'error';
      var events = this._events;
      if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.
  
      if (doError) {
        var er;
        if (args.length > 0) er = args[0];
  
        if (er instanceof Error) {
          // Note: The comments on the `throw` lines are intentional, they show
          // up in Node's output if this results in an unhandled exception.
          throw er; // Unhandled 'error' event
        } // At least give some kind of context to the user
  
  
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
      }
  
      var handler = events[type];
      if (handler === undefined) return false;
  
      if (typeof handler === 'function') {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
  
        for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
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
          target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
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
          existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        } // Check for listener leak
  
  
        m = _getMaxListeners(target);
  
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true; // No error code for this since it is a Warning
          // eslint-disable-next-line no-restricted-syntax
  
          var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
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
  
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
  
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
  
    function _onceWrap(target, type, listener) {
      var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
      };
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
  
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    }; // Emits a 'removeListener' event if and only if the listener was removed.
  
  
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === undefined) return this;
      list = events[type];
      if (list === undefined) return this;
  
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);else {
          delete events[type];
          if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
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
  
        if (position < 0) return this;
        if (position === 0) list.shift();else {
          spliceOne(list, position);
        }
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
      }
  
      return this;
    };
  
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === undefined) return this; // not listening for removeListener, no need to emit
  
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
        }
  
        return this;
      } // emit removeListener for all listeners on all events
  
  
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
      if (events === undefined) return [];
      var evlistener = events[type];
      if (evlistener === undefined) return [];
      if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
  
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
  
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
  
    EventEmitter.listenerCount = function (emitter, type) {
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
  
      for (var i = 0; i < n; ++i) copy[i] = arr[i];
  
      return copy;
    }
  
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  
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
          // 'ma5': '#f80',
          // 'ma10': '#08c',
          // 'ma20': '#d3a',
          // 'ma30': '#f45',
          // 'ma60': '#608',
          'ma5': 'rgba(255, 136, 0, 0.8)',
          'ma10': 'rgba(0, 136, 204, 0.8)',
          'ma20': 'rgba(221, 51, 170, 0.8)',
          'ma30': 'rgba(255, 68, 85, 0.8)',
          'ma60': 'rgba(102, 0, 136, 0.8)',
          'ma5_o': 'rgba(255, 136, 0, 0.2)',
          'ma10_o': 'rgba(0, 136, 204, 0.2)',
          'ma20_o': 'rgba(221, 51, 170, 0.2)',
          'ma30_o': 'rgba(255, 68, 85, 0.2)',
          'ma60_o': 'rgba(102, 0, 136, 0.2)',
          // 'red': '#e30',
          // 'green': '#0a0',
          'red': '#e24e3c',
          'green': '#51a169',
          'blue': '#06c',
          'close': '#06c',
          // 'text': '#333'
          'text': '#43474c'
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
  
            if (mode === 'moveChart') ;else if (mode === 'scaleChart') {
              options.startIndex = -options.count;
            }
            self.update();
          });
  
          function startHandler(e) {
            var touches = e.evt.touches,
                xData = self.dataSet.getData('xData');
  
            switch (e.type) {
              case 'touchstart':
                self._isDrag = true;
                self._mouseX = self.stage.getPointerPosition().x - left;
                self._mouseY = self.stage.getPointerPosition().y;
  
                if (touches && touches.length == 2) {
                  if (!self._isDragging) {
                    // 当单指moveChart变成双指moveChart时，仍然算是moveChart，而不是scaleChart
                    self._isDrag = false;
                  }
  
                  self._isPinch = true;
                  self._isLongTouch = false;
                  self._touches = touches;
                } else {
                  self._longTouchtimer = setTimeout(function () {
                    self._isLongTouch = true;
                    self._isDrag = false;
                    self.mouseIndex = xData.findIndex(function (v) {
                      // return v >= x
                      return v + kwidth >= self._mouseX;
                    });
                    self.addMouseLine({
                      emitter: 'self',
                      type: true,
                      mouseIndex: self.mouseIndex,
                      mouseX: self._mouseX,
                      mouseY: self._mouseY,
                      isDrag: false,
                      isLongTouch: true
                    });
                    self.emit('add-mouse-line', {
                      emitter: 'other',
                      type: true,
                      mouseIndex: self.mouseIndex,
                      mouseX: self._mouseX,
                      mouseY: self._mouseY,
                      isDrag: false,
                      isLongTouch: true
                    });
                  }, 300);
                }
  
                break;
  
              case 'mousedown':
                self._mouseX = e.evt.offsetX - left;
                self._isDrag = true;
                break;
            }
          }
  
          function endHandler(e) {
            var touches = e.evt.touches;
  
            switch (e.type) {
              case 'touchend':
                if (touches && touches.length == 0) {
                  self._isDrag = false;
                  self._isDragging = false;
                }
  
                if (self._isLongTouch) {
                  self._isLongTouch = false;
                  setTimeout(function () {
                    self.removeMouseLine();
                    self.emit('remove-mouse-line');
                  }, 300);
                }
  
                break;
  
              case 'mouseup':
                self._isDrag = false;
                self._isDragging = false;
                break;
            } // 当touchend之后，touchmove还会执行，所以这里延迟将_isPinch设置为false
  
  
            setTimeout(function () {
              self._isPinch = false;
            }, 100);
            self._longTouchtimer && clearTimeout(self._longTouchtimer);
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
  
            if (options.startIndex <= -allKlineData.length) {
              options.startIndex = -allKlineData.length;
            }
  
            if (options.stopIndex <= count) {
              options.stopIndex = count;
            }
  
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
            emitter: this,
            type: false,
            mouseIndex: this.mouseIndex,
            mouseX: this._mouseX,
            mouseY: this._mouseY,
            isDrag: this._isDrag
          });
          this.emit('add-mouse-line', {
            emitter: 'other',
            type: false,
            mouseIndex: this.mouseIndex,
            mouseX: this._mouseX,
            mouseY: this._mouseY,
            isDrag: this._isDrag
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
  
              if (options.startIndex <= -allKlineData.length) {
                options.startIndex = -allKlineData.length;
              }
  
              if (options.stopIndex <= options.count) {
                options.stopIndex = options.count;
              }
  
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
      }, {
        key: "connect",
        value: function connect(components) {
          var _this5 = this;
  
          if (!Array.isArray(components)) {
            components = [components];
          }
  
          components.forEach(function (component) {
            _this5.on('move-chart', function (_ref) {
              var index = _ref.index;
              component.moveChart(index, {
                emitter: _this5
              });
            }).on('scale-chart', function (_ref2) {
              var scale = _ref2.scale;
              component.scaleChart(scale, {
                emitter: _this5
              });
            }).on('reset-scale-chart', function () {
              component.resetScaleChart({
                emitter: _this5
              });
            }).on('add-mouse-line', function (data) {
              component.addMouseLine(data);
            }).on('remove-mouse-line', function () {
              component.removeMouseLine();
            });
          });
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
  
    function getDis(point1, point2) {
      var x = point2.pageX - point1.pageX;
      var y = point2.pageY - point1.pageY;
      return Math.sqrt(x * x + y * y);
    }
  
    function getPinchDis(touches1, touches2) {
      var dis1 = getDis(touches1[0], touches1[1]);
      var dis2 = getDis(touches2[0], touches2[1]);
      return dis2 - dis1;
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
        value: function addMouseLine(options) {
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
          var type = options.type,
              mouseIndex = options.mouseIndex,
              isValidPoint = options.isValidPoint,
              mouseX = options.mouseX,
              mouseY = options.mouseY,
              isDrag = options.isDrag,
              emitter = options.emitter,
              isLongTouch = options.isLongTouch,
              isPinch = options.isPinch;
          var data = {
            lines: [],
            rects: [],
            texts: [],
            circles: []
          }; // TODO
  
          if (type === false || mouseIndex >= 0 && !isDrag && !isPinch && isValidPoint || isLongTouch) {
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
            context.currentIndex = typeof mouseIndex != null ? mouseIndex : context.mouseIndex;
  
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
  
          if (emitter !== 'other') {
            data.circles.forEach(function (opts) {
              var node = new Konva.Circle(opts);
  
              _this2.groups.main.add(node);
            });
          }
  
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
            var touches = e.evt.touches,
                pinchDis;
  
            switch (e.type) {
              case 'touchmove':
                x = self.stage.getPointerPosition().x - left;
                y = self.stage.getPointerPosition().y;
                self._longTouchtimer && clearTimeout(self._longTouchtimer);
                break;
  
              case 'mousemove':
                x = e.evt.offsetX - left;
                y = e.evt.offsetY;
                break;
            }
  
            if (y < stateHeight || y > figureHeight) {
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
                self.moveChart(index * 2);
                self._isDragging = true;
              }
            } else if (self._isPinch && touches && touches.length == 2) {
              pinchDis = getPinchDis(self._touches, touches);
              self.scaleChart(Math.sign(pinchDis));
            }
  
            self.mouseIndex = xData.findIndex(function (v) {
              // return v >= x
              return v + kwidth >= x;
            }); // $('#tips-1').text(self._mouseX + ',' + x + ',' + index + ',' + options.startIndex + ',' + options.stopIndex)
  
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
              isDrag: self._isDrag,
              isPinch: self._isPinch,
              isLongTouch: self._isLongTouch
            }); // TODO
  
            self.emit('add-mouse-line', {
              emitter: 'other',
              type: mouseLineType,
              mouseIndex: self.mouseIndex,
              isValidPoint: isValidPoint,
              mouseX: self._mouseX,
              mouseY: self._mouseY,
              isDrag: self._isDrag,
              isPinch: self._isPinch,
              isLongTouch: self._isLongTouch
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
          this.stage.on('touchstart', clickHandler);
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
          figureHeight: 70,
          maList: ['ma5', 'ma10']
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
            var touches = e.evt.touches,
                pinchDis;
  
            switch (e.type) {
              case 'touchmove':
                x = self.stage.getPointerPosition().x - left;
                y = self.stage.getPointerPosition().y;
                self._longTouchtimer && clearTimeout(self._longTouchtimer);
                break;
  
              case 'mousemove':
                x = e.evt.offsetX - left;
                y = e.evt.offsetY;
                break;
            }
  
            if (y < stateHeight || y > figureHeight) {
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
                self.moveChart(index * 2);
                self._isDragging = true;
              }
            } else if (self._isPinch && touches && touches.length == 2) {
              pinchDis = getPinchDis(self._touches, touches);
              self.scaleChart(Math.sign(pinchDis));
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
              isDrag: self._isDrag,
              isPinch: self._isPinch,
              isLongTouch: self._isLongTouch
            }); // TODO
  
            self.emit('add-mouse-line', {
              emitter: 'other',
              type: mouseLineType,
              mouseIndex: self.mouseIndex,
              isValidPoint: isValidPoint,
              mouseX: self._mouseX,
              mouseY: self._mouseY,
              isDrag: self._isDrag,
              isPinch: self._isPinch,
              isLongTouch: self._isLongTouch
            });
          }
  
          this.stage.on('click', clickHandler);
          this.stage.on('mousemove', moveHandler);
          this.stage.on('touchmove', moveHandler);
          this.mouseLine.on('mouseline-move', function () {
            self.drawMaLine();
          });
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
        key: "drawMaLine",
        value: function drawMaLine() {
          var _this4 = this;
  
          var _this$$options5 = this.$options,
              width = _this$$options5.width,
              height = _this$$options5.height,
              left = _this$$options5.left,
              stateHeight = _this$$options5.stateHeight,
              figureWidth = _this$$options5.figureWidth,
              kspan = _this$$options5.kspan,
              kwidth = _this$$options5.kwidth,
              maList = _this$$options5.maList,
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
            stateHeight: stateHeight,
            figureWidth: figureWidth,
            kspan: kspan,
            kwidth: kwidth,
            maList: maList,
            startIndex: startIndex,
            stopIndex: stopIndex,
            currentIndex: this.currentIndex,
            $colors: this.$colors
          });
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
          this.drawVolume().drawMaLine().drawTickLabel();
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
      }, {
        key: "parseAmount",
        value: function parseAmount$1() {
          var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var quoteLotSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          var quoteType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 11;
          var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  
          if (null === val) {
            return '--';
          }
  
          var num = val;
          num = [11, 12, 13, 14, 15, 17, 60, 61, 81].indexOf(+quoteType) > -1 ? ''.concat(parseAmount(val / quoteLotSize)) : parseAmount(val);
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
        key: "getMaLineData",
        value: function getMaLineData(options) {
          var _this3 = this;
  
          var result = {
            lines: [],
            texts: []
          };
          var data = this.getData();
  
          if (!data.length) {
            return result;
          }
  
          var columns = this.options.columns;
          var left = options.left,
              maList = options.maList,
              kspan = options.kspan,
              kwidth = options.kwidth,
              stateHeight = options.stateHeight,
              figureWidth = options.figureWidth,
              figureHeight = options.figureHeight,
              startIndex = options.startIndex,
              stopIndex = options.stopIndex,
              sliceType = options.sliceType,
              period = options.period,
              $colors = options.$colors,
              xAxis = options.xAxis,
              currentIndex = options.currentIndex;
          var scaleLinear = this.getScale();
          var volume = typeof data[currentIndex] !== 'undefined' ? this.parseVolume(data[currentIndex][columns.indexOf('volume')]) + '手' : '-手';
          var volumeStateText = '成交量 ' + volume;
          var volumeStateTextWidth = measureText(volumeStateText).width;
          var volumeStateTextLeft = volumeStateTextWidth + 5;
          result.texts.push({
            x: left,
            y: floor((stateHeight - 10) / 2),
            text: volumeStateText,
            fill: $colors.text,
            fontSize: 11,
            align: 'left',
            verticalAlign: 'middle'
          });
          maList.forEach(function (maItem) {
            var maDays = Number(maItem.replace(/[^\d]/g, '')); // `注意`：需要从所有的成交量中计算均线
  
            var allVolumeData = ma(_this3.allDataSet.getData('volumeData'), maDays);
            var volumeData = allVolumeData.slice(startIndex, stopIndex);
            var maKeyVal = maItem.toLocaleUpperCase() + ':' + (typeof volumeData[currentIndex] !== 'undefined' ? _this3.parseVolume(volumeData[currentIndex]) + '手' : '-手');
            var maKeyValWidth = measureText(maKeyVal).width;
            var lineOpts = {
              ma: maDays,
              stroke: $colors[maItem],
              strokeWidth: 1,
              points: []
            };
            volumeData.forEach(function (d, i) {
              if (scaleLinear(d)) {
                lineOpts.points.push(left + i * kspan + kwidth / 2, scaleLinear(d), left + i * kspan + kwidth / 2, scaleLinear(d));
              }
            });
            result.lines.push(lineOpts);
            var textOpts = {
              x: left + volumeStateTextLeft,
              y: floor((stateHeight - 10) / 2),
              text: maKeyVal,
              fill: $colors[maItem],
              fontSize: 11,
              align: 'left',
              verticalAlign: 'middle'
            };
            result.texts.push(textOpts);
            volumeStateTextLeft += maKeyValWidth + 5;
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
          var span = (figureHeight - stateHeight) / 2; // 最高刻度值
          // debugger
  
          var text = this.parseAmount(extent.max);
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
            text = this.parseAmount(text);
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
  });
  
  /***/ }),
  
  /***/ "../node_modules/ansi-html/index.js":
  /*!******************************************!*\
    !*** ../node_modules/ansi-html/index.js ***!
    \******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  module.exports = ansiHTML
  
  // Reference to https://github.com/sindresorhus/ansi-regex
  var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/
  
  var _defColors = {
    reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888'
  }
  var _styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey'
  }
  var _openTags = {
    '1': 'font-weight:bold', // bold
    '2': 'opacity:0.5', // dim
    '3': '<i>', // italic
    '4': '<u>', // underscore
    '8': 'display:none', // hidden
    '9': '<del>' // delete
  }
  var _closeTags = {
    '23': '</i>', // reset italic
    '24': '</u>', // reset underscore
    '29': '</del>' // reset delete
  }
  
  ;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
    _closeTags[n] = '</span>'
  })
  
  /**
   * Converts text with ANSI color codes to HTML markup.
   * @param {String} text
   * @returns {*}
   */
  function ansiHTML (text) {
    // Returns the text if the string has no ANSI escape code.
    if (!_regANSI.test(text)) {
      return text
    }
  
    // Cache opened sequence.
    var ansiCodes = []
    // Replace with markup.
    var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
      var ot = _openTags[seq]
      if (ot) {
        // If current sequence has been opened, close it.
        if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
          ansiCodes.pop()
          return '</span>'
        }
        // Open tag.
        ansiCodes.push(seq)
        return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
      }
  
      var ct = _closeTags[seq]
      if (ct) {
        // Pop sequence
        ansiCodes.pop()
        return ct
      }
      return ''
    })
  
    // Make sure tags are closed.
    var l = ansiCodes.length
    ;(l > 0) && (ret += Array(l + 1).join('</span>'))
  
    return ret
  }
  
  /**
   * Customize colors.
   * @param {Object} colors reference to _defColors
   */
  ansiHTML.setColors = function (colors) {
    if (typeof colors !== 'object') {
      throw new Error('`colors` parameter must be an Object.')
    }
  
    var _finalColors = {}
    for (var key in _defColors) {
      var hex = colors.hasOwnProperty(key) ? colors[key] : null
      if (!hex) {
        _finalColors[key] = _defColors[key]
        continue
      }
      if ('reset' === key) {
        if (typeof hex === 'string') {
          hex = [hex]
        }
        if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
          return typeof h !== 'string'
        })) {
          throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
        }
        var defHexColor = _defColors[key]
        if (!hex[0]) {
          hex[0] = defHexColor[0]
        }
        if (hex.length === 1 || !hex[1]) {
          hex = [hex[0]]
          hex.push(defHexColor[1])
        }
  
        hex = hex.slice(0, 2)
      } else if (typeof hex !== 'string') {
        throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
      }
      _finalColors[key] = hex
    }
    _setTags(_finalColors)
  }
  
  /**
   * Reset colors.
   */
  ansiHTML.reset = function () {
    _setTags(_defColors)
  }
  
  /**
   * Expose tags, including open and close.
   * @type {Object}
   */
  ansiHTML.tags = {}
  
  if (Object.defineProperty) {
    Object.defineProperty(ansiHTML.tags, 'open', {
      get: function () { return _openTags }
    })
    Object.defineProperty(ansiHTML.tags, 'close', {
      get: function () { return _closeTags }
    })
  } else {
    ansiHTML.tags.open = _openTags
    ansiHTML.tags.close = _closeTags
  }
  
  function _setTags (colors) {
    // reset all
    _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
    // inverse
    _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
    // dark grey
    _openTags['90'] = 'color:#' + colors.darkgrey
  
    for (var code in _styles) {
      var color = _styles[code]
      var oriColor = colors[color] || '000'
      _openTags[code] = 'color:#' + oriColor
      code = parseInt(code)
      _openTags[(code + 10).toString()] = 'background:#' + oriColor
    }
  }
  
  ansiHTML.reset()
  
  
  /***/ }),
  
  /***/ "../node_modules/ansi-regex/index.js":
  /*!*******************************************!*\
    !*** ../node_modules/ansi-regex/index.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  module.exports = function () {
    return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/css-loader/dist/cjs.js!../dist/kchart.css":
  /*!*****************************************************************!*\
    !*** ../node_modules/css-loader/dist/cjs.js!../dist/kchart.css ***!
    \*****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  // Imports
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
  exports = ___CSS_LOADER_API_IMPORT___(false);
  // Module
  exports.push([module.i, "html, body, ul {\n  margin: 0;\n  padding: 0; }\n\n.toolbar {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  z-index: 999; }\n\n.toolbar span {\n  float: left;\n  margin-left: 5px;\n  width: 20px;\n  height: 16px;\n  font-size: 12px;\n  cursor: pointer;\n  color: #555;\n  background-color: #eee;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 20%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none; }\n\n.toolbar span:hover {\n  color: #06c;\n  background-color: #e2f8ff; }\n\n#k-tooltips {\n  width: 132px; }\n\n#k-tooltips ul {\n  list-style: none;\n  width: 120px;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(218, 222, 229, 0.6);\n  font-size: 12px;\n  line-height: 18px;\n  padding: 5px;\n  margin: 0; }\n\n#k-tooltips ul li {\n  list-style: none; }\n\n#k-tooltips ul li span {\n  text-align: left;\n  color: #43474c; }\n\n#k-tooltips ul li span:last-child {\n  float: right; }\n\n.sel-list {\n  display: none;\n  list-style: none;\n  position: absolute;\n  top: 21px;\n  left: -20px;\n  line-height: 26px;\n  width: 70px;\n  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.4);\n  background: #fff;\n  text-align: center;\n  z-index: 222;\n  font-size: 12px;\n  cursor: pointer; }\n\n.sel-list li.active {\n  color: #06c; }\n", ""]);
  // Exports
  module.exports = exports;
  
  
  /***/ }),
  
  /***/ "../node_modules/css-loader/dist/runtime/api.js":
  /*!******************************************************!*\
    !*** ../node_modules/css-loader/dist/runtime/api.js ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  // eslint-disable-next-line func-names
  module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
  
    list.toString = function toString() {
      return this.map(function (item) {
        var content = cssWithMappingToString(item, useSourceMap);
  
        if (item[2]) {
          return "@media ".concat(item[2], " {").concat(content, "}");
        }
  
        return content;
      }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
  
  
    list.i = function (modules, mediaQuery, dedupe) {
      if (typeof modules === 'string') {
        // eslint-disable-next-line no-param-reassign
        modules = [[null, modules, '']];
      }
  
      var alreadyImportedModules = {};
  
      if (dedupe) {
        for (var i = 0; i < this.length; i++) {
          // eslint-disable-next-line prefer-destructuring
          var id = this[i][0];
  
          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }
      }
  
      for (var _i = 0; _i < modules.length; _i++) {
        var item = [].concat(modules[_i]);
  
        if (dedupe && alreadyImportedModules[item[0]]) {
          // eslint-disable-next-line no-continue
          continue;
        }
  
        if (mediaQuery) {
          if (!item[2]) {
            item[2] = mediaQuery;
          } else {
            item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
          }
        }
  
        list.push(item);
      }
    };
  
    return list;
  };
  
  function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
  
    var cssMapping = item[3];
  
    if (!cssMapping) {
      return content;
    }
  
    if (useSourceMap && typeof btoa === 'function') {
      var sourceMapping = toComment(cssMapping);
      var sourceURLs = cssMapping.sources.map(function (source) {
        return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
      });
      return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
  
    return [content].join('\n');
  } // Adapted from convert-source-map (MIT)
  
  
  function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
  }
  
  /***/ }),
  
  /***/ "../node_modules/html-entities/index.js":
  /*!**********************************************!*\
    !*** ../node_modules/html-entities/index.js ***!
    \**********************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  module.exports = {
    XmlEntities: __webpack_require__(/*! ./lib/xml-entities.js */ "../node_modules/html-entities/lib/xml-entities.js"),
    Html4Entities: __webpack_require__(/*! ./lib/html4-entities.js */ "../node_modules/html-entities/lib/html4-entities.js"),
    Html5Entities: __webpack_require__(/*! ./lib/html5-entities.js */ "../node_modules/html-entities/lib/html5-entities.js"),
    AllHtmlEntities: __webpack_require__(/*! ./lib/html5-entities.js */ "../node_modules/html-entities/lib/html5-entities.js")
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/html-entities/lib/html4-entities.js":
  /*!***********************************************************!*\
    !*** ../node_modules/html-entities/lib/html4-entities.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
  var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
  
  var alphaIndex = {};
  var numIndex = {};
  
  var i = 0;
  var length = HTML_ALPHA.length;
  while (i < length) {
      var a = HTML_ALPHA[i];
      var c = HTML_CODES[i];
      alphaIndex[a] = String.fromCharCode(c);
      numIndex[c] = a;
      i++;
  }
  
  /**
   * @constructor
   */
  function Html4Entities() {}
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.prototype.decode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
          var chr;
          if (entity.charAt(0) === "#") {
              var code = entity.charAt(1).toLowerCase() === 'x' ?
                  parseInt(entity.substr(2), 16) :
                  parseInt(entity.substr(1));
  
              if (!(isNaN(code) || code < -32768 || code > 65535)) {
                  chr = String.fromCharCode(code);
              }
          } else {
              chr = alphaIndex[entity];
          }
          return chr || s;
      });
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.decode = function(str) {
      return new Html4Entities().decode(str);
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.prototype.encode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var alpha = numIndex[str.charCodeAt(i)];
          result += alpha ? "&" + alpha + ";" : str.charAt(i);
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.encode = function(str) {
      return new Html4Entities().encode(str);
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.prototype.encodeNonUTF = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var cc = str.charCodeAt(i);
          var alpha = numIndex[cc];
          if (alpha) {
              result += "&" + alpha + ";";
          } else if (cc < 32 || cc > 126) {
              result += "&#" + cc + ";";
          } else {
              result += str.charAt(i);
          }
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.encodeNonUTF = function(str) {
      return new Html4Entities().encodeNonUTF(str);
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.prototype.encodeNonASCII = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var c = str.charCodeAt(i);
          if (c <= 255) {
              result += str[i++];
              continue;
          }
          result += '&#' + c + ';';
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html4Entities.encodeNonASCII = function(str) {
      return new Html4Entities().encodeNonASCII(str);
  };
  
  module.exports = Html4Entities;
  
  
  /***/ }),
  
  /***/ "../node_modules/html-entities/lib/html5-entities.js":
  /*!***********************************************************!*\
    !*** ../node_modules/html-entities/lib/html5-entities.js ***!
    \***********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
  
  var alphaIndex = {};
  var charIndex = {};
  
  createIndexes(alphaIndex, charIndex);
  
  /**
   * @constructor
   */
  function Html5Entities() {}
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html5Entities.prototype.decode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      return str.replace(/&(#?[\w\d]+);?/g, function(s, entity) {
          var chr;
          if (entity.charAt(0) === "#") {
              var code = entity.charAt(1) === 'x' ?
                  parseInt(entity.substr(2).toLowerCase(), 16) :
                  parseInt(entity.substr(1));
  
              if (!(isNaN(code) || code < -32768 || code > 65535)) {
                  chr = String.fromCharCode(code);
              }
          } else {
              chr = alphaIndex[entity];
          }
          return chr || s;
      });
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   Html5Entities.decode = function(str) {
      return new Html5Entities().decode(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html5Entities.prototype.encode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var charInfo = charIndex[str.charCodeAt(i)];
          if (charInfo) {
              var alpha = charInfo[str.charCodeAt(i + 1)];
              if (alpha) {
                  i++;
              } else {
                  alpha = charInfo[''];
              }
              if (alpha) {
                  result += "&" + alpha + ";";
                  i++;
                  continue;
              }
          }
          result += str.charAt(i);
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   Html5Entities.encode = function(str) {
      return new Html5Entities().encode(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html5Entities.prototype.encodeNonUTF = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var c = str.charCodeAt(i);
          var charInfo = charIndex[c];
          if (charInfo) {
              var alpha = charInfo[str.charCodeAt(i + 1)];
              if (alpha) {
                  i++;
              } else {
                  alpha = charInfo[''];
              }
              if (alpha) {
                  result += "&" + alpha + ";";
                  i++;
                  continue;
              }
          }
          if (c < 32 || c > 126) {
              result += '&#' + c + ';';
          } else {
              result += str.charAt(i);
          }
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   Html5Entities.encodeNonUTF = function(str) {
      return new Html5Entities().encodeNonUTF(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  Html5Entities.prototype.encodeNonASCII = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var c = str.charCodeAt(i);
          if (c <= 255) {
              result += str[i++];
              continue;
          }
          result += '&#' + c + ';';
          i++
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   Html5Entities.encodeNonASCII = function(str) {
      return new Html5Entities().encodeNonASCII(str);
   };
  
  /**
   * @param {Object} alphaIndex Passed by reference.
   * @param {Object} charIndex Passed by reference.
   */
  function createIndexes(alphaIndex, charIndex) {
      var i = ENTITIES.length;
      var _results = [];
      while (i--) {
          var e = ENTITIES[i];
          var alpha = e[0];
          var chars = e[1];
          var chr = chars[0];
          var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
          var charInfo;
          if (addChar) {
              charInfo = charIndex[chr] = charIndex[chr] || {};
          }
          if (chars[1]) {
              var chr2 = chars[1];
              alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
              _results.push(addChar && (charInfo[chr2] = alpha));
          } else {
              alphaIndex[alpha] = String.fromCharCode(chr);
              _results.push(addChar && (charInfo[''] = alpha));
          }
      }
  }
  
  module.exports = Html5Entities;
  
  
  /***/ }),
  
  /***/ "../node_modules/html-entities/lib/xml-entities.js":
  /*!*********************************************************!*\
    !*** ../node_modules/html-entities/lib/xml-entities.js ***!
    \*********************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var ALPHA_INDEX = {
      '&lt': '<',
      '&gt': '>',
      '&quot': '"',
      '&apos': '\'',
      '&amp': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': '\'',
      '&amp;': '&'
  };
  
  var CHAR_INDEX = {
      60: 'lt',
      62: 'gt',
      34: 'quot',
      39: 'apos',
      38: 'amp'
  };
  
  var CHAR_S_INDEX = {
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;',
      '&': '&amp;'
  };
  
  /**
   * @constructor
   */
  function XmlEntities() {}
  
  /**
   * @param {String} str
   * @returns {String}
   */
  XmlEntities.prototype.encode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      return str.replace(/<|>|"|'|&/g, function(s) {
          return CHAR_S_INDEX[s];
      });
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   XmlEntities.encode = function(str) {
      return new XmlEntities().encode(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  XmlEntities.prototype.decode = function(str) {
      if (!str || !str.length) {
          return '';
      }
      return str.replace(/&#?[0-9a-zA-Z]+;?/g, function(s) {
          if (s.charAt(1) === '#') {
              var code = s.charAt(2).toLowerCase() === 'x' ?
                  parseInt(s.substr(3), 16) :
                  parseInt(s.substr(2));
  
              if (isNaN(code) || code < -32768 || code > 65535) {
                  return '';
              }
              return String.fromCharCode(code);
          }
          return ALPHA_INDEX[s] || s;
      });
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   XmlEntities.decode = function(str) {
      return new XmlEntities().decode(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  XmlEntities.prototype.encodeNonUTF = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLength = str.length;
      var result = '';
      var i = 0;
      while (i < strLength) {
          var c = str.charCodeAt(i);
          var alpha = CHAR_INDEX[c];
          if (alpha) {
              result += "&" + alpha + ";";
              i++;
              continue;
          }
          if (c < 32 || c > 126) {
              result += '&#' + c + ';';
          } else {
              result += str.charAt(i);
          }
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   XmlEntities.encodeNonUTF = function(str) {
      return new XmlEntities().encodeNonUTF(str);
   };
  
  /**
   * @param {String} str
   * @returns {String}
   */
  XmlEntities.prototype.encodeNonASCII = function(str) {
      if (!str || !str.length) {
          return '';
      }
      var strLenght = str.length;
      var result = '';
      var i = 0;
      while (i < strLenght) {
          var c = str.charCodeAt(i);
          if (c <= 255) {
              result += str[i++];
              continue;
          }
          result += '&#' + c + ';';
          i++;
      }
      return result;
  };
  
  /**
   * @param {String} str
   * @returns {String}
   */
   XmlEntities.encodeNonASCII = function(str) {
      return new XmlEntities().encodeNonASCII(str);
   };
  
  module.exports = XmlEntities;
  
  
  /***/ }),
  
  /***/ "../node_modules/querystring-es3/decode.js":
  /*!*************************************************!*\
    !*** ../node_modules/querystring-es3/decode.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  
  
  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  
  module.exports = function(qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};
  
    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }
  
    var regexp = /\+/g;
    qs = qs.split(sep);
  
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }
  
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
  
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr, vstr, k, v;
  
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }
  
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
  
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
  
    return obj;
  };
  
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/querystring-es3/encode.js":
  /*!*************************************************!*\
    !*** ../node_modules/querystring-es3/encode.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  
  
  var stringifyPrimitive = function(v) {
    switch (typeof v) {
      case 'string':
        return v;
  
      case 'boolean':
        return v ? 'true' : 'false';
  
      case 'number':
        return isFinite(v) ? v : '';
  
      default:
        return '';
    }
  };
  
  module.exports = function(obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }
  
    if (typeof obj === 'object') {
      return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
  
    }
  
    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq +
           encodeURIComponent(stringifyPrimitive(obj));
  };
  
  var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
  };
  
  function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }
  
  var objectKeys = Object.keys || function (obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    }
    return res;
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/querystring-es3/index.js":
  /*!************************************************!*\
    !*** ../node_modules/querystring-es3/index.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../node_modules/querystring-es3/decode.js");
  exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../node_modules/querystring-es3/encode.js");
  
  
  /***/ }),
  
  /***/ "../node_modules/strip-ansi/index.js":
  /*!*******************************************!*\
    !*** ../node_modules/strip-ansi/index.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  var ansiRegex = __webpack_require__(/*! ansi-regex */ "../node_modules/ansi-regex/index.js")();
  
  module.exports = function (str) {
    return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/style-loader/lib/addStyles.js":
  /*!*****************************************************!*\
    !*** ../node_modules/style-loader/lib/addStyles.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  
  var stylesInDom = {};
  
  var	memoize = function (fn) {
    var memo;
  
    return function () {
      if (typeof memo === "undefined") memo = fn.apply(this, arguments);
      return memo;
    };
  };
  
  var isOldIE = memoize(function () {
    // Test for IE <= 9 as proposed by Browserhacks
    // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
    // Tests for existence of standard globals is to allow style-loader
    // to operate correctly into non-standard environments
    // @see https://github.com/webpack-contrib/style-loader/issues/177
    return window && document && document.all && !window.atob;
  });
  
  var getTarget = function (target, parent) {
    if (parent){
      return parent.querySelector(target);
    }
    return document.querySelector(target);
  };
  
  var getElement = (function (fn) {
    var memo = {};
  
    return function(target, parent) {
                  // If passing function in options, then use it for resolve "head" element.
                  // Useful for Shadow Root style i.e
                  // {
                  //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                  // }
                  if (typeof target === 'function') {
                          return target();
                  }
                  if (typeof memo[target] === "undefined") {
        var styleTarget = getTarget.call(this, target, parent);
        // Special case to return head of iframe instead of iframe itself
        if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
          try {
            // This will throw an exception if access to iframe is blocked
            // due to cross-origin restrictions
            styleTarget = styleTarget.contentDocument.head;
          } catch(e) {
            styleTarget = null;
          }
        }
        memo[target] = styleTarget;
      }
      return memo[target]
    };
  })();
  
  var singleton = null;
  var	singletonCounter = 0;
  var	stylesInsertedAtTop = [];
  
  var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");
  
  module.exports = function(list, options) {
    if (typeof DEBUG !== "undefined" && DEBUG) {
      if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
    }
  
    options = options || {};
  
    options.attrs = typeof options.attrs === "object" ? options.attrs : {};
  
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();
  
    // By default, add <style> tags to the <head> element
          if (!options.insertInto) options.insertInto = "head";
  
    // By default, add <style> tags to the bottom of the target
    if (!options.insertAt) options.insertAt = "bottom";
  
    var styles = listToStyles(list, options);
  
    addStylesToDom(styles, options);
  
    return function update (newList) {
      var mayRemove = [];
  
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
  
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
  
      if(newList) {
        var newStyles = listToStyles(newList, options);
        addStylesToDom(newStyles, options);
      }
  
      for (var i = 0; i < mayRemove.length; i++) {
        var domStyle = mayRemove[i];
  
        if(domStyle.refs === 0) {
          for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
  
          delete stylesInDom[domStyle.id];
        }
      }
    };
  };
  
  function addStylesToDom (styles, options) {
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];
  
      if(domStyle) {
        domStyle.refs++;
  
        for(var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j](item.parts[j]);
        }
  
        for(; j < item.parts.length; j++) {
          domStyle.parts.push(addStyle(item.parts[j], options));
        }
      } else {
        var parts = [];
  
        for(var j = 0; j < item.parts.length; j++) {
          parts.push(addStyle(item.parts[j], options));
        }
  
        stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
      }
    }
  }
  
  function listToStyles (list, options) {
    var styles = [];
    var newStyles = {};
  
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = options.base ? item[0] + options.base : item[0];
      var css = item[1];
      var media = item[2];
      var sourceMap = item[3];
      var part = {css: css, media: media, sourceMap: sourceMap};
  
      if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
      else newStyles[id].parts.push(part);
    }
  
    return styles;
  }
  
  function insertStyleElement (options, style) {
    var target = getElement(options.insertInto)
  
    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    }
  
    var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
  
    if (options.insertAt === "top") {
      if (!lastStyleElementInsertedAtTop) {
        target.insertBefore(style, target.firstChild);
      } else if (lastStyleElementInsertedAtTop.nextSibling) {
        target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
      } else {
        target.appendChild(style);
      }
      stylesInsertedAtTop.push(style);
    } else if (options.insertAt === "bottom") {
      target.appendChild(style);
    } else if (typeof options.insertAt === "object" && options.insertAt.before) {
      var nextSibling = getElement(options.insertAt.before, target);
      target.insertBefore(style, nextSibling);
    } else {
      throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
    }
  }
  
  function removeStyleElement (style) {
    if (style.parentNode === null) return false;
    style.parentNode.removeChild(style);
  
    var idx = stylesInsertedAtTop.indexOf(style);
    if(idx >= 0) {
      stylesInsertedAtTop.splice(idx, 1);
    }
  }
  
  function createStyleElement (options) {
    var style = document.createElement("style");
  
    if(options.attrs.type === undefined) {
      options.attrs.type = "text/css";
    }
  
    if(options.attrs.nonce === undefined) {
      var nonce = getNonce();
      if (nonce) {
        options.attrs.nonce = nonce;
      }
    }
  
    addAttrs(style, options.attrs);
    insertStyleElement(options, style);
  
    return style;
  }
  
  function createLinkElement (options) {
    var link = document.createElement("link");
  
    if(options.attrs.type === undefined) {
      options.attrs.type = "text/css";
    }
    options.attrs.rel = "stylesheet";
  
    addAttrs(link, options.attrs);
    insertStyleElement(options, link);
  
    return link;
  }
  
  function addAttrs (el, attrs) {
    Object.keys(attrs).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
  }
  
  function getNonce() {
    if (false) {}
  
    return __webpack_require__.nc;
  }
  
  function addStyle (obj, options) {
    var style, update, remove, result;
  
    // If a transform function was defined, run it on the css
    if (options.transform && obj.css) {
        result = typeof options.transform === 'function'
       ? options.transform(obj.css) 
       : options.transform.default(obj.css);
  
        if (result) {
          // If transform returns a value, use that instead of the original css.
          // This allows running runtime transformations on the css.
          obj.css = result;
        } else {
          // If the transform function returns a falsy value, don't add this css.
          // This allows conditional loading of css
          return function() {
            // noop
          };
        }
    }
  
    if (options.singleton) {
      var styleIndex = singletonCounter++;
  
      style = singleton || (singleton = createStyleElement(options));
  
      update = applyToSingletonTag.bind(null, style, styleIndex, false);
      remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  
    } else if (
      obj.sourceMap &&
      typeof URL === "function" &&
      typeof URL.createObjectURL === "function" &&
      typeof URL.revokeObjectURL === "function" &&
      typeof Blob === "function" &&
      typeof btoa === "function"
    ) {
      style = createLinkElement(options);
      update = updateLink.bind(null, style, options);
      remove = function () {
        removeStyleElement(style);
  
        if(style.href) URL.revokeObjectURL(style.href);
      };
    } else {
      style = createStyleElement(options);
      update = applyToTag.bind(null, style);
      remove = function () {
        removeStyleElement(style);
      };
    }
  
    update(obj);
  
    return function updateStyle (newObj) {
      if (newObj) {
        if (
          newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap
        ) {
          return;
        }
  
        update(obj = newObj);
      } else {
        remove();
      }
    };
  }
  
  var replaceText = (function () {
    var textStore = [];
  
    return function (index, replacement) {
      textStore[index] = replacement;
  
      return textStore.filter(Boolean).join('\n');
    };
  })();
  
  function applyToSingletonTag (style, index, remove, obj) {
    var css = remove ? "" : obj.css;
  
    if (style.styleSheet) {
      style.styleSheet.cssText = replaceText(index, css);
    } else {
      var cssNode = document.createTextNode(css);
      var childNodes = style.childNodes;
  
      if (childNodes[index]) style.removeChild(childNodes[index]);
  
      if (childNodes.length) {
        style.insertBefore(cssNode, childNodes[index]);
      } else {
        style.appendChild(cssNode);
      }
    }
  }
  
  function applyToTag (style, obj) {
    var css = obj.css;
    var media = obj.media;
  
    if(media) {
      style.setAttribute("media", media)
    }
  
    if(style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      while(style.firstChild) {
        style.removeChild(style.firstChild);
      }
  
      style.appendChild(document.createTextNode(css));
    }
  }
  
  function updateLink (link, options, obj) {
    var css = obj.css;
    var sourceMap = obj.sourceMap;
  
    /*
      If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
      and there is no publicPath defined then lets turn convertToAbsoluteUrls
      on by default.  Otherwise default to the convertToAbsoluteUrls option
      directly
    */
    var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
  
    if (options.convertToAbsoluteUrls || autoFixUrls) {
      css = fixUrls(css);
    }
  
    if (sourceMap) {
      // http://stackoverflow.com/a/26603875
      css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
    }
  
    var blob = new Blob([css], { type: "text/css" });
  
    var oldSrc = link.href;
  
    link.href = URL.createObjectURL(blob);
  
    if(oldSrc) URL.revokeObjectURL(oldSrc);
  }
  
  
  /***/ }),
  
  /***/ "../node_modules/style-loader/lib/urls.js":
  /*!************************************************!*\
    !*** ../node_modules/style-loader/lib/urls.js ***!
    \************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  
  /**
   * When source maps are enabled, `style-loader` uses a link element with a data-uri to
   * embed the css on the page. This breaks all relative urls because now they are relative to a
   * bundle instead of the current page.
   *
   * One solution is to only use full urls, but that may be impossible.
   *
   * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
   *
   * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
   *
   */
  
  module.exports = function (css) {
    // get current location
    var location = typeof window !== "undefined" && window.location;
  
    if (!location) {
      throw new Error("fixUrls requires window.location");
    }
  
    // blank or null?
    if (!css || typeof css !== "string") {
      return css;
    }
  
    var baseUrl = location.protocol + "//" + location.host;
    var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
  
    // convert each url(...)
    /*
    This regular expression is just a way to recursively match brackets within
    a string.
  
     /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
       (  = Start a capturing group
         (?:  = Start a non-capturing group
             [^)(]  = Match anything that isn't a parentheses
             |  = OR
             \(  = Match a start parentheses
                 (?:  = Start another non-capturing groups
                     [^)(]+  = Match anything that isn't a parentheses
                     |  = OR
                     \(  = Match a start parentheses
                         [^)(]*  = Match anything that isn't a parentheses
                     \)  = Match a end parentheses
                 )  = End Group
                *\) = Match anything and then a close parens
            )  = Close non-capturing group
            *  = Match anything
         )  = Close capturing group
     \)  = Match a close parens
  
     /gi  = Get all matches, not the first.  Be case insensitive.
     */
    var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
      // strip quotes (if they exist)
      var unquotedOrigUrl = origUrl
        .trim()
        .replace(/^"(.*)"$/, function(o, $1){ return $1; })
        .replace(/^'(.*)'$/, function(o, $1){ return $1; });
  
      // already a full url? no change
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
        return fullMatch;
      }
  
      // convert the url to a full url
      var newUrl;
  
      if (unquotedOrigUrl.indexOf("//") === 0) {
          //TODO: should we add protocol?
        newUrl = unquotedOrigUrl;
      } else if (unquotedOrigUrl.indexOf("/") === 0) {
        // path should be relative to the base url
        newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
      } else {
        // path should be relative to current directory
        newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
      }
  
      // send back the fixed url(...)
      return "url(" + JSON.stringify(newUrl) + ")";
    });
  
    // send back the fixed css
    return fixedCss;
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/webpack-hot-middleware/client-overlay.js":
  /*!****************************************************************!*\
    !*** ../node_modules/webpack-hot-middleware/client-overlay.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /*eslint-env browser*/
  
  var clientOverlay = document.createElement('div');
  clientOverlay.id = 'webpack-hot-middleware-clientOverlay';
  var styles = {
    background: 'rgba(0,0,0,0.85)',
    color: '#e8e8e8',
    lineHeight: '1.6',
    whiteSpace: 'pre',
    fontFamily: 'Menlo, Consolas, monospace',
    fontSize: '13px',
    position: 'fixed',
    zIndex: 9999,
    padding: '10px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    overflow: 'auto',
    dir: 'ltr',
    textAlign: 'left',
  };
  
  var ansiHTML = __webpack_require__(/*! ansi-html */ "../node_modules/ansi-html/index.js");
  var colors = {
    reset: ['transparent', 'transparent'],
    black: '181818',
    red: 'ff3348',
    green: '3fff4f',
    yellow: 'ffd30e',
    blue: '169be0',
    magenta: 'f840b7',
    cyan: '0ad8e9',
    lightgrey: 'ebe7e3',
    darkgrey: '6d7891',
  };
  
  var Entities = __webpack_require__(/*! html-entities */ "../node_modules/html-entities/index.js").AllHtmlEntities;
  var entities = new Entities();
  
  function showProblems(type, lines) {
    clientOverlay.innerHTML = '';
    lines.forEach(function(msg) {
      msg = ansiHTML(entities.encode(msg));
      var div = document.createElement('div');
      div.style.marginBottom = '26px';
      div.innerHTML = problemType(type) + ' in ' + msg;
      clientOverlay.appendChild(div);
    });
    if (document.body) {
      document.body.appendChild(clientOverlay);
    }
  }
  
  function clear() {
    if (document.body && clientOverlay.parentNode) {
      document.body.removeChild(clientOverlay);
    }
  }
  
  function problemType(type) {
    var problemColors = {
      errors: colors.red,
      warnings: colors.yellow,
    };
    var color = problemColors[type] || colors.red;
    return (
      '<span style="background-color:#' +
      color +
      '; color:#000000; padding:3px 6px; border-radius: 4px;">' +
      type.slice(0, -1).toUpperCase() +
      '</span>'
    );
  }
  
  module.exports = function(options) {
    for (var color in options.ansiColors) {
      if (color in colors) {
        colors[color] = options.ansiColors[color];
      }
      ansiHTML.setColors(colors);
    }
  
    for (var style in options.overlayStyles) {
      styles[style] = options.overlayStyles[style];
    }
  
    for (var key in styles) {
      clientOverlay.style[key] = styles[key];
    }
  
    return {
      showProblems: showProblems,
      clear: clear,
    };
  };
  
  module.exports.clear = clear;
  module.exports.showProblems = showProblems;
  
  
  /***/ }),
  
  /***/ "../node_modules/webpack-hot-middleware/client.js?noInfo=true&reload=true":
  /*!********************************************************************************!*\
    !*** ../node_modules/webpack-hot-middleware/client.js?noInfo=true&reload=true ***!
    \********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/
  /*global __resourceQuery __webpack_public_path__*/
  
  var options = {
    path: '/__webpack_hmr',
    timeout: 20 * 1000,
    overlay: true,
    reload: false,
    log: true,
    warn: true,
    name: '',
    autoConnect: true,
    overlayStyles: {},
    overlayWarnings: false,
    ansiColors: {},
  };
  if (true) {
    var querystring = __webpack_require__(/*! querystring */ "../node_modules/querystring-es3/index.js");
    var overrides = querystring.parse(__resourceQuery.slice(1));
    setOverrides(overrides);
  }
  
  if (typeof window === 'undefined') {
    // do nothing
  } else if (typeof window.EventSource === 'undefined') {
    console.warn(
      "webpack-hot-middleware's client requires EventSource to work. " +
        'You should include a polyfill if you want to support this browser: ' +
        'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools'
    );
  } else {
    if (options.autoConnect) {
      connect();
    }
  }
  
  /* istanbul ignore next */
  function setOptionsAndConnect(overrides) {
    setOverrides(overrides);
    connect();
  }
  
  function setOverrides(overrides) {
    if (overrides.autoConnect)
      options.autoConnect = overrides.autoConnect == 'true';
    if (overrides.path) options.path = overrides.path;
    if (overrides.timeout) options.timeout = overrides.timeout;
    if (overrides.overlay) options.overlay = overrides.overlay !== 'false';
    if (overrides.reload) options.reload = overrides.reload !== 'false';
    if (overrides.noInfo && overrides.noInfo !== 'false') {
      options.log = false;
    }
    if (overrides.name) {
      options.name = overrides.name;
    }
    if (overrides.quiet && overrides.quiet !== 'false') {
      options.log = false;
      options.warn = false;
    }
  
    if (overrides.dynamicPublicPath) {
      options.path = __webpack_require__.p + options.path;
    }
  
    if (overrides.ansiColors)
      options.ansiColors = JSON.parse(overrides.ansiColors);
    if (overrides.overlayStyles)
      options.overlayStyles = JSON.parse(overrides.overlayStyles);
  
    if (overrides.overlayWarnings) {
      options.overlayWarnings = overrides.overlayWarnings == 'true';
    }
  }
  
  function EventSourceWrapper() {
    var source;
    var lastActivity = new Date();
    var listeners = [];
  
    init();
    var timer = setInterval(function() {
      if (new Date() - lastActivity > options.timeout) {
        handleDisconnect();
      }
    }, options.timeout / 2);
  
    function init() {
      source = new window.EventSource(options.path);
      source.onopen = handleOnline;
      source.onerror = handleDisconnect;
      source.onmessage = handleMessage;
    }
  
    function handleOnline() {
      if (options.log) console.log('[HMR] connected');
      lastActivity = new Date();
    }
  
    function handleMessage(event) {
      lastActivity = new Date();
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](event);
      }
    }
  
    function handleDisconnect() {
      clearInterval(timer);
      source.close();
      setTimeout(init, options.timeout);
    }
  
    return {
      addMessageListener: function(fn) {
        listeners.push(fn);
      },
    };
  }
  
  function getEventSourceWrapper() {
    if (!window.__whmEventSourceWrapper) {
      window.__whmEventSourceWrapper = {};
    }
    if (!window.__whmEventSourceWrapper[options.path]) {
      // cache the wrapper for other entries loaded on
      // the same page with the same options.path
      window.__whmEventSourceWrapper[options.path] = EventSourceWrapper();
    }
    return window.__whmEventSourceWrapper[options.path];
  }
  
  function connect() {
    getEventSourceWrapper().addMessageListener(handleMessage);
  
    function handleMessage(event) {
      if (event.data == '\uD83D\uDC93') {
        return;
      }
      try {
        processMessage(JSON.parse(event.data));
      } catch (ex) {
        if (options.warn) {
          console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
        }
      }
    }
  }
  
  // the reporter needs to be a singleton on the page
  // in case the client is being used by multiple bundles
  // we only want to report once.
  // all the errors will go to all clients
  var singletonKey = '__webpack_hot_middleware_reporter__';
  var reporter;
  if (typeof window !== 'undefined') {
    if (!window[singletonKey]) {
      window[singletonKey] = createReporter();
    }
    reporter = window[singletonKey];
  }
  
  function createReporter() {
    var strip = __webpack_require__(/*! strip-ansi */ "../node_modules/strip-ansi/index.js");
  
    var overlay;
    if (typeof document !== 'undefined' && options.overlay) {
      overlay = __webpack_require__(/*! ./client-overlay */ "../node_modules/webpack-hot-middleware/client-overlay.js")({
        ansiColors: options.ansiColors,
        overlayStyles: options.overlayStyles,
      });
    }
  
    var styles = {
      errors: 'color: #ff0000;',
      warnings: 'color: #999933;',
    };
    var previousProblems = null;
    function log(type, obj) {
      var newProblems = obj[type]
        .map(function(msg) {
          return strip(msg);
        })
        .join('\n');
      if (previousProblems == newProblems) {
        return;
      } else {
        previousProblems = newProblems;
      }
  
      var style = styles[type];
      var name = obj.name ? "'" + obj.name + "' " : '';
      var title = '[HMR] bundle ' + name + 'has ' + obj[type].length + ' ' + type;
      // NOTE: console.warn or console.error will print the stack trace
      // which isn't helpful here, so using console.log to escape it.
      if (console.group && console.groupEnd) {
        console.group('%c' + title, style);
        console.log('%c' + newProblems, style);
        console.groupEnd();
      } else {
        console.log(
          '%c' + title + '\n\t%c' + newProblems.replace(/\n/g, '\n\t'),
          style + 'font-weight: bold;',
          style + 'font-weight: normal;'
        );
      }
    }
  
    return {
      cleanProblemsCache: function() {
        previousProblems = null;
      },
      problems: function(type, obj) {
        if (options.warn) {
          log(type, obj);
        }
        if (overlay) {
          if (options.overlayWarnings || type === 'errors') {
            overlay.showProblems(type, obj[type]);
            return false;
          }
          overlay.clear();
        }
        return true;
      },
      success: function() {
        if (overlay) overlay.clear();
      },
      useCustomOverlay: function(customOverlay) {
        overlay = customOverlay;
      },
    };
  }
  
  var processUpdate = __webpack_require__(/*! ./process-update */ "../node_modules/webpack-hot-middleware/process-update.js");
  
  var customHandler;
  var subscribeAllHandler;
  function processMessage(obj) {
    switch (obj.action) {
      case 'building':
        if (options.log) {
          console.log(
            '[HMR] bundle ' +
              (obj.name ? "'" + obj.name + "' " : '') +
              'rebuilding'
          );
        }
        break;
      case 'built':
        if (options.log) {
          console.log(
            '[HMR] bundle ' +
              (obj.name ? "'" + obj.name + "' " : '') +
              'rebuilt in ' +
              obj.time +
              'ms'
          );
        }
      // fall through
      case 'sync':
        if (obj.name && options.name && obj.name !== options.name) {
          return;
        }
        var applyUpdate = true;
        if (obj.errors.length > 0) {
          if (reporter) reporter.problems('errors', obj);
          applyUpdate = false;
        } else if (obj.warnings.length > 0) {
          if (reporter) {
            var overlayShown = reporter.problems('warnings', obj);
            applyUpdate = overlayShown;
          }
        } else {
          if (reporter) {
            reporter.cleanProblemsCache();
            reporter.success();
          }
        }
        if (applyUpdate) {
          processUpdate(obj.hash, obj.modules, options);
        }
        break;
      default:
        if (customHandler) {
          customHandler(obj);
        }
    }
  
    if (subscribeAllHandler) {
      subscribeAllHandler(obj);
    }
  }
  
  if (module) {
    module.exports = {
      subscribeAll: function subscribeAll(handler) {
        subscribeAllHandler = handler;
      },
      subscribe: function subscribe(handler) {
        customHandler = handler;
      },
      useCustomOverlay: function useCustomOverlay(customOverlay) {
        if (reporter) reporter.useCustomOverlay(customOverlay);
      },
      setOptionsAndConnect: setOptionsAndConnect,
    };
  }
  
  /* WEBPACK VAR INJECTION */}.call(this, "?noInfo=true&reload=true", __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))
  
  /***/ }),
  
  /***/ "../node_modules/webpack-hot-middleware/process-update.js":
  /*!****************************************************************!*\
    !*** ../node_modules/webpack-hot-middleware/process-update.js ***!
    \****************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Based heavily on https://github.com/webpack/webpack/blob/
   *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
   * Original copyright Tobias Koppers @sokra (MIT license)
   */
  
  /* global window __webpack_hash__ */
  
  if (false) {}
  
  var hmrDocsUrl = 'https://webpack.js.org/concepts/hot-module-replacement/'; // eslint-disable-line max-len
  
  var lastHash;
  var failureStatuses = { abort: 1, fail: 1 };
  var applyOptions = {
    ignoreUnaccepted: true,
    ignoreDeclined: true,
    ignoreErrored: true,
    onUnaccepted: function(data) {
      console.warn(
        'Ignored an update to unaccepted module ' + data.chain.join(' -> ')
      );
    },
    onDeclined: function(data) {
      console.warn(
        'Ignored an update to declined module ' + data.chain.join(' -> ')
      );
    },
    onErrored: function(data) {
      console.error(data.error);
      console.warn(
        'Ignored an error while updating module ' +
          data.moduleId +
          ' (' +
          data.type +
          ')'
      );
    },
  };
  
  function upToDate(hash) {
    if (hash) lastHash = hash;
    return lastHash == __webpack_require__.h();
  }
  
  module.exports = function(hash, moduleMap, options) {
    var reload = options.reload;
    if (!upToDate(hash) && module.hot.status() == 'idle') {
      if (options.log) console.log('[HMR] Checking for updates on the server...');
      check();
    }
  
    function check() {
      var cb = function(err, updatedModules) {
        if (err) return handleError(err);
  
        if (!updatedModules) {
          if (options.warn) {
            console.warn('[HMR] Cannot find update (Full reload needed)');
            console.warn('[HMR] (Probably because of restarting the server)');
          }
          performReload();
          return null;
        }
  
        var applyCallback = function(applyErr, renewedModules) {
          if (applyErr) return handleError(applyErr);
  
          if (!upToDate()) check();
  
          logUpdates(updatedModules, renewedModules);
        };
  
        var applyResult = module.hot.apply(applyOptions, applyCallback);
        // webpack 2 promise
        if (applyResult && applyResult.then) {
          // HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
          applyResult.then(function(outdatedModules) {
            applyCallback(null, outdatedModules);
          });
          applyResult.catch(applyCallback);
        }
      };
  
      var result = module.hot.check(false, cb);
      // webpack 2 promise
      if (result && result.then) {
        result.then(function(updatedModules) {
          cb(null, updatedModules);
        });
        result.catch(cb);
      }
    }
  
    function logUpdates(updatedModules, renewedModules) {
      var unacceptedModules = updatedModules.filter(function(moduleId) {
        return renewedModules && renewedModules.indexOf(moduleId) < 0;
      });
  
      if (unacceptedModules.length > 0) {
        if (options.warn) {
          console.warn(
            "[HMR] The following modules couldn't be hot updated: " +
              '(Full reload needed)\n' +
              'This is usually because the modules which have changed ' +
              '(and their parents) do not know how to hot reload themselves. ' +
              'See ' +
              hmrDocsUrl +
              ' for more details.'
          );
          unacceptedModules.forEach(function(moduleId) {
            console.warn('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
          });
        }
        performReload();
        return;
      }
  
      if (options.log) {
        if (!renewedModules || renewedModules.length === 0) {
          console.log('[HMR] Nothing hot updated.');
        } else {
          console.log('[HMR] Updated modules:');
          renewedModules.forEach(function(moduleId) {
            console.log('[HMR]  - ' + (moduleMap[moduleId] || moduleId));
          });
        }
  
        if (upToDate()) {
          console.log('[HMR] App is up to date.');
        }
      }
    }
  
    function handleError(err) {
      if (module.hot.status() in failureStatuses) {
        if (options.warn) {
          console.warn('[HMR] Cannot check for update (Full reload needed)');
          console.warn('[HMR] ' + (err.stack || err.message));
        }
        performReload();
        return;
      }
      if (options.warn) {
        console.warn('[HMR] Update check failed: ' + (err.stack || err.message));
      }
    }
  
    function performReload() {
      if (reload) {
        if (options.warn) console.warn('[HMR] Reloading page');
        window.location.reload();
      }
    }
  };
  
  
  /***/ }),
  
  /***/ "../node_modules/webpack/buildin/module.js":
  /*!*************************************************!*\
    !*** ../node_modules/webpack/buildin/module.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  module.exports = function(module) {
    if (!module.webpackPolyfill) {
      module.deprecate = function() {};
      module.paths = [];
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function() {
          return module.i;
        }
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };
  
  
  /***/ }),
  
  /***/ "./kline/base/index.js":
  /*!*****************************!*\
    !*** ./kline/base/index.js ***!
    \*****************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var kchart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kchart */ "../dist/kchart.js");
  /* harmony import */ var kchart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kchart__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var kchart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kchart.css */ "../dist/kchart.css");
  /* harmony import */ var kchart_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kchart_css__WEBPACK_IMPORTED_MODULE_1__);
  
  
  console.log('kchart', kchart__WEBPACK_IMPORTED_MODULE_0___default.a);
  const {
    Kline,
    KlineDataSet,
    RemoteDataSet,
    VolumeDataSet,
    Volume
  } = kchart__WEBPACK_IMPORTED_MODULE_0___default.a;
  var columns = ["timestamp", // 时间
  "open", // 开
  "high", // 高
  "low", // 低
  "close", // 收
  "volume", // 成交量
  "amount", // 成交额
  "chg", // 涨跌额
  "percent", // 涨跌幅
  "turnoverrate" // 换手率
  ];
  var remoteDataSet = new RemoteDataSet({
    columns: columns
  });
  var kDataSet = new KlineDataSet({
    columns: columns,
    allDataSet: remoteDataSet
  });
  var vDataSet = new VolumeDataSet({
    columns: columns,
    allDataSet: remoteDataSet
  });
  var kline = new Kline({
    el: '#chart',
    // left: 45,
    // mouseLineType: true,
    allDataSet: remoteDataSet,
    dataSet: kDataSet
  });
  var volume = new Volume({
    el: '#volume',
    allDataSet: remoteDataSet,
    dataSet: vDataSet,
    // autoFetchData: false,
    tooltips: false
  });
  kline.connect(volume);
  volume.connect(kline);
  console.log('kline', kline);
  console.log('volume', volume); // setTimeout(() => {
  
  setInterval(() => {// kline.$options.sliceType = 'fill'
    // kline.update()
    // kline.moveChart(-1)
  }, 1000);
  var $toolbar = $('.toolbar');
  var $btnZoomBack = $('#zoom-back');
  var $btnZoomOut = $('#zoom-out');
  var $btnZoomIn = $('#zoom-on');
  var $btnWalkLeft = $('#walk-left');
  var $btnWalkRight = $('#walk-right');
  var $btnSliceType = $('#slice-type');
  setTimeout(() => {
    $toolbar.show();
  });
  $btnZoomBack.on('click', function () {
    kline.resetScaleChart();
  });
  $btnZoomOut.on('click', function () {
    kline.scaleChart(1);
  });
  $btnZoomIn.on('click', function () {
    kline.scaleChart(-1);
  });
  $btnWalkLeft.on('click', function () {
    kline.moveChartWithMouseLine(-1);
  });
  $btnWalkRight.on('click', function () {
    kline.moveChartWithMouseLine(1);
  });
  $btnSliceType.on('click', function () {
    kline.$options.sliceType = !kline.$options.sliceType;
    volume.$options.sliceType = !volume.$options.sliceType;
    kline.update();
    volume.update();
  });
  pressBtn($btnZoomOut, function () {
    kline.scaleChart(5);
  });
  pressBtn($btnZoomIn, function () {
    kline.scaleChart(-5);
  });
  pressBtn($btnWalkLeft, function () {
    kline.moveChartWithMouseLine(-5);
  });
  pressBtn($btnWalkRight, function () {
    kline.moveChartWithMouseLine(5);
  });
  
  function pressBtn(el, callback) {
    var timer = 0;
    el.on('mousedown touchstart', function () {
      timer = setInterval(callback, 200);
    });
    el.on('mouseup touchend', function () {
      clearInterval(timer);
    });
  }
  
  /***/ }),
  
  /***/ 0:
  /*!*****************************************************************************************!*\
    !*** multi webpack-hot-middleware/client?noInfo=true&reload=true ./kline/base/index.js ***!
    \*****************************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports, __webpack_require__) {
  
  __webpack_require__(/*! webpack-hot-middleware/client?noInfo=true&reload=true */"../node_modules/webpack-hot-middleware/client.js?noInfo=true&reload=true");
  module.exports = __webpack_require__(/*! /Volumes/Seagate/workspaces/github_projects/k-chart/example/kline/base/index.js */"./kline/base/index.js");
  
  
  /***/ })
  
  }]);
  //# sourceMappingURL=kchart.js.map