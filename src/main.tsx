import "./index.css";
import ReactDOM from "react-dom/client";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";

// import { App } from "./App.tsx";
import { Details } from "./Details.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    {/* <App /> */} <Details />
  </ThemeContextProvider>
);
