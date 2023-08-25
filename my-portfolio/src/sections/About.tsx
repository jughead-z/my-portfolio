import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";



function About() {
    return(
        <motion.div className="about" id="about" initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}>
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                    I&apos;m Taha, a junior developer passionate about gaming and front-end development. I&apos;m fueled by creating virtual worlds and interactive experiences that merge my creativity with technical skills. Transforming design concepts into user interfaces using HTML, CSS, and JavaScript excites me. Crafting visually appealing and responsive websites is my forte, ensuring seamless user engagement across devices.

</p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality websites that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://www.aeon.ma/" className="link" target="_blank">Aeon360.</Link>
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link className="link" target="_blank" href="https://alwaysbereal-85414.web.app/">Alwaysbereal,</Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">Here are a few technologies I’ve been working with recently:</p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Php</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">Sql</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/sst.png" alt="profile" fill />
          </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;