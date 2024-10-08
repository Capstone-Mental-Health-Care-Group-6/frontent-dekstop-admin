import {
  require_prop_types
} from "./chunk-YU7MVGIP.js";
import {
  require_classnames
} from "./chunk-XYVKJREB.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/photoswipe/dist/photoswipe.js
var require_photoswipe = __commonJS({
  "node_modules/photoswipe/dist/photoswipe.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.PhotoSwipe = factory();
      }
    })(exports, function() {
      "use strict";
      var PhotoSwipe = function(template, UiClass, items, options) {
        var framework = {
          features: null,
          bind: function(target, type, listener, unbind) {
            var methodName = (unbind ? "remove" : "add") + "EventListener";
            type = type.split(" ");
            for (var i = 0; i < type.length; i++) {
              if (type[i]) {
                target[methodName](type[i], listener, false);
              }
            }
          },
          isArray: function(obj) {
            return obj instanceof Array;
          },
          createEl: function(classes, tag) {
            var el = document.createElement(tag || "div");
            if (classes) {
              el.className = classes;
            }
            return el;
          },
          getScrollY: function() {
            var yOffset = window.pageYOffset;
            return yOffset !== void 0 ? yOffset : document.documentElement.scrollTop;
          },
          unbind: function(target, type, listener) {
            framework.bind(target, type, listener, true);
          },
          removeClass: function(el, className) {
            var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
            el.className = el.className.replace(reg, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
          },
          addClass: function(el, className) {
            if (!framework.hasClass(el, className)) {
              el.className += (el.className ? " " : "") + className;
            }
          },
          hasClass: function(el, className) {
            return el.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(el.className);
          },
          getChildByClass: function(parentEl, childClassName) {
            var node = parentEl.firstChild;
            while (node) {
              if (framework.hasClass(node, childClassName)) {
                return node;
              }
              node = node.nextSibling;
            }
          },
          arraySearch: function(array, value, key) {
            var i = array.length;
            while (i--) {
              if (array[i][key] === value) {
                return i;
              }
            }
            return -1;
          },
          extend: function(o1, o2, preventOverwrite) {
            for (var prop in o2) {
              if (o2.hasOwnProperty(prop)) {
                if (preventOverwrite && o1.hasOwnProperty(prop)) {
                  continue;
                }
                o1[prop] = o2[prop];
              }
            }
          },
          easing: {
            sine: {
              out: function(k) {
                return Math.sin(k * (Math.PI / 2));
              },
              inOut: function(k) {
                return -(Math.cos(Math.PI * k) - 1) / 2;
              }
            },
            cubic: {
              out: function(k) {
                return --k * k * k + 1;
              }
            }
            /*
            			elastic: {
            				out: function ( k ) {
            
            					var s, a = 0.1, p = 0.4;
            					if ( k === 0 ) return 0;
            					if ( k === 1 ) return 1;
            					if ( !a || a < 1 ) { a = 1; s = p / 4; }
            					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
            					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
            
            				},
            			},
            			back: {
            				out: function ( k ) {
            					var s = 1.70158;
            					return --k * k * ( ( s + 1 ) * k + s ) + 1;
            				}
            			}
            		*/
          },
          /**
           * 
           * @return {object}
           * 
           * {
           *  raf : request animation frame function
           *  caf : cancel animation frame function
           *  transfrom : transform property key (with vendor), or null if not supported
           *  oldIE : IE8 or below
           * }
           * 
           */
          detectFeatures: function() {
            if (framework.features) {
              return framework.features;
            }
            var helperEl = framework.createEl(), helperStyle = helperEl.style, vendor = "", features = {};
            features.oldIE = document.all && !document.addEventListener;
            features.touch = "ontouchstart" in window;
            if (window.requestAnimationFrame) {
              features.raf = window.requestAnimationFrame;
              features.caf = window.cancelAnimationFrame;
            }
            features.pointerEvent = !!window.PointerEvent || navigator.msPointerEnabled;
            if (!features.pointerEvent) {
              var ua = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                if (v && v.length > 0) {
                  v = parseInt(v[1], 10);
                  if (v >= 1 && v < 8) {
                    features.isOldIOSPhone = true;
                  }
                }
              }
              var match = ua.match(/Android\s([0-9\.]*)/);
              var androidversion = match ? match[1] : 0;
              androidversion = parseFloat(androidversion);
              if (androidversion >= 1) {
                if (androidversion < 4.4) {
                  features.isOldAndroid = true;
                }
                features.androidVersion = androidversion;
              }
              features.isMobileOpera = /opera mini|opera mobi/i.test(ua);
            }
            var styleChecks = ["transform", "perspective", "animationName"], vendors = ["", "webkit", "Moz", "ms", "O"], styleCheckItem, styleName;
            for (var i = 0; i < 4; i++) {
              vendor = vendors[i];
              for (var a = 0; a < 3; a++) {
                styleCheckItem = styleChecks[a];
                styleName = vendor + (vendor ? styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : styleCheckItem);
                if (!features[styleCheckItem] && styleName in helperStyle) {
                  features[styleCheckItem] = styleName;
                }
              }
              if (vendor && !features.raf) {
                vendor = vendor.toLowerCase();
                features.raf = window[vendor + "RequestAnimationFrame"];
                if (features.raf) {
                  features.caf = window[vendor + "CancelAnimationFrame"] || window[vendor + "CancelRequestAnimationFrame"];
                }
              }
            }
            if (!features.raf) {
              var lastTime = 0;
              features.raf = function(fn) {
                var currTime = (/* @__PURE__ */ new Date()).getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() {
                  fn(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
              };
              features.caf = function(id) {
                clearTimeout(id);
              };
            }
            features.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            framework.features = features;
            return features;
          }
        };
        framework.detectFeatures();
        if (framework.features.oldIE) {
          framework.bind = function(target, type, listener, unbind) {
            type = type.split(" ");
            var methodName = (unbind ? "detach" : "attach") + "Event", evName, _handleEv = function() {
              listener.handleEvent.call(listener);
            };
            for (var i = 0; i < type.length; i++) {
              evName = type[i];
              if (evName) {
                if (typeof listener === "object" && listener.handleEvent) {
                  if (!unbind) {
                    listener["oldIE" + evName] = _handleEv;
                  } else {
                    if (!listener["oldIE" + evName]) {
                      return false;
                    }
                  }
                  target[methodName]("on" + evName, listener["oldIE" + evName]);
                } else {
                  target[methodName]("on" + evName, listener);
                }
              }
            }
          };
        }
        var self2 = this;
        var DOUBLE_TAP_RADIUS = 25, NUM_HOLDERS = 3;
        var _options = {
          allowPanToNext: true,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: false,
          loop: true,
          pinchToClose: true,
          closeOnScroll: true,
          closeOnVerticalDrag: true,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: false,
          focus: true,
          escKey: true,
          arrowKeys: true,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function(el) {
            return el.tagName === "A";
          },
          getDoubleTapZoom: function(isMouseClick, item) {
            if (isMouseClick) {
              return 1;
            } else {
              return item.initialZoomLevel < 0.7 ? 1 : 1.33;
            }
          },
          maxSpreadZoom: 1.33,
          modal: true,
          // not fully implemented yet
          scaleMode: "fit"
          // TODO
        };
        framework.extend(_options, options);
        var _getEmptyPoint = function() {
          return { x: 0, y: 0 };
        };
        var _isOpen, _isDestroying, _closedByScroll, _currentItemIndex, _containerStyle, _containerShiftIndex, _currPanDist = _getEmptyPoint(), _startPanOffset = _getEmptyPoint(), _panOffset = _getEmptyPoint(), _upMoveEvents, _downEvents, _globalEventHandlers, _viewportSize = {}, _currZoomLevel, _startZoomLevel, _translatePrefix, _translateSufix, _updateSizeInterval, _itemsNeedUpdate, _currPositionIndex = 0, _offset = {}, _slideSize = _getEmptyPoint(), _itemHolders, _prevItemIndex, _indexDiff = 0, _dragStartEvent, _dragMoveEvent, _dragEndEvent, _dragCancelEvent, _transformKey, _pointerEventEnabled, _isFixedPosition = true, _likelyTouchDevice, _modules = [], _requestAF, _cancelAF, _initalClassName, _initalWindowScrollY, _oldIE, _currentWindowScrollY, _features, _windowVisibleSize = {}, _renderMaxResolution = false, _orientationChangeTimeout, _registerModule = function(name, module2) {
          framework.extend(self2, module2.publicMethods);
          _modules.push(name);
        }, _getLoopedId = function(index) {
          var numSlides = _getNumItems();
          if (index > numSlides - 1) {
            return index - numSlides;
          } else if (index < 0) {
            return numSlides + index;
          }
          return index;
        }, _listeners = {}, _listen = function(name, fn) {
          if (!_listeners[name]) {
            _listeners[name] = [];
          }
          return _listeners[name].push(fn);
        }, _shout = function(name) {
          var listeners = _listeners[name];
          if (listeners) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();
            for (var i = 0; i < listeners.length; i++) {
              listeners[i].apply(self2, args);
            }
          }
        }, _getCurrentTime = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, _applyBgOpacity = function(opacity) {
          _bgOpacity = opacity;
          self2.bg.style.opacity = opacity * _options.bgOpacity;
        }, _applyZoomTransform = function(styleObj, x, y, zoom, item) {
          if (!_renderMaxResolution || item && item !== self2.currItem) {
            zoom = zoom / (item ? item.fitRatio : self2.currItem.fitRatio);
          }
          styleObj[_transformKey] = _translatePrefix + x + "px, " + y + "px" + _translateSufix + " scale(" + zoom + ")";
        }, _applyCurrentZoomPan = function(allowRenderResolution) {
          if (_currZoomElementStyle) {
            if (allowRenderResolution) {
              if (_currZoomLevel > self2.currItem.fitRatio) {
                if (!_renderMaxResolution) {
                  _setImageSize(self2.currItem, false, true);
                  _renderMaxResolution = true;
                }
              } else {
                if (_renderMaxResolution) {
                  _setImageSize(self2.currItem);
                  _renderMaxResolution = false;
                }
              }
            }
            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
          }
        }, _applyZoomPanToItem = function(item) {
          if (item.container) {
            _applyZoomTransform(
              item.container.style,
              item.initialPosition.x,
              item.initialPosition.y,
              item.initialZoomLevel,
              item
            );
          }
        }, _setTranslateX = function(x, elStyle) {
          elStyle[_transformKey] = _translatePrefix + x + "px, 0px" + _translateSufix;
        }, _moveMainScroll = function(x, dragging) {
          if (!_options.loop && dragging) {
            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x, delta2 = Math.round(x - _mainScrollPos.x);
            if (newSlideIndexOffset < 0 && delta2 > 0 || newSlideIndexOffset >= _getNumItems() - 1 && delta2 < 0) {
              x = _mainScrollPos.x + delta2 * _options.mainScrollEndFriction;
            }
          }
          _mainScrollPos.x = x;
          _setTranslateX(x, _containerStyle);
        }, _calculatePanOffset = function(axis, zoomLevel) {
          var m = _midZoomPoint[axis] - _offset[axis];
          return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
        }, _equalizePoints = function(p1, p22) {
          p1.x = p22.x;
          p1.y = p22.y;
          if (p22.id) {
            p1.id = p22.id;
          }
        }, _roundPoint = function(p3) {
          p3.x = Math.round(p3.x);
          p3.y = Math.round(p3.y);
        }, _mouseMoveTimeout = null, _onFirstMouseMove = function() {
          if (_mouseMoveTimeout) {
            framework.unbind(document, "mousemove", _onFirstMouseMove);
            framework.addClass(template, "pswp--has_mouse");
            _options.mouseUsed = true;
            _shout("mouseUsed");
          }
          _mouseMoveTimeout = setTimeout(function() {
            _mouseMoveTimeout = null;
          }, 100);
        }, _bindEvents = function() {
          framework.bind(document, "keydown", self2);
          if (_features.transform) {
            framework.bind(self2.scrollWrap, "click", self2);
          }
          if (!_options.mouseUsed) {
            framework.bind(document, "mousemove", _onFirstMouseMove);
          }
          framework.bind(window, "resize scroll orientationchange", self2);
          _shout("bindEvents");
        }, _unbindEvents = function() {
          framework.unbind(window, "resize scroll orientationchange", self2);
          framework.unbind(window, "scroll", _globalEventHandlers.scroll);
          framework.unbind(document, "keydown", self2);
          framework.unbind(document, "mousemove", _onFirstMouseMove);
          if (_features.transform) {
            framework.unbind(self2.scrollWrap, "click", self2);
          }
          if (_isDragging) {
            framework.unbind(window, _upMoveEvents, self2);
          }
          clearTimeout(_orientationChangeTimeout);
          _shout("unbindEvents");
        }, _calculatePanBounds = function(zoomLevel, update) {
          var bounds = _calculateItemSize(self2.currItem, _viewportSize, zoomLevel);
          if (update) {
            _currPanBounds = bounds;
          }
          return bounds;
        }, _getMinZoomLevel = function(item) {
          if (!item) {
            item = self2.currItem;
          }
          return item.initialZoomLevel;
        }, _getMaxZoomLevel = function(item) {
          if (!item) {
            item = self2.currItem;
          }
          return item.w > 0 ? _options.maxSpreadZoom : 1;
        }, _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
          if (destZoomLevel === self2.currItem.initialZoomLevel) {
            destPanOffset[axis] = self2.currItem.initialPosition[axis];
            return true;
          } else {
            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);
            if (destPanOffset[axis] > destPanBounds.min[axis]) {
              destPanOffset[axis] = destPanBounds.min[axis];
              return true;
            } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
              destPanOffset[axis] = destPanBounds.max[axis];
              return true;
            }
          }
          return false;
        }, _setupTransforms = function() {
          if (_transformKey) {
            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
            _translatePrefix = "translate" + (allow3dTransform ? "3d(" : "(");
            _translateSufix = _features.perspective ? ", 0px)" : ")";
            return;
          }
          _transformKey = "left";
          framework.addClass(template, "pswp--ie");
          _setTranslateX = function(x, elStyle) {
            elStyle.left = x + "px";
          };
          _applyZoomPanToItem = function(item) {
            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, s = item.container.style, w = zoomRatio * item.w, h = zoomRatio * item.h;
            s.width = w + "px";
            s.height = h + "px";
            s.left = item.initialPosition.x + "px";
            s.top = item.initialPosition.y + "px";
          };
          _applyCurrentZoomPan = function() {
            if (_currZoomElementStyle) {
              var s = _currZoomElementStyle, item = self2.currItem, zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio, w = zoomRatio * item.w, h = zoomRatio * item.h;
              s.width = w + "px";
              s.height = h + "px";
              s.left = _panOffset.x + "px";
              s.top = _panOffset.y + "px";
            }
          };
        }, _onKeyDown = function(e) {
          var keydownAction = "";
          if (_options.escKey && e.keyCode === 27) {
            keydownAction = "close";
          } else if (_options.arrowKeys) {
            if (e.keyCode === 37) {
              keydownAction = "prev";
            } else if (e.keyCode === 39) {
              keydownAction = "next";
            }
          }
          if (keydownAction) {
            if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
              if (e.preventDefault) {
                e.preventDefault();
              } else {
                e.returnValue = false;
              }
              self2[keydownAction]();
            }
          }
        }, _onGlobalClick = function(e) {
          if (!e) {
            return;
          }
          if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, _updatePageScrollOffset = function() {
          self2.setScrollOffset(0, framework.getScrollY());
        };
        var _animations = {}, _numAnimations = 0, _stopAnimation = function(name) {
          if (_animations[name]) {
            if (_animations[name].raf) {
              _cancelAF(_animations[name].raf);
            }
            _numAnimations--;
            delete _animations[name];
          }
        }, _registerStartAnimation = function(name) {
          if (_animations[name]) {
            _stopAnimation(name);
          }
          if (!_animations[name]) {
            _numAnimations++;
            _animations[name] = {};
          }
        }, _stopAllAnimations = function() {
          for (var prop in _animations) {
            if (_animations.hasOwnProperty(prop)) {
              _stopAnimation(prop);
            }
          }
        }, _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
          var startAnimTime = _getCurrentTime(), t;
          _registerStartAnimation(name);
          var animloop = function() {
            if (_animations[name]) {
              t = _getCurrentTime() - startAnimTime;
              if (t >= d) {
                _stopAnimation(name);
                onUpdate(endProp);
                if (onComplete) {
                  onComplete();
                }
                return;
              }
              onUpdate((endProp - b) * easingFn(t / d) + b);
              _animations[name].raf = _requestAF(animloop);
            }
          };
          animloop();
        };
        var publicMethods = {
          // make a few local variables and functions public
          shout: _shout,
          listen: _listen,
          viewportSize: _viewportSize,
          options: _options,
          isMainScrollAnimating: function() {
            return _mainScrollAnimating;
          },
          getZoomLevel: function() {
            return _currZoomLevel;
          },
          getCurrentIndex: function() {
            return _currentItemIndex;
          },
          isDragging: function() {
            return _isDragging;
          },
          isZooming: function() {
            return _isZooming;
          },
          setScrollOffset: function(x, y) {
            _offset.x = x;
            _currentWindowScrollY = _offset.y = y;
            _shout("updateScrollOffset", _offset);
          },
          applyZoomPan: function(zoomLevel, panX, panY, allowRenderResolution) {
            _panOffset.x = panX;
            _panOffset.y = panY;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan(allowRenderResolution);
          },
          init: function() {
            if (_isOpen || _isDestroying) {
              return;
            }
            var i;
            self2.framework = framework;
            self2.template = template;
            self2.bg = framework.getChildByClass(template, "pswp__bg");
            _initalClassName = template.className;
            _isOpen = true;
            _features = framework.detectFeatures();
            _requestAF = _features.raf;
            _cancelAF = _features.caf;
            _transformKey = _features.transform;
            _oldIE = _features.oldIE;
            self2.scrollWrap = framework.getChildByClass(template, "pswp__scroll-wrap");
            self2.container = framework.getChildByClass(self2.scrollWrap, "pswp__container");
            _containerStyle = self2.container.style;
            self2.itemHolders = _itemHolders = [
              { el: self2.container.children[0], wrap: 0, index: -1 },
              { el: self2.container.children[1], wrap: 0, index: -1 },
              { el: self2.container.children[2], wrap: 0, index: -1 }
            ];
            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "none";
            _setupTransforms();
            _globalEventHandlers = {
              resize: self2.updateSize,
              // Fixes: iOS 10.3 resize event
              // does not update scrollWrap.clientWidth instantly after resize
              // https://github.com/dimsemenov/PhotoSwipe/issues/1315
              orientationchange: function() {
                clearTimeout(_orientationChangeTimeout);
                _orientationChangeTimeout = setTimeout(function() {
                  if (_viewportSize.x !== self2.scrollWrap.clientWidth) {
                    self2.updateSize();
                  }
                }, 500);
              },
              scroll: _updatePageScrollOffset,
              keydown: _onKeyDown,
              click: _onGlobalClick
            };
            var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
            if (!_features.animationName || !_features.transform || oldPhone) {
              _options.showAnimationDuration = _options.hideAnimationDuration = 0;
            }
            for (i = 0; i < _modules.length; i++) {
              self2["init" + _modules[i]]();
            }
            if (UiClass) {
              var ui = self2.ui = new UiClass(self2, framework);
              ui.init();
            }
            _shout("firstUpdate");
            _currentItemIndex = _currentItemIndex || _options.index || 0;
            if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
              _currentItemIndex = 0;
            }
            self2.currItem = _getItemAt(_currentItemIndex);
            if (_features.isOldIOSPhone || _features.isOldAndroid) {
              _isFixedPosition = false;
            }
            template.setAttribute("aria-hidden", "false");
            if (_options.modal) {
              if (!_isFixedPosition) {
                template.style.position = "absolute";
                template.style.top = framework.getScrollY() + "px";
              } else {
                template.style.position = "fixed";
              }
            }
            if (_currentWindowScrollY === void 0) {
              _shout("initialLayout");
              _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
            }
            var rootClasses = "pswp--open ";
            if (_options.mainClass) {
              rootClasses += _options.mainClass + " ";
            }
            if (_options.showHideOpacity) {
              rootClasses += "pswp--animate_opacity ";
            }
            rootClasses += _likelyTouchDevice ? "pswp--touch" : "pswp--notouch";
            rootClasses += _features.animationName ? " pswp--css_animation" : "";
            rootClasses += _features.svg ? " pswp--svg" : "";
            framework.addClass(template, rootClasses);
            self2.updateSize();
            _containerShiftIndex = -1;
            _indexDiff = null;
            for (i = 0; i < NUM_HOLDERS; i++) {
              _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
            }
            if (!_oldIE) {
              framework.bind(self2.scrollWrap, _downEvents, self2);
            }
            _listen("initialZoomInEnd", function() {
              self2.setContent(_itemHolders[0], _currentItemIndex - 1);
              self2.setContent(_itemHolders[2], _currentItemIndex + 1);
              _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = "block";
              if (_options.focus) {
                template.focus();
              }
              _bindEvents();
            });
            self2.setContent(_itemHolders[1], _currentItemIndex);
            self2.updateCurrItem();
            _shout("afterInit");
            if (!_isFixedPosition) {
              _updateSizeInterval = setInterval(function() {
                if (!_numAnimations && !_isDragging && !_isZooming && _currZoomLevel === self2.currItem.initialZoomLevel) {
                  self2.updateSize();
                }
              }, 1e3);
            }
            framework.addClass(template, "pswp--visible");
          },
          // Close the gallery, then destroy it
          close: function() {
            if (!_isOpen) {
              return;
            }
            _isOpen = false;
            _isDestroying = true;
            _shout("close");
            _unbindEvents();
            _showOrHide(self2.currItem, null, true, self2.destroy);
          },
          // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
          destroy: function() {
            _shout("destroy");
            if (_showOrHideTimeout) {
              clearTimeout(_showOrHideTimeout);
            }
            template.setAttribute("aria-hidden", "true");
            template.className = _initalClassName;
            if (_updateSizeInterval) {
              clearInterval(_updateSizeInterval);
            }
            framework.unbind(self2.scrollWrap, _downEvents, self2);
            framework.unbind(window, "scroll", self2);
            _stopDragUpdateLoop();
            _stopAllAnimations();
            _listeners = null;
          },
          /**
           * Pan image to position
           * @param {Number} x     
           * @param {Number} y     
           * @param {Boolean} force Will ignore bounds if set to true.
           */
          panTo: function(x, y, force) {
            if (!force) {
              if (x > _currPanBounds.min.x) {
                x = _currPanBounds.min.x;
              } else if (x < _currPanBounds.max.x) {
                x = _currPanBounds.max.x;
              }
              if (y > _currPanBounds.min.y) {
                y = _currPanBounds.min.y;
              } else if (y < _currPanBounds.max.y) {
                y = _currPanBounds.max.y;
              }
            }
            _panOffset.x = x;
            _panOffset.y = y;
            _applyCurrentZoomPan();
          },
          handleEvent: function(e) {
            e = e || window.event;
            if (_globalEventHandlers[e.type]) {
              _globalEventHandlers[e.type](e);
            }
          },
          goTo: function(index) {
            index = _getLoopedId(index);
            var diff = index - _currentItemIndex;
            _indexDiff = diff;
            _currentItemIndex = index;
            self2.currItem = _getItemAt(_currentItemIndex);
            _currPositionIndex -= diff;
            _moveMainScroll(_slideSize.x * _currPositionIndex);
            _stopAllAnimations();
            _mainScrollAnimating = false;
            self2.updateCurrItem();
          },
          next: function() {
            self2.goTo(_currentItemIndex + 1);
          },
          prev: function() {
            self2.goTo(_currentItemIndex - 1);
          },
          // update current zoom/pan objects
          updateCurrZoomItem: function(emulateSetContent) {
            if (emulateSetContent) {
              _shout("beforeChange", 0);
            }
            if (_itemHolders[1].el.children.length) {
              var zoomElement = _itemHolders[1].el.children[0];
              if (framework.hasClass(zoomElement, "pswp__zoom-wrap")) {
                _currZoomElementStyle = zoomElement.style;
              } else {
                _currZoomElementStyle = null;
              }
            } else {
              _currZoomElementStyle = null;
            }
            _currPanBounds = self2.currItem.bounds;
            _startZoomLevel = _currZoomLevel = self2.currItem.initialZoomLevel;
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;
            if (emulateSetContent) {
              _shout("afterChange");
            }
          },
          invalidateCurrItems: function() {
            _itemsNeedUpdate = true;
            for (var i = 0; i < NUM_HOLDERS; i++) {
              if (_itemHolders[i].item) {
                _itemHolders[i].item.needsUpdate = true;
              }
            }
          },
          updateCurrItem: function(beforeAnimation) {
            if (_indexDiff === 0) {
              return;
            }
            var diffAbs = Math.abs(_indexDiff), tempHolder;
            if (beforeAnimation && diffAbs < 2) {
              return;
            }
            self2.currItem = _getItemAt(_currentItemIndex);
            _renderMaxResolution = false;
            _shout("beforeChange", _indexDiff);
            if (diffAbs >= NUM_HOLDERS) {
              _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
              diffAbs = NUM_HOLDERS;
            }
            for (var i = 0; i < diffAbs; i++) {
              if (_indexDiff > 0) {
                tempHolder = _itemHolders.shift();
                _itemHolders[NUM_HOLDERS - 1] = tempHolder;
                _containerShiftIndex++;
                _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
                self2.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
              } else {
                tempHolder = _itemHolders.pop();
                _itemHolders.unshift(tempHolder);
                _containerShiftIndex--;
                _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
                self2.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
              }
            }
            if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {
              var prevItem = _getItemAt(_prevItemIndex);
              if (prevItem.initialZoomLevel !== _currZoomLevel) {
                _calculateItemSize(prevItem, _viewportSize);
                _setImageSize(prevItem);
                _applyZoomPanToItem(prevItem);
              }
            }
            _indexDiff = 0;
            self2.updateCurrZoomItem();
            _prevItemIndex = _currentItemIndex;
            _shout("afterChange");
          },
          updateSize: function(force) {
            if (!_isFixedPosition && _options.modal) {
              var windowScrollY = framework.getScrollY();
              if (_currentWindowScrollY !== windowScrollY) {
                template.style.top = windowScrollY + "px";
                _currentWindowScrollY = windowScrollY;
              }
              if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                return;
              }
              _windowVisibleSize.x = window.innerWidth;
              _windowVisibleSize.y = window.innerHeight;
              template.style.height = _windowVisibleSize.y + "px";
            }
            _viewportSize.x = self2.scrollWrap.clientWidth;
            _viewportSize.y = self2.scrollWrap.clientHeight;
            _updatePageScrollOffset();
            _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
            _slideSize.y = _viewportSize.y;
            _moveMainScroll(_slideSize.x * _currPositionIndex);
            _shout("beforeResize");
            if (_containerShiftIndex !== void 0) {
              var holder, item, hIndex;
              for (var i = 0; i < NUM_HOLDERS; i++) {
                holder = _itemHolders[i];
                _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);
                hIndex = _currentItemIndex + i - 1;
                if (_options.loop && _getNumItems() > 2) {
                  hIndex = _getLoopedId(hIndex);
                }
                item = _getItemAt(hIndex);
                if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {
                  self2.cleanSlide(item);
                  self2.setContent(holder, hIndex);
                  if (i === 1) {
                    self2.currItem = item;
                    self2.updateCurrZoomItem(true);
                  }
                  item.needsUpdate = false;
                } else if (holder.index === -1 && hIndex >= 0) {
                  self2.setContent(holder, hIndex);
                }
                if (item && item.container) {
                  _calculateItemSize(item, _viewportSize);
                  _setImageSize(item);
                  _applyZoomPanToItem(item);
                }
              }
              _itemsNeedUpdate = false;
            }
            _startZoomLevel = _currZoomLevel = self2.currItem.initialZoomLevel;
            _currPanBounds = self2.currItem.bounds;
            if (_currPanBounds) {
              _panOffset.x = _currPanBounds.center.x;
              _panOffset.y = _currPanBounds.center.y;
              _applyCurrentZoomPan(true);
            }
            _shout("resize");
          },
          // Zoom current item to
          zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
            if (centerPoint) {
              _startZoomLevel = _currZoomLevel;
              _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
              _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
              _equalizePoints(_startPanOffset, _panOffset);
            }
            var destPanBounds = _calculatePanBounds(destZoomLevel, false), destPanOffset = {};
            _modifyDestPanOffset("x", destPanBounds, destPanOffset, destZoomLevel);
            _modifyDestPanOffset("y", destPanBounds, destPanOffset, destZoomLevel);
            var initialZoomLevel = _currZoomLevel;
            var initialPanOffset = {
              x: _panOffset.x,
              y: _panOffset.y
            };
            _roundPoint(destPanOffset);
            var onUpdate = function(now) {
              if (now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = destPanOffset.x;
                _panOffset.y = destPanOffset.y;
              } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
              }
              if (updateFn) {
                updateFn(now);
              }
              _applyCurrentZoomPan(now === 1);
            };
            if (speed) {
              _animateProp("customZoomTo", 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
            } else {
              onUpdate(1);
            }
          }
        };
        var MIN_SWIPE_DISTANCE = 30, DIRECTION_CHECK_OFFSET = 10;
        var _gestureStartTime, _gestureCheckSpeedTime, p = {}, p2 = {}, delta = {}, _currPoint = {}, _startPoint = {}, _currPointers = [], _startMainScrollPos = {}, _releaseAnimData, _posPoints = [], _tempPoint = {}, _isZoomingIn, _verticalDragInitiated, _oldAndroidTouchEndTimeout, _currZoomedItemIndex = 0, _centerPoint = _getEmptyPoint(), _lastReleaseTime = 0, _isDragging, _isMultitouch, _zoomStarted, _moved, _dragAnimFrame, _mainScrollShifted, _currentPoints, _isZooming, _currPointsDistance, _startPointsDistance, _currPanBounds, _mainScrollPos = _getEmptyPoint(), _currZoomElementStyle, _mainScrollAnimating, _midZoomPoint = _getEmptyPoint(), _currCenterPoint = _getEmptyPoint(), _direction, _isFirstMove, _opacityChanged, _bgOpacity, _wasOverInitialZoom, _isEqualPoints = function(p1, p22) {
          return p1.x === p22.x && p1.y === p22.y;
        }, _isNearbyPoints = function(touch0, touch1) {
          return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
        }, _calculatePointsDistance = function(p1, p22) {
          _tempPoint.x = Math.abs(p1.x - p22.x);
          _tempPoint.y = Math.abs(p1.y - p22.y);
          return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
        }, _stopDragUpdateLoop = function() {
          if (_dragAnimFrame) {
            _cancelAF(_dragAnimFrame);
            _dragAnimFrame = null;
          }
        }, _dragUpdateLoop = function() {
          if (_isDragging) {
            _dragAnimFrame = _requestAF(_dragUpdateLoop);
            _renderMovement();
          }
        }, _canPan = function() {
          return !(_options.scaleMode === "fit" && _currZoomLevel === self2.currItem.initialZoomLevel);
        }, _closestElement = function(el, fn) {
          if (!el || el === document) {
            return false;
          }
          if (el.getAttribute("class") && el.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) {
            return false;
          }
          if (fn(el)) {
            return el;
          }
          return _closestElement(el.parentNode, fn);
        }, _preventObj = {}, _preventDefaultEventBehaviour = function(e, isDown) {
          _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);
          _shout("preventDragEvent", e, isDown, _preventObj);
          return _preventObj.prevent;
        }, _convertTouchToPoint = function(touch, p3) {
          p3.x = touch.pageX;
          p3.y = touch.pageY;
          p3.id = touch.identifier;
          return p3;
        }, _findCenterOfPoints = function(p1, p22, pCenter) {
          pCenter.x = (p1.x + p22.x) * 0.5;
          pCenter.y = (p1.y + p22.y) * 0.5;
        }, _pushPosPoint = function(time, x, y) {
          if (time - _gestureCheckSpeedTime > 50) {
            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
            o.x = x;
            o.y = y;
            _posPoints.push(o);
            _gestureCheckSpeedTime = time;
          }
        }, _calculateVerticalDragOpacityRatio = function() {
          var yOffset = _panOffset.y - self2.currItem.initialPosition.y;
          return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
        }, _ePoint1 = {}, _ePoint2 = {}, _tempPointsArr = [], _tempCounter, _getTouchPoints = function(e) {
          while (_tempPointsArr.length > 0) {
            _tempPointsArr.pop();
          }
          if (!_pointerEventEnabled) {
            if (e.type.indexOf("touch") > -1) {
              if (e.touches && e.touches.length > 0) {
                _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                if (e.touches.length > 1) {
                  _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                }
              }
            } else {
              _ePoint1.x = e.pageX;
              _ePoint1.y = e.pageY;
              _ePoint1.id = "";
              _tempPointsArr[0] = _ePoint1;
            }
          } else {
            _tempCounter = 0;
            _currPointers.forEach(function(p3) {
              if (_tempCounter === 0) {
                _tempPointsArr[0] = p3;
              } else if (_tempCounter === 1) {
                _tempPointsArr[1] = p3;
              }
              _tempCounter++;
            });
          }
          return _tempPointsArr;
        }, _panOrMoveMainScroll = function(axis, delta2) {
          var panFriction, overDiff = 0, newOffset = _panOffset[axis] + delta2[axis], startOverDiff, dir = delta2[axis] > 0, newMainScrollPosition = _mainScrollPos.x + delta2.x, mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x, newPanPos, newMainScrollPos;
          if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
            panFriction = _options.panEndFriction;
          } else {
            panFriction = 1;
          }
          newOffset = _panOffset[axis] + delta2[axis] * panFriction;
          if (_options.allowPanToNext || _currZoomLevel === self2.currItem.initialZoomLevel) {
            if (!_currZoomElementStyle) {
              newMainScrollPos = newMainScrollPosition;
            } else if (_direction === "h" && axis === "x" && !_zoomStarted) {
              if (dir) {
                if (newOffset > _currPanBounds.min[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = _currPanBounds.min[axis] - newOffset;
                  startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                }
                if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;
                  if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              } else {
                if (newOffset < _currPanBounds.max[axis]) {
                  panFriction = _options.panEndFriction;
                  overDiff = newOffset - _currPanBounds.max[axis];
                  startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                }
                if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                  newMainScrollPos = newMainScrollPosition;
                  if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                    newMainScrollPos = _startMainScrollPos.x;
                  }
                } else {
                  if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                    newPanPos = newOffset;
                  }
                }
              }
            }
            if (axis === "x") {
              if (newMainScrollPos !== void 0) {
                _moveMainScroll(newMainScrollPos, true);
                if (newMainScrollPos === _startMainScrollPos.x) {
                  _mainScrollShifted = false;
                } else {
                  _mainScrollShifted = true;
                }
              }
              if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                if (newPanPos !== void 0) {
                  _panOffset.x = newPanPos;
                } else if (!_mainScrollShifted) {
                  _panOffset.x += delta2.x * panFriction;
                }
              }
              return newMainScrollPos !== void 0;
            }
          }
          if (!_mainScrollAnimating) {
            if (!_mainScrollShifted) {
              if (_currZoomLevel > self2.currItem.fitRatio) {
                _panOffset[axis] += delta2[axis] * panFriction;
              }
            }
          }
        }, _onDragStart = function(e) {
          if (e.type === "mousedown" && e.button > 0) {
            return;
          }
          if (_initialZoomRunning) {
            e.preventDefault();
            return;
          }
          if (_oldAndroidTouchEndTimeout && e.type === "mousedown") {
            return;
          }
          if (_preventDefaultEventBehaviour(e, true)) {
            e.preventDefault();
          }
          _shout("pointerDown");
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex < 0) {
              pointerIndex = _currPointers.length;
            }
            _currPointers[pointerIndex] = { x: e.pageX, y: e.pageY, id: e.pointerId };
          }
          var startPointsList = _getTouchPoints(e), numPoints = startPointsList.length;
          _currentPoints = null;
          _stopAllAnimations();
          if (!_isDragging || numPoints === 1) {
            _isDragging = _isFirstMove = true;
            framework.bind(window, _upMoveEvents, self2);
            _isZoomingIn = _wasOverInitialZoom = _opacityChanged = _verticalDragInitiated = _mainScrollShifted = _moved = _isMultitouch = _zoomStarted = false;
            _direction = null;
            _shout("firstTouchStart", startPointsList);
            _equalizePoints(_startPanOffset, _panOffset);
            _currPanDist.x = _currPanDist.y = 0;
            _equalizePoints(_currPoint, startPointsList[0]);
            _equalizePoints(_startPoint, _currPoint);
            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;
            _posPoints = [{
              x: _currPoint.x,
              y: _currPoint.y
            }];
            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();
            _calculatePanBounds(_currZoomLevel, true);
            _stopDragUpdateLoop();
            _dragUpdateLoop();
          }
          if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
            _startZoomLevel = _currZoomLevel;
            _zoomStarted = false;
            _isZooming = _isMultitouch = true;
            _currPanDist.y = _currPanDist.x = 0;
            _equalizePoints(_startPanOffset, _panOffset);
            _equalizePoints(p, startPointsList[0]);
            _equalizePoints(p2, startPointsList[1]);
            _findCenterOfPoints(p, p2, _currCenterPoint);
            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
          }
        }, _onDragMove = function(e) {
          e.preventDefault();
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex > -1) {
              var p3 = _currPointers[pointerIndex];
              p3.x = e.pageX;
              p3.y = e.pageY;
            }
          }
          if (_isDragging) {
            var touchesList = _getTouchPoints(e);
            if (!_direction && !_moved && !_isZooming) {
              if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                _direction = "h";
              } else {
                var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                  _direction = diff > 0 ? "h" : "v";
                  _currentPoints = touchesList;
                }
              }
            } else {
              _currentPoints = touchesList;
            }
          }
        }, _renderMovement = function() {
          if (!_currentPoints) {
            return;
          }
          var numPoints = _currentPoints.length;
          if (numPoints === 0) {
            return;
          }
          _equalizePoints(p, _currentPoints[0]);
          delta.x = p.x - _currPoint.x;
          delta.y = p.y - _currPoint.y;
          if (_isZooming && numPoints > 1) {
            _currPoint.x = p.x;
            _currPoint.y = p.y;
            if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
              return;
            }
            _equalizePoints(p2, _currentPoints[1]);
            if (!_zoomStarted) {
              _zoomStarted = true;
              _shout("zoomGestureStarted");
            }
            var pointsDistance = _calculatePointsDistance(p, p2);
            var zoomLevel = _calculateZoomLevel(pointsDistance);
            if (zoomLevel > self2.currItem.initialZoomLevel + self2.currItem.initialZoomLevel / 15) {
              _wasOverInitialZoom = true;
            }
            var zoomFriction = 1, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
            if (zoomLevel < minZoomLevel) {
              if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self2.currItem.initialZoomLevel) {
                var minusDiff = minZoomLevel - zoomLevel;
                var percent = 1 - minusDiff / (minZoomLevel / 1.2);
                _applyBgOpacity(percent);
                _shout("onPinchClose", percent);
                _opacityChanged = true;
              } else {
                zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                if (zoomFriction > 1) {
                  zoomFriction = 1;
                }
                zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
              }
            } else if (zoomLevel > maxZoomLevel) {
              zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
              if (zoomFriction > 1) {
                zoomFriction = 1;
              }
              zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
            }
            if (zoomFriction < 0) {
              zoomFriction = 0;
            }
            _currPointsDistance = pointsDistance;
            _findCenterOfPoints(p, p2, _centerPoint);
            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
            _equalizePoints(_currCenterPoint, _centerPoint);
            _panOffset.x = _calculatePanOffset("x", zoomLevel);
            _panOffset.y = _calculatePanOffset("y", zoomLevel);
            _isZoomingIn = zoomLevel > _currZoomLevel;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan();
          } else {
            if (!_direction) {
              return;
            }
            if (_isFirstMove) {
              _isFirstMove = false;
              if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                delta.x -= _currentPoints[0].x - _startPoint.x;
              }
              if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                delta.y -= _currentPoints[0].y - _startPoint.y;
              }
            }
            _currPoint.x = p.x;
            _currPoint.y = p.y;
            if (delta.x === 0 && delta.y === 0) {
              return;
            }
            if (_direction === "v" && _options.closeOnVerticalDrag) {
              if (!_canPan()) {
                _currPanDist.y += delta.y;
                _panOffset.y += delta.y;
                var opacityRatio = _calculateVerticalDragOpacityRatio();
                _verticalDragInitiated = true;
                _shout("onVerticalDrag", opacityRatio);
                _applyBgOpacity(opacityRatio);
                _applyCurrentZoomPan();
                return;
              }
            }
            _pushPosPoint(_getCurrentTime(), p.x, p.y);
            _moved = true;
            _currPanBounds = self2.currItem.bounds;
            var mainScrollChanged = _panOrMoveMainScroll("x", delta);
            if (!mainScrollChanged) {
              _panOrMoveMainScroll("y", delta);
              _roundPoint(_panOffset);
              _applyCurrentZoomPan();
            }
          }
        }, _onDragRelease = function(e) {
          if (_features.isOldAndroid) {
            if (_oldAndroidTouchEndTimeout && e.type === "mouseup") {
              return;
            }
            if (e.type.indexOf("touch") > -1) {
              clearTimeout(_oldAndroidTouchEndTimeout);
              _oldAndroidTouchEndTimeout = setTimeout(function() {
                _oldAndroidTouchEndTimeout = 0;
              }, 600);
            }
          }
          _shout("pointerUp");
          if (_preventDefaultEventBehaviour(e, false)) {
            e.preventDefault();
          }
          var releasePoint;
          if (_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, "id");
            if (pointerIndex > -1) {
              releasePoint = _currPointers.splice(pointerIndex, 1)[0];
              if (navigator.msPointerEnabled) {
                var MSPOINTER_TYPES = {
                  4: "mouse",
                  // event.MSPOINTER_TYPE_MOUSE
                  2: "touch",
                  // event.MSPOINTER_TYPE_TOUCH 
                  3: "pen"
                  // event.MSPOINTER_TYPE_PEN
                };
                releasePoint.type = MSPOINTER_TYPES[e.pointerType];
                if (!releasePoint.type) {
                  releasePoint.type = e.pointerType || "mouse";
                }
              } else {
                releasePoint.type = e.pointerType || "mouse";
              }
            }
          }
          var touchList = _getTouchPoints(e), gestureType, numPoints = touchList.length;
          if (e.type === "mouseup") {
            numPoints = 0;
          }
          if (numPoints === 2) {
            _currentPoints = null;
            return true;
          }
          if (numPoints === 1) {
            _equalizePoints(_startPoint, touchList[0]);
          }
          if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
            if (!releasePoint) {
              if (e.type === "mouseup") {
                releasePoint = { x: e.pageX, y: e.pageY, type: "mouse" };
              } else if (e.changedTouches && e.changedTouches[0]) {
                releasePoint = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" };
              }
            }
            _shout("touchRelease", e, releasePoint);
          }
          var releaseTimeDiff = -1;
          if (numPoints === 0) {
            _isDragging = false;
            framework.unbind(window, _upMoveEvents, self2);
            _stopDragUpdateLoop();
            if (_isZooming) {
              releaseTimeDiff = 0;
            } else if (_lastReleaseTime !== -1) {
              releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
            }
          }
          _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
          if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
            gestureType = "zoom";
          } else {
            gestureType = "swipe";
          }
          if (_isZooming && numPoints < 2) {
            _isZooming = false;
            if (numPoints === 1) {
              gestureType = "zoomPointerUp";
            }
            _shout("zoomGestureEnded");
          }
          _currentPoints = null;
          if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
            return;
          }
          _stopAllAnimations();
          if (!_releaseAnimData) {
            _releaseAnimData = _initDragReleaseAnimationData();
          }
          _releaseAnimData.calculateSwipeSpeed("x");
          if (_verticalDragInitiated) {
            var opacityRatio = _calculateVerticalDragOpacityRatio();
            if (opacityRatio < _options.verticalDragRange) {
              self2.close();
            } else {
              var initalPanY = _panOffset.y, initialBgOpacity = _bgOpacity;
              _animateProp("verticalDrag", 0, 1, 300, framework.easing.cubic.out, function(now) {
                _panOffset.y = (self2.currItem.initialPosition.y - initalPanY) * now + initalPanY;
                _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
                _applyCurrentZoomPan();
              });
              _shout("onVerticalDrag", 1);
            }
            return;
          }
          if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
            if (itemChanged) {
              return;
            }
            gestureType = "zoomPointerUp";
          }
          if (_mainScrollAnimating) {
            return;
          }
          if (gestureType !== "swipe") {
            _completeZoomGesture();
            return;
          }
          if (!_mainScrollShifted && _currZoomLevel > self2.currItem.fitRatio) {
            _completePanGesture(_releaseAnimData);
          }
        }, _initDragReleaseAnimationData = function() {
          var lastFlickDuration, tempReleasePos;
          var s = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function(axis) {
              if (_posPoints.length > 1) {
                lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                tempReleasePos = _posPoints[_posPoints.length - 2][axis];
              } else {
                lastFlickDuration = _getCurrentTime() - _gestureStartTime;
                tempReleasePos = _startPoint[axis];
              }
              s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
              s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
              if (s.lastFlickDist[axis] > 20) {
                s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
              } else {
                s.lastFlickSpeed[axis] = 0;
              }
              if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
                s.lastFlickSpeed[axis] = 0;
              }
              s.slowDownRatio[axis] = 0.95;
              s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
              s.speedDecelerationRatio[axis] = 1;
            },
            calculateOverBoundsAnimOffset: function(axis, speed) {
              if (!s.backAnimStarted[axis]) {
                if (_panOffset[axis] > _currPanBounds.min[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.min[axis];
                } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                  s.backAnimDestination[axis] = _currPanBounds.max[axis];
                }
                if (s.backAnimDestination[axis] !== void 0) {
                  s.slowDownRatio[axis] = 0.7;
                  s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                  if (s.speedDecelerationRatioAbs[axis] < 0.05) {
                    s.lastFlickSpeed[axis] = 0;
                    s.backAnimStarted[axis] = true;
                    _animateProp(
                      "bounceZoomPan" + axis,
                      _panOffset[axis],
                      s.backAnimDestination[axis],
                      speed || 300,
                      framework.easing.sine.out,
                      function(pos) {
                        _panOffset[axis] = pos;
                        _applyCurrentZoomPan();
                      }
                    );
                  }
                }
              }
            },
            // Reduces the speed by slowDownRatio (per 10ms)
            calculateAnimOffset: function(axis) {
              if (!s.backAnimStarted[axis]) {
                s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + s.slowDownRatioReverse[axis] - s.slowDownRatioReverse[axis] * s.timeDiff / 10);
                s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                _panOffset[axis] += s.distanceOffset[axis];
              }
            },
            panAnimLoop: function() {
              if (_animations.zoomPan) {
                _animations.zoomPan.raf = _requestAF(s.panAnimLoop);
                s.now = _getCurrentTime();
                s.timeDiff = s.now - s.lastNow;
                s.lastNow = s.now;
                s.calculateAnimOffset("x");
                s.calculateAnimOffset("y");
                _applyCurrentZoomPan();
                s.calculateOverBoundsAnimOffset("x");
                s.calculateOverBoundsAnimOffset("y");
                if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {
                  _panOffset.x = Math.round(_panOffset.x);
                  _panOffset.y = Math.round(_panOffset.y);
                  _applyCurrentZoomPan();
                  _stopAnimation("zoomPan");
                  return;
                }
              }
            }
          };
          return s;
        }, _completePanGesture = function(animData) {
          animData.calculateSwipeSpeed("y");
          _currPanBounds = self2.currItem.bounds;
          animData.backAnimDestination = {};
          animData.backAnimStarted = {};
          if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;
            animData.calculateOverBoundsAnimOffset("x");
            animData.calculateOverBoundsAnimOffset("y");
            return true;
          }
          _registerStartAnimation("zoomPan");
          animData.lastNow = _getCurrentTime();
          animData.panAnimLoop();
        }, _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData2) {
          var itemChanged;
          if (!_mainScrollAnimating) {
            _currZoomedItemIndex = _currentItemIndex;
          }
          var itemsDiff;
          if (gestureType === "swipe") {
            var totalShiftDist = _currPoint.x - _startPoint.x, isFastLastFlick = _releaseAnimData2.lastFlickDist.x < 10;
            if (totalShiftDist > MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x > 20)) {
              itemsDiff = -1;
            } else if (totalShiftDist < -MIN_SWIPE_DISTANCE && (isFastLastFlick || _releaseAnimData2.lastFlickOffset.x < -20)) {
              itemsDiff = 1;
            }
          }
          var nextCircle;
          if (itemsDiff) {
            _currentItemIndex += itemsDiff;
            if (_currentItemIndex < 0) {
              _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
              nextCircle = true;
            } else if (_currentItemIndex >= _getNumItems()) {
              _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
              nextCircle = true;
            }
            if (!nextCircle || _options.loop) {
              _indexDiff += itemsDiff;
              _currPositionIndex -= itemsDiff;
              itemChanged = true;
            }
          }
          var animateToX = _slideSize.x * _currPositionIndex;
          var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
          var finishAnimDuration;
          if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData2.lastFlickSpeed.x > 0) {
            finishAnimDuration = 333;
          } else {
            finishAnimDuration = Math.abs(_releaseAnimData2.lastFlickSpeed.x) > 0 ? animateToDist / Math.abs(_releaseAnimData2.lastFlickSpeed.x) : 333;
            finishAnimDuration = Math.min(finishAnimDuration, 400);
            finishAnimDuration = Math.max(finishAnimDuration, 250);
          }
          if (_currZoomedItemIndex === _currentItemIndex) {
            itemChanged = false;
          }
          _mainScrollAnimating = true;
          _shout("mainScrollAnimStart");
          _animateProp(
            "mainScroll",
            _mainScrollPos.x,
            animateToX,
            finishAnimDuration,
            framework.easing.cubic.out,
            _moveMainScroll,
            function() {
              _stopAllAnimations();
              _mainScrollAnimating = false;
              _currZoomedItemIndex = -1;
              if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                self2.updateCurrItem();
              }
              _shout("mainScrollAnimComplete");
            }
          );
          if (itemChanged) {
            self2.updateCurrItem(true);
          }
          return itemChanged;
        }, _calculateZoomLevel = function(touchesDistance) {
          return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
        }, _completeZoomGesture = function() {
          var destZoomLevel = _currZoomLevel, minZoomLevel = _getMinZoomLevel(), maxZoomLevel = _getMaxZoomLevel();
          if (_currZoomLevel < minZoomLevel) {
            destZoomLevel = minZoomLevel;
          } else if (_currZoomLevel > maxZoomLevel) {
            destZoomLevel = maxZoomLevel;
          }
          var destOpacity = 1, onUpdate, initialOpacity = _bgOpacity;
          if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
            self2.close();
            return true;
          }
          if (_opacityChanged) {
            onUpdate = function(now) {
              _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
            };
          }
          self2.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
          return true;
        };
        _registerModule("Gestures", {
          publicMethods: {
            initGestures: function() {
              var addEventNames = function(pref, down, move, up, cancel) {
                _dragStartEvent = pref + down;
                _dragMoveEvent = pref + move;
                _dragEndEvent = pref + up;
                if (cancel) {
                  _dragCancelEvent = pref + cancel;
                } else {
                  _dragCancelEvent = "";
                }
              };
              _pointerEventEnabled = _features.pointerEvent;
              if (_pointerEventEnabled && _features.touch) {
                _features.touch = false;
              }
              if (_pointerEventEnabled) {
                if (navigator.msPointerEnabled) {
                  addEventNames("MSPointer", "Down", "Move", "Up", "Cancel");
                } else {
                  addEventNames("pointer", "down", "move", "up", "cancel");
                }
              } else if (_features.touch) {
                addEventNames("touch", "start", "move", "end", "cancel");
                _likelyTouchDevice = true;
              } else {
                addEventNames("mouse", "down", "move", "up");
              }
              _upMoveEvents = _dragMoveEvent + " " + _dragEndEvent + " " + _dragCancelEvent;
              _downEvents = _dragStartEvent;
              if (_pointerEventEnabled && !_likelyTouchDevice) {
                _likelyTouchDevice = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1;
              }
              self2.likelyTouchDevice = _likelyTouchDevice;
              _globalEventHandlers[_dragStartEvent] = _onDragStart;
              _globalEventHandlers[_dragMoveEvent] = _onDragMove;
              _globalEventHandlers[_dragEndEvent] = _onDragRelease;
              if (_dragCancelEvent) {
                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
              }
              if (_features.touch) {
                _downEvents += " mousedown";
                _upMoveEvents += " mousemove mouseup";
                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
              }
              if (!_likelyTouchDevice) {
                _options.allowPanToNext = false;
              }
            }
          }
        });
        var _showOrHideTimeout, _showOrHide = function(item, img, out, completeFn) {
          if (_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
          }
          _initialZoomRunning = true;
          _initialContentSet = true;
          var thumbBounds;
          if (item.initialLayout) {
            thumbBounds = item.initialLayout;
            item.initialLayout = null;
          } else {
            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
          }
          var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;
          var onComplete = function() {
            _stopAnimation("initialZoom");
            if (!out) {
              _applyBgOpacity(1);
              if (img) {
                img.style.display = "block";
              }
              framework.addClass(template, "pswp--animated-in");
              _shout("initialZoom" + (out ? "OutEnd" : "InEnd"));
            } else {
              self2.template.removeAttribute("style");
              self2.bg.removeAttribute("style");
            }
            if (completeFn) {
              completeFn();
            }
            _initialZoomRunning = false;
          };
          if (!duration || !thumbBounds || thumbBounds.x === void 0) {
            _shout("initialZoom" + (out ? "Out" : "In"));
            _currZoomLevel = item.initialZoomLevel;
            _equalizePoints(_panOffset, item.initialPosition);
            _applyCurrentZoomPan();
            template.style.opacity = out ? 0 : 1;
            _applyBgOpacity(1);
            if (duration) {
              setTimeout(function() {
                onComplete();
              }, duration);
            } else {
              onComplete();
            }
            return;
          }
          var startAnimation = function() {
            var closeWithRaf = _closedByScroll, fadeEverything = !self2.currItem.src || self2.currItem.loadError || _options.showHideOpacity;
            if (item.miniImg) {
              item.miniImg.style.webkitBackfaceVisibility = "hidden";
            }
            if (!out) {
              _currZoomLevel = thumbBounds.w / item.w;
              _panOffset.x = thumbBounds.x;
              _panOffset.y = thumbBounds.y - _initalWindowScrollY;
              self2[fadeEverything ? "template" : "bg"].style.opacity = 1e-3;
              _applyCurrentZoomPan();
            }
            _registerStartAnimation("initialZoom");
            if (out && !closeWithRaf) {
              framework.removeClass(template, "pswp--animated-in");
            }
            if (fadeEverything) {
              if (out) {
                framework[(closeWithRaf ? "remove" : "add") + "Class"](template, "pswp--animate_opacity");
              } else {
                setTimeout(function() {
                  framework.addClass(template, "pswp--animate_opacity");
                }, 30);
              }
            }
            _showOrHideTimeout = setTimeout(function() {
              _shout("initialZoom" + (out ? "Out" : "In"));
              if (!out) {
                _currZoomLevel = item.initialZoomLevel;
                _equalizePoints(_panOffset, item.initialPosition);
                _applyCurrentZoomPan();
                _applyBgOpacity(1);
                if (fadeEverything) {
                  template.style.opacity = 1;
                } else {
                  _applyBgOpacity(1);
                }
                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
              } else {
                var destZoomLevel = thumbBounds.w / item.w, initialPanOffset = {
                  x: _panOffset.x,
                  y: _panOffset.y
                }, initialZoomLevel = _currZoomLevel, initalBgOpacity = _bgOpacity, onUpdate = function(now) {
                  if (now === 1) {
                    _currZoomLevel = destZoomLevel;
                    _panOffset.x = thumbBounds.x;
                    _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                  } else {
                    _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                    _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                    _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                  }
                  _applyCurrentZoomPan();
                  if (fadeEverything) {
                    template.style.opacity = 1 - now;
                  } else {
                    _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                  }
                };
                if (closeWithRaf) {
                  _animateProp("initialZoom", 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                } else {
                  onUpdate(1);
                  _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                }
              }
            }, out ? 25 : 90);
          };
          startAnimation();
        };
        var _items, _tempPanAreaSize = {}, _imagesToAppendPool = [], _initialContentSet, _initialZoomRunning, _controllerDefaultOptions = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: false,
          // TODO
          preload: [1, 1],
          getNumItemsFn: function() {
            return _items.length;
          }
        };
        var _getItemAt, _getNumItems, _initialIsLoop, _getZeroBounds = function() {
          return {
            center: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            min: { x: 0, y: 0 }
          };
        }, _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
          var bounds = item.bounds;
          bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
          bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;
          bounds.max.x = realPanElementW > _tempPanAreaSize.x ? Math.round(_tempPanAreaSize.x - realPanElementW) : bounds.center.x;
          bounds.max.y = realPanElementH > _tempPanAreaSize.y ? Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : bounds.center.y;
          bounds.min.x = realPanElementW > _tempPanAreaSize.x ? 0 : bounds.center.x;
          bounds.min.y = realPanElementH > _tempPanAreaSize.y ? item.vGap.top : bounds.center.y;
        }, _calculateItemSize = function(item, viewportSize, zoomLevel) {
          if (item.src && !item.loadError) {
            var isInitial = !zoomLevel;
            if (isInitial) {
              if (!item.vGap) {
                item.vGap = { top: 0, bottom: 0 };
              }
              _shout("parseVerticalMargin", item);
            }
            _tempPanAreaSize.x = viewportSize.x;
            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;
            if (isInitial) {
              var hRatio = _tempPanAreaSize.x / item.w;
              var vRatio = _tempPanAreaSize.y / item.h;
              item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
              var scaleMode = _options.scaleMode;
              if (scaleMode === "orig") {
                zoomLevel = 1;
              } else if (scaleMode === "fit") {
                zoomLevel = item.fitRatio;
              }
              if (zoomLevel > 1) {
                zoomLevel = 1;
              }
              item.initialZoomLevel = zoomLevel;
              if (!item.bounds) {
                item.bounds = _getZeroBounds();
              }
            }
            if (!zoomLevel) {
              return;
            }
            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);
            if (isInitial && zoomLevel === item.initialZoomLevel) {
              item.initialPosition = item.bounds.center;
            }
            return item.bounds;
          } else {
            item.w = item.h = 0;
            item.initialZoomLevel = item.fitRatio = 1;
            item.bounds = _getZeroBounds();
            item.initialPosition = item.bounds.center;
            return item.bounds;
          }
        }, _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
          if (item.loadError) {
            return;
          }
          if (img) {
            item.imageAppended = true;
            _setImageSize(item, img, item === self2.currItem && _renderMaxResolution);
            baseDiv.appendChild(img);
            if (keepPlaceholder) {
              setTimeout(function() {
                if (item && item.loaded && item.placeholder) {
                  item.placeholder.style.display = "none";
                  item.placeholder = null;
                }
              }, 500);
            }
          }
        }, _preloadImage = function(item) {
          item.loading = true;
          item.loaded = false;
          var img = item.img = framework.createEl("pswp__img", "img");
          var onComplete = function() {
            item.loading = false;
            item.loaded = true;
            if (item.loadComplete) {
              item.loadComplete(item);
            } else {
              item.img = null;
            }
            img.onload = img.onerror = null;
            img = null;
          };
          img.onload = onComplete;
          img.onerror = function() {
            item.loadError = true;
            onComplete();
          };
          img.src = item.src;
          return img;
        }, _checkForError = function(item, cleanUp) {
          if (item.src && item.loadError && item.container) {
            if (cleanUp) {
              item.container.innerHTML = "";
            }
            item.container.innerHTML = _options.errorMsg.replace("%url%", item.src);
            return true;
          }
        }, _setImageSize = function(item, img, maxRes) {
          if (!item.src) {
            return;
          }
          if (!img) {
            img = item.container.lastChild;
          }
          var w = maxRes ? item.w : Math.round(item.w * item.fitRatio), h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
          if (item.placeholder && !item.loaded) {
            item.placeholder.style.width = w + "px";
            item.placeholder.style.height = h + "px";
          }
          img.style.width = w + "px";
          img.style.height = h + "px";
        }, _appendImagesPool = function() {
          if (_imagesToAppendPool.length) {
            var poolItem;
            for (var i = 0; i < _imagesToAppendPool.length; i++) {
              poolItem = _imagesToAppendPool[i];
              if (poolItem.holder.index === poolItem.index) {
                _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
              }
            }
            _imagesToAppendPool = [];
          }
        };
        _registerModule("Controller", {
          publicMethods: {
            lazyLoadItem: function(index) {
              index = _getLoopedId(index);
              var item = _getItemAt(index);
              if (!item || (item.loaded || item.loading) && !_itemsNeedUpdate) {
                return;
              }
              _shout("gettingData", index, item);
              if (!item.src) {
                return;
              }
              _preloadImage(item);
            },
            initController: function() {
              framework.extend(_options, _controllerDefaultOptions, true);
              self2.items = _items = items;
              _getItemAt = self2.getItemAt;
              _getNumItems = _options.getNumItemsFn;
              _initialIsLoop = _options.loop;
              if (_getNumItems() < 3) {
                _options.loop = false;
              }
              _listen("beforeChange", function(diff) {
                var p3 = _options.preload, isNext = diff === null ? true : diff >= 0, preloadBefore = Math.min(p3[0], _getNumItems()), preloadAfter = Math.min(p3[1], _getNumItems()), i;
                for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                  self2.lazyLoadItem(_currentItemIndex + i);
                }
                for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                  self2.lazyLoadItem(_currentItemIndex - i);
                }
              });
              _listen("initialLayout", function() {
                self2.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
              });
              _listen("mainScrollAnimComplete", _appendImagesPool);
              _listen("initialZoomInEnd", _appendImagesPool);
              _listen("destroy", function() {
                var item;
                for (var i = 0; i < _items.length; i++) {
                  item = _items[i];
                  if (item.container) {
                    item.container = null;
                  }
                  if (item.placeholder) {
                    item.placeholder = null;
                  }
                  if (item.img) {
                    item.img = null;
                  }
                  if (item.preloader) {
                    item.preloader = null;
                  }
                  if (item.loadError) {
                    item.loaded = item.loadError = false;
                  }
                }
                _imagesToAppendPool = null;
              });
            },
            getItemAt: function(index) {
              if (index >= 0) {
                return _items[index] !== void 0 ? _items[index] : false;
              }
              return false;
            },
            allowProgressiveImg: function() {
              return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
            },
            setContent: function(holder, index) {
              if (_options.loop) {
                index = _getLoopedId(index);
              }
              var prevItem = self2.getItemAt(holder.index);
              if (prevItem) {
                prevItem.container = null;
              }
              var item = self2.getItemAt(index), img;
              if (!item) {
                holder.el.innerHTML = "";
                return;
              }
              _shout("gettingData", index, item);
              holder.index = index;
              holder.item = item;
              var baseDiv = item.container = framework.createEl("pswp__zoom-wrap");
              if (!item.src && item.html) {
                if (item.html.tagName) {
                  baseDiv.appendChild(item.html);
                } else {
                  baseDiv.innerHTML = item.html;
                }
              }
              _checkForError(item);
              _calculateItemSize(item, _viewportSize);
              if (item.src && !item.loadError && !item.loaded) {
                item.loadComplete = function(item2) {
                  if (!_isOpen) {
                    return;
                  }
                  if (holder && holder.index === index) {
                    if (_checkForError(item2, true)) {
                      item2.loadComplete = item2.img = null;
                      _calculateItemSize(item2, _viewportSize);
                      _applyZoomPanToItem(item2);
                      if (holder.index === _currentItemIndex) {
                        self2.updateCurrZoomItem();
                      }
                      return;
                    }
                    if (!item2.imageAppended) {
                      if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                        _imagesToAppendPool.push({
                          item: item2,
                          baseDiv,
                          img: item2.img,
                          index,
                          holder,
                          clearPlaceholder: true
                        });
                      } else {
                        _appendImage(index, item2, baseDiv, item2.img, _mainScrollAnimating || _initialZoomRunning, true);
                      }
                    } else {
                      if (!_initialZoomRunning && item2.placeholder) {
                        item2.placeholder.style.display = "none";
                        item2.placeholder = null;
                      }
                    }
                  }
                  item2.loadComplete = null;
                  item2.img = null;
                  _shout("imageLoadComplete", index, item2);
                };
                if (framework.features.transform) {
                  var placeholderClassName = "pswp__img pswp__img--placeholder";
                  placeholderClassName += item.msrc ? "" : " pswp__img--placeholder--blank";
                  var placeholder = framework.createEl(placeholderClassName, item.msrc ? "img" : "");
                  if (item.msrc) {
                    placeholder.src = item.msrc;
                  }
                  _setImageSize(item, placeholder);
                  baseDiv.appendChild(placeholder);
                  item.placeholder = placeholder;
                }
                if (!item.loading) {
                  _preloadImage(item);
                }
                if (self2.allowProgressiveImg()) {
                  if (!_initialContentSet && _features.transform) {
                    _imagesToAppendPool.push({
                      item,
                      baseDiv,
                      img: item.img,
                      index,
                      holder
                    });
                  } else {
                    _appendImage(index, item, baseDiv, item.img, true, true);
                  }
                }
              } else if (item.src && !item.loadError) {
                img = framework.createEl("pswp__img", "img");
                img.style.opacity = 1;
                img.src = item.src;
                _setImageSize(item, img);
                _appendImage(index, item, baseDiv, img, true);
              }
              if (!_initialContentSet && index === _currentItemIndex) {
                _currZoomElementStyle = baseDiv.style;
                _showOrHide(item, img || item.img);
              } else {
                _applyZoomPanToItem(item);
              }
              holder.el.innerHTML = "";
              holder.el.appendChild(baseDiv);
            },
            cleanSlide: function(item) {
              if (item.img) {
                item.img.onload = item.img.onerror = null;
              }
              item.loaded = item.loading = item.img = item.imageAppended = false;
            }
          }
        });
        var tapTimer, tapReleasePoint = {}, _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
          var e = document.createEvent("CustomEvent"), eDetail = {
            origEvent,
            target: origEvent.target,
            releasePoint,
            pointerType: pointerType || "touch"
          };
          e.initCustomEvent("pswpTap", true, true, eDetail);
          origEvent.target.dispatchEvent(e);
        };
        _registerModule("Tap", {
          publicMethods: {
            initTap: function() {
              _listen("firstTouchStart", self2.onTapStart);
              _listen("touchRelease", self2.onTapRelease);
              _listen("destroy", function() {
                tapReleasePoint = {};
                tapTimer = null;
              });
            },
            onTapStart: function(touchList) {
              if (touchList.length > 1) {
                clearTimeout(tapTimer);
                tapTimer = null;
              }
            },
            onTapRelease: function(e, releasePoint) {
              if (!releasePoint) {
                return;
              }
              if (!_moved && !_isMultitouch && !_numAnimations) {
                var p0 = releasePoint;
                if (tapTimer) {
                  clearTimeout(tapTimer);
                  tapTimer = null;
                  if (_isNearbyPoints(p0, tapReleasePoint)) {
                    _shout("doubleTap", p0);
                    return;
                  }
                }
                if (releasePoint.type === "mouse") {
                  _dispatchTapEvent(e, releasePoint, "mouse");
                  return;
                }
                var clickedTagName = e.target.tagName.toUpperCase();
                if (clickedTagName === "BUTTON" || framework.hasClass(e.target, "pswp__single-tap")) {
                  _dispatchTapEvent(e, releasePoint);
                  return;
                }
                _equalizePoints(tapReleasePoint, p0);
                tapTimer = setTimeout(function() {
                  _dispatchTapEvent(e, releasePoint);
                  tapTimer = null;
                }, 300);
              }
            }
          }
        });
        var _wheelDelta;
        _registerModule("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function() {
              if (_oldIE) {
                return;
              }
              if (_likelyTouchDevice) {
                _listen("mouseUsed", function() {
                  self2.setupDesktopZoom();
                });
              } else {
                self2.setupDesktopZoom(true);
              }
            },
            setupDesktopZoom: function(onInit) {
              _wheelDelta = {};
              var events = "wheel mousewheel DOMMouseScroll";
              _listen("bindEvents", function() {
                framework.bind(template, events, self2.handleMouseWheel);
              });
              _listen("unbindEvents", function() {
                if (_wheelDelta) {
                  framework.unbind(template, events, self2.handleMouseWheel);
                }
              });
              self2.mouseZoomedIn = false;
              var hasDraggingClass, updateZoomable = function() {
                if (self2.mouseZoomedIn) {
                  framework.removeClass(template, "pswp--zoomed-in");
                  self2.mouseZoomedIn = false;
                }
                if (_currZoomLevel < 1) {
                  framework.addClass(template, "pswp--zoom-allowed");
                } else {
                  framework.removeClass(template, "pswp--zoom-allowed");
                }
                removeDraggingClass();
              }, removeDraggingClass = function() {
                if (hasDraggingClass) {
                  framework.removeClass(template, "pswp--dragging");
                  hasDraggingClass = false;
                }
              };
              _listen("resize", updateZoomable);
              _listen("afterChange", updateZoomable);
              _listen("pointerDown", function() {
                if (self2.mouseZoomedIn) {
                  hasDraggingClass = true;
                  framework.addClass(template, "pswp--dragging");
                }
              });
              _listen("pointerUp", removeDraggingClass);
              if (!onInit) {
                updateZoomable();
              }
            },
            handleMouseWheel: function(e) {
              if (_currZoomLevel <= self2.currItem.fitRatio) {
                if (_options.modal) {
                  if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                    e.preventDefault();
                  } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                    _closedByScroll = true;
                    self2.close();
                  }
                }
                return true;
              }
              e.stopPropagation();
              _wheelDelta.x = 0;
              if ("deltaX" in e) {
                if (e.deltaMode === 1) {
                  _wheelDelta.x = e.deltaX * 18;
                  _wheelDelta.y = e.deltaY * 18;
                } else {
                  _wheelDelta.x = e.deltaX;
                  _wheelDelta.y = e.deltaY;
                }
              } else if ("wheelDelta" in e) {
                if (e.wheelDeltaX) {
                  _wheelDelta.x = -0.16 * e.wheelDeltaX;
                }
                if (e.wheelDeltaY) {
                  _wheelDelta.y = -0.16 * e.wheelDeltaY;
                } else {
                  _wheelDelta.y = -0.16 * e.wheelDelta;
                }
              } else if ("detail" in e) {
                _wheelDelta.y = e.detail;
              } else {
                return;
              }
              _calculatePanBounds(_currZoomLevel, true);
              var newPanX = _panOffset.x - _wheelDelta.x, newPanY = _panOffset.y - _wheelDelta.y;
              if (_options.modal || newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x && newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y) {
                e.preventDefault();
              }
              self2.panTo(newPanX, newPanY);
            },
            toggleDesktopZoom: function(centerPoint) {
              centerPoint = centerPoint || { x: _viewportSize.x / 2 + _offset.x, y: _viewportSize.y / 2 + _offset.y };
              var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self2.currItem);
              var zoomOut = _currZoomLevel === doubleTapZoomLevel;
              self2.mouseZoomedIn = !zoomOut;
              self2.zoomTo(zoomOut ? self2.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
              framework[(!zoomOut ? "add" : "remove") + "Class"](template, "pswp--zoomed-in");
            }
          }
        });
        var _historyDefaultOptions = {
          history: true,
          galleryUID: 1
        };
        var _historyUpdateTimeout, _hashChangeTimeout, _hashAnimCheckTimeout, _hashChangedByScript, _hashChangedByHistory, _hashReseted, _initialHash, _historyChanged, _closedFromURL, _urlChangedOnce, _windowLoc, _supportsPushState, _getHash = function() {
          return _windowLoc.hash.substring(1);
        }, _cleanHistoryTimeouts = function() {
          if (_historyUpdateTimeout) {
            clearTimeout(_historyUpdateTimeout);
          }
          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }
        }, _parseItemIndexFromURL = function() {
          var hash = _getHash(), params = {};
          if (hash.length < 5) {
            return params;
          }
          var i, vars = hash.split("&");
          for (i = 0; i < vars.length; i++) {
            if (!vars[i]) {
              continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
              continue;
            }
            params[pair[0]] = pair[1];
          }
          if (_options.galleryPIDs) {
            var searchfor = params.pid;
            params.pid = 0;
            for (i = 0; i < _items.length; i++) {
              if (_items[i].pid === searchfor) {
                params.pid = i;
                break;
              }
            }
          } else {
            params.pid = parseInt(params.pid, 10) - 1;
          }
          if (params.pid < 0) {
            params.pid = 0;
          }
          return params;
        }, _updateHash = function() {
          if (_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
          }
          if (_numAnimations || _isDragging) {
            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
            return;
          }
          if (_hashChangedByScript) {
            clearTimeout(_hashChangeTimeout);
          } else {
            _hashChangedByScript = true;
          }
          var pid = _currentItemIndex + 1;
          var item = _getItemAt(_currentItemIndex);
          if (item.hasOwnProperty("pid")) {
            pid = item.pid;
          }
          var newHash = _initialHash + "&gid=" + _options.galleryUID + "&pid=" + pid;
          if (!_historyChanged) {
            if (_windowLoc.hash.indexOf(newHash) === -1) {
              _urlChangedOnce = true;
            }
          }
          var newURL = _windowLoc.href.split("#")[0] + "#" + newHash;
          if (_supportsPushState) {
            if ("#" + newHash !== window.location.hash) {
              history[_historyChanged ? "replaceState" : "pushState"]("", document.title, newURL);
            }
          } else {
            if (_historyChanged) {
              _windowLoc.replace(newURL);
            } else {
              _windowLoc.hash = newHash;
            }
          }
          _historyChanged = true;
          _hashChangeTimeout = setTimeout(function() {
            _hashChangedByScript = false;
          }, 60);
        };
        _registerModule("History", {
          publicMethods: {
            initHistory: function() {
              framework.extend(_options, _historyDefaultOptions, true);
              if (!_options.history) {
                return;
              }
              _windowLoc = window.location;
              _urlChangedOnce = false;
              _closedFromURL = false;
              _historyChanged = false;
              _initialHash = _getHash();
              _supportsPushState = "pushState" in history;
              if (_initialHash.indexOf("gid=") > -1) {
                _initialHash = _initialHash.split("&gid=")[0];
                _initialHash = _initialHash.split("?gid=")[0];
              }
              _listen("afterChange", self2.updateURL);
              _listen("unbindEvents", function() {
                framework.unbind(window, "hashchange", self2.onHashChange);
              });
              var returnToOriginal = function() {
                _hashReseted = true;
                if (!_closedFromURL) {
                  if (_urlChangedOnce) {
                    history.back();
                  } else {
                    if (_initialHash) {
                      _windowLoc.hash = _initialHash;
                    } else {
                      if (_supportsPushState) {
                        history.pushState("", document.title, _windowLoc.pathname + _windowLoc.search);
                      } else {
                        _windowLoc.hash = "";
                      }
                    }
                  }
                }
                _cleanHistoryTimeouts();
              };
              _listen("unbindEvents", function() {
                if (_closedByScroll) {
                  returnToOriginal();
                }
              });
              _listen("destroy", function() {
                if (!_hashReseted) {
                  returnToOriginal();
                }
              });
              _listen("firstUpdate", function() {
                _currentItemIndex = _parseItemIndexFromURL().pid;
              });
              var index = _initialHash.indexOf("pid=");
              if (index > -1) {
                _initialHash = _initialHash.substring(0, index);
                if (_initialHash.slice(-1) === "&") {
                  _initialHash = _initialHash.slice(0, -1);
                }
              }
              setTimeout(function() {
                if (_isOpen) {
                  framework.bind(window, "hashchange", self2.onHashChange);
                }
              }, 40);
            },
            onHashChange: function() {
              if (_getHash() === _initialHash) {
                _closedFromURL = true;
                self2.close();
                return;
              }
              if (!_hashChangedByScript) {
                _hashChangedByHistory = true;
                self2.goTo(_parseItemIndexFromURL().pid);
                _hashChangedByHistory = false;
              }
            },
            updateURL: function() {
              _cleanHistoryTimeouts();
              if (_hashChangedByHistory) {
                return;
              }
              if (!_historyChanged) {
                _updateHash();
              } else {
                _historyUpdateTimeout = setTimeout(_updateHash, 800);
              }
            }
          }
        });
        framework.extend(self2, publicMethods);
      };
      return PhotoSwipe;
    });
  }
});

// node_modules/photoswipe/dist/photoswipe-ui-default.js
var require_photoswipe_ui_default = __commonJS({
  "node_modules/photoswipe/dist/photoswipe-ui-default.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define(factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.PhotoSwipeUI_Default = factory();
      }
    })(exports, function() {
      "use strict";
      var PhotoSwipeUI_Default = function(pswp, framework) {
        var ui = this;
        var _overlayUIUpdated = false, _controlsVisible = true, _fullscrenAPI, _controls, _captionContainer, _fakeCaptionContainer, _indexIndicator, _shareButton, _shareModal, _shareModalHidden = true, _initalCloseOnScrollValue, _isIdle, _listen, _loadingIndicator, _loadingIndicatorHidden, _loadingIndicatorTimeout, _galleryHasOneSlide, _options, _defaultUIOptions = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          // 2s
          addCaptionHTMLFn: function(item, captionEl) {
            if (!item.title) {
              captionEl.children[0].innerHTML = "";
              return false;
            }
            captionEl.children[0].innerHTML = item.title;
            return true;
          },
          closeEl: true,
          captionEl: true,
          fullscreenEl: true,
          zoomEl: true,
          shareEl: true,
          counterEl: true,
          arrowEl: true,
          preloaderEl: true,
          tapToClose: false,
          tapToToggleControls: true,
          clickToCloseNonZoomable: true,
          shareButtons: [
            { id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" },
            { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" },
            { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" },
            { id: "download", label: "Download image", url: "{{raw_image_url}}", download: true }
          ],
          getImageURLForShare: function() {
            return pswp.currItem.src || "";
          },
          getPageURLForShare: function() {
            return window.location.href;
          },
          getTextForShare: function() {
            return pswp.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        }, _blockControlsTap, _blockControlsTapTimeout;
        var _onControlsTap = function(e) {
          if (_blockControlsTap) {
            return true;
          }
          e = e || window.event;
          if (_options.timeToIdle && _options.mouseUsed && !_isIdle) {
            _onIdleMouseMove();
          }
          var target = e.target || e.srcElement, uiElement, clickedClass = target.getAttribute("class") || "", found;
          for (var i = 0; i < _uiElements.length; i++) {
            uiElement = _uiElements[i];
            if (uiElement.onTap && clickedClass.indexOf("pswp__" + uiElement.name) > -1) {
              uiElement.onTap();
              found = true;
            }
          }
          if (found) {
            if (e.stopPropagation) {
              e.stopPropagation();
            }
            _blockControlsTap = true;
            var tapDelay = framework.features.isOldAndroid ? 600 : 30;
            _blockControlsTapTimeout = setTimeout(function() {
              _blockControlsTap = false;
            }, tapDelay);
          }
        }, _fitControlsInViewport = function() {
          return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
        }, _togglePswpClass = function(el, cName, add) {
          framework[(add ? "add" : "remove") + "Class"](el, "pswp__" + cName);
        }, _countNumItems = function() {
          var hasOneSlide = _options.getNumItemsFn() === 1;
          if (hasOneSlide !== _galleryHasOneSlide) {
            _togglePswpClass(_controls, "ui--one-slide", hasOneSlide);
            _galleryHasOneSlide = hasOneSlide;
          }
        }, _toggleShareModalClass = function() {
          _togglePswpClass(_shareModal, "share-modal--hidden", _shareModalHidden);
        }, _toggleShareModal = function() {
          _shareModalHidden = !_shareModalHidden;
          if (!_shareModalHidden) {
            _toggleShareModalClass();
            setTimeout(function() {
              if (!_shareModalHidden) {
                framework.addClass(_shareModal, "pswp__share-modal--fade-in");
              }
            }, 30);
          } else {
            framework.removeClass(_shareModal, "pswp__share-modal--fade-in");
            setTimeout(function() {
              if (_shareModalHidden) {
                _toggleShareModalClass();
              }
            }, 300);
          }
          if (!_shareModalHidden) {
            _updateShareURLs();
          }
          return false;
        }, _openWindowPopup = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          pswp.shout("shareLinkClick", e, target);
          if (!target.href) {
            return false;
          }
          if (target.hasAttribute("download")) {
            return true;
          }
          window.open(target.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100));
          if (!_shareModalHidden) {
            _toggleShareModal();
          }
          return false;
        }, _updateShareURLs = function() {
          var shareButtonOut = "", shareButtonData, shareURL, image_url, page_url, share_text;
          for (var i = 0; i < _options.shareButtons.length; i++) {
            shareButtonData = _options.shareButtons[i];
            image_url = _options.getImageURLForShare(shareButtonData);
            page_url = _options.getPageURLForShare(shareButtonData);
            share_text = _options.getTextForShare(shareButtonData);
            shareURL = shareButtonData.url.replace("{{url}}", encodeURIComponent(page_url)).replace("{{image_url}}", encodeURIComponent(image_url)).replace("{{raw_image_url}}", image_url).replace("{{text}}", encodeURIComponent(share_text));
            shareButtonOut += '<a href="' + shareURL + '" target="_blank" class="pswp__share--' + shareButtonData.id + '"' + (shareButtonData.download ? "download" : "") + ">" + shareButtonData.label + "</a>";
            if (_options.parseShareButtonOut) {
              shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
            }
          }
          _shareModal.children[0].innerHTML = shareButtonOut;
          _shareModal.children[0].onclick = _openWindowPopup;
        }, _hasCloseClass = function(target) {
          for (var i = 0; i < _options.closeElClasses.length; i++) {
            if (framework.hasClass(target, "pswp__" + _options.closeElClasses[i])) {
              return true;
            }
          }
        }, _idleInterval, _idleTimer, _idleIncrement = 0, _onIdleMouseMove = function() {
          clearTimeout(_idleTimer);
          _idleIncrement = 0;
          if (_isIdle) {
            ui.setIdle(false);
          }
        }, _onMouseLeaveWindow = function(e) {
          e = e ? e : window.event;
          var from = e.relatedTarget || e.toElement;
          if (!from || from.nodeName === "HTML") {
            clearTimeout(_idleTimer);
            _idleTimer = setTimeout(function() {
              ui.setIdle(true);
            }, _options.timeToIdleOutside);
          }
        }, _setupFullscreenAPI = function() {
          if (_options.fullscreenEl && !framework.features.isOldAndroid) {
            if (!_fullscrenAPI) {
              _fullscrenAPI = ui.getFullscreenAPI();
            }
            if (_fullscrenAPI) {
              framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
              ui.updateFullscreen();
              framework.addClass(pswp.template, "pswp--supports-fs");
            } else {
              framework.removeClass(pswp.template, "pswp--supports-fs");
            }
          }
        }, _setupLoadingIndicator = function() {
          if (_options.preloaderEl) {
            _toggleLoadingIndicator(true);
            _listen("beforeChange", function() {
              clearTimeout(_loadingIndicatorTimeout);
              _loadingIndicatorTimeout = setTimeout(function() {
                if (pswp.currItem && pswp.currItem.loading) {
                  if (!pswp.allowProgressiveImg() || pswp.currItem.img && !pswp.currItem.img.naturalWidth) {
                    _toggleLoadingIndicator(false);
                  }
                } else {
                  _toggleLoadingIndicator(true);
                }
              }, _options.loadingIndicatorDelay);
            });
            _listen("imageLoadComplete", function(index, item) {
              if (pswp.currItem === item) {
                _toggleLoadingIndicator(true);
              }
            });
          }
        }, _toggleLoadingIndicator = function(hide) {
          if (_loadingIndicatorHidden !== hide) {
            _togglePswpClass(_loadingIndicator, "preloader--active", !hide);
            _loadingIndicatorHidden = hide;
          }
        }, _applyNavBarGaps = function(item) {
          var gap = item.vGap;
          if (_fitControlsInViewport()) {
            var bars = _options.barsSize;
            if (_options.captionEl && bars.bottom === "auto") {
              if (!_fakeCaptionContainer) {
                _fakeCaptionContainer = framework.createEl("pswp__caption pswp__caption--fake");
                _fakeCaptionContainer.appendChild(framework.createEl("pswp__caption__center"));
                _controls.insertBefore(_fakeCaptionContainer, _captionContainer);
                framework.addClass(_controls, "pswp__ui--fit");
              }
              if (_options.addCaptionHTMLFn(item, _fakeCaptionContainer, true)) {
                var captionSize = _fakeCaptionContainer.clientHeight;
                gap.bottom = parseInt(captionSize, 10) || 44;
              } else {
                gap.bottom = bars.top;
              }
            } else {
              gap.bottom = bars.bottom === "auto" ? 0 : bars.bottom;
            }
            gap.top = bars.top;
          } else {
            gap.top = gap.bottom = 0;
          }
        }, _setupIdle = function() {
          if (_options.timeToIdle) {
            _listen("mouseUsed", function() {
              framework.bind(document, "mousemove", _onIdleMouseMove);
              framework.bind(document, "mouseout", _onMouseLeaveWindow);
              _idleInterval = setInterval(function() {
                _idleIncrement++;
                if (_idleIncrement === 2) {
                  ui.setIdle(true);
                }
              }, _options.timeToIdle / 2);
            });
          }
        }, _setupHidingControlsDuringGestures = function() {
          _listen("onVerticalDrag", function(now) {
            if (_controlsVisible && now < 0.95) {
              ui.hideControls();
            } else if (!_controlsVisible && now >= 0.95) {
              ui.showControls();
            }
          });
          var pinchControlsHidden;
          _listen("onPinchClose", function(now) {
            if (_controlsVisible && now < 0.9) {
              ui.hideControls();
              pinchControlsHidden = true;
            } else if (pinchControlsHidden && !_controlsVisible && now > 0.9) {
              ui.showControls();
            }
          });
          _listen("zoomGestureEnded", function() {
            pinchControlsHidden = false;
            if (pinchControlsHidden && !_controlsVisible) {
              ui.showControls();
            }
          });
        };
        var _uiElements = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function(el) {
              _captionContainer = el;
            }
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function(el) {
              _shareModal = el;
            },
            onTap: function() {
              _toggleShareModal();
            }
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function(el) {
              _shareButton = el;
            },
            onTap: function() {
              _toggleShareModal();
            }
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: pswp.toggleDesktopZoom
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function(el) {
              _indexIndicator = el;
            }
          },
          {
            name: "button--close",
            option: "closeEl",
            onTap: pswp.close
          },
          {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: pswp.prev
          },
          {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: pswp.next
          },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
              if (_fullscrenAPI.isFullscreen()) {
                _fullscrenAPI.exit();
              } else {
                _fullscrenAPI.enter();
              }
            }
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(el) {
              _loadingIndicator = el;
            }
          }
        ];
        var _setupUIElements = function() {
          var item, classAttr, uiElement;
          var loopThroughChildElements = function(sChildren) {
            if (!sChildren) {
              return;
            }
            var l = sChildren.length;
            for (var i = 0; i < l; i++) {
              item = sChildren[i];
              classAttr = item.className;
              for (var a = 0; a < _uiElements.length; a++) {
                uiElement = _uiElements[a];
                if (classAttr.indexOf("pswp__" + uiElement.name) > -1) {
                  if (_options[uiElement.option]) {
                    framework.removeClass(item, "pswp__element--disabled");
                    if (uiElement.onInit) {
                      uiElement.onInit(item);
                    }
                  } else {
                    framework.addClass(item, "pswp__element--disabled");
                  }
                }
              }
            }
          };
          loopThroughChildElements(_controls.children);
          var topBar = framework.getChildByClass(_controls, "pswp__top-bar");
          if (topBar) {
            loopThroughChildElements(topBar.children);
          }
        };
        ui.init = function() {
          framework.extend(pswp.options, _defaultUIOptions, true);
          _options = pswp.options;
          _controls = framework.getChildByClass(pswp.scrollWrap, "pswp__ui");
          _listen = pswp.listen;
          _setupHidingControlsDuringGestures();
          _listen("beforeChange", ui.update);
          _listen("doubleTap", function(point) {
            var initialZoomLevel = pswp.currItem.initialZoomLevel;
            if (pswp.getZoomLevel() !== initialZoomLevel) {
              pswp.zoomTo(initialZoomLevel, point, 333);
            } else {
              pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
            }
          });
          _listen("preventDragEvent", function(e, isDown, preventObj) {
            var t = e.target || e.srcElement;
            if (t && t.getAttribute("class") && e.type.indexOf("mouse") > -1 && (t.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(t.tagName))) {
              preventObj.prevent = false;
            }
          });
          _listen("bindEvents", function() {
            framework.bind(_controls, "pswpTap click", _onControlsTap);
            framework.bind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
            if (!pswp.likelyTouchDevice) {
              framework.bind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
            }
          });
          _listen("unbindEvents", function() {
            if (!_shareModalHidden) {
              _toggleShareModal();
            }
            if (_idleInterval) {
              clearInterval(_idleInterval);
            }
            framework.unbind(document, "mouseout", _onMouseLeaveWindow);
            framework.unbind(document, "mousemove", _onIdleMouseMove);
            framework.unbind(_controls, "pswpTap click", _onControlsTap);
            framework.unbind(pswp.scrollWrap, "pswpTap", ui.onGlobalTap);
            framework.unbind(pswp.scrollWrap, "mouseover", ui.onMouseOver);
            if (_fullscrenAPI) {
              framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
              if (_fullscrenAPI.isFullscreen()) {
                _options.hideAnimationDuration = 0;
                _fullscrenAPI.exit();
              }
              _fullscrenAPI = null;
            }
          });
          _listen("destroy", function() {
            if (_options.captionEl) {
              if (_fakeCaptionContainer) {
                _controls.removeChild(_fakeCaptionContainer);
              }
              framework.removeClass(_captionContainer, "pswp__caption--empty");
            }
            if (_shareModal) {
              _shareModal.children[0].onclick = null;
            }
            framework.removeClass(_controls, "pswp__ui--over-close");
            framework.addClass(_controls, "pswp__ui--hidden");
            ui.setIdle(false);
          });
          if (!_options.showAnimationDuration) {
            framework.removeClass(_controls, "pswp__ui--hidden");
          }
          _listen("initialZoomIn", function() {
            if (_options.showAnimationDuration) {
              framework.removeClass(_controls, "pswp__ui--hidden");
            }
          });
          _listen("initialZoomOut", function() {
            framework.addClass(_controls, "pswp__ui--hidden");
          });
          _listen("parseVerticalMargin", _applyNavBarGaps);
          _setupUIElements();
          if (_options.shareEl && _shareButton && _shareModal) {
            _shareModalHidden = true;
          }
          _countNumItems();
          _setupIdle();
          _setupFullscreenAPI();
          _setupLoadingIndicator();
        };
        ui.setIdle = function(isIdle) {
          _isIdle = isIdle;
          _togglePswpClass(_controls, "ui--idle", isIdle);
        };
        ui.update = function() {
          if (_controlsVisible && pswp.currItem) {
            ui.updateIndexIndicator();
            if (_options.captionEl) {
              _options.addCaptionHTMLFn(pswp.currItem, _captionContainer);
              _togglePswpClass(_captionContainer, "caption--empty", !pswp.currItem.title);
            }
            _overlayUIUpdated = true;
          } else {
            _overlayUIUpdated = false;
          }
          if (!_shareModalHidden) {
            _toggleShareModal();
          }
          _countNumItems();
        };
        ui.updateFullscreen = function(e) {
          if (e) {
            setTimeout(function() {
              pswp.setScrollOffset(0, framework.getScrollY());
            }, 50);
          }
          framework[(_fullscrenAPI.isFullscreen() ? "add" : "remove") + "Class"](pswp.template, "pswp--fs");
        };
        ui.updateIndexIndicator = function() {
          if (_options.counterEl) {
            _indexIndicator.innerHTML = pswp.getCurrentIndex() + 1 + _options.indexIndicatorSep + _options.getNumItemsFn();
          }
        };
        ui.onGlobalTap = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          if (_blockControlsTap) {
            return;
          }
          if (e.detail && e.detail.pointerType === "mouse") {
            if (_hasCloseClass(target)) {
              pswp.close();
              return;
            }
            if (framework.hasClass(target, "pswp__img")) {
              if (pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
                if (_options.clickToCloseNonZoomable) {
                  pswp.close();
                }
              } else {
                pswp.toggleDesktopZoom(e.detail.releasePoint);
              }
            }
          } else {
            if (_options.tapToToggleControls) {
              if (_controlsVisible) {
                ui.hideControls();
              } else {
                ui.showControls();
              }
            }
            if (_options.tapToClose && (framework.hasClass(target, "pswp__img") || _hasCloseClass(target))) {
              pswp.close();
              return;
            }
          }
        };
        ui.onMouseOver = function(e) {
          e = e || window.event;
          var target = e.target || e.srcElement;
          _togglePswpClass(_controls, "ui--over-close", _hasCloseClass(target));
        };
        ui.hideControls = function() {
          framework.addClass(_controls, "pswp__ui--hidden");
          _controlsVisible = false;
        };
        ui.showControls = function() {
          _controlsVisible = true;
          if (!_overlayUIUpdated) {
            ui.update();
          }
          framework.removeClass(_controls, "pswp__ui--hidden");
        };
        ui.supportsFullscreen = function() {
          var d = document;
          return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
        };
        ui.getFullscreenAPI = function() {
          var dE = document.documentElement, api, tF = "fullscreenchange";
          if (dE.requestFullscreen) {
            api = {
              enterK: "requestFullscreen",
              exitK: "exitFullscreen",
              elementK: "fullscreenElement",
              eventK: tF
            };
          } else if (dE.mozRequestFullScreen) {
            api = {
              enterK: "mozRequestFullScreen",
              exitK: "mozCancelFullScreen",
              elementK: "mozFullScreenElement",
              eventK: "moz" + tF
            };
          } else if (dE.webkitRequestFullscreen) {
            api = {
              enterK: "webkitRequestFullscreen",
              exitK: "webkitExitFullscreen",
              elementK: "webkitFullscreenElement",
              eventK: "webkit" + tF
            };
          } else if (dE.msRequestFullscreen) {
            api = {
              enterK: "msRequestFullscreen",
              exitK: "msExitFullscreen",
              elementK: "msFullscreenElement",
              eventK: "MSFullscreenChange"
            };
          }
          if (api) {
            api.enter = function() {
              _initalCloseOnScrollValue = _options.closeOnScroll;
              _options.closeOnScroll = false;
              if (this.enterK === "webkitRequestFullscreen") {
                pswp.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
              } else {
                return pswp.template[this.enterK]();
              }
            };
            api.exit = function() {
              _options.closeOnScroll = _initalCloseOnScrollValue;
              return document[this.exitK]();
            };
            api.isFullscreen = function() {
              return document[this.elementK];
            };
          }
          return api;
        };
      };
      return PhotoSwipeUI_Default;
    });
  }
});

// node_modules/react-photoswipe/lib/events.js
var require_events = __commonJS({
  "node_modules/react-photoswipe/lib/events.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = ["beforeChange", "afterChange", "imageLoadComplete", "resize", "gettingData", "mouseUsed", "initialZoomIn", "initialZoomInEnd", "initialZoomOut", "initialZoomOutEnd", "parseVerticalMargin", "close", "unbindEvents", "destroy", "updateScrollOffset", "preventDragEvent", "shareLinkClick"];
    module.exports = exports["default"];
  }
});

// node_modules/react-photoswipe/lib/PhotoSwipe.js
var require_PhotoSwipe = __commonJS({
  "node_modules/react-photoswipe/lib/PhotoSwipe.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _photoswipe = require_photoswipe();
    var _photoswipe2 = _interopRequireDefault(_photoswipe);
    var _photoswipeUiDefault = require_photoswipe_ui_default();
    var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);
    var _classnames = require_classnames();
    var _classnames2 = _interopRequireDefault(_classnames);
    var _events = require_events();
    var _events2 = _interopRequireDefault(_events);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var PhotoSwipe = function(_React$Component) {
      _inherits(PhotoSwipe2, _React$Component);
      function PhotoSwipe2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, PhotoSwipe2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhotoSwipe2.__proto__ || Object.getPrototypeOf(PhotoSwipe2)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(PhotoSwipe2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var id = this.props.id;
          var className = this.props.className;
          className = (0, _classnames2.default)(["pswp", className]).trim();
          return _react2.default.createElement(
            "div",
            {
              id,
              className,
              tabIndex: "-1",
              role: "dialog",
              "aria-hidden": "true",
              ref: function ref(node) {
                _this2.pswpElement = node;
              }
            },
            _react2.default.createElement("div", { className: "pswp__bg" }),
            _react2.default.createElement(
              "div",
              { className: "pswp__scroll-wrap" },
              _react2.default.createElement(
                "div",
                { className: "pswp__container" },
                _react2.default.createElement("div", { className: "pswp__item" }),
                _react2.default.createElement("div", { className: "pswp__item" }),
                _react2.default.createElement("div", { className: "pswp__item" })
              ),
              _react2.default.createElement(
                "div",
                { className: "pswp__ui pswp__ui--hidden" },
                _react2.default.createElement(
                  "div",
                  { className: "pswp__top-bar" },
                  _react2.default.createElement("div", { className: "pswp__counter" }),
                  _react2.default.createElement("button", {
                    className: "pswp__button pswp__button--close",
                    title: "Close (Esc)"
                  }),
                  _react2.default.createElement("button", {
                    className: "pswp__button pswp__button--share",
                    title: "Share"
                  }),
                  _react2.default.createElement("button", {
                    className: "pswp__button pswp__button--fs",
                    title: "Toggle fullscreen"
                  }),
                  _react2.default.createElement("button", { className: "pswp__button pswp__button--zoom", title: "Zoom in/out" }),
                  _react2.default.createElement(
                    "div",
                    { className: "pswp__preloader" },
                    _react2.default.createElement(
                      "div",
                      { className: "pswp__preloader__icn" },
                      _react2.default.createElement(
                        "div",
                        { className: "pswp__preloader__cut" },
                        _react2.default.createElement("div", { className: "pswp__preloader__donut" })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap" },
                  _react2.default.createElement("div", { className: "pswp__share-tooltip" })
                ),
                _react2.default.createElement("button", {
                  className: "pswp__button pswp__button--arrow--left",
                  title: "Previous (arrow left)"
                }),
                _react2.default.createElement("button", {
                  className: "pswp__button pswp__button--arrow--right",
                  title: "Next (arrow right)"
                }),
                _react2.default.createElement(
                  "div",
                  { className: "pswp__caption" },
                  _react2.default.createElement("div", { className: "pswp__caption__center" })
                )
              )
            )
          );
        }
      }]);
      return PhotoSwipe2;
    }(_react2.default.Component);
    PhotoSwipe.propTypes = {
      isOpen: _propTypes2.default.bool.isRequired,
      items: _propTypes2.default.array.isRequired,
      options: _propTypes2.default.object,
      onClose: _propTypes2.default.func,
      id: _propTypes2.default.string,
      className: _propTypes2.default.string
    };
    PhotoSwipe.defaultProps = {
      options: {},
      onClose: function onClose() {
      },
      id: "",
      className: ""
    };
    var _initialiseProps = function _initialiseProps2() {
      var _this3 = this;
      this.state = {
        isOpen: this.props.isOpen
      };
      this.componentDidMount = function() {
        var isOpen = _this3.state.isOpen;
        if (isOpen) {
          _this3.openPhotoSwipe(_this3.props);
        }
      };
      this.componentWillReceiveProps = function(nextProps) {
        var isOpen = _this3.state.isOpen;
        if (nextProps.isOpen) {
          if (!isOpen) {
            _this3.openPhotoSwipe(nextProps);
          } else {
            _this3.updateItems(nextProps.items);
          }
        } else if (isOpen) {
          _this3.closePhotoSwipe();
        }
      };
      this.componentWillUnmount = function() {
        _this3.closePhotoSwipe();
      };
      this.openPhotoSwipe = function(props) {
        var items = props.items, options = props.options;
        var pswpElement = _this3.pswpElement;
        _this3.photoSwipe = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, options);
        _events2.default.forEach(function(event) {
          var callback = props[event];
          if (callback || event === "destroy") {
            var self2 = _this3;
            _this3.photoSwipe.listen(event, function() {
              if (callback) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }
                args.unshift(this);
                callback.apply(void 0, args);
              }
              if (event === "destroy") {
                self2.handleClose();
              }
            });
          }
        });
        _this3.setState({
          isOpen: true
        }, function() {
          _this3.photoSwipe.init();
        });
      };
      this.updateItems = function() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _this3.photoSwipe.items.length = 0;
        items.forEach(function(item) {
          _this3.photoSwipe.items.push(item);
        });
        _this3.photoSwipe.invalidateCurrItems();
        _this3.photoSwipe.updateSize(true);
      };
      this.closePhotoSwipe = function() {
        if (!_this3.photoSwipe) {
          return;
        }
        _this3.photoSwipe.close();
      };
      this.handleClose = function() {
        var onClose = _this3.props.onClose;
        _this3.setState({
          isOpen: false
        }, function() {
          if (onClose) {
            onClose();
          }
        });
      };
    };
    exports.default = PhotoSwipe;
    module.exports = exports["default"];
  }
});

// node_modules/lodash.pick/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.pick/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array ? array.length : 0, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var Symbol = root.Symbol;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
    var nativeMax = Math.max;
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    function basePick(object, props) {
      object = Object(object);
      return basePickBy(object, props, function(value, key) {
        return key in object;
      });
    }
    function basePickBy(object, props, predicate) {
      var index = -1, length = props.length, result = {};
      while (++index < length) {
        var key = props[index], value = object[key];
        if (predicate(value, key)) {
          result[key] = value;
        }
      }
      return result;
    }
    function baseRest(func, start) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = array;
        return apply(func, this, otherArgs);
      };
    }
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var pick = baseRest(function(object, props) {
      return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
    });
    module.exports = pick;
  }
});

// node_modules/react-photoswipe/lib/PhotoSwipeGallery.js
var require_PhotoSwipeGallery = __commonJS({
  "node_modules/react-photoswipe/lib/PhotoSwipeGallery.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _classnames = require_classnames();
    var _classnames2 = _interopRequireDefault(_classnames);
    var _lodash = require_lodash();
    var _lodash2 = _interopRequireDefault(_lodash);
    var _PhotoSwipe = require_PhotoSwipe();
    var _PhotoSwipe2 = _interopRequireDefault(_PhotoSwipe);
    var _events = require_events();
    var _events2 = _interopRequireDefault(_events);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutProperties(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var PhotoSwipeGallery = function(_React$Component) {
      _inherits(PhotoSwipeGallery2, _React$Component);
      function PhotoSwipeGallery2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, PhotoSwipeGallery2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhotoSwipeGallery2.__proto__ || Object.getPrototypeOf(PhotoSwipeGallery2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          isOpen: _this.props.isOpen,
          options: _this.props.options
        }, _this.componentWillReceiveProps = function(nextProps) {
          var isOpen = _this.state.isOpen;
          if (nextProps.isOpen) {
            if (!isOpen) {
              _this.setState({ isOpen: true });
            }
          } else if (isOpen) {
            _this.setState({ isOpen: false });
          }
        }, _this.showPhotoSwipe = function(itemIndex) {
          return function(e) {
            e.preventDefault();
            var getThumbBoundsFn = function getThumbBoundsFn2(index) {
              var thumbnail = _this.thumbnails[index];
              var img = thumbnail.getElementsByTagName("img")[0];
              var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
              var rect = img.getBoundingClientRect();
              return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            };
            var options = _this.state.options;
            options.index = itemIndex;
            options.getThumbBoundsFn = options.getThumbBoundsFn || getThumbBoundsFn;
            _this.setState({
              isOpen: true,
              options
            });
          };
        }, _this.handleClose = function() {
          _this.setState({
            isOpen: false
          });
          _this.props.onClose();
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(PhotoSwipeGallery2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _props = this.props, id = _props.id, items = _props.items, thumbnailContent = _props.thumbnailContent, other = _objectWithoutProperties(_props, ["id", "items", "thumbnailContent"]);
          var className = this.props.className;
          className = (0, _classnames2.default)(["pswp-gallery", className]).trim();
          var eventProps = (0, _lodash2.default)(other, _events2.default);
          var _state = this.state, isOpen = _state.isOpen, options = _state.options;
          return _react2.default.createElement(
            "div",
            { id, className },
            _react2.default.createElement(
              "div",
              { className: "pswp-thumbnails" },
              items.map(function(item, index) {
                return _react2.default.createElement(
                  "div",
                  {
                    key: index,
                    ref: function ref(node) {
                      _this2.thumbnails = _this2.thumbnails || [];
                      _this2.thumbnails[index] = node;
                    },
                    className: "pswp-thumbnail",
                    onClick: _this2.showPhotoSwipe(index)
                  },
                  thumbnailContent(item)
                );
              })
            ),
            _react2.default.createElement(_PhotoSwipe2.default, _extends({}, eventProps, {
              isOpen,
              items,
              options,
              onClose: this.handleClose
            }))
          );
        }
      }]);
      return PhotoSwipeGallery2;
    }(_react2.default.Component);
    PhotoSwipeGallery.propTypes = {
      items: _propTypes2.default.array.isRequired,
      options: _propTypes2.default.object,
      thumbnailContent: _propTypes2.default.func,
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      isOpen: _propTypes2.default.bool,
      onClose: _propTypes2.default.func
    };
    PhotoSwipeGallery.defaultProps = {
      options: {},
      thumbnailContent: function thumbnailContent(item) {
        return _react2.default.createElement("img", { src: item.src, width: "100", height: "100", alt: "" });
      },
      id: "",
      className: "",
      isOpen: false,
      onClose: function onClose() {
      }
    };
    exports.default = PhotoSwipeGallery;
    module.exports = exports["default"];
  }
});

// node_modules/react-photoswipe/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-photoswipe/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PhotoSwipeGallery = exports.PhotoSwipe = void 0;
    var _PhotoSwipe = require_PhotoSwipe();
    var _PhotoSwipe2 = _interopRequireDefault(_PhotoSwipe);
    var _PhotoSwipeGallery = require_PhotoSwipeGallery();
    var _PhotoSwipeGallery2 = _interopRequireDefault(_PhotoSwipeGallery);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _PhotoSwipe2.default;
    exports.PhotoSwipe = _PhotoSwipe2.default;
    exports.PhotoSwipeGallery = _PhotoSwipeGallery2.default;
  }
});
export default require_lib();
/*! Bundled license information:

photoswipe/dist/photoswipe.js:
  (*! PhotoSwipe - v4.1.3 - 2019-01-08
  * http://photoswipe.com
  * Copyright (c) 2019 Dmitry Semenov; *)

photoswipe/dist/photoswipe-ui-default.js:
  (*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
  * http://photoswipe.com
  * Copyright (c) 2019 Dmitry Semenov; *)
*/
//# sourceMappingURL=react-photoswipe.js.map
