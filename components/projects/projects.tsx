import {
  Bot,
  ChefHat,
  Code2,
  Eye,
  Gamepad2,
  LayoutTemplate,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    id: "originlabs",
    icon: Rocket,
    iconLabel: "OriginLabs",
    title:
      "My independent software studio for designing, building, and launching AI-powered products end-to-end.",
    description:
      "The umbrella under which I ship SaaS products, from idea to production, using React, Next.js, TypeScript, Supabase, Stripe, and modern AI APIs.",
    meta: "Founder, OriginLabs",
    imageRatio: 2846 / 1510,
    image: "/images/OriginLabs-hero.png",
    imageAlt: "OriginLabs studio landing page",
    href: "https://originlabs.space/",
  },
  {
    id: "juno",
    icon: Bot,
    iconLabel: "Juno",
    title:
      "An AI-powered chatbot delivering intelligent, context-aware conversations.",
    description:
      "A conversational AI assistant built for a seamless, natural user experience from first message to last.",
    meta: "Independent Project",
    imageRatio: 1372 / 1165,
    image: "/images/Juno-logo.png",
    imageAlt: "Juno AI chatbot",
    href: "https://github.com/Martimic10/Juno-Chatbot",
  },
  {
    id: "gameforge",
    icon: Gamepad2,
    iconLabel: "GameForge",
    title:
      "A 2D game builder empowering creators to design and develop games visually.",
    description:
      "An intuitive visual interface that lets creators build 2D games without writing engine code from scratch.",
    meta: "Independent Project",
    imageRatio: 1372 / 1165,
    image: "/images/GameForge-logo.png",
    imageAlt: "GameForge 2D game builder",
    href: "https://github.com/Martimic10/GameForge",
  },
  {
    id: "eyko",
    icon: Eye,
    iconLabel: "Eyko",
    title:
      "A platform for running and integrating computer vision models into any codebase.",
    description:
      "Lets developers drop trained vision models into their own projects without standing up their own inference infrastructure.",
    meta: "Independent Project",
    imageRatio: 1350 / 1165,
    image: "/images/Eyko-logo.png",
    imageAlt: "Eyko computer vision platform",
    href: "https://github.com/Martimic10/eyko",
  },
  {
    id: "arc-ai",
    icon: Sparkles,
    iconLabel: "Arc AI",
    title:
      "A sleek, modern front-end AI project showcasing cutting-edge design.",
    description:
      "An exploration of interface and interaction design patterns for AI-native products.",
    meta: "Independent Project",
    imageRatio: 1350 / 1160,
    image: "/images/ArcAI-logo.png",
    imageAlt: "Arc AI interface",
    href: "https://arc-ai-eight.vercel.app",
  },
  {
    id: "codezap",
    icon: Zap,
    iconLabel: "CodeZap",
    title: "A fast, modern UI experiment pushing performance and visual design.",
    description:
      "Built to test how far a snappy, minimal interface can be pushed on the modern web.",
    meta: "Independent Project",
    imageRatio: 1350 / 1160,
    image: "/images/CodeZap-logo.png",
    imageAlt: "CodeZap UI experiment",
    href: "https://code-zap-lovat.vercel.app",
  },
  {
    id: "vorg-ai",
    icon: LayoutTemplate,
    iconLabel: "Vorg AI",
    title:
      "An AI-powered landing page generator that ships conversion-focused pages in seconds.",
    description:
      "Turns a short brief into a polished, ready-to-launch landing page without touching a design tool.",
    meta: "Independent Project",
    imageRatio: 1323 / 1154,
    image: "/images/VorgAI-logo.png",
    imageAlt: "Vorg AI landing page generator",
    href: "https://vorg.dev",
  },
  {
    id: "exact-ai",
    icon: Code2,
    iconLabel: "Exact AI",
    title:
      "An AI-powered frontend code editor built specifically for frontend development.",
    description:
      "Combines intelligent code generation with a focused editor so developers can build UI faster.",
    meta: "Independent Project",
    imageRatio: 1470 / 1176,
    image: "/images/Exact-ai-portfolio.png",
    imageAlt: "Exact AI code editor",
    href: "https://exactai.dev",
  },
  {
    id: "jump",
    icon: Search,
    iconLabel: "Jump",
    title: "A VS Code extension that lets you find code from memory.",
    description:
      "Type what you remember and Jump takes you straight to the exact line, instantly.",
    meta: "VS Code Extension",
    imageRatio: 2444 / 1534,
    image: "/images/Jump-hero-logo.png",
    imageAlt: "Jump VS Code extension",
    href: "https://jump-plum-eight.vercel.app/",
  },
  {
    id: "fridgeflow",
    icon: ChefHat,
    iconLabel: "FridgeFlow",
    title:
      "An AI app that turns a photo of your fridge or pantry into personalized recipes.",
    description:
      "Analyzes what you already have on hand and instantly generates meal ideas built around it.",
    meta: "Independent Project",
    imageRatio: 2856 / 1538,
    image: "/images/fridgeflow-project-image.png",
    imageAlt: "FridgeFlow recipe generator",
    href: "https://fridge-flow-brown.vercel.app/",
  },
  {
    id: "appframes",
    icon: Smartphone,
    iconLabel: "AppFrames",
    title:
      "An App Store screenshot generator for polished, production-ready store assets.",
    description:
      "Pick a template, drop in your own mockups, and export store-ready screenshots in minutes.",
    meta: "Independent Project",
    imageRatio: 2916 / 1496,
    image: "/images/appframes-screenshot.png",
    imageAlt: "AppFrames screenshot generator",
    href: "https://app-frames.vercel.app/",
  },
  {
    id: "impactai",
    icon: Target,
    iconLabel: "ImpactAI",
    title:
      "An AI-powered golf swing analyzer that scores swing mechanics in real time.",
    description:
      "Uses computer vision to detect and track swing mechanics, turning raw video into real-time scoring.",
    meta: "Independent Project",
    imageRatio: 1409 / 1224,
    image: "/images/ImpactAI-logo.png",
    imageAlt: "ImpactAI golf swing analyzer",
    href: "https://impactai.golf",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card focus-ring flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5"
      >
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </Link>
    </FadeIn>
  );
}
