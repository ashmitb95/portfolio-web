import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/dev-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import { useEffect, useRef, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

import { motion, AnimatePresence } from "framer-motion";

export const texts = [
  "a software engineer",
  "a Helldiver",
  "a team player",
  "an overthinker",
  "a unit tester",
  "a foodie",
];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex + 1) % texts.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ashmit Bisas - Full Stack Developer</title>
        <meta
          name="description"
          content="Ashmit Bisas - Full Stack Developer"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-center mb-80 justify-between md:flex-col">
            <div className="w-4/12 flex justify-center items-center ">
              {/* <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                // icon={<AntDesignOutlined />
                src={profilePic}
              /> */}
              <Image
                src={profilePic}
                alt="profile"
                className="h-auto w-full"
                sizes="100vw"
                priority
                style={{ borderRadius: "40%" }}
              />
            </div>
            <div className="flex w-1/2 mt-12 flex-col items-start self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello! I am Ashmit!"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex flex-row">
                {/* <h3 className="mr-2"></h3> */}
                <section>
                  <section className="inline text-4xl">
                    I am{" "}
                    <ReactTextTransition
                      springConfig={presets.gentle}
                      style={{ margin: "0 4px", color: "red" }}
                      inline
                    >
                      {texts[textIndex].toLowerCase().includes("helldiver") ? (
                        <a
                          target="_blank"
                          href="https://video.akamai.steamstatic.com/store_trailers/256994373/movie480_vp9.webm?t=1705428404"
                          className="underline decoration-red"
                        >
                          {texts[textIndex]}
                        </a>
                      ) : (
                        texts[textIndex]
                      )}
                    </ReactTextTransition>
                  </section>
                </section>
              </div>
              <p className="mt-4 mb-2 text-base font-medium md:text-sm sm:!text-xs">
                I have been working as a fullstack developer for six years in
                product companies, and truely love my work when I am building
                something that is a delight for its users, or feels effortless
                to use, no matter the domain space or target audience. I am
                largely language-agnostic, and have mostly been a jack of
                multiple trades over the course of my short career so far.
              </p>
              <p className="mb-8">
                Feel free to reach out to me if you would like to know more
                about how I can help you!
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/AshmitB 29.09 2.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:ashmitbbiswas@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
      </article>
    </>
  );
}
