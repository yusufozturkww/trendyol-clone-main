"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { LuUserRound } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from 'next/link';
import { BsFillLightningFill } from "react-icons/bs";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-light-gray px-4 border-2 border-gray-100 rounded-t-lg ">

      <div className="bg-white pl-20 mt-1 mr-4">
        <ul className="flex space-x-8 text-xs justify-end mr-28">
          <li>
            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">İndirim Kuponlarım</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Trendyol'da Satış Yap</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Hakkımızda</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer text-gray-400 hover:text-orange">Yardım & Destek</Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center p-4 bg-light-gray mx-auto max-w-screen-xl">

        <div className="flex items-center space-x-4 pl-6 font-semibold font-montserrat">
          <Link href="#" className="text-5xl text-light-black cursor-pointer font-medium font-montserrat">trendyol</Link>
        </div>
        <div className="relative flex items-center w-full max-w-[600px]">
          <input
            type="text"
            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            className="bg-mediumdark-gray text-gray-800 px-5 py-2.5 w-full border-2 border-transparent rounded-md focus:border-orange focus:outline-none focus:bg-light-gray focus:shadow-xl pr-10 text-sm duration-300 placeholder:text-gray-500"
          />
          <CgSearch size={23} onClick={toggleMenu} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange" />
        </div>

        <div className="flex items-center space-x-6 font-bold font-source-sans-pro text-dark-black text-xs">

          <Link href="#" className="flex items-center space-x-1 group cursor-pointer">
            <LuUserRound size={18} className="group-hover:text-orange duration-500 group-hover:fill-current" />
            <p className="group-hover:text-orange">Giriş Yap</p>
          </Link>

          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <GrFavorite size={18} className="group-hover:text-orange group-hover:fill-current duration-500" />
            <p className="group-hover:text-orange">Favorilerim</p>
          </Link>

          <Link href="#" className="flex items-center space-x-2 group cursor-pointer">
            <HiOutlineShoppingCart size={20} className="group-hover:text-orange group-hover:fill-current duration-500" />
            <p className="group-hover:text-orange">Sepetim</p>
          </Link>
        </div>
      </div>
      <div className="bg-white mx-auto max-w-screen-xl text-dark-black">
        <ul className="flex space-x-6 text-sm font-semibold font-montserrat overflow-hidden">
          <li className="flex items-center cursor-pointer space-x-1 pl-10">
            <RxHamburgerMenu size={23} />
            <Link href="#" className="text-xs pr-12">TÜM KATEGORİLER</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro pl-12 hover:text-orange duration-150">Kadın</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Erkek</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Anne & Çocuk</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Ev & Yaşam</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Süpermarket</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Kozmetik</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Ayakkabı & Çanta</Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro hover:text-orange duration-150">Elektronik</Link>
          </li>
          <li className="flex items-center space-x-1 group">
            <img
              src="/icons/cokSatanlar.svg"
              alt="Flaş Ürünler"
              className="w-5 h-5 text-orange-500 group-hover:text-orange"
            />
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro group-hover:text-orange duration-150">
              Çok Satanlar
            </Link>
          </li>
          <li className="flex items-center space-x-1 group">
            <img
              src="/icons/flash.svg"
              alt="Flaş Ürünler"
              className="w-5 h-5 text-orange-500 group-hover:text-orange"
            />
            <Link href="#" className="cursor-pointer font-bold font-source-sans-pro 
        group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-pink-600 
        group-hover:bg-clip-text group-hover:text-transparent duration-150">
              Flaş Ürünler
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

