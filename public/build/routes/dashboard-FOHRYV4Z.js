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
  BarChart3,
  Mail,
  Send,
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
import "/build/_shared/chunk-HKIG53IR.js";
import {
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

// app/routes/dashboard.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1754586020267.0881";
}
function Dashboard() {
  _s();
  const {
    user,
    stats,
    recentCampaigns
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
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Welcome back! Here's what's happening with your email campaigns." }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 101,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Subscribers" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 104,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalSubscribers }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 105,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 103,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 115,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Active Lists" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 118,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalLists }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 119,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 129,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 128,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Campaigns" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 132,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalCampaigns }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 133,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 131,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-6 w-6 text-orange-600" }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 143,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 142,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 146,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: recentCampaigns.reduce((sum, campaign) => sum + (campaign.sent_count || 0), 0) }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 147,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Recent Campaigns" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 160,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Your latest email campaigns and their status" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: recentCampaigns.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 167,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No campaigns yet" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 168,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Create your first campaign to get started" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 169,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 166,
              columnNumber: 51
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: recentCampaigns.map((campaign) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: campaign.name }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 173,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
                  campaign.sent_count || 0,
                  " / ",
                  campaign.total_recipients || 0,
                  " sent"
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 174,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 172,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: campaign.status }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 179,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: formatDate(campaign.created_at) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 182,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 178,
                columnNumber: 27
              }, this)
            ] }, campaign.id, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 171,
              columnNumber: 56
            }, this)) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 170,
              columnNumber: 30
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Quick Actions" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 193,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Common tasks to get you started" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/subscribers/new", className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-5 w-5 text-blue-600" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 202,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 201,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: "Add Subscribers" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 205,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Import or add new subscribers" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 206,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 204,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/lists/new", className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-5 w-5 text-green-600" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 212,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 211,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: "Create List" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 215,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Organize your subscribers" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 216,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 210,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/campaigns/new", className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-5 w-5 text-purple-600" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 222,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 221,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: "New Campaign" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 225,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Create and send emails" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 226,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 224,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/settings/smtp", className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-5 w-5 text-orange-600" }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 232,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 231,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: "Setup SMTP" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 235,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Configure email sending" }, void 0, false, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 236,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 234,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 230,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 199,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 198,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 191,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "OnxmEIyP367SNmPSIdiH6sA7mg0=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-FOHRYV4Z.js.map
