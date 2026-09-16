'use client';

import React from 'react';
import Bento4Section from "@/components/ui/bento-monochrome-1";
import { Home, User, Cpu, Briefcase, GraduationCap, FileText, Mail } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { FlippingCardDemo } from "@/components/ui/flipping-card-demo";
import { 
  ProjectsRadialGallery, 
  DepthWizardRadialGallery, 
  DemoRadialScrollGalleryBento 
} from "@/components/ui/radial-gallery-demo";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Cpu },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Resume', url: '#resume', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Mail },
  ];

  return <NavBar items={navItems} />;
}

export default function DemoOne() {
  return <Bento4Section />;
}

import { Features } from "@/components/blocks/features-8";

export const Demo = () => {
  return <Features />;
};

export const FeaturesDemo = Demo;

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&h=500&q=80"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&h=500&q=80"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Detailed interactive architectural templates and systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=500&q=80"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&h=500&q=80"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline data={data} showHeader={true} />
      </div>
    </div>
  );
}

import GlassCard from "@/components/ui/glass-card";
import { GlassCardDemo } from "@/components/ui/glass-card-demo";
import { ContactCard } from "@/components/ui/contact-card";
import { ContactCardDemo } from "@/components/ui/contact-card-demo";

export { 
  DemoOne, 
  FlippingCardDemo, 
  ProjectsRadialGallery, 
  DepthWizardRadialGallery, 
  DemoRadialScrollGalleryBento,
  GlassCard,
  GlassCardDemo,
  ContactCard,
  ContactCardDemo
};

