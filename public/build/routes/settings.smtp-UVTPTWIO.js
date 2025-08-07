import {
  require_email
} from "/build/_shared/chunk-URQB4GZA.js";
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
  ArrowLeft,
  CircleAlert,
  CircleCheckBig,
  Mail,
  Plus,
  Save,
  Server,
  SquarePen,
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
  Link,
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

// app/routes/settings.smtp.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_email = __toESM(require_email(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings.smtp.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings.smtp.tsx"
  );
  import.meta.hot.lastModified = "1754586020268.2432";
}
function SMTPSettings() {
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
      fileName: "app/routes/settings.smtp.tsx",
      lineNumber: 285,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/settings.smtp.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 296,
              columnNumber: 21
            }, this),
            "Back to Settings"
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 294,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "SMTP Configuration" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 301,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Configure your email sending settings and SMTP servers." }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 302,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 300,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 293,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 292,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-5 w-5 text-red-600 mr-2" }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 311,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 310,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 309,
          columnNumber: 23
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-5 w-5 text-red-600 mr-2" }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 318,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: actionData.error }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 319,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 317,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 316,
          columnNumber: 35
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-green-200 bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "h-5 w-5 text-green-600 mr-2" }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 325,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-800", children: actionData.success }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 326,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 324,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 323,
          columnNumber: 37
        }, this),
        smtpConfigs.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
              "Existing SMTP Configurations (",
              smtpConfigs.length,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 333,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Manage your existing SMTP server configurations" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 332,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: smtpConfigs.map((config) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Server, { className: "h-5 w-5 text-gray-400" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 344,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-900 flex items-center", children: [
                    config.name,
                    config.is_default && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full", children: "Default" }, void 0, false, {
                      fileName: "app/routes/settings.smtp.tsx",
                      lineNumber: 348,
                      columnNumber: 57
                    }, this),
                    !config.is_active && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full", children: "Inactive" }, void 0, false, {
                      fileName: "app/routes/settings.smtp.tsx",
                      lineNumber: 351,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 346,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
                    config.host,
                    ":",
                    config.port,
                    " \u2022 ",
                    config.from_email
                  ] }, void 0, true, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 355,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 345,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 343,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Host:" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 363,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: config.host }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 364,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 362,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Port:" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 367,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: config.port }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 368,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 366,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Username:" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 371,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: config.username }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 372,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 370,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Security:" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 375,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: config.use_ssl ? "SSL" : config.use_tls ? "TLS" : "None" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 376,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 374,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 361,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 p-3 bg-gray-50 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "test" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 385,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "configId", value: config.id }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 386,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "testEmail", type: "email", placeholder: "Enter your email to receive test message", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 388,
                  columnNumber: 35
                }, this) }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 387,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", disabled: isSubmitting, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-4 w-4 mr-1" }, void 0, false, {
                    fileName: "app/routes/settings.smtp.tsx",
                    lineNumber: 391,
                    columnNumber: 35
                  }, this),
                  isSubmitting ? "Sending..." : "Send Test"
                ] }, void 0, true, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 390,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 384,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 383,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 342,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2 ml-4", children: [
              !config.is_default && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "setDefault" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 400,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "configId", value: config.id }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 401,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", type: "submit", children: "Set Default" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 402,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 399,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquarePen, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 408,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 407,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 412,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "configId", value: config.id }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 413,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", type: "submit", className: "text-red-600 hover:text-red-700", onClick: (e) => {
                  if (!confirm("Are you sure you want to delete this SMTP configuration?")) {
                    e.preventDefault();
                  }
                }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 419,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 414,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 411,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 398,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 341,
            columnNumber: 25
          }, this) }, config.id, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 340,
            columnNumber: 48
          }, this)) }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 339,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 338,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 331,
          columnNumber: 40
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 433,
                columnNumber: 19
              }, this),
              "Add New SMTP Configuration"
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 432,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Configure a new SMTP server for sending emails" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 436,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 431,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "create" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 442,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuration Name *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 446,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", placeholder: "e.g., Gmail SMTP, SendGrid", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 449,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 445,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "SMTP Host *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 453,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "host", placeholder: "e.g., smtp.gmail.com", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 456,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 452,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 444,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Port *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 462,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "port", type: "number", placeholder: "587", min: "1", max: "65535", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 465,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 461,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Username *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 469,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "username", placeholder: "your-email@example.com", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 472,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 468,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 460,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Password *" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 477,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "password", type: "password", placeholder: "Your SMTP password or app password", required: true, className: "w-full" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 480,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 476,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "From Email *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 485,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "fromEmail", type: "email", placeholder: "noreply@yourdomain.com", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 488,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 484,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "From Name *" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 492,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "fromName", placeholder: "Your Company Name", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 495,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 491,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 483,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "useTls", name: "useTls", className: "rounded border-gray-300" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 501,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "useTls", className: "text-sm text-gray-700", children: "Use TLS (recommended for port 587)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 502,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 500,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "useSsl", name: "useSsl", className: "rounded border-gray-300" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 508,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "useSsl", className: "text-sm text-gray-700", children: "Use SSL (recommended for port 465)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 509,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 507,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "isDefault", name: "isDefault", defaultChecked: smtpConfigs.length === 0, className: "rounded border-gray-300" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 515,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "isDefault", className: "text-sm text-gray-700", children: "Set as default SMTP configuration" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 516,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 514,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 499,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 524,
                columnNumber: 23
              }, this),
              isSubmitting ? "Saving Configuration..." : "Save SMTP Configuration"
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 523,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 522,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 441,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 440,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 430,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Common SMTP Settings" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 535,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Popular email service provider configurations" }, void 0, false, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 536,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 534,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "Gmail" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 543,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Host: smtp.gmail.com" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 545,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Port: 587 (TLS) or 465 (SSL)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 546,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Use app password, not regular password" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 547,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 544,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 542,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "SendGrid" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 552,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Host: smtp.sendgrid.net" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 554,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Port: 587 (TLS)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 555,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Username: apikey" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 556,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 553,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 551,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "Mailgun" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 561,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Host: smtp.mailgun.org" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 563,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Port: 587 (TLS)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 564,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Use your domain credentials" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 565,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 562,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 560,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "Outlook/Hotmail" }, void 0, false, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 570,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-gray-600 space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Host: smtp-mail.outlook.com" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 572,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Port: 587 (TLS)" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 573,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Use your Microsoft account" }, void 0, false, {
                  fileName: "app/routes/settings.smtp.tsx",
                  lineNumber: 574,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.smtp.tsx",
                lineNumber: 571,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.smtp.tsx",
              lineNumber: 569,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 541,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.smtp.tsx",
            lineNumber: 540,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.smtp.tsx",
          lineNumber: 533,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.smtp.tsx",
        lineNumber: 291,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.smtp.tsx",
        lineNumber: 290,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.smtp.tsx",
      lineNumber: 287,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.smtp.tsx",
    lineNumber: 284,
    columnNumber: 10
  }, this);
}
_s(SMTPSettings, "0V1nNkBbX+i4Qo+9LzkL7aigntM=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = SMTPSettings;
var _c;
$RefreshReg$(_c, "SMTPSettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SMTPSettings as default
};
//# sourceMappingURL=/build/routes/settings.smtp-UVTPTWIO.js.map
