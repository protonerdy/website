'use client';

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "../components/ui/FloatingNav";
import { FaHome } from 'react-icons/fa';
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

// Dynamically import components that might cause SSR issues
const BentoGrid = dynamic(() => import('@/components/ui/BentoGrid').then(mod => mod.BentoGrid), { 
  ssr: false 
});

const BentoGridItem = dynamic(() => import('@/components/ui/BentoGrid').then(mod => mod.BentoGridItem), { 
  ssr: false 
});

export default function Home() {
  return (
    <main className="relative bg-black-100 font-sans flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
      <ToastContainer />
    </main>
  );
}
