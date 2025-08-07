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
  Calendar,
  List,
  Mail,
  SquarePen,
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

// app/routes/subscribers.$id.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/subscribers.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/subscribers.$id.tsx"
  );
  import.meta.hot.lastModified = "1754586020268.6003";
}
function ViewSubscriber() {
  _s();
  const {
    user,
    subscriber
  } = useLoaderData();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
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
      fileName: "app/routes/subscribers.$id.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/subscribers.$id.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 106,
                columnNumber: 21
              }, this),
              "Back to Subscribers"
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 104,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: [
                subscriber.first_name,
                " ",
                subscriber.last_name
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: subscriber.email }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 114,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 110,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/subscribers/${subscriber.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquarePen, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 120,
              columnNumber: 19
            }, this),
            "Edit Subscriber"
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.tsx",
            lineNumber: 119,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers.$id.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-5 w-5 mr-2" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 132,
                  columnNumber: 23
                }, this),
                "Subscriber Information"
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 131,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 130,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Email Address" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 139,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900 font-medium", children: subscriber.email }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 140,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 138,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Status" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 144,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`, children: subscriber.status }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 146,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 145,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 143,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "First Name" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 153,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: subscriber.first_name || "Not provided" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 154,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 152,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Last Name" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 158,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: subscriber.last_name || "Not provided" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 159,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 157,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 137,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 136,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "h-5 w-5 mr-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 169,
                    columnNumber: 23
                  }, this),
                  "List Memberships"
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 168,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Lists this subscriber is a member of" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 172,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: subscriber.list_subscribers && subscriber.list_subscribers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: subscriber.list_subscribers.map((ls) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 rounded-full", style: {
                    backgroundColor: ls.lists.color
                  } }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 180,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: ls.lists.name }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 184,
                      columnNumber: 33
                    }, this),
                    ls.lists.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: ls.lists.description }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 185,
                      columnNumber: 58
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 183,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 179,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(ls.status)}`, children: ls.status }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 189,
                    columnNumber: 31
                  }, this),
                  ls.subscribed_at && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: [
                    "Joined ",
                    formatDate(ls.subscribed_at)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 192,
                    columnNumber: 52
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 188,
                  columnNumber: 29
                }, this)
              ] }, ls.id, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 178,
                columnNumber: 64
              }, this)) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 177,
                columnNumber: 94
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 198,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Not subscribed to any lists" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 199,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 197,
                columnNumber: 32
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 166,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-5 w-5 mr-2" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 210,
                  columnNumber: 23
                }, this),
                "Activity Timeline"
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-blue-500 mt-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 217,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Account Created" }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 219,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: formatDate(subscriber.created_at) }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 220,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 218,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 216,
                  columnNumber: 23
                }, this),
                subscriber.subscribed_at && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-green-500 mt-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 225,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Subscribed" }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 227,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: formatDate(subscriber.subscribed_at) }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 228,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 226,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 224,
                  columnNumber: 52
                }, this),
                subscriber.unsubscribed_at && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-red-500 mt-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 233,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Unsubscribed" }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 235,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: formatDate(subscriber.unsubscribed_at) }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 236,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 234,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 232,
                  columnNumber: 54
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2 h-2 rounded-full bg-gray-400 mt-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 241,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: "Last Updated" }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 243,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: formatDate(subscriber.updated_at) }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.tsx",
                      lineNumber: 244,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 242,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 240,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 215,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 214,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 207,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Quick Actions" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 254,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 253,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/subscribers/${subscriber.id}/edit`, className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SquarePen, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 260,
                    columnNumber: 27
                  }, this),
                  "Edit Subscriber"
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 259,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 258,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-4 w-4 mr-2" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.tsx",
                    lineNumber: 266,
                    columnNumber: 25
                  }, this),
                  "Send Email"
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.$id.tsx",
                  lineNumber: 265,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 257,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.tsx",
            lineNumber: 206,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribers.$id.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/subscribers.$id.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribers.$id.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribers.$id.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s(ViewSubscriber, "Im0TePdMqW6mwabKW3+QeHvNq1o=", false, function() {
  return [useLoaderData];
});
_c = ViewSubscriber;
var _c;
$RefreshReg$(_c, "ViewSubscriber");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ViewSubscriber as default
};
//# sourceMappingURL=/build/routes/subscribers.$id-IGP3LYFS.js.map
