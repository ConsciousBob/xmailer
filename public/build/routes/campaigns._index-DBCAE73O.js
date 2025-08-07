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
  Mail,
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
  Button,
  formatDate
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

// app/routes/campaigns._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/campaigns._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/campaigns._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020266.2822";
}
function Campaigns() {
  _s();
  const {
    user,
    campaigns
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/campaigns._index.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/campaigns._index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Campaigns" }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Manage your email campaigns and track their performance." }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 67,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this),
            "New Campaign"
          ] }, void 0, true, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns._index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        campaigns.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No campaigns yet" }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-6", children: "Create your first email campaign to start reaching your audience." }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 91,
              columnNumber: 23
            }, this),
            "Create Campaign"
          ] }, void 0, true, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns._index.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns._index.tsx",
          lineNumber: 80,
          columnNumber: 39
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: campaigns.map((campaign) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-xl", children: campaign.name }, void 0, false, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 101,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { className: "mt-1", children: campaign.subject }, void 0, false, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 104,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 100,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 text-sm rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: campaign.status }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 109,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 108,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 99,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 119,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  campaign.sent_count || 0,
                  " / ",
                  campaign.total_recipients || 0,
                  " sent"
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 120,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 118,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 126,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Created ",
                  formatDate(campaign.created_at)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 127,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 125,
                columnNumber: 25
              }, this),
              campaign.scheduled_at && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 131,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                  "Scheduled ",
                  formatDate(campaign.scheduled_at)
                ] }, void 0, true, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 132,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 130,
                columnNumber: 51
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 117,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-600 h-2 rounded-full transition-all duration-300", style: {
                width: `${campaign.total_recipients > 0 ? (campaign.sent_count || 0) / campaign.total_recipients * 100 : 0}%`
              } }, void 0, false, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 138,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 137,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/campaigns/${campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: "View" }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 145,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 144,
                  columnNumber: 27
                }, this),
                campaign.status === "draft" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/campaigns/${campaign.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", children: "Edit" }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 150,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/campaigns._index.tsx",
                  lineNumber: 149,
                  columnNumber: 59
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns._index.tsx",
                lineNumber: 143,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns._index.tsx",
              lineNumber: 136,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns._index.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this)
        ] }, campaign.id, true, {
          fileName: "app/routes/campaigns._index.tsx",
          lineNumber: 97,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/routes/campaigns._index.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/campaigns._index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/campaigns._index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/campaigns._index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/campaigns._index.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(Campaigns, "0k3y/ttZ6uhG1h0GpFx+u24bmMo=", false, function() {
  return [useLoaderData];
});
_c = Campaigns;
var _c;
$RefreshReg$(_c, "Campaigns");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Campaigns as default
};
//# sourceMappingURL=/build/routes/campaigns._index-DBCAE73O.js.map
