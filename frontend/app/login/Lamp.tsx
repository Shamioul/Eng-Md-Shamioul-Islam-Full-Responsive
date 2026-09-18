"use client";

import {motion} from "framer-motion";
import {Power} from "lucide-react";


interface Props{
 isOn:boolean;
 onToggle:()=>void;
}


export default function Lamp({
 isOn,
 onToggle
}:Props){


return (

<div className="relative flex flex-col items-center">


<motion.div
animate={{
opacity:isOn?1:0
}}
className="
absolute
top-10
h-[400px]
w-[400px]
rounded-full
bg-yellow-300/30
blur-[100px]
"
/>



<div
className="
h-20
w-32
rounded-b-full
bg-gradient-to-b
from-gray-200
to-black
relative
"
>


<motion.div

animate={{
boxShadow:isOn
?
"0 0 60px #fde047"
:
"0 0 0px transparent"
}}

className="
absolute
bottom-2
left-1/2
-translate-x-1/2
h-8
w-8
rounded-full
bg-yellow-200
"

/>

</div>



<div className="
h-28
w-3
bg-gray-600
"/>



<div
className="
h-4
w-40
rounded-full
bg-gray-800
"
/>
<button
onClick={onToggle}
className="
group
relative
mt-10
flex
items-center
gap-2
rounded-full
bg-yellow-400
px-6
py-3
font-bold
text-black
hover:scale-110
transition
"

>

<Power size={20}/>
Switch
<span
className="
absolute
-bottom-12
left-1/2
-translate-x-1/2
bg-black
text-white
text-xs
px-3
py-2
rounded
opacity-0
group-hover:opacity-100
transition
whitespace-nowrap
"
>
Click me to Login 👆
</span>
</button>


</div>

)

}