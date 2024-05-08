import React from "react";

interface HeaderProps {
  text: string;
}

// Re-usable Header component that takes header text to render
const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <>
      <div className="h-14 flex items-center justify-center bg-[#4e73df] text-white font-bold">
        {text}
      </div>
    </>
  );
};

export default Header;
