import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
    return (
    <div className="hero">
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}>
            Hi my name is
            </motion.h1>
        <motion.h2 className="hero-title-large" initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}>Taha Foudali</motion.h2>
        <motion.h3 className="hero-title-large hero-title-sub" initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}>Unleash the Potential of Your Web</motion.h3>
        <motion.p className="hero-text" initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}>I&apos;m a junior developer with a passion for coding and problem-solving. 
        I may be at the beginning of my career, 
        but my enthusiasm and determination drive me to learn and contribute as much as I can.&nbsp;</motion.p>
        <motion.div className="hero-button" initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}>
            <Button text="Click me"link="https://www.youtube.com/watch?v=eTfVcagDbPg"/>
        </motion.div>

    </div>
    )
}
export default Hero;