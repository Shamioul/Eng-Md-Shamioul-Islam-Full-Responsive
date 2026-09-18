"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Typewriter from "@/app/components/Name/Typewriter";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement === null) {
      return;
    }

    // TypeScript-safe canvas reference
    const canvas: HTMLCanvasElement = canvasElement;

    const context = canvas.getContext("2d");

    if (context === null) {
      return;
    }

    const ctx: CanvasRenderingContext2D = context;

    // =========================
    // Resize Canvas
    // =========================
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // =========================
    // Stars
    // =========================
    const stars: Array<{
      x: number;
      y: number;
      r: number;
      speed: number;
    }> = [];

    // =========================
    // Shooting Stars
    // =========================
    const shootingStars: Array<{
      x: number;
      y: number;
      len: number;
      speed: number;
    }> = [];

    // =========================
    // Create Normal Stars
    // =========================
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    // =========================
    // Create Shooting Star
    // =========================
    const createShootingStar = () => {
      const width = canvas.width;
      const height = canvas.height;

      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        len: Math.random() * 100 + 50,
        speed: Math.random() * 10 + 6,
      });
    };

    const shootingStarInterval = window.setInterval(
      createShootingStar,
      2000
    );

    // =========================
    // Animation Frame
    // =========================
    let animationFrameId = 0;

    // =========================
    // Animation
    // =========================
    const animate = () => {
      // =========================
      // Black Background
      // =========================
      ctx.fillStyle = "black";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // =========================
      // Nebula Glow
      // =========================
      const gradient =
        ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 1.5
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

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      // =========================
      // Normal Stars
      // =========================
      stars.forEach((star) => {
        ctx.fillStyle = "white";

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.r,
          0,
          Math.PI * 2
        );

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
        }
      });

      // =========================
      // Shooting Stars
      // =========================
      for (
        let i = shootingStars.length - 1;
        i >= 0;
        i--
      ) {
        const star = shootingStars[i];

        ctx.strokeStyle =
          "rgba(255,255,255,0.8)";

        ctx.lineWidth = 2;

        ctx.beginPath();

        ctx.moveTo(
          star.x,
          star.y
        );

        ctx.lineTo(
          star.x - star.len,
          star.y + star.len / 2
        );

        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;

        if (
          star.x > canvas.width ||
          star.y > canvas.height
        ) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId =
        window.requestAnimationFrame(
          animate
        );
    };

    // Start animation
    animate();

    // =========================
    // Window Resize
    // =========================
    window.addEventListener(
      "resize",
      resize
    );

    // =========================
    // Cleanup
    // =========================
    return () => {
      window.clearInterval(
        shootingStarInterval
      );

      window.cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

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
      {/* =========================
          Canvas Background
      ========================= */}
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          w-full
          h-full
        "
      />

      {/* =========================
          Purple Glow
      ========================= */}
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

      {/* =========================
          Cyan Glow
      ========================= */}
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

      {/* =========================
          Main Content
      ========================= */}
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
        {/* =========================
            Heading
        ========================= */}
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

        {/* =========================
            Typewriter
        ========================= */}
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
              "Graphic Designer",
            ]}
          />
        </div>

        {/* =========================
            Description
        ========================= */}
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
          I am a passionate Full Stack Web Developer
          and Creative UI/UX Designer from Bangladesh.
          I build modern, scalable and user-friendly
          web applications using React, Next.js,
          Node.js and MongoDB.
        </p>

        {/* =========================
            Buttons
        ========================= */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
          "
        >
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

          {/* Login */}
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

            {/* Login Tooltip */}
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
              <h4
                className="
                  font-semibold
                  text-green-400
                "
              >
                🚧 Login Coming Soon
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-300
                  leading-6
                "
              >
                For project inquiries or more details,
                <span
                  className="
                    font-semibold
                    text-cyan-400
                  "
                >
                  {" "}Contact Me
                </span>
                {" "}or send me an email.
              </p>

              <div
                className="
                  mt-3
                  text-xs
                  text-gray-500
                "
              >
                📧 mdshamioullislam2018@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            Statistics
        ========================= */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            max-w-3xl
            mx-auto
          "
        >
          {[
            {
              value: "5+",
              label: "Years Experience",
              className: "text-green-400",
            },
            {
              value: "20+",
              label: "Projects",
              className: "text-blue-400",
            },
            {
              value: "15+",
              label: "Technologies",
              className: "text-purple-400",
            },
            {
              value: "100%",
              label: "Dedication",
              className: "text-pink-400",
            },
          ].map((item, index) => (
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
              "
            >
              <h3
                className={`
                  text-3xl
                  font-bold
                  ${item.className}
                `}
              >
                {item.value}
              </h3>

              <p className="text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

