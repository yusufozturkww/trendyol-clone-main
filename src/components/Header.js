"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { motion } from "framer-motion";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-full bg-light-gray z-50"
      >
        <div className="flex justify-between items-center p-2 bg-light-gray border-none mt-0 bg-white z-10 mx-auto w-full">
          <div className="flex items-center space-x-4">
            <a href="#" className=" ml-[7.5vw] py-2 text-5xl font-semibold mr-[8%] text-dark-gray">
              trendyol
            </a>
          </div>
          <div className="relative flex items-center w-[38%]">
            <input
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              className="px-4 py-2 rounded-md w-full bg-medium-dark-gray placeholder:text-sm placeholder:text-placeholder-text-gray focus:outline-none focus:ring-1 focus:ring-orange focus:bg-white focus:shadow-lg"
            />
            <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
          </div>

          <div className="flex items-start space-x-6 font-bold text-dark-black text-xs mr-[10%]">
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <LuUserRound size={18} className="group-hover:text-orange duration-500 group-hover:fill-current" />
              <p className="group-hover:text-orange">Giriş Yap</p>
            </a>
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <GrFavorite size={18} className="group-hover:text-orange group-hover:fill-orange duration-500" />
              <p className="group-hover:text-orange">Favorilerim</p>
            </a>
            <a href="#" className="flex items-center space-x-1 group cursor-pointer">
              <HiOutlineShoppingCart size={20} className="group-hover:text-orange group-hover:fill-current duration-500" />
              <p className="group-hover:text-orange">Sepetim</p>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Diğer Bağlantılar */}
      <div className="flex whitespace-nowrap justify-end items-center text-xs text-gray-400 mx-auto max-w-screen-xl">
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-placeholder-text-gray duration-100">İndirim Kuponlarım</Link>
          <Link href="#" className="hover:text-placeholder-text-gray duration-100">Trendyol'da Satış Yap</Link>
          <Link href="#" className="hover:text-placeholder-text-gray duration-100">Hakkımızda</Link>
          <Link href="#" className="hover:text-placeholder-text-gray duration-100">Yardım & Destek</Link>
        </div>
      </div>

      {/* Ana Logo ve Arama Çubuğu */}
      <div className="relative flex items-center justify-center mx-auto max-w-screen-xl space-x-16 cursor-pointer">
        <div className="text-5xl font-semibold mr-[8%] text-dark-gray py-2">
          <Link href="/">trendyol</Link>
        </div>
        <div className="relative flex items-center w-[45%]">
          <input
            type="text"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            className="px-4 py-2 rounded-md w-full bg-medium-dark-gray placeholder:text-sm placeholder:text-placeholder-text-gray focus:outline-none focus:ring-1 focus:ring-orange focus:bg-white focus:shadow-lg"
          />
          <CgSearch size={23} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
        </div>
        <div className="flex space-x-4 text-dark-gray text-xs font-bold">
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <LuUserRound className='group-hover:text-orange duration-500 group-hover:fill-current text-lg' />
            <span className='group-hover:text-orange'>Giriş Yap</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <GrFavorite className='group-hover:text-orange duration-500 group-hover:fill-current text-lg' />
            <span className='group-hover:text-orange'>Favorilerim</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <HiOutlineShoppingCart className='group-hover:text-orange duration-500 group-hover:fill-current text-lg' />
            <span className='group-hover:text-orange'>Sepetim</span>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Header;
