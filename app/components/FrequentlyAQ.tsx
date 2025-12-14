'use client';

import { SetStateAction, useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FrequentlyAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I book a room?",
      answer:
        "Open the Room 24 app, search by location or price, and select your room. Complete payment and you're done. Your confirmation arrives instantly.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Yes, all payments are processed through secure, encrypted channels using industry-standard security protocols to protect your financial information.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Cancellation policies vary by property. Please check the specific cancellation terms when booking. Most reservations can be cancelled through the app.",
    },
    {
      question: "How do hotels manage listings?",
      answer:
        "Hotels can manage their listings through our partner portal, where they can update availability, pricing, photos, and property information in real-time.",
    },
    {
      question: "What if I need help?",
      answer:
        "Our customer support team is available 24/7 through the app's chat feature, email, or phone. We're here to assist with any questions or concerns.",
    },
  ];

  const toggleFAQ = (index: SetStateAction<number>) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-18">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-700 leading-tight">
            Frequently Asked Question
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Find answers about booking, security, and how Room 24 works.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 transition"
              >
                <span className="text-base sm:text-lg md:text-xl font-normal text-gray-900 pr-4">
                  {faq.question}
                </span>

                <div className="shrink-0">
                  {openIndex === index ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
