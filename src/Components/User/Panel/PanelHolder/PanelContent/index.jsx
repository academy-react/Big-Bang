import React from "react";
import { Outlet } from "react-router-dom";

const PanelContent = () => {
  return (
    <div className="min-h-screen py-2 px-[6px]">
      <div className=" bg-white h-full shadow-lg shadow-black/25 rounded-[14px] mr-[10px] px-[8px] py-2">
        <Outlet />
      </div>
    </div>
  );
};

export { PanelContent };
