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
  Download,
  Plus,
  Trash2,
  Upload,
  Users
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

// app/routes/recipients._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/recipients._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/recipients._index.tsx"
  );
  import.meta.hot.lastModified = "1754585347714.5667";
}
function Recipients() {
  _s();
  const {
    user,
    recipients,
    stats
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/recipients._index.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/recipients._index.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Recipients" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 164,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Manage your email recipient lists and subscriptions." }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 172,
                columnNumber: 19
              }, this),
              "Import CSV"
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Download, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this),
              "Export"
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/recipients._index.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 188,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 187,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Recipients" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 191,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.total }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 192,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 186,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 202,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 201,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Subscribed" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 205,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.subscribed }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 206,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 199,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 198,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-red-600" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 216,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 215,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Unsubscribed" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 219,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.unsubscribed }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 220,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 213,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/recipients._index.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 231,
                columnNumber: 19
              }, this),
              "Add New Recipient"
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 230,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Add individual recipients to your email list" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 229,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "add" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 240,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", type: "email", placeholder: "john@example.com", required: true }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 247,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "firstName", placeholder: "John" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 254,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 250,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 258,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "lastName", placeholder: "Doe" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 261,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 257,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Tags (comma-separated)" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 265,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "tags", placeholder: "newsletter, customer" }, void 0, false, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 268,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 264,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 242,
              columnNumber: 19
            }, this),
            actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm", children: actionData.error }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 272,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Recipient" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 276,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/recipients._index.tsx",
          lineNumber: 228,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "All Recipients" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 286,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Manage your email recipients and their subscription status" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 287,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: recipients.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No recipients yet. Add some recipients to get started." }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 294,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 292,
            columnNumber: 44
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Email" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 301,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Name" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 302,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Tags" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 303,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 304,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 305,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 300,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 299,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: recipients.map((recipient) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-900", children: recipient.email }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 310,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-600", children: [recipient.first_name, recipient.last_name].filter(Boolean).join(" ") || "-" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 313,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm", children: recipient.tags && recipient.tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-1", children: recipient.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full", children: tag }, index, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 318,
                columnNumber: 71
              }, this)) }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 317,
                columnNumber: 78
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-400", children: "-" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 321,
                columnNumber: 42
              }, this) }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 316,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${recipient.subscribed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: recipient.subscribed ? "Subscribed" : "Unsubscribed" }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 324,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 323,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "toggle-subscription" }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 331,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "recipientId", value: recipient.id }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 332,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "subscribed", value: recipient.subscribed }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 333,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", children: recipient.subscribed ? "Unsubscribe" : "Subscribe" }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 334,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 330,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "delete" }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 340,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "recipientId", value: recipient.id }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 341,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 343,
                    columnNumber: 37
                  }, this) }, void 0, false, {
                    fileName: "app/routes/recipients._index.tsx",
                    lineNumber: 342,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/recipients._index.tsx",
                  lineNumber: 339,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 329,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/recipients._index.tsx",
                lineNumber: 328,
                columnNumber: 29
              }, this)
            ] }, recipient.id, true, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 309,
              columnNumber: 54
            }, this)) }, void 0, false, {
              fileName: "app/routes/recipients._index.tsx",
              lineNumber: 308,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 298,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 297,
            columnNumber: 28
          }, this) }, void 0, false, {
            fileName: "app/routes/recipients._index.tsx",
            lineNumber: 291,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/recipients._index.tsx",
          lineNumber: 284,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/recipients._index.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/recipients._index.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/recipients._index.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/recipients._index.tsx",
    lineNumber: 154,
    columnNumber: 10
  }, this);
}
_s(Recipients, "jaHa+nCJSKonbTEQwPG1D2e3c3A=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = Recipients;
var _c;
$RefreshReg$(_c, "Recipients");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Recipients as default
};
//# sourceMappingURL=/build/routes/recipients._index-SOC3QGY6.js.map
