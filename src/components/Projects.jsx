import React from "react";

const projects = [
  {
    title: "Spotify Clone",
    description:
      "A full-stack music streaming app built with React, Node.js, and MySQL.",
    image:
      "https://imgs.search.brave.com/ndX-BDP6DYT2yc4bsjrYbwubhmb4OlRdVH747BGYyvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NjAyMjE0Ni9waG90/by9uZXcteW9yay1u/ZXcteW9yay1pbi10/aGlzLXBob3RvLWls/bHVzdHJhdGlvbi10/aGUtc3BvdGlmeS1t/dXNpYy1hcHAtaXMt/c2Vlbi1vbi1hLXBo/b25lLW9uLWp1bmUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTIxa2RJYlhHX2ot/X1hCaXdzTTE0ZlRp/VkYzcXlWWjBPUjdB/T05KQ3kwbXc9",
    code: "#",
    live: "#",
  },
  {
    title: "College Management System",
    description:
      "A modern web app to manage students, faculty, and courses with React & Node.js.",
    image:
      "https://imgs.search.brave.com/3VKC7IHkRijSUZKjGS_tY9w8KcOx_roOKWt3dcnNOAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL0FqYXlz/aW5oMTI5MC9Db2xs/ZWdlLU1hbmFnZW1l/bnQtU3lzdGVtLUlu/LUphdmEvcmF3L21h/c3Rlci9zY3JlZW5z/aG90cy9sb2dpbnNj/cmVlbi5wbmc",
    code: "#",
    live: "#",
  },
  {
    title: "VonFire Player",
    description:
      "A custom music player web app built with HTML, CSS & JavaScript.",
    image:
      "https://imgs.search.brave.com/WxsLb8ytcNkAfmdah2A_9EOy0PP0k6fvFLnDgBoM5Bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC9m/NDEyNjAxNzM0MDQz/ODMuWTNKdmNDdzRN/RGdzTmpNeUxEQXNN/QS5wbmc",
    code: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-indigo-600 text-center">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
