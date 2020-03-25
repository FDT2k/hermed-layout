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
      _fit = props.fit,
      rest = _objectWithoutProperties(props, ["className", "contained", "text", "outlined", "fit"]);

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
    },
    'fit': function fit(_) {
      return _fit === true;
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
var MdPersonAdd = function (props) {
  return GenIcon({
    "tag": "svg",
    "attr": {
      "viewBox": "0 0 24 24"
    },
    "child": [{
      "tag": "path",
      "attr": {
        "d": "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
      }
    }]
  })(props);
};
MdPersonAdd.displayName = "MdPersonAdd";

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

// THIS FILE IS AUTO GENERATED
var FaPowerOff=function(props){return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"}}]})(props);};FaPowerOff.displayName="FaPowerOff";

var index$3 = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "waiting-room"
  }, /*#__PURE__*/React__default.createElement("header", {
    className: "flex-row just-between align-center"
  }, /*#__PURE__*/React__default.createElement("h2", null, "Votre salle d'attente"), /*#__PURE__*/React__default.createElement("div", {
    className: "parameters-box"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(MdPersonAdd, null)), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(GoGear, null)), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(FaPowerOff, null)))), /*#__PURE__*/React__default.createElement("section", {
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
    htmlFor: id
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
