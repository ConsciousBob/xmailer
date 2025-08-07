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
  Clock,
  Save,
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

// app/routes/campaigns.new.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/campaigns.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/campaigns.new.tsx"
  );
  import.meta.hot.lastModified = "1754586020266.6423";
}
function NewCampaign() {
  _s();
  const {
    user,
    lists,
    error
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const now = /* @__PURE__ */ new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split("T")[0];
  const defaultTime = "09:00";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/campaigns.new.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/campaigns.new.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 196,
              columnNumber: 19
            }, this),
            "Back to Campaigns"
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Create New Campaign" }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 201,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Design and send your email campaign to your audience." }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 200,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.new.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this),
        error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: error }, void 0, false, {
          fileName: "app/routes/campaigns.new.tsx",
          lineNumber: 210,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns.new.tsx",
          lineNumber: 209,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns.new.tsx",
          lineNumber: 208,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Campaign Details" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Basic information about your email campaign" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Campaign Name *" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 224,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "name", placeholder: "e.g., Weekly Newsletter - January 2024", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 227,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Subject *" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 231,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "subject", placeholder: "e.g., Your Weekly Update from xMailer", required: true, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 234,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 230,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 222,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Email Content" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 241,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Write your email content (HTML supported)" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 242,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 240,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { name: "content", placeholder: "Write your email content here. HTML is supported for formatting.", required: true, className: "w-full min-h-[300px]" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-2", children: "HTML tags are supported for formatting your email content." }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 248,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Audience Targeting" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Choose who will receive this campaign" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 257,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "targetAllSubscribers", name: "targetAllSubscribers", value: "true", className: "rounded border-gray-300" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 263,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "targetAllSubscribers", className: "text-sm font-medium text-gray-700", children: "Target all subscribers" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 264,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 262,
                columnNumber: 19
              }, this),
              lists.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Include Lists" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 271,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: lists.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `include-${list.id}`, name: "includeLists", value: list.id, className: "rounded border-gray-300" }, void 0, false, {
                      fileName: "app/routes/campaigns.new.tsx",
                      lineNumber: 276,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `include-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 rounded-full mr-2", style: {
                        backgroundColor: list.color
                      } }, void 0, false, {
                        fileName: "app/routes/campaigns.new.tsx",
                        lineNumber: 278,
                        columnNumber: 33
                      }, this),
                      list.name,
                      " (",
                      list.subscribed_members || 0,
                      " subscribers)"
                    ] }, void 0, true, {
                      fileName: "app/routes/campaigns.new.tsx",
                      lineNumber: 277,
                      columnNumber: 31
                    }, this)
                  ] }, list.id, true, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 275,
                    columnNumber: 46
                  }, this)) }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 270,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Exclude Lists (Optional)" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 288,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: lists.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `exclude-${list.id}`, name: "excludeLists", value: list.id, className: "rounded border-gray-300" }, void 0, false, {
                      fileName: "app/routes/campaigns.new.tsx",
                      lineNumber: 293,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `exclude-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3 h-3 rounded-full mr-2", style: {
                        backgroundColor: list.color
                      } }, void 0, false, {
                        fileName: "app/routes/campaigns.new.tsx",
                        lineNumber: 295,
                        columnNumber: 33
                      }, this),
                      list.name
                    ] }, void 0, true, {
                      fileName: "app/routes/campaigns.new.tsx",
                      lineNumber: 294,
                      columnNumber: 31
                    }, this)
                  ] }, list.id, true, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 292,
                    columnNumber: 46
                  }, this)) }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 291,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 287,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 269,
                columnNumber: 40
              }, this),
              lists.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6 bg-gray-50 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "You don't have any active lists yet." }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 306,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "Create Your First List" }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 310,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 309,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 305,
                columnNumber: 42
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 261,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Scheduling Options" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 319,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Choose when to send your campaign" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 320,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 318,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Schedule Date" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 327,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "date", name: "scheduledDate", defaultValue: defaultDate, min: defaultDate, className: "w-full" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 330,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 326,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Schedule Time" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 333,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "time", name: "scheduledTime", defaultValue: defaultTime, className: "w-full" }, void 0, false, {
                    fileName: "app/routes/campaigns.new.tsx",
                    lineNumber: 336,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns.new.tsx",
                  lineNumber: 332,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 325,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Leave date and time fields for immediate sending, or set them for scheduled delivery." }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 339,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 324,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 317,
            columnNumber: 15
          }, this),
          actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-800", children: actionData.error }, void 0, false, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 347,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 346,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 345,
            columnNumber: 37
          }, this),
          actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "border-green-200 bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-800", children: actionData.success }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 353,
              columnNumber: 21
            }, this),
            actionData.campaignId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/campaigns/${actionData.campaignId}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: "View Campaign" }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 356,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 355,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 354,
              columnNumber: 47
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 351,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: "save", variant: "outline", disabled: isSubmitting, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Save, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 367,
                columnNumber: 19
              }, this),
              isSubmitting ? "Saving..." : "Save as Draft"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 366,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: "send", disabled: isSubmitting, className: "bg-green-600 hover:bg-green-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 372,
                columnNumber: 19
              }, this),
              isSubmitting ? "Sending..." : "Send Now"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 371,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: "schedule", disabled: isSubmitting, className: "bg-blue-600 hover:bg-blue-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/campaigns.new.tsx",
                lineNumber: 377,
                columnNumber: 19
              }, this),
              isSubmitting ? "Scheduling..." : "Schedule Campaign"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.new.tsx",
              lineNumber: 376,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.new.tsx",
            lineNumber: 365,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.new.tsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/campaigns.new.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/campaigns.new.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/campaigns.new.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/campaigns.new.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
}
_s(NewCampaign, "5fmIo9kIDIvhEaal8R/Ko46JN4U=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = NewCampaign;
var _c;
$RefreshReg$(_c, "NewCampaign");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewCampaign as default
};
//# sourceMappingURL=/build/routes/campaigns.new-MWY4JQUB.js.map
