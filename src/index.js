import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Prac from "./prac1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Prac/>
  </StrictMode>
);

