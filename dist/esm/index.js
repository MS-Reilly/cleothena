import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useContext, useMemo } from 'react';

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

var ThemeContext = /*#__PURE__*/createContext(theme);
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    _ref$theme = _ref.theme,
    theme$1 = _ref$theme === void 0 ? {} : _ref$theme;
  var mergedTheme = _objectSpread2(_objectSpread2({}, theme), theme$1); // ✅ Merge custom theme with defaults
  return jsx(ThemeContext.Provider, {
    value: mergedTheme,
    children: children
  });
};

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

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

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap\");\n/*========================= Theme Colors =========================*/\n/* Transparent Colors */\n/* Additional Colors */\n/* Neutral Colors */\n/* Disabled Colors */\n/* Alerts */\n/* Gradients */\n/*========================= Typography =========================*/\n/* Headings */\n/*========================= Spacing =========================*/\n/*========================= Breakpoints =========================*/\n/*========================= Borders & Shadows =========================*/\n/*========================= Transitions =========================*/\n/*========================= Containers =========================*/\n.buttonClass {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  text-align: center;\n  border: 2px solid transparent;\n  user-select: none;\n  transition: all 0.4s ease-in-out;\n  cursor: pointer;\n  letter-spacing: 0.5px;\n  line-height: 1.5;\n  /* Default Button Colors */\n  background-color: #FF9F1A;\n  color: #ffffff;\n  border-color: #FF9F1A;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;\n  /* Variant Styles */\n  /* Secondary Variant */\n  /* Accent Variant */\n  /* Highlight Variant */\n  /* Outline Variant */\n  /* Ghost Variant */\n  /* Responsive Behavior */\n}\n.buttonClass:hover {\n  opacity: 0.85;\n}\n.buttonClass:active {\n  transform: scale(0.98);\n}\n.buttonClass.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n  background-color: #E0E0E0;\n  color: #9E9E9E;\n  border-color: #BDBDBD;\n}\n.buttonClass.xs {\n  font-size: 8px;\n  padding: 4px 8px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 3px;\n}\n.buttonClass.sm {\n  font-size: 12px;\n  padding: 6px 12px;\n  height: 25px;\n  min-width: 20px;\n  border-radius: 4px;\n}\n.buttonClass.md {\n  font-size: 16px;\n  padding: 10px 16px;\n  height: 35px;\n  min-width: 30px;\n  border-radius: 8px;\n}\n.buttonClass.lg {\n  font-size: 20px;\n  padding: 14px 20px;\n  height: 52px;\n  min-width: 120px;\n  border-radius: 12px;\n}\n.buttonClass.secondary {\n  background-color: #FFB516;\n  border-color: #FFB516;\n  color: #000000;\n}\n.buttonClass.accent {\n  background-color: #2EC4B6;\n  border-color: #2EC4B6;\n  color: #ffffff;\n}\n.buttonClass.highlight {\n  background-color: #00ADA9;\n  border-color: #00ADA9;\n  color: #ffffff;\n}\n.buttonClass.outline {\n  background-color: transparent;\n  border-color: currentColor;\n  color: inherit;\n}\n.buttonClass.ghost {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  box-shadow: none;\n}\n@media (max-width: 768px) {\n  .buttonClass.md {\n    font-size: 12px;\n    padding: 8px 14px;\n  }\n  .buttonClass.lg {\n    font-size: 16px;\n    padding: 12px 18px;\n  }\n}";
styleInject(css_248z);

var _excluded = ["title", "children", "onClick", "className", "disabled", "variant", "color", "outline", "ghost"];
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
    rest = _objectWithoutProperties(_ref, _excluded);
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
  var themedStyles = useMemo(function () {
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
  return jsxs("div", _objectSpread2(_objectSpread2({
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

export { SimpleButton, ThemeProvider, theme, useTheme };
//# sourceMappingURL=index.js.map
