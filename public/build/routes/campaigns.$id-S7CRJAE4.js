import {
  require_email
} from "/build/_shared/chunk-URQB4GZA.js";
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
  BarChart3,
  Clock,
  Mail,
  Play,
  RefreshCw,
  Users
} from "/build/_shared/chunk-R7IN2MRJ.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  require_node
} from "/build/_shared/chunk-TTBB6VK6.js";
import {
  Button,
  formatDate
} from "/build/_shared/chunk-HKIG53IR.js";
import {
  Form,
  Link,
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

// app/routes/campaigns.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_email = __toESM(require_email(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/campaigns.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/campaigns.$id.tsx"
  );
  import.meta.hot.lastModified = "1754586020265.7546";
}
function CampaignDetail() {
  _s();
  const {
    user,
    campaign,
    sending
  } = useLoaderData();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (campaign.status === "sending" || sending) {
      const interval = setInterval(() => {
        setRefreshing(true);
        window.location.reload();
      }, 3e3);
      return () => clearInterval(interval);
    }
  }, [campaign.status, sending]);
  const deliveryRate = campaign.total_recipients > 0 ? Math.round(campaign.sent_count / campaign.total_recipients * 100) : 0;
  const statusColor = {
    draft: "bg-gray-100 text-gray-800",
    sending: "bg-blue-100 text-blue-800",
    sent: "bg-green-100 text-green-800",
    scheduled: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
    partially_sent: "bg-orange-100 text-orange-800"
  }[campaign.status] || "bg-gray-100 text-gray-800";
  const canSendNow = ["draft", "scheduled"].includes(campaign.status);
  const isActive = ["sending"].includes(campaign.status);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/campaigns.$id.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/campaigns.$id.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/campaigns", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            "Back to Campaigns"
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: campaign.name }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: campaign.subject }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 text-sm rounded-full ${statusColor}`, children: [
              campaign.status.replace("_", " "),
              refreshing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "inline h-3 w-3 ml-1 animate-spin" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 143,
                columnNumber: 34
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this),
            canSendNow && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "_action", value: "send_now", className: "bg-green-600 hover:bg-green-700", disabled: navigation.state === "submitting", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Play, { className: "h-4 w-4 mr-2" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 147,
                columnNumber: 23
              }, this),
              navigation.state === "submitting" ? "Starting..." : "Send Now"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 145,
              columnNumber: 32
            }, this),
            campaign.status === "draft" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/campaigns/${campaign.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", children: "Edit Campaign" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 152,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 151,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        (campaign.status === "sending" || sending) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8 border-blue-200 bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 162,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 161,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-blue-900", children: "Campaign is sending..." }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 165,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-blue-700", children: [
              campaign.sent_count,
              " of ",
              campaign.total_recipients,
              " emails sent"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 166,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 164,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 160,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 158,
          columnNumber: 60
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mail, { className: "h-6 w-6 text-blue-600" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 180,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 183,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: campaign.sent_count }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 184,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 178,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Users, { className: "h-6 w-6 text-green-600" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 194,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 193,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Total Recipients" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 197,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: campaign.total_recipients }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 198,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 196,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 192,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 191,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BarChart3, { className: "h-6 w-6 text-purple-600" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 208,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Delivery Rate" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 211,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold text-gray-900", children: [
                deliveryRate,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 212,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 210,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "h-6 w-6 text-orange-600" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 222,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 221,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-600", children: "Status" }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 225,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold text-gray-900 capitalize", children: campaign.status.replace("_", " ") }, void 0, false, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 226,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 224,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 219,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        campaign.total_recipients > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900", children: "Sending Progress" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 239,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: [
              campaign.sent_count,
              " of ",
              campaign.total_recipients,
              " sent"
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 240,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 238,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-3 rounded-full transition-all duration-300 ${campaign.status === "sending" ? "bg-blue-600" : campaign.status === "sent" ? "bg-green-600" : campaign.status === "failed" ? "bg-red-600" : "bg-gray-400"}`, style: {
            width: `${deliveryRate}%`
          } }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 245,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 237,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 236,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Campaign Information" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Campaign Name" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 260,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: campaign.name }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 261,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 259,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Subject Line" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 265,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: campaign.subject }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 266,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 264,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Created" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 270,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: formatDate(campaign.created_at) }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 271,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 269,
                columnNumber: 19
              }, this),
              campaign.scheduled_at && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Scheduled For" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 275,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: formatDate(campaign.scheduled_at) }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 276,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 274,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Last Updated" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 280,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: formatDate(campaign.updated_at) }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 281,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 279,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-medium text-gray-600", children: "Targeting" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 285,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-900", children: campaign.target_all_subscribers ? "All Subscribers" : "Selected Lists" }, void 0, false, {
                  fileName: "app/routes/campaigns.$id.tsx",
                  lineNumber: 286,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/campaigns.$id.tsx",
                lineNumber: 284,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 258,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Email Content Preview" }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 295,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 294,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-sm max-w-none", dangerouslySetInnerHTML: {
              __html: campaign.html_content || "No content available"
            } }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 298,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/campaigns.$id.tsx",
              lineNumber: 297,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/campaigns.$id.tsx",
            lineNumber: 293,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/campaigns.$id.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/campaigns.$id.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/campaigns.$id.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/campaigns.$id.tsx",
      lineNumber: 124,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/campaigns.$id.tsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
}
_s(CampaignDetail, "d9s/2H+8w4l5NmfSJIi8qx19DH8=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = CampaignDetail;
var _c;
$RefreshReg$(_c, "CampaignDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CampaignDetail as default
};
//# sourceMappingURL=/build/routes/campaigns.$id-S7CRJAE4.js.map
