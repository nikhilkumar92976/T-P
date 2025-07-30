import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

const Students = lazy(() =>
  import("./pages/logged/Admin_dashboard_pages/Students.jsx")
);
const TestManagement = lazy(() =>
  import("./pages/logged/Admin_dashboard_pages/TestManagement.jsx")
);
const Queries = lazy(() =>
  import("./pages/logged/Admin_dashboard_pages/Queries.jsx")
);
const OngoingTests = lazy(() =>
  import("./pages/logged/student_dashboard_pages/OngoingTests.jsx")
);
const ProjectsAndSkills = lazy(() =>
  import("./pages/logged/student_dashboard_pages/ProjectsAndSkills.jsx")
);
const Quantative = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Quantative.jsx")
);
const Logical = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Logical.jsx")
);
const CoreFundamentals = lazy(() =>
  import("./pages/logged/student_dashboard_pages/CoreFundamentals.jsx")
);
const Verbal = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Verbal.jsx")
);
const PseudoCode = lazy(() =>
  import("./pages/logged/student_dashboard_pages/PseudoCode.jsx")
);
const Comprehension = lazy(() =>
  import(
    "./pages/logged/student_dashboard_pages/test-components/Comprehension.jsx"
  )
);
const Instruction = lazy(() =>
  import(
    "./pages/logged/student_dashboard_pages/test-components/Instruction.jsx"
  )
);
const TestPage = lazy(() =>
  import("./pages/logged/student_dashboard_pages/test-components/TestPage.jsx")
);
const Writex = lazy(() =>
  import("./pages/logged/student_dashboard_pages/test-components/Writex.jsx")
);
const StudentHome = lazy(() =>
  import("./pages/logged/student_dashboard_pages/StudentHome.jsx")
);
const AdminHome = lazy(() =>
  import("./pages/logged/admin_dashboard_pages/AdminHome.jsx")
);
const Resources = lazy(() =>
  import("./pages/logged/Admin_dashboard_pages/Resources.jsx")
);
const ForgotPassword = lazy(() =>
  import("./pages/Landing Page/forgotPassword.jsx")
);
const Login = lazy(() => import("./pages/Landing Page/Login.jsx"));
const Signup = lazy(() => import("./pages/Landing Page/Signup.jsx"));
const Welcome = lazy(() =>
  import("./pages/logged/student_dashboard_pages/Welcome.jsx")
);
const Admin_Dashboard = lazy(() =>
  import("./pages/logged/Admin_Dashboard.jsx")
);
const Student_Dashboard = lazy(() =>
  import("./pages/logged/Student_Dashboard.jsx")
);
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
    path: "/",
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
    path: "/student_dashboard",
    element: withSuspense(Student_Dashboard),
    children: [
      {
        path: "practice",
        element: withSuspense(Practice),
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
        path: "analysis",
        element: withSuspense(StudentHome),
      },
      {
        path: "skills",
        element: withSuspense(ProjectsAndSkills),
      },
      {
        path: "certifications-projects",
        element: withSuspense(ProjectsAndSkills),
      },
      {
        path: "daily-works",
        element: withSuspense(ProjectsAndSkills),
      },

      {
        path: "ongoing-tests",
        element: withSuspense(OngoingTests),
      },
      {
        path: "test-history",
        element: withSuspense(TestHistory),
      },
      {
        path: "quantative-apt",
        element: withSuspense(Quantative),
      },
      {
        path: "logical-apt",
        element: withSuspense(Logical),
      },
      {
        path: "core-fundamentals",
        element: withSuspense(CoreFundamentals),
      },
      {
        path: "verbal-practice",
        element: withSuspense(Verbal),
      },
      {
        path: "pseudo-code",
        element: withSuspense(PseudoCode),
      },
      {
        path: "code-editor",
        element: withSuspense(CodeEditor),
      },
      {
        path: "materials",
        element: withSuspense(About),
      },
      {
        path: "compete-mode",
        element: withSuspense(About),
      },
      {
        path: "add-suggestions",
        element: withSuspense(About),
      },
      {
        path: "writex-assessment",
        element: withSuspense(Writex),
      },
      {
        index: true,
        element: withSuspense(Welcome),
      },
    ],
  },

  {
    path: "/admin_dashboard",
    element: withSuspense(Admin_Dashboard),
    children: [
      {
        path: "dashboard",
        element: withSuspense(AdminHome),
      },
      // {
      //   path: "student-performance",
      //   element: withSuspense(Performance),
      // },
      {
        path: "resources",
        element: withSuspense(Resources),
      },
      {
        path: "test-management",
        element: withSuspense(TestManagement),
      },
      {
        path: "manage-students",
        element: withSuspense(Students),
      },
      {
        path: "students-queries",
        element: withSuspense(Queries),
      },
      {
        index: true,
        element: withSuspense(Welcome),
      },
    ],
  },
  {
    path: "/test",
    children: [
      {
        path: "comprehension",
        element: <Comprehension />,
      },
      {
        path: "instructions",
        element: <Instruction />,
      },
      {
        path: "test-started",
        element: <TestPage />,
      },
    ],
  },
  {
    path: "dashboard/tests/terms-conditions",
    element: <TermsConditions />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
