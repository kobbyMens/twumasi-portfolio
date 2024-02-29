import React from "react";

function DownloadButton({ fileUrl }: { fileUrl: string }) {
  const handleDownload = () => {
    window.open(fileUrl, "_blank");
  };
  return (
    <button
      onClick={handleDownload}
      className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-blue-400 via-primary-500 to-secondary-400 hover:bg-slate-800  text-white mt-3"
    >
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
        Download CV
      </span>
    </button>
  );
}

export default DownloadButton;
