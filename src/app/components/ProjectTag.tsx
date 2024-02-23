import React from "react";

function ProjectTag({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}) {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} px-6 py-3 rounded-full border-2 cursor-pointer text-xl`}
    >
      {name}
    </button>
  );
}

export default ProjectTag;
