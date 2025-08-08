import { useState } from 'react';
import { Menu, MoveLeft } from "lucide-react";
import ShivmalaLogo from "../assets/ShivmalaLogo.png";
import { useNavigate } from 'react-router';

export default function Navbar() {
  const [ToggleMenu, SetToggleMenu] = useState(false);
  const navigate = useNavigate();

  const routes = [
    { option: "Home", path: "/" },
    { option: "About us", path: "/aboutus" },
    { option: "Contact us", path: "/contactus" },
    { option: "Projects", path: "/projects" },
    { option: "Career", path: "/career" },
    { option: "News & Media", path: "/news" },
    { option: "Investors", path: "/investors" },
    { option: "Services", path: "/services" }
  ];

  const handleToggleMenu = () => SetToggleMenu(prev => !prev);

  const navItemClasses = "text-lg cursor-pointer hover:text-primaryblue duration-200 md:text-3xl lg:text-4xl  xl:text-xl ";

  return (
    <div className={`w-full ${ToggleMenu ? 'h-full' : 'h-[90px]'} flex justify-between items-center px-6 relative`}>
      {/* Logo */}
      <div className='h-full w-1/3 flex items-center'>
        <img
          onClick={() => navigate("/")}
          className='h-[176px] cursor-pointer'
          src={ShivmalaLogo}
          alt="Company Logo"
        />
      </div>

      <div className='hidden xl:flex w-2/3 items-center justify-end'>
        <ul className='flex gap-8 font-emphasis-heavy font-heading '>
          {routes.map(({ option, path }) => (
            <li
              key={path}
              onClick={() => navigate(path)}
              className={navItemClasses}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className='xl:hidden cursor-pointer text-black'>
        <Menu 
        onClick={handleToggleMenu} size={28} />
      </div>

      {ToggleMenu && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col items-center justify-center'>
          <button className='absolute top-4 left-4' onClick={handleToggleMenu}>
            <MoveLeft size={28} />
          </button>

          <ul className='flex flex-col gap-8 lg:gap-16 text-center font-emphasis-heavy font-heading'>
            {routes.map(({ option, path }) => (
              <li
                key={path}
                onClick={() => {
                  navigate(path);
                  handleToggleMenu();
                }}
                className={navItemClasses}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
