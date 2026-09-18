"use client";

import Link from "next/link";
import ScrambleText from "@/app/components/Name/ScrambleText";

export default function Page() {

  const educationData = [

    {
      title: "PSC (Primary School Certificate)",
      icon: "📚",
      year: "2010",
      institute: "Kochua 2 No Government Primary School",
      color: "green",
      details:[
        "GPA: 1st Divition /out of 3",
        "Board: Dinajpur"
      ],
    },

    {
      title: "JSC (Junior School Certificate)",
      icon: "📘",
      year: "2013",
      institute: "Tulshir Hat High School",
      color: "blue",
        details:[,
        "GPA: 3.71 / 5.00",
        "Board: Dinajpur"
      ],
    },

    {
      title: "SSC (Secondary School Certificate)",
      icon: "🎓",
      year: "2015",
      institute: "Tulshir Hat High School",
      details:[
        "Group: Science",
        "GPA: 4.67 / 5.00",
        "Board: Dinajpur"
      ],
      color:"yellow"
    },


    {
      title:"Diploma in Computer Technology",
      icon:"💻",
      year:"2021",
      institute:"Bangladesh Technical Education Board",
      details:[
        "CGPA: 3.52 / 4.00",
        "Computer Technology"
      ],
      color:"cyan"
    },


    {
      title:"BSc in Computer Science & Engineering",
      icon:"🎓",
      year:"2025",
      institute:"Dhaka International University",
      details:[
        "CGPA: 3.48 / 4.00",
        "Department: Computer Science & Engineering"
      ],
      color:"purple"
    },


    {
      title:"Professional Graphic Design",
      icon:"🎨",
      year:"Professional Training",
      institute:"Inspire IT Section, Rangpur",
      details:[
        "Adobe Photoshop",
        "Adobe Illustrator",
        "UI/UX Design",
        "Brand Identity Design",
        "Social Media Design"
      ],
      color:"pink"
    },


    {
      title:"Web Development Training",
      icon:"🌐",
      year:"Professional Training",
      institute:"Ashraful IT Section",
      location:"Jatrabari, Dhaka",
      details:[
        "HTML & CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Full Stack Development"
      ],
      color:"orange"
    },


  ];


return (

<div
className="
mt-10
rounded-3xl
border
border-gray-800
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
p-8
hover:border-purple-500
hover:shadow-[0_0_40px_rgba(168,85,247,.25)]
transition-all
duration-500
"
>


<h2
className="
text-3xl
font-bold
mb-8
flex
items-center
gap-3
bg-gradient-to-r
from-violet-400
via-pink-400
to-orange-400
bg-clip-text
text-transparent
"
>

🎓

<ScrambleText
words={[
"Education",
"Academic Journey",
"Professional Learning"
]}
/>

</h2>



<div className="relative">


<div
className="
absolute
left-5
top-0
h-full
w-[2px]
bg-gradient-to-b
from-green-400
via-purple-500
to-pink-500
"
/>


<div className="space-y-8">


{
educationData.map((edu,index)=>(

<div
key={index}
className="
relative
pl-14
"
>


<div
className="
absolute
left-2
top-5
h-7
w-7
rounded-full
bg-gradient-to-r
from-green-400
to-purple-500
border-4
border-black
"
>


</div>



<div
className="
rounded-2xl
border
border-gray-800
bg-black/40
p-6
hover:border-green-400
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(34,197,94,.25)]
transition-all
duration-300
"
>


<div
className="
flex
justify-between
items-center
flex-wrap
gap-3
"
>


<h3
className="
text-xl
font-bold
text-white
"
>

{edu.icon} {edu.title}

</h3>


<span
className="
px-4
py-1
rounded-full
bg-green-500/20
text-green-400
text-sm
font-semibold
"
>

{edu.year}

</span>


</div>



<p
className="
mt-3
text-cyan-400
font-semibold
"
>

🏫 {edu.institute}

</p>


{
edu.location &&

<p className="text-orange-400 mt-1">
📍 {edu.location}
</p>

}



{
edu.details &&

<div
className="
mt-4
space-y-1
text-gray-300
"
>

{
edu.details.map((item,i)=>(

<p key={i}>
✓ {item}
</p>

))
}

</div>

}



</div>


</div>


))

}


</div>


</div>


</div>


)

}