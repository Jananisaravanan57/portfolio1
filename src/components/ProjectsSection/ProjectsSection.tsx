"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
const [projects] = useState([
  {
    id: 1,
    title: "PlanPal – AI Travel Planner",
    subtitle:
      "An AI-powered travel planner that generates personalized itineraries based on your selected days and destination.",
    date: "2025",
    link: "https://example.com/planpal",
    image:
      "https://images.pexels.com/photos/3184450/pexels-photo-3184450.jpeg",
  },
  {
    id: 2,
    title: "Smart QR Code Generator",
    subtitle:
      "Developed a dynamic QR code generator with customizable colors, embedded logos, and download options.",
    date: "2025",
    link: "https://example.com/qr-code-generator",
    image:
      "https://images.pexels.com/photos/1111314/pexels-photo-1111314.jpeg",
  },
  // {
  //   id: 3,
  //   title: "Neeya – AI Social Hub",
  //   subtitle:
  //     "An Instagram-inspired social platform with AI-powered caption suggestions, hashtag optimization, and content insights.",
  //   date: "2025",
  //   link: "https://example.com/neeya-ai",
  //   image:
  //     "https://images.pexels.com/photos/1819793/pexels-photo-1819793.jpeg",
  // },
]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
