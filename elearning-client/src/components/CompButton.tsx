interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export const Button = ({ children, variant = "solid" }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${
        variant === "solid"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      {children}
    </button>
  );
};
