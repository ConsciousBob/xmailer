import {
  Textarea
} from "/build/_shared/chunk-DZXWZT2N.js";
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
  List
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

// app/routes/lists.new.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/lists.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/lists.new.tsx"
  );
  import.meta.hot.lastModified = "1754586020267.7917";
}
var colorOptions = [{
  name: "Blue",
  value: "#3B82F6"
}, {
  name: "Green",
  value: "#10B981"
}, {
  name: "Purple",
  value: "#8B5CF6"
}, {
  name: "Red",
  value: "#EF4444"
}, {
  name: "Orange",
  value: "#F59E0B"
}, {
  name: "Pink",
  value: "#EC4899"
}, {
  name: "Indigo",
  value: "#6366F1"
}, {
  name: "Teal",
  value: "#14B8A6"
}];
function NewList() {
  _s();
  const {
    user
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/lists.new.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/lists.new.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this),
            "Back to Lists"
          ] }, void 0, true, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 132,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 131,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Create New List" }, void 0, false, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Create a new list to organize your subscribers." }, void 0, false, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 139,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 137,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.new.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: actionData.error }, void 0, false, {
          fileName: "app/routes/lists.new.tsx",
          lineNumber: 147,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/lists.new.tsx",
          lineNumber: 146,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lists.new.tsx",
          lineNumber: 145,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "List Information" }, void 0, false, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Enter the details for your new subscriber list." }, void 0, false, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "List Name *" }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 161,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", placeholder: "e.g., Newsletter Subscribers, VIP Customers", required: true, className: "w-full" }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 164,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description" }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 168,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { name: "description", placeholder: "Describe what this list is for...", className: "w-full", rows: 3 }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 171,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 167,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: "List Color" }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 175,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 gap-3", children: colorOptions.map((color) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex items-center space-x-2 cursor-pointer", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "color", value: color.value, defaultChecked: color.value === "#3B82F6", className: "sr-only" }, void 0, false, {
                  fileName: "app/routes/lists.new.tsx",
                  lineNumber: 180,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center", style: {
                  backgroundColor: color.value
                }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-4 h-4 rounded-full bg-white opacity-0 peer-checked:opacity-100" }, void 0, false, {
                  fileName: "app/routes/lists.new.tsx",
                  lineNumber: 184,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/lists.new.tsx",
                  lineNumber: 181,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-700", children: color.name }, void 0, false, {
                  fileName: "app/routes/lists.new.tsx",
                  lineNumber: 186,
                  columnNumber: 27
                }, this)
              ] }, color.value, true, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 179,
                columnNumber: 50
              }, this)) }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/lists.new.tsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this),
                isSubmitting ? "Creating List..." : "Create List"
              ] }, void 0, true, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 198,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/lists.new.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.new.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.new.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.new.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/lists.new.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/lists.new.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lists.new.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/lists.new.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
_s(NewList, "1McpCHagYnDxWS8x/PvdytQMqgg=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = NewList;
var _c;
$RefreshReg$(_c, "NewList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewList as default
};
//# sourceMappingURL=/build/routes/lists.new-ZIROWYTM.js.map
