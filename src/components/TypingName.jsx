import { useEffect, useState } from "react";

export default function TypingName() {
  const text = "Juan Diego";
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const pauseTime = 1000;

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < text.length) {
      // ESCRIBIENDO
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);

    } else if (!isDeleting && charIndex === text.length) {
      // PAUSA ANTES DE BORRAR (SIN RE-RENDER)
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

    } else if (isDeleting && charIndex > 0) {
      // BORRANDO
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);

    } else if (isDeleting && charIndex === 0) {
      // REINICIAR
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, text]);

  return (
    <span style={{ color: "var(--primary)" }}>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
}
