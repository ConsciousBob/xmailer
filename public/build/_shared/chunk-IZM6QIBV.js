import {
  BarChart3,
  Home,
  List,
  LogOut,
  Mail,
  Send,
  Server,
  Settings,
  User,
  Users
} from "/build/_shared/chunk-R7IN2MRJ.js";
import {
  Button,
  Logo,
  cn
} from "/build/_shared/chunk-HKIG53IR.js";
import {
  Form,
  Link,
  useLocation
} from "/build/_shared/chunk-REUHJFUZ.js";
import {
  createHotContext
} from "/build/_shared/chunk-7ASVWI6M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-PMI65YMG.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/layout/sidebar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/sidebar.tsx"
  );
  import.meta.hot.lastModified = "1754586020264.7014";
}
var navigation = [{
  name: "Dashboard",
  href: "/dashboard",
  icon: Home
}, {
  name: "Subscribers",
  href: "/subscribers",
  icon: Users
}, {
  name: "Lists",
  href: "/lists",
  icon: List
}, {
  name: "Campaigns",
  href: "/campaigns",
  icon: Send
}, {
  name: "Analytics",
  href: "/analytics",
  icon: BarChart3
}, {
  name: "Settings",
  href: "/settings",
  icon: Settings
}];
var settingsNavigation = [{
  name: "General",
  href: "/settings",
  icon: Settings
}, {
  name: "SMTP Config",
  href: "/settings/smtp",
  icon: Server
}];
function Sidebar() {
  _s();
  const location = useLocation();
  const isSettingsPage = location.pathname.startsWith("/settings");
  const currentNavigation = isSettingsPage ? settingsNavigation : navigation;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-64 bg-gray-800 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center flex-shrink-0 px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-8 w-8 text-white" }, void 0, false, {
        fileName: "app/components/layout/sidebar.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-xl font-bold text-white", children: "xMailer" }, void 0, false, {
        fileName: "app/components/layout/sidebar.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/sidebar.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mt-8 flex-1 px-2 space-y-1", children: currentNavigation.map((item) => {
      const isActive = location.pathname === item.href;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: cn(isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "group flex items-center px-2 py-2 text-sm font-medium rounded-md"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: cn(isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300", "mr-3 flex-shrink-0 h-6 w-6"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/layout/sidebar.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        item.name
      ] }, item.name, true, {
        fileName: "app/components/layout/sidebar.tsx",
        lineNumber: 74,
        columnNumber: 20
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/layout/sidebar.tsx",
      lineNumber: 71,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/sidebar.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/layout/sidebar.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/sidebar.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Sidebar, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = Sidebar;
var _c;
$RefreshReg$(_c, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/header.tsx"
  );
  import.meta.hot.lastModified = "1754585347709.0376";
}
function Header({
  user,
  showLogo = false
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "bg-white border-b border-gray-200 px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      showLogo && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, { variant: "dark", size: "md" }, void 0, false, {
        fileName: "app/components/layout/header.tsx",
        lineNumber: 32,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900", children: "Email Autoresponder" }, void 0, false, {
        fileName: "app/components/layout/header.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/header.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
      user && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(User, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/layout/header.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: user.user_metadata?.full_name || user.email }, void 0, false, {
          fileName: "app/components/layout/header.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/header.tsx",
        lineNumber: 39,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LogOut, { className: "h-4 w-4 mr-2" }, void 0, false, {
          fileName: "app/components/layout/header.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        "Logout"
      ] }, void 0, true, {
        fileName: "app/components/layout/header.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layout/header.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/header.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/header.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/header.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Sidebar,
  Header
};
//# sourceMappingURL=/build/_shared/chunk-IZM6QIBV.js.map
