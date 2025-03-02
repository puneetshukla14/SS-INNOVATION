import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
        SS Innovations International Inc. is a leading medical technology company founded by Dr. Sudhir Srivastava, a globally acclaimed robotic cardiac surgeon. Dr. Srivastava, serving as the founder, chairman, and CEO, has revolutionized the field of cardiothoracic surgery through his pioneering work in robotic procedures. He holds the record for the most number of robotic Beating Heart Totally Endoscopic Coronary Artery Bypass (TECAB) surgeries. His visionary approach led to the development of the groundbreaking surgical robotic system, the SSi Mantra. This innovative technology aims to transform the landscape of robotic surgery by making advanced, affordable, and accessible surgical procedures available to underserved populations worldwide by decentralizing excellence.
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
        <div className="w-fit break-words">
          <Link
            href="info@ssinnovations.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            info@ssinnovations.org
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="https://link.springer.com/article/10.1007/s11701-024-02148-6"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Publication
            </div>
            <div className="letters">
              <span>P</span>
              <span>U</span>
              <span>B</span>
              <span>L</span>
              <span>I</span>
              <span>C</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>N</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
