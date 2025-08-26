import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "August 2023 – May 2025",
      title: "Full Stack Developer",
      subtitle: "Zoho Corporation pvt Limited",
      description:
        [
          "Developed and maintained features for Zoho Assist using Java and React.",
          "Collaborated with cross-functional teams to deliver scalable web modules.",
          "Optimized front-end performance and improved user experience.",
          "Participated in code reviews and contributed to best practices.",
          "Worked on bug fixing, feature enhancements, and deployment activities."
        ],
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
