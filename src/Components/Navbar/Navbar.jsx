import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[10vh] fixed top-0 right-0 left-0 bg-white z-10 p-5">
      <h1 className="text-2xl font-bold">اسم المتجر</h1>

      {/* Desktop Links */}
      <ul className="lg:flex hidden gap-5 items-center">
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/">المنتجات</Link>
        </li>
        <li>
          <Link to="/">من نحن</Link>
        </li>
        <li>
          <Link to="/">تواصل معنا</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } absolute top-[10vh] right-0 w-full bg-white shadow-lg flex flex-col items-center gap-10`}
      >
        <ul className="flex flex-col items-center gap-5 p-5">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              من نحن
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              تواصل معنا
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5 mb-5">
          <button className="rounded-full bg-transparent text-lime-500 border border-lime-500 px-4 py-1 flex items-center gap-2">
            تسجيل الدخول <CiUser className="text-xl" />
          </button>
          <Link to="/Cart">
            <span className="text-xl">
              <CiShoppingCart />
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop Buttons */}
      <div className="lg:flex gap-5 items-center hidden">
        <button className="rounded-full bg-transparent text-lime-500 border border-lime-500 px-4 py-1 flex items-center gap-2">
          تسجيل الدخول <CiUser className="text-xl" />
        </button>
        <Link to="/Cart">
          <span className="text-xl">
            <CiShoppingCart />
          </span>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <span
        className="lg:hidden flex text-4xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <IoMenu />
      </span>
    </nav>
  );
};

export default Navbar;
