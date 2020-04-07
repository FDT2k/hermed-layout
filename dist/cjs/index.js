'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var genClasses = require('@geekagency/gen-classes');
require('@geekagency/composite-js');
var md = require('react-icons/md');
var fa = require('react-icons/fa');
var InputMask = _interopDefault(require('react-input-mask'));
var formik = require('formik');
var ReactLoading = _interopDefault(require('react-loading'));
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
  var is_type_bool = is_type('boolean'); //fucky number test in js can suck on this shit ..!..

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
  }); // {a:b} -> a
  // {a:b, c:d} -> a

  var key = compose(head, keys); //export const objectReduce = reduce({});
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

  var spreadFilterByKey = function spreadFilterByKey(match) {
    return compose(diverge(keepMatching(match), keepMatching(compose(not, match))), enlist, ensure_object_copy);
  };

  var regex = function regex(str) {
    return new RegExp(str);
  };

  var updateProp = curry(function (prop, obj, value) {
    return updateObject(obj, _defineProperty({}, prop, value));
  });
  var beginWith = compose(test, regex, concat('^'));
  var contains = compose(test, regex, concat(''));
  var endWith = compose(test, regex, append('$'));
  var equals = compose(test, regex, append('$'), concat('^'));
  var spreadObject = spreadFilterByKey;

  var spreadObjectBeginWith = function spreadObjectBeginWith(str, obj) {
    return spreadFilterByKey(beginWith(str))(obj);
  };

  var spreadObjectContaining = function spreadObjectContaining(str, obj) {
    return spreadFilterByKey(contains(str))(obj);
  };

  var spreadObjectEndingWith = function spreadObjectEndingWith(str, obj) {
    return spreadFilterByKey(endWith(str))(obj);
  };

  var transformReplace = function transformReplace(re, repl) {
    return replace(re, repl);
  };

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


  var forwardPropsRemovingHeader = function forwardPropsRemovingHeader(header, obj) {
    return transformKeys(forwardPropsTransformer(header))(obj);
  };

  exports.beginWith = beginWith;
  exports.contains = contains;
  exports.endWith = endWith;
  exports.equals = equals;
  exports.forwardPropsRemovingHeader = forwardPropsRemovingHeader;
  exports.forwardPropsTransformer = forwardPropsTransformer;
  exports.regex = regex;
  exports.replaceKeyReducer = replaceKeyReducer;
  exports.spreadObject = spreadObject;
  exports.spreadObjectBeginWith = spreadObjectBeginWith;
  exports.spreadObjectContaining = spreadObjectContaining;
  exports.spreadObjectEndingWith = spreadObjectEndingWith;
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
var ReactUtils_7 = ReactUtils.regex;
var ReactUtils_8 = ReactUtils.replaceKeyReducer;
var ReactUtils_9 = ReactUtils.spreadObject;
var ReactUtils_10 = ReactUtils.spreadObjectBeginWith;
var ReactUtils_11 = ReactUtils.spreadObjectContaining;
var ReactUtils_12 = ReactUtils.spreadObjectEndingWith;
var ReactUtils_13 = ReactUtils.transformKeys;
var ReactUtils_14 = ReactUtils.transformLowSnake;
var ReactUtils_15 = ReactUtils.transformProps;
var ReactUtils_16 = ReactUtils.transformReplace;
var ReactUtils_17 = ReactUtils.updateProp;

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
  }(); //export const empty = string=> string.length==0;
  // BOOL => BOOL
  //export const notEmpty = compose(not,empty)


  var not = function not(x) {
    return !x;
  };

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
  var is_type_bool = is_type('boolean'); //fucky number test in js can suck on this shit ..!..

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
  }); // {a:b} -> a
  // {a:b, c:d} -> a

  var key = compose(head, keys); //export const objectReduce = reduce({});
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
    return compose(keepMatching(match), enlist, ensure_object_copy);
  };

  var spreadFilterByKey = function spreadFilterByKey(match) {
    return compose(diverge(keepMatching(match), keepMatching(compose(not, match))), enlist, ensure_object_copy);
  };

  exports.filterByKey = filterByKey;
  exports.isPropStrictlyEqual = isPropStrictlyEqual;
  exports.isPropStrictlyNotEqual = isPropStrictlyNotEqual;
  exports.keepMatching = keepMatching;
  exports.key = key;
  exports.matchReducer = matchReducer;
  exports.propMatch = propMatch;
  exports.spreadFilterByKey = spreadFilterByKey;
});
unwrapExports(ObjectUtils);
var ObjectUtils_1 = ObjectUtils.filterByKey;
var ObjectUtils_2 = ObjectUtils.isPropStrictlyEqual;
var ObjectUtils_3 = ObjectUtils.isPropStrictlyNotEqual;
var ObjectUtils_4 = ObjectUtils.keepMatching;
var ObjectUtils_5 = ObjectUtils.key;
var ObjectUtils_6 = ObjectUtils.matchReducer;
var ObjectUtils_7 = ObjectUtils.propMatch;
var ObjectUtils_8 = ObjectUtils.spreadFilterByKey;

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

  var _spreadObjectBeginWit = ReactUtils_10('toolbar', rest),
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

  var classes = genClasses.cEx(['badge-dot', {
    'medium': function medium(_) {
      return _medium === true;
    }
  }, function (_) {
    if (red) return 'red';
    if (orange) return 'orange';
    if (green) return 'green';
  }, function (_) {
    return status;
  }, className]);
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
      labelClassName = props.labelClassName,
      inputClassName = props.inputClassName,
      type = props.type,
      caretPos = props.caretPos,
      rest = _objectWithoutProperties(props, ["label", "id", "className", "labelClassName", "inputClassName", "type", "caretPos"]);

  var ref = React.useRef();
  var classes = genClasses.cEx(["single-input flex-column", className]);
  var labelClasses = genClasses.cEx([labelClassName]);
  var inputClasses = genClasses.cEx(["input", inputClassName]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, label), /*#__PURE__*/React__default.createElement(InputMask, _extends({
    ref: ref,
    className: inputClasses,
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

var InputCheckbox = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      labelClassName = props.labelClassName,
      inputClassName = props.inputClassName,
      type = props.type,
      caretPos = props.caretPos,
      rest = _objectWithoutProperties(props, ["label", "id", "className", "labelClassName", "inputClassName", "type", "caretPos"]);

  var ref = React.useRef();
  var classes = genClasses.cEx(["single-input --checkbox flex-column", className]);
  var labelClasses = genClasses.cEx([labelClassName]);
  var inputClasses = genClasses.cEx(["input", inputClassName]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React__default.createElement(InputMask, _extends({
    checked: "checked",
    ref: ref,
    className: inputClasses,
    id: id,
    type: "checkbox"
  }, rest)), /*#__PURE__*/React__default.createElement("span", {
    className: "checkmark"
  })));
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
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-row just-start align-baseline columns-2"
  }, /*#__PURE__*/React__default.createElement(Input, {
    className: "grow-1",
    label: "Port",
    name: "port",
    placeholder: "8712",
    autoComplete: "off",
    onChange: formik$1.handleChange,
    value: formik$1.values.port
  }), /*#__PURE__*/React__default.createElement(InputCheckbox, {
    label: "SSL",
    name: "secure",
    type: "checkbox",
    id: "secure",
    onChange: formik$1.handleChange,
    checked: formik$1.values.secure
  })), /*#__PURE__*/React__default.createElement(Input, {
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

var Footer = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['layout-footer', className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("footer", _extends({
    className: classes
  }, rest), props.children));
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

var bem = function bem(main) {
  return [main, function (modifier) {
    return "".concat(main, "--").concat(modifier);
  }];
};

var _bem = bem('container-fullscreen'),
    _bem2 = _slicedToArray(_bem, 2),
    __base_class = _bem2[0],
    modifier = _bem2[1];

var index$6 = (function (props) {
  var offset = props.offset,
      className = props.className,
      rest = _objectWithoutProperties(props, ["offset", "className"]);

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
  var classes = genClasses.cEx([__base_class, className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    style: {
      '--vh': "".concat(vh, "px")
    }
  }, props.children);
});

var index$7 = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['active-call', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children);
});

var index$8 = (function (props) {
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

var index$9 = (function (props) {
  var className = props.className,
      closed = props.closed,
      rest = _objectWithoutProperties(props, ["className", "closed"]);
  /*  const [visible,setVisible] = useState(closed || true)
  
    useEffect(()=>{
      setVisible(closed || true)
    },[closed])
  */


  var classes = genClasses.cEx(['sidebar', function (_) {
    return closed === true ? 'sidebar--state-closed' : '';
  }, className]);
  return /*#__PURE__*/React__default.createElement("aside", {
    className: classes
  }, props.children);
});

var index$a = (function (props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  var classes = genClasses.cEx(['list', className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var index$b = (function (props) {
  var className = props.className,
      Icon = props.Icon,
      label = props.label,
      Optional = props.Optional,
      rest = _objectWithoutProperties(props, ["className", "Icon", "label", "Optional"]);

  var classes = genClasses.cEx(['list-item', className]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/React__default.createElement("div", {
    className: "list-item-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__icon"
  }, Icon && /*#__PURE__*/React__default.createElement(Icon, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__title"
  }, props.children)), /*#__PURE__*/React__default.createElement("div", {
    className: "list-item__optional"
  }, Optional && /*#__PURE__*/React__default.createElement(Optional, null)));
});

var build = createCommonjsModule(function (module, exports) {
  !function (V, e) {
    module.exports = e(React__default);
  }(commonjsGlobal, function (V) {
    return function (V) {
      function e(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
          i: n,
          l: !1,
          exports: {}
        };
        return V[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
      }

      var t = {};
      return e.m = V, e.c = t, e.d = function (V, t, n) {
        e.o(V, t) || Object.defineProperty(V, t, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
      }, e.n = function (V) {
        var t = V && V.__esModule ? function () {
          return V.default;
        } : function () {
          return V;
        };
        return e.d(t, "a", t), t;
      }, e.o = function (V, e) {
        return Object.prototype.hasOwnProperty.call(V, e);
      }, e.p = "", e(e.s = 3);
    }([function (e, t) {
      e.exports = V;
    }, function (V, e, t) {
      V.exports = t(7)();
    }, function (V, e, t) {
      !function (e, t) {
        V.exports = t();
      }(0, function () {
        return function (V) {
          function e(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
              i: n,
              l: !1,
              exports: {}
            };
            return V[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
          }

          var t = {};
          return e.m = V, e.c = t, e.d = function (V, t, n) {
            e.o(V, t) || Object.defineProperty(V, t, {
              configurable: !1,
              enumerable: !0,
              get: n
            });
          }, e.n = function (V) {
            var t = V && V.__esModule ? function () {
              return V.default;
            } : function () {
              return V;
            };
            return e.d(t, "a", t), t;
          }, e.o = function (V, e) {
            return Object.prototype.hasOwnProperty.call(V, e);
          }, e.p = "", e(e.s = 1);
        }([function (V, e, t) {

          function n(V, e, t) {
            return e in V ? Object.defineProperty(V, e, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : V[e] = t, V;
          }

          t.d(e, "e", function () {
            return o;
          }), t.d(e, "a", function () {
            return i;
          }), t.d(e, "f", function () {
            return a;
          }), t.d(e, "c", function () {
            return A;
          }), t.d(e, "b", function () {
            return c;
          }), t.d(e, "d", function () {
            return u;
          });
          var r,
              o = ["user", "environment"],
              i = {
            USER: "user",
            ENVIRONMENT: "environment"
          },
              a = ["jpg", "png"],
              A = {
            PNG: "png",
            JPG: "jpg"
          },
              c = (r = {}, n(r, "jpg", "image/jpeg"), n(r, "png", "image/png"), r),
              u = {
            audio: !1,
            video: !0
          };
        }, function (V, e, t) {
          V.exports = t(2);
        }, function (V, e, t) {

          function n(V, e) {
            if (!(V instanceof e)) throw new TypeError("Cannot call a class as a function");
          }

          Object.defineProperty(e, "__esModule", {
            value: !0
          }), t.d(e, "FACING_MODES", function () {
            return c;
          }), t.d(e, "IMAGE_TYPES", function () {
            return u;
          });

          var r = t(3),
              o = t(5),
              i = function () {
            function V(V, e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(V, n.key, n);
              }
            }

            return function (e, t, n) {
              return t && V(e.prototype, t), n && V(e, n), e;
            };
          }(),
              a = r.a.IMAGE_TYPES.PNG,
              A = function () {
            function V(e) {
              n(this, V), this.videoElement = e, this.stream = null, this.numberOfMaxResolutionTry = 1, this.settings = null, this.windowURL = r.a.getWindowURL(), this.mediaDevices = r.a.getNavigatorMediaDevices();
            }

            return i(V, [{
              key: "_getStreamDevice",
              value: function (V, e) {
                var t = this;
                return new Promise(function (n, o) {
                  var i = r.a.getIdealConstraints(V, e);
                  t.mediaDevices.getUserMedia(i).then(function (V) {
                    t._gotStream(V), n(V);
                  }).catch(function (V) {
                    o(V);
                  });
                });
              }
            }, {
              key: "_getStreamDeviceMaxResolution",
              value: function (V) {
                var e = this,
                    t = r.a.getMaxResolutionConstraints(V, this.numberOfMaxResolutionTry);

                if (null == t) {
                  var n = {};
                  return this._getStreamDevice(V, n);
                }

                return new Promise(function (n, r) {
                  e.mediaDevices.getUserMedia(t).then(function (V) {
                    e._gotStream(V), n(V);
                  }).catch(function (t) {
                    setTimeout(function () {
                      e.numberOfMaxResolutionTry += 1, e._getStreamDeviceMaxResolution(V).catch(function () {
                        r(t);
                      });
                    }, 20);
                  });
                });
              }
            }, {
              key: "_setVideoSrc",
              value: function (V) {
                if ("srcObject" in this.videoElement) this.videoElement.srcObject = V;else {
                  var e = this.windowURL.createObjectURL(V);
                  this.videoElement.src = e;
                }
              }
            }, {
              key: "_setSettings",
              value: function (V) {
                this.settings = null;
                var e = V && V.getTracks ? V.getTracks() : [];
                e.length > 0 && e[0].getSettings && (this.settings = e[0].getSettings());
              }
            }, {
              key: "_gotStream",
              value: function (V) {
                this.stream = V, this._setSettings(V), this._setVideoSrc(V);
              }
            }, {
              key: "getCameraSettings",
              value: function () {
                return this.settings;
              }
            }, {
              key: "startCamera",
              value: function (V, e) {
                var t = this;
                return this.stopCamera().then(function () {}).catch(function () {}).then(function () {
                  return t._getStreamDevice(V, e);
                });
              }
            }, {
              key: "startCameraMaxResolution",
              value: function () {
                var V = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.stopCamera().then(function () {}).catch(function () {}).then(function () {
                  return V._getStreamDeviceMaxResolution(e);
                });
              }
            }, {
              key: "getDataUri",
              value: function (V) {
                var e = {
                  sizeFactor: void 0 === V.sizeFactor ? o.c : V.sizeFactor,
                  imageType: void 0 === V.imageType ? a : V.imageType,
                  imageCompression: void 0 === V.imageCompression ? o.a : V.imageCompression,
                  isImageMirror: void 0 === V.isImageMirror ? o.b : V.isImageMirror
                };
                return r.a.getDataUri(this.videoElement, e);
              }
            }, {
              key: "stopCamera",
              value: function () {
                var V = this;
                return new Promise(function (e, t) {
                  V.stream && (V.stream.getTracks().forEach(function (V) {
                    V.stop();
                  }), V.videoElement.src = "", V.stream = null, V._setSettings(null), e()), t(Error("no stream to stop!"));
                });
              }
            }]), V;
          }(),
              c = r.a.FACING_MODES,
              u = r.a.IMAGE_TYPES;

          e.default = A;
        }, function (V, e, t) {

          function n(V, e) {
            if (!(V instanceof e)) throw new TypeError("Cannot call a class as a function");
          }

          var r = t(4),
              o = t(0),
              i = function () {
            function V(V, e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(V, n.key, n);
              }
            }

            return function (e, t, n) {
              return t && V(e.prototype, t), n && V(e, n), e;
            };
          }(),
              a = function () {
            function V() {
              n(this, V);
            }

            return i(V, null, [{
              key: "getDataUri",
              value: function (V, e) {
                var t = e.sizeFactor,
                    n = e.imageType,
                    o = e.imageCompression,
                    i = e.isImageMirror,
                    a = V.videoWidth,
                    A = V.videoHeight,
                    c = Object(r.b)(a, A, t),
                    u = c.imageWidth,
                    s = c.imageHeight,
                    l = document.createElement("canvas");
                l.width = u, l.height = s;
                var f = l.getContext("2d");
                return i && f.setTransform(-1, 0, 0, 1, l.width, 0), f.drawImage(V, 0, 0, u, s), Object(r.a)(l, n, o);
              }
            }, {
              key: "getWindowURL",
              value: function () {
                return window.URL || window.webkitURL || window.mozURL || window.msURL;
              }
            }, {
              key: "getNavigatorMediaDevices",
              value: function () {
                var V = null,
                    e = !(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia),
                    t = !(!navigator.mozGetUserMedia && !navigator.webkitGetUserMedia);
                if (e) V = navigator.mediaDevices;else if (t) {
                  var n = navigator.mozGetUserMedia || navigator.webkitGetUserMedia,
                      r = {
                    getUserMedia: function (V) {
                      return new Promise(function (e, t) {
                        n.call(navigator, V, e, t);
                      });
                    }
                  };
                  V = Object.assign(n, r);
                }
                return V;
              }
            }, {
              key: "isSupportedFacingMode",
              value: function () {
                return V.getNavigatorMediaDevices().getSupportedConstraints().facingMode;
              }
            }, {
              key: "getIdealConstraints",
              value: function (V, e) {
                var t = {
                  audio: !1,
                  video: {}
                };
                if (Object(r.c)(V, e)) return o.d;
                var n = navigator.mediaDevices.getSupportedConstraints();
                return n.width && n.height && n.facingMode ? (V && o.e.includes(V) && (t.video.facingMode = V), e && e.width && (t.video.width = e.width), e && e.height && (t.video.height = e.height), t) : (console.error("Constraint width height or facingMode not supported!"), o.d);
              }
            }, {
              key: "getMaxResolutionConstraints",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1],
                    n = V.getIdealConstraints(e),
                    r = n.video.facingMode,
                    o = [{
                  width: {
                    min: 640
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 800
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 900
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 1024
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 1080
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 1280
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 1920
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 2560
                  },
                  ideal: {
                    facingMode: r
                  }
                }, {
                  width: {
                    min: 3840
                  },
                  ideal: {
                    facingMode: r
                  }
                }];
                if (t >= o.length) return null;
                var i = o.slice(0, -t);
                return n.video.advanced = i, n;
              }
            }, {
              key: "FACING_MODES",
              get: function () {
                return o.a;
              }
            }, {
              key: "IMAGE_TYPES",
              get: function () {
                return o.c;
              }
            }]), V;
          }();

          e.a = a;
        }, function (V, e, t) {

          function n(V, e) {
            if (!(e >= 0 && e <= 1)) throw new Error(e + " is invalid imageCompression, choose between: [0, 1]");
            if (!c.f.includes(V)) throw new Error(V + " is invalid imageType, choose between: " + c.f.join(", "));
            return !0;
          }

          function r(V, e) {
            var t = {};

            try {
              n(V, e), t.imageType = V, t.imageCompression = e;
            } catch (V) {
              console.error(V), console.error("default value of " + c.c.PNG + " is used"), t.imageType = c.c.PNG, t.imageCompression = null;
            }

            return t;
          }

          function o(V, e, t) {
            var n = V * parseFloat(t);
            return {
              imageWidth: n,
              imageHeight: e / (V / n)
            };
          }

          function i(V, e, t) {
            return r(e, t).imageType === c.c.JPG ? t ? V.toDataURL(c.b[c.c.JPG], t) : V.toDataURL(c.b[c.c.JPG]) : V.toDataURL(c.b[e]);
          }

          function a(V) {
            if ("object" === ("undefined" === typeof V ? "undefined" : u(V))) for (var e in V) if (V.hasOwnProperty(e)) return !1;
            return !0;
          }

          function A(V, e) {
            return !(V || e && !a(e));
          }

          e.b = o, e.a = i, e.c = A;
          var c = t(0),
              u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (V) {
            return typeof V;
          } : function (V) {
            return V && "function" === typeof Symbol && V.constructor === Symbol && V !== Symbol.prototype ? "symbol" : typeof V;
          };
        }, function (V, e, t) {

          t.d(e, "c", function () {
            return n;
          }), t.d(e, "a", function () {
            return r;
          }), t.d(e, "b", function () {
            return o;
          });
          var n = 1,
              r = null,
              o = !1;
        }]);
      });
    }, function (V, e, t) {
      V.exports = t(4);
    }, function (V, e, t) {

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var n = t(5);
      t.d(e, "Camera", function () {
        return n.c;
      }), t.d(e, "FACING_MODES", function () {
        return n.a;
      }), t.d(e, "IMAGE_TYPES", function () {
        return n.b;
      }), e.default = n.c;
    }, function (V, e, t) {

      var n = t(6);
      t.d(e, "a", function () {
        return n.a;
      }), t.d(e, "b", function () {
        return n.b;
      }), e.c = n.c;
    }, function (V, e, t) {

      function n(V) {
        function e() {
          p && clearTimeout(p);
        }

        function t() {
          var t = {
            sizeFactor: V.sizeFactor,
            imageType: V.imageType,
            imageCompression: V.imageCompression,
            isImageMirror: V.isImageMirror
          },
              n = j(t);
          V.isSilentMode || Object(f.c)(), "function" === typeof V.onTakePhoto && V.onTakePhoto(n), A(n), v(!1), e(), p = setTimeout(function () {
            v(!0), "function" === typeof V.onTakePhotoAnimationDone && V.onTakePhotoAnimationDone(n);
          }, 900);
        }

        var n = Object(r.useState)(""),
            i = g(n, 2),
            a = i[0],
            A = i[1],
            h = Object(r.useState)(!0),
            d = g(h, 2),
            m = d[0],
            v = d[1],
            y = Object(r.useState)(""),
            k = g(y, 2),
            b = k[0],
            E = k[1],
            w = Object(r.useRef)(null),
            C = Object(c.a)(w, V.idealFacingMode, V.idealResolution, V.isMaxResolution),
            U = g(C, 4),
            S = U[0],
            x = U[1],
            I = U[2],
            j = U[3];
        Object(r.useEffect)(function () {
          S ? "function" === typeof V.onCameraStart && V.onCameraStart(S) : "function" === typeof V.onCameraStop && V.onCameraStop();
        }, [S]), Object(r.useEffect)(function () {
          x && (E(x.name + " " + x.message), "function" === typeof V.onCameraError && V.onCameraError(x));
        }, [x]), Object(r.useEffect)(function () {
          I && Object(f.d)(I.message);
        }, [I]);
        var T = Object(f.b)(m, V.isImageMirror),
            R = Object(f.a)(!m),
            L = V.isFullscreen ? "react-html5-camera-photo-fullscreen" : "";
        return o.a.createElement("div", {
          className: "react-html5-camera-photo " + L
        }, o.a.createElement(l.a, {
          cssClass: "display-error",
          isDisplayError: V.isDisplayStartCameraError,
          errorMsg: b
        }), o.a.createElement(s.a, {
          isShowWhiteFlash: !m
        }), o.a.createElement("img", {
          style: R,
          alt: "camera",
          src: a
        }), o.a.createElement("video", {
          style: T,
          ref: w,
          autoPlay: !0,
          muted: "muted",
          playsInline: !0
        }), o.a.createElement(u.a, {
          isClicked: !m,
          onClick: t
        }));
      }

      var r = t(0),
          o = t.n(r),
          i = t(1),
          a = t.n(i),
          A = t(2),
          c = (t.n(A), t(9)),
          u = t(13),
          s = t(15),
          l = t(17),
          f = t(19),
          h = t(21);
      t.n(h);
      t.o(A, "FACING_MODES") && t.d(e, "a", function () {
        return A.FACING_MODES;
      }), t.o(A, "IMAGE_TYPES") && t.d(e, "b", function () {
        return A.IMAGE_TYPES;
      });

      var g = function () {
        function V(V, e) {
          var t = [],
              n = !0,
              r = !1,
              o = void 0;

          try {
            for (var i, a = V[Symbol.iterator](); !(n = (i = a.next()).done) && (t.push(i.value), !e || t.length !== e); n = !0);
          } catch (V) {
            r = !0, o = V;
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (r) throw o;
            }
          }

          return t;
        }

        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return V(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          p = null;

      e.c = n, n.propTypes = {
        onTakePhoto: a.a.func,
        onTakePhotoAnimationDone: a.a.func,
        onCameraError: a.a.func,
        idealFacingMode: a.a.string,
        idealResolution: a.a.object,
        imageType: a.a.string,
        isImageMirror: a.a.bool,
        isSilentMode: a.a.bool,
        isDisplayStartCameraError: a.a.bool,
        imageCompression: a.a.number,
        isMaxResolution: a.a.bool,
        isFullscreen: a.a.bool,
        sizeFactor: a.a.number,
        onCameraStart: a.a.func,
        onCameraStop: a.a.func
      }, n.defaultProps = {
        isImageMirror: !0,
        isDisplayStartCameraError: !0
      };
    }, function (V, e, t) {

      function n() {}

      function r() {}

      var o = t(8);
      r.resetWarningCache = n, V.exports = function () {
        function V(V, e, t, n, r, i) {
          if (i !== o) {
            var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw a.name = "Invariant Violation", a;
          }
        }

        function e() {
          return V;
        }

        V.isRequired = V;
        var t = {
          array: V,
          bool: V,
          func: V,
          number: V,
          object: V,
          string: V,
          symbol: V,
          any: V,
          arrayOf: e,
          element: V,
          elementType: V,
          instanceOf: e,
          node: V,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: r,
          resetWarningCache: n
        };
        return t.PropTypes = t, t;
      };
    }, function (V, e, t) {

      V.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function (V, e, t) {

      function n(V) {
        return function () {
          var e = V.apply(this, arguments);
          return new Promise(function (V, t) {
            function n(r, o) {
              try {
                var i = e[r](o),
                    a = i.value;
              } catch (V) {
                return void t(V);
              }

              if (!i.done) return Promise.resolve(a).then(function (V) {
                n("next", V);
              }, function (V) {
                n("throw", V);
              });
              V(a);
            }

            return n("next");
          });
        };
      }

      function r(V, e, t, r) {
        function o(V) {
          return s.getDataUri(V);
        }

        var A = Object(a.useState)(null),
            f = u(A, 2),
            h = f[0],
            g = f[1],
            p = Object(a.useState)(null),
            d = u(p, 2),
            m = d[0],
            v = d[1],
            y = Object(a.useState)(null),
            k = u(y, 2),
            b = k[0],
            E = k[1];
        return Object(a.useEffect)(function () {
          V && V.current && (s = new c.a(V.current));
        }, [V]), Object(a.useEffect)(function () {
          var o = function () {
            var V = n(i.a.mark(function V() {
              var n;
              return i.a.wrap(function (V) {
                for (;;) switch (V.prev = V.next) {
                  case 0:
                    if (l = !0, V.prev = 1, n = null, !r) {
                      V.next = 9;
                      break;
                    }

                    return V.next = 6, s.startCameraMaxResolution(e);

                  case 6:
                    n = V.sent, V.next = 12;
                    break;

                  case 9:
                    return V.next = 11, s.startCamera(e, t);

                  case 11:
                    n = V.sent;

                  case 12:
                    g(n), v(null), V.next = 19;
                    break;

                  case 16:
                    V.prev = 16, V.t0 = V.catch(1), v(V.t0);

                  case 19:
                  case "end":
                    return V.stop();
                }
              }, V, this, [[1, 16]]);
            }));
            return function () {
              return V.apply(this, arguments);
            };
          }();

          if (h) return function () {
            function e() {
              return t.apply(this, arguments);
            }

            var t = n(i.a.mark(function e() {
              return i.a.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (e.prev = 0, !l) {
                      e.next = 5;
                      break;
                    }

                    return l = !1, e.next = 5, s.stopCamera();

                  case 5:
                    V && V.current && (g(null), E(null)), e.next = 11;
                    break;

                  case 8:
                    e.prev = 8, e.t0 = e.catch(0), E(e.t0);

                  case 11:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 8]]);
            }));
            return e;
          }();
          o();
        }, [V, h, e, t, r]), [h, m, b, o];
      }

      e.a = r;

      var o = t(10),
          i = t.n(o),
          a = t(0),
          A = (t.n(a), t(2)),
          c = t.n(A),
          u = function () {
        function V(V, e) {
          var t = [],
              n = !0,
              r = !1,
              o = void 0;

          try {
            for (var i, a = V[Symbol.iterator](); !(n = (i = a.next()).done) && (t.push(i.value), !e || t.length !== e); n = !0);
          } catch (V) {
            r = !0, o = V;
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (r) throw o;
            }
          }

          return t;
        }

        return function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return V(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          s = null,
          l = !1;
    }, function (V, e, t) {
      V.exports = t(11);
    }, function (V, e, t) {
      var n = function () {
        return this;
      }() || Function("return this")(),
          r = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
          o = r && n.regeneratorRuntime;

      if (n.regeneratorRuntime = void 0, V.exports = t(12), r) n.regeneratorRuntime = o;else try {
        delete n.regeneratorRuntime;
      } catch (V) {
        n.regeneratorRuntime = void 0;
      }
    }, function (V, e) {
      !function (e) {

        function t(V, e, t, n) {
          var o = e && e.prototype instanceof r ? e : r,
              i = Object.create(o.prototype),
              a = new f(n || []);
          return i._invoke = c(V, t, a), i;
        }

        function n(V, e, t) {
          try {
            return {
              type: "normal",
              arg: V.call(e, t)
            };
          } catch (V) {
            return {
              type: "throw",
              arg: V
            };
          }
        }

        function r() {}

        function o() {}

        function i() {}

        function a(V) {
          ["next", "throw", "return"].forEach(function (e) {
            V[e] = function (V) {
              return this._invoke(e, V);
            };
          });
        }

        function A(V) {
          function e(t, r, o, i) {
            var a = n(V[t], V, r);

            if ("throw" !== a.type) {
              var A = a.arg,
                  c = A.value;
              return c && "object" === typeof c && m.call(c, "__await") ? Promise.resolve(c.__await).then(function (V) {
                e("next", V, o, i);
              }, function (V) {
                e("throw", V, o, i);
              }) : Promise.resolve(c).then(function (V) {
                A.value = V, o(A);
              }, i);
            }

            i(a.arg);
          }

          function t(V, t) {
            function n() {
              return new Promise(function (n, r) {
                e(V, t, n, r);
              });
            }

            return r = r ? r.then(n, n) : n();
          }

          var r;
          this._invoke = t;
        }

        function c(V, e, t) {
          var r = C;
          return function (o, i) {
            if (r === S) throw new Error("Generator is already running");

            if (r === x) {
              if ("throw" === o) throw i;
              return g();
            }

            for (t.method = o, t.arg = i;;) {
              var a = t.delegate;

              if (a) {
                var A = u(a, t);

                if (A) {
                  if (A === I) continue;
                  return A;
                }
              }

              if ("next" === t.method) t.sent = t._sent = t.arg;else if ("throw" === t.method) {
                if (r === C) throw r = x, t.arg;
                t.dispatchException(t.arg);
              } else "return" === t.method && t.abrupt("return", t.arg);
              r = S;
              var c = n(V, e, t);

              if ("normal" === c.type) {
                if (r = t.done ? x : U, c.arg === I) continue;
                return {
                  value: c.arg,
                  done: t.done
                };
              }

              "throw" === c.type && (r = x, t.method = "throw", t.arg = c.arg);
            }
          };
        }

        function u(V, e) {
          var t = V.iterator[e.method];

          if (t === p) {
            if (e.delegate = null, "throw" === e.method) {
              if (V.iterator.return && (e.method = "return", e.arg = p, u(V, e), "throw" === e.method)) return I;
              e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return I;
          }

          var r = n(t, V.iterator, e.arg);
          if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, I;
          var o = r.arg;
          return o ? o.done ? (e[V.resultName] = o.value, e.next = V.nextLoc, "return" !== e.method && (e.method = "next", e.arg = p), e.delegate = null, I) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, I);
        }

        function s(V) {
          var e = {
            tryLoc: V[0]
          };
          1 in V && (e.catchLoc = V[1]), 2 in V && (e.finallyLoc = V[2], e.afterLoc = V[3]), this.tryEntries.push(e);
        }

        function l(V) {
          var e = V.completion || {};
          e.type = "normal", delete e.arg, V.completion = e;
        }

        function f(V) {
          this.tryEntries = [{
            tryLoc: "root"
          }], V.forEach(s, this), this.reset(!0);
        }

        function h(V) {
          if (V) {
            var e = V[y];
            if (e) return e.call(V);
            if ("function" === typeof V.next) return V;

            if (!isNaN(V.length)) {
              var t = -1,
                  n = function e() {
                for (; ++t < V.length;) if (m.call(V, t)) return e.value = V[t], e.done = !1, e;

                return e.value = p, e.done = !0, e;
              };

              return n.next = n;
            }
          }

          return {
            next: g
          };
        }

        function g() {
          return {
            value: p,
            done: !0
          };
        }

        var p,
            d = Object.prototype,
            m = d.hasOwnProperty,
            v = "function" === typeof Symbol ? Symbol : {},
            y = v.iterator || "@@iterator",
            k = v.asyncIterator || "@@asyncIterator",
            b = v.toStringTag || "@@toStringTag",
            E = "object" === typeof V,
            w = e.regeneratorRuntime;
        if (w) return void (E && (V.exports = w));
        w = e.regeneratorRuntime = E ? V.exports : {}, w.wrap = t;
        var C = "suspendedStart",
            U = "suspendedYield",
            S = "executing",
            x = "completed",
            I = {},
            j = {};

        j[y] = function () {
          return this;
        };

        var T = Object.getPrototypeOf,
            R = T && T(T(h([])));
        R && R !== d && m.call(R, y) && (j = R);
        var L = i.prototype = r.prototype = Object.create(j);
        o.prototype = L.constructor = i, i.constructor = o, i[b] = o.displayName = "GeneratorFunction", w.isGeneratorFunction = function (V) {
          var e = "function" === typeof V && V.constructor;
          return !!e && (e === o || "GeneratorFunction" === (e.displayName || e.name));
        }, w.mark = function (V) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(V, i) : (V.__proto__ = i, b in V || (V[b] = "GeneratorFunction")), V.prototype = Object.create(L), V;
        }, w.awrap = function (V) {
          return {
            __await: V
          };
        }, a(A.prototype), A.prototype[k] = function () {
          return this;
        }, w.AsyncIterator = A, w.async = function (V, e, n, r) {
          var o = new A(t(V, e, n, r));
          return w.isGeneratorFunction(e) ? o : o.next().then(function (V) {
            return V.done ? V.value : o.next();
          });
        }, a(L), L[b] = "Generator", L[y] = function () {
          return this;
        }, L.toString = function () {
          return "[object Generator]";
        }, w.keys = function (V) {
          var e = [];

          for (var t in V) e.push(t);

          return e.reverse(), function t() {
            for (; e.length;) {
              var n = e.pop();
              if (n in V) return t.value = n, t.done = !1, t;
            }

            return t.done = !0, t;
          };
        }, w.values = h, f.prototype = {
          constructor: f,
          reset: function (V) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = p, this.done = !1, this.delegate = null, this.method = "next", this.arg = p, this.tryEntries.forEach(l), !V) for (var e in this) "t" === e.charAt(0) && m.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = p);
          },
          stop: function () {
            this.done = !0;
            var V = this.tryEntries[0],
                e = V.completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (V) {
            function e(e, n) {
              return o.type = "throw", o.arg = V, t.next = e, n && (t.method = "next", t.arg = p), !!n;
            }

            if (this.done) throw V;

            for (var t = this, n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n],
                  o = r.completion;
              if ("root" === r.tryLoc) return e("end");

              if (r.tryLoc <= this.prev) {
                var i = m.call(r, "catchLoc"),
                    a = m.call(r, "finallyLoc");

                if (i && a) {
                  if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                  if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                } else if (i) {
                  if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                } else {
                  if (!a) throw new Error("try statement without catch or finally");
                  if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                }
              }
            }
          },
          abrupt: function (V, e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];

              if (n.tryLoc <= this.prev && m.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var r = n;
                break;
              }
            }

            r && ("break" === V || "continue" === V) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
            var o = r ? r.completion : {};
            return o.type = V, o.arg = e, r ? (this.method = "next", this.next = r.finallyLoc, I) : this.complete(o);
          },
          complete: function (V, e) {
            if ("throw" === V.type) throw V.arg;
            return "break" === V.type || "continue" === V.type ? this.next = V.arg : "return" === V.type ? (this.rval = this.arg = V.arg, this.method = "return", this.next = "end") : "normal" === V.type && e && (this.next = e), I;
          },
          finish: function (V) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var t = this.tryEntries[e];
              if (t.finallyLoc === V) return this.complete(t.completion, t.afterLoc), l(t), I;
            }
          },
          catch: function (V) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var t = this.tryEntries[e];

              if (t.tryLoc === V) {
                var n = t.completion;

                if ("throw" === n.type) {
                  var r = n.arg;
                  l(t);
                }

                return r;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function (V, e, t) {
            return this.delegate = {
              iterator: h(V),
              resultName: e,
              nextLoc: t
            }, "next" === this.method && (this.arg = p), I;
          }
        };
      }(function () {
        return this;
      }() || Function("return this")());
    }, function (V, e, t) {

      var n = t(0),
          r = t.n(n),
          o = t(1),
          i = t.n(o),
          a = t(14),
          A = (t.n(a), function (V) {
        var e = V.onClick,
            t = V.isClicked,
            n = t ? "is-clicked" : "";
        return r.a.createElement("div", {
          id: "container-circles"
        }, r.a.createElement("div", {
          id: "outer-circle",
          onClick: function (V) {
            t || e();
          }
        }, r.a.createElement("div", {
          id: "inner-circle",
          className: n
        })));
      });
      A.propTypes = {
        onClick: i.a.func.isRequired,
        isClicked: i.a.bool.isRequired
      }, e.a = A;
    }, function (V, e) {}, function (V, e, t) {

      var n = t(0),
          r = t.n(n),
          o = t(1),
          i = t.n(o),
          a = t(16),
          A = (t.n(a), function (V) {
        var e = V.isShowWhiteFlash,
            t = e ? "do-transition" : "",
            n = t + " normal";
        return r.a.createElement("div", {
          id: "white-flash",
          className: n
        });
      });
      A.propTypes = {
        isShowWhiteFlash: i.a.bool.isRequired
      }, e.a = A;
    }, function (V, e) {}, function (V, e, t) {

      function n(V, e) {
        return V && e && e.length > 0;
      }

      var r = t(0),
          o = t.n(r),
          i = t(1),
          a = t.n(i),
          A = t(18),
          c = (t.n(A), function (V) {
        var e = V.isDisplayError,
            t = V.errorMsg,
            r = V.cssClass;
        return n(e, t) ? (console.log("cssClass", r), o.a.createElement("div", {
          className: r,
          id: "display-error"
        }, o.a.createElement("h1", null, "Camera error: ", t))) : null;
      });
      c.propTypes = {
        isDisplayError: a.a.bool,
        errorMsg: a.a.string,
        cssClass: a.a.string
      }, e.a = c;
    }, function (V, e) {}, function (V, e, t) {

      function n(V) {
        return V ? {
          display: "inline-block"
        } : {
          display: "none"
        };
      }

      function r(V) {
        return V ? {
          transform: "rotateY(180deg)"
        } : {
          transform: "none"
        };
      }

      function o(V, e) {
        return Object.assign({}, r(e), n(V));
      }

      function i() {
        new Audio("data:audio/mp3;base64," + c.a.base64).play();
      }

      function a(V) {
        console.info("react-html5-camera-photo info:", V);
      }

      e.a = n, e.b = o, e.c = i, e.d = a;
      var A = t(20),
          c = t.n(A);
    }, function (V, e) {
      V.exports = {
        base64: "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Oau1+DczWWohH8L0eh/nWTbo8/OvyZ/ccZuEf/+Rn/l/L/M//+ZEqKpH+ZFToqJ+iqi+i/yoi+ip9yhgYMh27OZUWpgoIEd1ITFaxUllRQWcDAaskNCYwCgJAlEQaBsJgsBQSlREGgbCYLBUBAUSiINB2dKnUZK3kSJ1948Y9LNCn/I9c763Wf1AVct8rUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5REtg5yOQ+/ACAYIkLiWBAEIy5G6UjKQIBcAPWAH5ARjShVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVACCU025+ZGfywyOy3//ksyP+XMmstIyNWCggQNHI1ls////WWRyMmVgYME6GTLJZ///2WWxyNWWSoZGrWyzL/9WVqCBOhkyhgYMI6GrBQUqFpoVFP9bDILCzOLiv/rFRYk//qF+LCrDKm/4o2sVFtbP6hdmLCsyoXUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5Rkjg/ygl8ruCAaQiiABWAAAAAAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5RkUY/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
      };
    }, function (V, e) {}]);
  });
});
var Camera = unwrapExports(build);

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

  var classes = genClasses.cEx(["chat-footer__tools", "flex-row", "just-between", className]); //toolbarHandlePhoto={_=>setCapturePic(true)} toolbarHandleFile={_=>  fileUploader.current.click() } 

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), capturePic && /*#__PURE__*/React__default.createElement(Camera, {
    onTakePhoto: function onTakePhoto(x) {
      handlePhoto(x);
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
  }), /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick(x) {
      return setCapturePic(true);
    },
    className: "button text icon icon--32"
  }, /*#__PURE__*/React__default.createElement(md.MdCameraAlt, null), /*#__PURE__*/React__default.createElement("h2", null, "photo")), /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick(_) {
      return fileUploader.current.click();
    },
    className: "button text icon icon--32"
  }, /*#__PURE__*/React__default.createElement(md.MdAttachFile, null), /*#__PURE__*/React__default.createElement("h2", null, "Fichier")), /*#__PURE__*/React__default.createElement("button", {
    onClick: handleAudio,
    className: "button text icon icon--32"
  }, /*#__PURE__*/React__default.createElement(md.MdKeyboardVoice, null), /*#__PURE__*/React__default.createElement("h2", null, "audio")));
});

var ChatInput = (function (props) {
  var className = props.className,
      handleChange = props.handleChange,
      handleSubmit = props.handleSubmit,
      value = props.value,
      rest = _objectWithoutProperties(props, ["className", "handleChange", "handleSubmit", "value"]);

  var classes = genClasses.cEx(['chat-footer__message-input', 'flex-row', 'align-stretch', className]);
  return /*#__PURE__*/React__default.createElement("form", {
    className: classes,
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default.createElement(Input, {
    name: "message",
    placeholder: "message",
    autoComplete: "off",
    onChange: handleChange,
    value: value
  }), /*#__PURE__*/React__default.createElement("button", {
    className: "button button--send text icon--32 flex align-center just-center"
  }, /*#__PURE__*/React__default.createElement(md.MdArrowForward, null)));
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

var __toolbar_prefix = 'toolbar';
var __input_prefix = 'input';
var __record_prefix = 'record';
var ChatFooter = (function (props) {
  var className = props.className,
      recording = props.recording,
      record = props.record,
      afterMainComponent = _objectWithoutProperties(props, ["className", "recording", "record"]);

  var classes = genClasses.cEx(['chat-footer', className]);

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

  console.log(recordProps, rest);
  return /*#__PURE__*/React__default.createElement(Footer, _extends({
    className: classes
  }, rest), /*#__PURE__*/React__default.createElement(DefaultToolbar$1, ReactUtils_5(__toolbar_prefix, toolbarProps)), !recording && !record && /*#__PURE__*/React__default.createElement(ChatInput, ReactUtils_5(__input_prefix, inputProps)), (recording || record) && /*#__PURE__*/React__default.createElement(ChatRecord, _extends({
    recording: recording,
    record: record
  }, ReactUtils_5(__record_prefix, recordProps))));
});

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

var index$c = (function (props) {
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
    return dragging ? 'drop' : '';
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
  }, /*#__PURE__*/React__default.createElement("div", {
    className: classesOverlay
  }, " ", /*#__PURE__*/React__default.createElement("h2", null, " lachez pour envoyer "), " ", /*#__PURE__*/React__default.createElement(md.MdCloudUpload, null)), props.children), /*#__PURE__*/React__default.createElement(ChatFooter, {
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

var index$d = (function (props) {
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

var index$e = (function (props) {
  var handleSubmit = props.handleSubmit;
  return /*#__PURE__*/React__default.createElement(Landing, null, /*#__PURE__*/React__default.createElement(OrganiserConfigurationForm, {
    handleSubmit: handleSubmit
  }));
});

var _bem$1 = bem('layout-flex'),
    _bem2$1 = _slicedToArray(_bem$1, 2),
    __base_class$1 = _bem2$1[0],
    modifier$1 = _bem2$1[1];
var LayoutFlex = (function (props) {
  var _ref;

  var className = props.className,
      justBetween = props.justBetween,
      justEvenly = props.justEvenly,
      alignCenter = props.alignCenter,
      justCenter = props.justCenter,
      rest = _objectWithoutProperties(props, ["className", "justBetween", "justEvenly", "alignCenter", "justCenter"]);

  var classes = genClasses.cEx([__base_class$1, (_ref = {}, _defineProperty(_ref, modifier$1('between'), function (_) {
    return justBetween;
  }), _defineProperty(_ref, modifier$1('evenly'), function (_) {
    return justEvenly;
  }), _defineProperty(_ref, modifier$1('center'), function (_) {
    return justCenter;
  }), _ref), className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, rest), props.children));
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

var _bem$2 = bem('video-call__toolbar'),
    _bem2$2 = _slicedToArray(_bem$2, 2),
    __base_class$2 = _bem2$2[0],
    modifier$2 = _bem2$2[1];

var DefaultToolbar$2 = (function (props) {
  console.log(props);

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

  var classes = genClasses.cEx([__base_class$2, "navbar", "navbar--toolbar", className]);
  return /*#__PURE__*/React__default.createElement(LayoutFlex, _extends({
    justEvenly: true,
    className: "navbar navbar--toolbar"
  }, rest), /*#__PURE__*/React__default.createElement(Button, {
    fit: true,
    toolbar: true,
    onClick: handleChat
  }, " ", /*#__PURE__*/React__default.createElement(md.MdChat, null), /*#__PURE__*/React__default.createElement("h2", null, "Chat")), /*#__PURE__*/React__default.createElement(Button, {
    fit: true,
    toolbar: true,
    onClick: _toggleMicro
  }, _microEnabled && /*#__PURE__*/React__default.createElement(fa.FaMicrophone, null), !_microEnabled && /*#__PURE__*/React__default.createElement(fa.FaMicrophoneSlash, null), /*#__PURE__*/React__default.createElement("h2", null, "Micro")), /*#__PURE__*/React__default.createElement(Button, {
    fit: true,
    toolbar: true,
    onClick: _toggleCamera
  }, _cameraEnabled && /*#__PURE__*/React__default.createElement(fa.FaVideo, null), !_cameraEnabled && /*#__PURE__*/React__default.createElement(fa.FaVideoSlash, null), /*#__PURE__*/React__default.createElement("h2", null, "Camera")), /*#__PURE__*/React__default.createElement(Button, {
    fit: true,
    toolbar: true,
    onClick: handleSwitch
  }, /*#__PURE__*/React__default.createElement(md.MdChat, null), /*#__PURE__*/React__default.createElement("h2", null, "Switch")));
});

var _bem$3 = bem('video-call'),
    _bem2$3 = _slicedToArray(_bem$3, 2),
    __base_class$3 = _bem2$3[0],
    modifier$3 = _bem2$3[1];
var index$f = (function (_ref) {
  var className = _ref.className,
      Toolbar = _ref.Toolbar,
      handleAnswer = _ref.handleAnswer,
      handleDiscard = _ref.handleDiscard,
      incoming = _ref.incoming,
      rest = _objectWithoutProperties(_ref, ["className", "Toolbar", "handleAnswer", "handleDiscard", "incoming"]);

  var classes = genClasses.cEx([__base_class$3, className]);

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
    className: classes
  }, notSuitableForToolbar), /*#__PURE__*/React__default.createElement(LayoutGrid, {
    className: "layout-video-call"
  }, /*#__PURE__*/React__default.createElement(LayoutFlex, {
    className: "position-relative"
  }, /*#__PURE__*/React__default.createElement(Video, _extends({
    autoPlay: true,
    loop: true
  }, ReactUtils_5('video', mainVideoProps))), /*#__PURE__*/React__default.createElement(LayoutFlex, {
    justEvenly: true,
    className: "".concat(__base_class$3, "__controls")
  }, incoming && /*#__PURE__*/React__default.createElement(Button, {
    round: true,
    success: true,
    onClick: handleAnswer
  }, /*#__PURE__*/React__default.createElement(md.MdCall, null)), /*#__PURE__*/React__default.createElement(Button, {
    round: true,
    failure: true,
    onClick: handleDiscard
  }, /*#__PURE__*/React__default.createElement(md.MdCallEnd, null)))), !Toolbar && /*#__PURE__*/React__default.createElement(DefaultToolbar$2, ReactUtils_5('toolbar', toolbarProps))), /*#__PURE__*/React__default.createElement(Draggable, {
    bounds: '.' + __base_class$3
  }, /*#__PURE__*/React__default.createElement(Video, _extends({
    preview: true,
    autoPlay: true,
    loop: true,
    mute: "true"
  }, ReactUtils_5('feedback', feedbackVideoProps)))));
});

exports.ActiveCallBar = index$7;
exports.Badge = Badge;
exports.Button = Button;
exports.Calling = index$5;
exports.Chat = index$c;
exports.ChatBubble = index;
exports.ChatHeader = ChatHeader;
exports.ChatHeaderStatus = ChatHeaderStatus;
exports.ChatHeaderToolbar = ChatHeaderToolbar;
exports.CustomerLanding = index$d;
exports.DebugPanel = index$8;
exports.Form = Form;
exports.Header = Header;
exports.HeaderBackButton = BackButton;
exports.HeaderTitle = Title;
exports.HeaderToolbar = Toolbar;
exports.Input = Input;
exports.Landing = Landing;
exports.Loading = index$4;
exports.MobileVHAdapter = index$6;
exports.OrganiserConfigurationForm = OrganiserConfigurationForm;
exports.OrganiserLanding = index$e;
exports.Patient = index$2;
exports.Select = index$3;
exports.Sidebar = index$9;
exports.SidebarList = index$a;
exports.SidebarListItem = index$b;
exports.Video = Video;
exports.VideoCall = index$f;
exports.VideoPreview = Video;
exports.WaitingRoom = index$1;
//# sourceMappingURL=index.js.map
