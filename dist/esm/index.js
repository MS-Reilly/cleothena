import { jsxs } from 'react/jsx-runtime';

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".buttonClass {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  background-color: #007bff;\n  border: none;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.buttonClass:hover {\n  background-color: #0056b3;\n}\n.buttonClass:active {\n  transform: scale(0.98);\n}\n.buttonClass:disabled {\n  background-color: #6c757d;\n  cursor: not-allowed;\n}";
styleInject(css_248z);

var _excluded = ["title", "children", "onClick", "className", "disabled"];
var SimpleButton = function SimpleButton(_ref) {
  var title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var buttonClassName = "buttonClass ".concat(className || ''); // You'll need CSS for .simple-button
  return jsxs("button", _objectSpread2(_objectSpread2({
    className: buttonClassName,
    onClick: onClick,
    disabled: disabled
  }, rest), {}, {
    children: [title, children]
  }));
};

export { SimpleButton };
//# sourceMappingURL=index.js.map
