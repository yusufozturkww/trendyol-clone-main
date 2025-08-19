import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import CategoryDropdown from './CategoryDropdown';

const Navbar = () => {
  const navbarItems = [
    { name: 'Kadın' },
    { name: 'Erkek' },
    { name: 'Anne & Çocuk' },
    { name: 'Ev & Yaşam' },
    { name: 'Süpermarket' },
    { name: 'Kozmetik' },
    { name: 'Ayakkabı & Çanta' },
    { name: 'Elektronik' },
    { name: 'Çok Satanlar', icon: '/icons/cokSatanlar.svg' },
    { name: 'Flaş Ürünler', icon: '/icons/flas.svg' },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="relative">
      <div className="flex items-center px-4 py-2 mx-auto max-w-screen-xl space-x-32 cursor-pointer">
        <div
          className="flex items-center space-x-2 whitespace-nowrap"
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <RxHamburgerMenu className="text-2xl" />
          <h3 className="font-semibold text-dark-gray text-xs font-montserrat">TÜM KATEGORİLER</h3>
        </div>
        <div className="mx-auto w-full flex justify-between text-nowrap items-center">
          <ul className="flex space-x-6 font-semibold text-dark-gray text-[13px] font-montserrat cursor-pointer mb-1">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center relative"
                onClick={() => handleItemClick(item.name)}
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    width="20"
                    height="20"
                    className="mr-1"
                  />
                )}
                <Link
                  href={'#'}
                  className={`hover:text-orange duration-50
                    ${item.name === 'Flaş Ürünler' ? 
                      'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange hover:to-pink-500 hover:from-orange-500 hover:transition-all hover:duration-300' 
                      : ''
                    }
                    ${activeItem === item.name ? 'text-orange' : ''}`}
                >
                  {item.name}
                </Link>
                {activeItem === item.name && (
                  <div className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-orange"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-300 w-full -mt-1 absolute left-0" />
      {isDropdownOpen && (
        <div
          className="absolute top-full left-0 w-full z-10"
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <CategoryDropdown />
        </div>
      )}
    </div>
  );
};

export default Navbar;

