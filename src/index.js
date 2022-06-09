import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const e = React.createElement;

const root = createRoot(document.getElementById("root"));
root.render(e(App));
