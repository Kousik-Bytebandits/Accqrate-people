"use client";

import Image from "next/image";
import React, { useContext, useRef } from "react";
import type { JSX } from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import useInView from "../utils/useInView";
import ButtonGroup from "../components/ui/ButtonGroup";

export default function Hero(): JSX.Element {
  const { loading } = useContext(LoadingContext);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useInView(heroRef);

  interface Industry {
    src: string;
    name: string;
  }

  const topRow: Industry[] = [
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

  const bottomRow: Industry[] = [
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
        id="heroSection"
        ref={heroRef}
        className="w-full font-inter flex flex-col items-center justify-center text-center py-10 mt-10 px-4"
      >
        {/* Heading skeletons */}
        <Skeleton height="40px" width="60%" className="mb-6 mx-auto" />
        <Skeleton height="28px" width="70%" className="mb-4 mx-auto" />
        <Skeleton height="20px" width="80%" className="mb-4 mx-auto" />

        <Skeleton height="22px" width="50%" className="mb-4 mt-4 mx-auto" />
        <Skeleton height="22px" width="60%" className="mb-4 mx-auto" />

        {/* Buttons skeleton */}
        <div className="flex gap-4 mt-8">
          <Skeleton height="50px" width="160px" className="rounded-full" />
          <Skeleton height="50px" width="160px" className="rounded-full" />
        </div>

        {/* Video skeleton */}
        <Skeleton
          height="400px"
          width="100%"
          className="mt-12 max-w-[1128px] rounded-xl"
        />

        {/* Trusted text skeleton */}
        <Skeleton height="24px" width="70%" className="mt-12 mx-auto mb-6" />
      </section>
    );
  }

  return (
    <section
      id="heroSection"
      ref={heroRef}
      className="w-full font-inter flex flex-col items-center justify-center text-center px-6 md:px-[32px]"
    >
      <div className="w-full max-w-[1280px] mx-auto mt-[82px] md:mt-[90px] mb-[40px]">
        {/* Headings */}
        <h1 className="tracking--5 text-fluid-h1 font-semibold text-[#333333] mb-[24px]">
          Accqrate <span className="text-[#43A047]">People</span>
        </h1>
        <div className=" max-w-[340px] md:max-w-[800px] mx-auto">
          <h2 className="text-[20px] tracking--5 md:text-[24px] lg:text-[38px] font-light text-[#333333] tracking-wide mb-[24px]">
            The Only{" "}
            <span className="text-[#43A047] font-medium md:font-medium ">
              HR & Payroll Solution
            </span>{" "}
            You'll Ever Need
          </h2>
          <p className="text-fluid-caption max-w-[250px] mx-auto sm:max-w-[900px] md:text-[18px] lg:text-[26px] tracking-tight md:font-semibold md:leading-10 mb-[16px] md:mb-[24px] text-[#333333]">
            Effortlessly Manage Your Workforce, Payroll,
            <br className="hidden md:block" /> and Compliance
          </p>

          {/* Supporting text */}
          <p className="text-[#737373] text-fluid-small md:hidden">
            Whether you're scaling, managing a growing team, or optimizing HR
            operations, Accqrate People is built to simplify every aspect of HR
            from recruitment to retirement on a single, secure platform.
          </p>

          <p className="text-[#737373] text-[20px] hidden md:block">
            Whether you're scaling, managing a growing team, or optimizing HR
            operations, Accqrate People is built to simplify every aspect of HR
            from recruitment to retirement on a single, secure platform.
          </p>
        </div>

        {/* buttonGroup */}
        <div className="flex justify-center">
          <ButtonGroup
            buttons={[
              {
                text: "REQUEST A DEMO",
                href: "/demo",
                variant: "filled",
                bgColor: "bg-[#43A047]",
                textColor: "text-white",
              },
              {
                text: "CONTACT SALES",
                href: "/contact",
                variant: "outlined",
                borderColor: "border-[#43A047]",
              },
            ]}
          />
        </div>
      </div>

      {/* Dashboard Video */}
      <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          className="w-full h-auto"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Trusted text */}
      <div className="mb-8 w-full max-w-[1280px] mx-auto">
        <h3 className="text-[14px] md:text-[16px] lg:text-[30px]  font-semibold text-[#333333] text-center mx-auto">
          Join over 5,000 global companies who trust Accqrate People to manage
          their workforce with ease.
        </h3>
      </div>

      <div className="mb-[32px] md:mb-[40px] w-full max-w-[1128px] mx-auto rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          className="w-full h-auto"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
