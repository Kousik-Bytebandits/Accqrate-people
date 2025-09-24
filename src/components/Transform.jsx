"use client";

import React, { useContext, useRef } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionCard } from "@/components/ui/accordion"; // ✅ import Accordion components
import FeatureCard from "./ui/FeatureCard";
import Image from "next/image";
export default function Transform() {
  const { loading } = useContext(LoadingContext);
  const onboardRef = useRef(null);
  const isVisible = useInView(onboardRef);
  const topRow = [
    { src: "/images/1.png", name: "Education" },
    { src: "/images/2.png", name: "Construction & Engineering" },
    { src: "/images/3.png", name: "Logistics" },
    { src: "/images/4.png", name: "Insurance" },
    { src: "/images/5.png", name: "Conglomerate" },
    { src: "/images/6.png", name: "Pharmacy" },
    { src: "/images/7.png", name: "Energy" },
    { src: "/images/8.png", name: "Conglomerate" },
    { src: "/images/9.png", name: "Insurance" },
    { src: "/images/10.png", name: "Packaging solutions" },
    { src: "/images/11.png", name: "Food & Beverage" },
    { src: "/images/12.png", name: "Trading" },
    { src: "/images/13.png", name: "Chemicals" },
  ];

  const bottomRow = [
    { src: "/images/14.png", name: "Hospitality and Tourism" },
    { src: "/images/15.png", name: "FMCD" },
    { src: "/images/16.png", name: "Oil & Gas" },
    { src: "/images/17.png", name: "Home Appliances" },
    { src: "/images/18.png", name: "Manufacturing" },
    { src: "/images/19.png", name: "Construction & Engineering" },
    { src: "/images/20.png", name: "Education" },
    { src: "/images/21.png", name: "Conglomerate" },
    { src: "/images/22.png", name: "Electrical Industries Co." },
    { src: "/images/23.png", name: "Aerospace & Defense" },
    { src: "/images/24.png", name: "Retail" },
    { src: "/images/25.png", name: "Ecommerce" },
    { src: "/images/26.png", name: "Fashion" },
  ];

  if (loading || !isVisible) {
    return (
      <section
        ref={onboardRef}
        className="w-full max-w-[1280px] mx-auto font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
        <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
        <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-16 mt-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[320px] md:w-[340px] h-[270px] md:h-[400px] rounded-xl p-4 bg-[#F2F2F2] shadow"
            >
              <Skeleton className="w-full h-32 md:h-48 rounded-lg mb-4" />
              <Skeleton className="w-3/4 h-5 rounded mb-2" />
              <Skeleton className="w-full h-4 rounded mb-2" />
              <Skeleton className="w-5/6 h-4 rounded" />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F2F2F2] font-inter w-full md:rounded-lg md:h-[560px] px-6 py-10">
          <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
          <Skeleton height="20px" width="50%" className="mb-8 mx-auto" />
          <div className="flex flex-col gap-4 max-w-xs md:mt-14 mx-auto md:grid md:grid-cols-3 md:max-w-5xl md:gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative group bg-[#dddcdc] rounded-md w-full h-[200px] overflow-hidden"
              >
                <div className="absolute top-full left-1/2 w-full h-full rounded-full bg-[#43A047] -translate-x-1/2 scale-90"></div>
                <Skeleton
                  height="28px"
                  width="80%"
                  className="relative z-10 mx-auto mt-8"
                />
                <Skeleton
                  height="16px"
                  width="90%"
                  className="absolute inset-0 flex items-center justify-center text-center opacity-50 mx-auto my-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-screen bg-[#E6F4FF] relative">
          <div className="max-w-5xl overflow-hidden py-6 mx-auto">
            <div className="flex flex-col gap-6">
              {/* Top Row Skeleton */}
              <div className="flex animate-scrollLeft w-max flex-shrink-0">
                {[...Array(13)].map((_, i) => (
                  <div
                    key={`top-skeleton-${i}`}
                    className="flex flex-col items-center mx-4"
                  >
                    <Skeleton
                      width="135px"
                      height="56px"
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      height="12px"
                      width="80px"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Row Skeleton */}
              <div className="flex animate-scrollRight w-max flex-shrink-0">
                {[...Array(13)].map((_, i) => (
                  <div
                    key={`bottom-skeleton-${i}`}
                    className="flex flex-col items-center mx-4"
                  >
                    <Skeleton
                      width="135px"
                      height="56px"
                      className="h-14 md:h-16 md:w-60"
                    />
                    <Skeleton
                      height="12px"
                      width="80px"
                      className="mt-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="px-[24px] md:px-[32px] max-w-[1280px] mx-auto font-inter">
        {/* Heading */}
        <h2 className="max-w-[340px] mx-auto sm:max-w-[800px] text-[24px] md:text-[32px] lg:text-[36px] font-inter text-[#000000] text-center mb-4 md:mb-[32px]">
          Transform Your <span className="text-[#43A047]">HR and Payroll</span> Today
        </h2>
          
        {/* Shared description */}
        <p className="mb-6 md:mb-[32px] text-[#000000B2] lg:text-fluid-body text-[14px] md:text-[16px] text-center max-w-3xl mx-auto">
         Accqrate People brings your HR & Payroll processes together in one unified platform. Forget endless spreadsheets, outdated systems, and manual errors. Accqrate People is designed to automate and simplify:
        </p>
        <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 items-center lg:gap-16 mb-[48px] md:mb-[56px]">
          {/* Card 1 */}
          <FeatureCard
            videoSrc="videos/cloud-first.mp4"
            title="Payroll"
            description=" Automate calculations, streamline payslip generation, and ensure compliance without the headache."
          />

          {/* Card 2 */}
          <FeatureCard
            videoSrc="videos/all-devices.mp4"
            title="HR Management"
            description=" From recruitment and onboarding to performance and asset management, handle it all effortlessly."
          />

          {/* Card 3 */}
          <FeatureCard
            videoSrc="videos/no-special-hardware.mp4"
            title="Compliance"
            description="Always stay in control with up-to-date compliance tools for local regulations and international standards."
          />
        </div>

        {/* Heading */}
        <h2 className="text-[24px] md:text-fluid-h2 font-medium tracking--5 text-center mb-4 md:mb-[32px]">
          Integrated <span className="text-[#43A047]">HR Finances</span>
        </h2>
        <p className="text-center text-gray-700 tracking--2 text-[14px] md:text-fluid-body max-w-5xl mx-auto pb-6 md:pb-[32px]">
         Accqrate People not only provides HR & Payroll processes but also seamlessly integrated with Accounting and Controlling to manage payroll finances, employee expenses and loans. Forget disintegrated software and modular based applications. Accqrate automates your HR and Payroll business processes including automated accounting. Accqrate People is designed to automate and simplify
        </p>
        {/* Accordion Section */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4
        sm:grid sm:grid-cols-2 md:gap-6
        md:grid md:grid-cols-2 md:max-w-5xl md:mb-[32px] mx-auto"
        >
          <AccordionCard
            value="card-1"
            icon="/images/instant.png"
            title="Payroll Finances"
            content={
              <>Extra details about <b>Payroll Finances</b> will appear here when expanded 1.</>
            }
          />

          <AccordionCard
            value="card-2"
            icon="/images/invoice.png"
            title="Payroll Clearances"
            content={
              <>Extra details about <b>Payroll Clearances</b> will be shown here 2.</>
            }
          />

         
        </Accordion>

   <h2 className="text-[24px] mt-[48px] leading-tight tracking--5 md:text-fluid-h2 font-medium text-center mb-4 md:mb-[32px]">
          Integrated DMS<span className="text-[#43A047]"> {" "}(Document Management System)</span>
        </h2>
        <p className="text-center text-gray-700 tracking--2 text-[14px] md:text-fluid-body max-w-5xl mx-auto pb-6 md:pb-[32px]">
Accqrate People helps to maintain all your employee records up-to-date and intact through the inbuilt DMS. All employee related documents can easily be stored and retrieved in a single click. Thanks to the keyword searches that enables you to effortlessly track the dossier of your employees. </p>
        {/* Accordion Section */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-4
        sm:grid sm:grid-cols-2 md:gap-6
        md:grid md:grid-cols-2 md:max-w-5xl md:mb-[32px] mx-auto"
        >
          <AccordionCard
            value="card-1"
            icon="/images/instant.png"
            title="Storage and archiving"
            content={
              <>Extra details about <b>Storage and archiving</b> will appear here when expanded 1.</>
            }
          />

          <AccordionCard
            value="card-2"
            icon="/images/invoice.png"
            title="Flexible retrieval options"
            content={
              <>Extra details about <b>Flexible retrieval options</b> will be shown here 2.</>
            }
          />

         
        </Accordion>
      </div>
{/* Logo Marquee */}
<h1 className="text-[24px] max-w-[340px] leading-tight mx-auto mt-[48px] tracking--5 md:text-fluid-h2 font-semibold text-center mb-4 px-[24px] md:mb-[32px]">Trusted by <span className="text-[#43A047]">Global Leaders</span> Across Industries</h1>
    <p className="text-center text-gray-700 text-[14px] md:text-fluid-body max-w-5xl mx-auto px-[24px] pb-[32px]">Accqrate People empowers companies in retail, manufacturing, hospitality, healthcare, and more to stay ahead of their HR & Payroll needs.</p>
      <div className="w-screen  relative mb-[48px] md:mb-[56px]">
        <div className="max-w-5xl overflow-hidden py-6 mx-auto">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 md:w-20 " />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 md:w-20 "/>

          <div className="flex flex-col gap-6">
            <div className="flex animate-scrollLeft w-max flex-shrink-0">
              {[...topRow, ...topRow].map((logo, i) => (
                <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={135}
                    height={48}
                    className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                </div>
              ))}
            </div>

            <div className="flex animate-scrollRight w-max flex-shrink-0">
              {[...bottomRow, ...bottomRow].map((logo, i) => (
                <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={135}
                    height={48}
                    className="h-14 md:h-16 md:w-60 grayscale opacity-90 transition hover:grayscale-0 hover:opacity-100"
                  />
                  <p className="mt-2 text-xs md:text-sm text-gray-700 font-medium">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[24px] px-[24px]">
          <div
            className="bg-gradient-to-r from-[#E6E6E6] to-[#C8C8C8] rounded-lg mx-auto
              p-6 sm:p-6 md:p-10 md:max-w-5xl
              h-auto sm:h-[110px] md:h-[129px] lg:h-[182px]
              flex flex-col items-center justify-center"
          >
            <div className="max-w-[1000px] w-full">
              <p className="text-fluid-body tracking--2 font-normal text-[#333333] md:leading-10 text-left md:text-center">
                “We transitioned our entire accounting system in one afternoon no external consultants needed.”</p>
              <p className="text-[14px] sm:text-sm md:text-base md:leading-10 text-[#333333] mt-2 text-right pr-4">
                — CFO, Riyadh
              </p>
            </div>
          </div>
          
        </div>
    </>
  );
}
