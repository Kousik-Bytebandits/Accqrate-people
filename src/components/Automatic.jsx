"use client";

import { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "../components/skeleton";
import useInView from "../utils/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AutomationSection() {
  const sections = [
    {
      title: "All-in-One Employee Performance Management",
      items: [
        {
          label: "Organization & Goal Setting",
          content: "Define and track organizational goals aligned with strategy.",
        },
        {
          label: "Appraisal Reviews",
          content: "Conduct structured reviews to evaluate employee performance.",
        },
        {
          label: "Continuous Feedback",
          content:
            "Provide real-time feedback to employees for continuous improvement.",
        },
      ],
    },
    {
      title: "ESS – Employee Self Service Portal",
      items: [
        {
          label: "Onboard your employees",
          content: "Easily onboard new hires with a seamless digital workflow.",
        },
        {
          label: "Centralized Portal",
          content:
            "Give employees access to all their HR information in one place.",
        },
        {
          label: "Workflow",
          content:
            "Automate approval workflows for leave, claims, and other requests.",
        },
      ],
    },
  ];

  const { loading } = useContext(LoadingContext);
  const automationRef = useRef(null);
  const isVisible = useInView(automationRef, { threshold: 0 });

  if (loading || !isVisible) {
    return (
      <div
        ref={automationRef}
        className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto"
      >
        {/* Skeleton layout for two sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col"
            >
              <Skeleton height="28px" width="80%" className="mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border-b border-gray-300 pb-2 flex justify-between items-center"
                  >
                    <Skeleton height="18px" width="70%" />
                    <Skeleton height="16px" width="16px" className="rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video Skeleton */}
        <div className="mt-8">
          <Skeleton
            height="220px"
            className="w-full md:h-[300px] lg:h-[420px] rounded-lg"
          />
        </div>
        <div className="my-12 bg-[#F2F2F2] py-12 px-6"> <Skeleton height="38px" width="50%" className="mb-12 mx-auto" /> <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8"> <div className="flex justify-center items-center"> <Skeleton height="320px" width="100%" className="max-w-[480px]" /> </div> <ul className="space-y-4"> {[1, 2, 3, 4, 5, 6].map((item) => ( <li key={item}> <Skeleton height="20px" width="100%" /> </li> ))} </ul> </div> </div>
      </div>
    );
  }

  return (
    <>
    <div className="bg-white mt-[24px] md:mt-8 lg:mt-10 px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
      {/* ================= Two Sections with Accordion ================= */}
      <div
        ref={automationRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-10"
      >
        {sections.map((section, sIdx) => (
          <div
            key={sIdx}
            className="bg-white p-6 flex flex-col"
          >
            <h2 className="text-[#43A047] tracking--5 text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-snug mb-6">
              {section.title}
            </h2>

            {/* Accordion like old code */}
            <Accordion type="single" collapsible className="w-full max-w-[400px]">
              {section.items.map((item, index) => (
                <AccordionItem key={index} value={`${sIdx}-${index}`}>
                  <AccordionTrigger className="text-[16px] md:text-[16px] font-semibold">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="text-[12px] md:text-[14px]">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>

      {/* Shared Video */}
      <div className="mt-8 md:mt-10">
        <video
          className="rounded-lg w-full md:h-[300px] lg:h-[420px] object-contain"
          autoPlay
          muted
          loop
        >
          <source src="videos/Ai-driven_automation.mp4" type="video/mp4" />
        </video>
      </div>
     
      </div>
       <div className="my-12 md:my-[56px] lg:my-10 bg-[#F2F2F2] w-full py-6"> 
        <div className="max-w-[1280px] mx-auto px-[24px] md:px-[32px] font-inter">
          <h2 className="text-[26px] tracking--5 max-w-[250px] sm:max-w-[800px] mx-auto sm:text-[28px] md:text-[32px] lg:text-[38px] font-semibold mb-6 md:mb-[32px] text-center leading-snug"> Accqrate <span className="text-[#43A047]"> People </span> : 
          Why It Works for You</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img src="/images/hiring.png" alt="Why Choose Accqrate Books" className="w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto" />
            </div>
            {/* Text List */}
            <ul className="text-left px-[24px] list-disc list-inside text-[14px] leading-6 sm:text-[15px] md:text-[16px] lg:text-[18px] space-y-4 md:space-y-6">
              <li> Stay Ahead of ZATCA Compliance by Design: Never worry about last-minute regulations or audits. </li>
              <li> Modern Cloud Accounting: Access your accounting software anywhere. Simplify financial management for every team member. </li>
              <li> Device and Vendor Freedom: Use any device, integrate any bank, no hardware lock-in. </li>
              <li> Future-Proof Scaling: Move from startup to multi-entity enterprise—no reimplementation, no data loss. </li>
              <li> Total Business Control: Real-time insights, automation, and bulletproof security. </li>
              <li> Flexible price: Flexible plans for every business, from startups to enterprises. Your data stays secure on our Saudi e-invoicing platform with cloud accounting software benefits. </li>
            </ul>
          </div>
        </div>
        </div>
        </>
  );
}
