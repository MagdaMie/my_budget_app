import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ThemeWrapper from "./theme/ThemeWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </BrowserRouter>
  </StrictMode>
);
