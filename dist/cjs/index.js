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
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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

var css_248z$2 = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.buttonClass {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  text-align: center;\n  border: 2px solid transparent;\n  user-select: none;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n  /* Default Button Colors */\n  background-color: #FF9F1A;\n  color: #ffffff;\n  border-color: #FF9F1A;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;\n  /* Variant Styles */\n  /* Secondary Variant */\n  /* Accent Variant */\n  /* Highlight Variant */\n  /* Outline Variant */\n  /* Ghost Variant */\n  /* Responsive Behavior */\n}\n.buttonClass:hover {\n  opacity: 0.85;\n}\n.buttonClass:active {\n  transform: scale(0.98);\n}\n.buttonClass.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  background-color: #E0E0E0;\n  color: #9E9E9E;\n  border-color: #BDBDBD;\n}\n.buttonClass.xs {\n  font-size: 8px;\n  padding: 4px 8px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 3px;\n}\n.buttonClass.sm {\n  font-size: 12px;\n  padding: 6px 12px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 4px;\n}\n.buttonClass.md {\n  font-size: 16px;\n  padding: 10px 16px;\n  height: 35px;\n  min-width: 30px;\n  border-radius: 8px;\n}\n.buttonClass.lg {\n  font-size: 20px;\n  padding: 14px 20px;\n  height: 52px;\n  min-width: 120px;\n  border-radius: 12px;\n}\n.buttonClass.secondary {\n  background-color: #FFB516;\n  border-color: #FFB516;\n  color: #000000;\n}\n.buttonClass.accent {\n  background-color: #2EC4B6;\n  border-color: #2EC4B6;\n  color: #ffffff;\n}\n.buttonClass.highlight {\n  background-color: #00ADA9;\n  border-color: #00ADA9;\n  color: #ffffff;\n}\n.buttonClass.outline {\n  background-color: transparent;\n  border-color: currentColor;\n  color: inherit;\n}\n.buttonClass.ghost {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .buttonClass.md {\n    font-size: 12px;\n    padding: 8px 14px;\n  }\n  .buttonClass.lg {\n    font-size: 16px;\n    padding: 12px 18px;\n  }\n}";
styleInject(css_248z$2);

var _excluded$2 = ["title", "children", "onClick", "className", "disabled", "variant", "color", "outline", "ghost"];
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
    rest = _objectWithoutProperties(_ref, _excluded$2);
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

var css_248z$1 = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.sb-show-main {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.navbar {\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.3s ease;\n  box-shadow: 16px;\n  padding: 10px 10px;\n}\n.navbar .navbar-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n.navbar .navbar-links {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n.navbar .navbar-item {\n  position: relative;\n  text-decoration: none;\n}\n.navbar .navbar-item .nav-link {\n  font-weight: 500;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.navbar .navbar-item:hover .navbar-dropdown {\n  display: flex;\n  flex-direction: column;\n  transition: all 0.3s ease-in-out;\n}\n.navbar .navbar-item:hover .navbar-dropdown .nav-link {\n  font-weight: 500;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.navbar .navbar-dropdown {\n  display: none;\n  position: absolute;\n  background: white;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  border-radius: 5px;\n}\n.navbar .navbar-toggle {\n  display: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.navbar .navbar-mobile {\n  display: none;\n  flex-direction: column;\n  padding: 10px;\n}\n@media (max-width: 768px) {\n  .navbar .navbar-links {\n    display: none;\n  }\n  .navbar .navbar-toggle {\n    display: block;\n  }\n  .navbar .navbar-mobile {\n    display: flex;\n  }\n}";
styleInject(css_248z$1);

var css_248z = "@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.sidebar {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 250px;\n  background-color: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  transform: translateX(-100%);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  /* ✅ Close Button Positioned at Absolute Top-Right */\n  /* ✅ Sidebar Header */\n  /* ✅ Sidebar Content (Scrollable) */\n  /* ✅ Sidebar Footer */\n}\n.sidebar.mobile-open {\n  transform: translateX(0);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n}\n.sidebar.mobile-closed {\n  transform: translateX(-100%);\n}\n.sidebar.sidebar-right {\n  right: 0;\n  left: auto;\n  transform: translateX(100%);\n}\n.sidebar.sidebar-right.mobile-open {\n  transform: translateX(0);\n}\n.sidebar.sidebar-right.mobile-closed {\n  transform: translateX(100%);\n}\n.sidebar.sidebar-right .close-btn {\n  right: auto;\n  left: 10px;\n}\n.sidebar .close-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n  z-index: 1100;\n}\n.sidebar .close-btn:hover {\n  transform: scale(1.1);\n  opacity: 0.8;\n}\n.sidebar .sidebar-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 25px 15px 15px;\n  border-bottom: 1px solid #e3e6f0;\n  position: relative;\n}\n.sidebar .sidebar-header .logo {\n  max-width: 180px;\n}\n.sidebar .sidebar-header .logo img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.sidebar .sidebar-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 15px;\n  max-height: calc(100vh - 70px - 60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar {\n  width: 4px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-thumb {\n  background-color: #f8f9fa;\n  border-radius: 4px;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-thumb:hover {\n  background-color: #f8f9fa;\n}\n.sidebar .sidebar-content::-webkit-scrollbar-track {\n  background-color: #f0f0f0;\n}\n.sidebar .sidebar-footer {\n  padding: 10px;\n  border-top: 1px solid #e3e6f0;\n  background: white;\n}\n.sidebar .sidebar-footer .helper-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n  font-size: 0.85rem;\n  padding: 10px;\n  background-color: #e0f7fa;\n  color: #343a40;\n  border-radius: 8px;\n  transition: opacity 0.4s ease, transform 0.4s ease;\n}\n.sidebar .sidebar-footer .helper-card:hover {\n  opacity: 1;\n  transform: translateY(0);\n}\n.sidebar .sidebar-footer .helper-card button {\n  margin-top: 10px;\n  padding: 5px 10px;\n  background-color: #2EC4B6;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.sidebar .sidebar-footer .helper-card button:hover {\n  background-color: #00ADA9;\n}\n\n.sidebar-item {\n  box-sizing: border-box;\n  width: 100%;\n}\n.sidebar-item .item-header {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2px 7px;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  transition: background 0.3s ease, color 0.3s ease;\n  background-color: transparent;\n  gap: 10px;\n}\n.sidebar-item .item-header:hover {\n  background-color: #f7f7f7;\n}\n.sidebar-item .item-header.active {\n  background-color: #e0f7fa;\n  color: #344767;\n}\n.sidebar-item .item-header.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n  color: #6e708c;\n}\n.sidebar-item .item-header .icon {\n  font-size: 1.8rem;\n  transition: color 0.3s ease;\n}\n.sidebar-item .item-header .title {\n  flex-grow: 1;\n  font-weight: 600;\n  text-align: left;\n}\n.sidebar-item .item-header .expand-icon {\n  font-size: 1rem;\n  color: #999999;\n  transition: color 0.3s ease;\n}\n.sidebar-item .sub-items {\n  margin-top: 0.5rem;\n  padding-left: 20px;\n  list-style: none;\n}\n.sidebar-item .sub-items .sub-item {\n  margin-bottom: 0.5rem;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 0.5rem;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link:hover {\n  background-color: #f9f9f9;\n  color: #2ec4b6;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link.active {\n  background-color: #d6f5f8;\n  color: #344767;\n  font-weight: bold;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.sidebar-item .sub-items .sub-item .sub-item-link .sub-title {\n  font-size: 0.9rem;\n  font-weight: 500;\n}";
styleInject(css_248z);

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

var _excluded$1 = ["to", "children", "className", "style"];
// This SafeNavLink avoids crashing when router context is missing
var SafeNavLink = function SafeNavLink(_ref) {
  var to = _ref.to,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var routerContext = React.useContext(reactRouterDom.UNSAFE_LocationContext);
  if (!routerContext) {
    console.warn("⚠️ <SafeNavLink> used outside <BrowserRouter>. Rendering <span> fallback.");
    return jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({
      className: typeof className === "function" ? className({
        isActive: false,
        isPending: false,
        isTransitioning: false
      }) : className,
      style: typeof style === "function" ? style({
        isActive: false,
        isPending: false,
        isTransitioning: false
      }) : style
    }, rest), {}, {
      children: children
    }));
  }
  return jsxRuntime.jsx(reactRouterDom.NavLink, _objectSpread2(_objectSpread2({
    to: to,
    className: className,
    style: style
  }, rest), {}, {
    children: children
  }));
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
        color: isAnyChildActive ? theme.colors.neutral.white : theme.colors.neutral.grey,
        backgroundColor: isAnyChildActive ? lightenColor(theme.colors.secondary, 0.1) : "transparent"
      },
      children: [jsxRuntime.jsx("span", {
        className: "icon",
        children: Icon && jsxRuntime.jsx(Icon, {
          width: 20,
          height: 20,
          fill: isAnyChildActive ? theme.colors.neutral.white : theme.colors.accent
        })
      }), isOpen && jsxRuntime.jsx("span", {
        className: "title",
        children: item.label
      }), isOpen && !item.disabled && jsxRuntime.jsx("span", {
        className: "expand-icon",
        style: {
          color: isAnyChildActive ? theme.colors.neutral.white : theme.colors.neutral.grey
        },
        children: isExpanded ? "-" : "+"
      })]
    }) : jsxRuntime.jsx(SafeNavLink, {
      to: item.disabled ? "#" : item.href || "#",
      className: function className(_ref2) {
        var isActive = _ref2.isActive;
        return "item-header ".concat(isActive ? "active" : "notActive", " ").concat(item.disabled ? "disabled" : "");
      },
      style: function style(_ref3) {
        var isActive = _ref3.isActive;
        return {
          cursor: item.disabled ? "not-allowed" : "pointer",
          color: isActive ? theme.colors.neutral.white : theme.colors.neutral.grey,
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
              fill: isActive ? theme.colors.neutral.white : theme.colors.accent
            })
          }), isOpen && jsxRuntime.jsx("span", {
            className: "title",
            children: item.label
          })]
        });
      }
    }), isExpanded && isOpen && item.children && !item.disabled && jsxRuntime.jsx("ul", {
      className: "sub-items",
      children: item.children.map(function (child, index) {
        return jsxRuntime.jsx("li", {
          className: "sub-item",
          children: jsxRuntime.jsx(SafeNavLink, {
            to: child.disabled ? "#" : child.href || "#",
            className: function className(_ref5) {
              var isActive = _ref5.isActive;
              return "sub-item-link ".concat(isActive ? "active" : "notActive", " ").concat(child.disabled ? "disabled" : "");
            },
            style: {
              pointerEvents: child.disabled ? "none" : "auto",
              color: child.disabled ? "#b0b0b0" : "inherit"
            },
            end: true,
            children: jsxRuntime.jsx("span", {
              className: "sub-title",
              children: child.label
            })
          })
        }, index);
      })
    })]
  });
};

var _path;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    viewBox: "0 0 64 64"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.59 59.41a2 2 0 0 0 2.83 0L32 34.83l24.59 24.58a2 2 0 0 0 2.83-2.83L34.83 32 59.41 7.41a2 2 0 0 0-2.83-2.83L32 29.17 7.41 4.59a2 2 0 0 0-2.82 2.82L29.17 32 4.59 56.59a2 2 0 0 0 0 2.82"
  })));
};

var _g;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 512,
    viewBox: "0 0 16 16"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
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
    side = _ref$side === void 0 ? "left" : _ref$side;
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
    children: [!isMobileOpen && jsxRuntime.jsx("img", {
      src: SvgHamburger,
      alt: "hamburger menu",
      ref: hamburgerRef,
      className: "hamburger-icon",
      style: {
        height: "15px",
        width: "15px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        return setIsMobileOpen(true);
      }
    }), jsxRuntime.jsxs("div", {
      ref: sidebarRef,
      className: "sidebar ".concat(isMobileOpen ? "mobile-open" : "mobile-closed", " sidebar-").concat(side),
      children: [jsxRuntime.jsxs("div", {
        className: "sidebar-header",
        children: [jsxRuntime.jsx("div", {
          className: "logo",
          children: logo
        }), jsxRuntime.jsx("img", {
          src: SvgClose,
          alt: "close",
          className: "close-btn",
          onClick: function onClick() {
            return setIsMobileOpen(false);
          },
          style: {
            height: "15px",
            width: "15px",
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

var _excluded = ["to", "children"];
// Same props as Link
var SafeLink = function SafeLink(_ref) {
  var to = _ref.to,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var routerContext = React.useContext(reactRouterDom.UNSAFE_LocationContext);
  if (!routerContext) {
    console.warn("⚠️ <SafeLink> used outside <BrowserRouter>. Rendering <span> fallback.");
    return jsxRuntime.jsx("span", _objectSpread2(_objectSpread2({}, rest), {}, {
      children: children
    }));
  }
  return jsxRuntime.jsx(reactRouterDom.Link, _objectSpread2(_objectSpread2({
    to: to
  }, rest), {}, {
    children: children
  }));
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
    _ref$sideBarSide = _ref.sideBarSide,
    sideBarSide = _ref$sideBarSide === void 0 ? "left" : _ref$sideBarSide;
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
      children: [jsxRuntime.jsx(SafeLink, {
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
            children: [jsxRuntime.jsx(SafeNavLink, {
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
                return jsxRuntime.jsx(SafeNavLink, {
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
        children: jsxRuntime.jsx(SideBar, {
          logo: logo,
          sidebarConfig: links,
          side: sideBarSide
        })
      })]
    })
  });
};

exports.Navbar = Navbar;
exports.SideBar = SideBar;
exports.SimpleButton = SimpleButton;
exports.ThemeProvider = ThemeProvider;
exports.theme = theme;
exports.useTheme = useTheme;
//# sourceMappingURL=index.js.map
