'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var genClasses = require('@geekagency/gen-classes');
var compositeJs = require('@geekagency/composite-js');
var md = require('react-icons/md');
var fa = require('react-icons/fa');
var gi = require('react-icons/gi');
var InputMask = _interopDefault(require('react-input-mask'));
var ReactLoading = _interopDefault(require('react-loading'));
var Camera$1 = _interopDefault(require('react-html5-camera-photo'));
var Draggable = _interopDefault(require('react-draggable'));

var index = (function (props) {
  var message = props.message,
      date = props.date,
      _right = props.right,
      _left = props.left;
  var classes = genClasses.cEx(['chat-bubble', {
    'right': function right(_) {
      return _right === true;
    },
    'left': function left(_) {
      return _left === true;
    },
    'welcome': function welcome(_) {
      return !_left && !_right;
    }
  }]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("p", null, message || ''), /*#__PURE__*/React__default.createElement("span", {
    className: "chat-bubble__date"
  }, date || '-'));
});

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ReactUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _typeof(obj) {
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  /**
   * Compose several unary function into one function. Execution is done from right to left
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */


  var compose = function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  };
  /**
   * Compose several unary function into one function. Execution is done left to right
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */


  var pipe = function pipe() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return b(a.apply(void 0, arguments));
      };
    });
  };
  /**
  * The core of curry
  *
  * @func
  * @category Function
  * @sig Function -> Number -> Function -> ...Arguments -> Function
  * @param {Function}
  * @param {Integer}
  * @param {Function}
  * @param {...Any}
  * @return {Function}
  
  */


  var callCurry = function callCurry(namedCurryFunction) {
    return function (arity) {
      return function (fn) {
        return function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (args.length < arity) {
            return namedCurryFunction.bind.apply(namedCurryFunction, [null].concat(args));
          }

          return fn.call.apply(fn, [null].concat(args));
        };
      };
    };
  };
  /**
   * Curryify a function. Allow the function to be called with less parameters that it needs and return a function with the
   * remaining parameters
   *
   * @func
   * @category Function
   * @sig ((a, b, ...) -> c) -> a -> b -> ... -> c
   * @param {Function} function the function to currify
   * @return {Function}
   */


  var curry = function curry(fn) {
    var arity = fn.length;
    return function $curry() {
      return callCurry($curry)(arity)(fn).apply(void 0, arguments);
    };
  }; // curryN :: ((a, b, ...),(a, b, ...)) ->(a, b, ...) -> c) -> a -> b -> ... -> c

  /**
   * Returns a function that accept one argument. The argument  will be passed to every function in parameter and given back as an array
   * AKA. Parallelized composition. I'm not even sure this is a thing.
   * It's a mix between compose and spec
   *
   * @func
   * @category Function
   * @sig ((a->b),(a->c),...,(a->z)) => x => [b(x),c(x),...,z(x)]
   * @param {...Functions} functions the functions to diverge
   * @return {Function}
   * @see compose
   * @example
   *
   * let fn1 = compose (uppercase,prop('key'))
   * let fn2 = compose (reverse,prop('another_key'))
   * let fn3 = diverge (fn1,fn2);
   * fn3 ( {'key':'foo', 'another_key':'bar'})
   * //  ['rab','FOO']
   *
   * diverge (fnA,fnB)(x) == [ fnA(x) , fnB(x) ]
   *
   */


  var diverge = function diverge() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return function (x) {
      return args.map(function (arg) {
        return arg(x);
      });
    };
  };
  /**
   * Identity function
   *
   * @func
   * @category Function
   * @sig
   * @param {Any}
   * @return {Any}
   * @see compose
   * @see diverge
   *
   */


  var identity = function identity(x) {
    return x;
  }; // flip :: ((a,b)->c)  -> a -> b -> (b,a) -> c
  // flip :: (a -> b -> c) -> b -> a -> c

  /**
   * flip two arguments of a function
   *
   * @func
   * @category Function
   * @sig ( FN -> b -> c)  ->
   * @param {Function}
   * @return {Curry}
   * @see compose
   * @see curry
   *
   */


  var flip = curry(function (fn, a, b) {
    return fn(b, a);
  }); // map :: fn f => (a -> b) -> f a -> f b
  // map :: Functor f => (a -> b) -> f a -> f b

  var map = curry(function (fn, f) {
    return f.map(fn);
  }); // join :: Monad m => m (m a) -> m a

  var maybe = curry(function (value, fn, functor) {
    if (functor.isNothing) {
      return value;
    }

    return fn(functor.$value);
  });
  var replace = curry(function (re, rpl, str) {
    return str.replace(re, rpl);
  }); // test :: RegEx -> String -> Boolean

  var test = curry(function (re, str) {
    return re.test(str);
  }); // match :: Regex -> String -> List

  var match = curry(function (re, str) {
    return str.match(re);
  });

  var regex = function regex(str) {
    return new RegExp(str);
  }; // concat :: String -> String


  var concat = curry(function (a, b) {
    return a.concat(b);
  }); // append :: String -> String

  var append = flip(concat); // length :: String -> Number

  var split = curry(function (sep, str) {
    return str.split(sep);
  });
  var repeat = curry(function (times, string) {
    return string.repeat(times);
  });

  var lcfirst = function lcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var trace = curry(function (tag, value) {
    console.log(tag, value);
    return value;
  });
  var trace_keys = curry(function (tag, value) {
    console.log(tag, Object.keys(value));
    return value;
  });
  var supertrace = curry(function (prefix, tag, value) {
    return trace(prefix + ' ' + tag, value);
  });
  var trace_prop = curry(function (tag, prop, value) {
    console.log(tag, value[prop]);
    return value;
  });

  var Maybe = /*#__PURE__*/function () {
    _createClass(Maybe, [{
      key: "isNothing",
      get: function get() {
        return this.$value === null || this.$value === undefined;
      }
    }, {
      key: "isJust",
      get: function get() {
        return !this.isNothing;
      }
    }]);

    function Maybe(x) {
      _classCallCheck(this, Maybe);

      this.$value = x;
    }
    /*[util.inspect.custom]() {
      return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
    }*/
    // ----- Pointed Maybe


    _createClass(Maybe, [{
      key: "map",
      // ----- Functor Maybe
      value: function map(fn) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
      } // ----- Applicative Maybe

    }, {
      key: "ap",
      value: function ap(f) {
        return this.isNothing ? this : f.map(this.$value);
      } // ----- Monad Maybe

    }, {
      key: "chain",
      value: function chain(fn) {
        return this.map(fn).join();
      }
    }, {
      key: "join",
      value: function join() {
        return this.isNothing ? this : this.$value;
      } // ----- Traversable Maybe

    }, {
      key: "sequence",
      value: function sequence(of) {
        return this.traverse(of, identity);
      }
    }, {
      key: "traverse",
      value: function traverse(of, fn) {
        return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
      }
    }], [{
      key: "of",
      value: function of(x) {
        return new Maybe(x);
      }
    }]);

    return Maybe;
  }(); //export const empty = string=> string.length==0;
  // BOOL => BOOL
  //export const notEmpty = compose(not,empty)


  var not = function not(x) {
    return !x;
  };

  var _OR_ = curry(function (a, b, x) {
    return a(x) || b(x);
  });

  var _AND_ = curry(function (a, b, x) {
    return a(x) && b(x);
  });

  var _NOT_ = curry(function (a, x) {
    return !a(x);
  }); //export const isStrictlyEqual = curry((value,item)=> value===item)


  var isStrictlyEqual = curry(function (value, item) {
    return value === item;
  });

  var isStrictlyNotEqual = function isStrictlyNotEqual(value) {
    return compose(not, isStrictlyEqual(value));
  };

  var _typeof$1 = function _typeof$1(value) {
    return _typeof(value);
  };

  var is_type = function is_type(val) {
    return compose(isStrictlyEqual(val), _typeof$1);
  };

  var is_type_string = is_type('string');
  var is_type_function = is_type('function');
  var is_type_number = is_type('number');
  var is_undefined = is_type('undefined');

  var isNull = function isNull(x) {
    return x === null;
  };

  var is_type_bool = is_type('boolean');

  var isNil = _OR_(isNull, is_undefined); //fucky number test in js can suck on this shit ..!..


  var defaultTo = function defaultTo(val) {
    return compose(maybe(val, identity), Maybe.of);
  };

  var assign2 = curry(function (x, y) {
    return Object.assign({}, x, y);
  });

  var _merge = curry(function (a, b) {
    return assign2(a, b);
  });

  var merge = _merge;
  var prop = curry(function (prop, obj) {
    return obj[prop];
  });

  var keys = function keys(o) {
    return Object.keys(o);
  }; // String => Object => Object


  var omit_key = curry(function (_omit, obj) {
    var o = {};
    Object.keys(obj).map(function (key) {
      if (key !== _omit) {
        o[key] = obj[key];
      }
    });
    return o;
  });
  var ensure_object_copy = assign2({});
  /*
    String -> String -> Object -> Object
  */

  var as_object_prop = curry(function (key, value, object) {
    var o = _objectSpread2({}, object);

    o[key] = value;
    return o;
  }); //  a -> b -> Object

  var as_prop = curry(function (key, value) {
    return flip(as_object_prop(key), defaultTo({}), value);
  });
  /*
   Spec
    for a given object for which values are function  returns a new object with
  
    {
      x: fn(a,b),
      y: fn(a,b,c),
    }
  
    spec(obj,a)
    => {
      x: fn(a,b)(a)
      y: fn(a,b,c)(a)
    }
  
  */
  //Object -> List

  var enlist = curry(function (obj) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x]);
    }))(obj);
  });
  var substract = curry(function (a, b) {
    return a - b;
  });
  var decrement = flip(substract)(1);
  var joinList = curry(function (sep, array) {
    return array.join(sep);
  }); //Function -> List -> List

  var filter = curry(function (fn, array) {
    return array.filter(fn);
  }); // a -> Function -> List -> a

  var reduce = curry(function (initial_value, reducer, array) {
    return array.reduce(reducer, initial_value);
  }); // Function -> List -> Number

  var findIndex = curry(function (fn, array) {
    return array.findIndex(fn);
  }); // value => List => Number

  var findIndexEqual = compose(findIndex, isStrictlyEqual); // value => List => Number

  var findIndexNotEqual = compose(findIndex, isStrictlyNotEqual); // value => List => List

  var filterNotEqual = compose(filter, isStrictlyNotEqual); // value => List => List

  var filterEqual = compose(filter, isStrictlyEqual);
  var indexOf = curry(function (v, a) {
    return a.indexOf(v);
  }); // reduce an array of subObjects to a merged object of all subObjects

  var reduceToObject = reduce({}, merge);
  /*Recursively call a Curried FN  with each array item of args
  
  same as  spreading args fn (...args)
  
  spread(fn)(args) == fn(...args)
  */
  //spread :: fn -> [a,b,c...] -> fn(a,b,c,...)

  var spread = curry(function (fn, args) {
    return reduce(fn, function (_fn, arg) {
      return _fn(arg);
    }, args);
  }); // apply result of fn on the group
  // ObjectReducer
  // groupListByKey :: Object -> item -> Object

  var groupListByKey = function groupListByKey(key) {
    return curry(function (result, item) {
      if (typeof result[item[key]] === 'undefined') result[item[key]] = [];
      result[item[key]].push(item);
      return result;
    });
  };

  var tail = function tail(arr) {
    return arr.slice(1);
  };

  var head = function head(arr) {
    return arr[0];
  };

  var slice = curry(function (x, a) {
    return a.slice(x);
  });
  var range = curry(function (start, length, a) {
    return a.slice(start, length);
  });
  var safeTail = defaultTo([])(tail);
  var safeHead = defaultTo(null)(head); // ReduceListToObject:: ObjectReducer => key => Object => Object
  //export const reduceListToObject = objectReducer => key => c.compose(as_prop(key),c.reduce({},objectReducer))

  var reduceListByKey = function reduceListByKey(key) {
    return reduce({}, groupListByKey(key));
  }; //shuffle [a] -> [a]


  var reduceListByKeys = curry(function (_keys, list) {
    if (_keys.length == 0) return list;
    var h = head(_keys);
    var rest = safeTail(_keys);
    var res = reduceListByKey(h)(list);

    for (var key in res) {
      res[key] = reduceListByKeys(rest)(res[key]);
    }

    return res;
  });
  var sort = curry(function (fn, array) {
    return array.sort(fn);
  });

  var _sortAsc = curry(function (fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  var _sortDesc = curry(function (fn, a, b) {
    return _sortAsc(fn, b, a);
  });

  var _sortBy = curry(function (_sort, fn, array) {
    return slice(0, array).sort(_sort(fn));
  });

  var sortByA = _sortBy(_sortAsc);

  var sortByD = _sortBy(_sortDesc);

  var safe_push = curry(function (array, item) {
    return [].concat(_toConsumableArray(array), [item]);
  });
  var safe_stack = curry(function (array, item) {
    return [item].concat(_toConsumableArray(array));
  });
  /*
    if(cond is met, return right else return left)
  */

  var either = curry(function (cond, left, right, val) {
    return cond(val) ? right(val) : left(val);
  });
  var eitherUndefined = either(is_undefined);

  var _throw = function _throw(x) {
    return function (val) {
      throw new Error(x);
    };
  }; //interrupt everything


  var eitherThrow = curry(function (cond, error) {
    return either(cond, _throw(error), identity);
  });
  var tryCatcher = curry(function (catcher, tryer, arg) {
    try {
      return tryer(arg);
    } catch (err) {
      return catcher(arg, err);
    }
  });

  var mergeAll = function mergeAll(list) {
    return reduce({}, assign2, list);
  };

  var delete_list_item = curry(function (state, action) {
    return filter(function (item) {
      return item.id != action.payload;
    }, state);
  });
  var add_list_item = curry(function (state, action) {
    return [].concat(_toConsumableArray(state), [action.payload]);
  });
  var item_prop_is_equal = curry(function (prop, value, item) {
    return item[prop] == value;
  });
  var add_to_list = curry(function (state, action) {
    return [].concat(_toConsumableArray(state), [action.payload]);
  }); // del_from_list :: List -> Object-> List

  var del_from_list_by_prop_id = curry(function (state, action) {
    return filter(function (item) {
      return item.id != action.payload;
    }, state);
  }); // update_object :: Object->Object->Object

  var update_list_by_prop_id = curry(function (list, itemIdValue, updateFn) {
    return update_list(list, item_prop_is_equal('id', itemIdValue), updateFn);
  }); // update_list :: List -> Fn -> Fn -> List

  var update_list = curry(function (list, itemPredicate, updateFn) {
    return list.map(function (item) {
      return either(itemPredicate, identity, updateFn, item);
    });
  });
  var propIsEqual = curry(function (prop, value, item) {
    return item[prop] === value;
  });
  var propIsNotEqual = curry(function (prop, value, item) {
    return item[prop] !== value;
  });
  var delByProp = curry(function (prop, list, val) {
    return filter(propIsNotEqual(prop, val), list);
  });
  var delByPropId = delByProp('id');
  var add = curry(function (list, item) {
    return [].concat(_toConsumableArray(list), [item]);
  });
  var getByProp = curry(function (prop, list, val) {
    return filter(propIsEqual(prop, val), list);
  });
  var update = curry(function (cond, val, list, fn) {
    return map(either(cond(val), identity, fn))(list);
  });
  var updateIfPropEqual = curry(function (prop, val, list, fn) {
    return update(propIsEqual(prop), val, list, fn);
  }); // {a:b} -> a
  // {a:b, c:d} -> a

  var key = compose(head, keys); //export const objectReduce = reduce({});  //<--- never do this unless you want to keep the accumulator .... forever !!
  //  String -> a -> Object -> Bool

  var isPropStrictlyEqual = curry(function (_prop, value, item) {
    return compose(isStrictlyEqual(value), prop(_prop))(item);
  });
  var isPropStrictlyNotEqual = curry(function (prop, value, item) {
    return compose(not, isPropStrictlyEqual(prop, value))(item);
  }); // filter an object and returns key that matches
  // regex -> string -> Object -> Bool

  var propMatch = curry(function (re, key) {
    return compose(test(re), prop(key));
  });

  var makeHasKey = function makeHasKey(k) {
    return compose(function (x) {
      return x !== -1;
    }, indexOf(k), keys);
  };

  var hasKey = curry(function (k, o) {
    return makeHasKey(k)(o);
  }); // Object -> Object -> Object 

  var matchReducer = function matchReducer(match) {
    return function (acc, item) {
      //  console.log(head(keys(item)))
      if (match(key(item))) {
        return assign2(acc, item);
      }

      return acc;
    };
  }; // 


  var keepMatching = function keepMatching(match) {
    return reduce({}, matchReducer(match));
  };
  /*
    perform a match function on every item of an object and returns an array like this: 
    [matching, notmatching]
  
    //MatchFunction => Object => List
  */


  var makeSpreadFilterByKey = function makeSpreadFilterByKey(transformMatching) {
    return function (transformNotMatching) {
      return function (match) {
        return compose(diverge(transformMatching(match), transformNotMatching(compose(not, match))), enlist, ensure_object_copy);
      };
    };
  };
  /*
    perform a match function on every item of an object and returns an array like this: 
    [matching, notmatching]
  
    //MatchFunction => Object => List
  */


  var spreadFilterByKey = makeSpreadFilterByKey(keepMatching)(keepMatching);
  var spec = curry(function (obj, arg) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x](arg));
    }), mergeAll)(obj);
  });
  var updateProp = curry(function (prop, obj, value) {
    return updateObject(obj, _defineProperty({}, prop, value));
  });
  var beginWith = compose(test, regex, concat('^'));
  var contains = compose(test, regex, concat(''));
  var endWith = compose(test, regex, append('$'));
  var equals = compose(test, regex, append('$'), concat('^'));

  var presentIn = function presentIn(array) {
    return function (str) {
      return array.indexOf(str) > -1;
    };
  };

  var spreadObject = spreadFilterByKey;
  var spreadObjectBeginWith = curry(function (str, obj) {
    return spreadFilterByKey(beginWith(str))(obj);
  });
  var spreadObjectContaining = curry(function (str, obj) {
    return spreadFilterByKey(contains(str))(obj);
  });
  var spreadObjectEndingWith = curry(function (str, obj) {
    return spreadFilterByKey(endWith(str))(obj);
  });
  var spreadObjectPresentIn = curry(function (array, obj) {
    return spreadFilterByKey(presentIn(array))(obj);
  });
  var transformReplace = replace;
  var transformLowSnake = lcfirst;

  var replaceKeyReducer = function replaceKeyReducer(transform) {
    return function (acc, item) {
      acc[transform(key(item))] = item[key(item)];
      return acc;
    };
  }; // Fn -> List -> Object


  var transformProps = function transformProps(transform) {
    return reduce({}, replaceKeyReducer(transform));
  }; // Fn ->  Object -> Object


  var transformKeys = function transformKeys(transform) {
    return compose(transformProps(transform), enlist);
  }; // String -> String


  var forwardPropsTransformer = function forwardPropsTransformer(str) {
    return compose(transformLowSnake, transformReplace(str, ''));
  }; // String -> Object ->Object


  var forwardPropsRemovingHeader = curry(function (header, obj) {
    return transformKeys(forwardPropsTransformer(header))(obj);
  });
  exports.beginWith = beginWith;
  exports.contains = contains;
  exports.endWith = endWith;
  exports.equals = equals;
  exports.forwardPropsRemovingHeader = forwardPropsRemovingHeader;
  exports.forwardPropsTransformer = forwardPropsTransformer;
  exports.presentIn = presentIn;
  exports.replaceKeyReducer = replaceKeyReducer;
  exports.spreadObject = spreadObject;
  exports.spreadObjectBeginWith = spreadObjectBeginWith;
  exports.spreadObjectContaining = spreadObjectContaining;
  exports.spreadObjectEndingWith = spreadObjectEndingWith;
  exports.spreadObjectPresentIn = spreadObjectPresentIn;
  exports.transformKeys = transformKeys;
  exports.transformLowSnake = transformLowSnake;
  exports.transformProps = transformProps;
  exports.transformReplace = transformReplace;
  exports.updateProp = updateProp;
});
unwrapExports(ReactUtils);
var ReactUtils_1 = ReactUtils.beginWith;
var ReactUtils_2 = ReactUtils.contains;
var ReactUtils_3 = ReactUtils.endWith;
var ReactUtils_4 = ReactUtils.equals;
var ReactUtils_5 = ReactUtils.forwardPropsRemovingHeader;
var ReactUtils_6 = ReactUtils.forwardPropsTransformer;
var ReactUtils_7 = ReactUtils.presentIn;
var ReactUtils_8 = ReactUtils.replaceKeyReducer;
var ReactUtils_9 = ReactUtils.spreadObject;
var ReactUtils_10 = ReactUtils.spreadObjectBeginWith;
var ReactUtils_11 = ReactUtils.spreadObjectContaining;
var ReactUtils_12 = ReactUtils.spreadObjectEndingWith;
var ReactUtils_13 = ReactUtils.spreadObjectPresentIn;
var ReactUtils_14 = ReactUtils.transformKeys;
var ReactUtils_15 = ReactUtils.transformLowSnake;
var ReactUtils_16 = ReactUtils.transformProps;
var ReactUtils_17 = ReactUtils.transformReplace;
var ReactUtils_18 = ReactUtils.updateProp;

var ObjectUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  /**
   * Compose several unary function into one function. Execution is done from right to left
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */

  var compose = function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  };
  /**
   * Compose several unary function into one function. Execution is done left to right
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */


  var pipe = function pipe() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return b(a.apply(void 0, arguments));
      };
    });
  };
  /**
  * The core of curry
  *
  * @func
  * @category Function
  * @sig Function -> Number -> Function -> ...Arguments -> Function
  * @param {Function}
  * @param {Integer}
  * @param {Function}
  * @param {...Any}
  * @return {Function}
  
  */


  var callCurry = function callCurry(namedCurryFunction) {
    return function (arity) {
      return function (fn) {
        return function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (args.length < arity) {
            return namedCurryFunction.bind.apply(namedCurryFunction, [null].concat(args));
          }

          return fn.call.apply(fn, [null].concat(args));
        };
      };
    };
  };
  /**
   * Curryify a function. Allow the function to be called with less parameters that it needs and return a function with the
   * remaining parameters
   *
   * @func
   * @category Function
   * @sig ((a, b, ...) -> c) -> a -> b -> ... -> c
   * @param {Function} function the function to currify
   * @return {Function}
   */


  var curry = function curry(fn) {
    var arity = fn.length;
    return function $curry() {
      return callCurry($curry)(arity)(fn).apply(void 0, arguments);
    };
  }; // curryN :: ((a, b, ...),(a, b, ...)) ->(a, b, ...) -> c) -> a -> b -> ... -> c

  /**
   * Returns a function that accept one argument. The argument  will be passed to every function in parameter and given back as an array
   * AKA. Parallelized composition. I'm not even sure this is a thing.
   * It's a mix between compose and spec
   *
   * @func
   * @category Function
   * @sig ((a->b),(a->c),...,(a->z)) => x => [b(x),c(x),...,z(x)]
   * @param {...Functions} functions the functions to diverge
   * @return {Function}
   * @see compose
   * @example
   *
   * let fn1 = compose (uppercase,prop('key'))
   * let fn2 = compose (reverse,prop('another_key'))
   * let fn3 = diverge (fn1,fn2);
   * fn3 ( {'key':'foo', 'another_key':'bar'})
   * //  ['rab','FOO']
   *
   * diverge (fnA,fnB)(x) == [ fnA(x) , fnB(x) ]
   *
   */


  var diverge = function diverge() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return function (x) {
      return args.map(function (arg) {
        return arg(x);
      });
    };
  };
  /**
   * Identity function
   *
   * @func
   * @category Function
   * @sig
   * @param {Any}
   * @return {Any}
   * @see compose
   * @see diverge
   *
   */


  var identity = function identity(x) {
    return x;
  }; // flip :: ((a,b)->c)  -> a -> b -> (b,a) -> c
  // flip :: (a -> b -> c) -> b -> a -> c

  /**
   * flip two arguments of a function
   *
   * @func
   * @category Function
   * @sig ( FN -> b -> c)  ->
   * @param {Function}
   * @return {Curry}
   * @see compose
   * @see curry
   *
   */


  var flip = curry(function (fn, a, b) {
    return fn(b, a);
  }); // map :: fn f => (a -> b) -> f a -> f b
  // map :: Functor f => (a -> b) -> f a -> f b

  var map = curry(function (fn, f) {
    return f.map(fn);
  }); // join :: Monad m => m (m a) -> m a

  var maybe = curry(function (value, fn, functor) {
    if (functor.isNothing) {
      return value;
    }

    return fn(functor.$value);
  });
  var replace = curry(function (re, rpl, str) {
    return str.replace(re, rpl);
  }); // test :: RegEx -> String -> Boolean

  var test = curry(function (re, str) {
    return re.test(str);
  }); // match :: Regex -> String -> List

  var match = curry(function (re, str) {
    return str.match(re);
  });
  var concat = curry(function (a, b) {
    return a.concat(b);
  }); // append :: String -> String

  var append = flip(concat); // length :: String -> Number

  var split = curry(function (sep, str) {
    return str.split(sep);
  });
  var repeat = curry(function (times, string) {
    return string.repeat(times);
  });
  var trace = curry(function (tag, value) {
    console.log(tag, value);
    return value;
  });
  var trace_keys = curry(function (tag, value) {
    console.log(tag, Object.keys(value));
    return value;
  });
  var supertrace = curry(function (prefix, tag, value) {
    return trace(prefix + ' ' + tag, value);
  });
  var trace_prop = curry(function (tag, prop, value) {
    console.log(tag, value[prop]);
    return value;
  });

  function _typeof(obj) {
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var Maybe = /*#__PURE__*/function () {
    _createClass(Maybe, [{
      key: "isNothing",
      get: function get() {
        return this.$value === null || this.$value === undefined;
      }
    }, {
      key: "isJust",
      get: function get() {
        return !this.isNothing;
      }
    }]);

    function Maybe(x) {
      _classCallCheck(this, Maybe);

      this.$value = x;
    }
    /*[util.inspect.custom]() {
      return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
    }*/
    // ----- Pointed Maybe


    _createClass(Maybe, [{
      key: "map",
      // ----- Functor Maybe
      value: function map(fn) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
      } // ----- Applicative Maybe

    }, {
      key: "ap",
      value: function ap(f) {
        return this.isNothing ? this : f.map(this.$value);
      } // ----- Monad Maybe

    }, {
      key: "chain",
      value: function chain(fn) {
        return this.map(fn).join();
      }
    }, {
      key: "join",
      value: function join() {
        return this.isNothing ? this : this.$value;
      } // ----- Traversable Maybe

    }, {
      key: "sequence",
      value: function sequence(of) {
        return this.traverse(of, identity);
      }
    }, {
      key: "traverse",
      value: function traverse(of, fn) {
        return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
      }
    }], [{
      key: "of",
      value: function of(x) {
        return new Maybe(x);
      }
    }]);

    return Maybe;
  }(); //export const empty = string=> string.length==0;
  // BOOL => BOOL
  //export const notEmpty = compose(not,empty)


  var not = function not(x) {
    return !x;
  };

  var _OR_ = curry(function (a, b, x) {
    return a(x) || b(x);
  });

  var _AND_ = curry(function (a, b, x) {
    return a(x) && b(x);
  });

  var _NOT_ = curry(function (a, x) {
    return !a(x);
  }); //export const isStrictlyEqual = curry((value,item)=> value===item)


  var isStrictlyEqual = curry(function (value, item) {
    return value === item;
  });

  var isStrictlyNotEqual = function isStrictlyNotEqual(value) {
    return compose(not, isStrictlyEqual(value));
  };

  var _typeof$1 = function _typeof$1(value) {
    return _typeof(value);
  };

  var is_type = function is_type(val) {
    return compose(isStrictlyEqual(val), _typeof$1);
  };

  var is_type_string = is_type('string');
  var is_type_function = is_type('function');
  var is_type_number = is_type('number');
  var is_undefined = is_type('undefined');

  var isNull = function isNull(x) {
    return x === null;
  };

  var is_type_bool = is_type('boolean');

  var isNil = _OR_(isNull, is_undefined); //fucky number test in js can suck on this shit ..!..


  var defaultTo = function defaultTo(val) {
    return compose(maybe(val, identity), Maybe.of);
  };

  var assign2 = curry(function (x, y) {
    return Object.assign({}, x, y);
  });

  var _merge = curry(function (a, b) {
    return assign2(a, b);
  });

  var merge = _merge;
  var prop = curry(function (prop, obj) {
    return obj[prop];
  });

  var keys = function keys(o) {
    return Object.keys(o);
  }; // String => Object => Object


  var omit_key = curry(function (_omit, obj) {
    var o = {};
    Object.keys(obj).map(function (key) {
      if (key !== _omit) {
        o[key] = obj[key];
      }
    });
    return o;
  });
  var ensure_object_copy = assign2({});
  /*
    String -> String -> Object -> Object
  */

  var as_object_prop = curry(function (key, value, object) {
    var o = _objectSpread2({}, object);

    o[key] = value;
    return o;
  }); //  a -> b -> Object

  var as_prop = curry(function (key, value) {
    return flip(as_object_prop(key), defaultTo({}), value);
  });
  /*
   Spec
    for a given object for which values are function  returns a new object with
  
    {
      x: fn(a,b),
      y: fn(a,b,c),
    }
  
    spec(obj,a)
    => {
      x: fn(a,b)(a)
      y: fn(a,b,c)(a)
    }
  
  */
  //Object -> List

  var enlist = curry(function (obj) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x]);
    }))(obj);
  });
  var substract = curry(function (a, b) {
    return a - b;
  });
  var decrement = flip(substract)(1);
  var joinList = curry(function (sep, array) {
    return array.join(sep);
  }); //Function -> List -> List

  var filter = curry(function (fn, array) {
    return array.filter(fn);
  }); // a -> Function -> List -> a

  var reduce = curry(function (initial_value, reducer, array) {
    return array.reduce(reducer, initial_value);
  }); // Function -> List -> Number

  var findIndex = curry(function (fn, array) {
    return array.findIndex(fn);
  }); // value => List => Number

  var findIndexEqual = compose(findIndex, isStrictlyEqual); // value => List => Number

  var findIndexNotEqual = compose(findIndex, isStrictlyNotEqual); // value => List => List

  var filterNotEqual = compose(filter, isStrictlyNotEqual); // value => List => List

  var filterEqual = compose(filter, isStrictlyEqual);
  var indexOf = curry(function (v, a) {
    return a.indexOf(v);
  }); // reduce an array of subObjects to a merged object of all subObjects

  var reduceToObject = reduce({}, merge);
  /*Recursively call a Curried FN  with each array item of args
  
  same as  spreading args fn (...args)
  
  spread(fn)(args) == fn(...args)
  */
  //spread :: fn -> [a,b,c...] -> fn(a,b,c,...)

  var spread = curry(function (fn, args) {
    return reduce(fn, function (_fn, arg) {
      return _fn(arg);
    }, args);
  }); // apply result of fn on the group
  // ObjectReducer
  // groupListByKey :: Object -> item -> Object

  var groupListByKey = function groupListByKey(key) {
    return curry(function (result, item) {
      if (typeof result[item[key]] === 'undefined') result[item[key]] = [];
      result[item[key]].push(item);
      return result;
    });
  };

  var tail = function tail(arr) {
    return arr.slice(1);
  };

  var head = function head(arr) {
    return arr[0];
  };

  var slice = curry(function (x, a) {
    return a.slice(x);
  });
  var range = curry(function (start, length, a) {
    return a.slice(start, length);
  });
  var safeTail = defaultTo([])(tail);
  var safeHead = defaultTo(null)(head); // ReduceListToObject:: ObjectReducer => key => Object => Object
  //export const reduceListToObject = objectReducer => key => c.compose(as_prop(key),c.reduce({},objectReducer))

  var reduceListByKey = function reduceListByKey(key) {
    return reduce({}, groupListByKey(key));
  }; //shuffle [a] -> [a]


  var reduceListByKeys = curry(function (_keys, list) {
    if (_keys.length == 0) return list;
    var h = head(_keys);
    var rest = safeTail(_keys);
    var res = reduceListByKey(h)(list);

    for (var key in res) {
      res[key] = reduceListByKeys(rest)(res[key]);
    }

    return res;
  });
  var sort = curry(function (fn, array) {
    return array.sort(fn);
  });

  var _sortAsc = curry(function (fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  var _sortDesc = curry(function (fn, a, b) {
    return _sortAsc(fn, b, a);
  });

  var _sortBy = curry(function (_sort, fn, array) {
    return slice(0, array).sort(_sort(fn));
  });

  var sortByA = _sortBy(_sortAsc);

  var sortByD = _sortBy(_sortDesc);

  var safe_push = curry(function (array, item) {
    return [].concat(_toConsumableArray(array), [item]);
  });
  var safe_stack = curry(function (array, item) {
    return [item].concat(_toConsumableArray(array));
  });
  /*
    if(cond is met, return right else return left)
  */

  var either = curry(function (cond, left, right, val) {
    return cond(val) ? right(val) : left(val);
  });
  var eitherUndefined = either(is_undefined);

  var _throw = function _throw(x) {
    return function (val) {
      throw new Error(x);
    };
  }; //interrupt everything


  var eitherThrow = curry(function (cond, error) {
    return either(cond, _throw(error), identity);
  });
  var tryCatcher = curry(function (catcher, tryer, arg) {
    try {
      return tryer(arg);
    } catch (err) {
      return catcher(arg, err);
    }
  });

  var mergeAll = function mergeAll(list) {
    return reduce({}, assign2, list);
  };

  var delete_list_item = curry(function (state, action) {
    return filter(function (item) {
      return item.id != action.payload;
    }, state);
  });
  var add_list_item = curry(function (state, action) {
    return [].concat(_toConsumableArray(state), [action.payload]);
  });
  var item_prop_is_equal = curry(function (prop, value, item) {
    return item[prop] == value;
  });
  var add_to_list = curry(function (state, action) {
    return [].concat(_toConsumableArray(state), [action.payload]);
  }); // del_from_list :: List -> Object-> List

  var del_from_list_by_prop_id = curry(function (state, action) {
    return filter(function (item) {
      return item.id != action.payload;
    }, state);
  }); // update_object :: Object->Object->Object

  var update_list_by_prop_id = curry(function (list, itemIdValue, updateFn) {
    return update_list(list, item_prop_is_equal('id', itemIdValue), updateFn);
  }); // update_list :: List -> Fn -> Fn -> List

  var update_list = curry(function (list, itemPredicate, updateFn) {
    return list.map(function (item) {
      return either(itemPredicate, identity, updateFn, item);
    });
  });
  var propIsEqual = curry(function (prop, value, item) {
    return item[prop] === value;
  });
  var propIsNotEqual = curry(function (prop, value, item) {
    return item[prop] !== value;
  });
  var delByProp = curry(function (prop, list, val) {
    return filter(propIsNotEqual(prop, val), list);
  });
  var delByPropId = delByProp('id');
  var add = curry(function (list, item) {
    return [].concat(_toConsumableArray(list), [item]);
  });
  var getByProp = curry(function (prop, list, val) {
    return filter(propIsEqual(prop, val), list);
  });
  var update = curry(function (cond, val, list, fn) {
    return map(either(cond(val), identity, fn))(list);
  });
  var updateIfPropEqual = curry(function (prop, val, list, fn) {
    return update(propIsEqual(prop), val, list, fn);
  }); // {a:b} -> a
  // {a:b, c:d} -> a

  var key = compose(head, keys); //export const objectReduce = reduce({});  //<--- never do this unless you want to keep the accumulator .... forever !!
  //  String -> a -> Object -> Bool

  var isPropStrictlyEqual = curry(function (_prop, value, item) {
    return compose(isStrictlyEqual(value), prop(_prop))(item);
  });
  var isPropStrictlyNotEqual = curry(function (prop, value, item) {
    return compose(not, isPropStrictlyEqual(prop, value))(item);
  }); // filter an object and returns key that matches
  // regex -> string -> Object -> Bool

  var propMatch = curry(function (re, key) {
    return compose(test(re), prop(key));
  });

  var makeHasKey = function makeHasKey(k) {
    return compose(function (x) {
      return x !== -1;
    }, indexOf(k), keys);
  };

  var hasKey = curry(function (k, o) {
    return makeHasKey(k)(o);
  }); // Object -> Object -> Object 

  var matchReducer = function matchReducer(match) {
    return function (acc, item) {
      //  console.log(head(keys(item)))
      if (match(key(item))) {
        return assign2(acc, item);
      }

      return acc;
    };
  }; // 


  var keepMatching = function keepMatching(match) {
    return reduce({}, matchReducer(match));
  };

  var filterByKey = function filterByKey(match) {
    return compose(keepMatching(match), trace('x'), enlist, ensure_object_copy);
  };
  /*
    perform a match function on every item of an object and returns an array like this: 
    [matching, notmatching]
  
    //MatchFunction => Object => List
  */


  var makeSpreadFilterByKey = function makeSpreadFilterByKey(transformMatching) {
    return function (transformNotMatching) {
      return function (match) {
        return compose(diverge(transformMatching(match), transformNotMatching(compose(not, match))), enlist, ensure_object_copy);
      };
    };
  };
  /*
    perform a match function on every item of an object and returns an array like this: 
    [matching, notmatching]
  
    //MatchFunction => Object => List
  */


  var spreadFilterByKey = makeSpreadFilterByKey(keepMatching)(keepMatching);
  var spec = curry(function (obj, arg) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x](arg));
    }), mergeAll)(obj);
  });
  exports.filterByKey = filterByKey;
  exports.hasKey = hasKey;
  exports.isPropStrictlyEqual = isPropStrictlyEqual;
  exports.isPropStrictlyNotEqual = isPropStrictlyNotEqual;
  exports.keepMatching = keepMatching;
  exports.key = key;
  exports.makeHasKey = makeHasKey;
  exports.makeSpreadFilterByKey = makeSpreadFilterByKey;
  exports.matchReducer = matchReducer;
  exports.propMatch = propMatch;
  exports.spec = spec;
  exports.spreadFilterByKey = spreadFilterByKey;
});
unwrapExports(ObjectUtils);
var ObjectUtils_1 = ObjectUtils.filterByKey;
var ObjectUtils_2 = ObjectUtils.hasKey;
var ObjectUtils_3 = ObjectUtils.isPropStrictlyEqual;
var ObjectUtils_4 = ObjectUtils.isPropStrictlyNotEqual;
var ObjectUtils_5 = ObjectUtils.keepMatching;
var ObjectUtils_6 = ObjectUtils.key;
var ObjectUtils_7 = ObjectUtils.makeHasKey;
var ObjectUtils_8 = ObjectUtils.makeSpreadFilterByKey;
var ObjectUtils_9 = ObjectUtils.matchReducer;
var ObjectUtils_10 = ObjectUtils.propMatch;
var ObjectUtils_11 = ObjectUtils.spec;
var ObjectUtils_12 = ObjectUtils.spreadFilterByKey;

var e = React__default.createElement;

var bem = function bem(main) {
  return [main, function (block) {
    return "".concat(main, "__").concat(block);
  }, function (modifier) {
    return "".concat(main, "--").concat(modifier);
  }];
};

var makeBem = function makeBem(current) {
  return {
    current: current,
    make: {
      block: function block(_block) {
        return makeBem("".concat(current, "-").concat(_block));
      },
      element: function element(_element) {
        return makeBem("".concat(current, "__").concat(_element));
      },
      modifier: function modifier(_modifier) {
        return makeBem("".concat(current, "--").concat(_modifier));
      }
    },
    block: function block(_block2) {
      return "".concat(current, "-").concat(_block2);
    },
    modifier: function modifier(_modifier2) {
      return "".concat(current, "--").concat(_modifier2);
    }
  };
};
var wrapComponent = function wrapComponent(Wrap) {
  return function (Component) {
    return function (_ref) {
      var children = _ref.children,
          rest = _objectWithoutProperties(_ref, ["children"]);

      return /*#__PURE__*/React__default.createElement(Wrap, rest, /*#__PURE__*/React__default.createElement(Component, null, children));
    };
  };
};
var divElement = function divElement(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return /*#__PURE__*/React__default.createElement("div", rest, children);
};
var baseElement = compositeJs.curry(function (_e, _ref5) {
  var children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ["children"]);

  return e(_e, rest, children);
});
var modifiersToCeX = function modifiersToCeX(keyEnhancer, list, modifiers) {
  return list.reduce(function (acc, item) {
    var _type = _typeof(modifiers[item]);

    acc[keyEnhancer(item, modifiers[item])] = function (_) {
      return _type !== 'undefined' && modifiers[item] !== false;
    };

    return acc;
  }, {});
};
var withBaseClass = function withBaseClass(BaseClass) {
  return function (Component) {
    return function (props) {
      var className = props.className,
          rest = _objectWithoutProperties(props, ["className"]);

      var classes = genClasses.cEx([BaseClass, className]);
      return /*#__PURE__*/React__default.createElement(Component, _extends({}, rest, {
        className: classes
      }));
    };
  };
};
var withBem = function withBem(bem) {
  return function (Component) {
    return function (props) {
      var className = props.className,
          rest = _objectWithoutProperties(props, ["className"]);

      var classes = genClasses.cEx([bem.current, className]);
      return /*#__PURE__*/React__default.createElement(Component, _extends({}, rest, {
        parentBEM: bem,
        className: classes
      }));
    };
  };
};
var withModifiers = function withModifiers(namer, modifiers) {
  return function (Component) {
    return function (props) {
      var className = props.className,
          rest = _objectWithoutProperties(props, ["className"]); //ensure to preserve classNames


      var _spreadObjectPresentI = ReactUtils_13(modifiers, rest),
          _spreadObjectPresentI2 = _slicedToArray(_spreadObjectPresentI, 2),
          presentModifiers = _spreadObjectPresentI2[0],
          _props = _spreadObjectPresentI2[1];

      var classes = genClasses.cEx([className, modifiersToCeX(namer, modifiers, presentModifiers)]);
      return /*#__PURE__*/React__default.createElement(Component, _extends({
        className: classes
      }, _props));
    };
  };
};
var propsToCeX = function propsToCeX(keyEnhancer, list, modifiers) {
  return list.reduce(function (acc, item) {
    if (modifiers[item]) {
      acc.push(function (_) {
        return keyEnhancer(modifiers[item]);
      });
    }

    return acc;
  }, []);
};
var withTransformedProps = function withTransformedProps(namer, modifiers) {
  return function (Component) {
    return function (props) {
      var className = props.className,
          rest = _objectWithoutProperties(props, ["className"]); //ensure to preserve classNames


      var _spreadObjectPresentI5 = ReactUtils_13(modifiers, rest),
          _spreadObjectPresentI6 = _slicedToArray(_spreadObjectPresentI5, 2),
          presentModifiers = _spreadObjectPresentI6[0],
          _props = _spreadObjectPresentI6[1]; // console.error( enlist(presentModifiers),modifiers)
      //console.log(propsToCeX(namer,modifiers, presentModifiers))


      var classes = genClasses.cEx([className].concat(_toConsumableArray(propsToCeX(namer, modifiers, presentModifiers))));
      return /*#__PURE__*/React__default.createElement(Component, _extends({
        className: classes
      }, _props));
    };
  };
}; // apply modifiers if none of unless is present in props

var applyModifiers = function applyModifiers(modifiers, unless) {
  return function (Component) {
    return function (props) {
      var _m;

      if (unless && unless.length > 0) {
        var found = false;

        for (var _i = 0, _Object$keys = Object.keys(props); _i < _Object$keys.length; _i++) {
          var prop = _Object$keys[_i];

          if (unless.indexOf(prop) !== -1) {
            found = true;
          }
        }

        if (!found) {
          _m = modifiers;
        }
      } else {
        _m = modifiers;
      }

      return /*#__PURE__*/React__default.createElement(Component, _extends({}, _m, props));
    };
  };
};

var makePropsFilter = function makePropsFilter(prefix) {
  return [ReactUtils_10(prefix), ReactUtils_5(prefix)];
};

var _bem = bem('layout-flex'),
    _bem2 = _slicedToArray(_bem, 3),
    __base_class = _bem2[0],
    element = _bem2[1],
    modifier = _bem2[2];
var LayoutFlex = (function (props) {
  var _ref;

  var className = props.className,
      cover = props.cover,
      centered = props.centered,
      alignCenter = props.alignCenter,
      alignStretch = props.alignStretch,
      alignStart = props.alignStart,
      justStretch = props.justStretch,
      justBetween = props.justBetween,
      justAround = props.justAround,
      justEvenly = props.justEvenly,
      justCenter = props.justCenter,
      justStart = props.justStart,
      justEnd = props.justEnd,
      contentStart = props.contentStart,
      column = props.column,
      columnReverse = props.columnReverse,
      row = props.row,
      rowReverse = props.rowReverse,
      wrap = props.wrap,
      nowrap = props.nowrap,
      wrapReverse = props.wrapReverse,
      rest = _objectWithoutProperties(props, ["className", "cover", "centered", "alignCenter", "alignStretch", "alignStart", "justStretch", "justBetween", "justAround", "justEvenly", "justCenter", "justStart", "justEnd", "contentStart", "column", "columnReverse", "row", "rowReverse", "wrap", "nowrap", "wrapReverse"]);

  var classes = genClasses.cEx([__base_class, (_ref = {}, _defineProperty(_ref, modifier('between'), function (_) {
    return justBetween;
  }), _defineProperty(_ref, modifier('evenly'), function (_) {
    return justEvenly;
  }), _defineProperty(_ref, modifier('center'), function (_) {
    return justCenter;
  }), _defineProperty(_ref, modifier('stretch'), function (_) {
    return justStretch;
  }), _defineProperty(_ref, modifier('around'), function (_) {
    return justAround;
  }), _defineProperty(_ref, modifier('start'), function (_) {
    return justStart;
  }), _defineProperty(_ref, modifier('end'), function (_) {
    return justEnd;
  }), _defineProperty(_ref, modifier('column'), function (_) {
    return column;
  }), _defineProperty(_ref, modifier('column-reverse'), function (_) {
    return columnReverse;
  }), _defineProperty(_ref, modifier('row-reverse'), function (_) {
    return rowReverse;
  }), _defineProperty(_ref, modifier('align-stretch'), function (_) {
    return alignStretch;
  }), _defineProperty(_ref, modifier('align-center'), function (_) {
    return alignCenter;
  }), _defineProperty(_ref, modifier('align-start'), function (_) {
    return alignStart;
  }), _defineProperty(_ref, modifier('centered'), function (_) {
    return centered;
  }), _defineProperty(_ref, modifier('cover'), function (_) {
    return cover;
  }), _defineProperty(_ref, modifier('wrap'), function (_) {
    return wrap;
  }), _defineProperty(_ref, modifier('nowrap'), function (_) {
    return nowrap;
  }), _defineProperty(_ref, modifier('wrap-reverse'), function (_) {
    return wrapReverse;
  }), _defineProperty(_ref, modifier('content-start'), function (_) {
    return contentStart;
  }), _ref), className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children));
});

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest(props, ["attr", "title"]);

    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
var TiWarning = function (props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "version": "1.2",
      "baseProfile": "tiny",
      "viewBox": "0 0 24 24"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M21.171 15.398l-5.912-9.854c-.776-1.293-1.963-2.033-3.259-2.033s-2.483.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83.636 1.126 1.878 1.772 3.406 1.772h12c1.528 0 2.77-.646 3.406-1.771.637-1.125.551-2.521-.235-3.831zm-9.171 2.151c-.854 0-1.55-.695-1.55-1.549 0-.855.695-1.551 1.55-1.551s1.55.696 1.55 1.551c0 .854-.696 1.549-1.55 1.549zm1.633-7.424c-.011.031-1.401 3.468-1.401 3.468-.038.094-.13.156-.231.156s-.193-.062-.231-.156l-1.391-3.438c-.09-.233-.129-.443-.129-.655 0-.965.785-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .212-.039.422-.117.625z"
      }
    }]
  })(props);
};
TiWarning.displayName = "TiWarning";

// THIS FILE IS AUTO GENERATED
var GoGear = function (props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 14 16"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "fillRule": "evenodd",
        "d": "M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
      }
    }]
  })(props);
};
GoGear.displayName = "GoGear";
var GoKebabVertical = function (props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 3 16"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "fillRule": "evenodd",
        "d": "M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
      }
    }]
  })(props);
};
GoKebabVertical.displayName = "GoKebabVertical";

var CLASSES = {
  BUTTON: 'button',
  BADGE: 'badge-dot',
  ICON: 'icon',
  SIDEBAR: 'sidebar'
};
var SIZE_PROPS = ['xs', 's', 'm', 'l', 'xl'];
var STATE_PROPS = ['red', 'orange', 'green', 'gray'];

var _bem$1 = bem(CLASSES.ICON),
    _bem2$1 = _slicedToArray(_bem$1, 3),
    __base_class$1 = _bem2$1[0],
    element$1 = _bem2$1[1],
    modifier$1 = _bem2$1[2];

var withIconsModifiers = compositeJs.compose(withBaseClass(__base_class$1), withModifiers(function (x) {
  return modifier$1(x);
}, SIZE_PROPS), wrapComponent(divElement));
var Hamburger = withIconsModifiers(gi.GiHamburgerMenu);
var Warning = withIconsModifiers(TiWarning);
var Call = withIconsModifiers(md.MdCall);
var CallEnd = withIconsModifiers(md.MdCallEnd);
var ArrowForward = withIconsModifiers(md.MdArrowForward);
var ArrowBack = withIconsModifiers(md.MdArrowBack);
var Camera = withIconsModifiers(md.MdCameraAlt);
var AttachFile = withIconsModifiers(md.MdAttachFile);
var Voice = withIconsModifiers(md.MdKeyboardVoice);
var Videocam = withIconsModifiers(md.MdVideocam);
var PersonAdd = withIconsModifiers(md.MdPersonAdd);
var LocalPhone = withIconsModifiers(md.MdLocalPhone);
var Trash = withIconsModifiers(fa.FaRegTrashAlt);
var PowerOff = withIconsModifiers(fa.FaPowerOff);
var Kebab = withIconsModifiers(GoKebabVertical);
var Gear = withIconsModifiers(GoGear);
var Upload = withIconsModifiers(md.MdCloudUpload);

var index$1 = /*#__PURE__*/Object.freeze({
__proto__: null,
Warning: Warning,
Call: Call,
CallEnd: CallEnd,
ArrowForward: ArrowForward,
ArrowBack: ArrowBack,
Camera: Camera,
AttachFile: AttachFile,
Voice: Voice,
Videocam: Videocam,
PersonAdd: PersonAdd,
LocalPhone: LocalPhone,
Trash: Trash,
PowerOff: PowerOff,
Kebab: Kebab,
Gear: Gear,
Hamburger: Hamburger,
Upload: Upload
});

var Headline = withBaseClass('headline');
var Layout = applyModifiers({
  'justBetween': true
});
var enhance = compositeJs.compose(Layout, Headline);
var Header = enhance(LayoutFlex);

var _bem$2 = bem('button'),
    _bem2$2 = _slicedToArray(_bem$2, 3),
    BASE_CLASS = _bem2$2[0],
    element$2 = _bem2$2[1],
    modifier$2 = _bem2$2[2];

var button_styles = ['text', 'navbar', 'outlined', 'clear', 'round'];
var button_default_style = 'contained';
var withBaseButtonsModifiers = compositeJs.compose(withModifiers(function (x) {
  return modifier$2(x);
}, [button_default_style].concat(button_styles, ['fit', 'success', 'failure'])));
var Button = function Button(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/React__default.createElement("button", rest, children);
};
var enhance$1 = compositeJs.compose(withBaseClass(BASE_CLASS), applyModifiers(_defineProperty({}, button_default_style, true), button_styles), // if no style, we want it to be contained
withBaseButtonsModifiers);
var Button$1 = enhance$1(Button);
/*
export default  props => {
  const {className,contained,clear,round,text,outlined,navbar,success,failure,fit, ...rest} = props
  const classes = cEx([
    "button",
    className,
    _=> (!contained&&!text && !clear&& !round && !outlined  && !navbar) ? "contained": "",
    {
      'contained':_=>contained === true,
      'text':_=>text === true ,
      'navbar': _=> navbar===true,
      'outlined':_=>outlined === true,
      'fit':_=>fit === true,
      'round': _=> round ===true,
      'success': _=> success ===true,
      'failure': _=> failure ===true,
      'clear': _=> clear ===true
    },
    _=> (navbar === true ) ? 'button--icon': '',


  ])
  return (
    <button className={classes} {...rest}>{props.children}</button>
  )
}
*/

var DefaultToolbar = (function (props) {
  var className = props.className,
      handleAdd = props.handleAdd,
      handleConfig = props.handleConfig,
      handleShutdown = props.handleShutdown;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(LayoutFlex, {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleAdd
  }, /*#__PURE__*/React__default.createElement(PersonAdd, null)), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleConfig
  }, /*#__PURE__*/React__default.createElement(Gear, null)), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleShutdown
  }, /*#__PURE__*/React__default.createElement(PowerOff, null)));
});

var Content = function Content(props) {
  var children = props.children,
      handleClick = props.handleClick,
      rest = _objectWithoutProperties(props, ["children", "handleClick"]);

  return /*#__PURE__*/React__default.createElement("section", rest, children, React__default.Children.toArray(children).length === 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "empty-list"
  }, "Aucun contact", /*#__PURE__*/React__default.createElement(Button$1, {
    onClick: handleClick
  }, "Inviter un contact")));
};

var Header$1 = function Header$1(props) {
  var className = props.className,
      handleBack = props.handleBack,
      title = props.title,
      Toolbar = props.Toolbar,
      displayToolbar = props.displayToolbar,
      rest = _objectWithoutProperties(props, ["className", "handleBack", "title", "Toolbar", "displayToolbar"]);

  return /*#__PURE__*/React__default.createElement(Header, {
    className: className
  }, /*#__PURE__*/React__default.createElement(LayoutFlex, null, handleBack && /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleBack
  }, /*#__PURE__*/React__default.createElement(Hamburger, null)), /*#__PURE__*/React__default.createElement("h2", null, title)), Toolbar && displayToolbar && /*#__PURE__*/React__default.createElement(Toolbar, rest) || displayToolbar && /*#__PURE__*/React__default.createElement(DefaultToolbar, rest));
};

var View = function View(props) {
  var title = props.title,
      handleBack = props.handleBack,
      Toolbar = props.Toolbar,
      handleNewGuest = props.handleNewGuest,
      displayToolbar = props.displayToolbar,
      rest = _objectWithoutProperties(props, ["title", "handleBack", "Toolbar", "handleNewGuest", "displayToolbar"]);

  var _filterPropStartingWi = ReactUtils_10('toolbar', rest),
      _filterPropStartingWi2 = _slicedToArray(_filterPropStartingWi, 2),
      toolbarProps = _filterPropStartingWi2[0],
      remaining = _filterPropStartingWi2[1];

  return /*#__PURE__*/React__default.createElement("div", remaining, /*#__PURE__*/React__default.createElement(WaitingRoomHeader, _extends({}, toolbarProps, {
    title: title,
    handleBack: handleBack,
    Toolbar: Toolbar,
    displayToolbar: displayToolbar
  })), /*#__PURE__*/React__default.createElement(WaitingRoomContent, {
    handleClick: handleNewGuest
  }, props.children));
};

var _bem$3 = bem('waiting-room'),
    _bem2$3 = _slicedToArray(_bem$3, 3),
    __base_class$2 = _bem2$3[0],
    element$3 = _bem2$3[1],
    modifier$3 = _bem2$3[2];

var __content_class = element$3('content');

var __header_class = element$3('header');

var WaitingRoomContent = compositeJs.compose(withBaseClass(__content_class))(Content);
var WaitingRoomHeader = compositeJs.compose(withBaseClass(__header_class))(Header$1);
var WaitingRoom = compositeJs.compose(withBaseClass(__base_class$2))(View);

var _bem$4 = bem(CLASSES.BADGE),
    _bem2$4 = _slicedToArray(_bem$4, 3),
    BASE_CLASS$1 = _bem2$4[0],
    element$4 = _bem2$4[1],
    modifier$4 = _bem2$4[2];

var withBadgeModifiers = compositeJs.compose(withModifiers(function (x) {
  return modifier$4(x);
}, STATE_PROPS), withModifiers(function (x) {
  return modifier$4(x);
}, SIZE_PROPS));
var enhance$2 = compositeJs.compose(withBaseClass(BASE_CLASS$1), // transform status props to modifier
withTransformedProps(function (x) {
  return modifier$4(x);
}, ['status']), withBadgeModifiers, applyModifiers({
  'centered': true
}));
var Badge = enhance$2(LayoutFlex);

var Geometry = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _typeof(obj) {
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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  /**
   * Compose several unary function into one function. Execution is done from right to left
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */


  var compose = function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  };
  /**
   * Compose several unary function into one function. Execution is done left to right
   *
   * @func
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   */


  var pipe = function pipe() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return b(a.apply(void 0, arguments));
      };
    });
  };
  /**
  * The core of curry
  *
  * @func
  * @category Function
  * @sig Function -> Number -> Function -> ...Arguments -> Function
  * @param {Function}
  * @param {Integer}
  * @param {Function}
  * @param {...Any}
  * @return {Function}
  
  */


  var callCurry = function callCurry(namedCurryFunction) {
    return function (arity) {
      return function (fn) {
        return function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          if (args.length < arity) {
            return namedCurryFunction.bind.apply(namedCurryFunction, [null].concat(args));
          }

          return fn.call.apply(fn, [null].concat(args));
        };
      };
    };
  };
  /**
   * Curryify a function. Allow the function to be called with less parameters that it needs and return a function with the
   * remaining parameters
   *
   * @func
   * @category Function
   * @sig ((a, b, ...) -> c) -> a -> b -> ... -> c
   * @param {Function} function the function to currify
   * @return {Function}
   */


  var curry = function curry(fn) {
    var arity = fn.length;
    return function $curry() {
      return callCurry($curry)(arity)(fn).apply(void 0, arguments);
    };
  }; // curryN :: ((a, b, ...),(a, b, ...)) ->(a, b, ...) -> c) -> a -> b -> ... -> c

  /**
   * Identity function
   *
   * @func
   * @category Function
   * @sig
   * @param {Any}
   * @return {Any}
   * @see compose
   * @see diverge
   *
   */


  var identity = function identity(x) {
    return x;
  }; // flip :: ((a,b)->c)  -> a -> b -> (b,a) -> c
  // flip :: (a -> b -> c) -> b -> a -> c

  /**
   * flip two arguments of a function
   *
   * @func
   * @category Function
   * @sig ( FN -> b -> c)  ->
   * @param {Function}
   * @return {Curry}
   * @see compose
   * @see curry
   *
   */


  var flip = curry(function (fn, a, b) {
    return fn(b, a);
  }); // map :: fn f => (a -> b) -> f a -> f b
  // map :: Functor f => (a -> b) -> f a -> f b

  var map = curry(function (fn, f) {
    return f.map(fn);
  }); // join :: Monad m => m (m a) -> m a

  var maybe = curry(function (value, fn, functor) {
    if (functor.isNothing) {
      return value;
    }

    return fn(functor.$value);
  });

  var Maybe = /*#__PURE__*/function () {
    _createClass(Maybe, [{
      key: "isNothing",
      get: function get() {
        return this.$value === null || this.$value === undefined;
      }
    }, {
      key: "isJust",
      get: function get() {
        return !this.isNothing;
      }
    }]);

    function Maybe(x) {
      _classCallCheck(this, Maybe);

      this.$value = x;
    }
    /*[util.inspect.custom]() {
      return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
    }*/
    // ----- Pointed Maybe


    _createClass(Maybe, [{
      key: "map",
      // ----- Functor Maybe
      value: function map(fn) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
      } // ----- Applicative Maybe

    }, {
      key: "ap",
      value: function ap(f) {
        return this.isNothing ? this : f.map(this.$value);
      } // ----- Monad Maybe

    }, {
      key: "chain",
      value: function chain(fn) {
        return this.map(fn).join();
      }
    }, {
      key: "join",
      value: function join() {
        return this.isNothing ? this : this.$value;
      } // ----- Traversable Maybe

    }, {
      key: "sequence",
      value: function sequence(of) {
        return this.traverse(of, identity);
      }
    }, {
      key: "traverse",
      value: function traverse(of, fn) {
        return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
      }
    }], [{
      key: "of",
      value: function of(x) {
        return new Maybe(x);
      }
    }]);

    return Maybe;
  }();

  var trace = curry(function (tag, value) {
    console.log(tag, value);
    return value;
  });
  var trace_keys = curry(function (tag, value) {
    console.log(tag, Object.keys(value));
    return value;
  });
  var supertrace = curry(function (prefix, tag, value) {
    return trace(prefix + ' ' + tag, value);
  });
  var trace_prop = curry(function (tag, prop, value) {
    console.log(tag, value[prop]);
    return value;
  });

  var _OR_ = curry(function (a, b, x) {
    return a(x) || b(x);
  });

  var _AND_ = curry(function (a, b, x) {
    return a(x) && b(x);
  });

  var _NOT_ = curry(function (a, x) {
    return !a(x);
  }); //export const isStrictlyEqual = curry((value,item)=> value===item)


  var isStrictlyEqual = curry(function (value, item) {
    return value === item;
  });

  var _typeof$1 = function _typeof$1(value) {
    return _typeof(value);
  };

  var is_type = function is_type(val) {
    return compose(isStrictlyEqual(val), _typeof$1);
  };

  var is_type_string = is_type('string');
  var is_type_function = is_type('function');
  var is_type_number = is_type('number');
  var is_undefined = is_type('undefined');

  var isNull = function isNull(x) {
    return x === null;
  };

  var is_type_bool = is_type('boolean');

  var isNil = _OR_(isNull, is_undefined); //fucky number test in js can suck on this shit ..!..


  var defaultTo = function defaultTo(val) {
    return compose(maybe(val, identity), Maybe.of);
  };

  var assign2 = curry(function (x, y) {
    return Object.assign({}, x, y);
  });

  var _merge = curry(function (a, b) {
    return assign2(a, b);
  });

  var prop = curry(function (prop, obj) {
    return obj[prop];
  });

  var keys = function keys(o) {
    return Object.keys(o);
  }; // String => Object => Object


  var omit_key = curry(function (_omit, obj) {
    var o = {};
    Object.keys(obj).map(function (key) {
      if (key !== _omit) {
        o[key] = obj[key];
      }
    });
    return o;
  });
  var ensure_object_copy = assign2({});
  /*
    String -> String -> Object -> Object
  */

  var as_object_prop = curry(function (key, value, object) {
    var o = _objectSpread2({}, object);

    o[key] = value;
    return o;
  }); //  a -> b -> Object

  var as_prop = curry(function (key, value) {
    return flip(as_object_prop(key), defaultTo({}), value);
  });
  /*
   Spec
    for a given object for which values are function  returns a new object with
  
    {
      x: fn(a,b),
      y: fn(a,b,c),
    }
  
    spec(obj,a)
    => {
      x: fn(a,b)(a)
      y: fn(a,b,c)(a)
    }
  
  */
  //Object -> List

  var enlist = curry(function (obj) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x]);
    }))(obj);
  });
  var axisIntersects = curry(function (dimension, offset, length) {
    return offset + length > 0 && offset < dimension;
  });
  var axisContains = curry(function (dimension, offset, length) {
    return axisIntersects(dimension, offset, length) && offset >= 0 && offset + length <= dimension;
  });
  var X = prop('x');
  var Y = prop('y');
  var Width = prop('width');
  var Height = prop('height');

  var YDimension = function YDimension(rect) {
    return [Y(rect), Height(rect)];
  };

  var XDimension = function XDimension(rect) {
    return [X(rect), Width(rect)];
  }; // returns 0 if contained -1 if overlapping on left , 1 if overlapping on right


  var NormalizedDirection = curry(function (dimension, offset, length) {
    return axisContains(dimension, offset, length) ? 0 : offset + length <= dimension / 2 ? -1 : 1;
  });

  var windowRect = function windowRect(window) {
    return {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  };

  var rectIntersectRect = curry(function (rectA, rectB) {
    return axisIntersects.apply(void 0, [Width(rectA)].concat(_toConsumableArray(XDimension(rectB)))) && axisIntersects.apply(void 0, [Height(rectA)].concat(_toConsumableArray(YDimension(rectB))));
  });
  var rectContainsRect = curry(function (rectA, rectB) {
    return axisContains.apply(void 0, [Width(rectA)].concat(_toConsumableArray(XDimension(rectB)))) && axisContains.apply(void 0, [Height(rectA)].concat(_toConsumableArray(YDimension(rectB))));
  }); //return a new offset depending on direction , assuming that the dimension is intersecting the other

  var constrainAxis = curry(function (dimension, offset, length) {
    var normalizedDirection = NormalizedDirection(dimension, offset, length);
    return normalizedDirection !== 0 ? normalizedDirection == -1 ? 0 : dimension - length : offset;
  });
  var constrainInRect = curry(function (rectA, rectB) {
    if (!rectContainsRect(rectA, rectB)) {
      return _objectSpread2({}, rectB, {
        x: constrainAxis.apply(void 0, [Width(rectA)].concat(_toConsumableArray(XDimension(rectB)))),
        y: constrainAxis.apply(void 0, [Height(rectA)].concat(_toConsumableArray(YDimension(rectB))))
      });
    }

    return rectB;
  });
  exports.Height = Height;
  exports.NormalizedDirection = NormalizedDirection;
  exports.Width = Width;
  exports.X = X;
  exports.XDimension = XDimension;
  exports.Y = Y;
  exports.YDimension = YDimension;
  exports.axisContains = axisContains;
  exports.axisIntersects = axisIntersects;
  exports.constrainAxis = constrainAxis;
  exports.constrainInRect = constrainInRect;
  exports.rectContainsRect = rectContainsRect;
  exports.rectIntersectRect = rectIntersectRect;
  exports.windowRect = windowRect;
});
unwrapExports(Geometry);
var Geometry_1 = Geometry.Height;
var Geometry_2 = Geometry.NormalizedDirection;
var Geometry_3 = Geometry.Width;
var Geometry_4 = Geometry.X;
var Geometry_5 = Geometry.XDimension;
var Geometry_6 = Geometry.Y;
var Geometry_7 = Geometry.YDimension;
var Geometry_8 = Geometry.axisContains;
var Geometry_9 = Geometry.axisIntersects;
var Geometry_10 = Geometry.constrainAxis;
var Geometry_11 = Geometry.constrainInRect;
var Geometry_12 = Geometry.rectContainsRect;
var Geometry_13 = Geometry.rectIntersectRect;
var Geometry_14 = Geometry.windowRect;

var _bem$5 = bem('list-item'),
    _bem2$5 = _slicedToArray(_bem$5, 3),
    __base_class$3 = _bem2$5[0],
    element$5 = _bem2$5[1],
    modifier$5 = _bem2$5[2];

var CellContent = compositeJs.compose(withBaseClass(element$5('content')))(LayoutFlex);
var CellOptionalContent = compositeJs.compose(withBaseClass(element$5('optional-content')))(LayoutFlex);
var Cell = compositeJs.compose(withBaseClass(__base_class$3), applyModifiers({
  'justBetween': true
}))(LayoutFlex);

var Component = function Component(props) {
  var Icon = props.Icon,
      label = props.label,
      Optional = props.Optional,
      handleClick = props.handleClick,
      rest = _objectWithoutProperties(props, ["Icon", "label", "Optional", "handleClick"]);

  var _handleClick = function _handleClick(e) {
    handleClick && handleClick(e);
    e.stopPropagation();
  };

  return /*#__PURE__*/React__default.createElement(Cell, _extends({
    onClick: _handleClick
  }, rest), /*#__PURE__*/React__default.createElement(CellContent, null, Icon && /*#__PURE__*/React__default.createElement(Icon, null), props.children), /*#__PURE__*/React__default.createElement(CellOptionalContent, null, Optional && /*#__PURE__*/React__default.createElement(Optional, null)));
};

var ContextualMenu = function ContextualMenu(props) {
  var me = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibleState = _useState2[0],
      setVisibleState = _useState2[1];

  var className = props.className,
      handleDiscard = props.handleDiscard,
      callback = props.callback,
      visible = props.visible,
      options = props.options,
      rest = _objectWithoutProperties(props, ["className", "handleDiscard", "callback", "visible", "options"]);

  var classes = genClasses.cEx([function (_) {
    return visibleState !== true ? 'contextual-menu--state-closed' : '';
  }, className]);

  var closeme = function closeme(e) {
    setVisibleState(false);
    handleDiscard && handleDiscard();
    e.stopPropagation();
  };

  React.useEffect(function () {
    setVisibleState(visible);
  }, [visible]);
  React.useEffect(function () {
    if (visibleState === true) {
      if (me.current) {
        var cRect = Geometry_14(window);
        var rect = Geometry_11(cRect, me.current.getBoundingClientRect());
        me.current.style.top = "".concat(rect.y, "px");
        me.current.style.left = "".concat(rect.x, "px");
      }

      window.addEventListener('click', closeme);
    } else {
      setVisibleState(false);
    }

    return function () {
      window.removeEventListener('click', closeme);
    };
  }, [visibleState]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    ref: me,
    className: classes
  }, rest), options.map(function (item) {
    return /*#__PURE__*/React__default.createElement(Component, {
      key: item.id,
      Icon: item.Icon,
      onClick: function onClick(e) {
        if (item.callback) {
          item.callback(item.id);
        } else {
          callback && callback(item.id);
        }

        e.stopPropagation();
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, item.label));
  }));
};

var ContextMenu = withBaseClass('contextual-menu')(ContextualMenu);

var UserInfo = function UserInfo(_ref) {
  var name = _ref.name,
      phone = _ref.phone,
      email = _ref.email,
      birthdate = _ref.birthdate;
  return /*#__PURE__*/React__default.createElement(LayoutFlex, {
    column: true,
    alignStart: true
  }, /*#__PURE__*/React__default.createElement("h2", null, name), /*#__PURE__*/React__default.createElement("div", {
    className: "phone"
  }, phone), /*#__PURE__*/React__default.createElement("div", {
    className: "email"
  }, email), /*#__PURE__*/React__default.createElement("div", {
    className: "birthdate"
  }, birthdate));
};

var LeftPart = function LeftPart(_ref2) {
  var status = _ref2.status,
      contact = _ref2.contact,
      rest = _objectWithoutProperties(_ref2, ["status", "contact"]);

  return /*#__PURE__*/React__default.createElement(LayoutFlex, rest, /*#__PURE__*/React__default.createElement(Badge, {
    m: true,
    status: status
  }), /*#__PURE__*/React__default.createElement(UserInfo, contact));
};

var RightPart = function RightPart(_ref3) {
  var status = _ref3.status,
      menu = _ref3.menu,
      handleClick = _ref3.handleClick,
      rest = _objectWithoutProperties(_ref3, ["status", "menu", "handleClick"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuVisible = _useState2[0],
      setMenuVisible = _useState2[1];

  return /*#__PURE__*/React__default.createElement(LayoutFlex, rest, status && /*#__PURE__*/React__default.createElement(Badge, {
    m: true,
    status: status
  }), menu && /*#__PURE__*/React__default.createElement(ContextMenu, {
    options: menu,
    handleDiscard: function handleDiscard(_) {
      return setMenuVisible(false);
    },
    callback: handleClick,
    visible: menuVisible
  }), /*#__PURE__*/React__default.createElement(Button$1, {
    clear: true,
    onClick: function onClick(e) {
      if (menu) {
        setMenuVisible(!menuVisible);
      } else {
        handleClick && handleClick(e);
      }

      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(Kebab, {
    s: true
  })));
};

var _bem$6 = bem('patient-item'),
    _bem2$6 = _slicedToArray(_bem$6, 3),
    BASE_CLASS$2 = _bem2$6[0],
    element$6 = _bem2$6[1],
    modifier$6 = _bem2$6[2];

var Container = compositeJs.compose(withBaseClass(BASE_CLASS$2), applyModifiers({
  justBetween: true,
  alignStretch: true
}))(LayoutFlex);
var ContactInfo = compositeJs.compose(withBaseClass(element$6('contact')))(LeftPart);
var ContactMenu = compositeJs.compose(withBaseClass(element$6('toolbar')))(RightPart);

var Contact = function Contact(props) {
  var status = props.status,
      contact = props.contact,
      secondaryStatus = props.secondaryStatus,
      handleClick = props.handleClick,
      handleContextual = props.handleContextual,
      contextualMenu = props.contextualMenu,
      rest = _objectWithoutProperties(props, ["status", "contact", "secondaryStatus", "handleClick", "handleContextual", "contextualMenu"]);

  if (handleContextual && contextualMenu) {
    console.warn('handleContextual && contextualMenu are mutually exclusive. Menu is used in priority');
  }

  return /*#__PURE__*/React__default.createElement(Container, _extends({
    onClick: handleClick
  }, rest), /*#__PURE__*/React__default.createElement(ContactInfo, {
    contact: contact,
    status: status
  }), /*#__PURE__*/React__default.createElement(ContactMenu, {
    menu: contextualMenu,
    status: secondaryStatus,
    handleClick: handleContextual
  }));
};

var defaultSubmit = function defaultSubmit(e) {
  console.warn('you didnt set onSubmit');
  e.preventDefault();
};

var index$2 = (function (props) {
  var className = props.className,
      onSubmit = props.onSubmit,
      rest = _objectWithoutProperties(props, ["className", "onSubmit"]);

  var _onSubmit = onSubmit || defaultSubmit;

  return /*#__PURE__*/React__default.createElement("form", _extends({
    className: genClasses.cEx(["basic-form", function (_) {
      return className;
    }]),
    onSubmit: _onSubmit
  }, rest), props.children);
});

var Checkbox = function Checkbox(props) {
  var className = props.className,
      checked = props.checked,
      rest = _objectWithoutProperties(props, ["className", "checked"]);

  var cb = React.useRef();

  var _useState = React.useState(checked),
      _useState2 = _slicedToArray(_useState, 2),
      check = _useState2[0],
      setChecked = _useState2[1];
  /*   const classes = cEx([
       "input-checkbox",
       className
     ])
   */


  var handleClick = function handleClick(_) {
    if (cb.current) {
      cb.current.click();
      setChecked(cb.current.checked);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: className
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "container",
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    ref: cb,
    checked: check,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React__default.createElement("span", {
    className: "checkmark"
  })));
};
var InputCheckbox = withBaseClass('input-checkbox')(Checkbox);

var InputComponent = (function (props) {
  var type = props.type,
      id = props.id,
      rest = _objectWithoutProperties(props, ["type", "id"]);

  var _type = type || 'text';

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, type !== "checkbox" && /*#__PURE__*/React__default.createElement(InputMask, _extends({
    id: id,
    type: _type,
    autoComplete: "off"
  }, rest)), type === "checkbox" && /*#__PURE__*/React__default.createElement(InputCheckbox, _extends({
    id: id
  }, rest)));
});

/* external imports */

var BEM = makeBem('single-input');
var labelBem = BEM.make.element('label');
var inputBem = BEM.make.element('input');
var Label = compositeJs.compose(withBem(labelBem), withModifiers(function (x) {
  return labelBem.modifier(x);
}, ['error']))(baseElement('label'));
var Error$1 = compositeJs.compose(withBem(BEM.make.element('error')))(baseElement('div'));
var Container$1 = compositeJs.compose(withBem(BEM), withModifiers(function (x) {
  return BEM.modifier(x);
}, ['error']), withModifiers(function (k, v) {
  return BEM.modifier("".concat(k, "-").concat(v));
}, ['checkbox']), applyModifiers({
  column: true,
  alignStart: true
}))(LayoutFlex);
var Input = compositeJs.compose(withBem(inputBem), withModifiers(function (x) {
  return inputBem.modifier(x);
}, ['error']))(InputComponent);
var Input$1 = (function (props) {
  var label = props.label,
      id = props.id,
      error = props.error,
      checkbox = props.checkbox,
      rest = _objectWithoutProperties(props, ["label", "id", "error", "checkbox"]);

  var _makePropsFilter = makePropsFilter('flex'),
      _makePropsFilter2 = _slicedToArray(_makePropsFilter, 2),
      filterFlex = _makePropsFilter2[0],
      forwardFlex = _makePropsFilter2[1];

  var _makePropsFilter3 = makePropsFilter('label'),
      _makePropsFilter4 = _slicedToArray(_makePropsFilter3, 2),
      filterLabel = _makePropsFilter4[0],
      forwardLabel = _makePropsFilter4[1];

  var _makePropsFilter5 = makePropsFilter('input'),
      _makePropsFilter6 = _slicedToArray(_makePropsFilter5, 2),
      filterInput = _makePropsFilter6[0],
      forwardInput = _makePropsFilter6[1];

  var _filterFlex = filterFlex(rest),
      _filterFlex2 = _slicedToArray(_filterFlex, 2),
      _flexProps = _filterFlex2[0],
      notFlexProps = _filterFlex2[1];

  var _filterLabel = filterLabel(notFlexProps),
      _filterLabel2 = _slicedToArray(_filterLabel, 2),
      _labelProps = _filterLabel2[0],
      notLabelProps = _filterLabel2[1];

  var _filterInput = filterInput(notLabelProps),
      _filterInput2 = _slicedToArray(_filterInput, 2),
      _inputProps = _filterInput2[0],
      notInputProps = _filterInput2[1]; // default type to text 


  return /*#__PURE__*/React__default.createElement(Container$1, _extends({
    error: error,
    checkbox: checkbox
  }, forwardFlex(_flexProps)), /*#__PURE__*/React__default.createElement(Label, _extends({
    error: error,
    htmlFor: id
  }, forwardLabel(_labelProps)), label, error && error !== true && /*#__PURE__*/React__default.createElement(Error$1, null, error)), /*#__PURE__*/React__default.createElement(Input, _extends({
    id: id,
    error: error
  }, forwardInput(_inputProps), notInputProps)));
});

var index$3 = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      rest = _objectWithoutProperties(props, ["label", "id", "className"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-select"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "single-select__select"
  }, /*#__PURE__*/React__default.createElement("select", _extends({
    id: id
  }, rest), props.children)));
});

var BackButton = (function (props) {
  var className = props.className,
      handleBack = props.handleBack;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, handleBack && /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleBack
  }, /*#__PURE__*/React__default.createElement(ArrowBack, null)));
});

var index$4 = (function (props) {
  var label = props.label,
      type = props.type,
      centered = props.centered,
      className = props.className,
      inverse = props.inverse;
  var classes = genClasses.cEx(['loading', {
    'loading--align-center': function loadingAlignCenter(_) {
      return centered === true;
    },
    'loading--just-center': function loadingJustCenter(_) {
      return centered === true;
    },
    'loading--inverse': function loadingInverse(_) {
      return inverse === true;
    }
  }, className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, label && /*#__PURE__*/React__default.createElement("h3", null, label), /*#__PURE__*/React__default.createElement(ReactLoading, {
    color: "",
    type: type || "bubbles"
  }));
});

var Footer = withBaseClass('footer');
var Layout$1 = applyModifiers({
  'justEvenly': true
});
var enhance$3 = compositeJs.compose(Layout$1, Footer);
enhance$3(LayoutFlex);

var index$5 = (function (props) {
  var incoming = props.incoming,
      handleAnswer = props.handleAnswer,
      handleDiscard = props.handleDiscard,
      className = props.className,
      rest = _objectWithoutProperties(props, ["incoming", "handleAnswer", "handleDiscard", "className"]);

  var classes = genClasses.cEx(['answer_call', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/React__default.createElement("div", {
    className: "children"
  }, props.children), /*#__PURE__*/React__default.createElement("div", {
    className: "toolbox"
  }, incoming && /*#__PURE__*/React__default.createElement(Button$1, {
    round: true,
    success: true,
    onClick: handleAnswer,
    fit: true
  }, " ", /*#__PURE__*/React__default.createElement(md.MdCall, null), " "), /*#__PURE__*/React__default.createElement(Button$1, {
    round: true,
    fit: true,
    failure: true,
    onClick: handleDiscard
  }, " ", /*#__PURE__*/React__default.createElement(md.MdCallEnd, null), " ")));
});

var Video = (function (props) {
  var myRef = React.useRef();

  var srcObject = props.srcObject,
      className = props.className,
      preview = props.preview,
      rest = _objectWithoutProperties(props, ["srcObject", "className", "preview"]);

  var classes = genClasses.cEx(['video', className, {
    'video--preview': function videoPreview(_) {
      return preview;
    }
  }]);
  React.useEffect(function () {
    if (srcObject && myRef.current) {
      myRef.current.srcObject = srcObject;
    }
  }, [srcObject]);
  return /*#__PURE__*/React__default.createElement("video", _extends({
    ref: myRef,
    className: classes
  }, rest));
});

var index$6 = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['active-call', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children);
});

var index$7 = (function (props) {
  var HiddenComponent = props.HiddenComponent,
      VisibleComponent = props.VisibleComponent;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      _visible = _useState2[0],
      setVisible = _useState2[1];

  return /*#__PURE__*/React__default.createElement("div", {
    className: genClasses.cEx(['debug-panel', {
      'visible': function visible(_) {
        return _visible === true;
      },
      'hidden': function hidden(_) {
        return _visible !== true;
      }
    }])
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "content-closed"
  }, /*#__PURE__*/React__default.createElement(HiddenComponent, {
    openHandler: function openHandler(_) {
      return setVisible(true);
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React__default.createElement(VisibleComponent, {
    closeHandler: function closeHandler(_) {
      return setVisible(false);
    }
  })));
});

var _bem$7 = bem('sidebar'),
    _bem2$7 = _slicedToArray(_bem$7, 3),
    __base_class$4 = _bem2$7[0],
    element$7 = _bem2$7[1],
    modifier$7 = _bem2$7[2];

var Component$1 = compositeJs.compose(withBaseClass(__base_class$4), withModifiers(function (x) {
  return modifier$7(x);
}, ['closed']))(baseElement('aside'));

var _bem$8 = bem('list'),
    _bem2$8 = _slicedToArray(_bem$8, 3),
    __base_class$5 = _bem2$8[0],
    element$8 = _bem2$8[1],
    modifier$8 = _bem2$8[2];

var index$8 = compositeJs.compose(withBaseClass(__base_class$5), applyModifiers({
  column: true
}))(LayoutFlex);

var _bem$9 = bem('user_status'),
    _bem2$9 = _slicedToArray(_bem$9, 3),
    __base_class$6 = _bem2$9[0],
    element$9 = _bem2$9[1],
    modifier$9 = _bem2$9[2];

var UserStatusContainer = compositeJs.compose(applyModifiers({
  'alignStart': true
}), withBaseClass(__base_class$6))(LayoutFlex);
var UserBadge = withBaseClass(element$9('badge'))(Badge);
var UserNameAndStatus = compositeJs.compose(applyModifiers({
  'column': true,
  'alignStart': true
}), withBaseClass(element$9('name')))(LayoutFlex);

var UserStatusComponent = function UserStatusComponent(props) {
  var title = props.title,
      subtitle = props.subtitle,
      badge = props.badge,
      rest = _objectWithoutProperties(props, ["title", "subtitle", "badge"]);

  return /*#__PURE__*/React__default.createElement(UserStatusContainer, rest, badge && /*#__PURE__*/React__default.createElement(UserBadge, {
    status: badge
  }), /*#__PURE__*/React__default.createElement(UserNameAndStatus, null, /*#__PURE__*/React__default.createElement("h2", null, title), subtitle && /*#__PURE__*/React__default.createElement("p", null, subtitle)));
};

var ChatHeaderToolbar = (function (props) {
  var handleCall = props.handleCall,
      handleVideoCall = props.handleVideoCall;
  return /*#__PURE__*/React__default.createElement(LayoutFlex, null, /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleVideoCall,
    disabled: typeof handleVideoCall !== 'function'
  }, /*#__PURE__*/React__default.createElement(Videocam, null)), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleCall,
    disabled: typeof handleCall !== 'function'
  }, /*#__PURE__*/React__default.createElement(LocalPhone, null)));
});

var ChatHeader = (function (props) {
  var className = props.className,
      title = props.title,
      subtitle = props.subtitle,
      badge = props.badge,
      showToolbar = props.showToolbar;
  var handleBack = props.handleBack,
      handleCall = props.handleCall,
      handleVideoCall = props.handleVideoCall;
  var callHandlers = {
    handleCall: handleCall,
    handleVideoCall: handleVideoCall
  };
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(Header, null, /*#__PURE__*/React__default.createElement(LayoutFlex, null, /*#__PURE__*/React__default.createElement(BackButton, {
    handleBack: handleBack
  }), /*#__PURE__*/React__default.createElement(UserStatusComponent, {
    badge: badge,
    title: title,
    subtitle: subtitle
  })), showToolbar && /*#__PURE__*/React__default.createElement(ChatHeaderToolbar, callHandlers));
});
/*
import LayoutFlex from 'layouts/Flex'
import {compose,applyModifiers,withBaseClass} from 'utils'; 

const Headline = withBaseClass('headline')
const Layout = applyModifiers({'justBetween':true})
const enhance = compose(Layout,Headline)

export default enhance(LayoutFlex)*/

var ChatInput = (function (props) {
  var className = props.className,
      handleChange = props.handleChange,
      handleSubmit = props.handleSubmit,
      value = props.value,
      rest = _objectWithoutProperties(props, ["className", "handleChange", "handleSubmit", "value"]);

  var classes = genClasses.cEx(['chat-footer__message-input', className]);
  return /*#__PURE__*/React__default.createElement("form", {
    className: classes,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default.createElement(LayoutFlex, {
    alignStretch: true
  }, /*#__PURE__*/React__default.createElement(Input$1, {
    name: "message",
    placeholder: "message",
    autoComplete: "off",
    onChange: handleChange,
    value: value
  }), /*#__PURE__*/React__default.createElement(Button$1, {
    fit: true,
    text: true,
    navbar: true,
    className: "button--send  flex align-center just-center"
  }, /*#__PURE__*/React__default.createElement(ArrowForward, null))));
});

var ChatRecord = (function (props) {
  var className = props.className,
      recording = props.recording,
      handleDelete = props.handleDelete,
      handleSend = props.handleSend,
      record = props.record,
      rest = _objectWithoutProperties(props, ["className", "recording", "handleDelete", "handleSend", "record"]);

  var classes = genClasses.cEx(['chat-footer__message-input', 'flex-row', 'align-stretch', className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, recording && /*#__PURE__*/React__default.createElement("div", null, "Enregistrement"), !recording && record && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("audio", {
    src: record,
    controls: true,
    preload: 'metadata'
  }), /*#__PURE__*/React__default.createElement("button", {
    onClick: handleDelete,
    className: "button button--send text icon--32 flex align-center just-center"
  }, /*#__PURE__*/React__default.createElement(fa.FaRegTrashAlt, null)), /*#__PURE__*/React__default.createElement("button", {
    onClick: handleSend,
    className: "button button--send text icon--32 flex align-center just-center"
  }, /*#__PURE__*/React__default.createElement(md.MdArrowForward, null))));
});

var DefaultToolbar$1 = (function (props) {
  var className = props.className,
      handlePhoto = props.handlePhoto,
      handleFile = props.handleFile,
      handleAudio = props.handleAudio,
      rest = _objectWithoutProperties(props, ["className", "handlePhoto", "handleFile", "handleAudio"]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      capturePic = _useState2[0],
      setCapturePic = _useState2[1];

  var fileUploader = React.useRef();

  var _handleFileSelect = function _handleFileSelect(e) {
    handleFile && handleFile(e);
  };

  var classes = genClasses.cEx(["chat-footer__toolbar", className]);
  return /*#__PURE__*/React__default.createElement(LayoutFlex, _extends({
    justBetween: true,
    className: classes
  }, rest), capturePic && /*#__PURE__*/React__default.createElement(Camera$1, {
    onTakePhoto: function onTakePhoto(x) {
      handlePhoto && handlePhoto(x);
      setCapturePic(false);
    }
  }), /*#__PURE__*/React__default.createElement("input", {
    type: "file",
    id: "file",
    ref: fileUploader,
    onChange: _handleFileSelect,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: function onClick(x) {
      return setCapturePic(true);
    }
  }, /*#__PURE__*/React__default.createElement(Camera, null), /*#__PURE__*/React__default.createElement("h2", null, "photo")), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    disabled: true,
    onClick: function onClick(_) {
      return fileUploader.current.click();
    }
  }, /*#__PURE__*/React__default.createElement(AttachFile, null), /*#__PURE__*/React__default.createElement("h2", null, "Fichier")), /*#__PURE__*/React__default.createElement(Button$1, {
    navbar: true,
    onClick: handleAudio
  }, /*#__PURE__*/React__default.createElement(Voice, null), /*#__PURE__*/React__default.createElement("h2", null, "audio")));
});

var __toolbar_prefix = 'toolbar';
var __input_prefix = 'input';
var __record_prefix = 'record';

var ChatFooter = function ChatFooter(props) {
  var className = props.className,
      recording = props.recording,
      record = props.record,
      afterMainComponent = _objectWithoutProperties(props, ["className", "recording", "record"]);

  var _spreadObjectBeginWit = ReactUtils_10(__toolbar_prefix, afterMainComponent),
      _spreadObjectBeginWit2 = _slicedToArray(_spreadObjectBeginWit, 2),
      toolbarProps = _spreadObjectBeginWit2[0],
      notSuitableForToolbar = _spreadObjectBeginWit2[1];

  var _spreadObjectBeginWit3 = ReactUtils_10(__input_prefix, notSuitableForToolbar),
      _spreadObjectBeginWit4 = _slicedToArray(_spreadObjectBeginWit3, 2),
      inputProps = _spreadObjectBeginWit4[0],
      notSuitableForInput = _spreadObjectBeginWit4[1];

  var _spreadObjectBeginWit5 = ReactUtils_10(__record_prefix, notSuitableForInput),
      _spreadObjectBeginWit6 = _slicedToArray(_spreadObjectBeginWit5, 2),
      recordProps = _spreadObjectBeginWit6[0],
      rest = _spreadObjectBeginWit6[1];

  return /*#__PURE__*/React__default.createElement(LayoutFlex, _extends({
    className: className
  }, rest), /*#__PURE__*/React__default.createElement(DefaultToolbar$1, ReactUtils_5(__toolbar_prefix, toolbarProps)), !recording && !record && /*#__PURE__*/React__default.createElement(ChatInput, ReactUtils_5(__input_prefix, inputProps)), (recording || record) && /*#__PURE__*/React__default.createElement(ChatRecord, _extends({
    recording: recording,
    record: record
  }, ReactUtils_5(__record_prefix, recordProps))));
};

var ClassedComponent = withBaseClass('chat-footer');
var Layout$2 = applyModifiers({
  'column': true
});
var enhance$4 = compositeJs.compose(ClassedComponent, Layout$2);
var ChatFooter$1 = enhance$4(ChatFooter);

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const initState = {
  isRecording: false,
  recorder: null,
  data: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return Object.assign(Object.assign({}, state), {
        isRecording: true
      });

    case 'stop':
      return Object.assign(Object.assign({}, state), {
        isRecording: false
      });

    case 'startRecording':
      return Object.assign(Object.assign({}, state), {
        isRecording: true,
        recorder: action.payload.recorder
      });

    default:
      return state;
  }
};

const useVoiceRecorder = cb => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const finishRecording = ({
    data
  }) => {
    cb(data);
  };

  const start = () => __awaiter(void 0, void 0, void 0, function* () {
    dispatch({
      type: 'start'
    });
    const stream = yield navigator.mediaDevices.getUserMedia({
      audio: true
    });
    const recorder = new MediaRecorder(stream);
    dispatch({
      type: 'startRecording',
      payload: {
        recorder
      }
    });
    recorder.start();
    recorder.addEventListener('dataavailable', finishRecording);
  });

  const stop = () => {
    const recorder = state.recorder;
    dispatch({
      type: 'stop'
    });

    if (recorder) {
      recorder.stop();
      recorder.removeEventListener('dataavailable', finishRecording);
    }
  };

  return {
    start,
    stop,
    recorder: state.recorder,
    isRecording: state.isRecording
  };
};

var index$9 = (function (props) {
  var autoscroll = props.autoscroll,
      dragAndDrop = props.dragAndDrop,
      handleChange = props.handleChange,
      handleSubmit = props.handleSubmit,
      handlePhoto = props.handlePhoto,
      handleFile = props.handleFile,
      handleSound = props.handleSound;
  var remoteBadge = props.remoteBadge,
      remoteName = props.remoteName,
      remoteStatus = props.remoteStatus;
  var handleCall = props.handleCall,
      handleVideoCall = props.handleVideoCall,
      handleBack = props.handleBack,
      showToolbar = props.showToolbar;
  var headerProps = {
    handleCall: handleCall,
    handleVideoCall: handleVideoCall,
    showToolbar: showToolbar,
    handleBack: handleBack
  };

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      shouldAutoscroll = _useState2[0],
      setShouldAutoscroll = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      record = _useState6[0],
      setRecord = _useState6[1];

  var _useVoiceRecorder = useVoiceRecorder(function (data) {
    setRecord(window.URL.createObjectURL(data));
  }),
      isRecording = _useVoiceRecorder.isRecording,
      stopRecording = _useVoiceRecorder.stop,
      startRecording = _useVoiceRecorder.start;

  var _handleChange = function _handleChange(e) {
    setInputValue(e.target.value);
    handleChange && handleChange(e.target.value);
  };

  var _handleSubmit = function _handleSubmit(e) {
    setInputValue('');
    handleSubmit && handleSubmit(inputValue);
    e.preventDefault();
  };

  var chatRef = React.useRef();

  var holdScroll = function holdScroll() {
    setShouldAutoscroll(false);
  };

  var releaseScroll = function releaseScroll() {
    setShouldAutoscroll(true);
  };

  React.useEffect(function () {
    if (chatRef.current && autoscroll && shouldAutoscroll) chatRef.current.scrollTop = chatRef.current.scrollHeight; //  chatRef.current.addEventListener('scroll',()=>console.log('scroll'))
  });

  var handleAudio = function handleAudio() {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      dragging = _useState8[0],
      setDragging = _useState8[1];

  var handleDrag = function handleDrag(e) {
    console.log('handleDrag', e);
    e.preventDefault();
    e.stopPropagation();
  };

  var handleDragIn = function handleDragIn(e) {
    console.log('handleDragIn', e);
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  var handleDragOut = function handleDragOut(e) {
    console.log('handleDragOut', e);
    e.preventDefault();
    e.stopPropagation(); //  setDragging(false)

    setDragging(false);
  };

  var handleDrop = function handleDrop(e) {
    console.log('handleDrop', e);
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  React.useEffect(function () {
    if (dragAndDrop) {
      var div = chatRef.current;
      div.addEventListener('dragenter', handleDragIn);
      div.addEventListener('dragleave', handleDragOut);
      div.addEventListener('dragover', handleDrag);
      div.addEventListener('drop', handleDrop);
      return function () {
        var div = chatRef.current;
        div.removeEventListener('dragenter', handleDragIn);
        div.removeEventListener('dragleave', handleDragOut);
        div.removeEventListener('dragover', handleDrag);
        div.removeEventListener('drop', handleDrop);
      };
    }
  }, []);
  var classes = genClasses.cEx([function (_) {
    return dragAndDrop ? "drag-drop-zone" : '';
  }, "chat", "flex-column", "align-center", function (_) {
    return dragging ? 'drop' : '';
  }]);
  var classesOverlay = genClasses.cEx(["drop_overlay", function (_) {
    return dragging ? 'drop_overlay--visible' : '';
  }]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "hermed-chat"
  }, /*#__PURE__*/React__default.createElement(ChatHeader, _extends({
    subtitle: remoteStatus,
    title: remoteName,
    badge: remoteBadge
  }, headerProps)), /*#__PURE__*/React__default.createElement("section", {
    ref: chatRef,
    className: classes,
    onTouchStart: holdScroll,
    onTouchEnd: releaseScroll,
    onMouseDown: holdScroll,
    onMouseUp: releaseScroll
  }, props.children, /*#__PURE__*/React__default.createElement("div", {
    className: classesOverlay
  }, " ", /*#__PURE__*/React__default.createElement("h2", null, " lachez pour envoyer "), " ", /*#__PURE__*/React__default.createElement(Upload, {
    xl: true
  }))), /*#__PURE__*/React__default.createElement(ChatFooter$1, {
    recording: isRecording,
    record: record,
    toolbarHandleAudio: handleAudio,
    inputHandleSubmit: _handleSubmit,
    toolbarHandlePhoto: handlePhoto,
    toolbarHandleFile: handleFile,
    recordHandleDelete: function recordHandleDelete(x) {
      return setRecord(null);
    },
    recordHandleSend: function recordHandleSend(_) {
      handleSound(record);
      setRecord(null);
    },
    inputHandleChange: _handleChange,
    inputValue: inputValue
  }));
});

var index$a = (function (props) {
  var className = props.className,
      organiser = props.organiser,
      customer = props.customer;
  var isOrganiser = organiser === true || !organiser && !customer;
  var classes = genClasses.cEx(["landing-page", "flex-column", "just-between", className, {
    "landing-page--customer": function landingPageCustomer(_) {
      return isOrganiser !== true;
    },
    "landing-page--organiser": function landingPageOrganiser(_) {
      return isOrganiser === true;
    }
  }]);
  var styles = {
    '--bg-position': isOrganiser ? 'right' : 'left'
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("header", {
    className: "grow-5",
    style: styles
  }), /*#__PURE__*/React__default.createElement("section", {
    className: "grow-2 flex-column just-center align-center content-container"
  }, /*#__PURE__*/React__default.createElement("h1", null, "Bienvenue"), props.children));
});

var LayoutGrid = (function (props) {
  var className = props.className,
      layout3 = props.layout3,
      layout2 = props.layout2,
      rest = _objectWithoutProperties(props, ["className", "layout3", "layout2"]);

  var classes = genClasses.cEx(['layout-grid', className, function (_) {
    return layout3 ? 'layout-grid--3r' : '';
  }, function (_) {
    return layout2 ? 'layout-grid--2r' : '';
  }]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children));
});

var _bem$a = bem('video-call__toolbar'),
    _bem2$a = _slicedToArray(_bem$a, 3),
    __base_class$7 = _bem2$a[0],
    element$a = _bem2$a[1],
    modifier$a = _bem2$a[2];

var DefaultToolbar$2 = (function (props) {
  var className = props.className,
      microEnabled = props.microEnabled,
      camEnabled = props.camEnabled,
      handleChat = props.handleChat,
      handleMicro = props.handleMicro,
      handleCamera = props.handleCamera,
      handleSwitch = props.handleSwitch,
      rest = _objectWithoutProperties(props, ["className", "microEnabled", "camEnabled", "handleChat", "handleMicro", "handleCamera", "handleSwitch"]);

  var _useState = React.useState(microEnabled === true || false),
      _useState2 = _slicedToArray(_useState, 2),
      _microEnabled = _useState2[0],
      setMicroEnabled = _useState2[1];

  var _useState3 = React.useState(camEnabled === true || false),
      _useState4 = _slicedToArray(_useState3, 2),
      _cameraEnabled = _useState4[0],
      setCameraEnabled = _useState4[1]; //const [preferredCam,setPreferredCam]     = useState(camDevice === true || false);


  var _toggleMicro = function _toggleMicro() {
    var newState = !_microEnabled;
    setMicroEnabled(newState);
    handleMicro && handleMicro(newState);
  };

  var _toggleCamera = function _toggleCamera() {
    var newState = !_cameraEnabled;
    setCameraEnabled(newState);
    handleCamera && handleCamera(newState);
  };

  var classes = genClasses.cEx([__base_class$7, className]);
  return /*#__PURE__*/React__default.createElement(LayoutFlex, _extends({
    justEvenly: true,
    className: classes
  }, rest), /*#__PURE__*/React__default.createElement(Button$1, {
    fit: true,
    navbar: true,
    className: "icon--s",
    onClick: handleChat
  }, " ", /*#__PURE__*/React__default.createElement(md.MdChat, null), /*#__PURE__*/React__default.createElement("h2", null, "Chat")), /*#__PURE__*/React__default.createElement(Button$1, {
    fit: true,
    navbar: true,
    className: "icon--s",
    onClick: _toggleMicro
  }, _microEnabled && /*#__PURE__*/React__default.createElement(fa.FaMicrophone, null), !_microEnabled && /*#__PURE__*/React__default.createElement(fa.FaMicrophoneSlash, null), /*#__PURE__*/React__default.createElement("h2", null, "Micro")), /*#__PURE__*/React__default.createElement(Button$1, {
    fit: true,
    navbar: true,
    className: "icon--s",
    onClick: _toggleCamera
  }, _cameraEnabled && /*#__PURE__*/React__default.createElement(fa.FaVideo, null), !_cameraEnabled && /*#__PURE__*/React__default.createElement(fa.FaVideoSlash, null), /*#__PURE__*/React__default.createElement("h2", null, "Camera")), /*#__PURE__*/React__default.createElement(Button$1, {
    fit: true,
    navbar: true,
    className: "icon--s",
    onClick: handleSwitch
  }, /*#__PURE__*/React__default.createElement(md.MdChat, null), /*#__PURE__*/React__default.createElement("h2", null, "Switch")));
});

var VideoCall = function VideoCall(_ref) {
  var className = _ref.className,
      Toolbar = _ref.Toolbar,
      handleAnswer = _ref.handleAnswer,
      handleDiscard = _ref.handleDiscard,
      incoming = _ref.incoming,
      rest = _objectWithoutProperties(_ref, ["className", "Toolbar", "handleAnswer", "handleDiscard", "incoming"]);

  var _filterPropStartingWi = ReactUtils_10('video', rest),
      _filterPropStartingWi2 = _slicedToArray(_filterPropStartingWi, 2),
      mainVideoProps = _filterPropStartingWi2[0],
      notSuitableForVp = _filterPropStartingWi2[1];

  var _filterPropStartingWi3 = ReactUtils_10('feedback', notSuitableForVp),
      _filterPropStartingWi4 = _slicedToArray(_filterPropStartingWi3, 2),
      feedbackVideoProps = _filterPropStartingWi4[0],
      notSuitableForFb = _filterPropStartingWi4[1];

  var _filterPropStartingWi5 = ReactUtils_10('toolbar', notSuitableForFb),
      _filterPropStartingWi6 = _slicedToArray(_filterPropStartingWi5, 2),
      toolbarProps = _filterPropStartingWi6[0],
      notSuitableForToolbar = _filterPropStartingWi6[1];

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: className
  }, notSuitableForToolbar), /*#__PURE__*/React__default.createElement(LayoutGrid, {
    className: "layout-video-call"
  }, /*#__PURE__*/React__default.createElement(LayoutFlex, {
    className: "position-relative"
  }, /*#__PURE__*/React__default.createElement(Video, _extends({
    autoPlay: true,
    loop: true
  }, ReactUtils_5('video', mainVideoProps))), /*#__PURE__*/React__default.createElement(LayoutFlex, {
    justEvenly: true,
    className: "".concat(__base_class$8, "__controls")
  }, incoming && /*#__PURE__*/React__default.createElement(Button$1, {
    round: true,
    success: true,
    onClick: handleAnswer
  }, /*#__PURE__*/React__default.createElement(md.MdCall, null)), /*#__PURE__*/React__default.createElement(Button$1, {
    round: true,
    failure: true,
    onClick: handleDiscard
  }, /*#__PURE__*/React__default.createElement(md.MdCallEnd, null)))), !Toolbar && /*#__PURE__*/React__default.createElement(DefaultToolbar$2, ReactUtils_5('toolbar', toolbarProps))), /*#__PURE__*/React__default.createElement(Draggable, {
    bounds: '.' + __base_class$8
  }, /*#__PURE__*/React__default.createElement(Video, _extends({
    preview: true,
    autoPlay: true,
    loop: true,
    muted: true
  }, ReactUtils_5('feedback', feedbackVideoProps)))));
};

var _bem$b = bem('video-call'),
    _bem2$b = _slicedToArray(_bem$b, 3),
    __base_class$8 = _bem2$b[0],
    element$b = _bem2$b[1],
    modifier$b = _bem2$b[2];
var enhance$5 = withBaseClass(__base_class$8);
var index$b = enhance$5(VideoCall);

var _bem$c = bem('container-fullscreen'),
    _bem2$c = _slicedToArray(_bem$c, 3),
    __base_class$9 = _bem2$c[0],
    element$c = _bem2$c[1],
    modifier$c = _bem2$c[2];

var index$c = (function (props) {
  var offset = props.offset,
      overflowY = props.overflowY,
      stretch = props.stretch,
      className = props.className,
      otherStyle = props.style,
      rest = _objectWithoutProperties(props, ["offset", "overflowY", "stretch", "className", "style"]);

  if (!offset) {
    offset = 0;
  }

  var ref = React.useRef();

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      vh = _useState2[0],
      setVh = _useState2[1];

  var _useState3 = React.useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      _height = _useState4[0],
      setHeight = _useState4[1];

  var adapt = function adapt() {
    setVh((window.innerHeight - offset) * 0.01);
    setHeight(ref.current.getBoundingClientRect().height);
  };

  React.useEffect(function () {
    adapt();
  }, []);
  React.useEffect(function () {
    window.addEventListener('resize', adapt);
    return function () {
      window.removeEventListener('resize', adapt);
    };
  }, []);
  var classes = genClasses.cEx([__base_class$9, function (_) {
    return overflowY ? modifier$c('overflow-y') : '';
  }, function (_) {
    return stretch && _height > window.innerHeight ? modifier$c('adapt') : '';
  }, className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    ref: ref,
    className: classes,
    style: _objectSpread2({
      '--vh': "".concat(vh, "px")
    }, otherStyle)
  }, rest), props.children);
});

var _bem$d = bem('container-stack'),
    _bem2$d = _slicedToArray(_bem$d, 3),
    __base_class$a = _bem2$d[0],
    element$d = _bem2$d[1],
    modifier$d = _bem2$d[2];

var index$d = (function (props) {
  var className = props.className,
      baseKey = props.baseKey,
      baseIndex = props.baseIndex,
      rest = _objectWithoutProperties(props, ["className", "baseKey", "baseIndex"]);

  var classes = genClasses.cEx([__base_class$a, className]);

  var _baseIndex = baseIndex || 1000;

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, React__default.Children.toArray(props.children).map(function (children, idx) {
    return /*#__PURE__*/React__default.cloneElement(children, {
      className: genClasses.cEx([children.props.className, element$d('stacked')]),
      key: "".concat(baseKey).concat(idx),
      style: _objectSpread2(_objectSpread2({}, children.props.style), {}, {
        position: 'absolute',
        zIndex: _baseIndex + idx
      })
    });
  }));
});

var _bem$e = bem('container-modal'),
    _bem2$e = _slicedToArray(_bem$e, 3),
    __base_class$b = _bem2$e[0],
    element$e = _bem2$e[1],
    modifier$e = _bem2$e[2];
var Modal = (function (_ref) {
  var _ref2;

  var children = _ref.children,
      debug = _ref.debug,
      className = _ref.className,
      cover = _ref.cover,
      bottom = _ref.bottom,
      relative = _ref.relative,
      centered = _ref.centered,
      fit = _ref.fit,
      vcenter = _ref.vcenter,
      hcenter = _ref.hcenter,
      rest = _objectWithoutProperties(_ref, ["children", "debug", "className", "cover", "bottom", "relative", "centered", "fit", "vcenter", "hcenter"]);

  var modalRef = React.useRef();

  var adapt = function adapt() {
    if (modalRef.current) {
      var parentNode = modalRef.current.parentNode;
      var modalRect = {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      };
      var currentModalRect = modalRef.current.getBoundingClientRect();
      var parentRect = modalRef.current.parentNode.getBoundingClientRect();
      var windowRect = {
        x: 0,
        y: 0,
        height: window.innerHeight,
        width: window.innerWidth,
        top: 0,
        left: 0
      };
      if (debug) console.table({
        parentRect: parentRect,
        windowRect: windowRect
      });
      var refRect = relative ? parentRect : windowRect;

      if (relative) {
        parentNode.style.position = 'relative';
      }

      if (centered) {
        modalRect.y = refRect.height / 2 - currentModalRect.height / 2;
        modalRect.x = refRect.width / 2 - currentModalRect.width / 2;
      }

      if (vcenter) {
        modalRect.y = refRect.height / 2 - currentModalRect.height / 2;
      }

      if (hcenter) {
        modalRect.x = refRect.width / 2 - currentModalRect.width / 2;
      }

      if (debug) console.table({
        refRect: refRect,
        modalRect: modalRect
      });

      if (modalRect.y < 0) {
        modalRect.y = 0;
      }

      if (!bottom) {
        modalRef.current.style.top = "".concat(modalRect.y, "px");
      }

      modalRef.current.style.left = "".concat(modalRect.x, "px");
    }
  };

  React.useEffect(function () {
    adapt();
  }, []);
  React.useEffect(function () {
    document.addEventListener('load', adapt);
    window.addEventListener('resize', adapt);
    return function () {
      window.removeEventListener('resize', adapt);
      document.removeEventListener('load', adapt);
    };
  }, []);
  var classes = genClasses.cEx([__base_class$b, (_ref2 = {}, _defineProperty(_ref2, modifier$e('cover'), function (_) {
    return cover;
  }), _defineProperty(_ref2, modifier$e('centered'), function (_) {
    return centered;
  }), _defineProperty(_ref2, modifier$e('bottom'), function (_) {
    return bottom;
  }), _ref2), className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes,
    ref: modalRef
  }, rest), children);
});

var index$e = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['container', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children);
});

var _bem$f = bem('card'),
    _bem2$f = _slicedToArray(_bem$f, 3),
    __base_class$c = _bem2$f[0],
    element$f = _bem2$f[1],
    modifier$f = _bem2$f[2];

var Card = compositeJs.compose(withBaseClass(__base_class$c), applyModifiers({
  justBetween: true,
  column: true
}))(LayoutFlex);

var _bem$g = bem('background-overlay'),
    _bem2$g = _slicedToArray(_bem$g, 3),
    __base_class$d = _bem2$g[0],
    element$g = _bem2$g[1],
    modifier$g = _bem2$g[2];

var BackgroundOverlay = compositeJs.compose(withBaseClass(__base_class$d), applyModifiers({
  cover: true
}))(LayoutFlex);

var index$f = (function (_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default.createElement(Modal, {
    cover: true
  }, /*#__PURE__*/React__default.createElement(BackgroundOverlay, {
    centered: true
  }, /*#__PURE__*/React__default.createElement(Card, rest, children)));
});

var _bem$h = bem('drop-overlay'),
    _bem2$h = _slicedToArray(_bem$h, 3),
    __base_class$e = _bem2$h[0],
    element$h = _bem2$h[1],
    modifier$h = _bem2$h[2];

var Component$2 = compositeJs.compose(withBaseClass(__base_class$e), withModifiers(function (x) {
  return modifier$h(x);
}, ['visible']))(divElement);

var BEM$1 = makeBem('tiled-section');
var current = BEM$1.current;
var TiledSection = compositeJs.compose(withBaseClass(current), applyModifiers({
  column: true,
  justCenter: true,
  alignCenter: true,
  cover: true
}), withModifiers(function (x) {
  return BEM$1.modifier(x);
}, ['debug']))(LayoutFlex);

exports.ActiveCallBar = index$6;
exports.Badge = Badge;
exports.Button = Button$1;
exports.Calling = index$5;
exports.Card = Card;
exports.CardContainer = index$f;
exports.Chat = index$9;
exports.ChatBubble = index;
exports.Container = index$e;
exports.DebugPanel = index$7;
exports.DropzoneOverlay = Component$2;
exports.Form = index$2;
exports.Fullscreen = index$c;
exports.Header = Header;
exports.HeaderBackButton = BackButton;
exports.Icons = index$1;
exports.Input = Input$1;
exports.Landing = index$a;
exports.LayoutFlex = LayoutFlex;
exports.LayoutGrid = LayoutGrid;
exports.Loading = index$4;
exports.MobileVHAdapter = index$c;
exports.Modal = Modal;
exports.Patient = Contact;
exports.Select = index$3;
exports.Sidebar = Component$1;
exports.SidebarList = index$8;
exports.SidebarListItem = Component;
exports.Stack = index$d;
exports.TiledSection = TiledSection;
exports.Video = Video;
exports.VideoCall = index$b;
exports.VideoPreview = Video;
exports.WaitingRoom = WaitingRoom;
//# sourceMappingURL=index.js.map
