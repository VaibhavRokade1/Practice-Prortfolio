import React from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";

const skills = [
  { name: "React.js", level: 90, icon: <FaReact className="text-blue-400" /> },
  {
    name: "JavaScript",
    level: 85,
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "HTML & CSS",
    level: 95,
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    icon: <FaCss3Alt className="text-sky-400" />,
  },
  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Part: About Paragraph */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I am a passionate web developer with experience in building modern
            and responsive web applications. I enjoy turning complex problems
            into simple, beautiful, and intuitive designs. My goal is to create
            user-friendly interfaces with a focus on performance and UX.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, I love exploring the latest tech trends,
            contributing to open-source projects, and learning new tools and
            frameworks to enhance my skill set.
          </p>
        </div>

        {/* Right Part: Skills */}
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2 items-center">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="font-medium">{skill.level}%</span>
              </div>

              <div className="relative w-full h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                {/* Animated Gradient Bar */}
                <div
                  className="absolute top-0 left-0 h-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1500 group-hover:scale-105"
                  style={{ width: `${skill.level}%` }}
                ></div>
                {/* Floating Tooltip on Hover */}
                <div className="absolute top-[-2rem] left-[calc(var(--skill-level))] hidden group-hover:block">
                  <div className="px-2 py-1 bg-indigo-600 text-white text-xs rounded shadow-lg">
                    {skill.name} - {skill.level}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
