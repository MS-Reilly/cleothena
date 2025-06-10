// theme/theme.js
export const theme = {
  /* ───────────────────────────────────── Colors ───────────────────────────────────── */
  colors: {
    /* brand palette */
    primary: "#2EC4B6",
    primary80: "#5E6081",
    secondary: "#7F8CAA",
    secondary80: "#BCC3D3",
    accent: "#B8CFCE",
    highlight: "#EAEFEF",

    /* semantic */
    success: "#4CAF50",
    warning: "#FF9800",
    danger: "#F44336",
    info: "#2196F3",

    /* alerts background tints */
    successBg: "#E8F5E9",
    warningBg: "#FFF8E1",
    dangerBg: "#FFEBEE",
    infoBg: "#E3F2FD",

    /* neutral / greyscale */
    neutral: {
      white: "#FFFFFF",
      black: "#111111",
      grey100: "#F8F9FA",
      grey200: "#E8EBE6",
      grey300: "#C9CEC6",
      grey400: "#9EA49A",
      grey500: "#6B6F68",
    },

    /* control states */
    disabledBg: "#F7F7F7",
    disabledText: "#9E9E9E",
    disabledBorder: "#BDBDBD",

    /* gradients (examples) */
    gradientPrimary: "linear-gradient(90deg,#FF9B17 0%,#FFB74A 100%)",
    gradientSecondary: "linear-gradient(90deg,#F2C078 0%,#F4CF9A 100%)",
  },

  /* ───────────────────────────────── Typography ──────────────────────────────────── */
  icons: {
    /** Which folder/prefix to use for all icons */
    set: "ts",
  },

  /* ───────────────────────────────── Typography ──────────────────────────────────── */
  typography: {
    fontFamily: '"Quicksand", sans-serif',
    fontFamilyCode: '"Fira Code", monospace',
    base: "16px",
    lg: "20px",
    sm: "14px",
    lineHeight: 1.5,

    headings: {
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.75rem",
      h4: "1.5rem",
      h5: "1.25rem",
      h6: "1rem",
    },
  },

  /* ───────────────────────────────── Space / Layout ───────────────────────────────── */
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },

  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wideDesktop: 1440,
  },

  /* ───────────────────────────────── Borders & Radius ─────────────────────────────── */
  borders: {
    widthHairline: "1px",
    widthSm: "2px",
    widthMd: "3px",
    radiusXs: "3px",
    radiusSm: "4px",
    radiusMd: "6px",
    radiusLg: "10px",
    radiusCircle: "50%",
  },

  /* ───────────────────────────────── Shadows & Elevation ─────────────────────────── */
  shadows: {
    xs: "0 1px 2px rgba(0,0,0,0.05)",
    sm: "0 1px 3px rgba(0,0,0,0.1)",
    md: "0 4px 8px rgba(0,0,0,0.12)",
    lg: "0 8px 16px rgba(0,0,0,0.16)",
    xl: "0 12px 24px rgba(0,0,0,0.2)",
  },

  /* ───────────────────────────────── Z-indices ───────────────────────────────────── */
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1040,
    modal: 1060,
    popover: 1080,
    tooltip: 1100,
  },

  /* ───────────────────────────────── Transitions ─────────────────────────────────── */
  transition: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "600ms ease",
  },

  /* ───────────────────────────────── Component tokens (optional) ─────────────────── */
  buttons: {
    height: 40,
    paddingInline: 20,
    fontWeight: 600,
  },
  inputs: {
    height: 38,
    paddingInline: 12,
    border: "1px solid #C9CEC6",
    focusBorder: "1px solid #FF9B17",
  },
};
