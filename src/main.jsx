import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/font/fontStylesheet.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <App/>
    </NextThemesProvider>
  </NextUIProvider>
);
