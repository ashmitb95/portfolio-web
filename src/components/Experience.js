import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Development Engineer III"
            company="P99Soft Pvt Ltd / k-ID"
            companyLink="https://www.k-id.com/"
            time="October 2023 - Present"
            address="Bengaluru, India"
            work="Building compliance databases, configuration engines to drive feature flagging and dynamic flows for game publisher and support teams."
          />

          <Details
            position="Software Engineer II"
            company="Sourcewis (now WizCommerce)"
            companyLink="https://www.wizcommerce.com/"
            time="October 2021 - June 2023"
            address="Bengaluru, India"
            work="Core engineering team member, built the product from initial 0-1 MVP to a SaaS suite that enabled customer-base pivot with 50x ARR. Built in-house component libraries, background process queues, indexing crons for multi-variant search and the underlying PIM model for product/inventory management"
          />

          <Details
            position="Software Developer Engineer"
            company="Bookmyshow"
            companyLink="https://in.bookmyshow.com"
            time="2018-2021"
            address="Mumbai, India"
            work="Worked as part of the Bookmyshow International team, implementing the entire product stack for UAE and Sri Lanka. Responible for maintaining and improving multiple microservices"
          />

          <Details
            position="Associate Software Developer"
            company="Leadquared"
            companyLink="https://leadsquared.com"
            time="Summer 2019"
            address="Redmond, WA."
            work="Build a dynamic forms and workflow engine powering field sales teams to expedite lead status updates and increas conversion"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
