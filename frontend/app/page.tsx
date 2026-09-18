"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Typewriter from "@/app/components/Name/Typewriter";

export default function Home(){
const [ show, setshow] = useState(false)


const canvasRef = useRef(null);
useEffect(()=>{
const canvas = canvasRef.current;
if(!canvas) return;
const ctx = canvas.getContext("2d");
const resize =()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;};
resize();
let stars=[];
let shootingStars=[];
for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5,
speed:Math.random()*0.5+0.2
});
}
function createShootingStar(){
shootingStars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height*0.5,
len:Math.random()*100+50,
speed:Math.random()*10+6
});
}
const interval=setInterval(createShootingStar,2000);
function animate(){
ctx.fillStyle="black";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);
/* Nebula Glow */
const gradient = ctx.createRadialGradient(
canvas.width/2,
canvas.height/2,
0,
canvas.width/2,
canvas.height/2,
canvas.width/1.5

);
gradient.addColorStop(
0,
"rgba(120,0,255,0.15)"
);
gradient.addColorStop(
0.5,
"rgba(0,180,255,0.08)"
);
gradient.addColorStop(
1,
"transparent"
);
ctx.fillStyle=gradient;
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);
/* Stars */
stars.forEach((s)=>{
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(
s.x,
s.y,
s.r,
0,
Math.PI*2
);

ctx.fill();
s.y += s.speed;

if(s.y > canvas.height)

s.y=0;
});

/* Shooting Stars */
shootingStars.forEach((s,i)=>{


ctx.strokeStyle="rgba(255,255,255,.8)";

ctx.lineWidth=2;

ctx.beginPath();
ctx.moveTo(
s.x,
s.y
);
ctx.lineTo(
s.x-s.len,
s.y+s.len/2
);

ctx.stroke();
s.x += s.speed;
s.y += s.speed;
if(s.x > canvas.width)
shootingStars.splice(i,1);
});
requestAnimationFrame(animate);
}
animate();
window.addEventListener(
"resize",
resize
);
return()=>{
clearInterval(interval);
window.removeEventListener(
"resize",
resize
);
}
},[]);
return (
<section
className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
relative
overflow-hidden
"
>
{/* Canvas Background */}
<canvas
ref={canvasRef}
className="
absolute
inset-0
"
/>
{/* Extra Glow */}
<div
className="
absolute
top-20
left-20
w-72
h-72
bg-purple-600
rounded-full
blur-[150px]
opacity-40
"
/>
<div
className="
absolute
bottom-20
right-20
w-72
h-72
bg-cyan-500
rounded-full
blur-[150px]
opacity-30
"
/>
<div
className="
relative
z-10
container
mx-auto
px-5
text-center
"
>
<h1
className="
text-5xl
md:text-7xl
font-extrabold
bg-gradient-to-r
from-green-400
via-purple-500
to-pink-500
bg-clip-text
text-transparent
"
>
    
Welcome To My Profile
</h1>
<div
className="
mt-6
text-3xl
md:text-5xl
font-bold
"

>
<Typewriter
words={[
"Eng. Md Shamioul Islam",
"Full Stack Web Developer",
"UI/UX Specialist",
"Graphic Designer"
]}/>
</div>
<p
className="
mt-8
max-w-3xl
mx-auto
text-gray-300
text-lg
leading-8
"
>
I am a passionate Full Stack Web Developer and
Creative UI/UX Designer from Bangladesh.
I build modern, scalable and user-friendly
web applications using React, Next.js,
Node.js and MongoDB.

</p>
<div className="mt-10 flex flex-wrap items-center justify-center gap-5">

  {/* View Profile */}
  <Link
    href="/home"
    className="
      group
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-gradient-to-r
      from-green-400
      via-cyan-400
      to-blue-500
      px-7
      py-3
      font-bold
      text-black
      shadow-lg
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-cyan-500/40
    "
  >
    🚀 View Profile
  </Link>

  {/* Resume */}
  <a
    href="/resume/education.png"
    download="Md_Shamioul_Islam_Education_Details.png"
    className="
      group
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-purple-500/60
      bg-purple-500/10
      backdrop-blur-md
      px-7
      py-3
      font-semibold
      text-purple-300
      transition-all
      duration-300
      hover:scale-105
      hover:bg-purple-600
      hover:text-white
      hover:shadow-lg
      hover:shadow-purple-500/30
    "
  >
    📄 Resume
  </a>

  {/* Contact */}
  <Link
    href="/about/components/contact"
    className="
      group
      inline-flex
      items-center
      gap-2
      rounded-xl
      border
      border-pink-500/60
      bg-pink-500/10
      backdrop-blur-md
      px-7
      py-3
      font-semibold
      text-pink-300
      transition-all
      duration-300
      hover:scale-105
      hover:bg-pink-600
      hover:text-white
      hover:shadow-lg
      hover:shadow-pink-500/30
    "
  >
    📞 Contact
  </Link>

  {/* Login with Tooltip */}
  <div className="relative group">

    <Link
      href="/about/components/contact"
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-green-500/60
        bg-green-500/10
        backdrop-blur-md
        px-7
        py-3
        font-semibold
        text-green-300
        transition-all
        duration-300
        hover:scale-105
        hover:bg-green-600
        hover:text-white
        hover:shadow-lg
        hover:shadow-green-500/30
      "
    >
      🔐 Login
    </Link>

    {/* Tooltip */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-full
        mt-4
        w-64
        -translate-x-1/2
        rounded-2xl
        border
        border-green-500/40
        bg-gray-900/95
        backdrop-blur-xl
        p-4
        text-center
        opacity-0
        scale-95
        transition-all
        duration-300
        group-hover:scale-100
        group-hover:opacity-100
        z-50
      "
    >
      <h4 className="font-semibold text-green-400">
        🚧 Login Coming Soon
      </h4>

      <p className="mt-2 text-sm text-gray-300 leading-6">
        For project inquiries or more details,
        <span className="font-semibold text-cyan-400">
          {" "}Contact Me
        </span>{" "}
        or send me an email.
      </p>

      <div className="mt-3 text-xs text-gray-500">
        📧 mdshamioullislam2018@gmail.com
      </div>
    </div>

  </div>

</div>
<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto" >
{
[
["5+","Years Experience","green"],
["20+","Projects","blue"],
["15+","Technologies","purple"],
["100%","Dedication","pink"]
].map((item,index)=>(
<div
key={index}
className="
bg-gray-950/80
p-5
rounded-2xl
border
border-gray-800
hover:-translate-y-2
transition
">
<h3 className={`text-3xl font-bold text-${item[2]}-400 `} > {item[0]} </h3>
<p className="text-gray-400">
{item[1]}
</p>
</div>
))
}
</div>
</div>
</section>
)


}