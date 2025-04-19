import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import LandingPage from "./pages/notLogged/LandingPage.jsx";
import Login from "./pages/notLogged/Login.jsx";
import Signup from "./pages/notLogged/Signup.jsx";
import Profile from "./pages/logged/dashboard_pages/Profile.jsx";
import Welcome from "./pages/logged/dashboard_pages/Welcome.jsx";
import Dashboard from "./pages/logged/Dashboard.jsx";
import Tests from "./pages/logged/dashboard_pages/Tests.jsx";
import Prepration from "./pages/logged/dashboard_pages/Prepration.jsx";
import CodeEditor from "./pages/logged/editor/comp/CodeEditor.jsx";
import History from "./pages/logged/dashboard_pages/History.jsx";
const Router = createBrowserRouter([
  {
    path:"*",
    element:<Welcome/>
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children:[
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'tests',
        element:<Tests/>
      },
      {
        path:'history',
        element:<History/>
      },
      {
        path:'prepration',
        element:<Prepration/>
      },
      {
        path:'codeeditor',
        element:<CodeEditor/>
      },
      {
        index:true,
        element:<Welcome/>
      },
  ]
  },
]);
//  <Routes>
//       <Route path="/" element={<Dashboard/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/singup" element={<Singup/>}/>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="codeeditor" element={<CodeEditor/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
// </Routes>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
