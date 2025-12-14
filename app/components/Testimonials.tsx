'use client';

import { SetStateAction, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I love how intuitive the app is. From browsing hotels to confirming bookings and saving my favorite trips, everything is seamless. The guide chat feature made my last trip to Pokhara so much easier.",
      name: "Ramesh Khatri",
      role: "Guest User",
      avatar: "RK",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "We rely on this app daily to manage bookings and guest interactions. It's reliable, easy to use, and has simplified operations across our hotel. The seamless communication with guests has helped us improve both efficiency and customer experience.",
      name: "Sita Sharma",
      role: "Hotel Sunrise – Manager",
      avatar: "SS",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      quote: "Planning my trips used to take hours, but this app makes it effortless. The maps, hotel details, and real-time guide chat ensure I always feel prepared. I can't imagine traveling without it now!",
      name: "Anita Gurung",
      role: "Guest User",
      avatar: "AG",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-600 text-4xl mb-2 font-light"
          >
            Don't take our word for it!
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4"
          >
            Hear what our User's Says about Room 24
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-500 text-base"
          >
            With over 100K+ users satisfied, here's what they have to say
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => {
              const position = (index - currentIndex + testimonials.length) % testimonials.length;
              const isCenter = position === 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: isCenter ? 1 : 0.4, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1.1 : 1
                  }}
                  className="bg-gray-100 rounded-2xl p-2 shadow-sm transition-all duration-300"
                >
                  <div className='rounded-xl bg-white mb-2 px-4'>
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <svg
                        className="w-10 h-10 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829C13.157 8.672 11.657 8 10 8zm12 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.157-.672 4.243-1.757l-2.829-2.829c-.39.39-.929.586-1.414.586-1.105 0-2-.895-2-2s.895-2 2-2c.485 0 1.024.196 1.414.586l2.829-2.829C25.157 8.672 23.657 8 22 8z" />
                      </svg>
                    </motion.div>

                    {/* Quote Text */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-gray-600 text-sm leading-relaxed min-h-[120px]"
                    >
                      {testimonial.quote}
                    </motion.p>
                  </div>

                  {/* User Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-white font-medium overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentIndex ? 24 : 8,
                    backgroundColor: index === currentIndex ? '#ef4444' : '#d1d5db'
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}