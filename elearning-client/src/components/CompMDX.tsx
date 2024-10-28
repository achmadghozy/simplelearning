import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

const MDXComponents = {
  // Headings
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-bold mb-6 tracking-tight">{children}</h1>
  ),

  h2: ({ children, id }: { children: ReactNode; id?: string }) => (
    <h2
      id={id}
      className="group flex items-center text-2xl font-semibold mt-12 mb-4"
    >
      {children}
      <a
        href={`#${id}`}
        className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400"
        aria-label="Anchor"
      >
        #
      </a>
    </h2>
  ),

  // Paragraphs
  p: ({ children }: { children: ReactNode }) => (
    <p className="leading-7 mb-4 text-gray-700">{children}</p>
  ),

  // Links
  a: ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
      to={href}
      className="text-blue-600 hover:text-blue-800 underline underline-offset-2"
    >
      {children}
    </Link>
  ),

  // Code blocks
  code: ({ children, className }: CodeBlockProps) => {
    const language = className?.replace("language-", "");

    return (
      <div className="relative group">
        {language && (
          <span className="absolute right-2 top-2 text-xs text-gray-400">
            {language}
          </span>
        )}
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
          <code className={className}>{children}</code>
        </pre>
        <button
          onClick={() => navigator.clipboard.writeText(children as string)}
          className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 
                   bg-white/10 text-white px-2 py-1 rounded text-sm"
        >
          Copy
        </button>
      </div>
    );
  },

  // Inline code
  inlineCode: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 text-red-600 rounded px-1 py-0.5 text-sm">
      {children}
    </code>
  ),

  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),

  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),

  // Blockquotes
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">
      {children}
    </blockquote>
  ),

  // Tables
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  ),

  th: ({ children }: { children: ReactNode }) => (
    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {children}
    </th>
  ),

  td: ({ children }: { children: ReactNode }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {children}
    </td>
  ),

  // Custom Components
  Callout: ({
    children,
    type = "info",
  }: {
    children: ReactNode;
    type?: "info" | "warning" | "error";
  }) => {
    const styles = {
      info: "bg-blue-50 border-blue-200 text-blue-800",
      warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
      error: "bg-red-50 border-red-200 text-red-800",
    };

    return (
      <div className={`p-4 my-4 border-l-4 rounded-r ${styles[type]}`}>
        {children}
      </div>
    );
  },
};

export default MDXComponents;
