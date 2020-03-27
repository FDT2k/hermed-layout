'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var genClasses = require('@geekagency/gen-classes');
var md = require('react-icons/md');
var InputMask = _interopDefault(require('react-input-mask'));
var fa = require('react-icons/fa');
var formik = require('formik');
var ReactLoading = _interopDefault(require('react-loading'));

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

var Button = (function (props) {
  var className = props.className,
      _contained = props.contained,
      _text = props.text,
      _outlined = props.outlined,
      _toolbar = props.toolbar,
      _fit = props.fit,
      rest = _objectWithoutProperties(props, ["className", "contained", "text", "outlined", "toolbar", "fit"]);

  var classes = genClasses.cEx(["button", className, function (_) {
    return !_contained && !_text && !_outlined && !_toolbar ? "contained" : "";
  }, function (_) {
    return _toolbar === true ? 'icon icon--32' : '';
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
    }
  }]);
  return /*#__PURE__*/React__default.createElement("button", _extends({
    className: classes
  }, rest), props.children);
});

var HeaderBackButton = (function (props) {
  var className = props.className,
      handleBack = props.handleBack;
  var classes = genClasses.cEx([className]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, handleBack && /*#__PURE__*/React__default.createElement(Button, {
    toolbar: true,
    onClick: handleBack
  }, /*#__PURE__*/React__default.createElement(md.MdArrowBack, null)));
});

var HeaderToolbar = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline__tool-box", "flex-row", className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var HeaderTitle = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline__title flex-row ", "flex-row", "align-center", className]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, props.children);
});

var ChatHeaderStatus = (function (props) {
  var title = props.title,
      subtitle = props.subtitle,
      badge = props.badge;
  var badgeClasses = genClasses.cEx(["headline__contact-dot", function (_) {
    return badge;
  }]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "flex-column just-around"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "flex-row align-center"
  }, badge && /*#__PURE__*/React__default.createElement("span", {
    className: badgeClasses
  }), /*#__PURE__*/React__default.createElement("h2", null, title)), subtitle && /*#__PURE__*/React__default.createElement("p", {
    className: "headline__contact-status"
  }, subtitle));
});

var ChatHeaderToolbar = (function (props) {
  var handleCall = props.handleCall,
      handleVideoCall = props.handleVideoCall;
  return /*#__PURE__*/React__default.createElement(HeaderToolbar, null, /*#__PURE__*/React__default.createElement(Button, {
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
  return /*#__PURE__*/React__default.createElement("header", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(HeaderTitle, null, /*#__PURE__*/React__default.createElement(HeaderBackButton, {
    handleBack: handleBack
  }), /*#__PURE__*/React__default.createElement(ChatHeaderStatus, {
    badge: badge,
    title: title,
    subtitle: subtitle
  })), showToolbar && /*#__PURE__*/React__default.createElement(ChatHeaderToolbar, callHandlers));
});

var index = (function (props) {
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

var index$1 = (function (props) {
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

var index$2 = (function (props) {
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

var index$3 = (function (props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "waiting-room"
  }, /*#__PURE__*/React__default.createElement("header", {
    className: "flex-row just-between align-center"
  }, /*#__PURE__*/React__default.createElement("h2", null, "Votre salle d'attente"), /*#__PURE__*/React__default.createElement("div", {
    className: "parameters-box"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(md.MdPersonAdd, null)), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(GoGear, null)), /*#__PURE__*/React__default.createElement("button", {
    className: "button text icon"
  }, /*#__PURE__*/React__default.createElement(fa.FaPowerOff, null)))), /*#__PURE__*/React__default.createElement("section", {
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
    className: genClasses.cEx(['status', function (_) {
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

var index$5 = (function (props) {
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

var index$6 = (function (props) {
  var handleSubmit = props.handleSubmit;
  return /*#__PURE__*/React__default.createElement(Landing, null, /*#__PURE__*/React__default.createElement(OrganiserConfigurationForm, {
    handleSubmit: handleSubmit
  }));
});

var index$7 = (function (props) {
  var className = props.className;
  var classes = genClasses.cEx(["headline", "flex-row", "just-between", "align-center", className]);
  return /*#__PURE__*/React__default.createElement("header", {
    className: classes
  }, props.children);
});

var index$8 = (function (props) {
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

exports.Button = Button;
exports.Chat = index;
exports.ChatBubble = index$2;
exports.ChatHeaderStatus = ChatHeaderStatus;
exports.ChatHeaderToolbar = ChatHeaderToolbar;
exports.CustomerLanding = index$1;
exports.Form = Form;
exports.Header = index$7;
exports.HeaderBackButton = HeaderBackButton;
exports.HeaderTitle = HeaderTitle;
exports.HeaderToolbar = HeaderToolbar;
exports.Input = Input;
exports.Landing = Landing;
exports.Loading = index$8;
exports.OrganiserConfigurationForm = OrganiserConfigurationForm;
exports.OrganiserLanding = index$6;
exports.Patient = index$4;
exports.Select = index$5;
exports.WaitingRoom = index$3;
//# sourceMappingURL=index.js.map
