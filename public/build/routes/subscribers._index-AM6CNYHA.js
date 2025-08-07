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
  Plus,
  Search,
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

// app/routes/subscribers._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/subscribers._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/subscribers._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020268.784";
}
function Subscribers() {
  _s();
  const {
    user,
    subscribers,
    error
  } = useLoaderData();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "subscribed":
        return "bg-green-100 text-green-800";
      case "unsubscribed":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/subscribers._index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/subscribers._index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Subscribers" }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Manage your email subscribers and their preferences." }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/import", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this),
              "Import Subscribers"
            ] }, void 0, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 115,
                columnNumber: 21
              }, this),
              "Add Subscriber"
            ] }, void 0, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 114,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 113,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 122,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 133,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: "Search subscribers by email or name...", className: "pl-10" }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 134,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "Filter" }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        subscribers.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 143,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No subscribers yet" }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Start building your audience by adding your first subscriber." }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 147,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 153,
                columnNumber: 25
              }, this),
              "Add Subscriber"
            ] }, void 0, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 152,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 151,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/import", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "Import from CSV" }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 158,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 157,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 150,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 141,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: [
              "All Subscribers (",
              subscribers.length,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 166,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Manage and view all your email subscribers" }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Subscriber" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 176,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 177,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Lists" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 178,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Subscribed" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 179,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 180,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 175,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 174,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: subscribers.map((subscriber) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium text-gray-900", children: [
                  subscriber.first_name,
                  " ",
                  subscriber.last_name
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 187,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-600", children: subscriber.email }, void 0, false, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 190,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 186,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 185,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`, children: subscriber.status }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 194,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 193,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-1", children: [
                subscriber.list_subscribers?.slice(0, 3).map((ls) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full mr-1", style: {
                    backgroundColor: ls.lists?.color || "#gray"
                  } }, void 0, false, {
                    fileName: "app/routes/subscribers._index.tsx",
                    lineNumber: 201,
                    columnNumber: 37
                  }, this),
                  ls.lists?.name || "Unknown"
                ] }, ls.list_id, true, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 200,
                  columnNumber: 85
                }, this)),
                subscriber.list_subscribers?.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-500", children: [
                  "+",
                  subscriber.list_subscribers.length - 3,
                  " more"
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 206,
                  columnNumber: 77
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 199,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 198,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-600", children: formatDate(subscriber.created_at) }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 211,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/subscribers/${subscriber.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: "View" }, void 0, false, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 217,
                  columnNumber: 35
                }, this) }, void 0, false, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 216,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/subscribers/${subscriber.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: "Edit" }, void 0, false, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 222,
                  columnNumber: 35
                }, this) }, void 0, false, {
                  fileName: "app/routes/subscribers._index.tsx",
                  lineNumber: 221,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 215,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers._index.tsx",
                lineNumber: 214,
                columnNumber: 29
              }, this)
            ] }, subscriber.id, true, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 184,
              columnNumber: 56
            }, this)) }, void 0, false, {
              fileName: "app/routes/subscribers._index.tsx",
              lineNumber: 183,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 173,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers._index.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers._index.tsx",
          lineNumber: 164,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribers._index.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/subscribers._index.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribers._index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribers._index.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(Subscribers, "vmWcdnLsapcySSJOIODr+MLTn1M=", false, function() {
  return [useLoaderData];
});
_c = Subscribers;
var _c;
$RefreshReg$(_c, "Subscribers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Subscribers as default
};
//# sourceMappingURL=/build/routes/subscribers._index-AM6CNYHA.js.map
