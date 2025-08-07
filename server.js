import { createRequestHandler } from "@remix-run/node";
import * as build from "./build/server/index.js";

const requestHandler = createRequestHandler(build, process.env.NODE_ENV);

export default requestHandler;
