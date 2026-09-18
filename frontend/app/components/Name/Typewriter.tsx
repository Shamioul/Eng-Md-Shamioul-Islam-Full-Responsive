"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
};

export default function Typewriter({ words }: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, text.length + 1);
        setText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1);
        setText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span> {text}
      <span className="text-white animate-pulse">|</span>
    </span>
  );
}