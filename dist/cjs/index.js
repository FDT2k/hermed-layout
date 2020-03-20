'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var compositeJs = _interopDefault(require('@geekagency/composite-js'));

var index = (function (props) {
  var who = props.who;
  var chatRef = React.useRef();
  React.useEffect(function () {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatRef]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "hermed-chat"
  }, /*#__PURE__*/React__default.createElement("header", null, "Temps d'attente moyen", /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("span", {
    className: "average-time"
  }, "xx:xx")), /*#__PURE__*/React__default.createElement("section", {
    ref: chatRef,
    className: "chat"
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

var index$1 = (function (props) {
  var who = props.who;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "customer-landing-page flex flex-column just-between"
  }, /*#__PURE__*/React__default.createElement("header", {
    className: ""
  }), /*#__PURE__*/React__default.createElement("section", {
    className: "flex flex-column align-center content-container"
  }, /*#__PURE__*/React__default.createElement("h1", null, "Bienvenue"), /*#__PURE__*/React__default.createElement("p", null, props.who || 'Le Dr. XXX', " vous invite \xE0 rejoindre sa salle d'attente pour une consultation \xE0 distance. Lorsque vous \xEAtes pr\xEAts, cliquez sur le bouton ci-dessous pour la rejoindre."), /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick(_) {
      return props.handleClick();
    }
  }, "JE SUIS PR\xCAT !")));
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

exports.Chat = index;
exports.ChatBubble = index$2;
exports.CustomerLanding = index$1;
exports.Patient = index$4;
exports.WaitingRoom = index$3;
//# sourceMappingURL=index.js.map
