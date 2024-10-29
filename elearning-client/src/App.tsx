import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "./components/CompMDX";
import DocsLayout from "./layouts/LayoutDocs";
import GettingStarted from "./contents/docs/gettingstarted.mdx";

function App() {
  return (
    <MDXProvider components={MDXComponents}>
      <BrowserRouter>
        <Routes>
          <Route path="/docs" element={<DocsLayout />}>
            <Route path="getting-started" element={<GettingStarted />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  );
}

export default App;
