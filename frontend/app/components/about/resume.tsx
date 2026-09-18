"use client";

const menuItems = [
  {
    title: "👨‍💻 About Me",
    description: "Who I am and what I do",
  },
  {
    title: "📄 Resume",
    description: "Download my latest CV",
  },
  {
    title: "🎓 Education",
    description: "Academic background",
  },
  {
    title: "💼 Experience",
    description: "Professional journey",
  },
  {
    title: "🚀 Featured Projects",
    description: "My best work",
  },
  {
    title: "🛠 Technical Skills",
    description: "Frontend, Backend & Tools",
  },
  {
    title: "⚡ Tech Stack",
    description: "React, Next.js, Node.js, MongoDB",
  },
  {
    title: "🏆 Achievements",
    description: "Awards & Milestones",
  },
  {
    title: "📜 Certifications",
    description: "Courses & Certificates",
  },
  {
    title: "💻 Open Source",
    description: "GitHub Contributions",
  },
  {
    title: "🧠 Competitive Programming",
    description: "Problem Solving Journey",
  },
  {
    title: "📊 Machine Learning",
    description: "Research & AI Projects",
  },
  {
    title: "🎨 UI/UX Design",
    description: "Modern Interface Design",
  },
  {
    title: "🌐 Services",
    description: "What I can build for you",
  },
  {
    title: "⭐ Testimonials",
    description: "Client Feedback",
  },
  {
    title: "📖 Blog",
    description: "Articles & Tutorials",
  },
  {
    title: "📞 Contact",
    description: "Let's work together",
  },
];

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {menuItems.map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:scale-105 hover:border-violet-500 hover:bg-white/10 cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-white">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        {item.description}
      </p>
    </div>
  ))}
</div>