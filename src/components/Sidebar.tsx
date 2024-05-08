import React from "react";
import { Link } from "react-router-dom";
import { TiContacts } from "react-icons/ti";
import { AiOutlineLineChart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#4e73df] px-[25px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#ededed]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          <Link to="/">Sidebar</Link>
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]">
        <TiContacts color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          <Link to="/">Contacts</Link>
        </p>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]">
        <AiOutlineLineChart color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          <Link to="/charts">Charts and Maps</Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
