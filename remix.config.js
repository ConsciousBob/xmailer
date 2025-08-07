/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.js",
  serverBuildPath: "build/server/index.js",
  // Add this to ensure compatibility with Vercel
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: [
    // Bundle nodemailer for serverless compatibility
    "nodemailer",
    /^nodemailer\/.*/,
  ],
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
};
