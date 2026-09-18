import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="
        text-5xl
        font-extrabold
        text-center
        bg-gradient-to-r
        from-cyan-400
        via-purple-500
        to-pink-500
        bg-clip-text
        text-transparent
        ">
          🚀 Future Project Vision & Development Roadmap
        </h1>


        <p className="
        text-center 
        text-gray-400 
        mt-5
        max-w-3xl
        mx-auto
        ">
          Exploring upcoming software solutions, scalable applications,
          AI integrations and modern web technologies for future development.
        </p>



        {/* Future Projects */}

        <div className="grid md:grid-cols-2 gap-8 mt-12">


          <Card
          title="🌐 SaaS Based Web Application"
          details={[
            "Multi-tenant SaaS platform development",
            "Subscription based services",
            "User role management",
            "Payment gateway integration",
            "Cloud deployment architecture"
          ]}
          />


          <Card
          title="🤖 AI Powered Assistant Platform"
          details={[
            "AI chatbot development",
            "Natural Language Processing",
            "Personal productivity assistant",
            "AI recommendation system",
            "OpenAI API integration"
          ]}
          />


          <Card
          title="🛍 Advanced E-Commerce Platform"
          details={[
            "Large scale marketplace system",
            "Vendor management",
            "Inventory automation",
            "AI product recommendation",
            "Real-time order tracking"
          ]}
          />


          <Card
          title="🏢 Enterprise Management System"
          details={[
            "HR management system",
            "Employee tracking",
            "Attendance management",
            "Report generation",
            "Business analytics dashboard"
          ]}
          />


          <Card
          title="📱 Mobile Application Development"
          details={[
            "React Native application",
            "Android & iOS support",
            "Push notification",
            "Offline data synchronization",
            "Mobile-first experience"
          ]}
          />


          <Card
          title="☁ Cloud & DevOps Solution"
          details={[
            "AWS cloud deployment",
            "Docker containerization",
            "CI/CD pipeline",
            "Server optimization",
            "Database scaling"
          ]}
          />



        </div>




        {/* Technology Growth */}

        <section className="
        mt-16
        p-8
        rounded-3xl
        bg-gray-900
        border
        border-gray-700
        ">

          <h2 className="
          text-3xl
          font-bold
          text-green-400
          ">
            🛠 Technology Growth Plan
          </h2>


          <div className="mt-5 space-y-4 text-gray-300">

            <p>
              🚀 Advanced Next.js Development:
              Server Components, Server Actions, Performance Optimization,
              SEO and scalable architecture.
            </p>


            <p>
              🚀 Backend Engineering:
              Node.js, Express.js, NestJS, REST API,
              GraphQL and Microservice Architecture.
            </p>


            <p>
              🚀 Database Expertise:
              MongoDB optimization, PostgreSQL,
              Redis caching and database design.
            </p>


            <p>
              🚀 AI Integration:
              Machine Learning models,
              Generative AI, AI Agents and Automation.
            </p>


          </div>

        </section>





        {/* Long Term Vision */}

        <section className="
        mt-10
        p-8
        rounded-3xl
        bg-gradient-to-r
        from-purple-900
        to-black
        ">


          <h2 className="text-3xl font-bold text-yellow-400">
            🌟 Long Term Vision
          </h2>


          <ul className="
          mt-5
          space-y-3
          text-gray-200
          ">

            <li>
              ⭐ Build production-level software solutions
              for real-world problems.
            </li>

            <li>
              ⭐ Develop scalable applications used by thousands
              of users.
            </li>

            <li>
              ⭐ Combine Web Development with Artificial Intelligence.
            </li>

            <li>
              ⭐ Create innovative SaaS products.
            </li>

            <li>
              ⭐ Contribute to open-source projects.
            </li>

            <li>
              ⭐ Build a professional software engineering career.
            </li>

          </ul>


        </section>


      </div>

    </main>
  );
}



function Card({
  title,
  details
}:{
  title:string;
  details:string[];
}){

return (

<div className="
rounded-2xl
bg-gradient-to-br
from-gray-900
to-black
border
border-gray-700
p-6
hover:scale-105
transition
">


<h2 className="
text-2xl
font-bold
text-cyan-400
">
{title}
</h2>


<ul className="
mt-4
space-y-2
text-gray-300
">

{
details.map((item,index)=>(
<li key={index}>
✔ {item}
</li>
))
}

</ul>


</div>

)

}