import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Master of Computer Applications</CardTitle>
              <p className="text-sm text-muted-foreground">
                Kongu Engineering College — 2020–2022
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Gained strong foundations in <strong>Java Programming</strong>,
                <strong> Object-Oriented Design</strong>, and
                <strong> Software Development Principles</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Active member of the Coding Club</li>
                <li>Coordinated campus placement activities for MCA department</li>
                <li>Worked on academic projects using Java</li>
              </ul>

            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>B.Sc. in Computer Science</CardTitle>
              <p className="text-sm text-muted-foreground">
                K.S.Rangasamy College of Arts and Science — 2017–2020
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Built a strong foundation in <strong>Core Programming Concepts</strong> and
                developed a keen interest in coding.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Placement Coordinator for the department</li>
                <li>Secured <strong>3rd rank</strong> in the department</li>
                <li>Started learning coding basics and problem-solving here</li>
              </ul>

            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
