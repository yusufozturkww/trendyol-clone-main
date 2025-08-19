'use client';
import React, { useEffect, useState } from 'react';
import { HiMiniArrowsUpDown, } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { BsFillBoxFill } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineStorefront } from "react-icons/md";
import Products from './Products';
const SearchResultsInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Önerilen");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [timeLeft, setTimeLeft] = useState(3 * 60 + 20);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const options = [
    "Önerilen",
    "En düşük fiyat",
    "En yüksek fiyat",
    "En çok satan",
    "En favoriler",
    "En yeniler",
    "En çok değerlendirilen",
  ];
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-[78%] min-h-screen overflow-y-hidden">
      <div className='w-full flex justify-center mt-[4%]'>
        <div>
          <span className='flex text-dark-gray font-medium text-lg'>
            " Araç aksesuarları listeleniyor ""
          </span>
        </div>
        <div className='relative items-center w-[22%] ml-[33%] text-sm'>
          <div
            className='border border-gray-200 py-2 px-4 rounded-md cursor-pointer flex items-center justify-between hover:border-orange'
            onClick={toggleDropdown}
          >
            <span>{selectedOption}</span>
            <HiMiniArrowsUpDown className='text-orange text-2xl' />
          </div>
          {isOpen && (
            <div className='absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg text-sm font-normal w-full z-10'>
              <ul>
                {options.map((option) => (
                  <li
                    key={option}
                    className='px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-orange hover:font-bold text-sm'
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-3 ">
        <div className="flex space-x-4 font-normal text-dark-gray border-b">
          <button
            className="rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm  text-dark-black flex items-center space-x-2 bg-gradient-to-r from-peach to-orange-pink hover:border-dark-peach whitespace-nowrap w-[25%] mb-[1.5%] h-8"
          >
            <img
              src="/icons/flas.svg"
              alt="Flaş Ürünler"
              className="w-5 h-5 text-orange-500"
            />
            <span>Flaş Ürünler</span>
            <span className="ml-2 bg-white text-dark-gray font-semibold rounded-full px-2 py-1 text-xs w-[27%] text-center  whitespace-nowrap">
              {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            </span>
          </button>

          <button
            className="rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm  text-dark-black flex items-center space-x-2 bg-yellow-50 hover:bg-orange-100 hover:border-yellow-400 w-43 h-8  whitespace-nowrap"
          >
            <AiFillStar size={20} className="text-yellow-400 mr-2" />
            <span>Yüksek Puanlı Ürünler</span>
          </button>

          <button
            className="rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm text-dark-black flex items-center space-x-2 bg-blue-50 hover:bg-orange-100 hover:border-blue-800  whitespace-nowrap w-43 h-8"
          >
            <MdOutlineStorefront size={20} className="text-blue-900 mr-2" />
            <span>Yüksek Puanlı Satıcılar</span>
          </button>

          <button
            className="rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm text-dark-black flex items-center space-x-2 bg-gray-100 hover:border-gray-400 w-45  whitespace-nowrap h-8"
          >
            <BsFillBoxFill size={17} className="text-gray-500 mr-2" />
            <span>Kargo Bedava</span>
          </button>
          <button
            className="rounded-3xl border border-white font-source-sans-pro px-4 py-1.5 text-sm text-dark-black flex items-center space-x-2 bg-green-50 hover:border-green-500 w-45  whitespace-nowrap h-8"
          >
            <LiaShippingFastSolid size={20} className="text-green-500 mr-2" />
            <span>Hızlı Teslimat</span>
          </button>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default SearchResultsInfo;

