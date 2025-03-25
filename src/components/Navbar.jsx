import React from "react";

const navItems = [
  {
    title: "Home",
    link: "/home"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Resume",
    link: "/resume"
  },
  {
    title: "Portfolio",
    link: "/portfolio"
  },
  {
    title: "Blog",
    link: "/blog"
  },
  {
    title: "Contact",
    link: "/contact"
  }
];

function Navbar() {
  return (
    <nav className="nav flex text-white w-full h-15 top-0 bg-black justify-between">
      <div className="nav-1 pl-28">
        <ul className=" float-right ">
          <li className="p-4">
            <a className="font-medium" href="/Logo">
              Logo
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-2 cursor-pointer pr-28">
        <ul className="flex top-0  ">
          {navItems.map((item, index) => {
            return (
              <li className="p-4 ">
                <a className="font-medium hover:text-red-500 " href={item.link}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
