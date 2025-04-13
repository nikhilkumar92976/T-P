import React from "react";
import { ThemeProvider } from "next-themes";
import Login  from "./pages/notLogged/Login";
import { Theme,Flex } from "@radix-ui/themes";
import Signup from "./pages/notLogged/Signup";
import Dashboard from "./pages/logged/Dashboard";
import PlatformLogo from "./components/PlatformLogo";
function App() {
  return (
    <ThemeProvider attribute="class"  >
      <Theme className="w-screen h-screen">
        <Dashboard/>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
