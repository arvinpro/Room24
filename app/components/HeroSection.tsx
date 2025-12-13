"use client";

import { motion } from "framer-motion";
import type { Variant, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  // Animation
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 py-8 lg:py-16"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-gray-900"
            >
              Find your
              <br />
              Perfect Room
              <br />
              in second
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-gray-600 max-w-md leading-relaxed"
            >
              Room 24 connects travelers with affordable hotels nearby. Book
              anytime, anywhere with our mobile app designed for simplicity and
              speed.
            </motion.p>
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-wrap gap-3 pt-4"
            >
              {/* Google Play Button */}
              <Link
                href="#"
                className="bg-black text-white rounded-2xl flex items-center justify-center  hover:scale-95 transition duration-500 group w-full sm:w-auto"
              >
                <div className="px-4 py-2.5 sm:px-5 sm:py-2.5 flex items-center gap-3 w-full justify-center">
                  <div className="relative w-[120px] sm:w-[135px] md:w-[150px] h-[35px] sm:h-[38px] md:h-[42px]">
                    <Image 
                      src="/playstore/image1.png"
                      fill
                      className="object-contain"
                      alt="Download on Google Play"
                      sizes="(max-width: 640px) 120px, (max-width: 768px) 135px, 150px"
                    />
                  </div>
                </div>
              </Link>

              {/* App Store Button */}
              <Link
                href="#"
                className="bg-black text-white rounded-2xl flex items-center justify-center hover:scale-95 transition duration-500 group w-full sm:w-auto"
              >
                <div className="px-4 py-2.5 sm:px-5 sm:py-2.5 flex items-center gap-3 w-full justify-center">
                  <div className="relative w-[120px] sm:w-[135px] md:w-[150px] h-[35px] sm:h-[38px] md:h-[42px]">
                    <Image 
                      src="/playstore/image2.png"
                      fill
                      className="object-contain"
                      alt="Download on App Store"
                      sizes="(max-width: 640px) 120px, (max-width: 768px) 135px, 150px"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] bg-linear-to-br from-orange-400 via-red-500 to-red-600 rounded-3xl overflow-hidden"
          >
            {/* Hero Image */}
            <img
              src="/images/hero.png"
              alt="Woman using mobile app"
              className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition duration-500"
            />

            {/* Floating Stats Card - Bottom Right */}
           <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-md border-2 border-dashed border-white/50 p-4 sm:p-5 rounded-full flex items-center justify-center w-36 h-35 sm:w-40 sm:h-40 hover:rotate-6 transition duration-500"
            >
              <div className="flex flex-col items-center justify-center text-center px-4 py-3">
                <p className="text-white text-lg sm:text-xl whitespace-nowrap mb-1">
                  Join 100,000+
                </p>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm text-white/90 leading-tight">
                    travelers already
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 leading-tight">
                    planning smarter.
                  </p> 
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}