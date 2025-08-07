import {
  Input
} from "/build/_shared/chunk-LPXYEXR5.js";
import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  ArrowLeft
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
  Link,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-REUHJFUZ.js";
import {
  createHotContext
} from "/build/_shared/chunk-7ASVWI6M.js";
import "/build/_shared/chunk-56LDNGDG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import "/build/_shared/chunk-2Q7FBYOG.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/forgot-password.tsx
var import_node = __toESM(require_node(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/forgot-password.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/forgot-password.tsx"
  );
  import.meta.hot.lastModified = "1754585347713.5664";
}
function ForgotPassword() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { variant: "dark", size: "lg" }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Reset Password" }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Enter your email address and we'll send you a link to reset your password." }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "email", name: "email", placeholder: "Email address", required: true, className: "w-full", defaultValue: actionData?.email || "" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 82,
          columnNumber: 35
        }, this),
        actionData?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600 text-sm text-center bg-green-50 p-3 rounded-md", children: actionData.message }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 86,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send Reset Link" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "inline-flex items-center text-blue-600 hover:text-blue-500 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-1" }, void 0, false, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        "Back to sign in"
      ] }, void 0, true, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(ForgotPassword, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = ForgotPassword;
var _c;
$RefreshReg$(_c, "ForgotPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ForgotPassword as default
};
//# sourceMappingURL=/build/routes/forgot-password-BJRGPRII.js.map
