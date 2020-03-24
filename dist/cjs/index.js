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
      autoscroll = props.autoscroll,
      handleChange = props.handleChange,
      handleSubmit = props.handleSubmit;

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
  }, /*#__PURE__*/React__default.createElement("header", null, "Temps d'attente moyen", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("span", {
    className: "average-time"
  }, "xx:xx")), /*#__PURE__*/React__default.createElement("section", {
    ref: chatRef,
    className: "chat flex-column just-end align-center",
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

var Landing = (function (props) {
  var className = props.className,
      organiser = props.organiser,
      customer = props.customer;
  var isOrganiser = organiser === true || !organiser && !customer;
  var classes = cjs_1(["landing-page", "flex-column", "just-between", className, {
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

var Button = (function (props) {
  var className = props.className,
      _contained = props.contained,
      _text = props.text,
      _outlined = props.outlined,
      rest = _objectWithoutProperties(props, ["className", "contained", "text", "outlined"]);

  var classes = cjs_1(["button", className, function (_) {
    return !_contained && !_text && !_outlined ? "contained" : "";
  }, {
    'contained': function contained(_) {
      return _contained === true;
    },
    'text': function text(_) {
      return _text === true;
    },
    'outlined': function outlined(_) {
      return _outlined === true;
    }
  }]);
  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: classes
  }, rest), props.children);
});

var Input = (function (props) {
  var label = props.label,
      id = props.id,
      className = props.className,
      type = props.type,
      rest = _objectWithoutProperties(props, ["label", "id", "className", "type"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-input flex-column"
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

var index$1 = (function (props) {
  var handleClick = props.handleClick,
      identity = props.identity;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _handleClick = function _handleClick() {
    handleClick && handleClick(value);
  };

  return /*#__PURE__*/React__default.createElement(Landing, {
    customer: true
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "text--center"
  }, identity || 'inconnu', " vous invite \xE0 rejoindre sa salle d'attente pour une consultation \xE0 distance. Lorsque vous \xEAtes pr\xEAts, cliquez sur le bouton ci-dessous pour la rejoindre."), /*#__PURE__*/React__default.createElement(Input, {
    label: "Votre date de naissance",
    name: "birthday",
    placeholder: "JJ.MM.YYYY",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    value: value,
    autoComplete: "off"
  }), /*#__PURE__*/React__default.createElement(Button, {
    onClick: _handleClick
  }, "JE SUIS PR\xCAT !"));
});

var index$2 = (function (props) {
  var message = props.message,
      date = props.date,
      _right = props.right,
      _left = props.left;
  var classes = cjs_1(['chat-bubble', {
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

var index$3 = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "waiting-room"
  }, /*#__PURE__*/React__default.createElement("header", {
    className: "flex-row just-between align-center"
  }, /*#__PURE__*/React__default.createElement("h2", null, "Votre salle d'attente"), /*#__PURE__*/React__default.createElement("div", {
    className: "parameters-box"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, "X"), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, "Y"), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, "Z"))), /*#__PURE__*/React__default.createElement("section", {
    className: "content"
  }, props.children));
});

var index$4 = (function (props) {
  var status = props.status,
      name = props.name,
      phone = props.phone,
      email = props.email;
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
  }, name), /*#__PURE__*/React__default.createElement("div", {
    className: "phone"
  }, phone), /*#__PURE__*/React__default.createElement("div", {
    className: "email"
  }, email)));
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
      rest = _objectWithoutProperties(props, ["label", "id", "className"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: "single-select"
  }, /*#__PURE__*/React__default.createElement("label", {
    for: id
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: "single-select__select"
  }, /*#__PURE__*/React__default.createElement("select", _extends({
    id: id
  }, rest), props.children)));
});

exports.Button = Button;
exports.Chat = index;
exports.ChatBubble = index$2;
exports.CustomerLanding = index$1;
exports.Form = index$5;
exports.Input = Input;
exports.Landing = Landing;
exports.Patient = index$4;
exports.Select = index$6;
exports.WaitingRoom = index$3;
//# sourceMappingURL=index.js.map
