"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CloudDownload, BadgeCheck } from "lucide-react";

export default function AppFeature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stacking animation transforms
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.95]);

  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const scale2 = useTransform(scrollYProgress, [0.5, 0.7], [0.95, 1]);

  const y3 = useTransform(scrollYProgress, [0.6, 1], [100, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  // For stacking effect (sections appear to stack on top of each other)
  const stackZIndex1 = useTransform(scrollYProgress, [0, 0.4], [3, 1]);
  const stackZIndex2 = useTransform(scrollYProgress, [0.3, 0.7], [2, 3]);
  const stackZIndex3 = useTransform(scrollYProgress, [0.6, 1], [1, 3]);

  // Background colors transform
  const bgColor1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    ["#0f172a", "#0f172a", "#ffffff"]
  );
  const bgColor2 = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.7],
    ["#ffffff", "#ffffff", "#0f172a"]
  );
const bgColor3 = useTransform(
  scrollYProgress,
  [0.6, 1],
  ["#1f2937", "#1f2937"] // gray-800
);

  // Text color transforms
  const textColor1 = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    ["#ffffff", "#ffffff", "#000000"]
  );
  const textColor2 = useTransform(
    scrollYProgress,
    [0.3, 0.6, 0.7],
    ["#000000", "#000000", "#ffffff"]
  );
  const textColor3 = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["#ffffff", "#ffffff"]
  );



  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section 1*/}
        <motion.section
          style={{
            y: y1,
            opacity: opacity1,
            scale: scale1,
            backgroundColor: bgColor1,
            color: textColor1,
            zIndex: stackZIndex1,
          }}
          className="absolute inset-0 flex flex-col justify-center items-center pt-20 pb-8 px-6"
        >
          <div className="container mx-auto max-w-6xl h-full flex flex-col">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-4 font-normal">
                Designed for travelers.
                <br />
                Made for convenience.
              </h2>
              <p className="mb-4">
                Clean, modern, intuitive — everything you need on the go.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
              >
                <CloudDownload size={18} className="sm:w-5 sm:h-5" />
                Download App
              </motion.button>
            </div>

            <motion.div
              className="flex-1 flex justify-center items-end mt-8 mb-8 min-h-[400px]"
              style={{
                y: useTransform(scrollYProgress, [0, 0.3], [0, -50]),
              }}
            >
              <Image
                src="/images/design.png"
                alt="Design Features"
                width={1000}
                height={800}
                className="object-contain object-bottom max-w-full"
                priority
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2:*/}
        <motion.section
  style={{
    y: y2,
    opacity: opacity2,
    scale: scale2,
    backgroundColor: bgColor2,
    color: textColor2,
    zIndex: stackZIndex2,
  }}
  className="absolute inset-0 flex flex-col justify-center items-center pt-20 pb-8 px-6"
>
  <div className="container mx-auto max-w-6xl h-full flex flex-col">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-4xl font-semibold mb-4">
        Travel Made Easy
      </h2>
      <p className="max-w-2xl mx-auto opacity-70 text-[0.8rem]">
        Book hotels, connect with guides, and explore confidently.
      </p>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-red-500 hover:bg-red-600 text-white mt-4 cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
      >
        <CloudDownload size={18} className="sm:w-5 sm:h-5" />
        Get the App & Manage
      </motion.button>

      <p className="flex items-center justify-center gap-2 max-w-2xl mx-auto opacity-90 mt-3 text-[0.8rem] tracking-wide">
        <BadgeCheck className="w-5 h-5 shrink-0 text-green-700" />
        <span>Available on IOS & Android</span>
      </p>
    </div>

    <div className="relative flex-1 grid grid-cols-3 gap-6 items-end">
      {/* Image 1 - Bottom Left */}
      <motion.div
        className="flex justify-center items-end relative z-10 bottom-30"
        style={{
          y: useTransform(scrollYProgress, [0.3, 0.6], [60, 0]),
        }}
      >
        <Image
          src="/images/booking.png"
          alt="Booking Screen"
          width={400}
          height={800}
          className="
            w-[280px]
            sm:w-[320px]
            md:w-[360px]
            lg:w-[400px]
            object-contain
          "
        />
      </motion.div>    

      {/* Image 2 - Bottom Right */}
      <motion.div
        className="flex justify-center items-end relative z-10 bottom-10"
        style={{
          y: useTransform(scrollYProgress, [0.3, 0.6], [60, 0]),
        }}
      >
        <Image
          src="/images/phone1.png"
          alt="Phone Screen"
          width={420}
          height={800}
          className="
            w-[280px]
            sm:w-[320px]
            md:w-[360px]
            lg:w-[400px]
            object-contain
          "
        />
      </motion.div>

        {/* Image 3 */}
      <motion.div
        className="flex justify-center items-center relative bottom-55"
        style={{
          y: useTransform(scrollYProgress, [0.3, 0.6], [0, 0]),
          zIndex: 20,
        }}
      >
        <Image
          src="/images/phone67.png"
          alt="Feature Screen"
          width={450}
          height={900}
          className="
            w-[320px]
            sm:w-[360px]
            md:w-[400px]
            lg:w-[450px]
            object-contain
            h-auto
            max-h-[85vh]
            -mt-80px sm:mt-[-100px] md:mt-[-120px]
          "
        />
      </motion.div>
    </div>
  </div>
</motion.section>

        {/* Section 3*/}
        <motion.section
          style={{
            y: y3,
            opacity: opacity3,
            scale: scale3,
            backgroundColor: bgColor3,
            color: textColor3,
            zIndex: stackZIndex3,
          }}
          className="absolute inset-0 flex flex-col justify-center items-center pt-20 pb-8"
        >
          <div className="container mx-auto max-w-full h-full flex flex-col">
            <div className="text-center mb-30">
              <h2 className="text-4xl md:text-5xl  mb-4">
                Simplify Hotel Operations
              </h2>
              <p className="max-w-2xl text-[0.8rem] mx-auto opacity-90">
                Manage bookings, track revenue, and communicate with guests
                effortlessly.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-500 hover:bg-red-600 text-white mt-4 cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
              >
                <CloudDownload size={18} className="sm:w-5 sm:h-5" />
                Get the App & Manage
              </motion.button>

              <p className="flex items-center justify-center gap-2 max-w-2xl mx-auto opacity-90 mt-3 text-[0.8rem] tracking-wide">
                <BadgeCheck className="w-4 h-4 shrink-0" />
                <span>Available on IOS & Android</span>
              </p>
            </div>

            <motion.div
              className="flex-1 flex justify-center items-end mt-20 mb-8 min-h-[450px] bg-gray-900/22 rounded-t-full "
              style={{
                y: useTransform(scrollYProgress, [0.6, 1], [50, 0]),
              }}
            >
              
              <Image
                src="/images/design3.png"
                alt="Simplify Operations"
                width={1200}
                height={1200}
                className="object-contain object-bottom max-w-full relative top-0 sm:top-15 md:top-21"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Spacer divs to enable scrolling */}
      <div className="h-[300vh]">
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}
