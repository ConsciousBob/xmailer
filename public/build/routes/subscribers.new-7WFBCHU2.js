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
  UserPlus
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

// app/routes/subscribers.new.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/subscribers.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/subscribers.new.tsx"
  );
  import.meta.hot.lastModified = "1754586020269.1135";
}
function NewSubscriber() {
  _s();
  const {
    user,
    lists,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/subscribers.new.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/subscribers.new.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, this),
            "Back to Subscribers"
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Add New Subscriber" }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Add a new subscriber to your mailing lists." }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 150,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 158,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 156,
          columnNumber: 23
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: actionData.error }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 164,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 163,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 162,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Subscriber Information" }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Enter the subscriber's details and select which lists they should join." }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", type: "email", placeholder: "subscriber@example.com", required: true, className: "w-full" }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 181,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 186,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "firstName", placeholder: "John", className: "w-full" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 189,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "lastName", placeholder: "Doe", className: "w-full" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            lists.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: "Subscribe to Lists" }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 201,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3", children: lists.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `list-${list.id}`, name: "lists", value: list.id, className: "rounded border-gray-300" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 206,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `list-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 rounded-full mr-2", style: {
                    backgroundColor: list.color
                  } }, void 0, false, {
                    fileName: "app/routes/subscribers.new.tsx",
                    lineNumber: 208,
                    columnNumber: 31
                  }, this),
                  list.name,
                  list.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 ml-2", children: [
                    "- ",
                    list.description
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.new.tsx",
                    lineNumber: 212,
                    columnNumber: 52
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this)
              ] }, list.id, true, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 205,
                columnNumber: 44
              }, this)) }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 204,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-2", children: "Select which lists this subscriber should be added to." }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 216,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 200,
              columnNumber: 40
            }, this),
            lists.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "border-yellow-200 bg-yellow-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-800 mb-2", children: "You don't have any lists yet." }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 223,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-700 text-sm", children: "The subscriber will be added to your general subscriber list. You can create lists later and organize your subscribers." }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 226,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 222,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 221,
              columnNumber: 42
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/subscribers.new.tsx",
                  lineNumber: 234,
                  columnNumber: 23
                }, this),
                isSubmitting ? "Adding Subscriber..." : "Add Subscriber"
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 233,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers", className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 239,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.new.tsx",
                lineNumber: 238,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.new.tsx",
              lineNumber: 232,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers.new.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.new.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribers.new.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/subscribers.new.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribers.new.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribers.new.tsx",
    lineNumber: 133,
    columnNumber: 10
  }, this);
}
_s(NewSubscriber, "5fmIo9kIDIvhEaal8R/Ko46JN4U=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = NewSubscriber;
var _c;
$RefreshReg$(_c, "NewSubscriber");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewSubscriber as default
};
//# sourceMappingURL=/build/routes/subscribers.new-7WFBCHU2.js.map
