import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
const Home = lazy(() => import("./pages/logged/student_dashboard_pages/Home.jsx"));
const ForgotPassword = lazy(() =>
  import("./pages/Landing Page/forgotPassword.jsx")
);
const Login = lazy(() => import("./pages/Landing Page/Login.jsx"));
const Signup = lazy(() => import("./pages/Landing Page/Signup.jsx"));
const Welcome = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Welcome.jsx")
);
const Dashboard = lazy(() => import("./pages/logged/Dashboard.jsx"));
const Profile = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Profile.jsx")
);
const Tests = lazy(() =>
  import("./pages/logged/student_dashboard_pages/OngoingTests.jsx")
);
const TestHistory = lazy(() =>
  import("./pages/logged/student_dashboard_pages/TestHistory.jsx")
);
const Practice = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Practice.jsx")
);
const CodeEditor = lazy(() =>
  import("./pages/logged/student_dashboard_pages/CodeEditor.jsx")
);
const Contact = lazy(() => import("./pages/Landing Page/Contact.jsx"));
const About = lazy(() => import("./pages/Landing Page/About.jsx"));
const TermsConditions = lazy(() =>
  import("./pages/logged/student_dashboard_pages/TermsConditions.jsx")
);
const Materials = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Materials.jsx")
);

const withSuspense = (Component) => {
  return (
    <Suspense fallback={<center>Loading...</center>}>
      <Component />
    </Suspense>
  );
};
const Router = createBrowserRouter([
  {
    path: "*",
    element: withSuspense(Welcome),
  },
  {
    path: "/" ,
    element: withSuspense(App),
  },
  {
    path: "/login",
    element: withSuspense(Login),
  },
  {
    path: "/signup",
    element: withSuspense(Signup),
  },
  {
    path: "/forgot-password",
    element: withSuspense(ForgotPassword),
  },
  {
    path: "/dashboard",
    element: withSuspense(Dashboard),
    children: [
      {
        path: "home",
        element: withSuspense(Home),
      },
      {
        path: "profile",
        element: withSuspense(Profile),
      },
      {
        path: "ongoing-tests",
        element: withSuspense(Tests),
      },
      {
        path: "test-history",
        element: withSuspense(TestHistory),
      },
      {
        path: "practice",
        element: withSuspense(Practice),
      },
      {
        path: "code-editor",
        element: withSuspense(CodeEditor),
      },
      {
        path: "contact",
        element: withSuspense(Contact),
      },
      {
        path: "about",
        element: withSuspense(About),
      },
      {
        index: true,
        element: withSuspense(Welcome),
      },
    ],
  },
  //TODO : below routes are not set properly, need to be fixed
  {
    path: "dashboard/tests/terms-conditions",
    element: <TermsConditions />,
  },
  // {
  //   path: "dashboard/tests/questions",
  //   element: <  />,
  // },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
