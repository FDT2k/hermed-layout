'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var genClasses = require('@geekagency/gen-classes');
var md = require('react-icons/md');
var fa = require('react-icons/fa');
var InputMask = _interopDefault(require('react-input-mask'));
var formik = require('formik');
var ReactLoading = _interopDefault(require('react-loading'));

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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
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
  }); // concat :: String -> String

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
  }();

  var empty = function empty(string) {
    return string.length == 0;
  }; // BOOL => BOOL


  var not = function not(x) {
    return !x;
  };

  var notEmpty = compose(not, empty); // very small either, no way to know if there was an error

  /*
    if(cond is met, return right else return left)
  */

  var _either = curry(function (cond, left, right, val) {
    return cond(val) ? right(val) : left(val);
  });

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

  var is_type_object = is_type('object');
  var is_type_string = is_type('string');
  var is_type_function = is_type('function');
  var is_type_number = is_type('number');
  var is_undefined = is_type('undefined');
  var is_type_bool = is_type('boolean'); //fucky number test in js can suck on this

  var _eitherUndefined = _either(is_undefined);

  var _throw = function _throw(x) {
    return function (val) {
      throw new Error(x);
    };
  }; //interrupt everything


  var _eitherThrow = curry(function (cond, error) {
    return _either(cond, _throw(error), identity);
  }); //  String -> a -> Object -> Bool


  var is_prop_strictly_equal = curry(function (prop, value, item) {
    return item[prop] == value;
  });
  var is_prop_not_strictly_equal = curry(function (prop, value, item) {
    return compose(not, is_prop_strictly_equal(prop, value))(item);
  }); // default a value to something if null || undefined -> cf. Maybe

  var defaultTo = function defaultTo(val) {
    return compose(maybe(val, identity), Maybe.of);
  };

  var tryCatcher = curry(function (catcher, tryer, arg) {
    try {
      return tryer(arg);
    } catch (err) {
      return catcher(arg, err);
    }
  });
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

  var spec = curry(function (obj, arg) {
    return pipe(keys, map(function (x) {
      return as_prop(x, obj[x](arg));
    }), mergeAll)(obj);
  }); //Object -> List

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

  var filterEqual = compose(filter, isStrictlyEqual); // reduce an array of subObjects to a merged object of all subObjects

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
  var key = compose(head, keys); // filter an object and returns key that matches
  // regex -> string -> Object -> Bool

  var propMatch = curry(function (re, key) {
    return compose(test(re), prop(key));
  }); // Object -> Object -> Object 

  var matchReducer = curry(function (match, acc, item) {
    //  console.log(head(keys(item)))
    if (match(key(item))) {
      return assign2(acc, item);
    }

    return acc;
  }); // 

  var keepMatching = function keepMatching(match) {
    return reduce({}, matchReducer(match));
  };

  var spreadFilterByKey = function spreadFilterByKey(match) {
    return compose(diverge(keepMatching(match), keepMatching(compose(not, match))), enlist);
  };

  var regex = function regex(str) {
    return new RegExp(str);
  };

  var beginWith = compose(test, regex, concat('^'));
  var contains = compose(test, regex, concat(''));
  var endWith = compose(test, regex, append('$'));
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
  exports.beginWith = beginWith;
  exports.contains = contains;
  exports.endWith = endWith;
  exports.regex = regex;
  exports.spreadObject = spreadObject;
  exports.spreadObjectBeginWith = spreadObjectBeginWith;
  exports.spreadObjectContaining = spreadObjectContaining;
  exports.spreadObjectEndingWith = spreadObjectEndingWith;
});
unwrapExports(ReactUtils);
var ReactUtils_1 = ReactUtils.beginWith;
var ReactUtils_2 = ReactUtils.contains;
var ReactUtils_3 = ReactUtils.endWith;
var ReactUtils_4 = ReactUtils.regex;
var ReactUtils_5 = ReactUtils.spreadObject;
var ReactUtils_6 = ReactUtils.spreadObjectBeginWith;
var ReactUtils_7 = ReactUtils.spreadObjectContaining;
var ReactUtils_8 = ReactUtils.spreadObjectEndingWith;

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
var GiHamburgerMenu=function(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(props);};GiHamburgerMenu.displayName="GiHamburgerMenu";

var Header = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline", "flex-row", "just-between", "align-center", className]);
  return /*#__PURE__*/React__default.createElement("header", {
    className: classes
  }, props.children);
});

var Content = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline__content", "flex-row", "align-center", className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var Title = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("h2", null, props.children));
});

var Button = (function (props) {
  var className = props.className,
      _contained = props.contained,
      _clear = props.clear,
      _round = props.round,
      _text = props.text,
      _outlined = props.outlined,
      _toolbar = props.toolbar,
      _success = props.success,
      _failure = props.failure,
      _fit = props.fit,
      rest = _objectWithoutProperties(props, ["className", "contained", "clear", "round", "text", "outlined", "toolbar", "success", "failure", "fit"]);

  var classes = genClasses.cEx(["button", className, function (_) {
    return !_contained && !_text && !_clear && !_round && !_outlined && !_toolbar ? "contained" : "";
  }, {
    'contained': function contained(_) {
      return _contained === true;
    },
    'text': function text(_) {
      return _text === true;
    },
    'toolbar': function toolbar(_) {
      return _toolbar === true;
    },
    'outlined': function outlined(_) {
      return _outlined === true;
    },
    'fit': function fit(_) {
      return _fit === true;
    },
    'round': function round(_) {
      return _round === true;
    },
    'success': function success(_) {
      return _success === true;
    },
    'failure': function failure(_) {
      return _failure === true;
    },
    'clear': function clear(_) {
      return _clear === true;
    }
  }, function (_) {
    return _toolbar === true ? 'icon icon--32' : '';
  }]);
  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: classes
  }, rest), props.children);
});

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

var Toolbar = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline__tool-box", "flex-row", className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var DefaultToolbar = (function (props) {
  var className = props.className,
      handleAdd = props.handleAdd,
      handleConfig = props.handleConfig,
      handleShutdown = props.handleShutdown;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(Toolbar, {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleAdd
  }, /*#__PURE__*/React__default.createElement(md.MdPersonAdd, null)), /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleConfig
  }, /*#__PURE__*/React__default.createElement(GoGear, null)), /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleShutdown
  }, /*#__PURE__*/React__default.createElement(fa.FaPowerOff, null)));
});

var index$1 = (function (props) {
  var title = props.title,
      className = props.className,
      handleBack = props.handleBack,
      Toolbar = props.Toolbar,
      defaultToolbar = props.defaultToolbar,
      rest = _objectWithoutProperties(props, ["title", "className", "handleBack", "Toolbar", "defaultToolbar"]);

  var classes = genClasses.cEx(["waiting-room", className]);

  var _spreadObjectBeginWit = ReactUtils_6('toolbar', rest),
      _spreadObjectBeginWit2 = _slicedToArray(_spreadObjectBeginWit, 2),
      toolbarProps = _spreadObjectBeginWit2[0],
      remaining = _spreadObjectBeginWit2[1];

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, remaining), /*#__PURE__*/React__default.createElement(Header, null, /*#__PURE__*/React__default.createElement(Content, null, /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleBack
  }, /*#__PURE__*/React__default.createElement(GiHamburgerMenu, null)), /*#__PURE__*/React__default.createElement(Title, null, title)), Toolbar && /*#__PURE__*/React__default.createElement(Toolbar, toolbarProps) || defaultToolbar && /*#__PURE__*/React__default.createElement(DefaultToolbar, toolbarProps)), /*#__PURE__*/React__default.createElement("section", {
    className: "content"
  }, props.children));
});

var Badge = (function (props) {
  var className = props.className,
      _medium = props.medium,
      status = props.status,
      rest = _objectWithoutProperties(props, ["className", "medium", "status"]);

  var red = rest.red,
      orange = rest.orange,
      green = rest.green,
      veryRest = _objectWithoutProperties(rest, ["red", "orange", "green"]);

  var classes = genClasses.cEx(['badge-dot', className, {
    'medium': function medium(_) {
      return _medium === true;
    }
  }, function (_) {
    if (red) return 'red';
    if (orange) return 'orange';
    if (green) return 'green';
  }, function (_) {
    return status;
  }]);
  return /*#__PURE__*/React__default.createElement("span", _extends({
    className: classes
  }, veryRest), props.children);
});

var index$2 = (function (props) {
  var status = props.status,
      secondaryStatus = props.secondaryStatus,
      name = props.name,
      phone = props.phone,
      email = props.email,
      handleClick = props.handleClick,
      className = props.className,
      handleContextual = props.handleContextual,
      rest = _objectWithoutProperties(props, ["status", "secondaryStatus", "name", "phone", "email", "handleClick", "className", "handleContextual"]);

  var classes = genClasses.cEx(["patient-item", className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes,
    onClick: handleClick
  }, rest), /*#__PURE__*/React__default.createElement(Content, null, /*#__PURE__*/React__default.createElement(Badge, {
    className: "status",
    medium: true,
    status: status
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "coord"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "name"
  }, name), /*#__PURE__*/React__default.createElement("div", {
    className: "phone"
  }, phone), /*#__PURE__*/React__default.createElement("div", {
    className: "email"
  }, email))), /*#__PURE__*/React__default.createElement(Content, null, /*#__PURE__*/React__default.createElement(Badge, {
    className: "status secondary",
    medium: true,
    status: secondaryStatus
  }), /*#__PURE__*/React__default.createElement(Button, {
    clear: true,
    onClick: function onClick(e) {
      handleContextual(e);
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(GoKebabVertical, null))));
});

var defaultSubmit = function defaultSubmit(e) {
  console.warn('you didnt set onSubmit');
  e.preventDefault();
};

var Form = (function (props) {
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

var Input = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      type = props.type,
      caretPos = props.caretPos,
      rest = _objectWithoutProperties(props, ["label", "id", "className", "type", "caretPos"]);

  var ref = React.useRef();
  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-input flex-column"
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React__default.createElement(InputMask, _extends({
    ref: ref,
    className: genClasses.cEx(["input", function (_) {
      return className;
    }]),
    id: id,
    type: "text",
    autoComplete: "off"
  }, rest)));
});

var index$3 = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      rest = _objectWithoutProperties(props, ["label", "id", "className"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-select"
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: "single-select__select"
  }, /*#__PURE__*/React__default.createElement("select", _extends({
    id: id
  }, rest), props.children)));
});

var OrganiserConfigurationForm = (function (props) {
  var handleSubmit = props.handleSubmit;
  var formik$1 = formik.useFormik({
    initialValues: {
      server: 'broker.hermed.dev.geekagency.ch',
      port: 8712,
      key: 'peerjs',
      organiser_name: '',
      password: '',
      secure: true
    },
    onSubmit: function onSubmit(values) {
      handleSubmit(values);
    }
  });
  return /*#__PURE__*/React__default.createElement(Form, {
    className: "flex-column align-center",
    onSubmit: formik$1.handleSubmit
  }, /*#__PURE__*/React__default.createElement(Input, {
    label: "Votre nom ",
    name: "organiser_name",
    placeholder: "Votre nom complet",
    autoComplete: "off",
    onChange: formik$1.handleChange,
    value: formik$1.values.organiser_name
  }), /*#__PURE__*/React__default.createElement(Input, {
    label: "Serveur",
    name: "server",
    placeholder: "broker.cmgl.ch",
    autoComplete: "off",
    onChange: formik$1.handleChange,
    value: formik$1.values.server
  }), /*#__PURE__*/React__default.createElement(Input, {
    label: "Port",
    name: "port",
    placeholder: "8712",
    autoComplete: "off",
    onChange: formik$1.handleChange,
    value: formik$1.values.port
  }), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: "secure"
  }, "SSL"), /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox",
    id: "secure",
    name: "secure",
    onChange: formik$1.handleChange,
    checked: formik$1.values.secure
  }), /*#__PURE__*/React__default.createElement(Input, {
    label: "Cl\xE9",
    name: "key",
    placeholder: "cl\xE9 du serveur",
    autoComplete: "off",
    onChange: formik$1.handleChange,
    value: formik$1.values.key
  }), /*#__PURE__*/React__default.createElement(Button, null, "Se connecter"));
});

var BackButton = (function (props) {
  var className = props.className,
      handleBack = props.handleBack;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, handleBack && /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleBack
  }, /*#__PURE__*/React__default.createElement(md.MdArrowBack, null)));
});

var ChatHeaderStatus = (function (props) {
  var title = props.title,
      subtitle = props.subtitle,
      badge = props.badge;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex-column just-around"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-row align-center"
  }, badge && /*#__PURE__*/React__default.createElement(Badge, {
    status: badge
  }), /*#__PURE__*/React__default.createElement("h2", null, title)), subtitle && /*#__PURE__*/React__default.createElement("p", {
    className: "headline__contact-status"
  }, subtitle));
});

var ChatHeaderToolbar = (function (props) {
  var handleCall = props.handleCall,
      handleVideoCall = props.handleVideoCall;
  return /*#__PURE__*/React__default.createElement(Toolbar, null, /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleVideoCall,
    disabled: typeof handleVideoCall !== 'function',
    toolbar: true
  }, /*#__PURE__*/React__default.createElement(md.MdVideocam, null)), /*#__PURE__*/React__default.createElement(Button, {
    onClick: handleCall,
    disabled: typeof handleCall !== 'function',
    toolbar: true
  }, /*#__PURE__*/React__default.createElement(md.MdLocalPhone, null)));
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
  /*
      const {doctor,patient} = props
      const isDoctor= doctor===true || (!doctor && !patient);
  */

  var classes = genClasses.cEx(["headline", "flex-row", "just-between", "align-center", className
  /*  {
      "headline--patient":  _=> isDoctor !== true,
      "headline--doctor":   _=> isDoctor === true,
    }*/
  ]);
  return /*#__PURE__*/React__default.createElement(Header, null, /*#__PURE__*/React__default.createElement(Content, null, /*#__PURE__*/React__default.createElement(BackButton, {
    handleBack: handleBack
  }), /*#__PURE__*/React__default.createElement(ChatHeaderStatus, {
    badge: badge,
    title: title,
    subtitle: subtitle
  })), showToolbar && /*#__PURE__*/React__default.createElement(ChatHeaderToolbar, callHandlers));
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
  }, incoming && /*#__PURE__*/React__default.createElement(Button, {
    round: true,
    success: true,
    onClick: handleAnswer,
    fit: true
  }, " ", /*#__PURE__*/React__default.createElement(md.MdCall, null), " "), /*#__PURE__*/React__default.createElement(Button, {
    round: true,
    fit: true,
    failure: true,
    onClick: handleDiscard
  }, " ", /*#__PURE__*/React__default.createElement(md.MdCallEnd, null), " ")));
});

var index$6 = (function (props) {
  var myRef = React.useRef();

  var srcObject = props.srcObject,
      className = props.className,
      _preview = props.preview,
      rest = _objectWithoutProperties(props, ["srcObject", "className", "preview"]);

  var classes = genClasses.cEx(['video', className, {
    'preview': function preview(_) {
      return _preview;
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

var index$7 = (function (props) {
  var offset = props.offset;

  if (!offset) {
    offset = 0;
  }

  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      vh = _useState2[0],
      setVh = _useState2[1];

  var adapt = function adapt() {
    setVh((window.innerHeight - offset) * 0.01);
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: "vh-container",
    style: {
      '--vh': "".concat(vh, "px")
    }
  }, props.children);
});

var index$8 = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['active-call', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children);
});

var index$9 = (function (props) {
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

var index$a = (function (props) {
  var className = props.className,
      closed = props.closed,
      rest = _objectWithoutProperties(props, ["className", "closed"]);
  /*  const [visible,setVisible] = useState(closed || true)
  
    useEffect(()=>{
      setVisible(closed || true)
    },[closed])
  */


  var classes = genClasses.cEx(['sidebar', function (_) {
    return closed === false ? 'sidebar--state-closed' : '';
  }, className]);
  return /*#__PURE__*/React__default.createElement("aside", {
    className: classes
  }, props.children);
});

var index$b = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['list', className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var index$c = (function (props) {
  var className = props.className,
      Icon = props.Icon,
      label = props.label,
      Optional = props.Optional,
      rest = _objectWithoutProperties(props, ["className", "Icon", "label", "Optional"]);

  var classes = genClasses.cEx(['list-item', className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "list-item-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__icon"
  }, Icon && /*#__PURE__*/React__default.createElement(Icon, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__title"
  }, props.children)), /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__optional"
  }, Optional && /*#__PURE__*/React__default.createElement(Optional, null)));
});

var index$d = (function (props) {
  var autoscroll = props.autoscroll,
      handleChange = props.handleChange,
      handleSubmit = props.handleSubmit;
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: "hermed-chat"
  }, /*#__PURE__*/React__default.createElement(ChatHeader, _extends({
    subtitle: remoteStatus,
    title: remoteName,
    badge: remoteBadge
  }, headerProps)), /*#__PURE__*/React__default.createElement("section", {
    ref: chatRef,
    className: "chat flex-column  align-center",
    onTouchStart: holdScroll,
    onTouchEnd: releaseScroll,
    onMouseDown: holdScroll,
    onMouseUp: releaseScroll
  }, props.children), /*#__PURE__*/React__default.createElement("section", {
    className: "tools"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React__default.createElement("button", null, "photo"), /*#__PURE__*/React__default.createElement("button", null, "file"), /*#__PURE__*/React__default.createElement("button", null, "voice")), /*#__PURE__*/React__default.createElement("div", {
    className: "text-input"
  }, /*#__PURE__*/React__default.createElement("form", {
    onSubmit: _handleSubmit
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    onChange: _handleChange,
    value: inputValue
  })))));
});

var Landing = (function (props) {
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

var index$e = (function (props) {
  var handleClick = props.handleClick,
      identity = props.identity;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _handleClick = function _handleClick(e) {
    handleClick && handleClick(value);
    e.preventDefault();
  };

  return /*#__PURE__*/React__default.createElement(Landing, {
    customer: true
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "text--center"
  }, identity || 'Votre docteur', " vous invite \xE0 rejoindre sa salle d'attente pour une consultation \xE0 distance. Lorsque vous \xEAtes pr\xEAts, cliquez sur le bouton ci-dessous pour la rejoindre."), /*#__PURE__*/React__default.createElement(Form, {
    onSubmit: _handleClick
  }, /*#__PURE__*/React__default.createElement(Input, {
    mask: "99.99.9999",
    label: "Votre date de naissance",
    name: "birthday",
    placeholder: "JJ.MM.YYYY",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    value: value,
    autoComplete: "off"
  }), /*#__PURE__*/React__default.createElement(Button, null, "JE SUIS PR\xCAT !")));
});

var index$f = (function (props) {
  var handleSubmit = props.handleSubmit;
  return /*#__PURE__*/React__default.createElement(Landing, null, /*#__PURE__*/React__default.createElement(OrganiserConfigurationForm, {
    handleSubmit: handleSubmit
  }));
});

exports.ActiveCallBar = index$8;
exports.Badge = Badge;
exports.Button = Button;
exports.Calling = index$5;
exports.Chat = index$d;
exports.ChatBubble = index;
exports.ChatHeader = ChatHeader;
exports.ChatHeaderStatus = ChatHeaderStatus;
exports.ChatHeaderToolbar = ChatHeaderToolbar;
exports.CustomerLanding = index$e;
exports.DebugPanel = index$9;
exports.Form = Form;
exports.Header = Header;
exports.HeaderBackButton = BackButton;
exports.HeaderTitle = Title;
exports.HeaderToolbar = Toolbar;
exports.Input = Input;
exports.Landing = Landing;
exports.Loading = index$4;
exports.MobileVHAdapter = index$7;
exports.OrganiserConfigurationForm = OrganiserConfigurationForm;
exports.OrganiserLanding = index$f;
exports.Patient = index$2;
exports.Select = index$3;
exports.Sidebar = index$a;
exports.SidebarList = index$b;
exports.SidebarListItem = index$c;
exports.Video = index$6;
exports.VideoPreview = index$6;
exports.WaitingRoom = index$1;
//# sourceMappingURL=index.js.map
