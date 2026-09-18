"use client";
import AnimatedText from "@/app/components/Name/name";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/app/components/Name/Typewriter";
import ScrambleText from "@/app/components/Name/ScrambleText";


const techStack = [
  { name:"HTML", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
  { name:"CSS", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
  { name:"JavaScript", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  { name:"React", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
  { name:"Next.js", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
  { name:"TypeScript", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
  { name:"Tailwind CSS", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},
  { name:"Node.js", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  { name:"Express.js", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
  { name:"MongoDB", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  { name:"MySQL", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  { name:"Redux", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},
  { name:"Git", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
  { name:"GitHub", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
];



export default function Page(){

return (
<section className="min-h-screen bg-black text-white py-5">
<div className="container mx-auto px-5">
<div className=" gap-5">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


<div>
<h1
className="
text-4xl font-bold 
bg-gradient-to-r from-green-400 via-red-400 to-blue-500
bg-clip-text text-transparent
">
<AnimatedText texts={[
  "About My Self",
  "Watching My Profile"
]} design={ `text-2xl
      bg-gradient-to-r
      from-violet-500
      via-fuchsia-500
      via-red-500
      to-orange-400
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_10px_rgba(168,85,247,.7)]
      drop-shadow-[0_0_25px_rgba(236,72,153,.5)]
      transition-all
      duration-300
      position-fixed`}/>

</h1>
<div className="text-gray-300 text-lg ">
  <p className="text-justify">
   <AnimatedText texts={[`Hi`, "I am"]} design={`
      bg-gradient-to-r
      from-green-500
      via-red-500
      via-blue-500
      to-orange-400
      bg-clip-text
      text-transparent
      font-xl
     `}/>
    <br />
  <span className="text-bold  sm:text-xl   bg-gradient-to-r from-red-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
  Eng. Md Shamioul Islam BSc in Computer Science & Engineering  UI/UX Specialist
</span>
    <span className="font-semibold text-white ">
      <span> </span>
      Full Stack Web Developer and
      Graphics Designer
    </span>
    from Bangladesh.
  </p>

  <p className="text-justify">
    I completed my 
    <span className="text-green-400 font-semibold">
      Bachelor of Science in Computer Science & Engineering (CSE)
    </span> 
    from 
    <span className="text-blue-400 font-semibold hover:bg-red-300 pointer-coarse:">
      <Link  href={`https://diu.ac/`}> Dhaka International University </Link>
    </span> 
    in 2025.
  </p>

  <p className="text-justify">
    I specialize in building modern, scalable web applications using 
    <span className="text-cyan-400 font-medium">
      React.js, Next.js, Node.js, Express.js, and MongoDB.
    </span>
  </p>

  <p className="text-justify">
    I have 
    <span className="text-yellow-400 font-semibold">
       5+  years of experience
    </span>
    in Full Stack Development, Graphic Design, UI/UX Design, Video Editing,
    and ICT Support.
  </p>
</div>

{/* EDUCATION */}
<div
className="
mt-10
bg-gray-950
p-6
rounded-2xl
border border-gray-800
hover:border-purple-500
transition
"
>
<h2
className="
text-2xl font-bold
text-purple-400 mb-5
">🎓 
<ScrambleText words={ [
    "Education",
    "Academic Section"
  ]}/>

</h2>

<div className="space-y-6 text-gray-300">
<div>
<h3 className="text-white font-semibold text-lg">
SSC (Secondary School Certificate)
</h3>

<p className="leading-7">
Result: 4.67 Out of 5
<br/>
Group: Science
<br/>
Passing Year: 2015
<br/>
Board: Dinajpur
<br/> 

<Link className="text-amber-500" href={`https://www.facebook.com/TulshirhatHighSchool/`}>Tulshir Hat High School</Link>
</p>
</div>
<div>
<h3 className="text-white font-semibold text-lg">
Diploma in Computer Technology
</h3>

<p className="leading-7">
Result: 3.52 Out of 4
<br/>
Passing Year: 2021
<br/>
<Link className="text-amber-500" href={ `https://bteb.gov.bd/`}>Board: Technical Board, Dhaka</Link>

</p>

</div>

<div>

<h3 className="text-white font-semibold text-lg">
BSc in Computer Science & Engineering
</h3>

<p className="leading-7 ">
<Link className="text-amber-500" href={`https://diu.ac/`}> Dhaka International University</Link>
<br/>
Completed: 2025
<br />
Result: 3.48 Out of 4
<br/>
Passing Year: 2026
<br/>
</p>
</div>
</div>
</div>
</div>


{/* ================= RIGHT SIDE ================= */}

<div>

{/* EXPERIENCE */}
<div
className="
bg-gray-950
p-6
rounded-2xl
border border-gray-800
hover:border-red-500
transition
"
>


<h2
className="
text-2xl font-bold
text-red-400 mb-5
"
>
<Typewriter words={["💼 Job Experience"]}/>



</h2>



<div className="space-y-6 text-gray-300">


<div>
<b className="text-white">
Senior Designer & IT Support
</b>
<p>
Popular Diagnostics Center, Rangpur
<br/>
2018 - 2020
</p>
</div>
<div>
<b className="text-white">
Assistant ICT Teacher
</b>

<p>
Rangpur Shisunikatan School
<br/>
2020 - 2021
</p>
</div>



<div>
<b className="text-white">
Assistant ICT Teacher
</b>

<p>
Badda Residential High School, Dhaka
<br/>
2022 - 2023
</p>
</div>

<div>
<b className="text-white">
Senior IT Operator
</b>

<p>
Robi Warehouse, Tongi Dhaka
<br/>
2024 - 2025
</p>
</div>



<div>
<b className="text-white">
Senior Designer & Video Editor
</b>

<p>
Global Overseas
<br/>
2025 - 2026
</p>
</div>

<div>
<b className="text-white">
Web Desing &  Devloper
</b>

<p>
IT Operation 
<br/>
2026- Running
</p>
</div>

</div>


</div>

{/* CONTACT */}
<div
className="
mt-2
bg-gray-950
p-6
rounded-2xl
border border-gray-800
hover:border-blue-500
transition
"
>

<h2
className="
text-2xl font-bold
text-blue-400 mb-5
"
>
📞 Contact Information
</h2>


<p className="
text-gray-300
leading-8
">
📍 Kochua Shardar Para
<br/>
Gangachara, Rangpur
<br/>
Bangladesh

<br/><br/>
📱 +8801751206591
<br/>
📧 mdshamioullislam2018@gmail.com
</p>
</div>
{/* SOCIAL */}
<div
className="
flex flex-wrap
gap-4
mt-2
"
>

<Link
href="https://github.com/Shamioul"
target="_blank"
className="
px-5 py-3 rounded-xl
bg-gray-900
border border-gray-700
hover:scale-105
transition
"
>
🐙 GitHub
</Link>

<Link
href="https://www.linkedin.com/in/md-shamioul-islam-60267125a/"
target="_blank"
className="
px-5 py-3 rounded-xl
bg-blue-600/30
border border-blue-500
hover:scale-105
transition
"
>
💼 LinkedIn
</Link>




<Link
href="mailto:mdshamioullislam2018@gmail.com"
className="
px-5 py-3 rounded-xl
bg-red-600/30
border border-red-500
hover:scale-105
transition
"
>
📧 Email
</Link>



<Link
href="/resume"
className="
px-5 py-3 rounded-xl
bg-green-600/30
border border-green-500
hover:scale-105
transition
"
>
📄 Resume
</Link>


<Link
href="https://github.com/Shamioul"
target="_blank"
className="
px-5 py-3 rounded-xl
bg-gray-900
border border-gray-700
hover:scale-105
transition
">
🐙 GitHub
</Link>
<Link
href="https://linkedin.com"
target="_blank"
className="
px-5 py-3 rounded-xl
bg-blue-600/30
border border-blue-500
hover:scale-105
transition
"
>
💼 LinkedIn
</Link>




<Link
href="mailto:mdshamioullislam2018@gmail.com"
className="
px-5 py-3 rounded-xl
bg-red-600/30
border border-red-500
hover:scale-105
transition
"
>
📧 Email
</Link>



<Link
href="/resume"
className="
px-5 py-3 rounded-xl
bg-green-600/30
border border-green-500
hover:scale-105
transition
"
>
📄 Resume
</Link>



</div>
</div>
</div>
<div>
<h2
className="
text-4xl
font-bold
mb-8
bg-gradient-to-r
from-green-400
via-red-400
to-blue-500
bg-clip-text
text-transparent
mt-1"
>
<Typewriter words={["My Tech Stack"]}/>

</h2>


<div className="
grid
grid-cols-3
sm:grid-cols-4
gap-5
">


{

techStack.map((tech)=>(


<div
key={tech.name}
className="
group
bg-gray-950
rounded-2xl
p-5
flex
flex-col
items-center
border
border-gray-800
hover:border-green-500
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(34,197,94,.4)]
transition-all
duration-300
"
>
<Image
src={tech.logo}
alt={tech.name}

width={55}

height={55}

className="
group-hover:scale-125
transition
"/>
<p
className="
mt-4
text-sm
text-gray-400
group-hover:text-white
"
>
{tech.name}
</p>
</div>


))


}



</div>


</div>



</div>


</div>


</section>


)

}