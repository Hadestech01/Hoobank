import React from "react";

function SideBar() {
  return (
    <div className="md:hidden bg-gradient-to-r from-background via-gray-800 to-gray-700 text-white side-bar absolute w-2/6 rounded-lg hidden right-3">
      <ul className="flex flex-col items-center py-5">
        <li className="cursor-pointer py-1">Home</li>
        <li className="cursor-pointer py-1">Features</li>
        <li className="cursor-pointer py-1">Product</li>
        <li className="cursor-pointer py-1">Clients</li>
      </ul>
    </div>
  );
}

export default SideBar;
