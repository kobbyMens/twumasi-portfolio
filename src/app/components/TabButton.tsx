import React from "react";

function TabButton({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}) {
  const btnClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <span className={`mr-3 font-semibold hover:text-white ${btnClasses}`}>
        {children}
      </span>
    </button>
  );
}

export default TabButton;
