import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-900 h-20">
      <div className="container h-full mx-auto flex justify-between items-center">
        <a href className="text-4xl text-white">
          Cyber Movie
        </a>
        <nav>
          <a href className="text-white text-lg">
            Đăng nhập
          </a>
          <span className="text-white text-xl"> | </span>
          <a href className="text-white text-lg">
            Đăng ký
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
