"use client";

import {motion} from "framer-motion";


export default function Particles({
active
}:{
active:boolean
}){


return (

<div className="absolute inset-0">


{

Array.from({length:30}).map((_,i)=>(


<motion.span

key={i}

animate={
active
?
{
y:[0,-100,0],
opacity:[0,1,0]
}
:
{
opacity:0
}
}


transition={{
duration:3+i%3,
repeat:Infinity
}}


className="
absolute
h-1
w-1
rounded-full
bg-yellow-200
"

style={{

left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`

}}

/>


))

}


</div>

)

}