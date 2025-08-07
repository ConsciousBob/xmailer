import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { RemixServer, Outlet, Meta, Links, ScrollRestoration, Scripts, useLocation, Link, Form, useLoaderData, useActionData, useNavigation, useParams, useSearchParams } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { createCookieSessionStorage, redirect, json } from "@remix-run/node";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { Mail, Settings, Server, Home, Users, List, Send, BarChart3, User, LogOut, ArrowLeft, AlertCircle, Save, Plus, Search, ExternalLink, Zap, Trash2, Upload, Download, TrendingUp, Calendar, Bell, Shield, CreditCard, Edit, UserPlus, EyeOff, Eye, RefreshCw, Play, Clock, MoreHorizontal, FileText, CheckCircle, XCircle, UserMinus, Globe, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { useState, useEffect } from "react";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const markup = renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
  );
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("title", { children: "xMailer - Professional Email Marketing Platform" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "xMailer - The ultimate email marketing platform for businesses. Create campaigns, manage recipients, and track performance with ease." }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const __vite_import_meta_env__$1 = { "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SSR": true, "VITE_USER_NODE_ENV": "development" };
const getEnvVar$1 = (name, defaultValue) => {
  var _a, _b;
  let value;
  try {
    value = process.env[name];
  } catch (e) {
    value = ((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b[name]) || (__vite_import_meta_env__$1 == null ? void 0 : __vite_import_meta_env__$1[name]);
  }
  return value || defaultValue;
};
const sessionSecret = getEnvVar$1("SESSION_SECRET", "xmailer-default-session-secret-change-in-production");
console.log("✅ Session configuration loaded");
const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__xmailer_session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    // 30 days
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    secure: false
  }
});
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": true, "MODE": "production", "PROD": false, "SSR": true, "VITE_USER_NODE_ENV": "development" };
const getEnvVar = (name) => {
  var _a, _b;
  let value;
  try {
    value = process.env[name];
  } catch (e) {
    value = ((_b = (_a = globalThis.process) == null ? void 0 : _a.env) == null ? void 0 : _b[name]) || (__vite_import_meta_env__ == null ? void 0 : __vite_import_meta_env__[name]);
  }
  if (!value) {
    console.error(`Missing environment variable: ${name}`);
    console.error("Available process.env keys:", Object.keys(process.env || {}).filter((key) => key.includes("SUPABASE")));
    throw new Error(`${name} environment variable is missing. Please check your .env file and restart the server.`);
  }
  return value;
};
const supabaseUrl = getEnvVar("SUPABASE_URL");
const supabaseServiceKey = getEnvVar("SUPABASE_SERVICE_ROLE_KEY");
console.log("✅ Supabase configuration loaded successfully");
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
supabase.from("profiles").select("count", { count: "exact", head: true }).then(() => console.log("✅ Supabase connection test successful")).catch((error) => console.error("❌ Supabase connection test failed:", error.message));
async function requireAuth(request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) {
    throw redirect("/auth/login");
  }
  const { data: user, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
  if (error || !user) {
    throw redirect("/auth/login");
  }
  return user;
}
async function getUser(request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) {
    return null;
  }
  try {
    const { data: user, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
    if (error || !user) {
      return null;
    }
    return user;
  } catch {
    return null;
  }
}
async function createUserSession(accessToken, refreshToken, redirectTo) {
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) {
    throw redirect("/login?error=Invalid session");
  }
  const session = await getSession();
  session.set("userId", user.id);
  session.set("userEmail", user.email);
  session.set("accessToken", accessToken);
  session.set("refreshToken", refreshToken);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
async function logout(request) {
  const session = await getSession(request.headers.get("Cookie"));
  const accessToken = session.get("accessToken");
  if (accessToken) {
    try {
      await supabase.auth.admin.signOut(accessToken);
    } catch (error) {
      console.error("Error signing out from Supabase:", error);
    }
  }
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}
function validateEmailConfig(config) {
  return config && typeof config.host === "string" && typeof config.port === "number" && config.auth && typeof config.auth.user === "string" && typeof config.auth.pass === "string";
}
async function sendEmailViaPostmarkAPI(apiToken, message, fromEmail) {
  try {
    const response = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": apiToken
      },
      body: JSON.stringify({
        From: fromEmail,
        To: message.to,
        Subject: message.subject,
        HtmlBody: message.html,
        TextBody: message.text || message.html.replace(/<[^>]*>/g, ""),
        MessageStream: "outbound"
      })
    });
    const result = await response.json();
    if (response.ok) {
      return {
        success: true,
        messageId: result.MessageID
      };
    } else {
      return {
        success: false,
        error: result.Message || "Failed to send email via Postmark API"
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error"
    };
  }
}
async function testPostmarkAPI(apiToken) {
  try {
    const response = await fetch("https://api.postmarkapp.com/server", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "X-Postmark-Server-Token": apiToken
      }
    });
    if (response.ok) {
      const result = await response.json();
      return {
        success: true
      };
    } else {
      const error = await response.json();
      return {
        success: false,
        error: error.Message || "Invalid API token or server error"
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error"
    };
  }
}
function createTransporter(config) {
  if (!validateEmailConfig(config)) {
    throw new Error("Invalid email configuration: missing required fields (host, port, auth.user, auth.pass)");
  }
  const transporterConfig = {
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass
    },
    // Reduced timeouts for WebContainer
    connectionTimeout: 5e3,
    // 5 seconds
    greetingTimeout: 3e3,
    // 3 seconds
    socketTimeout: 5e3,
    // 5 seconds
    // Disable pooling to avoid connection issues
    pool: false,
    // More lenient TLS settings
    tls: {
      rejectUnauthorized: false,
      ciphers: "SSLv3"
    },
    // Disable some features that might cause issues
    disableFileAccess: true,
    disableUrlAccess: true
  };
  return nodemailer.createTransport(transporterConfig);
}
async function sendEmail(config, message, fromEmail) {
  if (config.host === "smtp.postmarkapp.com") {
    console.log("Attempting to send via Postmark API...");
    const apiResult = await sendEmailViaPostmarkAPI(config.auth.user, message, fromEmail);
    if (apiResult.success) {
      return apiResult;
    }
    console.log("Postmark API failed, falling back to SMTP:", apiResult.error);
  }
  let transporter = null;
  try {
    if (!validateEmailConfig(config)) {
      throw new Error("Invalid email configuration");
    }
    if (!message.to || !message.subject || !message.html) {
      throw new Error("Missing required email fields: to, subject, or content");
    }
    transporter = createTransporter(config);
    console.log("Sending email via SMTP...");
    const result = await transporter.sendMail({
      from: fromEmail,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text || message.html.replace(/<[^>]*>/g, "")
    });
    console.log("Email sent successfully via SMTP:", result.messageId);
    return {
      success: true,
      messageId: result.messageId
    };
  } catch (error) {
    console.error("Failed to send email via SMTP:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
}
async function testSMTPConnection(config) {
  if (config.host === "smtp.postmarkapp.com") {
    console.log("Testing Postmark API connection...");
    return await testPostmarkAPI(config.auth.user);
  }
  let transporter = null;
  try {
    if (!validateEmailConfig(config)) {
      return {
        success: false,
        error: "Invalid configuration: missing required fields"
      };
    }
    transporter = createTransporter(config);
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Connection timeout after 8 seconds")), 8e3);
    });
    await Promise.race([verifyPromise, timeoutPromise]);
    return { success: true };
  } catch (error) {
    console.error("SMTP connection test failed:", error);
    let errorMessage = "Connection failed";
    if (error instanceof Error) {
      if (error.message.includes("ETIMEDOUT") || error.message.includes("Greeting never received")) {
        errorMessage = "Connection timeout - this may be due to network restrictions in the current environment";
      } else {
        errorMessage = error.message;
      }
    }
    return {
      success: false,
      error: errorMessage
    };
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
}
async function sendTestEmail(config, fromEmail, toEmail) {
  const testMessage = {
    to: toEmail,
    subject: "Test Email from xMailer",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Test Email from xMailer</h2>
        <p>This is a test email sent from xMailer to verify your email configuration.</p>
        <p>If you received this email, your email settings are working correctly! 🎉</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 14px;">
          <strong>Sent at:</strong> ${(/* @__PURE__ */ new Date()).toISOString()}<br>
          <strong>From:</strong> ${fromEmail}<br>
          <strong>To:</strong> ${toEmail}
        </p>
      </div>
    `,
    text: `Test Email from xMailer

This is a test email sent from xMailer to verify your email configuration.

If you received this email, your email settings are working correctly!

Sent at: ${(/* @__PURE__ */ new Date()).toISOString()}
From: ${fromEmail}
To: ${toEmail}`
  };
  return await sendEmail(config, testMessage, fromEmail);
}
async function processCampaign(campaignId, campaign, config) {
  console.log(`Starting campaign processing for: ${campaign.name} (${campaignId})`);
  let sentCount = 0;
  let failedCount = 0;
  const errors = [];
  if (!campaign.recipients || campaign.recipients.length === 0) {
    return {
      success: false,
      sentCount: 0,
      failedCount: 0,
      errors: ["No recipients found for campaign"]
    };
  }
  if (!campaign.subject || !campaign.content) {
    return {
      success: false,
      sentCount: 0,
      failedCount: 0,
      errors: ["Campaign subject or content is missing"]
    };
  }
  for (const recipient of campaign.recipients) {
    try {
      if (!recipient || !recipient.includes("@")) {
        failedCount++;
        errors.push(`Invalid email address: ${recipient}`);
        continue;
      }
      const message = {
        to: recipient,
        subject: campaign.subject,
        html: campaign.content,
        text: campaign.content.replace(/<[^>]*>/g, "")
        // Strip HTML for text version
      };
      const result = await sendEmail(config, message, campaign.fromEmail);
      if (result.success) {
        sentCount++;
        console.log(`Email sent successfully to ${recipient}: ${result.messageId}`);
      } else {
        failedCount++;
        errors.push(`Failed to send to ${recipient}: ${result.error}`);
        console.error(`Failed to send to ${recipient}:`, result.error);
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      failedCount++;
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      errors.push(`Error sending to ${recipient}: ${errorMessage}`);
      console.error(`Error sending to ${recipient}:`, error);
    }
  }
  const success = sentCount > 0 && failedCount === 0;
  console.log(`Campaign processing completed: ${sentCount} sent, ${failedCount} failed`);
  return {
    success,
    sentCount,
    failedCount,
    errors
  };
}
async function action$h({ request, params }) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }
  await requireAuth(request);
  const campaignId = params.id;
  if (!campaignId) {
    return json({ error: "Campaign ID required" }, { status: 400 });
  }
  try {
    processCampaign(campaignId).catch(console.error);
    return json({ success: true, message: "Campaign sending started" });
  } catch (error) {
    console.error("Error starting campaign:", error);
    return json({ error: "Failed to start campaign" }, { status: 500 });
  }
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$h
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Subscribers", href: "/subscribers", icon: Users },
  { name: "Lists", href: "/lists", icon: List },
  { name: "Campaigns", href: "/campaigns", icon: Send },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings }
];
const settingsNavigation = [
  { name: "General", href: "/settings", icon: Settings },
  { name: "SMTP Config", href: "/settings/smtp", icon: Server }
];
function Sidebar() {
  const location = useLocation();
  const isSettingsPage = location.pathname.startsWith("/settings");
  const currentNavigation = isSettingsPage ? settingsNavigation : navigation;
  return /* @__PURE__ */ jsx("div", { className: "w-64 bg-gray-800 flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col min-h-0", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center flex-shrink-0 px-4", children: [
      /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-white" }),
      /* @__PURE__ */ jsx("span", { className: "ml-2 text-xl font-bold text-white", children: "xMailer" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "mt-8 flex-1 px-2 space-y-1", children: currentNavigation.map((item) => {
      const isActive = location.pathname === item.href;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.href,
          className: cn(
            isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          ),
          children: [
            /* @__PURE__ */ jsx(
              item.icon,
              {
                className: cn(
                  isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                ),
                "aria-hidden": "true"
              }
            ),
            item.name
          ]
        },
        item.name
      );
    }) })
  ] }) }) });
}
const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
            "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "text-primary underline-offset-4 hover:underline": variant === "link"
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon"
          },
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
function Logo({ variant = "dark", size = "md", className }) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  };
  const colorClasses = {
    light: "text-white",
    dark: "text-gray-900"
  };
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center font-bold", sizeClasses[size], colorClasses[variant], className), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "relative mr-2", children: /* @__PURE__ */ jsx("div", { className: cn(
      "w-8 h-6 border-2 rounded-sm relative",
      variant === "light" ? "border-white" : "border-blue-600"
    ), children: /* @__PURE__ */ jsx("div", { className: cn(
      "absolute inset-x-0 top-0 h-0 border-l-4 border-r-4 border-t-3",
      variant === "light" ? "border-l-transparent border-r-transparent border-t-white" : "border-l-transparent border-r-transparent border-t-blue-600"
    ), style: {
      left: "50%",
      transform: "translateX(-50%)",
      borderTopWidth: "12px",
      borderLeftWidth: "16px",
      borderRightWidth: "16px"
    } }) }) }),
    /* @__PURE__ */ jsxs("span", { className: "tracking-tight", children: [
      /* @__PURE__ */ jsx("span", { className: variant === "light" ? "text-white" : "text-blue-600", children: "x" }),
      /* @__PURE__ */ jsx("span", { className: variant === "light" ? "text-white" : "text-gray-900", children: "Mailer" })
    ] })
  ] }) });
}
function Header({ user, showLogo = false }) {
  var _a;
  return /* @__PURE__ */ jsx("header", { className: "bg-white border-b border-gray-200 px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      showLogo && /* @__PURE__ */ jsx(Logo, { variant: "dark", size: "md" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Email Autoresponder" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      user && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { children: ((_a = user.user_metadata) == null ? void 0 : _a.full_name) || user.email })
      ] }),
      /* @__PURE__ */ jsx(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4 mr-2" }),
        "Logout"
      ] }) })
    ] })
  ] }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
async function loader$q({ request, params }) {
  const user = await requireAuth(request);
  const subscriberId = params.id;
  if (!subscriberId) {
    throw new Response("Subscriber ID required", { status: 400 });
  }
  const { data: subscriber, error: subscriberError } = await supabase.from("subscribers").select("*").eq("id", subscriberId).eq("user_id", user.id).single();
  if (subscriberError || !subscriber) {
    console.error("Subscriber fetch error:", subscriberError);
    throw new Response("Subscriber not found", { status: 404 });
  }
  const { data: currentLists, error: currentListsError } = await supabase.from("list_subscribers").select("list_id, status").eq("subscriber_id", subscriberId);
  if (currentListsError) {
    console.error("Current lists fetch error:", currentListsError);
  }
  const { data: allLists, error: listsError } = await supabase.from("lists").select("*").eq("user_id", user.id).eq("is_active", true).order("name");
  if (listsError) {
    console.error("All lists fetch error:", listsError);
    return json({
      user,
      subscriber,
      allLists: [],
      currentListIds: [],
      error: "Failed to load lists"
    });
  }
  const currentListIds = (currentLists == null ? void 0 : currentLists.map((cl) => cl.list_id)) || [];
  return json({
    user,
    subscriber,
    allLists: allLists || [],
    currentListIds,
    error: null
  });
}
async function action$g({ request, params }) {
  const user = await requireAuth(request);
  const subscriberId = params.id;
  const formData = await request.formData();
  if (!subscriberId) {
    return json({ error: "Subscriber ID required" }, { status: 400 });
  }
  const { data: existingSubscriber, error: verifyError } = await supabase.from("subscribers").select("*").eq("id", subscriberId).eq("user_id", user.id).single();
  if (verifyError || !existingSubscriber) {
    console.error("Subscriber verification error:", verifyError);
    return json({ error: "Subscriber not found or access denied" }, { status: 404 });
  }
  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const status = formData.get("status");
  const selectedLists = formData.getAll("lists");
  console.log("Form data received:", {
    email,
    firstName,
    lastName,
    status,
    selectedLists
  });
  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }
  const { data: emailCheck, error: emailCheckError } = await supabase.from("subscribers").select("id").eq("user_id", user.id).eq("email", email).neq("id", subscriberId);
  if (emailCheckError) {
    console.error("Email check error:", emailCheckError);
    return json({ error: "Failed to validate email" }, { status: 500 });
  }
  if (emailCheck && emailCheck.length > 0) {
    return json({ error: "Another subscriber with this email already exists" }, { status: 400 });
  }
  try {
    const updateData = {
      email,
      first_name: firstName || "",
      last_name: lastName || "",
      status,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (status === "subscribed" && existingSubscriber.status !== "subscribed") {
      updateData.subscribed_at = (/* @__PURE__ */ new Date()).toISOString();
      updateData.unsubscribed_at = null;
    } else if (status === "unsubscribed" && existingSubscriber.status !== "unsubscribed") {
      updateData.unsubscribed_at = (/* @__PURE__ */ new Date()).toISOString();
    }
    const { error: updateError } = await supabase.from("subscribers").update(updateData).eq("id", subscriberId);
    if (updateError) {
      console.error("Subscriber update error:", updateError);
      return json({ error: "Failed to update subscriber: " + updateError.message }, { status: 500 });
    }
    const { data: currentSubs } = await supabase.from("list_subscribers").select("list_id").eq("subscriber_id", subscriberId);
    const currentListIds = (currentSubs == null ? void 0 : currentSubs.map((cs) => cs.list_id)) || [];
    const toRemove = currentListIds.filter((listId) => !selectedLists.includes(listId));
    if (toRemove.length > 0) {
      const { error: removeError } = await supabase.from("list_subscribers").delete().eq("subscriber_id", subscriberId).in("list_id", toRemove);
      if (removeError) {
        console.error("Remove subscriptions error:", removeError);
      }
    }
    const toAdd = selectedLists.filter((listId) => !currentListIds.includes(listId));
    if (toAdd.length > 0) {
      const newSubscriptions = toAdd.map((listId) => ({
        subscriber_id: subscriberId,
        list_id: listId,
        status: status === "subscribed" ? "subscribed" : "unsubscribed",
        subscribed_at: status === "subscribed" ? (/* @__PURE__ */ new Date()).toISOString() : null,
        unsubscribed_at: status === "unsubscribed" ? (/* @__PURE__ */ new Date()).toISOString() : null
      }));
      const { error: addError } = await supabase.from("list_subscribers").insert(newSubscriptions);
      if (addError) {
        console.error("Add subscriptions error:", addError);
        return json({ error: "Failed to update list subscriptions: " + addError.message }, { status: 500 });
      }
    }
    const toUpdate = selectedLists.filter((listId) => currentListIds.includes(listId));
    if (toUpdate.length > 0) {
      const { error: updateSubsError } = await supabase.from("list_subscribers").update({
        status: status === "subscribed" ? "subscribed" : "unsubscribed",
        subscribed_at: status === "subscribed" ? (/* @__PURE__ */ new Date()).toISOString() : null,
        unsubscribed_at: status === "unsubscribed" ? (/* @__PURE__ */ new Date()).toISOString() : null,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("subscriber_id", subscriberId).in("list_id", toUpdate);
      if (updateSubsError) {
        console.error("Update subscriptions error:", updateSubsError);
      }
    }
    return redirect("/subscribers");
  } catch (error) {
    console.error("Action error:", error);
    return json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
function EditSubscriber() {
  const { user, subscriber, allLists, currentListIds, error } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  console.log("Loader data:", { subscriber, allLists, currentListIds });
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Subscribers"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Edit Subscriber" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Update subscriber information and list memberships." })
          ] })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-red-600 mr-2" }),
          /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error })
        ] }) }),
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex items-center", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-red-600 mr-2" }),
          /* @__PURE__ */ jsx("p", { className: "text-red-800", children: actionData.error })
        ] }) }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Subscriber Information" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Update the subscriber's details and manage their list subscriptions." })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email",
                  type: "email",
                  defaultValue: subscriber.email,
                  required: true,
                  className: "w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "firstName",
                    defaultValue: subscriber.first_name || "",
                    className: "w-full"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "lastName",
                    defaultValue: subscriber.last_name || "",
                    className: "w-full"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Status" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "status",
                  defaultValue: subscriber.status,
                  className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "subscribed", children: "Subscribed" }),
                    /* @__PURE__ */ jsx("option", { value: "unsubscribed", children: "Unsubscribed" }),
                    /* @__PURE__ */ jsx("option", { value: "pending", children: "Pending" })
                  ]
                }
              )
            ] }),
            allLists && allLists.length > 0 ? /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: [
                "List Memberships (",
                allLists.length,
                " lists available)"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-64 overflow-y-auto border rounded-lg p-4 bg-gray-50", children: allLists.map((list) => {
                const isChecked = currentListIds.includes(list.id);
                return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-2 bg-white rounded border", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: `list-${list.id}`,
                      name: "lists",
                      value: list.id,
                      defaultChecked: isChecked,
                      className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: `list-${list.id}`, className: "flex-1 text-sm text-gray-700 cursor-pointer", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded-full mr-3",
                        style: { backgroundColor: list.color }
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium", children: list.name }),
                      list.description && /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs", children: list.description })
                    ] })
                  ] }) }),
                  isChecked && /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded", children: "Current Member" })
                ] }, list.id);
              }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Select which lists this subscriber should be a member of." })
            ] }) : /* @__PURE__ */ jsx(Card, { className: "border-yellow-200 bg-yellow-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-yellow-800 mb-2", children: "No lists available" }),
              /* @__PURE__ */ jsx("p", { className: "text-yellow-700 text-sm", children: "Create some lists first to organize your subscribers." }),
              /* @__PURE__ */ jsx(Link, { to: "/lists/new", className: "inline-block mt-2", children: /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", children: "Create Your First List" }) })
            ] }) }),
            /* @__PURE__ */ jsx(Card, { className: "bg-gray-100", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Debug Info:" }),
              /* @__PURE__ */ jsx("pre", { className: "text-xs", children: JSON.stringify({
                subscriberId: subscriber.id,
                currentListIds,
                totalLists: (allLists == null ? void 0 : allLists.length) || 0
              }, null, 2) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsx(Save, { className: "h-4 w-4 mr-2" }),
                    isSubmitting ? "Saving Changes..." : "Save Changes"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Link, { to: "/subscribers", className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$g,
  default: EditSubscriber,
  loader: loader$q
}, Symbol.toStringTag, { value: "Module" }));
async function loader$p({ request }) {
  const user = await requireAuth(request);
  const { data: subscribers, error } = await supabase.from("subscribers").select(`
      *,
      list_subscribers(
        list_id,
        status,
        lists(name, color)
      )
    `).eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    console.error("Subscribers fetch error:", error);
    return json({ user, subscribers: [], error: "Failed to load subscribers" });
  }
  return json({ user, subscribers });
}
function Subscribers() {
  const { user, subscribers, error } = useLoaderData();
  const formatDate2 = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "subscribed":
        return "bg-green-100 text-green-800";
      case "unsubscribed":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Subscribers" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Manage your email subscribers and their preferences." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
            /* @__PURE__ */ jsx(Link, { to: "/subscribers/import", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Import Subscribers"
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/subscribers/new", children: /* @__PURE__ */ jsxs(Button, { children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Subscriber"
            ] }) })
          ] })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Search subscribers by email or name...",
                className: "pl-10"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Filter" })
        ] }) }) }),
        subscribers.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No subscribers yet" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Start building your audience by adding your first subscriber." }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-3", children: [
            /* @__PURE__ */ jsx(Link, { to: "/subscribers/new", children: /* @__PURE__ */ jsxs(Button, { children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Subscriber"
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/subscribers/import", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Import from CSV" }) })
          ] })
        ] }) }) : /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { children: [
              "All Subscribers (",
              subscribers.length,
              ")"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Manage and view all your email subscribers" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Subscriber" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Lists" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Subscribed" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: subscribers.map((subscriber) => {
              var _a, _b;
              return /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-medium text-gray-900", children: [
                    subscriber.first_name,
                    " ",
                    subscriber.last_name
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: subscriber.email })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`, children: subscriber.status }) }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
                  (_a = subscriber.list_subscribers) == null ? void 0 : _a.slice(0, 3).map((ls) => {
                    var _a2, _b2;
                    return /* @__PURE__ */ jsxs(
                      "span",
                      {
                        className: "inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800",
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: "w-2 h-2 rounded-full mr-1",
                              style: { backgroundColor: ((_a2 = ls.lists) == null ? void 0 : _a2.color) || "#gray" }
                            }
                          ),
                          ((_b2 = ls.lists) == null ? void 0 : _b2.name) || "Unknown"
                        ]
                      },
                      ls.list_id
                    );
                  }),
                  ((_b = subscriber.list_subscribers) == null ? void 0 : _b.length) > 3 && /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-500", children: [
                    "+",
                    subscriber.list_subscribers.length - 3,
                    " more"
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-600", children: formatDate2(subscriber.created_at) }),
                /* @__PURE__ */ jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                  /* @__PURE__ */ jsx(Link, { to: `/subscribers/${subscriber.id}`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) }),
                  /* @__PURE__ */ jsx(Link, { to: `/subscribers/${subscriber.id}/edit`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Edit" }) })
                ] }) })
              ] }, subscriber.id);
            }) })
          ] }) }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Subscribers,
  loader: loader$p
}, Symbol.toStringTag, { value: "Module" }));
async function loader$o({ request }) {
  const user = await requireAuth(request);
  const { data: emailApis, error } = await supabase.from("email_apis").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    throw new Error("Failed to load email APIs");
  }
  return json({ user, emailApis });
}
async function action$f({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const action2 = formData.get("_action");
  if (action2 === "create") {
    const name = formData.get("name");
    const provider = formData.get("provider");
    const apiKey = formData.get("apiKey");
    if (!name || !provider || !apiKey) {
      return json({ error: "All fields are required" }, { status: 400 });
    }
    const { error } = await supabase.from("email_apis").insert({
      user_id: user.id,
      name,
      provider,
      api_key: apiKey,
      is_active: true
    });
    if (error) {
      return json({ error: "Failed to create email API configuration" }, { status: 500 });
    }
    return json({ success: true });
  }
  if (action2 === "delete") {
    const apiId = formData.get("apiId");
    const { error } = await supabase.from("email_apis").delete().eq("id", apiId).eq("user_id", user.id);
    if (error) {
      return json({ error: "Failed to delete email API configuration" }, { status: 500 });
    }
    return json({ success: true });
  }
  if (action2 === "toggle") {
    const apiId = formData.get("apiId");
    const isActive = formData.get("isActive") === "true";
    const { error } = await supabase.from("email_apis").update({ is_active: !isActive, updated_at: (/* @__PURE__ */ new Date()).toISOString() }).eq("id", apiId).eq("user_id", user.id);
    if (error) {
      return json({ error: "Failed to update email API status" }, { status: 500 });
    }
    return json({ success: true });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
const emailProviders = [
  {
    id: "sendgrid",
    name: "SendGrid",
    description: "Reliable email delivery service with excellent deliverability",
    setupUrl: "https://app.sendgrid.com/settings/api_keys",
    logo: "📧"
  },
  {
    id: "mailgun",
    name: "Mailgun",
    description: "Powerful email API for developers",
    setupUrl: "https://app.mailgun.com/app/account/security/api_keys",
    logo: "🔫"
  },
  {
    id: "postmark",
    name: "Postmark",
    description: "Fast and reliable transactional email service",
    setupUrl: "https://account.postmarkapp.com/api_tokens",
    logo: "📮"
  },
  {
    id: "ses",
    name: "Amazon SES",
    description: "Cost-effective email service from AWS",
    setupUrl: "https://console.aws.amazon.com/ses/",
    logo: "☁️"
  }
];
function EmailAPIs() {
  const { user, emailApis } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Email APIs" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Configure email service providers to send your campaigns through their APIs." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Available Email Providers" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Choose from popular email service providers" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: emailProviders.map((provider) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-2xl mr-3", children: provider.logo }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: provider.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: provider.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: provider.setupUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-600 hover:text-blue-500",
                    children: /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
                  }
                )
              ] })
            },
            provider.id
          )) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5 mr-2" }),
              "Add Email API"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Configure a new email service provider" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "create" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuration Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "name",
                    placeholder: "e.g., SendGrid Production",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Provider" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    name: "provider",
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                    required: true,
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Provider" }),
                      emailProviders.map((provider) => /* @__PURE__ */ jsx("option", { value: provider.id, children: provider.name }, provider.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "API Key" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "apiKey",
                    type: "password",
                    placeholder: "Your API key",
                    required: true
                  }
                )
              ] })
            ] }),
            (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm", children: actionData.error }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Email API" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Your Email API Configurations" }),
          emailApis.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "text-center py-8", children: [
            /* @__PURE__ */ jsx(Zap, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No email APIs configured yet. Add one above to get started." })
          ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: emailApis.map((api) => {
            var _a;
            return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50 mr-4", children: /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-blue-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: api.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: ((_a = emailProviders.find((p) => p.id === api.provider)) == null ? void 0 : _a.name) || api.provider }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-2", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `px-2 py-1 text-xs rounded-full ${api.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                        children: api.is_active ? "Active" : "Inactive"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "ml-2 text-xs text-gray-500", children: [
                      "API Key: ****",
                      api.api_key.slice(-4)
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "toggle" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "apiId", value: api.id }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "isActive", value: api.is_active }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      variant: "outline",
                      size: "sm",
                      children: api.is_active ? "Deactivate" : "Activate"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "delete" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "apiId", value: api.id }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      variant: "outline",
                      size: "sm",
                      className: "text-red-600 hover:text-red-700",
                      children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] })
            ] }) }) }, api.id);
          }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$f,
  default: EmailAPIs,
  loader: loader$o
}, Symbol.toStringTag, { value: "Module" }));
async function loader$n({ request }) {
  const user = await requireAuth(request);
  const { data: subscribers, error } = await supabase.from("subscribers").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    throw new Error("Failed to load subscribers");
  }
  const stats = {
    total: subscribers.length,
    subscribed: subscribers.filter((s) => s.status === "subscribed").length,
    unsubscribed: subscribers.filter((s) => s.status === "unsubscribed").length
  };
  return json({ user, subscribers, stats });
}
async function action$e({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const action2 = formData.get("_action");
  if (action2 === "add") {
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    formData.get("tags");
    if (!email) {
      return json({ error: "Email is required" }, { status: 400 });
    }
    const { error } = await supabase.from("subscribers").insert({
      user_id: user.id,
      email,
      first_name: firstName || null,
      last_name: lastName || null,
      status: "subscribed"
    });
    if (error) {
      if (error.code === "23505") {
        return json({ error: "Email already exists" }, { status: 400 });
      }
      return json({ error: "Failed to add recipient" }, { status: 500 });
    }
    return json({ success: true });
  }
  if (action2 === "delete") {
    const subscriberId = formData.get("subscriberId");
    const { error } = await supabase.from("subscribers").delete().eq("id", subscriberId).eq("user_id", user.id);
    if (error) {
      return json({ error: "Failed to delete recipient" }, { status: 500 });
    }
    return json({ success: true });
  }
  if (action2 === "toggle-subscription") {
    const subscriberId = formData.get("subscriberId");
    const currentStatus = formData.get("status");
    const newStatus = currentStatus === "subscribed" ? "unsubscribed" : "subscribed";
    const { error } = await supabase.from("subscribers").update({
      status: newStatus,
      unsubscribed_at: newStatus === "unsubscribed" ? (/* @__PURE__ */ new Date()).toISOString() : null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", subscriberId).eq("user_id", user.id);
    if (error) {
      return json({ error: "Failed to update subscription" }, { status: 500 });
    }
    return json({ success: true });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
function Recipients() {
  const { user, subscribers, stats } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Recipients" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Manage your email recipient lists and subscriptions." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
              /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4 mr-2" }),
              "Import CSV"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
              "Export"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Recipients" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.total })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Subscribed" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.subscribed })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-red-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-red-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Unsubscribed" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.unsubscribed })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5 mr-2" }),
              "Add New Recipient"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Add individual recipients to your email list" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "add" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "email",
                    type: "email",
                    placeholder: "john@example.com",
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "firstName",
                    placeholder: "John"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "lastName",
                    placeholder: "Doe"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Tags (comma-separated)" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "tags",
                    placeholder: "newsletter, customer"
                  }
                )
              ] })
            ] }),
            (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm", children: actionData.error }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Recipient" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "All Recipients" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Manage your email recipients and their subscription status" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: subscribers.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsx(Users, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No recipients yet. Add some recipients to get started." })
          ] }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Email" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Name" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Tags" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }),
              /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: subscribers.map((subscriber) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-900", children: subscriber.email }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-600", children: [subscriber.first_name, subscriber.last_name].filter(Boolean).join(" ") || "-" }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "-" }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsx(
                "span",
                {
                  className: `px-2 py-1 text-xs rounded-full ${subscriber.status === "subscribed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                  children: subscriber.status === "subscribed" ? "Subscribed" : "Unsubscribed"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "toggle-subscription" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "subscriberId", value: subscriber.id }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "status", value: subscriber.status }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      variant: "outline",
                      size: "sm",
                      children: subscriber.status === "subscribed" ? "Unsubscribe" : "Subscribe"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "delete" }),
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "subscriberId", value: subscriber.id }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      variant: "outline",
                      size: "sm",
                      className: "text-red-600 hover:text-red-700",
                      children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                    }
                  )
                ] })
              ] }) })
            ] }, subscriber.id)) })
          ] }) }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$e,
  default: Recipients,
  loader: loader$n
}, Symbol.toStringTag, { value: "Module" }));
async function loader$m({ request }) {
  const user = await requireAuth(request);
  const [
    { count: totalSubscribers },
    { count: totalCampaigns },
    { data: campaigns },
    { count: totalLists }
  ] = await Promise.all([
    supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("status", "subscribed"),
    supabase.from("campaigns").select("*", { count: "exact", head: true }).eq("user_id", user.id),
    supabase.from("campaigns").select("sent_count, total_recipients, status, created_at").eq("user_id", user.id).order("created_at", { ascending: false }),
    supabase.from("lists").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("is_active", true)
  ]);
  const totalEmailsSent = (campaigns == null ? void 0 : campaigns.reduce((sum, campaign) => sum + (campaign.sent_count || 0), 0)) || 0;
  const campaignsWithRecipients = (campaigns == null ? void 0 : campaigns.filter((c) => c.total_recipients > 0)) || [];
  const averageDeliveryRate = campaignsWithRecipients.length > 0 ? campaignsWithRecipients.reduce(
    (sum, campaign) => sum + (campaign.sent_count || 0) / campaign.total_recipients * 100,
    0
  ) / campaignsWithRecipients.length : 0;
  return json({
    user,
    analytics: {
      totalSubscribers: totalSubscribers || 0,
      totalCampaigns: totalCampaigns || 0,
      totalEmailsSent,
      averageDeliveryRate: Math.round(averageDeliveryRate),
      totalLists: totalLists || 0
    },
    campaigns: campaigns || []
  });
}
function Analytics() {
  const { user, analytics, campaigns } = useLoaderData();
  const formatDate2 = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Analytics" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Track your email marketing performance and subscriber growth." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Subscribers" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalSubscribers })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Send, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Campaigns Sent" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalCampaigns })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: analytics.totalEmailsSent })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6 text-orange-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Avg. Delivery Rate" }),
              /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
                analytics.averageDeliveryRate,
                "%"
              ] })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Recent Campaign Performance" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Delivery rates for your recent campaigns" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: campaigns.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No campaign data yet" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Send your first campaign to see analytics" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: campaigns.slice(0, 5).map((campaign, index) => {
              const deliveryRate = campaign.total_recipients > 0 ? Math.round(campaign.sent_count / campaign.total_recipients * 100) : 0;
              return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-900", children: [
                    "Campaign ",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
                    deliveryRate,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-blue-600 h-2 rounded-full",
                    style: { width: `${deliveryRate}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    campaign.sent_count || 0,
                    " sent"
                  ] }),
                  /* @__PURE__ */ jsx("span", { children: formatDate2(campaign.created_at) })
                ] })
              ] }) }, index);
            }) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Growth Overview" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Your email marketing growth summary" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-900", children: "Active Lists" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-900", children: analytics.totalLists })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-blue-600" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-green-50 rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-green-900", children: "Subscriber Growth" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-green-900", children: [
                    "+",
                    analytics.totalSubscribers
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6 text-green-600" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-purple-50 rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-purple-900", children: "Campaign Success" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-purple-900", children: [
                    analytics.averageDeliveryRate,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-100 rounded-lg", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-600" }) })
              ] })
            ] }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Analytics,
  loader: loader$m
}, Symbol.toStringTag, { value: "Module" }));
async function loader$l({ request }) {
  const user = await requireAuth(request);
  const { data: campaigns, error } = await supabase.from("campaigns").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    throw new Error("Failed to load campaigns");
  }
  return json({ user, campaigns });
}
function Campaigns() {
  const { user, campaigns } = useLoaderData();
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Campaigns" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Manage your email campaigns and track their performance." })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/campaigns/new", children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "New Campaign"
          ] }) })
        ] }),
        campaigns.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No campaigns yet" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Create your first email campaign to start reaching your audience." }),
          /* @__PURE__ */ jsx(Link, { to: "/campaigns/new", children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Create Campaign"
          ] }) })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: campaigns.map((campaign) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: campaign.name }),
              /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", children: campaign.subject })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `px-3 py-1 text-sm rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`,
                children: campaign.status
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  campaign.sent_count || 0,
                  " / ",
                  campaign.total_recipients || 0,
                  " sent"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Created ",
                  formatDate(campaign.created_at)
                ] })
              ] }),
              campaign.scheduled_at && /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Scheduled ",
                  formatDate(campaign.scheduled_at)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2 mr-4", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                  style: {
                    width: `${campaign.total_recipients > 0 ? (campaign.sent_count || 0) / campaign.total_recipients * 100 : 0}%`
                  }
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
                /* @__PURE__ */ jsx(Link, { to: `/campaigns/${campaign.id}`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) }),
                campaign.status === "draft" && /* @__PURE__ */ jsx(Link, { to: `/campaigns/${campaign.id}/edit`, children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Edit" }) })
              ] })
            ] })
          ] })
        ] }, campaign.id)) })
      ] }) })
    ] })
  ] });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Campaigns,
  loader: loader$l
}, Symbol.toStringTag, { value: "Module" }));
async function loader$k({ request }) {
  const user = await requireAuth(request);
  const [
    { count: totalSubscribers },
    { count: totalLists },
    { count: totalCampaigns },
    { data: recentCampaigns }
  ] = await Promise.all([
    supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("status", "subscribed"),
    supabase.from("lists").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("is_active", true),
    supabase.from("campaigns").select("*", { count: "exact", head: true }).eq("user_id", user.id),
    supabase.from("campaigns").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(5)
  ]);
  return json({
    user,
    stats: {
      totalSubscribers: totalSubscribers || 0,
      totalLists: totalLists || 0,
      totalCampaigns: totalCampaigns || 0
    },
    recentCampaigns: recentCampaigns || []
  });
}
function Dashboard$1() {
  var _a;
  const { user, stats, recentCampaigns } = useLoaderData();
  const statCards = [
    {
      title: "Total Subscribers",
      value: stats.totalSubscribers,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
      href: "/subscribers"
    },
    {
      title: "Active Lists",
      value: stats.totalLists,
      icon: Mail,
      color: "bg-green-50 text-green-600",
      href: "/lists"
    },
    {
      title: "Campaigns",
      value: stats.totalCampaigns,
      icon: Send,
      color: "bg-purple-50 text-purple-600",
      href: "/campaigns"
    },
    {
      title: "Growth Rate",
      value: "+12%",
      icon: TrendingUp,
      color: "bg-orange-50 text-orange-600",
      href: "/analytics"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900", children: [
            "Welcome back, ",
            (_a = user.email) == null ? void 0 : _a.split("@")[0],
            "!"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Here's what's happening with your email campaigns today." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: statCards.map((stat) => /* @__PURE__ */ jsx(Link, { to: stat.href, children: /* @__PURE__ */ jsx(Card, { className: "hover:shadow-md transition-shadow cursor-pointer", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg ${stat.color}`, children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: stat.title }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stat.value })
          ] })
        ] }) }) }) }, stat.title)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Quick Actions" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Get started with common tasks" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/campaigns/new", children: /* @__PURE__ */ jsxs(Button, { className: "w-full justify-start", children: [
                /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 mr-2" }),
                "Create New Campaign"
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/subscribers/import", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                "Import Subscribers"
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/lists/new", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
                "Create New List"
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/analytics", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 mr-2" }),
                "View Analytics"
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Recent Campaigns" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Your latest email campaigns" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: recentCampaigns.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ jsx(Send, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "No campaigns yet" }),
              /* @__PURE__ */ jsx(Link, { to: "/campaigns/new", children: /* @__PURE__ */ jsx(Button, { children: "Create Your First Campaign" }) })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              recentCampaigns.map((campaign) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: campaign.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: campaign.subject })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: campaign.status }),
                  /* @__PURE__ */ jsx(Link, { to: `/campaigns/${campaign.id}`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) })
                ] })
              ] }, campaign.id)),
              /* @__PURE__ */ jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsx(Link, { to: "/campaigns", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View All Campaigns" }) }) })
            ] }) })
          ] })
        ] }),
        stats.totalSubscribers === 0 && /* @__PURE__ */ jsxs(Card, { className: "border-blue-200 bg-blue-50", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-blue-900", children: "Getting Started" }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-blue-700", children: "Welcome to xMailer! Here's how to get started with your email marketing." })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "1" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-900", children: "Configure SMTP Settings" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Set up your email sending configuration" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/settings/smtp", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Configure" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "2" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-900", children: "Create Your First List" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Organize your subscribers into targeted lists" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/lists/new", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Create List" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium", children: "3" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-900", children: "Import Subscribers" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Add your email subscribers to start sending campaigns" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/subscribers/import", children: /* @__PURE__ */ jsx(Button, { size: "sm", children: "Import" }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard$1,
  loader: loader$k
}, Symbol.toStringTag, { value: "Module" }));
async function action$d({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${new URL(request.url).origin}/reset-password`
  });
  if (error) {
    return json({ error: error.message }, { status: 400 });
  }
  return json({
    message: "Check your email for a password reset link.",
    email
  });
}
function ForgotPassword() {
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Logo, { variant: "dark", size: "lg" }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Reset Password" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email address and we'll send you a link to reset your password." })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Input,
          {
            type: "email",
            name: "email",
            placeholder: "Email address",
            required: true,
            className: "w-full",
            defaultValue: (actionData == null ? void 0 : actionData.email) || ""
          }
        ) }),
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }),
        (actionData == null ? void 0 : actionData.message) && /* @__PURE__ */ jsx("div", { className: "text-green-600 text-sm text-center bg-green-50 p-3 rounded-md", children: actionData.message }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            className: "w-full",
            disabled: isSubmitting,
            children: isSubmitting ? "Sending..." : "Send Reset Link"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/login",
          className: "inline-flex items-center text-blue-600 hover:text-blue-500 text-sm",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-1" }),
            "Back to sign in"
          ]
        }
      ) })
    ] })
  ] }) });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$d,
  default: ForgotPassword
}, Symbol.toStringTag, { value: "Module" }));
async function loader$j({ request }) {
  const user = await requireAuth(request);
  return json({ user });
}
function SettingsIndex() {
  const { user } = useLoaderData();
  const settingsOptions = [
    {
      title: "SMTP Configuration",
      description: "Configure your email sending settings and SMTP servers",
      icon: Server,
      href: "/settings/smtp",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Profile Settings",
      description: "Update your personal information and account details",
      icon: User,
      href: "/settings/profile",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Notifications",
      description: "Manage your notification preferences and alerts",
      icon: Bell,
      href: "/settings/notifications",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      title: "Security",
      description: "Password, two-factor authentication, and security settings",
      icon: Shield,
      href: "/settings/security",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Billing",
      description: "Manage your subscription and billing information",
      icon: CreditCard,
      href: "/settings/billing",
      color: "bg-purple-50 text-purple-600"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Settings" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Manage your account settings and preferences." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: settingsOptions.map((option) => /* @__PURE__ */ jsx(Link, { to: option.href, children: /* @__PURE__ */ jsx(Card, { className: "hover:shadow-lg transition-shadow cursor-pointer", children: /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${option.color}`, children: /* @__PURE__ */ jsx(option.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: option.title }),
            /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", children: option.description })
          ] })
        ] }) }) }) }, option.href)) }),
        /* @__PURE__ */ jsxs(Card, { className: "mt-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Account Information" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Your current account details" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: user.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Account Created" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: new Date(user.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SettingsIndex,
  loader: loader$j
}, Symbol.toStringTag, { value: "Module" }));
async function loader$i({ request, params }) {
  const user = await requireAuth(request);
  const subscriberId = params.id;
  if (!subscriberId) {
    throw new Response("Subscriber ID required", { status: 400 });
  }
  const { data: subscriber, error } = await supabase.from("subscribers").select(`
      *,
      list_subscribers(
        id,
        status,
        subscribed_at,
        unsubscribed_at,
        lists(id, name, color, description)
      )
    `).eq("id", subscriberId).eq("user_id", user.id).single();
  if (error || !subscriber) {
    throw new Response("Subscriber not found", { status: 404 });
  }
  return json({ user, subscriber });
}
function ViewSubscriber() {
  const { user, subscriber } = useLoaderData();
  const formatDate2 = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "subscribed":
        return "bg-green-100 text-green-800";
      case "unsubscribed":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
              "Back to Subscribers"
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900", children: [
                subscriber.first_name,
                " ",
                subscriber.last_name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: subscriber.email })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: `/subscribers/${subscriber.id}/edit`, children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 mr-2" }),
            "Edit Subscriber"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(User, { className: "h-5 w-5 mr-2" }),
                "Subscriber Information"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Email Address" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium", children: subscriber.email })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Status" }),
                  /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(subscriber.status)}`, children: subscriber.status }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "First Name" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: subscriber.first_name || "Not provided" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Last Name" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: subscriber.last_name || "Not provided" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(List, { className: "h-5 w-5 mr-2" }),
                  "List Memberships"
                ] }),
                /* @__PURE__ */ jsx(CardDescription, { children: "Lists this subscriber is a member of" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: subscriber.list_subscribers && subscriber.list_subscribers.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-3", children: subscriber.list_subscribers.map((ls) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-full",
                      style: { backgroundColor: ls.lists.color }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: ls.lists.name }),
                    ls.lists.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: ls.lists.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(ls.status)}`, children: ls.status }),
                  ls.subscribed_at && /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
                    "Joined ",
                    formatDate2(ls.subscribed_at)
                  ] })
                ] })
              ] }, ls.id)) }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-6", children: [
                /* @__PURE__ */ jsx(List, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Not subscribed to any lists" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 mr-2" }),
                "Activity Timeline"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-blue-500 mt-2" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Account Created" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: formatDate2(subscriber.created_at) })
                  ] })
                ] }),
                subscriber.subscribed_at && /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 mt-2" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Subscribed" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: formatDate2(subscriber.subscribed_at) })
                  ] })
                ] }),
                subscriber.unsubscribed_at && /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-red-500 mt-2" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Unsubscribed" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: formatDate2(subscriber.unsubscribed_at) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-gray-400 mt-2" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: "Last Updated" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: formatDate2(subscriber.updated_at) })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Quick Actions" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx(Link, { to: `/subscribers/${subscriber.id}/edit`, className: "block", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
                  /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4 mr-2" }),
                  "Edit Subscriber"
                ] }) }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full justify-start", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mr-2" }),
                  "Send Email"
                ] })
              ] }) })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ViewSubscriber,
  loader: loader$i
}, Symbol.toStringTag, { value: "Module" }));
async function loader$h({ request }) {
  const user = await requireAuth(request);
  const { data: lists, error } = await supabase.from("lists").select("*").eq("user_id", user.id).eq("is_active", true).order("name");
  if (error) {
    console.error("Lists fetch error:", error);
    return json({ user, lists: [], error: "Failed to load lists" });
  }
  return json({ user, lists });
}
async function action$c({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const email = formData.get("email");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const selectedLists = formData.getAll("lists");
  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }
  const { data: existingSubscriber } = await supabase.from("subscribers").select("id").eq("user_id", user.id).eq("email", email).single();
  if (existingSubscriber) {
    return json({ error: "A subscriber with this email already exists" }, { status: 400 });
  }
  const { data: subscriber, error: subscriberError } = await supabase.from("subscribers").insert({
    user_id: user.id,
    email,
    first_name: firstName || "",
    last_name: lastName || "",
    status: "subscribed",
    subscribed_at: (/* @__PURE__ */ new Date()).toISOString()
  }).select("id").single();
  if (subscriberError) {
    console.error("Subscriber creation error:", subscriberError);
    return json({ error: "Failed to create subscriber" }, { status: 500 });
  }
  if (selectedLists.length > 0) {
    const listSubscriptions = selectedLists.map((listId) => ({
      subscriber_id: subscriber.id,
      list_id: listId,
      status: "subscribed",
      subscribed_at: (/* @__PURE__ */ new Date()).toISOString()
    }));
    const { error: listError } = await supabase.from("list_subscribers").insert(listSubscriptions);
    if (listError) {
      console.error("List subscription error:", listError);
    }
  }
  return redirect("/subscribers");
}
function NewSubscriber() {
  const { user, lists, error } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/subscribers", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Subscribers"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Add New Subscriber" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Add a new subscriber to your mailing lists." })
          ] })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: actionData.error }) }) }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Subscriber Information" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Enter the subscriber's details and select which lists they should join." })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email",
                  type: "email",
                  placeholder: "subscriber@example.com",
                  required: true,
                  className: "w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "firstName",
                    placeholder: "John",
                    className: "w-full"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "lastName",
                    placeholder: "Doe",
                    className: "w-full"
                  }
                )
              ] })
            ] }),
            lists.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: "Subscribe to Lists" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3", children: lists.map((list) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: `list-${list.id}`,
                    name: "lists",
                    value: list.id,
                    className: "rounded border-gray-300"
                  }
                ),
                /* @__PURE__ */ jsxs("label", { htmlFor: `list-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-3 h-3 rounded-full mr-2",
                      style: { backgroundColor: list.color }
                    }
                  ),
                  list.name,
                  list.description && /* @__PURE__ */ jsxs("span", { className: "text-gray-500 ml-2", children: [
                    "- ",
                    list.description
                  ] })
                ] })
              ] }, list.id)) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Select which lists this subscriber should be added to." })
            ] }),
            lists.length === 0 && /* @__PURE__ */ jsx(Card, { className: "border-yellow-200 bg-yellow-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-yellow-800 mb-2", children: "You don't have any lists yet." }),
              /* @__PURE__ */ jsx("p", { className: "text-yellow-700 text-sm", children: "The subscriber will be added to your general subscriber list. You can create lists later and organize your subscribers." })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsx(UserPlus, { className: "h-4 w-4 mr-2" }),
                    isSubmitting ? "Adding Subscriber..." : "Add Subscriber"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Link, { to: "/subscribers", className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$c,
  default: NewSubscriber,
  loader: loader$h
}, Symbol.toStringTag, { value: "Module" }));
async function loader$g() {
  const mockListData = {
    "ac70fb2e-53c2-46bb-9b29-50e4b695bdc9": {
      id: "ac70fb2e-53c2-46bb-9b29-50e4b695bdc9",
      name: "Newsletter Subscribers",
      description: "General newsletter subscribers who signed up for weekly updates",
      color: "#3B82F6",
      subscribed_members: 1200,
      total_members: 1250,
      is_active: true,
      created_at: "2024-01-15T10:00:00.000Z",
      members: [
        {
          id: "1",
          email: "john.doe@example.com",
          first_name: "John",
          last_name: "Doe",
          subscribed: true,
          added_at: "2024-01-15T10:00:00.000Z"
        },
        {
          id: "2",
          email: "jane.smith@example.com",
          first_name: "Jane",
          last_name: "Smith",
          subscribed: true,
          added_at: "2024-01-16T09:30:00.000Z"
        },
        {
          id: "3",
          email: "bob.wilson@example.com",
          first_name: "Bob",
          last_name: "Wilson",
          subscribed: false,
          added_at: "2024-01-17T14:15:00.000Z"
        },
        {
          id: "4",
          email: "alice.brown@example.com",
          first_name: "Alice",
          last_name: "Brown",
          subscribed: true,
          added_at: "2024-01-18T11:45:00.000Z"
        },
        {
          id: "5",
          email: "charlie.davis@example.com",
          first_name: "Charlie",
          last_name: "Davis",
          subscribed: true,
          added_at: "2024-01-19T16:20:00.000Z"
        }
      ]
    }
  };
  return json({ mockListData });
}
function DemoListDetail() {
  const { mockListData } = useLoaderData();
  const params = useParams();
  const listId = params.id || "ac70fb2e-53c2-46bb-9b29-50e4b695bdc9";
  const list = mockListData[listId] || mockListData["ac70fb2e-53c2-46bb-9b29-50e4b695bdc9"];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between h-16", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
        "Back to Demo"
      ] }) }),
      /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full", children: "Demo Mode" })
    ] }) }) }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-6 h-6 rounded-full mr-3",
              style: { backgroundColor: list.color }
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: list.name }),
            list.description && /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: list.description })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `px-3 py-1 text-sm rounded-full ${list.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
            children: list.is_active ? "Active" : "Inactive"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Members" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: list.total_members })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-green-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Subscribed" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: list.subscribed_members })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-purple-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Created" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: new Date(list.created_at).toLocaleDateString() })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { children: [
            "List Members (",
            list.members.length,
            ")"
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Sample members in this list - in the real app, you can add, remove, and manage recipients" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Email" }),
            /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Name" }),
            /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Added" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: list.members.map((member) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-900", children: member.email }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-600", children: [member.first_name, member.last_name].filter(Boolean).join(" ") || "-" }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `px-2 py-1 text-xs rounded-full ${member.subscribed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                children: member.subscribed ? "Subscribed" : "Unsubscribed"
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-500", children: new Date(member.added_at).toLocaleDateString() })
          ] }, member.id)) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Card, { className: "border-blue-200 bg-blue-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-blue-900 mb-2", children: "Demo Mode Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-800 text-sm mb-4", children: "This is a preview of your list detail page with sample data. In the full version, you can:" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-blue-800 text-sm space-y-1 list-disc list-inside", children: [
          /* @__PURE__ */ jsx("li", { children: "Add and remove recipients from lists" }),
          /* @__PURE__ */ jsx("li", { children: "Import recipients from CSV files" }),
          /* @__PURE__ */ jsx("li", { children: "Create targeted email campaigns using these lists" }),
          /* @__PURE__ */ jsx("li", { children: "Track subscriber engagement and statistics" }),
          /* @__PURE__ */ jsx("li", { children: "Manage subscription preferences" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mr-4", children: "← Back to Dashboard" }) }),
          /* @__PURE__ */ jsx(Button, { onClick: () => window.open("/setup-demo.md", "_blank"), children: "View Setup Guide" })
        ] })
      ] }) }) })
    ] })
  ] });
}
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DemoListDetail,
  loader: loader$g
}, Symbol.toStringTag, { value: "Module" }));
async function loader$f({ request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return redirect("/login?error=Invalid reset link");
  }
  return json({ code });
}
async function action$b({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const code = formData.get("code");
  if (!password || !confirmPassword || !code) {
    return json({ error: "All fields are required" }, { status: 400 });
  }
  if (password !== confirmPassword) {
    return json({ error: "Passwords do not match" }, { status: 400 });
  }
  if (password.length < 6) {
    return json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }
  const { data: sessionData, error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
  if (sessionError || !sessionData.session) {
    return json({ error: "Invalid or expired reset link" }, { status: 400 });
  }
  const { data, error } = await supabase.auth.updateUser({
    password
  });
  if (error) {
    return json({ error: error.message }, { status: 400 });
  }
  return createUserSession(
    sessionData.session.access_token,
    sessionData.session.refresh_token,
    "/dashboard?message=Password updated successfully"
  );
}
function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const [searchParams] = useSearchParams();
  const isSubmitting = navigation2.state === "submitting";
  const code = searchParams.get("code");
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Logo, { variant: "dark", size: "lg" }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: "Set New Password" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Enter your new password below." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "code", value: code || "" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: showPassword ? "text" : "password",
            name: "password",
            placeholder: "New password",
            required: true,
            className: "w-full pr-10",
            minLength: 6
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
            children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: showConfirmPassword ? "text" : "password",
            name: "confirmPassword",
            placeholder: "Confirm new password",
            required: true,
            className: "w-full pr-10",
            minLength: 6
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setShowConfirmPassword(!showConfirmPassword),
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
            children: showConfirmPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
          }
        )
      ] }),
      (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          className: "w-full",
          disabled: isSubmitting,
          children: isSubmitting ? "Updating..." : "Update Password"
        }
      )
    ] }) })
  ] }) });
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$b,
  default: ResetPassword,
  loader: loader$f
}, Symbol.toStringTag, { value: "Module" }));
async function loader$e({ request }) {
  var _a;
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/dashboard";
  if (code) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Auth callback error:", error);
      return new Response("Authentication failed", { status: 400 });
    }
    if (data.session && data.user) {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: data.user.id,
        email: data.user.email,
        full_name: ((_a = data.user.user_metadata) == null ? void 0 : _a.full_name) || null,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      });
      if (profileError) {
        console.error("Profile creation error:", profileError);
      }
      return createUserSession(
        data.session.access_token,
        data.session.refresh_token,
        next
      );
    }
  }
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/login?error=Authentication failed"
    }
  });
}
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loader: loader$e
}, Symbol.toStringTag, { value: "Module" }));
async function loader$d({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/dashboard");
  }
  return json({});
}
async function action$a({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const fullName = formData.get("fullName");
  if (!email || !password || !fullName) {
    return json({ error: "All fields are required" }, { status: 400 });
  }
  if (password.length < 6) {
    return json({ error: "Password must be at least 6 characters" }, { status: 400 });
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });
  if (error) {
    return json({ error: error.message }, { status: 400 });
  }
  if (!data.user) {
    return json({ error: "Registration failed" }, { status: 400 });
  }
  const { error: profileError } = await supabase.from("profiles").insert({
    id: data.user.id,
    email: data.user.email,
    full_name: fullName
  });
  if (profileError) {
    console.error("Profile creation error:", profileError);
  }
  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", data.user.id);
  session.set("userEmail", data.user.email);
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
function Register() {
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx(Logo, { size: "xl", className: "justify-center mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Create your account" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Start your email marketing journey with xMailer" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Sign Up" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Create your xMailer account to get started" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "fullName", className: "block text-sm font-medium text-gray-700 mb-1", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "fullName",
                name: "fullName",
                type: "text",
                required: true,
                placeholder: "Enter your full name",
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                placeholder: "Enter your email",
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-1", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                name: "password",
                type: "password",
                required: true,
                placeholder: "Create a password (min. 6 characters)",
                className: "w-full"
              }
            )
          ] }),
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full", children: isSubmitting ? "Creating account..." : "Create Account" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/auth/login", className: "text-blue-600 hover:text-blue-500 font-medium", children: "Sign in" })
        ] }) })
      ] })
    ] })
  ] }) });
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$a,
  default: Register,
  loader: loader$d
}, Symbol.toStringTag, { value: "Module" }));
async function loader$c({ request, params }) {
  const user = await requireAuth(request);
  const campaignId = params.id;
  if (!campaignId) {
    throw new Response("Campaign not found", { status: 404 });
  }
  const { data: campaign, error } = await supabase.from("campaigns").select("*").eq("id", campaignId).eq("user_id", user.id).single();
  if (error || !campaign) {
    throw new Response("Campaign not found", { status: 404 });
  }
  const url = new URL(request.url);
  const sending = url.searchParams.get("sending") === "true";
  return json({ user, campaign, sending });
}
async function action$9({ request, params }) {
  const user = await requireAuth(request);
  const campaignId = params.id;
  const formData = await request.formData();
  const action2 = formData.get("_action");
  if (action2 === "send_now") {
    await supabase.from("campaigns").update({
      status: "sending",
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", campaignId).eq("user_id", user.id);
    processCampaign(campaignId).catch(console.error);
    return json({ success: "Campaign sending started" });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
function CampaignDetail() {
  const { user, campaign, sending } = useLoaderData();
  const navigation2 = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
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
  ["sending"].includes(campaign.status);
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/campaigns", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Campaigns"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: campaign.name }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: campaign.subject })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxs("span", { className: `px-3 py-1 text-sm rounded-full ${statusColor}`, children: [
              campaign.status.replace("_", " "),
              refreshing && /* @__PURE__ */ jsx(RefreshCw, { className: "inline h-3 w-3 ml-1 animate-spin" })
            ] }),
            canSendNow && /* @__PURE__ */ jsx(Form, { method: "post", children: /* @__PURE__ */ jsxs(
              Button,
              {
                type: "submit",
                name: "_action",
                value: "send_now",
                className: "bg-green-600 hover:bg-green-700",
                disabled: navigation2.state === "submitting",
                children: [
                  /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-2" }),
                  navigation2.state === "submitting" ? "Starting..." : "Send Now"
                ]
              }
            ) }),
            campaign.status === "draft" && /* @__PURE__ */ jsx(Link, { to: `/campaigns/${campaign.id}/edit`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Edit Campaign" }) })
          ] })
        ] }),
        (campaign.status === "sending" || sending) && /* @__PURE__ */ jsx(Card, { className: "mb-8 border-blue-200 bg-blue-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "animate-pulse", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-blue-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-blue-900", children: "Campaign is sending..." }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-700", children: [
              campaign.sent_count,
              " of ",
              campaign.total_recipients,
              " emails sent"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: campaign.sent_count })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Recipients" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: campaign.total_recipients })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Delivery Rate" }),
              /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
                deliveryRate,
                "%"
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-orange-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Status" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-gray-900 capitalize", children: campaign.status.replace("_", " ") })
            ] })
          ] }) }) })
        ] }),
        campaign.total_recipients > 0 && /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Sending Progress" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
              campaign.sent_count,
              " of ",
              campaign.total_recipients,
              " sent"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: `h-3 rounded-full transition-all duration-300 ${campaign.status === "sending" ? "bg-blue-600" : campaign.status === "sent" ? "bg-green-600" : campaign.status === "failed" ? "bg-red-600" : "bg-gray-400"}`,
              style: { width: `${deliveryRate}%` }
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Campaign Information" }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Campaign Name" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: campaign.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Subject Line" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: campaign.subject })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Created" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: formatDate(campaign.created_at) })
              ] }),
              campaign.scheduled_at && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Scheduled For" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: formatDate(campaign.scheduled_at) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Last Updated" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: formatDate(campaign.updated_at) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-600", children: "Targeting" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: campaign.target_all_subscribers ? "All Subscribers" : "Selected Lists" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Email Content Preview" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "prose prose-sm max-w-none",
                dangerouslySetInnerHTML: { __html: campaign.html_content || "No content available" }
              }
            ) }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$9,
  default: CampaignDetail,
  loader: loader$c
}, Symbol.toStringTag, { value: "Module" }));
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
async function loader$b({ request }) {
  const user = await requireAuth(request);
  const { data: lists, error } = await supabase.from("lists_with_counts").select("*").eq("user_id", user.id).eq("is_active", true).order("name");
  if (error) {
    console.error("Lists fetch error:", error);
    return json({ user, lists: [], error: "Failed to load lists" });
  }
  return json({ user, lists });
}
async function action$8({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const action2 = formData.get("_action");
  const name = formData.get("name");
  const subject = formData.get("subject");
  const content = formData.get("content");
  const targetAllSubscribers = formData.get("targetAllSubscribers") === "true";
  const includeLists = formData.getAll("includeLists");
  const excludeLists = formData.getAll("excludeLists");
  const scheduledDate = formData.get("scheduledDate");
  const scheduledTime = formData.get("scheduledTime");
  if (!name || !subject || !content) {
    return json({ error: "Campaign name, subject, and content are required" }, { status: 400 });
  }
  if (!targetAllSubscribers && includeLists.length === 0) {
    return json({ error: 'Please select at least one list to target or enable "Target All Subscribers"' }, { status: 400 });
  }
  let scheduledAt = null;
  if (action2 === "schedule") {
    if (!scheduledDate || !scheduledTime) {
      return json({ error: "Please select both date and time for scheduling" }, { status: 400 });
    }
    const scheduledDateTime = /* @__PURE__ */ new Date(`${scheduledDate}T${scheduledTime}`);
    const now = /* @__PURE__ */ new Date();
    if (scheduledDateTime <= now) {
      return json({ error: "Scheduled time must be in the future" }, { status: 400 });
    }
    scheduledAt = scheduledDateTime.toISOString();
  }
  let totalRecipients = 0;
  if (targetAllSubscribers) {
    const { count } = await supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("status", "subscribed");
    totalRecipients = count || 0;
  } else {
    const { data: listCounts } = await supabase.from("lists_with_counts").select("subscribed_members").in("id", includeLists);
    totalRecipients = (listCounts == null ? void 0 : listCounts.reduce((sum, list) => sum + (list.subscribed_members || 0), 0)) || 0;
  }
  const campaignData = {
    user_id: user.id,
    name,
    subject,
    html_content: content,
    target_all_subscribers: targetAllSubscribers,
    include_lists: includeLists.length > 0 ? includeLists : null,
    exclude_lists: excludeLists.length > 0 ? excludeLists : null,
    status: action2 === "save" ? "draft" : action2 === "send" ? "sending" : "scheduled",
    scheduled_at: scheduledAt,
    sent_count: 0,
    total_recipients: totalRecipients,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
  const { data: campaign, error } = await supabase.from("campaigns").insert(campaignData).select("id").single();
  if (error) {
    console.error("Campaign creation error:", error);
    return json({ error: "Failed to create campaign" }, { status: 500 });
  }
  if (action2 === "send") {
    return redirect(`/campaigns/${campaign.id}?sending=true`);
  }
  if (action2 === "save") {
    return json({ success: "Campaign saved as draft", campaignId: campaign.id });
  } else {
    return json({ success: `Campaign scheduled for ${new Date(scheduledAt).toLocaleString()}`, campaignId: campaign.id });
  }
}
function NewCampaign() {
  const { user, lists, error } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  const now = /* @__PURE__ */ new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split("T")[0];
  const defaultTime = "09:00";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/campaigns", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Campaigns"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Create New Campaign" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Design and send your email campaign to your audience." })
          ] })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Campaign Details" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Basic information about your email campaign" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Campaign Name *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "name",
                    placeholder: "e.g., Weekly Newsletter - January 2024",
                    required: true,
                    className: "w-full"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Subject *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "subject",
                    placeholder: "e.g., Your Weekly Update from xMailer",
                    required: true,
                    className: "w-full"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Email Content" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Write your email content (HTML supported)" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  name: "content",
                  placeholder: "Write your email content here. HTML is supported for formatting.",
                  required: true,
                  className: "w-full min-h-[300px]"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "HTML tags are supported for formatting your email content." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Audience Targeting" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Choose who will receive this campaign" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "targetAllSubscribers",
                    name: "targetAllSubscribers",
                    value: "true",
                    className: "rounded border-gray-300"
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "targetAllSubscribers", className: "text-sm font-medium text-gray-700", children: "Target all subscribers" })
              ] }),
              lists.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Include Lists" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: lists.map((list) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: `include-${list.id}`,
                        name: "includeLists",
                        value: list.id,
                        className: "rounded border-gray-300"
                      }
                    ),
                    /* @__PURE__ */ jsxs("label", { htmlFor: `include-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "w-3 h-3 rounded-full mr-2",
                          style: { backgroundColor: list.color }
                        }
                      ),
                      list.name,
                      " (",
                      list.subscribed_members || 0,
                      " subscribers)"
                    ] })
                  ] }, list.id)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Exclude Lists (Optional)" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2 max-h-32 overflow-y-auto", children: lists.map((list) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "checkbox",
                        id: `exclude-${list.id}`,
                        name: "excludeLists",
                        value: list.id,
                        className: "rounded border-gray-300"
                      }
                    ),
                    /* @__PURE__ */ jsxs("label", { htmlFor: `exclude-${list.id}`, className: "text-sm text-gray-700 flex items-center", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "w-3 h-3 rounded-full mr-2",
                          style: { backgroundColor: list.color }
                        }
                      ),
                      list.name
                    ] })
                  ] }, list.id)) })
                ] })
              ] }),
              lists.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-6 bg-gray-50 rounded-lg", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "You don't have any active lists yet." }),
                /* @__PURE__ */ jsx(Link, { to: "/lists", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Create Your First List" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Scheduling Options" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Choose when to send your campaign" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Schedule Date" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "date",
                      name: "scheduledDate",
                      defaultValue: defaultDate,
                      min: defaultDate,
                      className: "w-full"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Schedule Time" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "time",
                      name: "scheduledTime",
                      defaultValue: defaultTime,
                      className: "w-full"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Leave date and time fields for immediate sending, or set them for scheduled delivery." })
            ] })
          ] }),
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx(Card, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: actionData.error }) }) }),
          (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx(Card, { className: "border-green-200 bg-green-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-green-800", children: actionData.success }),
            actionData.campaignId && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Link, { to: `/campaigns/${actionData.campaignId}`, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View Campaign" }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                type: "submit",
                name: "_action",
                value: "save",
                variant: "outline",
                disabled: isSubmitting,
                children: [
                  /* @__PURE__ */ jsx(Save, { className: "h-4 w-4 mr-2" }),
                  isSubmitting ? "Saving..." : "Save as Draft"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                type: "submit",
                name: "_action",
                value: "send",
                disabled: isSubmitting,
                className: "bg-green-600 hover:bg-green-700",
                children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 mr-2" }),
                  isSubmitting ? "Sending..." : "Send Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Button,
              {
                type: "submit",
                name: "_action",
                value: "schedule",
                disabled: isSubmitting,
                className: "bg-blue-600 hover:bg-blue-700",
                children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2" }),
                  isSubmitting ? "Scheduling..." : "Schedule Campaign"
                ]
              }
            )
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8,
  default: NewCampaign,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
async function loader$a({ request }) {
  const smtpSettings = {
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || "587"),
    user: process.env.SMTP_USER || "",
    fromEmail: process.env.FROM_EMAIL || ""
    // Don't send password to client
  };
  return json({ smtpSettings });
}
async function action$7({ request }) {
  const formData = await request.formData();
  const action2 = formData.get("_action");
  const host = formData.get("host");
  const port = parseInt(formData.get("port"));
  const user = formData.get("user");
  const pass = formData.get("pass");
  const fromEmail = formData.get("fromEmail");
  if (!host || !port || !user || !pass) {
    return json({
      success: false,
      error: "All SMTP fields are required"
    });
  }
  const config = {
    host,
    port,
    auth: {
      user,
      pass
    }
  };
  if (action2 === "test") {
    try {
      const result = await testSMTPConnection(config);
      return json({
        success: result.success,
        message: result.success ? host === "smtp.postmarkapp.com" ? "Postmark API connection successful!" : "SMTP connection successful!" : `Connection failed: ${result.error}`,
        error: result.error
      });
    } catch (error) {
      return json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      });
    }
  }
  if (action2 === "send-test") {
    const testEmail = formData.get("testEmail");
    if (!testEmail) {
      return json({
        success: false,
        error: "Test email address is required"
      });
    }
    if (!fromEmail) {
      return json({
        success: false,
        error: "From email address is required"
      });
    }
    try {
      const result = await sendTestEmail(config, fromEmail, testEmail);
      return json({
        success: result.success,
        message: result.success ? `Test email sent successfully! ${result.messageId ? `Message ID: ${result.messageId}` : ""}` : `Failed to send test email: ${result.error}`,
        error: result.error
      });
    } catch (error) {
      return json({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred"
      });
    }
  }
  if (action2 === "save") {
    return json({
      success: true,
      message: "SMTP settings saved successfully!"
    });
  }
  return json({ success: false, error: "Invalid action" });
}
function SMTPSettings() {
  var _a, _b;
  const { smtpSettings } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isLoading = navigation2.state === "submitting";
  const currentAction = (_a = navigation2.formData) == null ? void 0 : _a.get("_action");
  return /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6", children: "SMTP Settings" }),
    /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "host", className: "block text-sm font-medium mb-1", children: "SMTP Host" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "host",
            name: "host",
            defaultValue: smtpSettings.host,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "smtp.postmarkapp.com",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "For Postmark: smtp.postmarkapp.com (will use API for better reliability)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "port", className: "block text-sm font-medium mb-1", children: "SMTP Port" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "port",
            name: "port",
            defaultValue: smtpSettings.port,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "587",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Use 587 for TLS or 465 for SSL" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "user", className: "block text-sm font-medium mb-1", children: "Username / API Token" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "user",
            name: "user",
            defaultValue: smtpSettings.user,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "your-server-api-token",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "For Postmark: Use your Server API Token" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "pass", className: "block text-sm font-medium mb-1", children: "Password / API Token" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "pass",
            name: "pass",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "your-server-api-token",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "For Postmark: Use the same Server API Token as username" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "fromEmail", className: "block text-sm font-medium mb-1", children: "From Email Address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "fromEmail",
            name: "fromEmail",
            defaultValue: smtpSettings.fromEmail,
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "noreply@yourdomain.com",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Must be a verified sender in Postmark" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "testEmail", className: "block text-sm font-medium mb-1", children: "Test Email Address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "testEmail",
            name: "testEmail",
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "test@example.com"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Email address to send test email to" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "test",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50",
            disabled: isLoading,
            children: isLoading && currentAction === "test" ? "Testing..." : "Test Connection"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "send-test",
            className: "px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50",
            disabled: isLoading,
            children: isLoading && currentAction === "send-test" ? "Sending..." : "Send Test Email"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            name: "_action",
            value: "save",
            className: "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50",
            disabled: isLoading,
            children: isLoading && currentAction === "save" ? "Saving..." : "Save Settings"
          }
        )
      ] })
    ] }),
    actionData && /* @__PURE__ */ jsxs("div", { className: `mt-4 p-4 rounded-md ${actionData.success ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "font-medium", children: actionData.success ? "Success!" : "Error!" }),
      /* @__PURE__ */ jsx("div", { className: "mt-1", children: actionData.message || actionData.error })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-medium text-blue-900 mb-2", children: "Email Provider Configuration:" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-blue-800 space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Postmark (Recommended):" }),
          /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "• Host: smtp.postmarkapp.com" }),
            /* @__PURE__ */ jsx("li", { children: "• Port: 587" }),
            /* @__PURE__ */ jsx("li", { children: "• Username & Password: Your Server API Token" }),
            /* @__PURE__ */ jsx("li", { children: "• Uses API for better reliability in WebContainer" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Gmail:" }),
          /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
            /* @__PURE__ */ jsx("li", { children: "• Host: smtp.gmail.com" }),
            /* @__PURE__ */ jsx("li", { children: "• Port: 587" }),
            /* @__PURE__ */ jsx("li", { children: "• Username: Your Gmail address" }),
            /* @__PURE__ */ jsx("li", { children: "• Password: App-specific password (not your regular password)" })
          ] })
        ] })
      ] })
    ] }),
    actionData && !actionData.success && ((_b = actionData.error) == null ? void 0 : _b.includes("timeout")) && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md", children: [
      /* @__PURE__ */ jsx("div", { className: "font-medium text-yellow-800", children: "Network Timeout Notice" }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-yellow-700", children: "SMTP connections may be restricted in this environment. For Postmark users, the system will automatically use the API instead of SMTP for better reliability." })
    ] })
  ] });
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$7,
  default: SMTPSettings,
  loader: loader$a
}, Symbol.toStringTag, { value: "Module" }));
async function loader$9({ request }) {
  const user = await requireAuth(request);
  const { data: lists, error } = await supabase.from("lists_with_counts").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    console.error("Lists fetch error:", error);
    return json({ user, lists: [], error: "Failed to load lists" });
  }
  return json({ user, lists });
}
function Lists() {
  const { user, lists, error } = useLoaderData();
  const formatDate2 = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Lists" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Organize your subscribers into targeted lists." })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/lists/new", children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Create List"
          ] }) })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        lists.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "text-center py-12", children: [
          /* @__PURE__ */ jsx(List, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No lists yet" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Create your first list to start organizing your subscribers." }),
          /* @__PURE__ */ jsx(Link, { to: "/lists/new", children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
            "Create Your First List"
          ] }) })
        ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: lists.map((list) => /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-4 h-4 rounded-full",
                    style: { backgroundColor: list.color }
                  }
                ),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: list.name })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }) })
            ] }),
            list.description && /* @__PURE__ */ jsx(CardDescription, { children: list.description })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-600", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  list.subscribed_members || 0,
                  " subscribers"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center text-gray-600", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                /* @__PURE__ */ jsx("span", { children: formatDate2(list.created_at) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsx(Link, { to: `/lists/${list.id}`, className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "w-full", children: "View" }) }),
              /* @__PURE__ */ jsx(Link, { to: `/lists/${list.id}/edit`, className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "w-full", children: "Edit" }) })
            ] })
          ] }) })
        ] }, list.id)) })
      ] }) })
    ] })
  ] });
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lists,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
async function loader$8({ request }) {
  const user = await requireAuth(request);
  const { data: lists, error } = await supabase.from("lists").select("id, name, color").eq("user_id", user.id).eq("is_active", true).order("name");
  if (error) {
    console.error("Lists fetch error:", error);
    return json({ user, lists: [] });
  }
  return json({ user, lists });
}
async function action$6({ request }) {
  var _a;
  const user = await requireAuth(request);
  const formData = await request.formData();
  const csvData = formData.get("csvData");
  const selectedListId = formData.get("listId");
  const createNewList = formData.get("createNewList") === "on";
  const newListName = formData.get("newListName");
  if (!csvData) {
    return json({ error: "CSV data is required" }, { status: 400 });
  }
  try {
    const lines = csvData.trim().split("\n");
    if (lines.length < 2) {
      return json({ error: "CSV must have at least a header row and one data row" }, { status: 400 });
    }
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const emailIndex = headers.findIndex((h) => h.includes("email"));
    const firstNameIndex = headers.findIndex((h) => h.includes("first") && h.includes("name"));
    const lastNameIndex = headers.findIndex((h) => h.includes("last") && h.includes("name"));
    if (emailIndex === -1) {
      return json({ error: "CSV must contain an email column" }, { status: 400 });
    }
    let targetListId = selectedListId;
    if (createNewList && newListName) {
      const { data: newList, error: listError } = await supabase.from("lists").insert({
        user_id: user.id,
        name: newListName,
        description: `Imported from CSV on ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
        color: "#3B82F6",
        is_active: true
      }).select("id").single();
      if (listError) {
        return json({ error: "Failed to create new list" }, { status: 500 });
      }
      targetListId = newList.id;
    }
    if (!targetListId) {
      return json({ error: "Please select a list or create a new one" }, { status: 400 });
    }
    const recipients = [];
    const errors = [];
    const duplicates = [];
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(",").map((cell) => cell.trim().replace(/"/g, ""));
      const email = (_a = row[emailIndex]) == null ? void 0 : _a.toLowerCase();
      if (!email || !email.includes("@")) {
        errors.push(`Row ${i + 1}: Invalid email address`);
        continue;
      }
      const firstName = firstNameIndex !== -1 ? row[firstNameIndex] : null;
      const lastName = lastNameIndex !== -1 ? row[lastNameIndex] : null;
      recipients.push({
        email,
        first_name: firstName || null,
        last_name: lastName || null,
        user_id: user.id,
        subscribed: true
      });
    }
    if (recipients.length === 0) {
      return json({ error: "No valid recipients found in CSV" }, { status: 400 });
    }
    const { data: insertedRecipients, error: recipientError } = await supabase.from("recipients").upsert(recipients, {
      onConflict: "user_id,email",
      ignoreDuplicates: true
    }).select("id, email");
    if (recipientError) {
      console.error("Recipient insert error:", recipientError);
      return json({ error: "Failed to import recipients" }, { status: 500 });
    }
    if (insertedRecipients && insertedRecipients.length > 0) {
      const memberships = insertedRecipients.map((recipient) => ({
        list_id: targetListId,
        recipient_id: recipient.id
      }));
      const { error: membershipError } = await supabase.from("list_memberships").upsert(memberships, {
        onConflict: "list_id,recipient_id",
        ignoreDuplicates: true
      });
      if (membershipError) {
        console.error("Membership insert error:", membershipError);
        return json({ error: "Recipients imported but failed to add to list" }, { status: 500 });
      }
    }
    const importedCount = (insertedRecipients == null ? void 0 : insertedRecipients.length) || 0;
    const totalRows = recipients.length;
    const duplicateCount = totalRows - importedCount;
    return json({
      success: `Successfully imported ${importedCount} recipients${duplicateCount > 0 ? ` (${duplicateCount} duplicates skipped)` : ""}`,
      imported: importedCount,
      duplicates: duplicateCount,
      errors: errors.length > 0 ? errors : null
    });
  } catch (error) {
    console.error("CSV import error:", error);
    return json({ error: "Failed to process CSV file" }, { status: 500 });
  }
}
function ImportCSV() {
  const { user, lists } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  const [csvData, setCsvData] = useState("");
  const [createNewList, setCreateNewList] = useState(false);
  const handleFileUpload = (event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a2;
        setCsvData((_a2 = e.target) == null ? void 0 : _a2.result);
      };
      reader.readAsText(file);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Lists"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Import Recipients from CSV" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Upload a CSV file to bulk import recipients into your lists." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 mr-2" }),
              "CSV Format Requirements"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Your CSV file should follow this format" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg mb-4", children: /* @__PURE__ */ jsxs("code", { className: "text-sm", children: [
              "email,first_name,last_name",
              /* @__PURE__ */ jsx("br", {}),
              "john@example.com,John,Doe",
              /* @__PURE__ */ jsx("br", {}),
              "jane@example.com,Jane,Smith",
              /* @__PURE__ */ jsx("br", {}),
              "bob@example.com,Bob,Johnson"
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Required Columns:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-gray-600", children: /* @__PURE__ */ jsxs("li", { children: [
                  "• ",
                  /* @__PURE__ */ jsx("strong", { children: "email" }),
                  " - Must be a valid email address"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: "Optional Columns:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-600", children: [
                  /* @__PURE__ */ jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsx("strong", { children: "first_name" }),
                    " - Recipient's first name"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { children: [
                    "• ",
                    /* @__PURE__ */ jsx("strong", { children: "last_name" }),
                    " - Recipient's last name"
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5 mr-2" }),
              "Upload CSV File"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Select your CSV file and choose the target list" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CSV File" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  accept: ".csv",
                  onChange: handleFileUpload,
                  className: "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Upload a CSV file with your recipient data" })
            ] }),
            csvData && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "CSV Preview (first 5 lines)" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg text-sm font-mono", children: [
                csvData.split("\n").slice(0, 5).map((line, index) => /* @__PURE__ */ jsx("div", { className: index === 0 ? "font-bold" : "", children: line }, index)),
                csvData.split("\n").length > 5 && /* @__PURE__ */ jsxs("div", { className: "text-gray-500 mt-2", children: [
                  "... and ",
                  csvData.split("\n").length - 5,
                  " more rows"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "csvData", value: csvData }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Target List" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "checkbox",
                      id: "createNewList",
                      name: "createNewList",
                      checked: createNewList,
                      onChange: (e) => setCreateNewList(e.target.checked),
                      className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "createNewList", className: "ml-2 text-sm text-gray-700", children: "Create new list" })
                ] }),
                createNewList ? /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "newListName",
                    placeholder: "Enter new list name",
                    required: createNewList,
                    className: "w-full"
                  }
                ) : /* @__PURE__ */ jsxs(
                  "select",
                  {
                    name: "listId",
                    required: !createNewList,
                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select existing list" }),
                      lists.map((list) => /* @__PURE__ */ jsx("option", { value: list.id, children: list.name }, list.id))
                    ]
                  }
                )
              ] })
            ] }),
            (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 rounded-md p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-red-400" }),
              /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-red-800", children: "Import Failed" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: actionData.error })
              ] })
            ] }) }),
            (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx("div", { className: "bg-green-50 border border-green-200 rounded-md p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
              /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-green-800", children: "Import Successful" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: actionData.success }),
                actionData.errors && actionData.errors.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-orange-800", children: "Warnings:" }),
                  /* @__PURE__ */ jsx("ul", { className: "text-sm text-orange-700 mt-1 list-disc list-inside", children: actionData.errors.map((error, index) => /* @__PURE__ */ jsx("li", { children: error }, index)) })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting || !csvData,
                  className: "flex-1",
                  children: isSubmitting ? "Importing..." : "Import Recipients"
                }
              ),
              /* @__PURE__ */ jsx(Link, { to: "/lists", className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6,
  default: ImportCSV,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
async function loader$7({ request }) {
  const user = await requireAuth(request);
  const { data: smtpConfigs, error } = await supabase.from("smtp_configs").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  if (error) {
    console.error("SMTP configs fetch error:", error);
    return json({ user, smtpConfigs: [], error: "Failed to load SMTP configurations" });
  }
  return json({ user, smtpConfigs });
}
async function action$5({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const action2 = formData.get("_action");
  if (action2 === "create") {
    const name = formData.get("name");
    const host = formData.get("host");
    const port = parseInt(formData.get("port"));
    const username = formData.get("username");
    const password = formData.get("password");
    const secure = formData.get("secure") === "on";
    if (!name || !host || !port || !username || !password) {
      return json({ error: "All fields are required" }, { status: 400 });
    }
    if (port < 1 || port > 65535) {
      return json({ error: "Port must be between 1 and 65535" }, { status: 400 });
    }
    const { error } = await supabase.from("smtp_configs").insert({
      user_id: user.id,
      name,
      host,
      port,
      username,
      password,
      secure,
      is_active: true
    });
    if (error) {
      console.error("SMTP config creation error:", error);
      return json({ error: "Failed to create SMTP configuration" }, { status: 500 });
    }
    return json({ success: "SMTP configuration added successfully" });
  }
  if (action2 === "delete") {
    const configId = formData.get("configId");
    if (!configId) {
      return json({ error: "Configuration ID is required" }, { status: 400 });
    }
    const { error } = await supabase.from("smtp_configs").delete().eq("id", configId).eq("user_id", user.id);
    if (error) {
      console.error("SMTP config deletion error:", error);
      return json({ error: "Failed to delete SMTP configuration" }, { status: 500 });
    }
    return json({ success: "SMTP configuration deleted successfully" });
  }
  if (action2 === "toggle") {
    const configId = formData.get("configId");
    const isActive = formData.get("isActive") === "true";
    if (!configId) {
      return json({ error: "Configuration ID is required" }, { status: 400 });
    }
    const { error } = await supabase.from("smtp_configs").update({
      is_active: !isActive,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    }).eq("id", configId).eq("user_id", user.id);
    if (error) {
      console.error("SMTP config toggle error:", error);
      return json({ error: "Failed to update SMTP configuration" }, { status: 500 });
    }
    return json({ success: `SMTP configuration ${!isActive ? "activated" : "deactivated"} successfully` });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
const commonSMTPProviders = [
  {
    name: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    instructions: "Use your Gmail address and App Password (not regular password)"
  },
  {
    name: "Outlook/Hotmail",
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: true,
    instructions: "Use your Outlook email and password"
  },
  {
    name: "Yahoo Mail",
    host: "smtp.mail.yahoo.com",
    port: 587,
    secure: true,
    instructions: "Use your Yahoo email and App Password"
  },
  {
    name: "Custom SMTP",
    host: "mail.yourdomain.com",
    port: 587,
    secure: true,
    instructions: "Contact your hosting provider for SMTP details"
  }
];
function SMTPConfigs() {
  const { user, smtpConfigs, error } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "SMTP Configuration" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Configure your SMTP servers to send emails through your own mail servers." })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Popular SMTP Providers" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Quick setup guides for common email providers" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: commonSMTPProviders.map((provider, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-2", children: provider.name }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 space-y-1", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Host:" }),
                    " ",
                    provider.host
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Port:" }),
                    " ",
                    provider.port
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Security:" }),
                    " ",
                    provider.secure ? "SSL/TLS" : "None"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs mt-2 text-blue-600", children: provider.instructions })
                ] })
              ]
            },
            index
          )) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5 mr-2" }),
              "Add SMTP Configuration"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Connect your SMTP server to send emails" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "create" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Configuration Name *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "name",
                    placeholder: "e.g., Gmail SMTP",
                    required: true,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "A friendly name to identify this configuration" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "SMTP Host *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "host",
                    placeholder: "e.g., smtp.gmail.com",
                    required: true,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Your SMTP server hostname" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Port *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "port",
                    type: "number",
                    placeholder: "587",
                    min: "1",
                    max: "65535",
                    defaultValue: "587",
                    required: true,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Common ports: 587 (TLS), 465 (SSL), 25 (unsecured)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Username *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "username",
                    placeholder: "your-email@gmail.com",
                    required: true,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Usually your email address" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Password *" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "password",
                    type: "password",
                    placeholder: "Your password or app password",
                    required: true,
                    className: "w-full"
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "For Gmail, use an App Password instead of your regular password" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "secure",
                    id: "secure",
                    defaultChecked: true,
                    className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "secure", className: "ml-2 text-sm text-gray-700", children: "Use SSL/TLS encryption (recommended)" })
              ] }) })
            ] }),
            (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }),
            (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx("div", { className: "text-green-600 text-sm bg-green-50 p-3 rounded-md", children: actionData.success }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full md:w-auto", children: isSubmitting ? "Adding..." : "Add SMTP Configuration" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-900 flex items-center", children: [
            /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 mr-2" }),
            "Your SMTP Configurations"
          ] }),
          smtpConfigs.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "text-center py-12", children: [
            /* @__PURE__ */ jsx(Server, { className: "h-16 w-16 mx-auto mb-4 text-gray-300" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No SMTP configurations yet" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Add your first SMTP configuration above to start sending emails." })
          ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: smtpConfigs.map((config) => /* @__PURE__ */ jsx(Card, { className: "hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
              /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${config.is_active ? "bg-green-50" : "bg-gray-50"}`, children: config.is_active ? /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-green-600" }) : /* @__PURE__ */ jsx(XCircle, { className: "h-6 w-6 text-gray-400" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 text-lg", children: config.name }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1 text-sm text-gray-600", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Host:" }),
                    " ",
                    config.host,
                    ":",
                    config.port
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Username:" }),
                    " ",
                    config.username
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Security:" }),
                    " ",
                    config.secure ? "SSL/TLS Enabled" : "No Encryption"
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Created:" }),
                    " ",
                    new Date(config.created_at).toLocaleDateString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-3 space-x-3", children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `px-3 py-1 text-xs font-medium rounded-full ${config.is_active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                      children: config.is_active ? "Active" : "Inactive"
                    }
                  ),
                  config.secure && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800", children: "Encrypted" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
              /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "toggle" }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "configId", value: config.id }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "isActive", value: config.is_active }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    variant: "outline",
                    size: "sm",
                    disabled: isSubmitting,
                    children: config.is_active ? "Deactivate" : "Activate"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "delete" }),
                /* @__PURE__ */ jsx("input", { type: "hidden", name: "configId", value: config.id }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    variant: "outline",
                    size: "sm",
                    className: "text-red-600 hover:text-red-700 hover:border-red-300",
                    disabled: isSubmitting,
                    onClick: (e) => {
                      if (!confirm("Are you sure you want to delete this SMTP configuration?")) {
                        e.preventDefault();
                      }
                    },
                    children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }) }) }, config.id)) })
        ] })
      ] }) })
    ] })
  ] });
}
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  default: SMTPConfigs,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
async function loader$6({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/dashboard");
  }
  return json({});
}
async function action$4({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return json({ error: "Email and password are required" }, { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return json({ error: error.message }, { status: 400 });
  }
  if (!data.user) {
    return json({ error: "Authentication failed" }, { status: 400 });
  }
  const session = await getSession(request.headers.get("Cookie"));
  session.set("userId", data.user.id);
  session.set("userEmail", data.user.email);
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
function Login$1() {
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsx(Logo, { size: "xl", className: "justify-center mb-4" }),
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Welcome back" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Sign in to your xMailer account" })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Sign In" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Enter your email and password to access your account" })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                name: "email",
                type: "email",
                required: true,
                placeholder: "Enter your email",
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 mb-1", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                name: "password",
                type: "password",
                required: true,
                placeholder: "Enter your password",
                className: "w-full"
              }
            )
          ] }),
          (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full", children: isSubmitting ? "Signing in..." : "Sign In" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/auth/register", className: "text-blue-600 hover:text-blue-500 font-medium", children: "Sign up" })
        ] }) })
      ] })
    ] })
  ] }) });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4,
  default: Login$1,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
async function loader$5({ request }) {
  const user = await requireAuth(request);
  const [
    { count: totalSubscribers },
    { count: totalLists },
    { count: totalCampaigns },
    { data: recentCampaigns }
  ] = await Promise.all([
    supabase.from("subscribers").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("status", "subscribed"),
    supabase.from("lists").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("is_active", true),
    supabase.from("campaigns").select("*", { count: "exact", head: true }).eq("user_id", user.id),
    supabase.from("campaigns").select("id, name, status, sent_count, total_recipients, created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(5)
  ]);
  return json({
    user,
    stats: {
      totalSubscribers: totalSubscribers || 0,
      totalLists: totalLists || 0,
      totalCampaigns: totalCampaigns || 0
    },
    recentCampaigns: recentCampaigns || []
  });
}
function Dashboard() {
  const { user, stats, recentCampaigns } = useLoaderData();
  const formatDate2 = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Dashboard" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Welcome back! Here's what's happening with your email campaigns." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Subscribers" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalSubscribers })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Active Lists" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalLists })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(Send, { className: "h-6 w-6 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Campaigns" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stats.totalCampaigns })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-orange-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Emails Sent" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: recentCampaigns.reduce((sum, campaign) => sum + (campaign.sent_count || 0), 0) })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Recent Campaigns" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Your latest email campaigns and their status" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: recentCampaigns.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-6", children: [
              /* @__PURE__ */ jsx(Send, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "No campaigns yet" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Create your first campaign to get started" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: recentCampaigns.map((campaign) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: campaign.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                  campaign.sent_count || 0,
                  " / ",
                  campaign.total_recipients || 0,
                  " sent"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : campaign.status === "scheduled" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, children: campaign.status }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: formatDate2(campaign.created_at) })
              ] })
            ] }, campaign.id)) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Quick Actions" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Common tasks to get you started" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/subscribers/new",
                  className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-600" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: "Add Subscribers" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Import or add new subscribers" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/lists/new",
                  className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-green-600" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: "Create List" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Organize your subscribers" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/campaigns/new",
                  className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(Send, { className: "h-5 w-5 text-purple-600" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: "New Campaign" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Create and send emails" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/settings/smtp",
                  className: "flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-orange-50", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-orange-600" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: "Setup SMTP" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Configure email sending" })
                    ] })
                  ]
                }
              )
            ] }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
async function loader$4({ request, params }) {
  try {
    const user = await requireAuth(request);
    const listId = params.id;
    if (!listId) {
      throw new Response("List not found", { status: 404 });
    }
    const { data: list, error: listError } = await supabase.from("lists_with_counts").select("*").eq("id", listId).eq("user_id", user.id).single();
    if (listError) {
      console.error("List fetch error:", listError);
      return json({
        user,
        list: null,
        members: [],
        availableRecipients: [],
        error: "Database not configured. Please set up your Supabase database."
      });
    }
    if (!list) {
      throw new Response("List not found", { status: 404 });
    }
    const { data: members, error: membersError } = await supabase.from("list_memberships").select(`
        id,
        added_at,
        subscribers (
          id,
          email,
          first_name,
          last_name,
          status,
          created_at
        )
      `).eq("list_id", listId).order("added_at", { ascending: false });
    if (membersError) {
      console.error("Members fetch error:", membersError);
      return json({ user, list, members: [], availableRecipients: [], error: "Failed to load list members" });
    }
    const membersList = members || [];
    const memberIds = membersList.map((m) => {
      var _a;
      return (_a = m.subscribers) == null ? void 0 : _a.id;
    }).filter(Boolean);
    const { data: availableRecipients, error: availableError } = await supabase.from("subscribers").select("id, email, first_name, last_name, status").eq("user_id", user.id).not("id", "in", `(${memberIds.join(",") || "null"})`).eq("status", "subscribed").order("email");
    return json({
      user,
      list,
      members: membersList,
      availableRecipients: availableRecipients || [],
      error: availableError ? "Failed to load available recipients" : null
    });
  } catch (error) {
    console.error("Loader error:", error);
    if (error instanceof Response) {
      throw error;
    }
    return json({
      user: null,
      list: null,
      members: [],
      availableRecipients: [],
      error: "Unable to connect to database. Please check your configuration."
    });
  }
}
async function action$3({ request, params }) {
  const user = await requireAuth(request);
  const listId = params.id;
  const formData = await request.formData();
  const action2 = formData.get("_action");
  if (!listId) {
    return json({ error: "List ID is required" }, { status: 400 });
  }
  if (action2 === "add-recipient") {
    const subscriberId = formData.get("subscriberId");
    if (!subscriberId) {
      return json({ error: "Subscriber ID is required" }, { status: 400 });
    }
    const { error } = await supabase.from("list_memberships").insert({
      list_id: listId,
      subscriber_id: subscriberId
    });
    if (error) {
      if (error.code === "23505") {
        return json({ error: "Recipient is already in this list" }, { status: 400 });
      }
      console.error("Add recipient error:", error);
      return json({ error: "Failed to add recipient to list" }, { status: 500 });
    }
    return json({ success: "Recipient added to list successfully" });
  }
  if (action2 === "remove-recipient") {
    const membershipId = formData.get("membershipId");
    if (!membershipId) {
      return json({ error: "Membership ID is required" }, { status: 400 });
    }
    const { error } = await supabase.from("list_memberships").delete().eq("id", membershipId).eq("list_id", listId);
    if (error) {
      console.error("Remove recipient error:", error);
      return json({ error: "Failed to remove recipient from list" }, { status: 500 });
    }
    return json({ success: "Recipient removed from list successfully" });
  }
  if (action2 === "add-by-email") {
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    if (!email) {
      return json({ error: "Email is required" }, { status: 400 });
    }
    const { data: subscriber, error: subscriberError } = await supabase.from("subscribers").upsert({
      user_id: user.id,
      email: email.toLowerCase(),
      first_name: firstName || null,
      last_name: lastName || null,
      status: "subscribed"
    }, {
      onConflict: "user_id,email"
    }).select("id").single();
    if (subscriberError) {
      console.error("Subscriber upsert error:", subscriberError);
      return json({ error: "Failed to create subscriber" }, { status: 500 });
    }
    const { error: membershipError } = await supabase.from("list_memberships").insert({
      list_id: listId,
      subscriber_id: subscriber.id
    });
    if (membershipError) {
      if (membershipError.code === "23505") {
        return json({ error: "Recipient is already in this list" }, { status: 400 });
      }
      console.error("Add membership error:", membershipError);
      return json({ error: "Failed to add recipient to list" }, { status: 500 });
    }
    return json({ success: "Recipient added to list successfully" });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
function ListDetail() {
  const { user, list, members, availableRecipients, error } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  const [searchTerm, setSearchTerm] = useState("");
  const membersList = members || [];
  const availableList = availableRecipients || [];
  if (error && !list) {
    return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsx(Header, { user: user || { id: "", email: "", full_name: "Guest" } }),
        /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(Card, { className: "border-red-200 bg-red-50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-red-900 mb-4", children: "Database Configuration Required" }),
          /* @__PURE__ */ jsx("p", { className: "text-red-800 mb-6", children: error }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: "To access this functionality, you need to set up your Supabase database." }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View Demo Version" }) }),
              /* @__PURE__ */ jsx(Button, { onClick: () => window.open("/setup-demo.md", "_blank"), children: "Setup Guide" })
            ] })
          ] })
        ] }) }) }) })
      ] })
    ] });
  }
  const filteredMembers = membersList.filter((member) => {
    var _a;
    if (!member || !member.subscribers) return false;
    const subscriber = member.subscribers;
    const fullName = `${subscriber.first_name || ""} ${subscriber.last_name || ""}`.trim();
    const searchLower = searchTerm.toLowerCase();
    return ((_a = subscriber.email) == null ? void 0 : _a.toLowerCase().includes(searchLower)) || fullName.toLowerCase().includes(searchLower);
  });
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Lists"
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-6 h-6 rounded-full mr-3",
                style: { backgroundColor: (list == null ? void 0 : list.color) || "#3B82F6" }
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: (list == null ? void 0 : list.name) || "List" }),
              (list == null ? void 0 : list.description) && /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: list.description })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx(
            "span",
            {
              className: `px-3 py-1 text-sm rounded-full ${(list == null ? void 0 : list.is_active) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
              children: (list == null ? void 0 : list.is_active) ? "Active" : "Inactive"
            }
          ) })
        ] }),
        error && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: error }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-blue-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Members" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: (list == null ? void 0 : list.total_members) || 0 })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-green-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Subscribed" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: (list == null ? void 0 : list.subscribed_members) || 0 })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-purple-50", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Available to Add" }),
              /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: availableList.length })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5 mr-2" }),
                "Add Recipients"
              ] }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Add new recipients to this list" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Add New Recipient" }),
                /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "add-by-email" }),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      name: "email",
                      type: "email",
                      placeholder: "Email address",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        name: "firstName",
                        placeholder: "First name"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        name: "lastName",
                        placeholder: "Last name"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", className: "w-full", disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Recipient" })
                ] })
              ] }),
              availableList.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Add Existing Recipients" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 max-h-64 overflow-y-auto", children: [
                  availableList.slice(0, 10).map((recipient) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: recipient.email }),
                      (recipient.first_name || recipient.last_name) && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: [recipient.first_name, recipient.last_name].filter(Boolean).join(" ") })
                    ] }),
                    /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "add-recipient" }),
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "subscriberId", value: recipient.id }),
                      /* @__PURE__ */ jsx(Button, { type: "submit", size: "sm", variant: "outline", disabled: isSubmitting, children: /* @__PURE__ */ jsx(UserPlus, { className: "h-3 w-3" }) })
                    ] })
                  ] }, recipient.id)),
                  availableList.length > 10 && /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 text-center", children: [
                    "And ",
                    availableList.length - 10,
                    " more recipients..."
                  ] })
                ] })
              ] }),
              (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm bg-red-50 p-3 rounded-md", children: actionData.error }),
              (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ jsx("div", { className: "text-green-600 text-sm bg-green-50 p-3 rounded-md", children: actionData.success })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "List Members" }),
              /* @__PURE__ */ jsx(CardDescription, { children: "Manage recipients in this list" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Search members...",
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    className: "pl-10"
                  }
                )
              ] }) }),
              filteredMembers.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: searchTerm ? "No members match your search." : "No members in this list yet." })
              ] }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Email" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Name" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Status" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Added" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 font-medium text-gray-900", children: "Actions" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: filteredMembers.map((member) => {
                  const subscriber = member.subscribers;
                  return /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
                    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-900", children: subscriber.email }),
                    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-600", children: [subscriber.first_name, subscriber.last_name].filter(Boolean).join(" ") || "-" }),
                    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `px-2 py-1 text-xs rounded-full ${subscriber.status === "subscribed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`,
                        children: subscriber.status === "subscribed" ? "Subscribed" : "Unsubscribed"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-500", children: new Date(member.added_at).toLocaleDateString() }),
                    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm", children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "inline", children: [
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "_action", value: "remove-recipient" }),
                      /* @__PURE__ */ jsx("input", { type: "hidden", name: "membershipId", value: member.id }),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          type: "submit",
                          variant: "outline",
                          size: "sm",
                          className: "text-red-600 hover:text-red-700",
                          disabled: isSubmitting,
                          onClick: (e) => {
                            if (!confirm("Remove this recipient from the list?")) {
                              e.preventDefault();
                            }
                          },
                          children: /* @__PURE__ */ jsx(UserMinus, { className: "h-4 w-4" })
                        }
                      )
                    ] }) })
                  ] }, member.id);
                }) })
              ] }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  default: ListDetail,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$3({ request }) {
  const user = await requireAuth(request);
  return json({ user });
}
async function action$2({ request }) {
  const user = await requireAuth(request);
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const color = formData.get("color");
  if (!name) {
    return json({ error: "List name is required" }, { status: 400 });
  }
  const { data: existingList } = await supabase.from("lists").select("id").eq("user_id", user.id).eq("name", name).single();
  if (existingList) {
    return json({ error: "A list with this name already exists" }, { status: 400 });
  }
  const { error } = await supabase.from("lists").insert({
    user_id: user.id,
    name,
    description: description || "",
    color: color || "#3B82F6",
    is_active: true
  });
  if (error) {
    console.error("List creation error:", error);
    return json({ error: "Failed to create list" }, { status: 500 });
  }
  return redirect("/lists");
}
const colorOptions = [
  { name: "Blue", value: "#3B82F6" },
  { name: "Green", value: "#10B981" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Red", value: "#EF4444" },
  { name: "Orange", value: "#F59E0B" },
  { name: "Pink", value: "#EC4899" },
  { name: "Indigo", value: "#6366F1" },
  { name: "Teal", value: "#14B8A6" }
];
function NewList() {
  const { user } = useLoaderData();
  const actionData = useActionData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsx(Header, { user }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
          /* @__PURE__ */ jsx(Link, { to: "/lists", className: "mr-4", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }),
            "Back to Lists"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Create New List" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Create a new list to organize your subscribers." })
          ] })
        ] }),
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx(Card, { className: "mb-6 border-red-200 bg-red-50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsx("p", { className: "text-red-800", children: actionData.error }) }) }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "List Information" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Enter the details for your new subscriber list." })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "List Name *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "name",
                  placeholder: "e.g., Newsletter Subscribers, VIP Customers",
                  required: true,
                  className: "w-full"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  name: "description",
                  placeholder: "Describe what this list is for...",
                  className: "w-full",
                  rows: 3
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-3", children: "List Color" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-3", children: colorOptions.map((color) => /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2 cursor-pointer", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "radio",
                    name: "color",
                    value: color.value,
                    defaultChecked: color.value === "#3B82F6",
                    className: "sr-only"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center",
                    style: { backgroundColor: color.value },
                    children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-white opacity-0 peer-checked:opacity-100" })
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: color.name })
              ] }, color.value)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: "flex-1",
                  children: [
                    /* @__PURE__ */ jsx(List, { className: "h-4 w-4 mr-2" }),
                    isSubmitting ? "Creating List..." : "Create List"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Link, { to: "/lists", className: "flex-1", children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full", children: "Cancel" }) })
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  default: NewList,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "xMailer - Professional Email Marketing Platform" },
    { name: "description", content: "Transform your email marketing with xMailer. Create stunning campaigns, manage recipients, and track performance with our powerful platform." }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-4", children: [
      /* @__PURE__ */ jsx(Logo, { size: "lg" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/auth/login", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Sign In" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: /* @__PURE__ */ jsx(Button, { children: "Get Started" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6", children: [
        "Email Marketing",
        /* @__PURE__ */ jsx("span", { className: "block text-blue-600", children: "Made Simple" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8 max-w-3xl mx-auto", children: "Create stunning email campaigns, manage your audience, and track performance with xMailer's powerful yet intuitive email marketing platform." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "w-full sm:w-auto", children: "Start Free Trial" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", className: "w-full sm:w-auto", children: "View Demo" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Everything You Need for Email Success" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "From campaign creation to performance tracking, xMailer provides all the tools you need to grow your business through email marketing." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-blue-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Campaign Builder" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Create beautiful, responsive email campaigns with our intuitive drag-and-drop editor." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 text-green-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Audience Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Organize your contacts into targeted lists and segments for personalized messaging." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-8 w-8 text-purple-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Analytics & Reporting" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Track opens, clicks, and conversions with detailed analytics and insights." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Zap, { className: "h-8 w-8 text-yellow-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Automation" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Set up automated email sequences and workflows to nurture your leads." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-red-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Deliverability" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Ensure your emails reach the inbox with our advanced deliverability features." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Globe, { className: "h-8 w-8 text-indigo-600" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Global Reach" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Send emails worldwide with our reliable infrastructure and global delivery network." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-600", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Ready to Transform Your Email Marketing?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8", children: "Join thousands of businesses already using xMailer to grow their audience and increase revenue." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/auth/register", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-50", children: "Start Your Free Trial" }) }),
        /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600", children: "View Demo" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ jsx(Logo, { variant: "light", size: "lg", className: "mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-4 max-w-md", children: "xMailer is the professional email marketing platform that helps businesses create, send, and track email campaigns with ease." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Product" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Features" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Pricing" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Templates" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Integrations" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Support" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-400", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Help Center" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Contact Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "API Docs" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Status" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400", children: /* @__PURE__ */ jsx("p", { children: "© 2024 xMailer. All rights reserved." }) })
    ] }) })
  ] });
}
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request }) {
  return logout(request);
}
async function loader$2() {
  return new Response("Method not allowed", { status: 405 });
}
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1({ request }) {
  const user = await getUser(request);
  if (user) {
    return redirect("/dashboard");
  }
  return json({
    env: {
      SUPABASE_URL: "https://wiowklgoaeeotfwjaoyq.supabase.co",
      SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpb3drbGdvYWVlb3Rmd2phb3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMjgwNTksImV4cCI6MjA2OTkwNDA1OX0.QE03BLTkuxvn-b9VTtZKEljzYF-ByGl8eHRVhQzrysA"
    }
  });
}
async function action({ request }) {
  var _a, _b;
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const action2 = formData.get("_action");
  if (!email || !password) {
    return json({ error: "Email and password are required" }, { status: 400 });
  }
  if (action2 === "login") {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    if (!data.session) {
      return json({ error: "Failed to create session" }, { status: 400 });
    }
    const { error: profileError } = await supabase.from("profiles").upsert({
      id: data.user.id,
      email: data.user.email,
      full_name: ((_a = data.user.user_metadata) == null ? void 0 : _a.full_name) || null,
      updated_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    if (profileError) {
      console.error("Profile creation error:", profileError);
    }
    return createUserSession(
      data.session.access_token,
      data.session.refresh_token,
      "/dashboard"
    );
  }
  if (action2 === "signup") {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/auth/callback`
      }
    });
    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    if (data.user && !data.session) {
      return json({
        message: "Check your email for a verification link before signing in.",
        showResend: true,
        email
      });
    }
    if (data.session) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        email: data.user.email,
        full_name: ((_b = data.user.user_metadata) == null ? void 0 : _b.full_name) || null
      });
      if (profileError) {
        console.error("Profile creation error:", profileError);
      }
      return createUserSession(
        data.session.access_token,
        data.session.refresh_token,
        "/dashboard"
      );
    }
  }
  if (action2 === "resend") {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: `${new URL(request.url).origin}/auth/callback`
      }
    });
    if (error) {
      return json({ error: error.message }, { status: 400 });
    }
    return json({ message: "Verification email sent! Check your inbox." });
  }
  return json({ error: "Invalid action" }, { status: 400 });
}
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData();
  const { env } = useLoaderData();
  const navigation2 = useNavigation();
  const isSubmitting = navigation2.state === "submitting";
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.ENV = env;
    }
  }, [env]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx(Logo, { variant: "dark", size: "lg" }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: isSignUp ? "Create Account" : "Welcome Back" }),
      /* @__PURE__ */ jsx(CardDescription, { children: isSignUp ? "Sign up to start sending bulk emails" : "Sign in to your email autoresponder account" })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs(Form, { method: "post", className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Input,
          {
            type: "email",
            name: "email",
            placeholder: "Email address",
            required: true,
            className: "w-full",
            defaultValue: (actionData == null ? void 0 : actionData.email) || ""
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              type: showPassword ? "text" : "password",
              name: "password",
              placeholder: "Password",
              required: true,
              className: "w-full pr-10",
              minLength: 6
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword(!showPassword),
              className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
              children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
            }
          )
        ] }),
        (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ jsx("div", { className: "text-red-600 text-sm text-center bg-red-50 p-3 rounded-md", children: actionData.error }),
        (actionData == null ? void 0 : actionData.message) && /* @__PURE__ */ jsxs("div", { className: "text-green-600 text-sm text-center bg-green-50 p-3 rounded-md", children: [
          actionData.message,
          actionData.showResend && /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              name: "_action",
              value: "resend",
              variant: "outline",
              size: "sm",
              disabled: isSubmitting,
              children: "Resend verification email"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            name: "_action",
            value: isSignUp ? "signup" : "login",
            className: "w-full",
            disabled: isSubmitting,
            children: isSubmitting ? "Processing..." : isSignUp ? "Create Account" : "Sign In"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setIsSignUp(!isSignUp),
          className: "text-blue-600 hover:text-blue-500 text-sm",
          children: isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"
        }
      ) }),
      !isSignUp && /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "/forgot-password",
          className: "text-sm text-gray-600 hover:text-gray-800",
          children: "Forgot your password?"
        }
      ) })
    ] })
  ] }) });
}
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Login,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  const mockData = {
    stats: {
      totalCampaigns: 5,
      totalRecipients: 1250,
      totalSent: 4890,
      totalLists: 8
    },
    recentCampaigns: [
      {
        id: "1",
        name: "Welcome Series",
        subject: "Welcome to our newsletter!",
        status: "sent",
        sent_count: 1200,
        total_recipients: 1200
      },
      {
        id: "2",
        name: "Product Launch",
        subject: "Introducing our latest product",
        status: "sending",
        sent_count: 450,
        total_recipients: 800
      }
    ],
    lists: [
      {
        id: "ac70fb2e-53c2-46bb-9b29-50e4b695bdc9",
        name: "Newsletter Subscribers",
        description: "General newsletter subscribers",
        color: "#3B82F6",
        subscribed_members: 1200,
        total_members: 1250,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "2",
        name: "Product Updates",
        description: "Users interested in product updates",
        color: "#10B981",
        subscribed_members: 890,
        total_members: 920,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  };
  return json(mockData);
}
function Demo() {
  const { stats, recentCampaigns, lists } = useLoaderData();
  const statCards = [
    {
      title: "Total Campaigns",
      value: stats.totalCampaigns,
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Recipients",
      value: stats.totalRecipients,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Emails Sent",
      value: stats.totalSent,
      icon: Send,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Lists",
      value: stats.totalLists,
      icon: List,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsx(Logo, { size: "lg" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full", children: "Demo Mode" }),
        /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Setup Project" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Welcome to xMailer" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Professional Email Marketing Platform - Demo Mode" }),
        /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-800 text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "Demo Mode:" }),
          " This is a preview of your xMailer dashboard with sample data. To access full functionality, set up your Supabase database using the setup guide above."
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: statCards.map((stat) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg ${stat.bgColor}`, children: /* @__PURE__ */ jsx(stat.icon, { className: `h-6 w-6 ${stat.color}` }) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: stat.title }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-gray-900", children: stat.value.toLocaleString() })
        ] })
      ] }) }) }, stat.title)) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Recent Campaigns" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Your latest email campaigns and their status" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: recentCampaigns.map((campaign) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center justify-between p-4 border rounded-lg",
              children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: campaign.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: campaign.subject })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `px-2 py-1 text-xs rounded-full ${campaign.status === "sent" ? "bg-green-100 text-green-800" : campaign.status === "sending" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`,
                      children: campaign.status
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
                    campaign.sent_count,
                    " / ",
                    campaign.total_recipients,
                    " sent"
                  ] })
                ] })
              ]
            },
            campaign.id
          )) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsx(CardTitle, { children: "Your Lists" }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Organized subscriber lists for targeted campaigns" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: lists.map((list) => /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-4 h-4 rounded-full",
                    style: { backgroundColor: list.color }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900", children: list.name }),
                  list.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: list.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: `/demo/lists/${list.id}`,
                  className: "text-blue-600 hover:text-blue-700",
                  children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                list.subscribed_members,
                " subscribers"
              ] }),
              /* @__PURE__ */ jsx("span", { children: new Date(list.created_at).toLocaleDateString() })
            ] })
          ] }, list.id)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(Card, { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Ready to set up your real xMailer project?" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Follow the setup guide to connect your Supabase database and start sending real campaigns." }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/setup-demo.md", children: /* @__PURE__ */ jsx(Button, { children: "View Setup Guide" }) }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => window.open("https://supabase.com", "_blank"), children: "Get Supabase Account" })
        ] })
      ] }) }) })
    ] })
  ] });
}
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Demo,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bt-fpvCY.js", "imports": ["/assets/components-B71KIw6b.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-DN-UagvU.js", "imports": ["/assets/components-B71KIw6b.js"], "css": ["/assets/root-CmWX8CUY.css"] }, "routes/api.campaigns.$id.send": { "id": "routes/api.campaigns.$id.send", "parentId": "root", "path": "api/campaigns/:id/send", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.campaigns._id.send-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/subscribers.$id.edit": { "id": "routes/subscribers.$id.edit", "parentId": "routes/subscribers.$id", "path": "edit", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/subscribers._id.edit-DUMTsM1x.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/alert-circle-UJB4NVXK.js", "/assets/save-CqtvPiWF.js", "/assets/users-TLTQjisN.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/subscribers._index": { "id": "routes/subscribers._index", "parentId": "root", "path": "subscribers", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/subscribers._index-D4jiNODF.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/card-D6xvUs-C.js", "/assets/input-gR889RM_.js", "/assets/plus-DNHlCd_Y.js", "/assets/search-D3iH17Gw.js", "/assets/users-TLTQjisN.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/email-apis._index": { "id": "routes/email-apis._index", "parentId": "root", "path": "email-apis", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/email-apis._index-BFG-PXaP.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/plus-DNHlCd_Y.js", "/assets/zap-CrcmDB4d.js", "/assets/trash-2-DSCc9uhn.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/recipients._index": { "id": "routes/recipients._index", "parentId": "root", "path": "recipients", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/recipients._index-MTEo9wNF.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/upload-DFgZRpj7.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/users-TLTQjisN.js", "/assets/plus-DNHlCd_Y.js", "/assets/trash-2-DSCc9uhn.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/analytics._index": { "id": "routes/analytics._index", "parentId": "root", "path": "analytics", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/analytics._index-lsRFf7te.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/card-D6xvUs-C.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/trending-up-dDfgd3P0.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/button-CpX_ak2_.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/campaigns._index": { "id": "routes/campaigns._index", "parentId": "root", "path": "campaigns", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/campaigns._index-DBvflDae.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/card-D6xvUs-C.js", "/assets/plus-DNHlCd_Y.js", "/assets/users-TLTQjisN.js", "/assets/calendar-DagQcv_q.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/dashboard._index": { "id": "routes/dashboard._index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard._index-DdxH3sNH.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/card-D6xvUs-C.js", "/assets/button-CpX_ak2_.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/trending-up-dDfgd3P0.js", "/assets/plus-DNHlCd_Y.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/forgot-password": { "id": "routes/forgot-password", "parentId": "root", "path": "forgot-password", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/forgot-password-Cp_EDHiF.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/logo-CCAmY4eY.js", "/assets/arrow-left-CfikeANU.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] }, "routes/settings._index": { "id": "routes/settings._index", "parentId": "root", "path": "settings", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/settings._index-e811WeO2.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/card-D6xvUs-C.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/shield-CXIIqWp3.js", "/assets/button-CpX_ak2_.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/subscribers.$id": { "id": "routes/subscribers.$id", "parentId": "root", "path": "subscribers/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/subscribers._id-5bcx9vP5.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/calendar-DagQcv_q.js", "/assets/users-TLTQjisN.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/subscribers.new": { "id": "routes/subscribers.new", "parentId": "root", "path": "subscribers/new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/subscribers.new-CAushjfj.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/user-plus-Dcuvb96f.js", "/assets/users-TLTQjisN.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/demo.lists.$id": { "id": "routes/demo.lists.$id", "parentId": "routes/demo", "path": "lists/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/demo.lists._id-jIFcj2IX.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/card-D6xvUs-C.js", "/assets/button-CpX_ak2_.js", "/assets/arrow-left-CfikeANU.js", "/assets/users-TLTQjisN.js", "/assets/calendar-DagQcv_q.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] }, "routes/reset-password": { "id": "routes/reset-password", "parentId": "root", "path": "reset-password", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/reset-password-CvIvDhJ5.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/logo-CCAmY4eY.js", "/assets/eye-Cm4B-ATZ.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] }, "routes/auth.callback": { "id": "routes/auth.callback", "parentId": "root", "path": "auth/callback", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.callback-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/auth.register": { "id": "routes/auth.register", "parentId": "root", "path": "auth/register", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.register-F0uRwBvR.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/logo-CCAmY4eY.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js"], "css": [] }, "routes/campaigns.$id": { "id": "routes/campaigns.$id", "parentId": "root", "path": "campaigns/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/campaigns._id-yLAGx7Mr.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/users-TLTQjisN.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/clock-BgQUbWRG.js", "/assets/send-Du1D2yV1.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/campaigns.new": { "id": "routes/campaigns.new", "parentId": "root", "path": "campaigns/new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/campaigns.new-DAtejzZl.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/textarea-CF-GwTTr.js", "/assets/arrow-left-CfikeANU.js", "/assets/save-CqtvPiWF.js", "/assets/zap-CrcmDB4d.js", "/assets/clock-BgQUbWRG.js", "/assets/users-TLTQjisN.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/settings.smtp": { "id": "routes/settings.smtp", "parentId": "root", "path": "settings/smtp", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/settings.smtp-DhkvQ7Xj.js", "imports": ["/assets/components-B71KIw6b.js"], "css": [] }, "routes/lists._index": { "id": "routes/lists._index", "parentId": "root", "path": "lists", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/lists._index-BA4R-bIl.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/card-D6xvUs-C.js", "/assets/plus-DNHlCd_Y.js", "/assets/send-Du1D2yV1.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/users-TLTQjisN.js", "/assets/calendar-DagQcv_q.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/lists.import": { "id": "routes/lists.import", "parentId": "root", "path": "lists/import", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/lists.import-C-HLKfGu.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/upload-DFgZRpj7.js", "/assets/alert-circle-UJB4NVXK.js", "/assets/check-circle-BhPuD76u.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/smtp._index": { "id": "routes/smtp._index", "parentId": "root", "path": "smtp", "index": true, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/smtp._index-D4oPIeHh.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/plus-DNHlCd_Y.js", "/assets/check-circle-BhPuD76u.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/trash-2-DSCc9uhn.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/auth.login": { "id": "routes/auth.login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/auth.login-ttkWu4zO.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/logo-CCAmY4eY.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js"], "css": [] }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/dashboard-BMKJR4m4.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/card-D6xvUs-C.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/button-CpX_ak2_.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/lists.$id": { "id": "routes/lists.$id", "parentId": "root", "path": "lists/:id", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/lists._id-ClRAtdnU.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/users-TLTQjisN.js", "/assets/plus-DNHlCd_Y.js", "/assets/user-plus-Dcuvb96f.js", "/assets/search-D3iH17Gw.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/send-Du1D2yV1.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/lists.new": { "id": "routes/lists.new", "parentId": "root", "path": "lists/new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/lists.new-yW5ZdO62.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/header-BHzBVBdg.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/textarea-CF-GwTTr.js", "/assets/card-D6xvUs-C.js", "/assets/arrow-left-CfikeANU.js", "/assets/send-Du1D2yV1.js", "/assets/users-TLTQjisN.js", "/assets/createLucideIcon-DDdTbUiS.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/logo-CCAmY4eY.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Cx0jGigm.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/logo-CCAmY4eY.js", "/assets/button-CpX_ak2_.js", "/assets/users-TLTQjisN.js", "/assets/bar-chart-3-CLxhACnx.js", "/assets/zap-CrcmDB4d.js", "/assets/shield-CXIIqWp3.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-DgijDlov.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/button-CpX_ak2_.js", "/assets/input-gR889RM_.js", "/assets/card-D6xvUs-C.js", "/assets/logo-CCAmY4eY.js", "/assets/eye-Cm4B-ATZ.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] }, "routes/demo": { "id": "routes/demo", "parentId": "root", "path": "demo", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/demo-DgM5ZLQ4.js", "imports": ["/assets/components-B71KIw6b.js", "/assets/card-D6xvUs-C.js", "/assets/button-CpX_ak2_.js", "/assets/logo-CCAmY4eY.js", "/assets/users-TLTQjisN.js", "/assets/send-Du1D2yV1.js", "/assets/createLucideIcon-DDdTbUiS.js"], "css": [] } }, "url": "/assets/manifest-877d37c7.js", "version": "877d37c7" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "v3_routeConfig": false, "v3_singleFetch": false, "v3_lazyRouteDiscovery": false, "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/api.campaigns.$id.send": {
    id: "routes/api.campaigns.$id.send",
    parentId: "root",
    path: "api/campaigns/:id/send",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/subscribers.$id.edit": {
    id: "routes/subscribers.$id.edit",
    parentId: "routes/subscribers.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/subscribers._index": {
    id: "routes/subscribers._index",
    parentId: "root",
    path: "subscribers",
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/email-apis._index": {
    id: "routes/email-apis._index",
    parentId: "root",
    path: "email-apis",
    index: true,
    caseSensitive: void 0,
    module: route4
  },
  "routes/recipients._index": {
    id: "routes/recipients._index",
    parentId: "root",
    path: "recipients",
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/analytics._index": {
    id: "routes/analytics._index",
    parentId: "root",
    path: "analytics",
    index: true,
    caseSensitive: void 0,
    module: route6
  },
  "routes/campaigns._index": {
    id: "routes/campaigns._index",
    parentId: "root",
    path: "campaigns",
    index: true,
    caseSensitive: void 0,
    module: route7
  },
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route8
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/settings._index": {
    id: "routes/settings._index",
    parentId: "root",
    path: "settings",
    index: true,
    caseSensitive: void 0,
    module: route10
  },
  "routes/subscribers.$id": {
    id: "routes/subscribers.$id",
    parentId: "root",
    path: "subscribers/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/subscribers.new": {
    id: "routes/subscribers.new",
    parentId: "root",
    path: "subscribers/new",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/demo.lists.$id": {
    id: "routes/demo.lists.$id",
    parentId: "routes/demo",
    path: "lists/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/reset-password": {
    id: "routes/reset-password",
    parentId: "root",
    path: "reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/auth.callback": {
    id: "routes/auth.callback",
    parentId: "root",
    path: "auth/callback",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/campaigns.$id": {
    id: "routes/campaigns.$id",
    parentId: "root",
    path: "campaigns/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/campaigns.new": {
    id: "routes/campaigns.new",
    parentId: "root",
    path: "campaigns/new",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/settings.smtp": {
    id: "routes/settings.smtp",
    parentId: "root",
    path: "settings/smtp",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/lists._index": {
    id: "routes/lists._index",
    parentId: "root",
    path: "lists",
    index: true,
    caseSensitive: void 0,
    module: route20
  },
  "routes/lists.import": {
    id: "routes/lists.import",
    parentId: "root",
    path: "lists/import",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/smtp._index": {
    id: "routes/smtp._index",
    parentId: "root",
    path: "smtp",
    index: true,
    caseSensitive: void 0,
    module: route22
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/lists.$id": {
    id: "routes/lists.$id",
    parentId: "root",
    path: "lists/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/lists.new": {
    id: "routes/lists.new",
    parentId: "root",
    path: "lists/new",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route27
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: route28
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/demo": {
    id: "routes/demo",
    parentId: "root",
    path: "demo",
    index: void 0,
    caseSensitive: void 0,
    module: route30
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
