"use client";

import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  // If AccordionCard is custom in your project, keep it. Otherwise remove it.
  AccordionCard,
} from "../components/ui/accordion";

// Type for dropdown items
interface DropdownItem {
  title: string;
  content: string;
}

export default function Cloud() {
  const { loading } = useContext(LoadingContext);
  const receivableRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(receivableRef, { threshold: 0 });

  // Dropdown data arrays
  const receivableDropdowns: DropdownItem[] = [
    { title: "Company CV Format", content: "Sample content for Company CV Format." },
    { title: "Onboarding Link", content: "Sample content for Onboarding." },
    { title: "Job Postings & Evaluation", content: "Sample content for Job Postings & Evaluations." },
  ];

  const payableDropdowns: DropdownItem[] = [
    { title: "Automated Payroll Setup", content: "Sample content for Automated Payroll Setup." },
    { title: "Custom Payroll Components", content: "Sample content for Custom Payroll Components." },
    { title: "Statutory & Loan Clearance", content: "Sample content for Statutory & Loan Clearance." },
  ];

  const expenseDropdowns: DropdownItem[] = [
    { title: "Company Calendar & Leave Balances", content: "Sample content for Company Calendar & Leave Balances." },
    { title: "Leave Request Automation", content: "Sample content for Leave Request Automation." },
    { title: "Comprehensive Leave Reporting", content: "Sample content for Comprehensive Leave Reporting." },
  ];

  const financialDropdowns: DropdownItem[] = [
    { title: "Termination Checklists", content: "Sample content for Termination Checklists." },
    { title: "Complete Data & Asset Retrieval", content: "Sample content for Complete Data & Asset Retrieval." },
    { title: "Exit interviews & Documentation", content: "Sample content for Exit interviews & Documentation." },
  ];

  // Show skeleton while loading or not in view
  if (loading || !isVisible) {
    return (
      <section ref={receivableRef} className="space-y-6 my-6 max-w-[1440px] mx-auto">
        <Skeleton className="h-[200px] w-full rounded-xl" />
        <Skeleton className="h-[200px] w-full rounded-xl" />
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto font-inter max-w-[1280px]">
        <div className="mt-[32px]">
          {/* Top Feature Cards */}
          <h2 className="text-[24px] max-w-[340px] lg:text-[38px] sm:max-w-[800px] mx-auto px-[24px] mt-[48px] leading-tight tracking-[-0.05em] md:text-fluid-h2 font-medium text-center mb-6">
            <span className="text-[#43A047]"> Cloud or On-Premises?</span> The Choice is Yours
          </h2>
          <p className="text-fluid-h3 font-semibold px-[24px] mx-auto text-center mb-6">
            Fast, Flexible, and Secure Deployment Options
          </p>
          <p className="text-center px-[24px] text-gray-700 tracking-[-0.02em] text-[14px] md:text-fluid-body max-w-5xl mx-auto pb-6">
            With Accqrate People, you’re in control. Whether you choose to deploy in the cloud or on-premises, your HR data is secure and always accessible
          </p>

          <div className="max-w-[1000px] mx-auto px-[24px] md:px-[32px] rounded-[40px] mb-[48px] md:mb-[56px]">
            <Accordion type="single" collapsible className="flex flex-col md:flex-row gap-4 w-[100%] mx-auto">
              <AccordionCard
                value="card-4"
                icon="/images/instant.png"
                title="Cloud Deployment"
                content={<>This is where extra details about cloud deployment go.</>}
              />
              <AccordionCard
                value="card-5"
                icon="/images/invoice.png"
                title="On-Premises"
                content={<>Extra details about on-premises deployment will be shown here.</>}
              />
            </Accordion>
          </div>

          {/* Bottom Sections */}
          <h2 className="text-[24px] max-w-[340px] sm:max-w-[1280px] lg:text-[38px] mx-auto px-[24px] mt-[48px] leading-tight tracking-[-0.05em] md:text-fluid-h2 font-medium text-center mb-6">
            Manage Every <span className="text-[#43A047]">Employee Lifecycle</span> in One Platform
          </h2>
          <p className="text-fluid-caption px-[24px] lg:text-[20px] mx-auto text-center">
            Streamlined HR, Payroll and Compliance
          </p>

          {/* ================= Account Receivables ================= */}
          <section className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#43A047] text-[20px] md:text-[24px] lg:text-[40px] tracking-[-0.05em] leading-tight pb-6">
                Simplify Recruitment and Onboarding
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                {receivableDropdowns.map((item, idx) => (
                  <AccordionItem key={idx} value={`receivable-${idx}`}>
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
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
              <video
                className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="videos/account-receivables.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
      </section>

      {/* ================= Other Sections ================= */}
      <section className="md:bg-[#F2FFF3]">
        <div className="max-w-[1280px] mx-auto">
          {/* Account Payables */}
          <section className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
            <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
              <h2 className="text-[#43A047] text-[20px] md:text-[24px] lg:text-[40px] tracking-[-0.05em] leading-tight pb-6">
                Effortless Payroll & Compliance
              </h2>
              <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                {payableDropdowns.map((item, idx) => (
                  <AccordionItem key={idx} value={`payable-${idx}`}>
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
            <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
              <video
                className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="videos/Accounts_payables.mp4" type="video/mp4" />
              </video>
            </div>
          </section>

          <div className="bg-[#F2FFF3] py-6 md:py-0">
            {/* Smart Expense Management */}
            <section className="my-6 mx-6 md:m-[32px]">
              <div className="rounded-xl md:rounded-2xl mx-auto md:flex md:bg-white md:p-[32px] md:shadow-[9px_7px_16.9px_rgba(67,160,71,0.2)]">
                <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                  <h2 className="text-[#43A047] text-[20px] md:text-[24px] lg:text-[40px] tracking-[-0.05em] leading-tight pb-6">
                    Track Absences and Manage Leave with Ease
                  </h2>
                  <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                    {expenseDropdowns.map((item, idx) => (
                      <AccordionItem key={idx} value={`expense-${idx}`}>
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
                <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
                  <video
                    className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="videos/Smart_expense_management.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            {/* Financial Statements */}
            <section className="py-6 px-6 md:p-[32px] rounded-xl md:rounded-2xl mx-auto md:flex">
              <div className="flex-1 md:max-w-[400px] lg:max-w-[520px]">
                <h2 className="text-[#43A047] text-[20px] md:text-[24px] lg:text-[40px] tracking-[-0.05em] leading-tight pb-6">
                  Termination and Offboarding Made Simple
                </h2>
                <Accordion type="single" collapsible className="w-full max-w-[400px] md:mt-6 lg:mt-10">
                  {financialDropdowns.map((item, idx) => (
                    <AccordionItem key={idx} value={`financial-${idx}`}>
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
              <div className="flex-1 mt-6 lg:mt-0 flex justify-center items-center">
                <video
                  className="rounded-lg w-full max-w-[500px] md:h-[300px] lg:h-auto xl:h-[420px] object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="videos/Financial_statements.mp4" type="video/mp4" />
                </video>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
