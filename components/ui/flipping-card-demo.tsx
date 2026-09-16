import React from "react";
import { FlippingCard } from "@/components/ui/flipping-card";

export interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    badge?: string;
  };
  back: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
    highlights?: string[];
  };
}

export const skillsCardsData: CardData[] = [
  {
    id: "python",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      imageAlt: "Python Development",
      badge: "Skill #01",
      title: "Python",
      description: "Primary language for ML modeling, data engineering, and backend application development.",
    },
    back: {
      title: "Python Ecosystem",
      description: "Engineered regression systems and web pipelines using Flask, Scikit-Learn (RandomForest), Pandas, and PyTorch for predictive analytics.",
      highlights: ["Scikit-Learn & ML", "Flask Web Framework", "Pandas & NumPy"],
      buttonText: "View EnergyForecast",
      buttonHref: "https://github.com/ashumohanty678-beep/Repository-name-EnergyForecast",
    },
  },
  {
    id: "sql",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      imageAlt: "SQL & Relational Databases",
      badge: "Skill #02",
      title: "SQL",
      description: "Relational database schema modeling, data integrity, aggregation, and query optimization.",
    },
    back: {
      title: "Database Architecture",
      description: "Designed normalized schemas and multi-parameter audit query pipelines with SQLite. Integrated secure password hashing and CSV export tools.",
      highlights: ["Relational Schema Design", "SQLite Database Integration", "Audit Log Filtering"],
      buttonText: "Explore Projects",
      buttonHref: "#projects",
    },
  },
  {
    id: "c-lang",
    front: {
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      imageAlt: "C Programming",
      badge: "Skill #03",
      title: "C (Programming Language)",
      description: "Low-level systems programming, pointer mechanics, algorithms, and computational efficiency.",
    },
    back: {
      title: "Algorithmic Foundation",
      description: "Rigorous academic and practical foundation in memory management, data structures, and procedural system architecture at GIET University Gunupur.",
      highlights: ["Data Structures & Algorithms", "Memory & Pointer Control", "Computational Rigor"],
      buttonText: "Academic Profile",
      buttonHref: "#education",
    },
  },
];

export function FlippingCardDemo({ cards = skillsCardsData }: { cards?: CardData[] }) {
  return (
    <div className="flex gap-6 flex-wrap justify-center py-6">
      {cards.map((card) => (
        <FlippingCard
          key={card.id}
          width={320}
          height={380}
          className="dark:border-[#262626] dark:bg-[#0d0d0d] shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          frontContent={<GenericCardFront data={card.front} />}
          backContent={<GenericCardBack data={card.back} />}
        />
      ))}
    </div>
  );
}

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex flex-col h-full w-full p-5 justify-between">
      <div className="relative w-full h-[180px] overflow-hidden rounded-lg border border-white/10">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-cover"
        />
        {data.badge && (
          <span className="absolute top-2.5 right-2.5 font-mono text-[10px] uppercase tracking-[0.2em] bg-black/80 backdrop-blur-sm text-cream px-2.5 py-1 rounded-full border border-white/10">
            {data.badge}
          </span>
        )}
      </div>
      <div className="pt-3">
        <h3 className="font-hn text-lg font-semibold text-white tracking-tight">{data.title}</h3>
        <p className="text-xs leading-relaxed mt-1.5 text-neutral-400">
          {data.description}
        </p>
      </div>
      <div className="pt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500 border-t border-white/5">
        <span>Hover to flip</span>
        <span>&rarr;</span>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full p-6 text-center">
      <div className="w-full">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-1">
          Technical Depth
        </span>
        <h4 className="font-hn text-base font-semibold text-white mb-2.5">{data.title}</h4>
        <p className="text-xs leading-relaxed text-neutral-300">
          {data.description}
        </p>
        {data.highlights && (
          <ul className="mt-4 flex flex-col gap-1.5 text-[11px] font-mono text-neutral-400 text-left bg-white/5 rounded-lg p-2.5 border border-white/5">
            {data.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="text-[#e2edfb] font-bold">&gt;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <a
        href={data.buttonHref || "#"}
        target={data.buttonHref?.startsWith("http") ? "_blank" : undefined}
        rel={data.buttonHref?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="mt-4 bg-white text-black hover:bg-neutral-200 px-5 py-2 rounded-md font-hn text-xs font-semibold tracking-wide transition-colors duration-200 shadow-sm inline-flex items-center justify-center gap-1.5"
      >
        {data.buttonText}
      </a>
    </div>
  );
}

export default FlippingCardDemo;
