import {
  Input
} from "/build/_shared/chunk-LPXYEXR5.js";
import {
  Header,
  Sidebar
} from "/build/_shared/chunk-IZM6QIBV.js";
import {
  require_supabase
} from "/build/_shared/chunk-VJTYKX3A.js";
import {
  require_auth
} from "/build/_shared/chunk-OW4LD7OY.js";
import {
  CircleCheckBig,
  CircleX,
  Plus,
  Server,
  Settings,
  Trash2
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
  Button
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
import "/build/_shared/chunk-2Q7FBYOG.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/smtp._index.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/smtp._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/smtp._index.tsx"
  );
  import.meta.hot.lastModified = "1754585347715.108";
}
var commonSMTPProviders = [{
  name: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  instructions: "Use your Gmail address and App Password (not regular password)"
}, {
  name: "Outlook/Hotmail",
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: true,
  instructions: "Use your Outlook email and password"
}, {
  name: "Yahoo Mail",
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: true,
  instructions: "Use your Yahoo email and App Password"
}, {
  name: "Custom SMTP",
  host: "mail.yourdomain.com",
  port: 587,
  secure: true,
  instructions: "Contact your hosting provider for SMTP details"
}];
function SMTPConfigs() {
  _s();
  const {
    user,
    smtpConfigs,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/smtp._index.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/smtp._index.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "SMTP Configuration" }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Configure your SMTP servers to send emails through your own mail servers." }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 216,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 215,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 214,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Popular SMTP Providers" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 223,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Quick setup guides for common email providers" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: commonSMTPProviders.map((provider, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: provider.name }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 231,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600 space-y-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Host:" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 233,
                  columnNumber: 28
                }, this),
                " ",
                provider.host
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 233,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Port:" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 234,
                  columnNumber: 28
                }, this),
                " ",
                provider.port
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 234,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Security:" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 235,
                  columnNumber: 28
                }, this),
                " ",
                provider.secure ? "SSL/TLS" : "None"
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 235,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs mt-2 text-blue-600", children: provider.instructions }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 236,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 232,
              columnNumber: 23
            }, this)
          ] }, index, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 230,
            columnNumber: 65
          }, this)) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 228,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 221,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              "Add SMTP Configuration"
            ] }, void 0, true, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Connect your SMTP server to send emails" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "create" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuration Name *" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 260,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", placeholder: "e.g., Gmail SMTP", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 263,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "A friendly name to identify this configuration" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 264,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 259,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "SMTP Host *" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 270,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "host", placeholder: "e.g., smtp.gmail.com", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 273,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "Your SMTP server hostname" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 274,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 269,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Port *" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 280,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "port", type: "number", placeholder: "587", min: "1", max: "65535", defaultValue: "587", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 283,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "Common ports: 587 (TLS), 465 (SSL), 25 (unsecured)" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 284,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 279,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Username *" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 290,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "username", placeholder: "your-email@gmail.com", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 293,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "Usually your email address" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 294,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 289,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Password *" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 300,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "password", type: "password", placeholder: "Your password or app password", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 303,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "For Gmail, use an App Password instead of your regular password" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 304,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 299,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "secure", id: "secure", defaultChecked: true, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 311,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "secure", className: "ml-2 text-sm text-gray-700", children: "Use SSL/TLS encryption (recommended)" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 312,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 310,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 309,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 258,
              columnNumber: 19
            }, this),
            actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 319,
              columnNumber: 41
            }, this),
            actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600 text-sm bg-green-50 p-3 rounded-md", children: actionData.success }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 323,
              columnNumber: 43
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, className: "w-full md:w-auto", children: isSubmitting ? "Adding..." : "Add SMTP Configuration" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 327,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 255,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Settings, { className: "h-5 w-5 mr-2" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, this),
            "Your SMTP Configurations"
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 336,
            columnNumber: 15
          }, this),
          smtpConfigs.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "text-center py-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Server, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 343,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No SMTP configurations yet" }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 344,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Add your first SMTP configuration above to start sending emails." }, void 0, false, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 347,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 342,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 341,
            columnNumber: 43
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: smtpConfigs.map((config) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "hover:shadow-md transition-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-3 rounded-lg ${config.is_active ? "bg-green-50" : "bg-gray-50"}`, children: config.is_active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "h-6 w-6 text-green-600" }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 357,
                columnNumber: 51
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleX, { className: "h-6 w-6 text-gray-400" }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 357,
                columnNumber: 104
              }, this) }, void 0, false, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 356,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-gray-900 text-lg", children: config.name }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 361,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 space-y-1 text-sm text-gray-600", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Host:" }, void 0, false, {
                      fileName: "app/routes/smtp._index.tsx",
                      lineNumber: 365,
                      columnNumber: 36
                    }, this),
                    " ",
                    config.host,
                    ":",
                    config.port
                  ] }, void 0, true, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 365,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Username:" }, void 0, false, {
                      fileName: "app/routes/smtp._index.tsx",
                      lineNumber: 366,
                      columnNumber: 36
                    }, this),
                    " ",
                    config.username
                  ] }, void 0, true, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 366,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Security:" }, void 0, false, {
                      fileName: "app/routes/smtp._index.tsx",
                      lineNumber: 367,
                      columnNumber: 36
                    }, this),
                    " ",
                    config.secure ? "SSL/TLS Enabled" : "No Encryption"
                  ] }, void 0, true, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 367,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Created:" }, void 0, false, {
                      fileName: "app/routes/smtp._index.tsx",
                      lineNumber: 368,
                      columnNumber: 36
                    }, this),
                    " ",
                    new Date(config.created_at).toLocaleDateString()
                  ] }, void 0, true, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 368,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 364,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-3 space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 text-xs font-medium rounded-full ${config.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: config.is_active ? "Active" : "Inactive" }, void 0, false, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 372,
                    columnNumber: 33
                  }, this),
                  config.secure && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800", children: "Encrypted" }, void 0, false, {
                    fileName: "app/routes/smtp._index.tsx",
                    lineNumber: 376,
                    columnNumber: 51
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 371,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 360,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 355,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "toggle" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 385,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "configId", value: config.id }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 386,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "isActive", value: config.is_active }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 387,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", disabled: isSubmitting, children: config.is_active ? "Deactivate" : "Activate" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 388,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 384,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 394,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "configId", value: config.id }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 395,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700 hover:border-red-300", disabled: isSubmitting, onClick: (e) => {
                  if (!confirm("Are you sure you want to delete this SMTP configuration?")) {
                    e.preventDefault();
                  }
                }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 401,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/smtp._index.tsx",
                  lineNumber: 396,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/smtp._index.tsx",
                lineNumber: 393,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/smtp._index.tsx",
              lineNumber: 383,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 354,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 353,
            columnNumber: 23
          }, this) }, config.id, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 352,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/smtp._index.tsx",
            lineNumber: 351,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/smtp._index.tsx",
          lineNumber: 335,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/smtp._index.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/smtp._index.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/smtp._index.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/smtp._index.tsx",
    lineNumber: 199,
    columnNumber: 10
  }, this);
}
_s(SMTPConfigs, "0V1nNkBbX+i4Qo+9LzkL7aigntM=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = SMTPConfigs;
var _c;
$RefreshReg$(_c, "SMTPConfigs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SMTPConfigs as default
};
//# sourceMappingURL=/build/routes/smtp._index-5PZJXPH6.js.map
