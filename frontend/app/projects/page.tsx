import React from "react";

const projects = [
  {
    title: "PalliBazaar - Farmer To Consumer Marketplace",
    category: "Full Stack MERN Application",
    status: "Completed / Future Enhancement",
    description:
      "PalliBazaar is an innovative agricultural marketplace platform that connects farmers directly with customers. The main goal is to remove middlemen, increase farmer profit, and provide fresh agricultural products directly to consumers.",
    features: [
      "Farmer product management system",
      "Customer shopping and ordering system",
      "Secure authentication with JWT",
      "Online payment integration",
      "Product search and filtering",
      "Admin dashboard for management",
      "Real-time order tracking",
      "Image upload with Cloudinary"
    ],
    technology: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit"
    ],
    future: [
      "AI based crop price prediction",
      "Mobile application development",
      "Farmer AI assistant chatbot",
      "Weather based farming recommendation"
    ]
  },

  {
    title: "Doctor Appointment Booking System",
    category: "Healthcare Management Platform",
    status: "Completed / Upcoming Features",
    description:
      "A complete healthcare solution where patients can find doctors, book appointments, manage medical information and communicate with healthcare providers easily.",
    features: [
      "Doctor profile management",
      "Patient registration system",
      "Appointment scheduling",
      "Doctor availability tracking",
      "Prescription management",
      "Medical history storage",
      "Admin control panel",
      "Email notification system"
    ],
    technology: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST API"
    ],
    future: [
      "Video consultation system",
      "Online payment gateway",
      "AI disease prediction",
      "Digital health record system"
    ]
  },


  {
    title: "Smart Crime Suspect Detection System",
    category: "AI & Machine Learning Project",
    status: "Research Project / Future Development",
    description:
      "An intelligent security system that uses artificial intelligence and machine learning techniques to identify and analyze criminal suspects from images and available data.",
    features: [
      "Face recognition system",
      "Image processing technology",
      "Suspect database management",
      "AI based matching system",
      "Crime data analysis",
      "Security monitoring dashboard"
    ],
    technology: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "TensorFlow",
      "React Dashboard"
    ],
    future: [
      "Real-time CCTV integration",
      "Deep learning based recognition",
      "Smart city security solution",
      "Advanced crime prediction model"
    ]
  }
];


export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="
      text-5xl 
      font-extrabold 
      text-center
      bg-gradient-to-r 
      from-cyan-400 
      via-purple-500 
      to-pink-500
      bg-clip-text
      text-transparent
      ">
        🚀 My Featured Projects
      </h1>


      <p className="
      text-center 
      text-gray-400 
      mt-5
      max-w-3xl
      mx-auto
      ">
        A collection of my professional, academic and future-ready software
        development projects including full-stack applications, AI solutions
        and scalable digital platforms.
      </p>



      <section className="
      grid 
      md:grid-cols-3
      gap-8
      mt-12
      ">

        {
          projects.map((project,index)=>(
            
            <div
            key={index}
            className="
            rounded-2xl
            border
            border-gray-700
            p-6
            bg-gradient-to-br
            from-gray-900
            to-black
            hover:scale-105
            transition
            shadow-xl
            "
            >

              <h2 className="
              text-2xl
              font-bold
              text-cyan-400
              ">
                {project.title}
              </h2>


              <p className="text-sm text-purple-400 mt-2">
                {project.category}
              </p>


              <p className="mt-4 text-gray-300">
                {project.description}
              </p>



              <h3 className="mt-5 font-bold text-yellow-400">
                ⭐ Key Features
              </h3>

              <ul className="mt-2 text-sm space-y-1">
                {
                  project.features.map((item,i)=>(
                    <li key={i}>✔ {item}</li>
                  ))
                }
              </ul>



              <h3 className="mt-5 font-bold text-green-400">
                🛠 Technology Stack
              </h3>

              <div className="flex flex-wrap gap-2 mt-3">
                {
                  project.technology.map((tech,i)=>(
                    <span
                    key={i}
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-gray-800
                    text-sm
                    ">
                      {tech}
                    </span>
                  ))
                }
              </div>



              <h3 className="mt-5 font-bold text-pink-400">
                🔮 Future Enhancement
              </h3>

              <ul className="text-sm mt-2">
                {
                  project.future.map((item,i)=>(
                    <li key={i}>
                      🚀 {item}
                    </li>
                  ))
                }
              </ul>


            </div>

          ))
        }

      </section>


    </main>
  );
}