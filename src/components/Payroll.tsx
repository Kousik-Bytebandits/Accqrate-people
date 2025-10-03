import React, { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function HRPayrollSection(): JSX.Element {
  const faqItems: FAQItem[] = [
    {
      question: "How quickly can we deploy Accqrate People?",
      answer:
        "Deployment depends on your organization’s size and requirements, but most clients get started within weeks.",
    },
    {
      question: "Can Accqrate People integrate with other HR systems?",
      answer:
        "Yes, Accqrate People integrates seamlessly with a wide range of HR and payroll systems.",
    },
    {
      question: "Is my data secure with Accqrate People?",
      answer:
        "Absolutely. Data security is a top priority, with enterprise-grade encryption and compliance standards.",
    },
  ];

  return (
    <>
      <section className="w-full max-w-[1280px] mx-auto font-inter px-6 md:px-8 py-8 flex flex-col items-center text-left">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Testimonial 1 */}
          <div className="border bg-[#D9D9D9] md:bg-[#F9FFF9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4 lg:p-8 lg:h-[330px] flex flex-col">
            <p className="text-fluid-caption lg:text-[20px] mb-4">
              “With Accqrate People, we’ve saved hours in payroll processing and
              improved accuracy significantly. It's simplified HR for us, allowing us
              to focus on what matters—our employees.”
            </p>
            <div className="flex items-center gap-2 mt-auto pl-1">
              <img
                src="/images/man.png"
                alt="Head of HR"
                className="w-10 h-10 lg:h-[60px] lg:w-[60px] rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-green-700">Head of HR</p>
                <p className="text-xs text-green-600">FMCG, Riyadh</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border bg-[#D9D9D9] md:bg-[#F9FFF9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4 lg:p-8 lg:h-[330px] flex flex-col">
            <p className="text-fluid-caption lg:text-[20px] mb-4">
              “The automated compliance features ensure that we are always up to date
              with local laws, and the performance management system has helped us
              align team goals with the company’s objectives.”
            </p>
            <div className="flex items-center gap-2 mt-auto pl-1">
              <img
                src="/images/woman.png"
                alt="Head of HR"
                className="w-10 h-10 lg:h-[60px] lg:w-[60px] rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-green-700">Head of HR</p>
                <p className="text-xs text-green-600">FMCG, Riyadh</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="md:m-10 my-8 md:py-10 lg:m-[60px] lg:py-[60px] max-w-[1280px] mx-auto grid gap-6 md:grid-cols-2 md:items-start">
          <div className="self-center text-center md:text-left">
            <h2 className="text-fluid-h2 lg:text-[48px] font-semibold tracking--5">
              Any Questions?
            </h2>
            <h3 className="text-green-600 md:text-[#333333] lg:text-[48px] text-fluid-h2 font-bold tracking--5">
              We Got You !!!
            </h3>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full text-left">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="space-y-8"
                >
                  <AccordionTrigger className="text-fluid-body font-light text-gray-800 lg:text-[26px] leading-8 md:mt-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-fluid-caption lg:text-[22px] font-light text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <div className="bg-[#F2F2F2] w-full py-6 md:py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 ">
          <h3 className="text-green-600 font-semibold tracking--5 text-center text-fluid-h2 md:hidden">
            Transform Your HR & Payroll
          </h3>
          <p className="text-gray-700 text-fluid-h2 tracking--5 text-center font-semibold mb-6 md:hidden">
            Today with Accqrate People
          </p>
          <h3 className="text-[#333333] text-center font-medium tracking--5 lg:text-[38px] text-fluid-h2 hidden md:block">
            Transform Your HR & Payroll Today with Accqrate People
          </h3>
          <p className="text-gray-600 text-fluid-caption lg:text-[20px] mb-8 text-center">
            Your HR and payroll systems should work for you, not the other way
            around. <br className="hidden md:block" /> Discover the seamless,
            intuitive solution trusted by businesses worldwide.
          </p>

          <div className="flex flex-col md:flex-row gap-3 px-8 w-full max-w-[1280px] mx-auto md:justify-center">
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              REQUEST A DEMO
            </button>
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              CONTACT SALES
            </button>
            <button className="bg-[#4CAF50] text-white py-3 px-4 rounded-md w-full md:w-[300px] md:h-[58px]">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
