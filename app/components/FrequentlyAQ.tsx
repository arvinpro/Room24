'use client';

import { SetStateAction, useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Roboto_Condensed } from "next/font/google";
import { Roboto } from 'next/font/google';


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
          <h1 className="text-5xl font-light text-gray-700 mb-4">
            Frequently Asked Question
          </h1>
          <p className="text-gray-600 text-xs">
            Find answers about booking, security, and how Room 24 works.
          </p>
        </div>

       
        <div className="mt-7 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-[1.2rem] font-normal text-gray-900 pr-4 tracking-wide ${roboto.className}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <X className="w-5 h-5 text-gray-600 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}