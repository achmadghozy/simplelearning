import { Link, useLocation } from "react-router-dom";

interface SidebarItem {
  title: string;
  href: string;
}
interface SidebarSection {
  title: string;
  items: SidebarItem[];
}
interface SidebarProps {
  items: SidebarSection[];
  currentPath: string;
  onLinkClick?: () => void;
}
const Sidebar = ({ items, currentPath, onLinkClick }: SidebarProps) => {
  return (
    <nav className="px-4 space-y-8">
      {items.map((section) => (
        <div key={section.title}>
          <h5 className="mb-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">
            {section.title}
          </h5>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={onLinkClick}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    currentPath === item.href
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Version and Links */}
      <div className="px-3 py-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-gray-600">v1.0.0</span>
          <span className="text-gray-300">|</span>
          <a
            href="https://github.com/your-repo"
            target="blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
          <span className="text-gray-300">|</span>
          <a href="/changelog" className="text-gray-600 hover:text-gray-900">
            Changelog
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
