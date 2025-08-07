import {
  Header,
  Sidebar
} from "/build/_shared/chunk-IZM6QIBV.js";
import {
  require_auth
} from "/build/_shared/chunk-OW4LD7OY.js";
import {
  Bell,
  CreditCard,
  Server,
  Shield,
  User
} from "/build/_shared/chunk-R7IN2MRJ.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  require_node
} from "/build/_shared/chunk-TTBB6VK6.js";
import "/build/_shared/chunk-HKIG53IR.js";
import {
  Link,
  useLoaderData
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

// app/routes/settings._index.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020268.102";
}
function SettingsIndex() {
  _s();
  const {
    user
  } = useLoaderData();
  const settingsOptions = [{
    title: "SMTP Configuration",
    description: "Configure your email sending settings and SMTP servers",
    icon: Server,
    href: "/settings/smtp",
    color: "bg-blue-50 text-blue-600"
  }, {
    title: "Profile Settings",
    description: "Update your personal information and account details",
    icon: User,
    href: "/settings/profile",
    color: "bg-green-50 text-green-600"
  }, {
    title: "Notifications",
    description: "Manage your notification preferences and alerts",
    icon: Bell,
    href: "/settings/notifications",
    color: "bg-yellow-50 text-yellow-600"
  }, {
    title: "Security",
    description: "Password, two-factor authentication, and security settings",
    icon: Shield,
    href: "/settings/security",
    color: "bg-red-50 text-red-600"
  }, {
    title: "Billing",
    description: "Manage your subscription and billing information",
    icon: CreditCard,
    href: "/settings/billing",
    color: "bg-purple-50 text-purple-600"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/settings._index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/settings._index.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Settings" }, void 0, false, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Manage your account settings and preferences." }, void 0, false, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: settingsOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: option.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "hover:shadow-lg transition-shadow cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-lg ${option.color}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(option.icon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 94,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 93,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-lg", children: option.title }, void 0, false, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 97,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { className: "mt-1", children: option.description }, void 0, false, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 98,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 96,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 92,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 90,
          columnNumber: 19
        }, this) }, option.href, false, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 89,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Account Information" }, void 0, false, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 111,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Your current account details" }, void 0, false, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Email" }, void 0, false, {
                fileName: "app/routes/settings._index.tsx",
                lineNumber: 119,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: user.email }, void 0, false, {
                fileName: "app/routes/settings._index.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Account Created" }, void 0, false, {
                fileName: "app/routes/settings._index.tsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: new Date(user.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) }, void 0, false, {
                fileName: "app/routes/settings._index.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings._index.tsx",
              lineNumber: 122,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings._index.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings._index.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings._index.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings._index.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings._index.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings._index.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(SettingsIndex, "FpjQZylbefWQChk+MjGNfSb2jDo=", false, function() {
  return [useLoaderData];
});
_c = SettingsIndex;
var _c;
$RefreshReg$(_c, "SettingsIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SettingsIndex as default
};
//# sourceMappingURL=/build/routes/settings._index-MWCTCVK5.js.map
