import Typewriter from "@/app/components/Name/Typewriter";

export default function Page() {
  return <>
  <div
className="
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
p-8
rounded-3xl
border border-gray-800
hover:border-red-500
hover:shadow-[0_0_35px_rgba(239,68,68,.25)]
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
from-red-400
via-orange-400
to-yellow-400
bg-clip-text
text-transparent
"
>
<Typewriter words={["💼 Professional Experience"]}/>
</h2>


<div className="space-y-6">


{/* Experience 1 */}

<div
className="
p-6
rounded-2xl
bg-black/40
border border-gray-800
hover:border-red-400
hover:-translate-y-2
transition
"
>

<h3 className="text-xl font-bold text-white">
🎨 Senior Designer & IT Support
</h3>

<p className="text-red-400 font-semibold">
Popular Diagnostics Center, Rangpur
</p>

<p className="text-gray-400">
📅 2018 - 2020
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ Graphic Design & Branding Support
</li>

<li>
✓ Computer Hardware & Software Maintenance
</li>

<li>
✓ IT Troubleshooting and Technical Support
</li>

<li>
✓ Office Documentation Management
</li>

</ul>

</div>




{/* Experience 2 */}

<div
className="
p-6
rounded-2xl
bg-black/40
border border-gray-800
hover:border-green-400
hover:-translate-y-2
transition
"
>

<h3 className="text-xl font-bold text-white">
👨‍🏫 Assistant ICT Teacher
</h3>

<p className="text-green-400 font-semibold">
Rangpur Shisunikatan School
</p>

<p className="text-gray-400">
📅 2020 - 2021
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ Computer Fundamentals Teaching
</li>

<li>
✓ Microsoft Office Training
</li>

<li>
✓ Student ICT Practical Support
</li>

</ul>


</div>




{/* Experience 3 */}

<div
className="
p-6
rounded-2xl
bg-black/40
border border-gray-800
hover:border-blue-400
hover:-translate-y-2
transition
"
>

<h3 className="text-xl font-bold text-white">
👨‍🏫 Assistant ICT Teacher
</h3>


<p className="text-blue-400 font-semibold">
Badda Residential High School, Dhaka
</p>

<p className="text-gray-400">
📅 2022 - 2023
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ ICT Curriculum Management
</li>

<li>
✓ Computer Lab Management
</li>

<li>
✓ Digital Learning Support
</li>

</ul>

</div>




{/* Experience 4 */}

<div
className="
p-6
rounded-2xl
bg-black/40
border border-gray-800
hover:border-purple-400
hover:-translate-y-2
transition
"
>

<h3 className="text-xl font-bold text-white">
💻 Senior IT Operator
</h3>


<p className="text-purple-400 font-semibold">
Robi Warehouse, Tongi Dhaka
</p>


<p className="text-gray-400">
📅 2024 - 2025
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ IT Operation Management
</li>

<li>
✓ Data Management
</li>

<li>
✓ System Monitoring
</li>

</ul>

</div>




{/* Experience 5 */}

<div
className="
p-6
rounded-2xl
bg-black/40
border border-gray-800
hover:border-pink-400
hover:-translate-y-2
transition
"
>

<h3 className="text-xl font-bold text-white">
🎬 Senior Designer & Video Editor
</h3>


<p className="text-pink-400 font-semibold">
Global Overseas
</p>


<p className="text-gray-400">
📅 2025 - 2026
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ Social Media Graphics Design
</li>

<li>
✓ Video Editing & Motion Design
</li>

<li>
✓ Marketing Content Creation
</li>

</ul>

</div>




{/* Current */}

<div
className="
p-6
rounded-2xl
bg-gradient-to-r
from-green-900/30
to-cyan-900/30
border border-green-500
hover:scale-105
transition
"
>

<h3 className="text-xl font-bold text-white">
🚀 Full Stack Web Developer
</h3>


<p className="text-green-400 font-semibold">
IT Operation
</p>


<p className="text-gray-400">
📅 2026 - Running
</p>


<ul className="mt-4 space-y-2 text-gray-300">

<li>
✓ MERN Stack Development
</li>

<li>
✓ React / Next.js Application Development
</li>

<li>
✓ REST API Development
</li>

<li>
✓ Database Design & Optimization
</li>

</ul>


</div>


</div>

</div>
  
  
  </>;
}