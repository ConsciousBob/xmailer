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
  CircleCheckBig,
  FileText,
  Upload
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

// app/routes/lists.import.tsx
var import_react = __toESM(require_react(), 1);
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
    window.$RefreshRuntime$.register(type, '"app/routes/lists.import.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/lists.import.tsx"
  );
  import.meta.hot.lastModified = "1754585347714.0654";
}
function ImportCSV() {
  _s();
  const {
    user,
    lists
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [csvData, setCsvData] = (0, import_react.useState)("");
  const [createNewList, setCreateNewList] = (0, import_react.useState)(false);
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCsvData(e.target?.result);
      };
      reader.readAsText(file);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sidebar, {}, void 0, false, {
      fileName: "app/routes/lists.import.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, { user }, void 0, false, {
        fileName: "app/routes/lists.import.tsx",
        lineNumber: 233,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "h-4 w-4 mr-2" }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 240,
              columnNumber: 19
            }, this),
            "Back to Lists"
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Import Recipients from CSV" }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-2", children: "Upload a CSV file to bulk import recipients into your lists." }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 246,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.import.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 256,
                columnNumber: 19
              }, this),
              "CSV Format Requirements"
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 255,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Your CSV file should follow this format" }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 259,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 254,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "text-sm", children: [
              "email,first_name,last_name",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 266,
                columnNumber: 47
              }, this),
              "john@example.com,John,Doe",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 267,
                columnNumber: 46
              }, this),
              "jane@example.com,Jane,Smith",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 268,
                columnNumber: 48
              }, this),
              "bob@example.com,Bob,Johnson"
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 265,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 264,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "Required Columns:" }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 275,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-1 text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                  "\u2022 ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "email" }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 277,
                    columnNumber: 29
                  }, this),
                  " - Must be a valid email address"
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 277,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 276,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 274,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-900 mb-2", children: "Optional Columns:" }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 282,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "space-y-1 text-gray-600", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                    "\u2022 ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "first_name" }, void 0, false, {
                      fileName: "app/routes/lists.import.tsx",
                      lineNumber: 284,
                      columnNumber: 29
                    }, this),
                    " - Recipient's first name"
                  ] }, void 0, true, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 284,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
                    "\u2022 ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "last_name" }, void 0, false, {
                      fileName: "app/routes/lists.import.tsx",
                      lineNumber: 285,
                      columnNumber: 29
                    }, this),
                    " - Recipient's last name"
                  ] }, void 0, true, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 285,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 283,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 281,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 273,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 263,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.import.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "h-5 w-5 mr-2" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 296,
                columnNumber: 19
              }, this),
              "Upload CSV File"
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 295,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Select your CSV file and choose the target list" }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 299,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CSV File" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 307,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "file", accept: ".csv", onChange: handleFileUpload, className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100", required: true }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 310,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-1", children: "Upload a CSV file with your recipient data" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 311,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 306,
              columnNumber: 19
            }, this),
            csvData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CSV Preview (first 5 lines)" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 318,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 p-4 rounded-lg text-sm font-mono", children: [
                csvData.split("\n").slice(0, 5).map((line, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: index === 0 ? "font-bold" : "", children: line }, index, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 322,
                  columnNumber: 79
                }, this)),
                csvData.split("\n").length > 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-gray-500 mt-2", children: [
                  "... and ",
                  csvData.split("\n").length - 5,
                  " more rows"
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 325,
                  columnNumber: 60
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 321,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 317,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "csvData", value: csvData }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 331,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Target List" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 335,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "createNewList", name: "createNewList", checked: createNewList, onChange: (e) => setCreateNewList(e.target.checked), className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 341,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "createNewList", className: "ml-2 text-sm text-gray-700", children: "Create new list" }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 342,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 340,
                  columnNumber: 23
                }, this),
                createNewList ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "newListName", placeholder: "Enter new list name", required: createNewList, className: "w-full" }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 347,
                  columnNumber: 40
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "listId", required: !createNewList, className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select existing list" }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 348,
                    columnNumber: 27
                  }, this),
                  lists.map((list) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: list.id, children: list.name }, list.id, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 349,
                    columnNumber: 46
                  }, this))
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 347,
                  columnNumber: 149
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 339,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 334,
              columnNumber: 19
            }, this),
            actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "h-5 w-5 text-red-400" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 359,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-red-800", children: "Import Failed" }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 361,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-700 mt-1", children: actionData.error }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 362,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 360,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 358,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 357,
              columnNumber: 41
            }, this),
            actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-50 border border-green-200 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "h-5 w-5 text-green-400" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 369,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-medium text-green-800", children: "Import Successful" }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 371,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-green-700 mt-1", children: actionData.success }, void 0, false, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 372,
                  columnNumber: 27
                }, this),
                actionData.errors && actionData.errors.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-sm font-medium text-orange-800", children: "Warnings:" }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 375,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "text-sm text-orange-700 mt-1 list-disc list-inside", children: actionData.errors.map((error, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error }, index, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 377,
                    columnNumber: 74
                  }, this)) }, void 0, false, {
                    fileName: "app/routes/lists.import.tsx",
                    lineNumber: 376,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/lists.import.tsx",
                  lineNumber: 374,
                  columnNumber: 81
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 370,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 368,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 367,
              columnNumber: 43
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: isSubmitting || !csvData, className: "flex-1", children: isSubmitting ? "Importing..." : "Import Recipients" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 385,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/lists", className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", className: "w-full", children: "Cancel" }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 390,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/lists.import.tsx",
                lineNumber: 389,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/lists.import.tsx",
              lineNumber: 384,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 304,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/lists.import.tsx",
            lineNumber: 303,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/lists.import.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/lists.import.tsx",
        lineNumber: 236,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/lists.import.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/lists.import.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/lists.import.tsx",
    lineNumber: 229,
    columnNumber: 10
  }, this);
}
_s(ImportCSV, "mzeM5GtIcVE4i2fyGbCyAufOaAg=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = ImportCSV;
var _c;
$RefreshReg$(_c, "ImportCSV");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ImportCSV as default
};
//# sourceMappingURL=/build/routes/lists.import-D5IZ4DMN.js.map
