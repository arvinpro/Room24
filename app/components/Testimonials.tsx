'use client';

import { SetStateAction, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "I love how intuitive the app is. From browsing hotels to confirming bookings and saving my favorite trips, everything is seamless. The guide chat feature made my last trip to Pokhara so much easier.",
      name: "Ramesh Khatri",
      role: "Guest User",
      avatar: "RK",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      quote:
        "We rely on this app daily to manage bookings and guest interactions. It's reliable, easy to use, and has simplified operations across our hotel. The seamless communication with guests has helped us improve both efficiency and customer experience.",
      name: "Sita Sharma",
      role: "Hotel Sunrise – Manager",
      avatar: "SS",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      quote:
        "Planning my trips used to take hours, but this app makes it effortless. The maps, hotel details, and real-time guide chat ensure I always feel prepared. I can't imagine traveling without it now!",
      name: "Anita Gurung",
      role: "Guest User",
      avatar: "AG",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10 py-16 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-2xl sm:text-3xl md:text-4xl font-light"
          >
            Don't take our word for it!
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900"
          >
            Hear what our User's Says about Room 24
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-500 text-sm sm:text-base"
          >
            With over 100K+ users satisfied, here's what they have to say
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {testimonials.map((testimonial, index) => {
              const position =
                (index - currentIndex + testimonials.length) %
                testimonials.length;
              const isCenter = position === 1;

              return (
                <motion.div
                  key={index}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-100 rounded-2xl p-2 shadow-sm"
                >
                  <div className="bg-white rounded-xl p-4 sm:p-5 mb-3">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 mb-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829C13.157 8.672 11.657 8 10 8zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829C25.157 8.672 23.657 8 22 8z" />
                    </svg>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed min-h-[100px] sm:min-h-[120px]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 px-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-red-500'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
