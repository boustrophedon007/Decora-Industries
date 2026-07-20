/* @ds-bundle: {"format":4,"namespace":"DecoraIndustriesDesignSystem_e77a55","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Metric","sourcePath":"components/display/Metric.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SidebarItem","sourcePath":"components/navigation/SidebarItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b3bfe5e7dacc","components/actions/IconButton.jsx":"ae94aacec72a","components/display/Avatar.jsx":"fc5c87cea006","components/display/Badge.jsx":"6f6c6cb412c6","components/display/Card.jsx":"f901c24e4b72","components/display/Metric.jsx":"126de81fdbdd","components/display/Table.jsx":"5fdd62a0aa93","components/display/Tag.jsx":"47c9b2f8a35c","components/feedback/Alert.jsx":"2e856005a1fa","components/feedback/Progress.jsx":"4897ebce0868","components/feedback/Skeleton.jsx":"1476631001ca","components/feedback/Spinner.jsx":"7b588a12a60f","components/feedback/Toast.jsx":"814d27b5abbe","components/forms/Checkbox.jsx":"dc8ebba235f4","components/forms/Field.jsx":"04f5d52f26f0","components/forms/Input.jsx":"40026bd17f89","components/forms/Radio.jsx":"5562990c336d","components/forms/Select.jsx":"5ab8cb9c7bf5","components/forms/Switch.jsx":"d532d0f3d40d","components/forms/Textarea.jsx":"5900645843c2","components/navigation/Breadcrumb.jsx":"a63d9361a0dd","components/navigation/SidebarItem.jsx":"da2138a8bb54","components/navigation/Tabs.jsx":"59906293adf3","components/overlay/Dialog.jsx":"e281d6d7ed57","components/overlay/Tooltip.jsx":"f69fdbdda8c7","ui_kits/ops/Dashboard.jsx":"4237091bafd4","ui_kits/ops/RunDetail.jsx":"2283551294af","ui_kits/ops/WorkOrders.jsx":"6dd173d47a1a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DecoraIndustriesDesignSystem_e77a55 = window.DecoraIndustriesDesignSystem_e77a55 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const V = {
  primary: {
    bg: "var(--brand)",
    hover: "var(--brand-hover)",
    active: "var(--brand-active)",
    color: "var(--text-on-primary)",
    border: "1px solid transparent"
  },
  secondary: {
    bg: "var(--surface-1)",
    hover: "var(--surface-2)",
    active: "var(--surface-3)",
    color: "var(--ink)",
    border: "1px solid var(--border-default)"
  },
  ghost: {
    bg: "transparent",
    hover: "var(--surface-2)",
    active: "var(--surface-3)",
    color: "var(--text-body)",
    border: "1px solid transparent"
  },
  danger: {
    bg: "var(--error-600)",
    hover: "var(--error-700)",
    active: "var(--error-800)",
    color: "#fff",
    border: "1px solid transparent"
  },
  inverse: {
    bg: "var(--surface-inverse)",
    hover: "var(--neutral-800)",
    active: "var(--neutral-700)",
    color: "var(--text-on-inverse)",
    border: "1px solid transparent"
  }
};
const S = {
  sm: {
    h: "var(--control-sm)",
    pad: "0 12px",
    font: "var(--type-button-s)"
  },
  md: {
    h: "var(--control-md)",
    pad: "0 16px",
    font: "var(--type-button-m)"
  },
  lg: {
    h: "var(--control-lg)",
    pad: "0 20px",
    font: "var(--type-button-l)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon = null,
  children,
  onClick,
  style = {},
  ...rest
}) {
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  const [st, setSt] = useState("rest");
  const bg = disabled ? v.bg : st === "active" ? v.active : st === "hover" ? v.hover : v.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setSt("hover"),
    onMouseLeave: () => setSt("rest"),
    onMouseDown: () => setSt("active"),
    onMouseUp: () => setSt("hover"),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.h,
      padding: s.pad,
      font: s.font,
      letterSpacing: "var(--tracking-button)",
      color: v.color,
      background: bg,
      border: v.border,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--transition-fast),border-color var(--transition-fast)",
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  label,
  size = "md",
  variant = "ghost",
  disabled = false,
  children,
  onClick,
  style = {}
}) {
  const d = {
    sm: 28,
    md: 36,
    lg: 44
  }[size] || 36;
  const [h, setH] = useState(false);
  const vs = {
    ghost: {
      bg: h ? "var(--surface-3)" : "transparent",
      border: "1px solid transparent",
      color: "var(--text-body)"
    },
    outline: {
      bg: h ? "var(--surface-2)" : "var(--surface-1)",
      border: "1px solid var(--border-default)",
      color: "var(--ink)"
    },
    primary: {
      bg: h ? "var(--brand-hover)" : "var(--brand)",
      border: "1px solid transparent",
      color: "var(--text-on-primary)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flex: "none",
      background: vs.bg,
      border: vs.border,
      color: vs.color,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--transition-fast)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
const P = ["var(--secondary-600)", "var(--accent-700)", "var(--success-700)", "var(--info-700)", "var(--neutral-700)"];
function Avatar({
  name = "",
  src,
  size = 32,
  style = {}
}) {
  const initials = name.split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
  const bg = P[(name.charCodeAt(0) || 0) % P.length];
  return src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      objectFit: "cover",
      flex: "none",
      ...style
    }
  }) : /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      background: bg,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `600 ${Math.round(size * 0.38)}px/1 var(--font-display)`,
      flex: "none",
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: {
    bg: "var(--surface-2)",
    fg: "var(--text-body)",
    bd: "var(--border-default)"
  },
  brand: {
    bg: "var(--brand-subtle)",
    fg: "var(--brand-active)",
    bd: "var(--primary-200)"
  },
  success: {
    bg: "var(--success-bg)",
    fg: "var(--success)",
    bd: "var(--success-border)"
  },
  warning: {
    bg: "var(--warning-bg)",
    fg: "var(--warning)",
    bd: "var(--warning-border)"
  },
  error: {
    bg: "var(--error-bg)",
    fg: "var(--error)",
    bd: "var(--error-border)"
  },
  info: {
    bg: "var(--info-bg)",
    fg: "var(--info)",
    bd: "var(--info-border)"
  }
};
function Badge({
  tone = "neutral",
  dot = false,
  children,
  style = {}
}) {
  const t = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "3px 9px",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-full)",
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  title,
  subtitle,
  actions,
  padding = 20,
  hoverable = false,
  children,
  style = {}
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: "var(--surface-1)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: hoverable && h ? "var(--shadow-2)" : "var(--shadow-1)",
      transition: "box-shadow var(--transition-base)",
      overflow: "hidden",
      ...style
    }
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: `16px ${padding}px`,
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h5)",
      color: "var(--ink)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Metric.jsx
try { (() => {
function Metric({
  label,
  value,
  unit,
  delta,
  deltaTone = "neutral",
  style = {}
}) {
  const dc = {
    up: "var(--success)",
    down: "var(--error)",
    neutral: "var(--text-muted)"
  }[deltaTone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-metric)",
      letterSpacing: "var(--tracking-metric)",
      color: "var(--ink)",
      fontFeatureSettings: '"tnum" 1'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-s)",
      color: "var(--text-faint)",
      marginLeft: 6
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: dc
    }
  }, delta));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  dense = false,
  onRowClick,
  style = {}
}) {
  const pad = dense ? "8px 12px" : "11px 12px";
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      background: "var(--surface-1)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      font: "var(--type-table-header)",
      letterSpacing: "var(--tracking-table)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      background: "var(--surface-2)",
      borderBottom: "1px solid var(--border-default)",
      whiteSpace: "nowrap"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id || i,
    onClick: onRowClick ? () => onRowClick(r) : undefined,
    onMouseEnter: e => {
      if (onRowClick) e.currentTarget.style.background = "var(--surface-2)";
    },
    onMouseLeave: e => {
      if (onRowClick) e.currentTarget.style.background = "transparent";
    },
    style: {
      cursor: onRowClick ? "pointer" : "default",
      transition: "background var(--transition-fast)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      font: c.mono ? "var(--type-mono-data)" : "var(--type-table-cell)",
      color: "var(--text-body)",
      borderBottom: "1px solid var(--border-hairline)",
      fontFeatureSettings: '"tnum" 1'
    }
  }, c.render ? c.render(r) : r[c.key]))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  onRemove,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      background: "var(--surface-2)",
      color: "var(--text-body)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-label)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const I = {
  success: "M2.5 6.3L5 8.8 9.5 3.5",
  warning: "M6 2v4.5M6 9h.01",
  error: "M3 3l6 6M9 3l-6 6",
  info: "M6 5.5V9M6 3h.01"
};
const T = {
  success: {
    fg: "var(--success)",
    bg: "var(--success-bg)",
    bd: "var(--success-border)"
  },
  warning: {
    fg: "var(--warning)",
    bg: "var(--warning-bg)",
    bd: "var(--warning-border)"
  },
  error: {
    fg: "var(--error)",
    bg: "var(--error-bg)",
    bd: "var(--error-border)"
  },
  info: {
    fg: "var(--info)",
    bg: "var(--info-bg)",
    bd: "var(--info-border)"
  }
};
function Alert({
  tone = "info",
  title,
  action,
  onDismiss,
  children,
  style = {}
}) {
  const t = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      padding: "12px 14px",
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      flex: "none",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "5.4",
    stroke: `${tone === "warning" || tone === "info" ? "currentColor" : "none"}`,
    style: {
      stroke: t.fg,
      fill: "none"
    },
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: I[tone],
    stroke: t.fg,
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h5)",
      color: "var(--ink)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-s)",
      color: "var(--text-body)"
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  tone = "brand",
  label,
  showValue = false,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    brand: "var(--brand)",
    success: "var(--success-500)",
    warning: "var(--warning-500)",
    error: "var(--error-500)",
    neutral: "var(--secondary-500)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono-data)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemax": max,
    style: {
      height: 6,
      background: "var(--surface-3)",
      borderRadius: "var(--radius-xs)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: fill,
      borderRadius: "var(--radius-xs)",
      transition: "width var(--duration-300) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = "100%",
  height = 14,
  radius = "var(--radius-sm)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width,
      height,
      borderRadius: radius,
      background: "linear-gradient(90deg,var(--surface-3) 25%,var(--surface-2) 45%,var(--surface-3) 65%)",
      backgroundSize: "200% 100%",
      animation: "dec-skeleton 1.4s ease-in-out infinite",
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes dec-skeleton{0%{background-position:180% 0}100%{background-position:-20% 0}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 18,
  color = "var(--brand)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      border: `2px solid var(--surface-3)`,
      borderTopColor: color,
      borderRadius: "50%",
      animation: "dec-spin .7s linear infinite",
      ...style
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes dec-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "neutral",
  title,
  description,
  action,
  onDismiss,
  style = {}
}) {
  const dot = {
    neutral: "var(--text-faint)",
    success: "var(--success-400)",
    error: "var(--error-400)",
    warning: "var(--warning-400)",
    info: "var(--info-400)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: 360,
      padding: "12px 14px",
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: dot,
      flex: "none",
      marginTop: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h5)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-s)",
      opacity: .72,
      marginTop: 2
    }
  }, description)), action, onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 2,
      color: "inherit",
      opacity: .6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      font: "var(--type-label)",
      color: "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    role: "checkbox",
    "aria-checked": indeterminate ? "mixed" : checked,
    tabIndex: disabled ? -1 : 0,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        !disabled && onChange && onChange(!checked);
      }
    },
    style: {
      width: 18,
      height: 18,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: `1.5px solid ${checked || indeterminate ? "var(--brand)" : "var(--border-strong)"}`,
      background: checked || indeterminate ? "var(--brand)" : "var(--surface-1)",
      transition: "all var(--transition-fast)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      background: "#fff"
    }
  }) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5.8L4.4 8L9 3",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), label && /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked)
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      color: "var(--ink)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--error-600)"
    }
  }, " *")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-faint)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  prefix = null,
  suffix = null,
  style = {},
  ...rest
}) {
  const [f, setF] = useState(false);
  const h = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const bc = invalid ? "var(--error-600)" : f ? "var(--ink)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--surface-2)" : "var(--surface-1)",
      border: `${f || invalid ? "1.5px" : "1px"} solid ${bc}`,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-inset)",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "border-color var(--transition-fast)",
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body-m)",
      color: "var(--ink)"
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "flex",
      font: "var(--type-mono-data)"
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  onChange,
  name,
  disabled = false,
  direction = "column",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "column" ? 10 : 20,
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const sel = opt.value === value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? "var(--opacity-disabled)" : 1,
        font: "var(--type-label)",
        color: "var(--ink)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": sel,
      tabIndex: disabled ? -1 : 0,
      onClick: () => !disabled && onChange && onChange(opt.value),
      onKeyDown: e => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          !disabled && onChange && onChange(opt.value);
        }
      },
      style: {
        width: 18,
        height: 18,
        flex: "none",
        borderRadius: "var(--radius-full)",
        border: `1.5px solid ${sel ? "var(--brand)" : "var(--border-strong)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface-1)",
        transition: "all var(--transition-fast)"
      }
    }, sel && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 99,
        background: "var(--brand)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      onClick: () => !disabled && onChange && onChange(opt.value)
    }, opt.label));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  options = [],
  size = "md",
  invalid = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [f, setF] = useState(false);
  const h = {
    sm: "var(--control-sm)",
    md: "var(--control-md)",
    lg: "var(--control-lg)"
  }[size];
  const bc = invalid ? "var(--error-600)" : f ? "var(--ink)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: style.width || "auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      padding: "0 34px 0 12px",
      background: disabled ? "var(--surface-2)" : "var(--surface-1)",
      border: `${f || invalid ? "1.5px" : "1px"} solid ${bc}`,
      borderRadius: "var(--radius-md)",
      font: "var(--type-body-m)",
      color: "var(--ink)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color var(--transition-fast)"
    }
  }), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    },
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.5L6 8l3.5-3.5",
    stroke: "var(--text-muted)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      font: "var(--type-label)",
      color: "var(--ink)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        !disabled && onChange && onChange(!checked);
      }
    },
    style: {
      width: 36,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--brand)" : "var(--neutral-300)",
      position: "relative",
      transition: "background var(--transition-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: 99,
      background: "#fff",
      boxShadow: "var(--shadow-1)",
      transition: "left var(--duration-200) var(--spring-snappy)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [f, setF] = useState(false);
  const bc = invalid ? "var(--error-600)" : f ? "var(--ink)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      width: "100%",
      padding: "10px 12px",
      background: disabled ? "var(--surface-2)" : "var(--surface-1)",
      border: `${f || invalid ? "1.5px" : "1px"} solid ${bc}`,
      borderRadius: "var(--radius-md)",
      font: "var(--type-body-m)",
      color: "var(--ink)",
      outline: "none",
      resize: "vertical",
      boxShadow: "var(--shadow-inset)",
      transition: "border-color var(--transition-fast)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "var(--type-body-s)",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--ink)",
        fontWeight: 500
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      onClick: it.onClick,
      style: {
        color: "var(--text-muted)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "10",
      height: "10",
      viewBox: "0 0 10 10",
      style: {
        color: "var(--text-faint)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3.5 1.5L7 5l-3.5 3.5",
      stroke: "currentColor",
      strokeWidth: "1.3",
      fill: "none",
      strokeLinecap: "round"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarItem.jsx
try { (() => {
const {
  useState
} = React;
function SidebarItem({
  icon,
  label,
  active = false,
  count,
  onClick,
  style = {}
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-current": active ? "page" : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 10px",
      background: active ? "var(--surface-3)" : h ? "var(--surface-2)" : "transparent",
      border: "none",
      borderRadius: "var(--radius-md)",
      font: "var(--type-nav)",
      fontWeight: active ? 600 : 500,
      color: active ? "var(--ink)" : "var(--text-body)",
      cursor: "pointer",
      textAlign: "left",
      transition: "background var(--transition-fast)",
      boxShadow: active ? "inset 2px 0 0 var(--brand)" : "none",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: active ? "var(--brand)" : "var(--text-muted)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      color: "var(--text-muted)",
      background: "var(--surface-2)",
      padding: "1px 7px",
      borderRadius: "var(--radius-full)"
    }
  }, count));
}
Object.assign(__ds_scope, { SidebarItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      value: t,
      label: t
    } : t;
    const sel = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": sel,
      onClick: () => onChange && onChange(tab.value),
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.color = "var(--ink)";
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.color = "var(--text-muted)";
      },
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 14px",
        marginBottom: -1,
        background: "transparent",
        border: "none",
        borderBottom: `2px solid ${sel ? "var(--brand)" : "transparent"}`,
        font: "var(--type-nav)",
        fontWeight: sel ? 600 : 500,
        color: sel ? "var(--ink)" : "var(--text-muted)",
        cursor: "pointer",
        transition: "color var(--transition-fast),border-color var(--transition-fast)"
      }
    }, tab.label, tab.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--type-overline)",
        letterSpacing: "var(--tracking-overline)",
        background: sel ? "var(--brand-subtle)" : "var(--surface-2)",
        color: sel ? "var(--brand-active)" : "var(--text-muted)",
        padding: "1px 7px",
        borderRadius: "var(--radius-full)"
      }
    }, tab.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  footer,
  onClose,
  width = 440,
  children,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-1)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-4)",
      border: "1px solid var(--border-hairline)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 0",
      display: "flex",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-h3)",
      color: "var(--ink)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-s)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 4,
      height: 28,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 10 10"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px 20px"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "14px 24px",
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-2)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  side = "top",
  children,
  style = {}
}) {
  const [v, setV] = useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setV(true),
    onMouseLeave: () => setV(false),
    onFocus: () => setV(true),
    onBlur: () => setV(false)
  }, children, v && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      background: "var(--surface-inverse)",
      color: "var(--text-on-inverse)",
      font: "var(--type-caption)",
      padding: "5px 9px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      zIndex: 200,
      boxShadow: "var(--shadow-2)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/Dashboard.jsx
try { (() => {
const DS = window.DecoraIndustriesDesignSystem_e77a55;
const {
  Card,
  Metric,
  Badge,
  Progress,
  Alert,
  Table
} = DS;
function OpsDashboard({
  openOrder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Kiln 2 above tolerance",
    action: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        font: "var(--type-body-s)"
      }
    }, "View station")
  }, "Temperature 4\xB0C over spec for 12 minutes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Units / shift",
    value: "1,284",
    delta: "+3.1% vs plan",
    deltaTone: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Metric, {
    label: "First-pass yield",
    value: "99.2",
    unit: "%",
    delta: "+0.4 vs last shift",
    deltaTone: "up"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Open work orders",
    value: "14",
    delta: "2 on hold",
    deltaTone: "neutral"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Downtime",
    value: "18",
    unit: "min",
    delta: "\u221212 vs yesterday",
    deltaTone: "up"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Line status",
    subtitle: "Live \xB7 updated 20s ago",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "All systems")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [["Line 1 · Casegoods", 84, "success", "Running"], ["Line 2 · Seating", 62, "success", "Running"], ["Line 3 · Finishing", 31, "warning", "Hold"], ["Line 4 · Assembly", 0, "neutral", "Idle"]].map(([n, v, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 170,
      font: "var(--type-label)",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement(Progress, {
    value: v,
    tone: t === "warning" ? "warning" : v ? "brand" : "neutral",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      textAlign: "right",
      font: "var(--type-mono-data)",
      color: "var(--text-muted)"
    }
  }, v, "%"), /*#__PURE__*/React.createElement(Badge, {
    tone: t,
    dot: s === "Running"
  }, s))))), /*#__PURE__*/React.createElement(Card, {
    title: "Shift log",
    subtitle: "Shift B \xB7 14:00\u201322:00"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, [["16:42", "QA pass — lot 4471", "success"], ["16:10", "Kiln 2 temp warning", "warning"], ["15:31", "Changeover · Line 4", "neutral"], ["14:07", "Shift B clock-in (23)", "neutral"]].map(([t, m, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      padding: "9px 0",
      borderBottom: i < 3 ? "1px solid var(--border-hairline)" : "none",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono-data)",
      color: "var(--text-faint)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-s)",
      color: tone === "warning" ? "var(--warning)" : tone === "success" ? "var(--success)" : "var(--text-body)"
    }
  }, m)))))));
}
window.OpsDashboard = OpsDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/RunDetail.jsx
try { (() => {
const DS = window.DecoraIndustriesDesignSystem_e77a55;
const {
  Card,
  Badge,
  Breadcrumb,
  Button,
  Metric,
  Progress,
  Avatar,
  Dialog,
  Field,
  Textarea,
  Switch
} = DS;
function OpsRunDetail({
  order,
  back
}) {
  const o = order || window.OpsWO[0];
  const [stop, setStop] = React.useState(false);
  const [auto, setAuto] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Work orders",
      onClick: e => {
        e.preventDefault();
        back();
      }
    }, {
      label: o.id
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--type-h1)",
      letterSpacing: "var(--tracking-h1)"
    }
  }, o.item), /*#__PURE__*/React.createElement(Badge, {
    tone: o.tone,
    dot: o.status === "Running"
  }, o.status), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Print traveler"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: () => setStop(true)
  }, "Stop line")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      font: "var(--type-mono-data)",
      color: "var(--text-muted)",
      textTransform: "uppercase",
      borderTop: "1px solid var(--border-hairline)",
      borderBottom: "1px solid var(--border-hairline)",
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("span", null, "ORDER ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, o.id)), /*#__PURE__*/React.createElement("span", null, "LINE ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, o.line)), /*#__PURE__*/React.createElement("span", null, "QTY ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, o.qty)), /*#__PURE__*/React.createElement("span", null, "DUE ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, o.due)), /*#__PURE__*/React.createElement("span", null, "TOLERANCE ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--ink)"
    }
  }, "\xB10.2MM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Progress",
    subtitle: "Station throughput, this run"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Complete",
    value: o.done + "%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Good units",
    value: Math.round(o.qty * o.done / 100)
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Rejects",
    value: "4",
    delta: "1.2% of run",
    deltaTone: "down"
  })), /*#__PURE__*/React.createElement(Progress, {
    value: o.done,
    showValue: true,
    label: "Overall"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 16
    }
  }, [["CNC mill", 100], ["Sanding", 88], ["Finishing", 41], ["QA + pack", 12]].map(([s, v]) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 90,
      font: "var(--type-label)"
    }
  }, s), /*#__PURE__*/React.createElement(Progress, {
    value: v,
    style: {
      flex: 1
    },
    tone: v === 100 ? "success" : "brand"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      textAlign: "right",
      font: "var(--type-mono-data)",
      color: "var(--text-muted)"
    }
  }, v, "%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Crew"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["Mara Ellis", "Shift lead"], ["Deniz Aksoy", "CNC operator"], ["Ruth Okafor", "QA"]].map(([n, r]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-label)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-caption)",
      color: "var(--text-muted)"
    }
  }, r)))))), /*#__PURE__*/React.createElement(Card, {
    title: "Controls"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: "Auto-hold on defect"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Station notes"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "Observations\u2026"
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: stop,
    title: "Stop Line 2?",
    description: "The current batch will hold at station 4.",
    onClose: () => setStop(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setStop(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => setStop(false)
    }, "Stop line"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-s)"
    }
  }, "4 operators will be notified. Restart requires shift-lead approval.")));
}
window.OpsRunDetail = OpsRunDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/RunDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops/WorkOrders.jsx
try { (() => {
const DS = window.DecoraIndustriesDesignSystem_e77a55;
const {
  Card,
  Table,
  Badge,
  Tabs,
  Input,
  Select,
  Button,
  Tag
} = DS;
const WO = [{
  id: "WO-4471",
  item: "Arris chair · walnut / oiled",
  line: "Line 2",
  qty: 320,
  done: 62,
  due: "Jul 22",
  status: "Running",
  tone: "success"
}, {
  id: "WO-4468",
  item: "Ledger table · oak / lacquered",
  line: "Line 1",
  qty: 140,
  done: 84,
  due: "Jul 21",
  status: "Running",
  tone: "success"
}, {
  id: "WO-4465",
  item: "Datum shelving · ash / raw",
  line: "Line 3",
  qty: 96,
  done: 31,
  due: "Jul 24",
  status: "Hold",
  tone: "warning"
}, {
  id: "WO-4462",
  item: "Arris barstool · walnut / oiled",
  line: "—",
  qty: 220,
  done: 0,
  due: "Jul 28",
  status: "Queued",
  tone: "neutral"
}, {
  id: "WO-4459",
  item: "Plinth credenza · smoked oak",
  line: "Line 1",
  qty: 60,
  done: 100,
  due: "Jul 19",
  status: "Complete",
  tone: "info"
}];
function OpsWorkOrders({
  openOrder
}) {
  const [tab, setTab] = React.useState("open");
  const rows = tab === "open" ? WO.filter(r => r.status !== "Complete") : tab === "hold" ? WO.filter(r => r.status === "Hold") : WO.filter(r => r.status === "Complete");
  const cols = [{
    key: "id",
    label: "Order",
    mono: true
  }, {
    key: "item",
    label: "Item"
  }, {
    key: "line",
    label: "Line"
  }, {
    key: "qty",
    label: "Qty",
    align: "right"
  }, {
    key: "done",
    label: "Done",
    align: "right",
    render: r => r.done + "%"
  }, {
    key: "due",
    label: "Due",
    mono: true
  }, {
    key: "status",
    label: "Status",
    render: r => /*#__PURE__*/React.createElement(Badge, {
      tone: r.tone,
      dot: r.status === "Running"
    }, r.status)
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search orders, SKUs\u2026",
    style: {
      width: 280
    },
    prefix: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "4.4",
      stroke: "currentColor",
      strokeWidth: "1.4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 9.5L13 13",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round"
    }))
  }), /*#__PURE__*/React.createElement(Select, {
    options: ["All lines", "Line 1", "Line 2", "Line 3", "Line 4"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Walnut"), /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Due this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, null, "New work order")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "open",
      label: "Open",
      count: 4
    }, {
      value: "hold",
      label: "On hold",
      count: 1
    }, {
      value: "done",
      label: "Completed"
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(Table, {
    columns: cols,
    rows: rows,
    onRowClick: r => openOrder(r)
  })));
}
window.OpsWorkOrders = OpsWorkOrders;
window.OpsWO = WO;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops/WorkOrders.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SidebarItem = __ds_scope.SidebarItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
