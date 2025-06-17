import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from './FAQData';

const FAQ: React.FC = () => {
  const generalFaqData = [
    {
      category: "💼 General",
      questions: [
        {
          question: "What is Kasi Wallet?",
          answer: "Kasi Wallet is a secure digital wallet made for South Africa's township and rural communities. It lets you send and receive money, pay at local shops, buy airtime, and make cash withdrawals — all from your phone."
        },
        {
          question: "Who can use Kasi Wallet?",
          answer: "Anyone with a South African phone number. You don't need a bank account — just your name, ID number, and phone to sign up."
        },
        {
          question: "Is Kasi Wallet safe?",
          answer: "Yes. Kasi Wallet uses advanced encryption, PIN security, and identity verification to protect your money."
        }
      ]
    },
    {
      category: "📲 Using the App",
      questions: [
        {
          question: "Do I need a smartphone to use Kasi Wallet?",
          answer: "No. Kasi Wallet works on smartphones (via app) and on feature phones through USSD or WhatsApp (selected features)."
        },
        {
          question: "How do I sign up?",
          answer: "Download the app (coming soon), enter your name and ID number, and verify with an SMS code. You'll be ready in under 2 minutes."
        },
        {
          question: "Can I link my bank account?",
          answer: "It's not required, but you can optionally link your bank account for EFT loading or withdrawals."
        }
      ]
    },
    ...faqData
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Kasi Wallet
          </p>
        </div>

        <div className="space-y-8">
          {generalFaqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;