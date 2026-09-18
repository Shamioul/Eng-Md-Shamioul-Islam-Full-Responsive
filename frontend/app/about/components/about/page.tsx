import AnimatedText from "@/app/components/Name/name";
export default function Page() {
  return (
    <div className="space-y-6 text-gray-300 leading-8">
  <p className="text-lg text-justify">
    <AnimatedText
      texts={["Hi 👋", "Welcome"]}
      design="
        bg-gradient-to-r
        from-green-400
        via-cyan-400
        to-blue-500
        bg-clip-text
        text-transparent
        font-bold
      "
    />
    <br />

    <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
      Eng. Md Shamioul Islam
    </span>

    <br />

    I am a passionate
    <span className="text-green-400 font-semibold">
      {" "}Full Stack Web Developer{" "}
    </span>
    and
    <span className="text-pink-400 font-semibold">
      {" "}UI/UX Designer
    </span>
    from Bangladesh.

    I enjoy transforming creative ideas into modern,
    responsive and user-friendly web applications that
    deliver excellent performance and seamless user
    experiences.
  </p>

  <p className="text-justify">
    I completed my
    <span className="text-cyan-400 font-semibold">
      {" "}Bachelor of Science in Computer Science &
      Engineering (CSE)
    </span>
    from
    <span className="text-yellow-400 font-semibold">
      {" "}Dhaka International University
    </span>.

    My academic background strengthened my knowledge of
    software engineering, algorithms, database systems,
    networking, operating systems, object-oriented
    programming, and modern web technologies.
  </p>

  <p className="text-justify">
    My primary technology stack includes
    <span className="text-green-400">
      {" "}React.js
    </span>,
    <span className="text-blue-400">
      {" "}Next.js
    </span>,
    <span className="text-orange-400">
      {" "}Node.js
    </span>,
    <span className="text-red-400">
      {" "}Express.js
    </span>,
    <span className="text-green-500">
      {" "}MongoDB
    </span>,
    TypeScript, Redux Toolkit and Tailwind CSS.

    I build scalable REST APIs, authentication systems,
    admin dashboards and complete MERN applications.
  </p>

  <p className="text-justify">
    With over
    <span className="text-yellow-400 font-bold">
      {" "}5+ years of professional experience
    </span>,
    I have worked in Web Development, Graphic Design,
    UI/UX Design, Video Editing and ICT Support.

    I always focus on clean code, performance,
    responsive layouts, accessibility and modern design
    principles.
  </p>

</div>
  )
}