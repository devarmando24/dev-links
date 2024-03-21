import "./index.css";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
