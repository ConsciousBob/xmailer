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
  Plus,
  Search,
  UserMinus,
  UserPlus,
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
import {
  require_react
} from "/build/_shared/chunk-2Q7FBYOG.js";
import "/build/_shared/chunk-4JLKO6E3.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/lists.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/lists.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/lists.$id.tsx"
  );
  import.meta.hot.lastModified = "1754585347713.6667";
}
function ListDetail() {
  _s();
  const {
    user,
    list,
    members,
    availableRecipients,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  const filteredMembers = members.filter((member) => {
    const recipient = member.recipients;
    const fullName = `${recipient.first_name || ""} ${recipient.last_name || ""}`.trim();
    const searchLower = searchTerm.toLowerCase();
    return recipient.email.toLowerCase().includes(searchLower) || fullName.toLowerCase().includes(searchLower);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/lists.$id.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/lists.$id.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, this),
            "Back to Lists"
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 265,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-6 h-6 rounded-full mr-3", style: {
              backgroundColor: list.color
            } }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 272,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: list.name }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 276,
                columnNumber: 21
              }, this),
              list.description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: list.description }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 277,
                columnNumber: 42
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 275,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 271,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 270,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 text-sm rounded-full ${list.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: list.is_active ? "Active" : "Inactive" }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 282,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 290,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 289,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 288,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 300,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Members" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 303,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: list.total_members || 0 }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 304,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 302,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 298,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 297,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 314,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 313,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Subscribed" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 317,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: list.subscribed_members || 0 }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 318,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 316,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 312,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 311,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 310,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 328,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 327,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Available to Add" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 331,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: availableRecipients.length }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 332,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 330,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 326,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 324,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 295,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-5 w-5 mr-2" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 345,
                  columnNumber: 23
                }, this),
                "Add Recipients"
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 344,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Add new recipients to this list" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 348,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 343,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-3", children: "Add New Recipient" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 355,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "add-by-email" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 357,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", type: "email", placeholder: "Email address", required: true }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 359,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "firstName", placeholder: "First name" }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 362,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "lastName", placeholder: "Last name" }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 363,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 361,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", size: "sm", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Recipient" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 366,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 356,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 354,
                columnNumber: 21
              }, this),
              availableRecipients.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-3", children: "Add Existing Recipients" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 374,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: [
                  availableRecipients.slice(0, 10).map((recipient) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate", children: recipient.email }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 378,
                        columnNumber: 33
                      }, this),
                      (recipient.first_name || recipient.last_name) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: [recipient.first_name, recipient.last_name].filter(Boolean).join(" ") }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 381,
                        columnNumber: 83
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 377,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "add-recipient" }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 386,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "recipientId", value: recipient.id }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 387,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", size: "sm", variant: "outline", disabled: isSubmitting, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPlus, { className: "h-3 w-3" }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 389,
                        columnNumber: 35
                      }, this) }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 388,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 385,
                      columnNumber: 31
                    }, this)
                  ] }, recipient.id, true, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 376,
                    columnNumber: 78
                  }, this)),
                  availableRecipients.length > 10 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 text-center", children: [
                    "And ",
                    availableRecipients.length - 10,
                    " more recipients..."
                  ] }, void 0, true, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 393,
                    columnNumber: 63
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 375,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 373,
                columnNumber: 56
              }, this),
              actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 399,
                columnNumber: 43
              }, this),
              actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600 text-sm bg-green-50 p-3 rounded-md", children: actionData.success }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 403,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 352,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 342,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "List Members" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 414,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Manage recipients in this list" }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 415,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 413,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 423,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: "Search members...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 424,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 422,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 421,
                columnNumber: 21
              }, this),
              filteredMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 429,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: searchTerm ? "No members match your search." : "No members in this list yet." }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 430,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 428,
                columnNumber: 53
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Email" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 437,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Name" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 438,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 439,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Added" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 440,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" }, void 0, false, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 441,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 436,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 435,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: filteredMembers.map((member) => {
                  const recipient = member.recipients;
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-900", children: recipient.email }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 448,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-600", children: [recipient.first_name, recipient.last_name].filter(Boolean).join(" ") || "-" }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 451,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${recipient.subscribed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: recipient.subscribed ? "Subscribed" : "Unsubscribed" }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 455,
                      columnNumber: 37
                    }, this) }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 454,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm text-gray-500", children: new Date(member.added_at).toLocaleDateString() }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 459,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "remove-recipient" }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 464,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "membershipId", value: member.id }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 465,
                        columnNumber: 39
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", disabled: isSubmitting, onClick: (e) => {
                        if (!confirm("Remove this recipient from the list?")) {
                          e.preventDefault();
                        }
                      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserMinus, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 471,
                        columnNumber: 41
                      }, this) }, void 0, false, {
                        fileName: "app/routes/lists.$id.tsx",
                        lineNumber: 466,
                        columnNumber: 39
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 463,
                      columnNumber: 37
                    }, this) }, void 0, false, {
                      fileName: "app/routes/lists.$id.tsx",
                      lineNumber: 462,
                      columnNumber: 35
                    }, this)
                  ] }, member.id, true, {
                    fileName: "app/routes/lists.$id.tsx",
                    lineNumber: 447,
                    columnNumber: 34
                  }, this);
                }) }, void 0, false, {
                  fileName: "app/routes/lists.$id.tsx",
                  lineNumber: 444,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 434,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/lists.$id.tsx",
                lineNumber: 433,
                columnNumber: 32
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.$id.tsx",
              lineNumber: 419,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 412,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.$id.tsx",
            lineNumber: 411,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.$id.tsx",
          lineNumber: 339,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/lists.$id.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/lists.$id.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lists.$id.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/lists.$id.tsx",
    lineNumber: 255,
    columnNumber: 10
  }, this);
}
_s(ListDetail, "Dr0DxuoNotfeeewoZz0EToYqAOo=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = ListDetail;
var _c;
$RefreshReg$(_c, "ListDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ListDetail as default
};
//# sourceMappingURL=/build/routes/lists.$id-O64K4J54.js.map
