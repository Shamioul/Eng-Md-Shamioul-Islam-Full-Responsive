"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


interface Props {
  isOpen:boolean;
}


export default function RegisterForm({
  isOpen
}:Props){


const [show,setShow] = useState(false);


return (

<AnimatePresence>

{
isOpen &&


<motion.div


initial={{
opacity:0,
y:100
}}


animate={{
opacity:1,
y:0
}}


className="
w-full
max-w-md
rounded-3xl
bg-white/10
backdrop-blur-xl
border
border-white/20
p-8
text-white
shadow-2xl
"


>


<h1

className="
text-3xl
font-bold
text-center
mb-8
"

>

Register

</h1>





{/* Name */}

<input

type="text"

className="
w-full
mb-4
rounded-xl
bg-black/30
p-4
outline-none
"

placeholder="Full Name"

/>





{/* Email */}

<input

type="email"

className="
w-full
mb-4
rounded-xl
bg-black/30
p-4
outline-none
"

placeholder="Email Address"

/>





{/* Phone */}

<input

type="number"

className="
w-full
mb-4
rounded-xl
bg-black/30
p-4
outline-none
"

placeholder="Phone Number"

/>





{/* Password */}

<div className="relative">


<input

type={show ? "text":"password"}

className="
w-full
rounded-xl
bg-black/30
p-4
outline-none
"

placeholder="Password"

/>



<button

type="button"

onClick={()=>setShow(!show)}

className="
absolute
right-4
top-4
text-yellow-300
"

>

{
show ? "Hide":"Show"
}


</button>


</div>





{/* Gender */}

<div

className="
mt-5
"

>

<p className="mb-3 text-gray-300">
Gender
</p>


<div className="
flex
gap-5
">


<label className="flex gap-2 items-center">

<input

type="radio"

name="gender"

/>

Male

</label>



<label className="flex gap-2 items-center">

<input

type="radio"

name="gender"

/>

Female

</label>



<label className="flex gap-2 items-center">

<input

type="radio"

name="gender"

/>

Other

</label>


</div>


</div>





{/* Checkbox */}

<div

className="
mt-5
flex
items-center
gap-2
text-sm
"

>


<input

type="checkbox"

/>


<span>

I agree with Terms & Conditions

</span>


</div>







{/* Register Button */}

<button


className="
mt-7
w-full
rounded-xl
bg-gradient-to-r
from-green-400
to-cyan-500
py-4
font-bold
text-black
hover:scale-105
transition
"


>


Create Account


</button>





<p

className="
text-center
mt-6
text-gray-300
"

>


Already have an account?


<a

href="/login"

className="
ml-2
text-green-300
font-bold
hover:underline
"

>

Login

</a>


</p>



</motion.div>


}

</AnimatePresence>


)

}