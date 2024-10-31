import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "./components/CompMDX";
import DocsLayout from "./layouts/LayoutDocs";
import GettingStarted from "./contents/docs/gettingstarted.mdx";
import Enrollment from "./contents/docs/enrollment.mdx";
import Registration from "./pages/PageReg";
import StudentDashboard from "./pages/PageStudentDashboard";
import TeacherDashboard from "./pages/PageTeacherDashboard";

function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <BrowserRouter>
        <Routes>
          <Route path="/docs" element={<DocsLayout />}>
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="enrollment" element={<Enrollment />} />
          </Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route
            path="/studentdashboard"
            element={<StudentDashboard />}
          ></Route>
          <Route
            path="/teacherdashboard"
            element={<TeacherDashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  );
}

export default App;
