"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudDownload } from "lucide-react";

export default function DiscoverSection() {
  const features = [
    {
      id: 1,
      title: "Navigate With Interactive Maps",
      description: "Search nearby attractions, hotels, and essential services",
      image: "/images/img2.jpg",
    },
    {
      id: 2,
      title: "Book Trusted Hotels",
      description:
        "Find verified hotels with real user reviews and secure booking",
      image: "/images/hero.png",
      offset: true, 
    },
    {
      id: 3,
      title: "Chat With Guides Instantly",
      description: "Talk with certified travel guides anytime for quick help",
      image: "/images/img1.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-red-500 text-xs sm:text-sm font-medium tracking-wider mb-3 sm:mb-4">
            Discover
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4">
            What makes Room 25
            <br />
            different
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-md sm:max-w-lg mx-auto px-2">
            Room 24 gives you three ways to find exactly what you need. Search
            by location, find rooms that fit your budget, or book anytime you
            want.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8  px-15 sm:px-25 lg:px-50">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group ${
                feature.id === 2
                  ? "lg:-mt-12"
                  : ""
              }`}
            >
              {/* Card Container */}
              <div className="relative">
                <div
                  className={`relative w-full h-55 sm:h-70 lg:h-80 items-center rounded-xl overflow-hidden mb-4 sm:mb-5 ${
                    feature.id === 2
                      ? "bg-linear-to-br from-orange-400 to-red-500"
                      : feature.id === 1
                      ? "bg-gray-800"
                      : "bg-gray-100"
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      feature.id === 1 ? "opacity-90" : ""
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
  
                  {feature.id === 2 && (
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                  )}
                </div>

                {/* Content */}
                <div className="px-1 sm:px-2">
                  <h3 className="font-semibold text-center text-base sm:text-lg text-gray-900 ">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        <div className="mt-16 sm:mt-20 lg:mt-40 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-5xl text-gray-900 mb-8 sm:mb-10">
            Join 20+ million travelers worldwide and 5 million in Asia
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                150,000+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Active users worldwide
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                50,000+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Verified & trusted hotels
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  4.8/5
                </span>
                
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                Loved by travelers
              </div>
            </motion.div>
          </div>

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
      </div>
    </section>
  );
}