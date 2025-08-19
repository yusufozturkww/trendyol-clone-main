"use client"
import React, { useEffect, useState } from 'react';
import products from '../data/Araçotoaksesuar.js';
import { GoHeart } from "react-icons/go";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Products = () => {
  const [showReviews, setShowReviews] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowReviews((prev) => !prev); 
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 h-auto">
      {products.map((product) => (
        <div key={product.id} className="flex justify-center">
          <div className="relative w-full max-w-[240px] h-[450px] border border-gray-200 rounded-md flex flex-col items-center justify-start">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-[230px]"
            />
            <div className="absolute top-2 right-2 border rounded-full w-11 h-11 flex justify-center items-center bg-white shadow-lg hover:text-orange-500">
              <GoHeart size={21} className="text-dark-gray hover:text-orange" />
            </div>
            <div className="flex flex-col items-start mt-2 pl-2">
              <span className="text-sm text-start text-gray-600">
                <span className="font-bold text-mediumDark-gray">{product.brand}</span> {product.name}
              </span>
              {(product.id === 1 || product.id === 3||product.id===5 ) ? (
                <motion.div
                  className="flex items-center justify-start w-full mb-2 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showReviews ? 0 : 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{
                    opacity: { duration: 0.8 },
                  }}
                >
                  {!showReviews && (
                    <>
                      <img
                        src="/images/fav-kalp.jpg"
                        alt="Favori Kalp"
                        className="w-3 h-3"
                      />
                      <span className="text-[10px] ml-1 text-orange font-bold">
                        {product.favoritesCount}
                      </span>
                      <span className="text-[10px] ml-1 text-mediumDark-gray font-bold">
                        favoriledi!
                      </span>
                    </>
                  )}
                  {showReviews && product.reviewsCount && (
                    <>
                      <img
                        src="/images/eyes.jpg"
                        alt="Eyes"
                        className="w-3 h-3"
                      />
                      <span className="text-[10px] ml-1 text-mediumDark-gray font-bold">
                        24 saatte{" "}
                      </span>
                      <span className="text-[10px] ml-1 text-orange font-bold">
                        {product.reviewsCount}
                      </span>
                      <span className="text-[10px] ml-1 text-mediumDark-gray font-bold">
                        inceledi!
                      </span>
                    </>
                  )}
                </motion.div>
              ) : (
                <div className="flex items-center justify-start w-full mb-2 mt-2">
                  {/* Favori sayısı */}
                  <img
                    src="/images/fav-kalp.jpg"
                    alt="Favori Kalp"
                    className="w-3 h-3"
                  />
                  <span className="text-[10px] ml-1 text-orange font-bold">
                    {product.favoritesCount}
                  </span>
                  <span className="text-[10px] ml-1 text-mediumDark-gray font-bold">
                    favoriledi!
                  </span>
                </div>
              )}
              {product.starCount === "5.0" && (
                <div className="flex items-center mt-2">
                  <span className="mr-2 text-xs text-gray-600">{product.starCount}</span>
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      size={11}
                      className="text-yellow-400 mr-1"
                    />
                  ))}
                </div>
              )}
              {product.starCount === "4.5" && (
                <div className="flex items-center mt-2">
                  <span className="mr-2 text-xs text-gray-600">{product.starCount}</span>
                  {Array.from({ length: 4 }, (_, i) => (
                    <FaStar
                      key={i}
                      size={11}
                      className="text-yellow-400 mr-1"
                    />
                  ))}
                  <FaStarHalfStroke size={11} className="text-yellow-400" />
                </div>
              )}
              {product.starCount === "3.0" && (
                <div className="flex items-center mt-2">
                  <span className="mr-2 text-xs text-gray-600">{product.starCount}</span>
                  {Array.from({ length: 3 }, (_, i) => (
                    <FaStar
                      key={i}
                      size={11}
                      className="text-yellow-400 mr-1"
                    />
                  ))}
                </div>
              )}
              <span className="text-md font-semibold text-orange mt-2">{product.price}TL</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
