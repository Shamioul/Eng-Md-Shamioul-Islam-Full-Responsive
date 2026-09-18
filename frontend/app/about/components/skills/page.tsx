"use client";

import Image from "next/image";
import Typewriter from "@/app/components/Name/Typewriter";


const techCategories = [

{
category:"🎨 Frontend Development",

color:"green",

skills:[

{
name:"HTML5",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
},

{
name:"CSS3",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
},

{
name:"JavaScript",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
},

{
name:"React.js",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
},

{
name:"Next.js",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
},

{
name:"TypeScript",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
},

{
name:"Tailwind CSS",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
}

]

},


{
category:"⚙️ Backend Development",

skills:[

{
name:"Node.js",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
},

{
name:"Express.js",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
},

{
name:"REST API",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
}

]

},


{
category:"🗄 Database",

skills:[

{
name:"MongoDB",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
},

{
name:"MySQL",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
}

]

},


{
category:"🚀 State Management & Tools",

skills:[

{
name:"Redux",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
},

{
name:"Git",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
},

{
name:"GitHub",
logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
}

]

}

];



export default function Page(){


return (

<div
className="
mt-12
rounded-3xl
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
p-8
border border-gray-800
hover:border-green-500
hover:shadow-[0_0_40px_rgba(34,197,94,.25)]
transition-all
duration-500
"
>


<h2
className="
text-4xl
font-bold
mb-10
bg-gradient-to-r
from-green-400
via-cyan-400
to-blue-500
bg-clip-text
text-transparent
"
>

<Typewriter words={["🚀 My Technical Skills","Full Stack Technology"]}/>

</h2>



<div className="space-y-10">


{

techCategories.map((category,index)=>(


<div key={index}>


<h3
className="
text-2xl
font-bold
text-white
mb-5
"
>

{category.category}

</h3>



<div
className="
grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-4
gap-5
"
>


{

category.skills.map((skill)=>(


<div
key={skill.name}
className="
group
rounded-2xl
bg-gray-950
border
border-gray-800
p-5
flex
flex-col
items-center
justify-center
hover:border-green-400
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(34,197,94,.35)]
transition-all
duration-300
"
>


<Image

src={skill.logo}

alt={skill.name}

width={60}

height={60}

className="
group-hover:scale-125
transition
duration-300
"

/>


<p
className="
mt-4
text-gray-400
group-hover:text-white
font-semibold
text-center
"
>

{skill.name}

</p>


</div>


))

}


</div>


</div>


))

}


</div>


</div>

)

}