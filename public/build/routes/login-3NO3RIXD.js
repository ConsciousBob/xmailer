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
  useLoaderData,
  useNavigation
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

// app/routes/login.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1754585347714.315";
}
function Login() {
  _s();
  const [isSignUp, setIsSignUp] = (0, import_react.useState)(false);
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const actionData = useActionData();
  const {
    env
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      window.ENV = env;
    }
  }, [env]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { variant: "dark", size: "lg" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: isSignUp ? "Create Account" : "Welcome Back" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: isSignUp ? "Sign up to start sending bulk emails" : "Sign in to your email autoresponder account" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 183,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "email", name: "email", placeholder: "Email address", required: true, className: "w-full", defaultValue: actionData?.email || "" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: showPassword ? "text" : "password", name: "password", placeholder: "Password", required: true, className: "w-full pr-10", minLength: 6 }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 202,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 204,
            columnNumber: 33
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 204,
            columnNumber: 66
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 203,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 208,
          columnNumber: 35
        }, this),
        actionData?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600 text-sm text-center bg-green-50 p-3 rounded-md", children: [
          actionData.message,
          actionData.showResend && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: "resend", variant: "outline", size: "sm", disabled: isSubmitting, children: "Resend verification email" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 215,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 214,
            columnNumber: 43
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 212,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: isSignUp ? "signup" : "login", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Processing..." : isSignUp ? "Create Account" : "Sign In" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setIsSignUp(!isSignUp), className: "text-blue-600 hover:text-blue-500 text-sm", children: isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this),
      !isSignUp && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/forgot-password", className: "text-sm text-gray-600 hover:text-gray-800", children: "Forgot your password?" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 233,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 232,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 182,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 181,
    columnNumber: 10
  }, this);
}
_s(Login, "2EriMoCM/L+fsIXPUXZyKlal6P8=", false, function() {
  return [useActionData, useLoaderData, useNavigation];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-3NO3RIXD.js.map
