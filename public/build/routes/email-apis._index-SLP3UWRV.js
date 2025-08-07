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
  ExternalLink,
  Plus,
  Trash2,
  Zap
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

// app/routes/email-apis._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/email-apis._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/email-apis._index.tsx"
  );
  import.meta.hot.lastModified = "1754585347713.4546";
}
var emailProviders = [{
  id: "sendgrid",
  name: "SendGrid",
  description: "Reliable email delivery service with excellent deliverability",
  setupUrl: "https://app.sendgrid.com/settings/api_keys",
  logo: "\u{1F4E7}"
}, {
  id: "mailgun",
  name: "Mailgun",
  description: "Powerful email API for developers",
  setupUrl: "https://app.mailgun.com/app/account/security/api_keys",
  logo: "\u{1F52B}"
}, {
  id: "postmark",
  name: "Postmark",
  description: "Fast and reliable transactional email service",
  setupUrl: "https://account.postmarkapp.com/api_tokens",
  logo: "\u{1F4EE}"
}, {
  id: "ses",
  name: "Amazon SES",
  description: "Cost-effective email service from AWS",
  setupUrl: "https://console.aws.amazon.com/ses/",
  logo: "\u2601\uFE0F"
}];
function EmailAPIs() {
  _s();
  const {
    user,
    emailApis
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/email-apis._index.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/email-apis._index.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Email APIs" }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Configure email service providers to send your campaigns through their APIs." }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-apis._index.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Available Email Providers" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 181,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Choose from popular email service providers" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 182,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: emailProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl mr-3", children: provider.logo }, void 0, false, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 191,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: provider.name }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 193,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mt-1", children: provider.description }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 194,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 192,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 190,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: provider.setupUrl, target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:text-blue-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 200,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 199,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 189,
            columnNumber: 23
          }, this) }, provider.id, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 188,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 187,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-apis._index.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, this),
              "Add Email API"
            ] }, void 0, true, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Configure a new email service provider" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 215,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "create" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 221,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuration Name" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 225,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", placeholder: "e.g., SendGrid Production", required: true }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 228,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 224,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Provider" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 232,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "provider", className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", required: true, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Provider" }, void 0, false, {
                    fileName: "app/routes/email-apis._index.tsx",
                    lineNumber: 236,
                    columnNumber: 25
                  }, this),
                  emailProviders.map((provider) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: provider.id, children: provider.name }, provider.id, false, {
                    fileName: "app/routes/email-apis._index.tsx",
                    lineNumber: 237,
                    columnNumber: 57
                  }, this))
                ] }, void 0, true, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 235,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "API Key" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "apiKey", type: "password", placeholder: "Your API key", required: true }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 247,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 223,
              columnNumber: 19
            }, this),
            actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm", children: actionData.error }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 251,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Email API" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 255,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-apis._index.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-gray-900", children: "Your Email API Configurations" }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          emailApis.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 270,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No email APIs configured yet. Add one above to get started." }, void 0, false, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 271,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 269,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 268,
            columnNumber: 41
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4", children: emailApis.map((api) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 281,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 280,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: api.name }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 284,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: emailProviders.find((p) => p.id === api.provider)?.name || api.provider }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 287,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${api.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: api.is_active ? "Active" : "Inactive" }, void 0, false, {
                    fileName: "app/routes/email-apis._index.tsx",
                    lineNumber: 291,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-xs text-gray-500", children: [
                    "API Key: ****",
                    api.api_key.slice(-4)
                  ] }, void 0, true, {
                    fileName: "app/routes/email-apis._index.tsx",
                    lineNumber: 294,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 290,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 283,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 279,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "toggle" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 303,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "apiId", value: api.id }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 304,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "isActive", value: api.is_active }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 305,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", children: api.is_active ? "Deactivate" : "Activate" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 306,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 302,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 312,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "apiId", value: api.id }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 313,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 315,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/email-apis._index.tsx",
                  lineNumber: 314,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/email-apis._index.tsx",
                lineNumber: 311,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-apis._index.tsx",
              lineNumber: 301,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 278,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 277,
            columnNumber: 23
          }, this) }, api.id, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 276,
            columnNumber: 41
          }, this)) }, void 0, false, {
            fileName: "app/routes/email-apis._index.tsx",
            lineNumber: 275,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-apis._index.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-apis._index.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/email-apis._index.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/email-apis._index.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/email-apis._index.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s(EmailAPIs, "90CvvoqAU/lRFD0TojQtrsm1Hm8=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = EmailAPIs;
var _c;
$RefreshReg$(_c, "EmailAPIs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EmailAPIs as default
};
//# sourceMappingURL=/build/routes/email-apis._index-SLP3UWRV.js.map
