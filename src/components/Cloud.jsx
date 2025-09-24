"use client";

import { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionCard
} from "@/components/ui/accordion";

export default function Cloud() {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  const receivableDropdowns = [
    { title: "Company CV Format", content: "Sample content for Company CV Format." },
    { title: "Onboarding Link", content: "Sample content for Onboarding." },
    { title: "Job Postings & Evaluation", content: "Sample content for Job Postings & Evaluations." },

  ];

  const payableDropdowns = [
    { title: "Automated Payroll Setup", content: "Sample content for Automated Payroll Setup." },
    { title: "Custom Payroll Components", content: "Sample content for Custom Payroll Components." },
    { title: "Statutory & Loan Clearance", content: "Sample content for Statutory & Loan Clearance." },
    ];

  const expenseDropdowns = [
    { title: "Company Calendar & Leave Balances", content: "Sample content for Company Calendar & Leave Balances." },
    { title: "Leave Request Automation", content: "Sample content for Leave Request Automation." },
    { title: "Comprehensive Leave Reporting", content: "Sample content for Comprehensive Leave Reporting." },
     ];

  const financialDropdowns = [
    { title: "Termination Checklists", content: "Sample content for Termination Checklists." },
    { title: "Complete Data & Asset Retrieval", content: "Sample content for Complete Data & Asset Retrieval." },
    { title: "Exit interviews & Documentation", content: "Sample content for Exit interviews & Documentation." },
     ];

  // --- Skeleton ---
  if (loading || !isVisible) {
    return (
      <section
        ref={receivableRef}
        className="space-y-6 my-6 max-w-[1440px] mx-auto"
      >
        {/* Skeleton code remains unchanged */}
        {/* ... */}
      </section>
    );
  }

  // --- Main Content ---
  return (
    <section className="mx-auto font-inter">
      <div className="mt-[32px]">
        {/* Top Feature Cards */}
         <h2 className="text-[24px] max-w-[340px] sm:max-w-[800px] mx-auto px-[24px] mt-[48px] leading-tight tracking--5 md:text-fluid-h2 font-medium text-center  md:mb-[32px]">
          <span className="text-[#43A047]"> Cloud or On-Premises?</span> The Choice is Yours
        </h2>
        <p className="text-fluid-caption text-bold px-[24px] mx-auto text-center py-[12px]">Fast, Flexible, and Secure Deployment Options</p>
        <p className="text-center px-[24px] text-gray-700 tracking--2 text-[14px] md:text-fluid-body max-w-5xl mx-auto pb-6 md:pb-[32px]">
With Accqrate People, you’re in control. Whether you choose to deploy in the cloud or on-premises, your HR data is secure and always accessible </p>

        <div className="max-w-[1000px] mx-auto px-[24px] md:px-[32px] rounded-[40px] mb-[48px] md:mb-[56px]">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col md:flex-row gap-4 w-[100%] mx-auto"
          >
            <AccordionCard
              value="card-4"
              icon="/images/instant.png"
              title="Cloud Deployment"
              content={
                <>This is where extra details about cloud deployment go.</>
              }
            />

            <AccordionCard
              value="card-5"
              icon="/images/invoice.png"
              title="On-Premises"
              content={
                <>Extra details about on-premises deployment will be shown here.</>
              }
            />
          </Accordion>
        </div>

        {/* Bottom Sections */}
        <h2 className="text-[24px] max-w-[340px] sm:max-w-[800px] mx-auto px-[24px] mt-[48px] leading-tight tracking--5 md:text-fluid-h2 font-medium text-center  md:mb-[32px]">
        Manage Every <span className="text-[#43A047]">Employee Lifecycle</span> in One Platform
        </h2>
        <p className="text-fluid-caption text-bold px-[24px] mx-auto text-center py-[12px]">Streamlined HR, Payroll and Compliance</p>
        <div className=" py-6 md:py-[32px]">
          <div className="px-6 md:px-[32px] max-w-[1280px] mx-auto">
            {/* ================= Account Receivables ================= */}
            <SectionWithAccordion
              title="Simplify Recruitment and Onboarding"
              items={receivableDropdowns}
              video="videos/account-receivables.mp4"
            />

            {/* ================= Account Payables ================= */}
            <SectionWithAccordion
              title="Effortless Payroll & Compliance"
             items={payableDropdowns}
              video="videos/Accounts_payables.mp4"
            />

            {/* ================= Smart Expense Management ================= */}
            <SectionWithAccordion
              title="Track Absences and Manage Leave with Ease"
              items={expenseDropdowns}
              video="videos/Smart_expense_management.mp4"
            />
          </div>
        </div>
      </div>

      {/* ================= Financial Statements ================= */}
      <div className="px-6 md:px-[32px] md:py-[32px] max-w-[1280px] mx-auto bg-white">
        <SectionWithAccordion
          title="Termination and Offboarding Made Simple"
          items={financialDropdowns}
          video="videos/Financial_statements.mp4"
          className="bg-white"
        />
      </div>
     
    </section>
  );
}

/* --- Reusable Subcomponent --- */
function SectionWithAccordion({ title, items, video, className }) {
  return (
    <>
      <div className="my-6 md:my-[32px]">
        <section className={`${className ? className : ""} py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl md:pb-10 lg:pb-20 mx-auto md:flex md:px-[32px] lg:px-10`}>
          {/* Left Side */}
          <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
            <h2 className="text-[#43A047] text-[20px] md:text-[24px] lg:text-[40px] tracking--5 leading-tight pb-6 md:pb-[32px] tracking-[-2%] ">
              {title}{" "}
             
            </h2>
           

            {/* Accordion */}
            <div className="md:mt-6 lg:mt-10">
              <Accordion type="single" collapsible className="w-full max-w-[400px]">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`${title}-${index}`}>
                    <AccordionTrigger className="text-[16px] md:text-[14px] lg:text-[16px] font-medium text-left">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[12px] md:text-[12px] lg:text-[14px]">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
            <video
              className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
              autoPlay
              muted
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </section>
      </div>
    </>
  );
}
