"use client"
import React , { useState } from "react";
import "@/scss/index.scss";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/Socialicons";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Head from "next/head";


function Index(){
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return <div className="app">
    <Head>
      <title>Taha Foudali</title>
      <link rel="shortcut icon" href="/"/>
    </Head>
    <Navbar/>
    <main>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </main>
    <SocialIcons/>
    <Email/>
  </div>
}

export default Index;