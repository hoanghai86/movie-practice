import React from "react";
import { Link, NavLink } from "react-router-dom"; //component Navlink của react-router-dom để thay thế thẻ a và "to" để thay thế href, chuyển trang không load lại trang. Navlink và Link khác nhau là Navlink thì có CSS, còn Link thì không có CSS khi user click vào thẻ

const Header = () => {
  return (
    <header className="bg-slate-900 h-20">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white">
          Cyber Movie
        </Link>
        <nav>
          {/* truyền cái đường dẫn bên app.js vào href */}
          <NavLink
            to="/login"
            className={({ isActive }) => {
              if (isActive) return "text-yellow-200 text-lg";
              return "text-white text-lg";
            }}
          >
            Đăng nhập
          </NavLink>
          <span className="text-white text-xl"> | </span>
          <NavLink
            to="/signup"
            className={({isActive}) => {
              if (isActive) return "text-yellow-200 text-lg";
              return "text-white text-lg";
            }}
          >
            Đăng ký
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
