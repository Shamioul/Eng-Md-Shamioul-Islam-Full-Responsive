"use client";

import { useEffect, useState } from "react";



type propstypeing ={
  words: string[];
}

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText( {words }: propstypeing) {
  const [text, setText] = useState(words[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    let iteration = 0;

    const nextWord = words[(index + 1) % words.length];

    const interval = setInterval(() => {
      setText(
        nextWord
          .split("")
          .map((char, i) => {
            if (i < iteration) return nextWord[i];

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= nextWord.length) {
        clearInterval(interval);
        setText(nextWord);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }

      frame++;
    }, 40);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <span
      className="
      text-4xl
      font-extrabold
      bg-gradient-to-r
      from-violet-500
      via-fuchsia-500
      via-red-500
      to-orange-400
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_10px_rgba(168,85,247,.7)]
      drop-shadow-[0_0_25px_rgba(236,72,153,.5)]
      transition-all
      duration-300
      ">
      {text}
    </span>
  );
}