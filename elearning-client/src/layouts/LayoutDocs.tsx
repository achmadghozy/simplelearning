import { FC, ReactNode } from "react";
import Sidebar from "../components/CompSidebar";
import NavBar from "../components/CompNavbar";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="fixed w-64 h-screen border-r border-gray-200">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64">
        <NavBar />
        <main className="px-8 py-6 max-w-4xl mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default DocsLayout;
