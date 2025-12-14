'use client';

import { SetStateAction, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Roboto_Condensed } from "next/font/google";
import { Roboto } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function FrequentlyAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a room?",
      answer: "Open the Room 24 app, search by location or price, and select your room. Complete payment and you're done. Your confirmation arrives instantly."
    },
    {
      question: "Is my payment secure?",
      answer: "Yes, all payments are processed through secure, encrypted channels using industry-standard security protocols to protect your financial information."
    },
    {
      question: "Can I cancel my",
      answer: "Cancellation policies vary by property. Please check the specific cancellation terms when booking. Most reservations can be cancelled through the app."
    },
    {
      question: "How do hotels manage listings?",
      answer: "Hotels can manage their listings through our partner portal, where they can update availability, pricing, photos, and property information in real-time."
    },
    {
      question: "What if I need help?",
      answer: "Our customer support team is available 24/7 through the app's chat feature, email, or phone. We're here to assist with any questions or concerns."
    }
  ];

  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-18">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-light text-gray-700 mb-4"
          >
            Frequently Asked Question
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-xs"
          >
            Find answers about booking, security, and how Room 24 works.
          </motion.p>
        </div>

        <div className="mt-7 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                className="w-full px-8 py-4 flex items-center justify-between text-left transition-colors"
              >
                <span className={`text-[1.2rem] font-normal text-gray-900 pr-4 tracking-wide ${roboto.className}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                    <X className="w-5 h-5 text-gray-600 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-600 shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}