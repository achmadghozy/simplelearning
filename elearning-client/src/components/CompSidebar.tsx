import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    {
      section: "Guide",
      items: [
        { title: "Getting Started", href: "/guide/getting-started" },
        { title: "Installation", href: "/guide/installation" },
        { title: "Features", href: "/guide/features" },
      ],
    },
    // Add more sections as needed
  ];

  return (
    <nav className="p-4 h-full overflow-y-auto">
      {navigation.map((section) => (
        <div key={section.section} className="mb-6">
          <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wider">
            {section.section}
          </h3>
          <ul className="mt-2 space-y-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    location.pathname === item.href
                      ? "bg-purple-50 text-purple-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
