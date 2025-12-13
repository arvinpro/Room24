"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CloudDownload, Menu, X } from "lucide-react";
import { useState } from "react";

const Button = ({ children, variant = "primary", className = "" }: any) => {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const styles = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-600/20",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border-2 border-slate-200 hover:border-red-600 hover:text-red-600 text-slate-600",
  };
  return (
    <button
      className={`${base} ${
        styles[variant as keyof typeof styles]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image
              src="/logo/logo.png"
              alt="Room24 Logo"
              width={16}
              height={16}
            />
            <span className="text-xl font-bold text-gray-900 ">ROOM 24</span>
          </div>
        </Link>
        {/* Desktop Nav*/}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-start ml-12">
          {["Features", "For hotels", "About Room24", "Blogs"].map(
            (item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-gray-600 hover:text-red-500 transition-colors text-sm font-medium relative pb-1 ${
                  index === 0
                    ? 'text-red-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500'
                    : ""
                }`}
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Download Button */}
        <div className="hidden md:block">
          <button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2">
            <CloudDownload size={16} />
            Download App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {["Features", "For hotels", "About Room24", "Blogs"].map(
                (item) => (
                  <a key={item} href="#" className="text-lg font-medium">
                    {item}
                  </a>
                )
              )}
              <Button className="w-full">Download App</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
