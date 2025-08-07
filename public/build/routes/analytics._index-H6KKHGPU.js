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
  TrendingUp,
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

// app/routes/analytics._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/analytics._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/analytics._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020265.3633";
}
function Analytics() {
  _s();
  const {
    user,
    analytics,
    campaigns
  } = useLoaderData();
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/analytics._index.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/analytics._index.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Analytics" }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Track your email marketing performance and subscriber growth." }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics._index.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 109,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 108,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Subscribers" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 112,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalSubscribers }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 113,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 111,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 123,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 122,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Campaigns Sent" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 126,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalCampaigns }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 127,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 125,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 121,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 120,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 137,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 136,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 140,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalEmailsSent }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 141,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 139,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "h-6 w-6 text-orange-600" }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 151,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 150,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Avg. Delivery Rate" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 154,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: [
                analytics.averageDeliveryRate,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 155,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 148,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics._index.tsx",
          lineNumber: 104,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Recent Campaign Performance" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 166,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Delivery rates for your recent campaigns" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 165,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: campaigns.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 173,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No campaign data yet" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 174,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500", children: "Send your first campaign to see analytics" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 175,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 172,
              columnNumber: 45
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: campaigns.slice(0, 5).map((campaign, index) => {
              const deliveryRate = campaign.total_recipients > 0 ? Math.round(campaign.sent_count / campaign.total_recipients * 100) : 0;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-gray-900", children: [
                    "Campaign ",
                    index + 1
                  ] }, void 0, true, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 182,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: [
                    deliveryRate,
                    "%"
                  ] }, void 0, true, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 185,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 181,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-600 h-2 rounded-full", style: {
                  width: `${deliveryRate}%`
                } }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 190,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 189,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    campaign.sent_count || 0,
                    " sent"
                  ] }, void 0, true, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 195,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: formatDate(campaign.created_at) }, void 0, false, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 196,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 194,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 180,
                columnNumber: 29
              }, this) }, index, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 179,
                columnNumber: 28
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 176,
              columnNumber: 30
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 171,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 164,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Growth Overview" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 207,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Your email marketing growth summary" }, void 0, false, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 208,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 206,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-blue-900", children: "Active Lists" }, void 0, false, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 216,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-blue-900", children: analytics.totalLists }, void 0, false, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 217,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 215,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 220,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 219,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-green-50 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-green-900", children: "Subscriber Growth" }, void 0, false, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 226,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-green-900", children: [
                    "+",
                    analytics.totalSubscribers
                  ] }, void 0, true, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 227,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 225,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrendingUp, { className: "h-6 w-6 text-green-600" }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 230,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 229,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 224,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-4 bg-purple-50 rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-purple-900", children: "Campaign Success" }, void 0, false, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 236,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-purple-900", children: [
                    analytics.averageDeliveryRate,
                    "%"
                  ] }, void 0, true, {
                    fileName: "app/routes/analytics._index.tsx",
                    lineNumber: 237,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 235,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 bg-purple-100 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 240,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/analytics._index.tsx",
                  lineNumber: 239,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/analytics._index.tsx",
                lineNumber: 234,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 213,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/analytics._index.tsx",
              lineNumber: 212,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/analytics._index.tsx",
            lineNumber: 205,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/analytics._index.tsx",
          lineNumber: 163,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/analytics._index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/analytics._index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/analytics._index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/analytics._index.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Analytics, "4NiK5ZtyiUxbDBXn3gYYa9mm7UA=", false, function() {
  return [useLoaderData];
});
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/analytics._index-H6KKHGPU.js.map
