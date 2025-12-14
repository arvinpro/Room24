"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudDownload, BadgeCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AppFeature() {

  const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!containerRef.current) return;
    const sections = containerRef.current.querySelectorAll("section");

    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true, // pin current section
          pinSpacing: false,
          scrub: 1, // smooth scrubbing
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill()); // cleanup
    };
  }, []);
  return (
    <div ref={containerRef} className="relative">
      {/* Section 1*/}
      <section className="min-h-screen relative z-1 flex flex-col justify-center items-center pt-20 px-6 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl h-full flex flex-col">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl mb-4 font-normal"
            >
              Designed for travelers.
              <br />
              Made for convenience.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              Clean, modern, intuitive — everything you need on the go.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <CloudDownload size={18} className="sm:w-5 sm:h-5" />
              Download App
            </motion.button>
          </div>

        {/* MOBILE IMAGE */}
<motion.div className="flex justify-center items-end relative z-10 block sm:hidden">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <Image
      src="/images/phone67.png"
      alt="Phone Screen"
      width={420}
      height={800}
      className="
        w-[280px]
        sm:w-[320px]
        md:w-[360px]
        lg:w-[400px]
        object-contain
        pb-11
      "
    />
  </motion.div>
</motion.div>

{/* DESKTOP IMAGE */}
<motion.div className="flex-1 flex justify-center items-end min-h-[400px] hidden sm:flex">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
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
</motion.div>

        </div>
      </section>

      {/* Section 2:*/}
      <section className="min-h-screen relative z-2 flex flex-col justify-center items-center pt-20 px-6 bg-gray-100 text-black">
        <div className="container mx-auto max-w-6xl h-full flex flex-col">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-4xl font-semibold mb-4"
            >
              Travel Made Easy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mx-auto opacity-70 text-[0.8rem]"
            >
              Book hotels, connect with guides, and explore confidently.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 text-white mt-4 cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <CloudDownload size={18} className="sm:w-5 sm:h-5" />
              Get the App & Manage
            </motion.button>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 max-w-2xl mx-auto opacity-90 mt-3 text-[0.8rem] tracking-wide"
            >
              <BadgeCheck className="w-5 h-5 shrink-0 text-green-700" />
              <span>Available on IOS & Android</span>
            </motion.p>
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-center sm:grid sm:grid-cols-3 sm:items-end gap-6">
            {/* Image 1 - Bottom Left */}
            <motion.div className="flex justify-center items-center relative z-10  mt-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/booking.png"
                  alt="Booking Screen"
                  width={400}
                  height={800}
                  className="
             w-[90vw]             
    max-w-[380px]
    sm:w-[320px]
    md:w-[360px]
    lg:w-[400px]
    object-contain
    hidden md:block
          "
                />
              </motion.div>
            </motion.div>

            {/* Image 2 - Bottom Right */}
            <motion.div className="flex justify-center items-end  relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image
                  src="/images/phone1.png"
                  alt="Phone Screen"
                  width={420}
                  height={800}
                  className="
    w-[80vw]
    max-w-[360px]
    sm:w-[350px]
    md:w-[360px]
    lg:w-[400px]
    object-contain
    sm:ml-5
    block
  "
                />
              </motion.div>
            </motion.div>

            {/* Image 3 */}
            <motion.div className="flex justify-center items-center relative bottom-55">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Image
                  src="/images/phone67.png"
                  alt="Feature Screen"
                  width={450}
                  height={900}
                  className="
            w-[320px]
            sm:w-[320px]
            md:w-[400px]
            lg:w-[450px]
            object-contain
            h-auto
            max-h-[85vh]
            -mt-80px sm:mt-[-100px] md:mt-[-120px]
            hidden md:block
          "
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3*/}
     <section className="min-h-screen relative z-3 flex flex-col justify-center items-center pt-20 bg-gray-800 text-white">
  <div className="container mx-auto max-w-full flex flex-col">
    {/* Text Content */}
    <div className="text-center px-4 sm:px-6 lg:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl mb-4"
      >
        Simplify Hotel Operations
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base mx-auto opacity-90 mb-4"
      >
        Every thing you need to run your hotel efficiently.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-500 hover:bg-red-600 text-white mt-4 cursor-pointer px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-colors flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
      >
        <CloudDownload size={18} className="sm:w-5 sm:h-5" />
        Get the App & Manage
      </motion.button>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 max-w-md sm:max-w-xl md:max-w-2xl mx-auto opacity-90 mt-3 text-[0.8rem] tracking-wide"
      >
        <BadgeCheck className="w-4 h-4 shrink-0 text-green-500" />
        <span>Available on IOS & Android</span>
      </motion.p>
    </div>

    {/* Image Section */}
    <motion.div className="flex-1 flex justify-center items-center sm:items-end mb-10 min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full flex justify-center"
      >
        <Image
          src="/images/design3.png"
          alt="Simplify Operations"
          width={1060}
          height={1100}
          className="object-contain max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl"
        />
      </motion.div>
    </motion.div>
  </div>
</section>

    </div>
  );
}
