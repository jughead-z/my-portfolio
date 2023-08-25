import React from "react";
import {
    FiGithub,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

function SocialIcons () {
    const socialLinks = [
        { name: "Github", icon: <FiGithub />, link: "https://github.com/jughead-z/" },
        {
          name: "LinkedIn",
          icon: <FiLinkedin />,
          link: "https://www.linkedin.com/in/foudali-taha-15517a206/",
        },
        {
          name: "Twitter",
          icon: <FiTwitter />,
          link: "https://twitter.com/Criss_2x",
        },
      ];
    return(
        <motion.div className="social-icons"  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.95,
        }}>
            <ul className="social-icons-list">
                {socialLinks.map(({name,icon,link}) => (
                  <li key={name} title={name} className="social-icons-list-item">
                    <Link href={link} className="social-icons-list-item-link" target="_blank"> {icon} </Link>
                  </li>
                ))}
            </ul>
            
        </motion.div>
    )
}

export default SocialIcons