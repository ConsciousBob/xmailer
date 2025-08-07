import {
  Input
} from "/build/_shared/chunk-LPXYEXR5.js";
import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_auth
} from "/build/_shared/chunk-OW4LD7OY.js";
import {
  Eye,
  EyeOff
} from "/build/_shared/chunk-R7IN2MRJ.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  require_node
} from "/build/_shared/chunk-TTBB6VK6.js";
import {
  Button,
  Logo
} from "/build/_shared/chunk-HKIG53IR.js";
import {
  Form,
  useActionData,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-REUHJFUZ.js";
import {
  createHotContext
} from "/build/_shared/chunk-7ASVWI6M.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  require_react
} from "/build/_shared/chunk-2Q7FBYOG.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/reset-password.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/reset-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/reset-password.tsx"
  );
  import.meta.hot.lastModified = "1754585347714.824";
}
function ResetPassword() {
  _s();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const [showConfirmPassword, setShowConfirmPassword] = (0, import_react.useState)(false);
  const actionData = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isSubmitting = navigation.state === "submitting";
  const code = searchParams.get("code");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { variant: "dark", size: "lg" }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Set New Password" }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Enter your new password below." }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/reset-password.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "code", value: code || "" }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: showPassword ? "text" : "password", name: "password", placeholder: "New password", required: true, className: "w-full pr-10", minLength: 6 }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 132,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 132,
          columnNumber: 66
        }, this) }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: showConfirmPassword ? "text" : "password", name: "confirmPassword", placeholder: "Confirm new password", required: true, className: "w-full pr-10", minLength: 6 }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowConfirmPassword(!showConfirmPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: showConfirmPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 139,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 139,
          columnNumber: 73
        }, this) }, void 0, false, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 143,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Updating..." : "Update Password" }, void 0, false, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/reset-password.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/reset-password.tsx",
      lineNumber: 125,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/reset-password.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/reset-password.tsx",
    lineNumber: 113,
    columnNumber: 10
  }, this);
}
_s(ResetPassword, "hOZAMYmjgF2uqYBDAzKSvigAnG0=", false, function() {
  return [useActionData, useNavigation, useSearchParams];
});
_c = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ResetPassword as default
};
//# sourceMappingURL=/build/routes/reset-password-PHVB5GDQ.js.map
