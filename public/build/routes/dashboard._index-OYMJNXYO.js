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
  Plus,
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

// app/routes/dashboard._index.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard._index.tsx"
  );
  import.meta.hot.lastModified = "1754586020266.8862";
}
function Dashboard() {
  _s();
  const {
    user,
    stats,
    recentCampaigns
  } = useLoaderData();
  const statCards = [{
    title: "Total Subscribers",
    value: stats.totalSubscribers,
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    href: "/subscribers"
  }, {
    title: "Active Lists",
    value: stats.totalLists,
    icon: Mail,
    color: "bg-green-50 text-green-600",
    href: "/lists"
  }, {
    title: "Campaigns",
    value: stats.totalCampaigns,
    icon: Send,
    color: "bg-purple-50 text-purple-600",
    href: "/campaigns"
  }, {
    title: "Growth Rate",
    value: "+12%",
    icon: TrendingUp,
    color: "bg-orange-50 text-orange-600",
    href: "/analytics"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: [
            "Welcome back, ",
            user.email?.split("@")[0],
            "!"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Here's what's happening with your email campaigns today." }, void 0, false, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 112,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: statCards.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: stat.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "hover:shadow-md transition-shadow cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `p-2 rounded-lg ${stat.color}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(stat.icon, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 124,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 123,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: stat.title }, void 0, false, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 127,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: stat.value }, void 0, false, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 128,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 126,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 122,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 121,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 120,
          columnNumber: 19
        }, this) }, stat.title, false, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 119,
          columnNumber: 38
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Quick Actions" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Get started with common tasks" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 139,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "w-full justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 148,
                  columnNumber: 23
                }, this),
                "Create New Campaign"
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 147,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 146,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/import", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 154,
                  columnNumber: 23
                }, this),
                "Import Subscribers"
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 153,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 152,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 160,
                  columnNumber: 23
                }, this),
                "Create New List"
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 159,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/analytics", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-4 w-4 mr-2" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 166,
                  columnNumber: 23
                }, this),
                "View Analytics"
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 165,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 164,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 145,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Recent Campaigns" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Your latest email campaigns" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 177,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: recentCampaigns.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 183,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "No campaigns yet" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 184,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "Create Your First Campaign" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 186,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 185,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 182,
              columnNumber: 51
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
              recentCampaigns.map((campaign) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900", children: campaign.name }, void 0, false, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 191,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: campaign.subject }, void 0, false, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 192,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 190,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: campaign.status }, void 0, false, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 195,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/campaigns/${campaign.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: "View" }, void 0, false, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 199,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/dashboard._index.tsx",
                    lineNumber: 198,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 194,
                  columnNumber: 27
                }, this)
              ] }, campaign.id, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 189,
                columnNumber: 56
              }, this)),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "View All Campaigns" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 205,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 204,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 203,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 188,
              columnNumber: 30
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 181,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        stats.totalSubscribers === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "border-blue-200 bg-blue-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-blue-900", children: "Getting Started" }, void 0, false, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { className: "text-blue-700", children: "Welcome to xMailer! Here's how to get started with your email marketing." }, void 0, false, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 217,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "1" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 224,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-blue-900", children: "Configure SMTP Settings" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 228,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: "Set up your email sending configuration" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 229,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 227,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings/smtp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", children: "Configure" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 232,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 231,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "2" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 237,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-blue-900", children: "Create Your First List" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 241,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: "Organize your subscribers into targeted lists" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 242,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 240,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists/new", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", children: "Create List" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 245,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 244,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 236,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "3" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 250,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-blue-900", children: "Import Subscribers" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 254,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: "Add your email subscribers to start sending campaigns" }, void 0, false, {
                  fileName: "app/routes/dashboard._index.tsx",
                  lineNumber: 255,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 253,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/subscribers/import", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", children: "Import" }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 258,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard._index.tsx",
                lineNumber: 257,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard._index.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 222,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard._index.tsx",
            lineNumber: 221,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard._index.tsx",
          lineNumber: 214,
          columnNumber: 46
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 99,
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
//# sourceMappingURL=/build/routes/dashboard._index-OYMJNXYO.js.map
