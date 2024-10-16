import Navbar from "../Navbar/Navbar";
import React from "react";
import Slider from "../Slider/Slider";

const Header = () => {
  return (
    <header className="flex-col flex items-center justify-center">
      <Navbar />
      <div>
        <Slider />
      </div>
    </header>
  );
};

export default Header;
