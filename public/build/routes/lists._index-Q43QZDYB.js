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
  Calendar,
  Ellipsis,
  List,
  Plus,
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

// app/routes/lists._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/lists._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/lists._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020267.519";
}
function Lists() {
  _s();
  const {
    user,
    lists,
    error
  } = useLoaderData();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/lists._index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/lists._index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Lists" }, void 0, false, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Organize your subscribers into targeted lists." }, void 0, false, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this),
            "Create List"
          ] }, void 0, true, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 94,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 93,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 92,
          columnNumber: 23
        }, this),
        lists.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No lists yet" }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Create your first list to start organizing your subscribers." }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 109,
              columnNumber: 23
            }, this),
            "Create Your First List"
          ] }, void 0, true, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 98,
          columnNumber: 35
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: lists.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 rounded-full", style: {
                  backgroundColor: list.color
                } }, void 0, false, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-lg", children: list.name }, void 0, false, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 122,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 118,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ellipsis, { className: "h-4 w-4" }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 125,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 124,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 117,
              columnNumber: 23
            }, this),
            list.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: list.description }, void 0, false, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 128,
              columnNumber: 44
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 135,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  list.subscribed_members || 0,
                  " subscribers"
                ] }, void 0, true, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 136,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 134,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 139,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatDate(list.created_at) }, void 0, false, {
                  fileName: "app/routes/lists._index.tsx",
                  lineNumber: 140,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 138,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 133,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/lists/${list.id}`, className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", className: "w-full", children: "View" }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 146,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 145,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/lists/${list.id}/edit`, className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", className: "w-full", children: "Edit" }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 151,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/lists._index.tsx",
                lineNumber: 150,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists._index.tsx",
              lineNumber: 144,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 132,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/lists._index.tsx",
            lineNumber: 131,
            columnNumber: 21
          }, this)
        ] }, list.id, true, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 115,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/lists._index.tsx",
          lineNumber: 114,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/lists._index.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/lists._index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lists._index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/lists._index.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(Lists, "lQfvLt1lY/lzli0tPBFmMM9ITpQ=", false, function() {
  return [useLoaderData];
});
_c = Lists;
var _c;
$RefreshReg$(_c, "Lists");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Lists as default
};
//# sourceMappingURL=/build/routes/lists._index-Q43QZDYB.js.map
