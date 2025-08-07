import {
  cn
} from "/build/_shared/chunk-HKIG53IR.js";
import {
  createHotContext
} from "/build/_shared/chunk-7ASVWI6M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  require_react
} from "/build/_shared/chunk-2Q7FBYOG.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/ui/card.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ui/card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ui/card.tsx"
  );
  import.meta.hot.lastModified = "1754585347709.4375";
}
var Card = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 38,
  columnNumber: 12
}, this));
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { ref, className: cn("text-sm text-muted-foreground", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 44,
  columnNumber: 12
}, this));
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 50,
  columnNumber: 12
}, this));
_c0 = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(_c1 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 56,
  columnNumber: 12
}, this));
_c10 = CardFooter;
CardFooter.displayName = "CardFooter";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c0;
var _c1;
var _c10;
$RefreshReg$(_c, "Card$React.forwardRef");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c0, "CardContent");
$RefreshReg$(_c1, "CardFooter$React.forwardRef");
$RefreshReg$(_c10, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
};
//# sourceMappingURL=/build/_shared/chunk-TTBB6VK6.js.map
