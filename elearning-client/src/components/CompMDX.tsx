import { Button } from "./CompButton";

const MDXComponents = {
  // ... previous components ...

  // Add demo components
  Button,

  // Add a wrapper for code examples
  Demo: ({ children }: { children: React.ReactNode }) => (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-500">Preview</span>
      </div>
      {children}
    </div>
  ),
};

export default MDXComponents;
