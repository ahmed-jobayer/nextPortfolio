import { CalendarDays } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const Experience = () => {
  const experiences = [
      {
    id: 1,
    title: "GoldenRow",
    period: "Apr 2024 – Present",
    role: "Product Researcher & Sales Strategist",
    highlights: [
      "Developed product sourcing strategies based on trend and keyword data",
      "Collaborated with marketing teams to align product offerings with customer demand",
      "Helped optimize pricing and promotional strategies for higher sales",
      "Maintained consistent communication and reporting in a fully remote role",
    ],
  },
      {
    id: 2,
    title: "Radyan Corporation",
    period: "Aug 2023 – Mar 2024",
    role: "Product Researcher & Virtual Assistant",
    highlights: [
      "Performed detailed Amazon product research using tools like Helium 10",
      "Optimized product listings to improve visibility and conversion",
      "Assisted in competitor and market analysis for new product launches",
      "Worked remotely in a cross-functional e-commerce team",
    ],
  },

  ];

  return (
    <div className="">
      <SectionHeading title="EXPERIENCES" />

      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-classicGold/30"></div>

        <div className="space-y-24">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-richBlack border-2 border-classicGold z-10"></div>

              {/* Experience card */}
              <div
                className={`w-full md:w-[45%] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } relative`}
              >
                {/* Date badge */}
                <div className="absolute top-1  flex items-center space-x-2 text-classicGold text-sm font-mono">
                  <CalendarDays className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>

                {/* Content card */}
                <div className="bg-cardBg w-full mt-10 p-6 rounded-lg border border-mutedGrey hover:border-classicGold/50 transition-all duration-300 shadow-lg hover:shadow-classicGold/10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-lightGrey mb-4 text-sm">
                    {experience.role}
                  </p>

                  <div className="space-y-3">
                    {experience.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-classicGold/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-classicGold"></div>
                        </div>
                        <p className="text-offWhite text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
