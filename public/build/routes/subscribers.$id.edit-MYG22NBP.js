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
  Save
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

// app/routes/subscribers.$id.edit.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/subscribers.$id.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/subscribers.$id.edit.tsx"
  );
  import.meta.hot.lastModified = "1754586020268.4026";
}
function EditSubscriber() {
  _s();
  const {
    user,
    subscriber,
    allLists,
    currentListIds,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log("Loader data:", {
    subscriber,
    allLists,
    currentListIds
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/subscribers.$id.edit.tsx",
      lineNumber: 270,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/subscribers.$id.edit.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 280,
              columnNumber: 19
            }, this),
            "Back to Subscribers"
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 279,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Edit Subscriber" }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Update subscriber information and list memberships." }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 286,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-5 w-5 text-red-600 mr-2" }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 294,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 293,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 292,
          columnNumber: 23
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-5 w-5 text-red-600 mr-2" }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 301,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: actionData.error }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 302,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 300,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 299,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Subscriber Information" }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 308,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Update the subscriber's details and manage their list subscriptions." }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 309,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 307,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 316,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", type: "email", defaultValue: subscriber.email, required: true, className: "w-full" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 319,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 315,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 324,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "firstName", defaultValue: subscriber.first_name || "", className: "w-full" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 327,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 323,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 331,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "lastName", defaultValue: subscriber.last_name || "", className: "w-full" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 334,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 330,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 322,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 339,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "status", defaultValue: subscriber.status, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "subscribed", children: "Subscribed" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 343,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "unsubscribed", children: "Unsubscribed" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 344,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 345,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 342,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 338,
              columnNumber: 19
            }, this),
            allLists && allLists.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: [
                "List Memberships (",
                allLists.length,
                " lists available)"
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 350,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50", children: allLists.map((list) => {
                const isChecked = currentListIds.includes(list.id);
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 p-2 bg-white rounded border", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `list-${list.id}`, name: "lists", value: list.id, defaultChecked: isChecked, className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.edit.tsx",
                    lineNumber: 357,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `list-${list.id}`, className: "flex-1 text-sm text-gray-700 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 rounded-full mr-3", style: {
                      backgroundColor: list.color
                    } }, void 0, false, {
                      fileName: "app/routes/subscribers.$id.edit.tsx",
                      lineNumber: 360,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-medium", children: list.name }, void 0, false, {
                        fileName: "app/routes/subscribers.$id.edit.tsx",
                        lineNumber: 364,
                        columnNumber: 37
                      }, this),
                      list.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 text-xs", children: list.description }, void 0, false, {
                        fileName: "app/routes/subscribers.$id.edit.tsx",
                        lineNumber: 365,
                        columnNumber: 58
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/subscribers.$id.edit.tsx",
                      lineNumber: 363,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/subscribers.$id.edit.tsx",
                    lineNumber: 359,
                    columnNumber: 33
                  }, this) }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.edit.tsx",
                    lineNumber: 358,
                    columnNumber: 31
                  }, this),
                  isChecked && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded", children: "Current Member" }, void 0, false, {
                    fileName: "app/routes/subscribers.$id.edit.tsx",
                    lineNumber: 369,
                    columnNumber: 45
                  }, this)
                ] }, list.id, true, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 356,
                  columnNumber: 30
                }, this);
              }) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 353,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-2", children: "Select which lists this subscriber should be a member of." }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 375,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 349,
              columnNumber: 54
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "border-yellow-200 bg-yellow-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-800 mb-2", children: "No lists available" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 380,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-700 text-sm", children: "Create some lists first to organize your subscribers." }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 383,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists/new", className: "inline-block mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", variant: "outline", children: "Create Your First List" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 387,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 386,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 379,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 378,
              columnNumber: 30
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium mb-2", children: "Debug Info:" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 397,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", { className: "text-xs", children: JSON.stringify({
                subscriberId: subscriber.id,
                currentListIds,
                totalLists: allLists?.length || 0
              }, null, 2) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 398,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 396,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 395,
              columnNumber: 62
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting, className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/subscribers.$id.edit.tsx",
                  lineNumber: 410,
                  columnNumber: 23
                }, this),
                isSubmitting ? "Saving Changes..." : "Save Changes"
              ] }, void 0, true, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 409,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers", className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 415,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/subscribers.$id.edit.tsx",
                lineNumber: 414,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/subscribers.$id.edit.tsx",
              lineNumber: 408,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 314,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/subscribers.$id.edit.tsx",
            lineNumber: 313,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/subscribers.$id.edit.tsx",
          lineNumber: 306,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/subscribers.$id.edit.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/subscribers.$id.edit.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/subscribers.$id.edit.tsx",
      lineNumber: 272,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/subscribers.$id.edit.tsx",
    lineNumber: 269,
    columnNumber: 10
  }, this);
}
_s(EditSubscriber, "VYdatklZ7iSL6vZZRq4d5yVwHwQ=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = EditSubscriber;
var _c;
$RefreshReg$(_c, "EditSubscriber");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditSubscriber as default
};
//# sourceMappingURL=/build/routes/subscribers.$id.edit-MYG22NBP.js.map
