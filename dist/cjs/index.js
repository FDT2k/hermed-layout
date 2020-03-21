'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var compositeJs = _interopDefault(require('@geekagency/composite-js'));

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

var index = (function (props) {
  var who = props.who,
      autoscroll = props.autoscroll;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      shouldAutoscroll = _useState2[0],
      setShouldAutoscroll = _useState2[1];

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
  }, /*#__PURE__*/React__default.createElement("header", null, "Temps d'attente moyen", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("span", {
    className: "average-time"
  }, "xx:xx")), /*#__PURE__*/React__default.createElement("section", {
    ref: chatRef,
    className: "chat",
    onTouchStart: holdScroll,
    onTouchEnd: releaseScroll,
    onMouseDown: holdScroll,
    onMouseUp: releaseScroll
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "welcome"
  }, "Bienvenu dans la salle d'attente ! ", who || 'Le Dr. XXX ', " vous contactera via cette application d\xE8s que possible. Ne fermez pas cette fen\xEAtre avant la fin de votre RDV. Les messages sont \xE9chang\xE9s sans interm\xE9diaire. Tous les messages \xE9chang\xE9s seront automatiquement effac\xE9s en fin de conversation."), /*#__PURE__*/React__default.createElement("div", {
    className: "content"
  }, props.children)), /*#__PURE__*/React__default.createElement("section", {
    className: "tools"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/React__default.createElement("button", null, "photo"), /*#__PURE__*/React__default.createElement("button", null, "file"), /*#__PURE__*/React__default.createElement("button", null, "voice")), /*#__PURE__*/React__default.createElement("div", {
    className: "text-input"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "text"
  }))));
});

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var cjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  /*
  Easy class concat
  */

  const trim = string => string.trim();

  const notEmptyReducer = (accumulator, item) => {
    if (item !== '') {
      accumulator.push(item);
    }

    return accumulator;
  };

  const remove_empty_items = list => compositeJs.reduce([], notEmptyReducer, list); // List -> String -> String


  const assemble = sep => compositeJs.joinList(sep);

  const resolveString = compositeJs.identity;
  const resolveObjectProp = compositeJs.curry((object, prop) => object[prop]() ? prop : '');
  const resolveObject = compositeJs.curry((separator, x) => compositeJs.compose(trim, assemble(separator), remove_empty_items, compositeJs.map(resolveObjectProp(x)), compositeJs.keys)(x));

  const resolveFunction = x => compositeJs._either(compositeJs.is_type_string, x => '', compositeJs.identity)(x()); // defaultResolver :: String Object => string


  const conditionalResolver = separator => compositeJs.compose(compositeJs._either(compositeJs.is_type_function, compositeJs.identity, resolveFunction), compositeJs._either(compositeJs.is_type_object, compositeJs.identity, resolveObject(separator)), compositeJs._either(compositeJs.is_type_string, compositeJs.identity, resolveString)); // List -> String


  const listResolver = compositeJs.curry((separator, resolver) => compositeJs.compose(trim, assemble(separator), remove_empty_items, compositeJs.map(resolver))); // MakeCex :: String -> Resolver -> List -> String

  const MakeCex = compositeJs.curry((separator, resolve) => listResolver(separator, resolve));
  const uEx = MakeCex('/', conditionalResolver('/'));
  const cEx = MakeCex(' ', conditionalResolver(' '));
  exports.cEx = cEx;
  exports.uEx = uEx;
});
unwrapExports(cjs);
var cjs_1 = cjs.cEx;
var cjs_2 = cjs.uEx;

var Button = (function (props) {
  var className = props.className,
      _contained = props.contained,
      _text = props.text,
      _outlined = props.outlined,
      rest = _objectWithoutProperties(props, ["className", "contained", "text", "outlined"]);

  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: cjs_1(["button", function (_) {
      return !_contained && !_text && !_outlined ? "contained" : "";
    }, {
      'contained': function contained(_) {
        return _contained;
      },
      'text': function text(_) {
        return _text;
      },
      'outlined': function outlined(_) {
        return _outlined;
      }
    }])
  }, rest), props.children);
});

var index$1 = (function (props) {
  var who = props.who;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "customer-landing-page flex flex-column just-between"
  }, /*#__PURE__*/React__default.createElement("header", {
    className: ""
  }), /*#__PURE__*/React__default.createElement("section", {
    className: "flex flex-column align-center content-container"
  }, /*#__PURE__*/React__default.createElement("h1", null, "Bienvenue"), /*#__PURE__*/React__default.createElement("p", null, props.who || 'Le Dr. XXX', " vous invite \xE0 rejoindre sa salle d'attente pour une consultation \xE0 distance. Lorsque vous \xEAtes pr\xEAts, cliquez sur le bouton ci-dessous pour la rejoindre."), /*#__PURE__*/React__default.createElement(Button, {
    onClick: function onClick(_) {
      return props.handleClick();
    }
  }, "JE SUIS PR\xCAT !")));
});

var index$2 = (function (props) {
  var message = props.message,
      date = props.date,
      _right = props.right;
  var classes = cjs_1(['chat-bubble', {
    'right': function right(_) {
      return _right === true;
    },
    'left': function left(_) {
      return _right !== true;
    }
  }]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "message"
  }, message || 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le fau'), /*#__PURE__*/React__default.createElement("div", {
    className: "date"
  }, date || '11:20'));
});

var index$3 = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "waiting-room"
  }, /*#__PURE__*/React__default.createElement("header", null, "Votre salle d'attente"), /*#__PURE__*/React__default.createElement("section", {
    className: "content"
  }, props.children));
});

var index$4 = (function (props) {
  var status = props.status;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "patient-item"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cjs_1(['status', function (_) {
      return status || 'unkown';
    }])
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "coord"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "name"
  }, "Fabien Karsegard"), /*#__PURE__*/React__default.createElement("div", {
    className: "phone"
  }, "+41 79 000 00 00"), /*#__PURE__*/React__default.createElement("div", {
    className: "email"
  }, "fabien@karsegard.ch")));
});

var defaultSubmit = function defaultSubmit(e) {
  console.warn('you didnt set onSubmit');
  e.preventDefault();
};

var index$5 = (function (props) {
  var className = props.className,
      onSubmit = props.onSubmit,
      rest = _objectWithoutProperties(props, ["className", "onSubmit"]);

  var _onSubmit = onSubmit || defaultSubmit;

  return /*#__PURE__*/React__default.createElement("form", _extends({
    className: cjs_1(["basic-form", function (_) {
      return className;
    }]),
    onSubmit: _onSubmit
  }, rest), props.children);
});

var index$6 = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      type = props.type,
      rest = _objectWithoutProperties(props, ["label", "id", "className", "type"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-input flex flex-column"
  }, /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React__default.createElement("input", _extends({
    className: cjs_1(["input", function (_) {
      return className;
    }]),
    id: id,
    type: "text"
  }, rest)));
});

exports.Button = Button;
exports.Chat = index;
exports.ChatBubble = index$2;
exports.CustomerLanding = index$1;
exports.Form = index$5;
exports.Input = index$6;
exports.Patient = index$4;
exports.WaitingRoom = index$3;
//# sourceMappingURL=index.js.map
