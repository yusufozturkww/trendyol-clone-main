import React, { useState, useEffect } from 'react';
import categories1 from '../data/categories/CategoriesKadin';
import categories2 from '../data/categories/CategoriesAdam';
import categories3 from '../data/categories/CategoriesAnneCocuk';
import categories4 from '../data/categories/CategoriesEvMobilya';
import categories5 from '../data/categories/CategoriesSupermarket';
import categories6 from '../data/categories/CategoriesKozmetik';
import categories7 from '../data/categories/CategoriesAyakkabiCanta';
import categories8 from '../data/categories/CategoriesElektronik';
import categories9 from '../data/categories/CategoriesSporOutdoor';
import { BsChevronRight } from "react-icons/bs";
const allCategories = [
  ...categories1,
  ...categories2,
  ...categories3,
  ...categories4,
  ...categories5,
  ...categories6,
  ...categories7,
  ...categories8,
  ...categories9,
];
const CategoryDropdown = () => {
  const [hoveredCategory, setHoveredCategory] = useState(categories1[0]);
  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };
  useEffect(() => {
    setHoveredCategory(categories1[0]);
  }, []);
  return (
    <div className="relative">
      <div className="bg-dropdownBg z-50 absolute -top-0.5 max-w-[14%] left-[8vw] h-[37vw]">
        <ul className="flex flex-col">
          {allCategories.map((category, index) => (
            <li
              key={index}
              className={`group flex items-center space-x-3 px-4 py-4 cursor-pointer whitespace-nowrap font-source-sans-pro justify-between ${hoveredCategory === category ? 'bg-gray-50' : ''}`}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={() => setHoveredCategory(hoveredCategory)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-6 h-6 group-hover:text-orange"
                />
                <span className={`text-mediumDark-gray text-sm font-semibold ${hoveredCategory === category ? 'text-orange' : 'group-hover:text-orange'}`}>
                  {category.name}
                </span>
              </div>
              <BsChevronRight className={`text-medium-grey text-sm ${hoveredCategory === category ? 'text-orange' : 'group-hover:text-orange'}`} />
            </li>
          ))}
        </ul>
      </div>

      {/* Hover edilen kategoriye bağlı olarak alt kategori grubu gösterimi */}
      {hoveredCategory && (
        <div className="absolute -top-1 left-[20vw] w-[70vw] h-[46vw] bg-white border border-gray-200 p-2 grid grid-cols-6 gap-1">
          {hoveredCategory.subCategories.map((subCategory, subCategoryIndex) => (
            <div key={subCategoryIndex} className="flex flex-col space-y-1">
              <div className="mb-2">
                <div className="flex items-center">
                  <h3 className="font-bold text-orange text-xs truncate ml-3">{subCategory.group}</h3>
                  <BsChevronRight className="text-orange text-xs" />
                </div>
                <ul className="text-gray-700 text-xs space-y-0.5">
                  {subCategory.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:text-orange cursor-pointer truncate px-3 py-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;



