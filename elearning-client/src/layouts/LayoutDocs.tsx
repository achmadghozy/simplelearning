import { useEffect, useState } from "react";
import Sidebar from "../components/CompSidebar";
import NavBar from "../components/CompNavbar";
import { Outlet, useLocation } from "react-router-dom";

// OnPageNav Component
const OnPageNav = () => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const elements = document.querySelectorAll("h2, h3");
    const headingsList = Array.from(elements).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.charAt(1)),
    }));
    setHeadings(headingsList);
  }, []);

  return (
    <nav className="space-y-2">
      {headings.map((heading) => (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          className={`
            block text-sm
            ${heading.level === 2 ? "text-gray-900" : "text-gray-600 pl-4"}
            hover:text-blue-600
          `}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
};

const DocsLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Table of contents data
  const tableOfContents = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction", href: "/docs/introduction" },
        { title: "Quick Start", href: "/docs/getting-started" },
        { title: "Enrollment", href: "/docs/installation" },
      ],
    },
    {
      title: "Material",
      items: [
        { title: "Button", href: "/docs/components/button" },
        { title: "Card", href: "/docs/components/card" },
        { title: "Input", href: "/docs/components/input" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navbar */}
      <NavBar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 bottom-0 left-0 z-50 
            w-72 bg-white border-r border-gray-200 
            transform transition-transform duration-200 ease-in-out 
            lg:translate-x-0 lg:static lg:z-0 
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="sticky top-0 overflow-y-auto h-screen pt-16 pb-8">
            <Sidebar
              items={tableOfContents}
              currentPath={location.pathname}
              onLinkClick={() => setIsSidebarOpen(false)}
            />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex">
              {/* Documentation content */}
              <div className="flex-1 py-8 min-w-0">
                <article className="prose prose-slate max-w-none">
                  <Outlet />
                </article>
              </div>

              {/* Right sidebar - On page navigation */}
              <div className="hidden xl:block flex-none w-64 pl-8">
                <div className="sticky top-16 pt-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">
                    On this page
                  </h4>
                  <OnPageNav />
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 border-t border-gray-200 py-8">
              <div className="text-sm text-gray-500">
                <p>All rights reserved.</p>
                <p className="mt-2">
                  Need help?{" "}
                  <a
                    href="/support"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Contact Support
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
