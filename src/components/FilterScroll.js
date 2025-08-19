"use client";
import React, { useState } from 'react';
import SearchResultsInfo from './SearchResultsInfo';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import categories from '../data/product_attributes/product_attributes';
import { FaChevronRight } from "react-icons/fa6";
const FilterScroll = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const handleCategoryClick = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };
  return (
    <div className=" mx-auto max-w-screen-xl">
      <div className="p-2 flex items-center space-x-2 justify-start text-xs">
        <p className="hover:underline font-thin cursor-pointer">Trendyol</p>
        <FaChevronRight className='text-[10px] text-orange mt-1' />
        <p className="hover:underline font-thin cursor-pointer">Otomobil ve Motorsiklet</p>
        <FaChevronRight className='text-[10px] text-orange mt-1' />
        <p className="hover:underline font-thin cursor-pointer">Otomobil</p>
        <FaChevronRight className='text-[10px] text-orange mt-1' />
        <p className="hover:underline font-semibold cursor-pointer">Araç oto aksesuar</p>
      </div>
      <div className="flex flex-row border-gray-200 min-h-full mx-auto max-w-screen-xl">
        <ul className="w-[16%] max-h-[40vw] overflow-y-auto sticky top-[13%]">
          {categories.map((category) => (
            <li key={category.id} className="border-b border-gray-100">
              <div
                className="p-2 text-dark-gray font-montserrat hover:bg-gray-50 flex justify-between items-center text-xs py-3.5 font-semibold cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex items-center">
                  {category.id > 26 && category.id !== 28 ? (
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4 rounded border-gray-300"
                    />
                  ) : null}
                  {category.title}
                  {category.id === 29 && category.icon && (
                    <span className="ml-2">
                      <img
                        src="images/kamera.jpg"
                        alt="Kamera Icon"
                        className="w-5 h-4"
                      />
                    </span>
                  )}
                </div>
                {(category.id <= 26 || category.id === 28) && (
                  <span>
                    {openCategory === category.id ? (
                      <FaChevronUp className="text-xs text-medium-grey font-bold" />
                    ) : (
                      <FaChevronDown className="text-xs text-medium-grey font-bold" />
                    )}
                  </span>
                )}
              </div>
              {openCategory === category.id && (
                <>
                  {category.placeholder && (
                    <input
                      type="text"
                      placeholder={category.placeholder}
                      className="w-full p-1 px-2 mt-2 border border-gray-300 rounded-md text-xs"
                    />
                  )}
                  {category.id === 6 && (
                    <div className="flex space-x-1 mt-3 w-[8vw]">
                      <input
                        type="text"
                        placeholder="En Az"
                        className="w-full p-1 px-1 pl-2 border border-gray-300 rounded-full text-xs"
                      />
                      <span className="flex items-center text-sm">-</span>
                      <input
                        type="text"
                        placeholder="En Çok"
                        className="w-full p-1 px-1 pl-2 border border-gray-300 rounded-full text-xs"
                      />
                    </div>
                  )}
                  <ul className="pl-4 text-sm text-gray-600 max-h-32 overflow-y-auto rounded-md bg-white scrollbar-custom">
                    {category.content.map((item, index) => (
                      <li key={index} className="py-1 flex items-center">
                        {category.id !== 1 && (
                          <input
                            type="checkbox"
                            className="mr-2 w-4 h-4 rounded-full border-gray-300"
                          />
                        )}
                        <span
                          className={`text-xs ${category.id === 1 ? 'text-orange font-bold' : 'hover:text-medium-grey'}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
        <SearchResultsInfo />
      </div>
    </div>
  );
};
export default FilterScroll;

