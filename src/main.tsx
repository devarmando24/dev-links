import "./index.css";
import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
