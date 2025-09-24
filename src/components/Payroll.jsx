import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HRPayrollSection() {
  const faqItems = [
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
    <section className="w-full max-w-md mx-auto font-inter px-[24px] py-8 flex flex-col items-center text-left">
      {/* Testimonial 1 */}
      <div className="mb-6 border bg-[#D9D9D9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4">
        <p className="text-fluid-caption  mb-4">
          “With Accqrate People, we’ve saved hours in payroll processing and improved
          accuracy significantly. It’s simplified HR for us, allowing us to
          focus on what matters — our employees.”
        </p>
        <div className="flex items-center gap-2 justify-left">
          <img
            src="/images/man.png"
            alt="HR Director"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-green-700">HR Director</p>
            <p className="text-xs text-green-600">Global Retail Chain</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="mb-8 border bg-[#D9D9D9] border-green-600 shadow-[0_6px_4px_rgba(67,160,71,0.85)] rounded-lg p-4">
        <p className="text-fluid-caption  mb-4">
          “The automated compliance features ensure that we are always up to
          date with local laws, and the performance management system has
          helped us align team goals with the company’s objectives.”
        </p>
        <div className="flex items-center gap-2 justify-left">
          <img
            src="/images/woman.png"
            alt="Head of HR"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-left">
            <p className="text-sm font-semibold text-green-700">Head of HR</p>
            <p className="text-xs text-green-600">FMCG, Riyadh</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-fluid-h2 font-semibold mt-[24px] tracking--5">Any Questions?</h2>
      <h3 className="text-green-600 text-fluid-h2 font-bold mb-6 tracking--5" >We Got You !!!</h3>

      <Accordion type="single" collapsible className="w-full text-left mb-8">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-fluid-body font-medium text-gray-800">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-fluid-caption text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA Section */}
      <h3 className="text-green-600 font-semibold tracking--5 text-fluid-h2 ">
        Transform Your HR & Payroll
      </h3>
      <p className="text-gray-700 text-fluid-h2 tracking--5 font-semibold mb-6">
        Today with Accqrate People
      </p>
      <p className="text-gray-600 text-fluid-caption mb-8 text-center">
        Your HR and payroll systems should work for you, not the other way
        around. Discover the seamless, intuitive solution trusted by businesses
        worldwide.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 px-8 w-full">
        <button className="bg-[#4CAF50]  text-white py-3 px-4 rounded-md w-full">
          REQUEST A DEMO
        </button>
        <button className="bg-[#4CAF50]  text-white py-3 px-4 rounded-md w-full">
          CONTACT SALES
        </button>
        <button className="bg-[#4CAF50]  text-white py-3 px-4 rounded-md w-full">
          LEARN MORE
        </button>
      </div>
    </section>
  );
}
