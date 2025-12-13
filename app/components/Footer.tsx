"use client";

import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { CloudDownload } from "lucide-react";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="flex flex-col justify-center items-center text-center py-16 md:py-25 px-4 sm:px-6 lg:px-8">
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4`}>
          Join the 65+ million using
          <span className="block">Room 24</span>
        </h1>

        <p className="mb-3 sm:mb-4">
          Download now and start booking or managing your hotel today.
        </p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium flex items-center gap-2 mx-auto shadow-lg hover:scale-105 transition duration-300"
        >
          <CloudDownload size={18} className="sm:w-5 sm:h-5" />
          Download App
        </motion.button>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-400/50"></div>

      <div className="flex flex-col justify-center items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <Link href={"/"} className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/logo/logo.png"
              alt="Room24 Logo"
              width={24}
              height={24}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
              ROOM 24
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4">
          {["Home", "Features", "For hotels", "About Room24", "Blogs"].map(
            (item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`hover:text-red-500 transition-colors text-xs sm:text-sm md:text-base relative pb-1 }`}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-400/50"></div>

      <div className="flex flex-col md:flex-row justify-between items-center py-6 md:py-8 px-4 sm:px-6 container max-w-7xl mx-auto lg:px-8 gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <p className="text-xs sm:text-sm md:text-base text-gray-300">
            © 2024 Room24. All rights reserved.
          </p>
        </div>


        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {["Privacy Policy", "Terms of services", "Cookie Setting"].map(
            (item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`hover:text-red-500 transition-colors text-xs sm:text-sm md:text-base text-gray-300 `}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
