"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Page() {


const [active, setActive] = useState("");

const socialLinks = [

{
name:"🐙 GitHub",
url:"https://github.com/Shamioul",
style:"bg-gray-900 border-gray-700 hover:border-white"
},

{
name:"💼 LinkedIn",
url:"https://www.linkedin.com/in/md-shamioul-islam-60267125a/",
style:"bg-blue-600/30 border-blue-500"
},


{
name:"📘 Facebook",
url:"https://www.facebook.com/mdshamioulislam.shami",
style:"bg-blue-700/30 border-blue-600"
},


{
name:"📸 Instagram",
url:"https://instagram.com/",
style:"bg-pink-600/30 border-pink-500"
},


{
name:"𝕏 X (Twitter)",
url:"https://x.com/",
style:"bg-gray-900 border-gray-600"
},


{
name:"🏀 Dribbble",
url:"https://dribbble.com/",
style:"bg-pink-500/20 border-pink-400"
},


{
name:"🟢 WhatsApp",
url:"https://wa.me/8801751206591",
style:"bg-green-600/30 border-green-500"
},


{
name:"📞 Viber",
url:"viber://chat?number=+8801751206591",
style:"bg-purple-600/30 border-purple-500"
},


{
name:"✈️ Telegram",
url:"https://t.me/",
style:"bg-cyan-600/30 border-cyan-500"
},


{
name:"💬 IMO",
url:"https://imo.im/",
style:"bg-blue-500/30 border-blue-400"
},


{
name:"📧 Email",
url:"mailto:mdshamioullislam2018@gmail.com",
style:"bg-red-600/30 border-red-500"
},


];



return (

<div
className="
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
p-8
rounded-3xl
border
border-gray-800
hover:border-blue-500
hover:shadow-[0_0_35px_rgba(59,130,246,.25)]
transition-all
duration-500
"
>


<h2
className="
text-3xl
font-bold
mb-8
bg-gradient-to-r
from-blue-400
via-purple-400
to-pink-500
bg-clip-text
text-transparent
"
>
🌐 Connect With Me
</h2>



<div
className="
flex
flex-wrap
gap-4
"
>


{

socialLinks.map((social,index)=>(


<Link

key={index}

href={social.url}

target="_blank"

className={`
px-5
py-3
rounded-xl
border
hover:scale-110
transition-all
duration-300
${social.style}
`}

>

{social.name}

</Link>


))


}



{/* Resume Button */}

<button

onClick={()=>setActive("resume")}

className="
px-5
py-3
rounded-xl
bg-green-600/30
border
border-green-500
hover:scale-110
transition
"

>

📄 Resume

</button>


</div>





{/* Resume Preview */}


{

active==="resume" &&

<div
className="
mt-10
bg-black
rounded-2xl
border
border-gray-800
p-6
"
>


<h3
className="
text-2xl
font-bold
text-green-400
mb-5
"
>

📄 My Resume Preview

</h3>



<div
className="
flex
justify-center
"
>


<Image

src="/resume/cv.png"

alt="My Resume"

width={700}

height={900}

className="
rounded-xl
border
border-gray-700
"
/>


</div>



<a

href="/resume/cv.png"

download="Md_Shamioul_Islam_CV.png"

className="
inline-block
mt-6
px-6
py-3
rounded-xl
bg-gradient-to-r
from-green-400
to-cyan-500
text-black
font-bold
hover:scale-105
transition
"

>

⬇ Download Resume

</a>


</div>


}


</div>

)

}