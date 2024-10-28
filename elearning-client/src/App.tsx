import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsLayout from "./layouts/LayoutDocs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/guide/*"
          element={
            <DocsLayout>
              {/* Your MDX content will be rendered here */}
            </DocsLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
