'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactRouterDom = require('react-router-dom');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var theme = {
  /* =============================== Colors =============================== */
  colors: {
    primary: '#4D55CC',
    secondary: '#5271ff',
    accent: '#2EC4B6',
    highlight: '#00ADA9',
    neutral: {
      white: '#ffffff',
      black: '#000000',
      grey: '#6c757d'
    },
    disabledBg: '#E0E0E0',
    disabledText: '#9E9E9E',
    disabledBorder: '#BDBDBD'
  },
  /* =============================== Typography =============================== */
  typography: {
    fontFamily: '"Nunito", sans-serif',
    fontSizeBase: '16px',
    fontSizeLg: '20px',
    headings: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem'
    }
  },
  /* =============================== Borders & Shadows =============================== */
  borders: {
    radiusXs: '3px',
    radiusSm: '4px',
    radiusMd: '8px',
    radiusLg: '12px'
  },
  shadows: {
    xs: 'rgba(0, 0, 0, 0.15) 0px 1px 3px',
    sm: 'rgba(0, 0, 0, 0.15) 0px 1px 3px',
    md: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    lg: 'rgba(0, 0, 0, 0.35) 0px 10px 20px'
  }
};

var ThemeContext = /*#__PURE__*/React.createContext(theme);
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    _ref$theme = _ref.theme,
    theme$1 = _ref$theme === void 0 ? {} : _ref$theme;
  var mergedTheme = _objectSpread2(_objectSpread2({}, theme), theme$1); // ✅ Merge custom theme with defaults
  return jsxRuntime.jsx(ThemeContext.Provider, {
    value: mergedTheme,
    children: children
  });
};

var useTheme = function useTheme() {
  return React.useContext(ThemeContext);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

var css_248z$d = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.buttonClass {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  text-align: center;\n  border: 2px solid transparent;\n  user-select: none;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n  /* Default Button Colors */\n  background-color: #FF9F1A;\n  color: #ffffff;\n  border-color: #FF9F1A;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;\n  /* Variant Styles */\n  /* Secondary Variant */\n  /* Accent Variant */\n  /* Highlight Variant */\n  /* Outline Variant */\n  /* Ghost Variant */\n  /* Responsive Behavior */\n}\n.buttonClass:hover {\n  opacity: 0.85;\n}\n.buttonClass:active {\n  transform: scale(0.98);\n}\n.buttonClass.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  background-color: #E0E0E0;\n  color: #9E9E9E;\n  border-color: #BDBDBD;\n}\n.buttonClass.xs {\n  font-size: 8px;\n  padding: 4px 8px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 3px;\n}\n.buttonClass.sm {\n  font-size: 12px;\n  padding: 6px 12px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 4px;\n}\n.buttonClass.md {\n  font-size: 16px;\n  padding: 10px 16px;\n  height: 35px;\n  min-width: 30px;\n  border-radius: 8px;\n}\n.buttonClass.lg {\n  font-size: 20px;\n  padding: 14px 20px;\n  height: 52px;\n  min-width: 120px;\n  border-radius: 12px;\n}\n.buttonClass.secondary {\n  background-color: #FFB516;\n  border-color: #FFB516;\n  color: #000000;\n}\n.buttonClass.accent {\n  background-color: #2EC4B6;\n  border-color: #2EC4B6;\n  color: #ffffff;\n}\n.buttonClass.highlight {\n  background-color: #00ADA9;\n  border-color: #00ADA9;\n  color: #ffffff;\n}\n.buttonClass.outline {\n  background-color: transparent;\n  border-color: currentColor;\n  color: inherit;\n}\n.buttonClass.ghost {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .buttonClass.md {\n    font-size: 12px;\n    padding: 8px 14px;\n  }\n  .buttonClass.lg {\n    font-size: 16px;\n    padding: 12px 18px;\n  }\n}";
styleInject(css_248z$d);

var _excluded$1 = ["title", "children", "onClick", "className", "disabled", "variant", "color", "outline", "ghost"];
var SimpleButton = function SimpleButton(_ref) {
  var _theme$borders, _theme$borders2, _theme$borders3, _theme$borders4, _theme$shadows, _theme$shadows2, _theme$shadows3, _theme$shadows4;
  var title = _ref.title,
    children = _ref.children,
    onClick = _ref.onClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'md' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$outline = _ref.outline,
    outline = _ref$outline === void 0 ? false : _ref$outline,
    _ref$ghost = _ref.ghost,
    ghost = _ref$ghost === void 0 ? false : _ref$ghost,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var theme = useTheme() || {};
  var borderRadiusMap = {
    xs: ((_theme$borders = theme.borders) === null || _theme$borders === void 0 ? void 0 : _theme$borders.radiusXs) || '3px',
    sm: ((_theme$borders2 = theme.borders) === null || _theme$borders2 === void 0 ? void 0 : _theme$borders2.radiusSm) || '4px',
    md: ((_theme$borders3 = theme.borders) === null || _theme$borders3 === void 0 ? void 0 : _theme$borders3.radiusMd) || '8px',
    lg: ((_theme$borders4 = theme.borders) === null || _theme$borders4 === void 0 ? void 0 : _theme$borders4.radiusLg) || '12px'
  };
  var boxShadowMap = {
    xs: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.xs) || 'rgba(0, 0, 0, 0.15) 0px 1px 3px',
    sm: ((_theme$shadows2 = theme.shadows) === null || _theme$shadows2 === void 0 ? void 0 : _theme$shadows2.sm) || 'rgba(0, 0, 0, 0.15) 0px 1px 3px',
    md: ((_theme$shadows3 = theme.shadows) === null || _theme$shadows3 === void 0 ? void 0 : _theme$shadows3.md) || 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    lg: ((_theme$shadows4 = theme.shadows) === null || _theme$shadows4 === void 0 ? void 0 : _theme$shadows4.lg) || 'rgba(0, 0, 0, 0.35) 0px 10px 20px'
  };
  var themedStyles = React.useMemo(function () {
    var _theme$colors, _theme$colors2, _theme$colors3, _theme$colors4, _theme$colors5, _theme$colors6, _theme$colors7, _theme$typography;
    return {
      backgroundColor: ghost ? 'transparent' : outline ? 'transparent' : disabled ? ((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.disabledBg) || '#E0E0E0' : ((_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2[color]) || '#FF9F1A',
      color: ghost || outline ? ((_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3[color]) || '#FF9F1A' : disabled ? ((_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.disabledText) || '#9E9E9E' : ((_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 || (_theme$colors5 = _theme$colors5.neutral) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.white) || '#FFFFFF',
      borderColor: disabled ? ((_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.disabledBorder) || '#BDBDBD' : ((_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7[color]) || '#FF9F1A',
      borderRadius: borderRadiusMap[variant],
      boxShadow: boxShadowMap[variant],
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || 'Arial, sans-serif',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1
    };
  }, [theme, color, outline, ghost, disabled, variant]);
  return jsxRuntime.jsxs("div", _objectSpread2(_objectSpread2({
    className: "buttonClass ".concat(variant, " ").concat(color, " ").concat(className, " ").concat(disabled ? 'disabled' : '', " \n    ").concat(outline ? 'outline' : '', " ").concat(ghost ? 'ghost' : ''),
    onClick: !disabled ? onClick : undefined,
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled,
    style: themedStyles
  }, rest), {}, {
    children: [title, children]
  }));
};

var css_248z$c = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.sb-show-main {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.navbar {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s ease;\n  box-shadow: 16px;\n  padding: 10px 10px;\n}\n.navbar .navbar-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n.navbar .navbar-links {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.navbar .navbar-item {\n  position: relative;\n  text-decoration: none;\n}\n.navbar .navbar-item .nav-link {\n  font-weight: 500;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.navbar .navbar-item:hover .navbar-dropdown {\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease-in-out;\n}\n.navbar .navbar-item:hover .navbar-dropdown .nav-link {\n  font-weight: 500;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.navbar .navbar-dropdown {\n  display: none;\n  position: absolute;\n  background: white;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n}\n.navbar .navbar-toggle {\n  display: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.navbar .navbar-mobile {\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .navbar .navbar-links {\n    display: none;\n  }\n  .navbar .navbar-toggle {\n    display: block;\n  }\n  .navbar .navbar-mobile {\n    display: flex;\n  }\n}";
styleInject(css_248z$c);

var css_248z$b = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.sidebar {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 250px;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transform: translateX(-100%);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  /* ✅ Close Button Positioned at Absolute Top-Right */\n  /* ✅ Sidebar Header */\n  /* ✅ Sidebar Content (Scrollable) */\n  /* ✅ Sidebar Footer */\n}\n.sidebar.mobile-open {\n  transform: translateX(0);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.sidebar.mobile-closed {\n  transform: translateX(-100%);\n}\n.sidebar.sidebar-right {\n  right: 0;\n  left: auto;\n  transform: translateX(100%);\n}\n.sidebar.sidebar-right.mobile-open {\n  transform: translateX(0);\n}\n.sidebar.sidebar-right.mobile-closed {\n  transform: translateX(100%);\n}\n.sidebar.sidebar-right .close-btn {\n  right: auto;\n  left: 10px;\n}\n.sidebar .close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n  z-index: 1100;\n}\n.sidebar .close-btn:hover {\n  transform: scale(1.1);\n  opacity: 0.8;\n}\n.sidebar .sidebar-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 15px 15px;\n  border-bottom: 1px solid #e3e6f0;\n  position: relative;\n}\n.sidebar .sidebar-header .logo {\n  max-width: 180px;\n}\n.sidebar .sidebar-header .logo img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.sidebar .sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  max-height: calc(100vh - 70px - 60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-thumb {\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-thumb:hover {\n  background-color: #f8f9fa;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-track {\n  background-color: #f0f0f0;\n}\n.sidebar .sidebar-footer {\n  padding: 10px;\n  border-top: 1px solid #e3e6f0;\n  background: white;\n}\n.sidebar .sidebar-footer .helper-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n  font-size: 0.85rem;\n  padding: 10px;\n  background-color: #e0f7fa;\n  color: #343a40;\n  border-radius: 8px;\n  transition: opacity 0.4s ease, transform 0.4s ease;\n}\n.sidebar .sidebar-footer .helper-card:hover {\n  opacity: 1;\n  transform: translateY(0);\n}\n.sidebar .sidebar-footer .helper-card button {\n  margin-top: 10px;\n  padding: 5px 10px;\n  background-color: #2EC4B6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.sidebar .sidebar-footer .helper-card button:hover {\n  background-color: #00ADA9;\n}\n\n.sidebar-item {\n  box-sizing: border-box;\n  width: 100%;\n}\n.sidebar-item .item-header {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2px 7px;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background 0.3s ease, color 0.3s ease;\n  background-color: transparent;\n  gap: 10px;\n}\n.sidebar-item .item-header:hover {\n  background-color: #f7f7f7;\n}\n.sidebar-item .item-header.active {\n  background-color: #e0f7fa;\n  color: #344767;\n}\n.sidebar-item .item-header.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n  color: #6e708c;\n}\n.sidebar-item .item-header .icon {\n  font-size: 1.8rem;\n  transition: color 0.3s ease;\n}\n.sidebar-item .item-header .title {\n  flex-grow: 1;\n  font-weight: 600;\n  text-align: left;\n}\n.sidebar-item .item-header .expand-icon {\n  font-size: 1rem;\n  color: #999999;\n  transition: color 0.3s ease;\n}\n.sidebar-item .sub-items {\n  margin-top: 0.5rem;\n  padding-left: 20px;\n  list-style: none;\n}\n.sidebar-item .sub-items .sub-item {\n  margin-bottom: 0.5rem;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 0.5rem;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link:hover {\n  background-color: #f9f9f9;\n  color: #2ec4b6;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link.active {\n  background-color: #d6f5f8;\n  color: #344767;\n  font-weight: bold;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link .sub-title {\n  font-size: 0.9rem;\n  font-weight: 500;\n}";
styleInject(css_248z$b);

function lightenColor(hex, percent) {
  // Ensure hex is valid
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    console.warn("Invalid HEX color: ".concat(hex));
    return hex;
  }
  // Convert 3-digit hex to 6-digit
  if (hex.length === 4) {
    hex = "#" + _toConsumableArray(hex.slice(1)).map(function (c) {
      return c + c;
    }).join("");
  }
  var num = parseInt(hex.slice(1), 16);
  var r = num >> 16 & 0xff;
  var g = num >> 8 & 0xff;
  var b = num & 0xff;
  var lighten = function lighten(c) {
    return Math.round(c + (255 - c) * percent);
  };
  var newColor = "#" + [lighten(r), lighten(g), lighten(b)].map(function (c) {
    return c.toString(16).padStart(2, "0");
  }).join("");
  return newColor;
}

// src/utils/useSafeLocation.ts
var useSafeLocation = function useSafeLocation() {
  var context = React.useContext(reactRouterDom.UNSAFE_LocationContext);
  return context ? reactRouterDom.useLocation() : null;
};

var SidebarItem = function SidebarItem(_ref) {
  var _item$children;
  var item = _ref.item,
    isOpen = _ref.isOpen;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var location = useSafeLocation();
  if (!location) {
    console.warn("⚠️ SidebarItem is rendered without router context.");
  }
  var theme = useTheme() || {};
  var styles = React.useMemo(function () {
    var _theme$colors$neutral, _theme$colors$neutral2, _theme$typography;
    return {
      backgroundColor: ((_theme$colors$neutral = theme.colors.neutral) === null || _theme$colors$neutral === void 0 ? void 0 : _theme$colors$neutral.white) || "#ffffff",
      color: theme.colors.primary || ((_theme$colors$neutral2 = theme.colors.neutral) === null || _theme$colors$neutral2 === void 0 ? void 0 : _theme$colors$neutral2.black) || "#000000",
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Arial, sans-serif"
    };
  }, [theme]);
  // Check if any child is active using the href field.
  var isAnyChildActive = location ? (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.some(function (child) {
    return location.pathname.startsWith(child.href || "");
  }) : false;
  var toggleExpand = function toggleExpand(e) {
    if (item.disabled) return;
    if (item.children) {
      e.preventDefault();
      setIsExpanded(function (prev) {
        return !prev;
      });
    }
  };
  var Icon = item.icon;
  return jsxRuntime.jsxs("div", {
    className: "sidebar-item",
    style: styles,
    children: [item.children ? jsxRuntime.jsxs("div", {
      className: "item-header ".concat(isAnyChildActive ? "active" : "notActive", " ").concat(item.disabled ? "disabled" : ""),
      onClick: item.disabled ? undefined : toggleExpand,
      style: {
        cursor: item.disabled ? "not-allowed" : "pointer",
        backgroundColor: isAnyChildActive ? lightenColor(theme.colors.secondary, 0.1) : "transparent"
      },
      children: [jsxRuntime.jsx("span", {
        className: "icon",
        children: Icon && jsxRuntime.jsx(Icon, {
          width: 20,
          height: 20,
          style: {
            fill: isAnyChildActive ? theme.colors.neutral.white : theme.colors.accent
          }
        })
      }), jsxRuntime.jsx("span", {
        className: "title",
        style: {
          color: isAnyChildActive ? theme.colors.neutral.white : theme.colors.neutral.grey
        },
        children: item.label
      }), isOpen && !item.disabled && jsxRuntime.jsx("span", {
        className: "expand-icon",
        style: {
          color: isAnyChildActive ? theme.colors.neutral.white : theme.colors.neutral.grey
        },
        children: isExpanded ? "-" : "+"
      })]
    }) : jsxRuntime.jsx(reactRouterDom.NavLink, {
      to: item.disabled ? "#" : item.href || "#",
      className: function className(_ref2) {
        var isActive = _ref2.isActive;
        return "item-header ".concat(isActive ? "active" : "notActive", " ").concat(item.disabled ? "disabled" : "");
      },
      style: function style(_ref3) {
        var isActive = _ref3.isActive;
        return {
          cursor: item.disabled ? "not-allowed" : "pointer",
          backgroundColor: isActive ? lightenColor(theme.colors.secondary, 0.1) : "transparent"
        };
      },
      end: true,
      children: function children(_ref4) {
        var isActive = _ref4.isActive;
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx("span", {
            className: "icon",
            children: Icon && jsxRuntime.jsx(Icon, {
              width: 18,
              height: 18,
              style: {
                fill: isActive ? theme.colors.neutral.white : theme.colors.accent
              }
            })
          }), jsxRuntime.jsx("span", {
            className: "title",
            style: {
              color: isActive ? theme.colors.neutral.white : theme.colors.neutral.grey
            },
            children: item.label
          })]
        });
      }
    }), isExpanded && isOpen && item.children && !item.disabled && jsxRuntime.jsx("ul", {
      className: "sub-items",
      children: item.children.map(function (child, index) {
        return jsxRuntime.jsx("li", {
          className: "sub-item",
          children: jsxRuntime.jsx(reactRouterDom.NavLink, {
            to: child.disabled ? "#" : child.href || "#",
            className: function className(_ref5) {
              var isActive = _ref5.isActive;
              return "sub-item-link ".concat(isActive ? "active" : "notActive", " ").concat(child.disabled ? "disabled" : "");
            },
            style: function style(_ref6) {
              var isActive = _ref6.isActive;
              return {
                pointerEvents: child.disabled ? "none" : "auto",
                color: child.disabled ? "#b0b0b0" : isActive ? theme.colors.neutral.white : theme.colors.neutral.grey,
                backgroundColor: isActive ? lightenColor(theme.colors.secondary, 0.1) : "transparent"
              };
            },
            end: true,
            children: jsxRuntime.jsx("span", {
              className: "sub-title",
              style: {
                color: child.disabled ? "#b0b0b0" : theme.colors.neutral.grey
              },
              children: child.label
            })
          })
        }, index);
      })
    })]
  });
};

var _path$4;
function _extends$6() { return _extends$6 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$6.apply(null, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    viewBox: "0 0 64 64"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.59 59.41a2 2 0 0 0 2.83 0L32 34.83l24.59 24.58a2 2 0 0 0 2.83-2.83L34.83 32 59.41 7.41a2 2 0 0 0-2.83-2.83L32 29.17 7.41 4.59a2 2 0 0 0-2.82 2.82L29.17 32 4.59 56.59a2 2 0 0 0 0 2.82"
  })));
};

var _g$1;
function _extends$5() { return _extends$5 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$5.apply(null, arguments); }
var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    viewBox: "0 0 16 16"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    "data-name": 31
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.5 4H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1M15.5 9H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1M15.5 14H.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1"
  }))));
};

var SideBar = function SideBar(_ref) {
  var logo = _ref.logo,
    _ref$sidebarConfig = _ref.sidebarConfig,
    sidebarConfig = _ref$sidebarConfig === void 0 ? [] : _ref$sidebarConfig,
    _ref$side = _ref.side,
    side = _ref$side === void 0 ? "left" : _ref$side,
    _ref$hamburgerStyle = _ref.hamburgerStyle,
    hamburgerStyle = _ref$hamburgerStyle === void 0 ? {
      height: "25px",
      width: "25px",
      cursor: "pointer"
    } : _ref$hamburgerStyle,
    _ref$hamburgerFill = _ref.hamburgerFill,
    hamburgerFill = _ref$hamburgerFill === void 0 ? "#000000" : _ref$hamburgerFill;
  // Internal state for sidebar open/closed
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileOpen = _useState2[0],
    setIsMobileOpen = _useState2[1];
  var sidebarRef = React.useRef(null);
  var hamburgerRef = React.useRef(null);
  var location = useSafeLocation();
  if (!location) {
    console.warn("⚠️ SideBar is rendered without router context.");
  }
  var theme = useTheme() || {};
  // Close sidebar when clicking outside, except when clicking the hamburger icon.
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      }
      if (isMobileOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return function () {
      return document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileOpen]);
  // Close the sidebar on route change.
  React.useEffect(function () {
    if (location) {
      setIsMobileOpen(false);
    }
  }, [location === null || location === void 0 ? void 0 : location.pathname]);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [!isMobileOpen && jsxRuntime.jsx(SvgHamburger, {
      className: "hamburger-icon",
      style: hamburgerStyle,
      onClick: function onClick() {
        return setIsMobileOpen(true);
      },
      fill: hamburgerFill
    }), jsxRuntime.jsxs("div", {
      ref: sidebarRef,
      className: "sidebar ".concat(isMobileOpen ? "mobile-open" : "mobile-closed", " sidebar-").concat(side),
      children: [jsxRuntime.jsxs("div", {
        className: "sidebar-header",
        children: [jsxRuntime.jsx("div", {
          className: "logo",
          children: logo
        }), jsxRuntime.jsx(SvgClose, {
          className: "close-btn",
          onClick: function onClick() {
            return setIsMobileOpen(false);
          },
          style: {
            height: "20px",
            width: "20px",
            cursor: "pointer"
          }
        })]
      }), jsxRuntime.jsx("div", {
        className: "sidebar-content",
        children: sidebarConfig.map(function (item, idx) {
          return jsxRuntime.jsx(SidebarItem, {
            item: item,
            isOpen: isMobileOpen
          }, idx);
        })
      }), jsxRuntime.jsx("div", {
        className: "sidebar-footer",
        children: jsxRuntime.jsxs("div", {
          className: "helper-card",
          style: {
            backgroundColor: lightenColor(theme.colors.secondary, 0.9)
          },
          children: [jsxRuntime.jsx("p", {
            children: "Necesitas Ayuda?"
          }), jsxRuntime.jsx("span", {
            children: "Envianos un mensaje"
          }), jsxRuntime.jsx(SimpleButton, {
            color: "primary",
            variant: "sm",
            title: "\xA1Contactanos!"
          })]
        })
      })]
    })]
  });
};

var Navbar = function Navbar(_ref) {
  var logo = _ref.logo,
    _ref$links = _ref.links,
    links = _ref$links === void 0 ? [] : _ref$links,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "sticky" : _ref$position,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$ghost = _ref.ghost,
    ghost = _ref$ghost === void 0 ? false : _ref$ghost,
    _ref$sidebarProps = _ref.sidebarProps,
    sidebarProps = _ref$sidebarProps === void 0 ? {} : _ref$sidebarProps;
  var _useState = React.useState(window.innerWidth < 768),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2);
    _useState4[0];
    var setIsMobileOpen = _useState4[1];
  var location = useSafeLocation();
  if (!location) {
    console.warn("⚠️ Navbar is rendered without router context.");
  }
  // Detect window resize and update isMobile state
  React.useEffect(function () {
    var handleResize = function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false); // Ensure mobile menu closes when switching back to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Default theme colors if missing from theme provider
  var theme = useTheme() || {};
  var navbarStyles = React.useMemo(function () {
    var _theme$colors$neutral, _theme$colors$neutral2, _theme$shadows, _theme$typography;
    return {
      backgroundColor: ghost ? "transparent" : (_theme$colors$neutral = theme.colors.neutral) === null || _theme$colors$neutral === void 0 ? void 0 : _theme$colors$neutral.white,
      color: theme.colors.primary || ((_theme$colors$neutral2 = theme.colors.neutral) === null || _theme$colors$neutral2 === void 0 ? void 0 : _theme$colors$neutral2.black) || "#000000",
      boxShadow: ghost ? "none" : ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.md) || "0 2px 5px rgba(0,0,0,0.3)",
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Arial, sans-serif",
      zIndex: ghost ? 0 : 50,
      position: position === "fixed" ? "fixed" : position === "sticky" ? "sticky" : "static",
      top: 0,
      width: "100%"
    };
  }, [theme, position, ghost]);
  return jsxRuntime.jsx("nav", {
    className: "navbar ".concat(className),
    style: navbarStyles,
    children: jsxRuntime.jsxs("div", {
      className: "navbar-container",
      children: [jsxRuntime.jsx(reactRouterDom.Link, {
        to: "/",
        children: jsxRuntime.jsx("div", {
          className: "navbar-logo",
          children: logo
        })
      }), !isMobile && jsxRuntime.jsxs("div", {
        className: "navbar-links",
        children: [links.map(function (link) {
          return jsxRuntime.jsxs("div", {
            className: "navbar-item",
            children: [jsxRuntime.jsx(reactRouterDom.NavLink, {
              to: link.href,
              className: "nav-link",
              style: function style(_ref2) {
                var _theme$colors$neutral3;
                var isActive = _ref2.isActive;
                return {
                  color: isActive ? navbarStyles.color : (_theme$colors$neutral3 = theme.colors.neutral) === null || _theme$colors$neutral3 === void 0 ? void 0 : _theme$colors$neutral3.grey,
                  fontWeight: isActive ? "bold" : "normal",
                  textDecoration: "none"
                };
              },
              children: link.label
            }), link.children && jsxRuntime.jsx("div", {
              className: "navbar-dropdown",
              children: link.children.map(function (child) {
                return jsxRuntime.jsx(reactRouterDom.NavLink, {
                  to: child.href,
                  end: true,
                  className: "nav-link",
                  style: function style(_ref3) {
                    var _theme$colors$neutral4;
                    var isActive = _ref3.isActive;
                    return {
                      color: isActive ? navbarStyles.color : (_theme$colors$neutral4 = theme.colors.neutral) === null || _theme$colors$neutral4 === void 0 ? void 0 : _theme$colors$neutral4.grey,
                      fontWeight: isActive ? "bold" : "normal",
                      textDecoration: "none"
                    };
                  },
                  children: child.label
                }, child.label);
              })
            })]
          }, link.label);
        }), jsxRuntime.jsx(SimpleButton, {
          title: "Sign Up",
          color: "secondary",
          outline: true,
          variant: "sm"
        }), jsxRuntime.jsx(SimpleButton, {
          title: "Sign In",
          color: "primary",
          variant: "sm"
        })]
      }), isMobile && jsxRuntime.jsx("div", {
        className: "flex",
        children: jsxRuntime.jsx(SideBar, _objectSpread2({
          logo: logo,
          sidebarConfig: links
        }, sidebarProps))
      })]
    })
  });
};

var css_248z$a = ".fullscreen-hero {\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: -1;\n}\n.fullscreen-hero__image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n}\n.fullscreen-hero__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n.fullscreen-hero__content {\n  height: 100%;\n  padding: 0;\n  transition: opacity 0.6s ease, transform 0.6s ease;\n}\n.fullscreen-hero .animate-in {\n  opacity: 1;\n  transform: translateX(0);\n}\n.fullscreen-hero .animate-out {\n  opacity: 0;\n  transform: translateX(-100px);\n}\n\n.heroWrapper {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n}\n\n.heroOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$a);

var FullScreenHero = function FullScreenHero(_ref) {
  var image = _ref.image,
    children = _ref.children,
    _ref$top = _ref.top,
    top = _ref$top === void 0 ? "0%" : _ref$top,
    _ref$left = _ref.left,
    left = _ref$left === void 0 ? "0%" : _ref$left,
    right = _ref.right,
    _ref$animationThresho = _ref.animationThreshold,
    animationThreshold = _ref$animationThresho === void 0 ? 0.5 : _ref$animationThresho,
    _ref$overlay = _ref.overlay,
    overlay = _ref$overlay === void 0 ? false : _ref$overlay,
    _ref$overlayColor = _ref.overlayColor,
    overlayColor = _ref$overlayColor === void 0 ? "rgba(0, 0, 0, 0.4)" : _ref$overlayColor,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var textRef = React.useRef(null);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  React.useEffect(function () {
    var observer = new IntersectionObserver(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        entry = _ref3[0];
      return setIsVisible(entry.isIntersecting);
    }, {
      threshold: animationThreshold
    });
    if (textRef.current) observer.observe(textRef.current);
    return function () {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [animationThreshold]);
  return jsxRuntime.jsxs("div", {
    className: "fullscreen-hero",
    style: _objectSpread2({}, style),
    children: [jsxRuntime.jsx("img", {
      src: image,
      alt: "Hero Background",
      className: "fullscreen-hero__image"
    }), overlay && jsxRuntime.jsx("div", {
      className: "fullscreen-hero__overlay",
      style: {
        backgroundColor: overlayColor
      }
    }), jsxRuntime.jsx("div", {
      ref: textRef,
      className: "fullscreen-hero__content ".concat(isVisible ? "animate-in" : "animate-out"),
      style: {
        top: top,
        left: left,
        right: right
      },
      children: children
    })]
  });
};

var HeroContentWrapper = function HeroContentWrapper(_ref) {
  var children = _ref.children,
    _ref$overlayColor = _ref.overlayColor,
    overlayColor = _ref$overlayColor === void 0 ? "rgba(0, 0, 0, 0.3)" : _ref$overlayColor,
    _ref$gradientDirectio = _ref.gradientDirection,
    gradientDirection = _ref$gradientDirectio === void 0 ? "to bottom" : _ref$gradientDirectio;
  return jsxRuntime.jsxs("div", {
    className: "heroWrapper",
    children: [jsxRuntime.jsx("div", {
      className: "heroOverlay",
      style: {
        background: "linear-gradient(".concat(gradientDirection, ", ").concat(overlayColor, " 0%, transparent 80%)")
      }
    }), children]
  });
};

var _path$3, _path2$1;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgDownArrow = function SvgDownArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2,
    clipRule: "evenodd",
    viewBox: "0 0 16 16"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "m1.47 8.03 6 6a.75.75 0 0 0 1.06 0l6-6a.749.749 0 1 0-1.06-1.06L8 12.439 2.53 6.97a.749.749 0 1 0-1.06 1.06"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "m1.47 3.03 6 6a.75.75 0 0 0 1.06 0l6-6a.749.749 0 1 0-1.06-1.06L8 7.439 2.53 1.97a.749.749 0 1 0-1.06 1.06"
  })));
};

var _path$2;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgLeftArrow = function SvgLeftArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M52.246 239.578c-9.043 9.043-9.043 23.803 0 32.846L229.378 449.55c9.057 9.057 23.79 9.057 32.846 0l9.908-9.908c9.065-9.065 9.067-23.79.001-32.857l-134.37-134.357c-9.067-9.065-9.067-23.793 0-32.858l134.369-134.358c9.067-9.066 9.066-23.79-.001-32.856l-9.908-9.908c-9.043-9.043-23.803-9.043-32.846 0zM416.988 62.446c9.052-9.053 23.799-9.052 32.851 0l9.908 9.908c9.048 9.048 9.049 23.808 0 32.857L325.384 239.57c-9.066 9.066-9.066 23.792 0 32.858l134.364 134.358c9.052 9.051 9.051 23.806 0 32.857l-9.908 9.908c-9.056 9.056-23.795 9.057-32.851 0L255.591 288.148c-45.274 45.229-33.822 33.759-.033-.033l-15.69-15.691c-9.049-9.049-9.048-23.798 0-32.847z",
    clipRule: "evenodd"
  })));
};

var _g;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgRightArrow = function SvgRightArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    viewBox: "0 0 24 24"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    "data-name": 19
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 19a1 1 0 0 1-.71-1.71l5.3-5.29-5.3-5.29A1 1 0 0 1 12.7 5.3l6 6a1 1 0 0 1 0 1.41l-6 6a1 1 0 0 1-.7.29"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6 19a1 1 0 0 1-.71-1.71l5.3-5.29-5.3-5.29a1 1 0 0 1 1.42-1.42l6 6a1 1 0 0 1 0 1.41l-6 6A1 1 0 0 1 6 19"
  }))));
};

var _path$1, _path2;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgUpArrow = function SvgUpArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#010101",
    d: "M57.3 64c-1.15 0-2.29-.45-3.14-1.35L32 39.23 9.85 62.65a4.317 4.317 0 0 1-6.11.17 4.33 4.33 0 0 1-.18-6.12l25.3-26.74c.82-.86 1.95-1.35 3.14-1.35s2.32.49 3.14 1.35l25.3 26.74a4.317 4.317 0 0 1-.17 6.11c-.84.8-1.91 1.19-2.97 1.19"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#010101",
    d: "M57.3 35.39c-1.15 0-2.29-.45-3.14-1.35L32 10.62 9.85 34.04a4.317 4.317 0 0 1-6.11.17 4.33 4.33 0 0 1-.18-6.12l25.3-26.74C29.68.49 30.81 0 32 0s2.32.49 3.14 1.35l25.3 26.74a4.317 4.317 0 0 1-.17 6.11c-.84.8-1.91 1.19-2.97 1.19"
  })));
};

var css_248z$9 = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.scroll-indicator {\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 600;\n  color: #FF9F1A;\n  cursor: pointer;\n  user-select: none;\n  transition: 0.4s ease-in-out;\n  width: 100%;\n}\n.scroll-indicator .text {\n  font-size: 20px;\n}\n@media (max-width: 1200px) {\n  .scroll-indicator .text {\n    font-size: 16px;\n  }\n}\n@media (max-width: 992px) {\n  .scroll-indicator .text {\n    font-size: 12px;\n  }\n}\n@media (max-width: 768px) {\n  .scroll-indicator .text {\n    font-size: 14px;\n  }\n}\n@media (max-width: 576px) {\n  .scroll-indicator .text {\n    font-size: 12px;\n  }\n}\n\n.arrow {\n  width: 20px;\n  height: 20px;\n  font-size: 28px;\n  animation: bounce 1.5s infinite;\n}\n\n.arrow:first-child {\n  animation-delay: 0s;\n}\n\n.arrow:last-child {\n  animation-delay: 0.3s;\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(6px);\n  }\n}";
styleInject(css_248z$9);

var _excluded = ["className", "onClick", "text", "arrowProps", "textProps", "direction"];
var ScrollIndicator = function ScrollIndicator(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    onClick = _ref.onClick,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? "Descubre más" : _ref$text,
    _ref$arrowProps = _ref.arrowProps,
    arrowProps = _ref$arrowProps === void 0 ? {} : _ref$arrowProps,
    _ref$textProps = _ref.textProps,
    textProps = _ref$textProps === void 0 ? {} : _ref$textProps,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "down" : _ref$direction,
    rest = _objectWithoutProperties(_ref, _excluded);
  var arrowStyle = _objectSpread2({}, arrowProps.style || {});
  var textStyle = _objectSpread2({}, textProps.style || {});
  var renderContent = function renderContent() {
    switch (direction) {
      case "up":
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx(SvgUpArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps)), jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
            className: "text",
            style: textStyle
          }, textProps), {}, {
            children: text
          })), jsxRuntime.jsx(SvgUpArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps))]
        });
      case "left":
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx(SvgLeftArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps)), jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
            className: "text",
            style: textStyle
          }, textProps), {}, {
            children: text
          }))]
        });
      case "right":
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
            className: "text",
            style: textStyle
          }, textProps), {}, {
            children: text
          })), jsxRuntime.jsx(SvgRightArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps))]
        });
      case "bothSides":
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx(SvgLeftArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps)), jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
            className: "text",
            style: textStyle
          }, textProps), {}, {
            children: text
          })), jsxRuntime.jsx(SvgRightArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps))]
        });
      case "down":
      default:
        return jsxRuntime.jsxs(jsxRuntime.Fragment, {
          children: [jsxRuntime.jsx(SvgDownArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps)), jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
            className: "text",
            style: textStyle
          }, textProps), {}, {
            children: text
          })), jsxRuntime.jsx(SvgDownArrow, _objectSpread2({
            className: "arrow bounce",
            style: arrowStyle
          }, arrowProps))]
        });
    }
  };
  return jsxRuntime.jsx("div", _objectSpread2(_objectSpread2({
    className: "scroll-indicator ".concat(className),
    onClick: onClick,
    role: "button",
    tabIndex: 0,
    "aria-label": "Scroll ".concat(direction, " indicator")
  }, rest), {}, {
    children: renderContent()
  }));
};

var css_248z$8 = ".separator {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 15px;\n}\n.separator.--xs svg {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.separator.--sm svg {\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.separator.--md svg {\n  width: 1.6rem;\n  height: 1.6rem;\n}\n.separator.--lg svg {\n  width: 1.8rem;\n  height: 1.8rem;\n}\n.separator.--xl svg {\n  width: 2rem;\n  height: 2rem;\n}";
styleInject(css_248z$8);

/**
 * Map from color variant to actual hex (or theme-based) color.
 * In a real app, you could pull these from a theme or context if desired.
 */
var Separator = function Separator(_ref) {
  var _theme$colors$color;
  var Icon = _ref.icon,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 3 : _ref$count,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'md' : _ref$size,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var theme = useTheme();
  var fillColor = (_theme$colors$color = theme.colors[color]) !== null && _theme$colors$color !== void 0 ? _theme$colors$color : '#000';
  return jsxRuntime.jsx("div", {
    className: "separator --".concat(size, " ").concat(className).trim(),
    children: Array.from({
      length: count
    }).map(function (_, idx) {
      return jsxRuntime.jsx(Icon, {
        fill: fillColor
      }, idx);
    })
  });
};

var css_248z$7 = ".hero-carousel.horizontal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 500px;\n  overflow: hidden;\n  touch-action: pan-y;\n}\n.hero-carousel.horizontal .carousel-track {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  height: 100%;\n  transition: transform 0.5s ease;\n  will-change: transform;\n}\n.hero-carousel.horizontal .carousel-slide {\n  flex: 0 0 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  touch-action: manipulation;\n}\n.hero-carousel.horizontal .nav-button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  border: none;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  font-size: 1.5rem;\n  line-height: 1;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background 0.2s ease;\n}\n.hero-carousel.horizontal .nav-button:hover {\n  background: rgba(0, 0, 0, 0.6);\n}\n.hero-carousel.horizontal .nav-button.prev {\n  left: 10px;\n}\n.hero-carousel.horizontal .nav-button.next {\n  right: 10px;\n}";
styleInject(css_248z$7);

var HeroCarousel = function HeroCarousel(_ref) {
  var _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
    _ref$autoPlayInterval = _ref.autoPlayInterval,
    autoPlayInterval = _ref$autoPlayInterval === void 0 ? 5000 : _ref$autoPlayInterval,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    children = _ref.children,
    _ref$showNavButtons = _ref.showNavButtons,
    showNavButtons = _ref$showNavButtons === void 0 ? false : _ref$showNavButtons;
  var slidesArray = React.Children.toArray(children).flatMap(function (child) {
    return /*#__PURE__*/React.isValidElement(child) && child.type === React.Fragment ? React.Children.toArray(child.props.children) : [child];
  });
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var intervalRef = React.useRef(null);
  var touchStartX = React.useRef(null);
  var touchEndX = React.useRef(null);
  var swipeThreshold = 50; // pixels
  var handleTouchStart = function handleTouchStart(e) {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    touchStartX.current = e.touches[0].clientX;
  };
  var handleTouchMove = function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  };
  var handleTouchEnd = function handleTouchEnd() {
    if (touchStartX.current !== null && touchEndX.current !== null && Math.abs(touchStartX.current - touchEndX.current) > swipeThreshold) {
      if (touchStartX.current > touchEndX.current) {
        handleNext(); // Swiped left
      } else {
        handlePrev(); // Swiped right
      }
    }
    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };
  var handleNext = function handleNext() {
    setCurrentIndex(function (prev) {
      return (prev + 1) % slidesArray.length;
    });
  };
  var handlePrev = function handlePrev() {
    setCurrentIndex(function (prev) {
      return (prev - 1 + slidesArray.length) % slidesArray.length;
    });
  };
  React.useEffect(function () {
    if (autoPlay && slidesArray.length > 1) {
      intervalRef.current = setInterval(function () {
        setCurrentIndex(function (prev) {
          return (prev + 1) % slidesArray.length;
        });
      }, autoPlayInterval);
    }
    return function () {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, slidesArray.length]);
  return jsxRuntime.jsxs("div", {
    className: "hero-carousel horizontal ".concat(className).trim(),
    children: [jsxRuntime.jsx("div", {
      className: "carousel-track",
      style: {
        transform: "translateX(-".concat(currentIndex * 100, "%)")
      },
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      children: slidesArray.map(function (slide, idx) {
        return jsxRuntime.jsx("div", {
          className: "carousel-slide",
          children: slide
        }, idx);
      })
    }), slidesArray.length > 1 && showNavButtons && jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [jsxRuntime.jsx("button", {
        className: "nav-button prev",
        onClick: handlePrev,
        children: "<"
      }), jsxRuntime.jsx("button", {
        className: "nav-button next",
        onClick: handleNext,
        children: ">"
      })]
    })]
  });
};

var css_248z$6 = ".service-card {\n  background-color: #f2f2f2;\n  padding: 2rem;\n  text-align: center;\n  border-radius: 8px;\n  width: 100%;\n}\n.service-card__image-wrapper {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 0 auto 1rem;\n  border: 2px solid #ccc;\n}\n.service-card__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.service-card__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.service-card__description {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0 0 1rem;\n}\n.service-card__link {\n  color: #000;\n  text-decoration: none;\n  font-weight: bold;\n}";
styleInject(css_248z$6);

var ServiceCard = function ServiceCard(_ref) {
  var _theme$typography;
  var title = _ref.title,
    description = _ref.description,
    imageUrl = _ref.imageUrl,
    _ref$altText = _ref.altText,
    altText = _ref$altText === void 0 ? "" : _ref$altText,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    buttonProps = _ref.buttonProps;
  var theme = useTheme();
  var fontFamily = (theme === null || theme === void 0 || (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif";
  return jsxRuntime.jsxs("div", {
    className: "service-card ".concat(className),
    style: {
      fontFamily: fontFamily
    },
    children: [jsxRuntime.jsx("div", {
      className: "service-card__image-wrapper",
      children: jsxRuntime.jsx("img", {
        src: imageUrl,
        alt: altText,
        className: "service-card__image"
      })
    }), jsxRuntime.jsx("h3", {
      className: "service-card__title",
      children: title
    }), jsxRuntime.jsx("p", {
      className: "service-card__description",
      children: description
    }), jsxRuntime.jsx(SimpleButton, _objectSpread2({
      title: "Learn More"
    }, buttonProps))]
  });
};

var css_248z$5 = ".testimonial-card {\n  background-color: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  padding: 1.5rem;\n  max-width: 350px;\n  font-family: \"Nunito\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: transform 0.3s ease;\n}\n.testimonial-card:hover {\n  transform: translateY(-5px);\n}\n.testimonial-card__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.testimonial-card__person {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.testimonial-card__image {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.testimonial-card__name {\n  font-weight: bold;\n  color: #222;\n}\n.testimonial-card__role {\n  font-size: 0.85rem;\n  color: #666;\n}\n.testimonial-card__stars {\n  display: flex;\n  gap: 0.2rem;\n  font-size: 1.1rem;\n  color: #ddd;\n}\n.testimonial-card__star.filled {\n  color: #ffb400;\n}\n.testimonial-card__message {\n  font-size: 1rem;\n  font-style: italic;\n  color: #444;\n  line-height: 1.5;\n  margin-top: 0.5rem;\n}";
styleInject(css_248z$5);

var TestimonialCard = function TestimonialCard(_ref) {
  var _theme$shadows, _theme$shadows2, _theme$shadows3, _theme$shadows4;
  var name = _ref.name,
    role = _ref.role,
    message = _ref.message,
    imageUrl = _ref.imageUrl,
    _ref$rating = _ref.rating,
    rating = _ref$rating === void 0 ? 5 : _ref$rating,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "md" : _ref$variant;
  var theme = useTheme() || {};
  var boxShadowMap = {
    xs: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.xs) || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    sm: ((_theme$shadows2 = theme.shadows) === null || _theme$shadows2 === void 0 ? void 0 : _theme$shadows2.sm) || "rgba(0, 0, 0, 0.15) 0px 1px 3px",
    md: ((_theme$shadows3 = theme.shadows) === null || _theme$shadows3 === void 0 ? void 0 : _theme$shadows3.md) || "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    lg: ((_theme$shadows4 = theme.shadows) === null || _theme$shadows4 === void 0 ? void 0 : _theme$shadows4.lg) || "rgba(0, 0, 0, 0.35) 0px 10px 20px"
  };
  var cardStyle = React.useMemo(function () {
    var _theme$typography;
    return {
      boxShadow: boxShadowMap[variant],
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif"
    };
  }, [theme, variant]);
  var renderStars = function renderStars() {
    var fullStars = Math.max(0, Math.min(5, rating));
    return _toConsumableArray(Array(5)).map(function (_, i) {
      return jsxRuntime.jsx("span", {
        className: "testimonial-card__star ".concat(i < fullStars ? "filled" : ""),
        children: "\u2605"
      }, i);
    });
  };
  return jsxRuntime.jsxs("div", {
    className: "testimonial-card ".concat(className),
    style: cardStyle,
    children: [jsxRuntime.jsxs("div", {
      className: "testimonial-card__top",
      children: [jsxRuntime.jsxs("div", {
        className: "testimonial-card__person",
        children: [jsxRuntime.jsx("img", {
          className: "testimonial-card__image",
          src: imageUrl,
          alt: name
        }), jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsx("div", {
            className: "testimonial-card__name",
            children: name
          }), jsxRuntime.jsx("div", {
            className: "testimonial-card__role",
            children: role
          })]
        })]
      }), jsxRuntime.jsx("div", {
        className: "testimonial-card__stars",
        children: renderStars()
      })]
    }), jsxRuntime.jsxs("p", {
      className: "testimonial-card__message",
      children: ["\u201C", message, "\u201D"]
    })]
  });
};

var css_248z$4 = ".icon-card {\n  background-color: #ffffff;\n  padding: 0.5rem;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100px;\n  transition: transform 0.2s ease;\n}\n.icon-card:hover {\n  transform: translateY(-2px);\n}\n.icon-card__icon {\n  font-size: 1.8rem;\n  margin-bottom: 0rem;\n}\n.icon-card__title {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #333;\n}";
styleInject(css_248z$4);

var IconCard = function IconCard(_ref) {
  var Icon = _ref.icon,
    title = _ref.title,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#2ec4b6" : _ref$color,
    _ref$iconSize = _ref.iconSize,
    iconSize = _ref$iconSize === void 0 ? 24 : _ref$iconSize,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? "#ffffff" : _ref$backgroundColor,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var theme = useTheme() || {};
  var styles = React.useMemo(function () {
    var _theme$shadows, _theme$typography;
    return {
      boxShadow: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.sm) || "0 2px 6px rgba(0, 0, 0, 0.05)",
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif",
      backgroundColor: backgroundColor // ✅ Now works because it's in scope
    };
  }, [theme, backgroundColor]);
  return jsxRuntime.jsxs("div", {
    className: "icon-card ".concat(className),
    style: styles,
    children: [jsxRuntime.jsx("div", {
      className: "icon-card__icon",
      children: jsxRuntime.jsx(Icon, {
        style: {
          width: iconSize,
          height: iconSize,
          fill: color
        }
      })
    }), jsxRuntime.jsx("span", {
      className: "icon-card__title",
      style: {
        color: color
      },
      children: title
    })]
  });
};

var css_248z$3 = ".service-highlight-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n.service-highlight-card__image {\n  width: 64px;\n  height: 64px;\n  object-fit: cover;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.service-highlight-card__content {\n  flex: 1;\n  text-align: left;\n}\n.service-highlight-card__title {\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2ec4b6;\n}\n.service-highlight-card__description {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #555;\n}";
styleInject(css_248z$3);

var ServiceHighlightCard = function ServiceHighlightCard(_ref) {
  var imageUrl = _ref.imageUrl,
    _ref$altText = _ref.altText,
    altText = _ref$altText === void 0 ? "Service image" : _ref$altText,
    title = _ref.title,
    description = _ref.description,
    _ref$titleColor = _ref.titleColor,
    titleColor = _ref$titleColor === void 0 ? "#2ec4b6" : _ref$titleColor,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var theme = useTheme() || {};
  var styles = React.useMemo(function () {
    var _theme$typography, _theme$shadows;
    return {
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif",
      boxShadow: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.md) || "0 2px 6px rgba(0, 0, 0, 0.05)"
    };
  }, [theme]);
  return jsxRuntime.jsxs("div", {
    className: "service-highlight-card ".concat(className),
    style: styles,
    children: [jsxRuntime.jsx("img", {
      src: imageUrl,
      alt: altText,
      className: "service-highlight-card__image"
    }), jsxRuntime.jsxs("div", {
      className: "service-highlight-card__content",
      children: [jsxRuntime.jsx("h3", {
        className: "service-highlight-card__title",
        style: {
          color: titleColor
        },
        children: title
      }), jsxRuntime.jsx("p", {
        className: "service-highlight-card__description",
        children: description
      })]
    })]
  });
};

var css_248z$2 = "@charset \"UTF-8\";\n.pricing-card {\n  position: relative;\n  width: 100%;\n  max-width: 300px;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  padding: 2rem 1.5rem;\n  text-align: center;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.3s ease;\n}\n.pricing-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.pricing-card__badge {\n  position: absolute;\n  top: 0.7rem;\n  right: 1rem;\n  background-color: orange;\n  color: #fff;\n  font-size: 0.55rem;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.pricing-card__header {\n  margin-bottom: 1rem;\n}\n.pricing-card__price {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n}\n.pricing-card__price .pricing-card__billing-cycle {\n  font-size: 1rem;\n  font-weight: 400;\n  margin-left: 4px;\n  color: #555;\n}\n.pricing-card__plan-name {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0.5rem 0 0;\n}\n.pricing-card__description {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0.5rem 0;\n}\n.pricing-card__features {\n  list-style: none;\n  padding: 0;\n  margin: 1rem 0;\n  text-align: left;\n}\n.pricing-card__feature {\n  position: relative;\n  padding-left: 1.5rem;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n.pricing-card__feature::before {\n  content: \"✔\";\n  color: #2ec4b6;\n  position: absolute;\n  left: 0;\n}";
styleInject(css_248z$2);

var PricingCard = function PricingCard(_ref) {
  var planName = _ref.planName,
    price = _ref.price,
    billingCycle = _ref.billingCycle,
    description = _ref.description,
    features = _ref.features,
    _ref$isPopular = _ref.isPopular,
    isPopular = _ref$isPopular === void 0 ? false : _ref$isPopular,
    _ref$popularLabel = _ref.popularLabel,
    popularLabel = _ref$popularLabel === void 0 ? "MÁS POPULAR" : _ref$popularLabel,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? "Cotizar" : _ref$buttonText,
    onButtonClick = _ref.onButtonClick,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var theme = useTheme() || {};
  var themedStyles = React.useMemo(function () {
    var _theme$typography, _theme$shadows;
    return {
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif",
      boxShadow: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.md) || "0 2px 6px rgba(0, 0, 0, 0.05)"
    };
  }, [theme]);
  return jsxRuntime.jsxs("div", {
    className: "pricing-card ".concat(className),
    style: themedStyles,
    children: [isPopular && jsxRuntime.jsx("div", {
      className: "pricing-card__badge",
      children: popularLabel
    }), jsxRuntime.jsxs("div", {
      className: "pricing-card__header",
      children: [price ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsxs("h2", {
          className: "pricing-card__price",
          children: [price, jsxRuntime.jsx("span", {
            className: "pricing-card__billing-cycle",
            children: billingCycle
          })]
        }), jsxRuntime.jsx("h3", {
          className: "pricing-card__plan-name",
          children: planName
        })]
      }) : jsxRuntime.jsx("h2", {
        className: "pricing-card__plan-duration",
        children: planName
      }), jsxRuntime.jsx("p", {
        className: "pricing-card__description",
        children: description
      })]
    }), jsxRuntime.jsx("ul", {
      className: "pricing-card__features",
      children: features.map(function (feature, index) {
        return jsxRuntime.jsx("li", {
          className: "pricing-card__feature",
          children: feature
        }, index);
      })
    }), jsxRuntime.jsx(SimpleButton, {
      title: buttonText,
      onClick: onButtonClick,
      variant: "md",
      color: "primary"
    })]
  });
};

var css_248z$1 = ".carousel {\n  position: relative;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0 0 1rem 0;\n}\n.carousel__wrapper {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px;\n}\n.carousel__cards {\n  display: flex;\n  transition: transform 0.5s ease;\n}\n.carousel__card {\n  min-width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.carousel__arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.carousel__arrow svg {\n  width: 20px;\n  height: 20px;\n  fill: #2ec4b6;\n  transition: fill 0.3s ease;\n}\n.carousel__arrow:hover {\n  cursor: pointer;\n}\n.carousel__arrow:hover svg {\n  fill: #ff9f1a;\n}\n.carousel__arrow--left {\n  left: 10px;\n}\n.carousel__arrow--right {\n  right: 10px;\n}\n@media (max-width: 768px) {\n  .carousel__arrow svg {\n    width: 16px;\n    height: 16px;\n  }\n  .carousel__arrow--left {\n    left: 4px;\n  }\n  .carousel__arrow--right {\n    right: 4px;\n  }\n  .carousel__card {\n    padding: 0;\n  }\n}";
styleInject(css_248z$1);

var PricingCarousel = function PricingCarousel(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$arrowStyle = _ref.arrowStyle,
    arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle;
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var totalCards = React.Children.count(children);
  var theme = useTheme() || {};
  var styles = React.useMemo(function () {
    var _theme$shadows, _theme$typography, _theme$colors;
    return {
      boxShadow: ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.sm) || "0 2px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif",
      arrowFill: ((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary) || "#2ec4b6"
    };
  }, [theme]);
  var combinedArrowStyle = _objectSpread2({
    width: "20px",
    height: "20px",
    fill: styles.arrowFill,
    display: "block"
  }, arrowStyle);
  var nextSlide = function nextSlide() {
    setCurrentIndex(function (prev) {
      return (prev + 1) % totalCards;
    });
  };
  var prevSlide = function prevSlide() {
    setCurrentIndex(function (prev) {
      return (prev - 1 + totalCards) % totalCards;
    });
  };
  return jsxRuntime.jsxs("div", {
    className: "carousel ".concat(className),
    style: {
      fontFamily: styles.fontFamily
    },
    children: [jsxRuntime.jsx("div", {
      className: "carousel__arrow carousel__arrow--left",
      onClick: prevSlide,
      children: jsxRuntime.jsx(SvgRightArrow, {
        style: _objectSpread2(_objectSpread2({}, combinedArrowStyle), {}, {
          transform: "scaleX(-1)"
        })
      })
    }), jsxRuntime.jsx("div", {
      className: "carousel__wrapper",
      children: jsxRuntime.jsx("div", {
        className: "carousel__cards",
        style: {
          transform: "translateX(-".concat(currentIndex * 100, "%)")
        },
        children: React.Children.map(children, function (child, index) {
          return jsxRuntime.jsx("div", {
            className: "carousel__card",
            children: child
          }, index);
        })
      })
    }), jsxRuntime.jsx("div", {
      className: "carousel__arrow carousel__arrow--right",
      onClick: nextSlide,
      children: jsxRuntime.jsx(SvgRightArrow, {
        style: combinedArrowStyle
      })
    })]
  });
};

var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgMenuArrow = function SvgMenuArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.47 8.97a.75.75 0 0 1 1.06 0L12 13.44l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06",
    clipRule: "evenodd"
  })));
};

var css_248z = ".accordion {\n  width: 100%;\n  max-width: 600px;\n  margin: auto;\n  font-family: \"Arial\", sans-serif;\n  padding: 10px;\n}\n.accordion .accordion-item {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-bottom: 8px;\n  background-color: #fff;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.accordion .accordion-item .accordion-header {\n  width: 100%;\n  border: none;\n  padding: 16px;\n  text-align: left;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ffffff;\n  color: #000000;\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.accordion .accordion-item .accordion-header:hover {\n  background-color: #f5f5f5;\n}\n.accordion .accordion-item .accordion-header .icon {\n  transition: transform 0.3s ease;\n  color: inherit;\n}\n.accordion .accordion-item .accordion-header.open .icon {\n  transform: rotate(180deg);\n}\n.accordion .accordion-item .accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  padding: 0 16px;\n  background-color: #fafafa;\n  font-size: 14px;\n  color: #555;\n  transition: max-height 0.3s ease-out, padding 0.3s ease-out;\n}\n.accordion .accordion-item .accordion-content.show {\n  max-height: 200px;\n  padding: 12px 16px;\n}";
styleInject(css_248z);

var Accordion = function Accordion(_ref) {
  var _theme$borders, _theme$shadows, _theme$colors, _theme$typography;
  var questions = _ref.questions,
    openColor = _ref.openColor,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  var _useState = React.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    openIndex = _useState2[0],
    setOpenIndex = _useState2[1];
  var theme = useTheme() || {};
  var borderRadius = ((_theme$borders = theme.borders) === null || _theme$borders === void 0 ? void 0 : _theme$borders.radiusMd) || "8px";
  var boxShadow = ((_theme$shadows = theme.shadows) === null || _theme$shadows === void 0 ? void 0 : _theme$shadows.sm) || "rgba(0, 0, 0, 0.1) 0px 3px 6px";
  var primaryColor = openColor || ((_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary) || "#FF9F1A";
  var fontFamily = ((_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : _theme$typography.fontFamily) || "Nunito, sans-serif";
  var toggleAccordion = function toggleAccordion(index) {
    setOpenIndex(openIndex === index ? null : index);
  };
  if (!(questions !== null && questions !== void 0 && questions.length)) return null;
  return jsxRuntime.jsx("div", {
    className: "accordion ".concat(className),
    style: {
      fontFamily: fontFamily
    },
    children: questions.map(function (item, index) {
      var isOpen = openIndex === index;
      var headerStyle = React.useMemo(function () {
        return {
          backgroundColor: isOpen ? primaryColor : "#ffffff",
          color: isOpen ? "#ffffff" : "#000000",
          borderRadius: borderRadius,
          boxShadow: boxShadow
        };
      }, [isOpen]);
      return jsxRuntime.jsxs("div", {
        className: "accordion-item",
        style: {
          borderRadius: borderRadius,
          boxShadow: boxShadow,
          fontFamily: fontFamily
        },
        children: [jsxRuntime.jsxs("button", {
          className: "accordion-header ".concat(isOpen ? "open" : ""),
          onClick: function onClick() {
            return toggleAccordion(index);
          },
          style: headerStyle,
          children: [item.question, jsxRuntime.jsx("span", {
            className: "arrow ".concat(isOpen ? "rotated" : ""),
            children: jsxRuntime.jsx(SvgMenuArrow, {
              style: {
                fill: isOpen ? "white" : "black"
              }
            })
          })]
        }), jsxRuntime.jsx("div", {
          className: "accordion-content ".concat(isOpen ? "show" : ""),
          children: item.answer
        })]
      }, index);
    })
  });
};

exports.Accordion = Accordion;
exports.FullScreenHero = FullScreenHero;
exports.HeroCarousel = HeroCarousel;
exports.HeroContentWrapper = HeroContentWrapper;
exports.IconCard = IconCard;
exports.Navbar = Navbar;
exports.PricingCard = PricingCard;
exports.PricingCarousel = PricingCarousel;
exports.ScrollIndicator = ScrollIndicator;
exports.Separator = Separator;
exports.ServiceCard = ServiceCard;
exports.ServiceHighlightCard = ServiceHighlightCard;
exports.SideBar = SideBar;
exports.SimpleButton = SimpleButton;
exports.TestimonialCard = TestimonialCard;
exports.ThemeProvider = ThemeProvider;
exports.theme = theme;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
