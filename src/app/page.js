"use client"
import FilterScroll from "@/components/FilterScroll";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-mediumdark-gray min-h-screen">
      <div>
        <Header/>
        <Navbar/>
        <FilterScroll/>
      </div>
    </div>
  )
}

export default Page

