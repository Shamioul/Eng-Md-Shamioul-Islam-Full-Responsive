"use client";

import Link from "next/link";

export default function Page(){

return (

<div
className="
mt-6
rounded-3xl
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
p-8
border border-gray-800
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
via-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
>
📞 Contact Information
</h2>



<div className="space-y-5">



{/* Location */}

<div
className="
flex
items-center
gap-4
rounded-2xl
bg-black/40
border border-gray-800
p-4
hover:border-green-400
hover:translate-x-2
transition
"
>

<div
className="
text-3xl
"
>
📍
</div>


<div>

<h3 className="text-white font-semibold">
Location
</h3>

<p className="text-gray-400">
Kochua Shardar Para
<br/>
Gangachara, Rangpur
<br/>
Bangladesh
</p>

</div>

</div>





{/* Phone */}

<div
className="
flex
items-center
gap-4
rounded-2xl
bg-black/40
border border-gray-800
p-4
hover:border-green-400
hover:translate-x-2
transition
"
>

<div className="text-3xl">
📱
</div>


<div>

<h3 className="text-white font-semibold">
Phone
</h3>


<Link
href="tel:+8801751206591"
className="
text-gray-400
hover:text-green-400
transition
"
>
+8801751206591
</Link>


</div>


</div>





{/* Email */}

<div
className="
flex
items-center
gap-4
rounded-2xl
bg-black/40
border border-gray-800
p-4
hover:border-red-400
hover:translate-x-2
transition
"
>


<div className="text-3xl">
📧
</div>


<div>

<h3 className="text-white font-semibold">
Email
</h3>


<Link
href="mailto:mdshamioullislam2018@gmail.com"
className="
text-gray-400
break-all
hover:text-red-400
transition
"
>
mdshamioullislam2018@gmail.com
</Link>


</div>


</div>





{/* Availability */}

<div
className="
rounded-2xl
bg-gradient-to-r
from-green-900/30
to-cyan-900/30
border border-green-500/40
p-5
"
>


<h3 className="
text-xl
font-bold
text-green-400
"
>
🚀 Available For
</h3>


<p className="
mt-3
text-gray-300
leading-7
"
>

✓ Full Stack Web Development

<br/>

✓ React / Next.js Projects

<br/>

✓ UI/UX Design

<br/>

✓ Graphic Design

<br/>

✓ Freelance & Remote Work

</p>


</div>



</div>


</div>


)

}