export const Badge = ({ children }) => {
  return (
    <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
      {children}
    </span>
  );
};