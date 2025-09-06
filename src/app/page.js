"use client";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import TechStackSlider from "./components/TechStackSlider";

export default function Page() {
  const words = useMemo(() => [
    "Creating innovative experience.",
    "Building the future.",
    "Coding for a connected world.",
  ], []);
  const [currentWord, setCurrentWord] = useState(
    "Creating innovative experiences."
  );
  const [wordIndex, setWordIndex] = useState(1);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 150 : 200;
    const delay = isDeleting && charIndex === 0 ? 2000 : typeSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < words[wordIndex].length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === words[wordIndex].length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  useEffect(() => {
    setCurrentWord(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return (
    <>
      <main className="min-h-screen ">
        <section className="text-center min-h-screen">
          <div className="min-h-screen flex flex-col justify-center items-center relative">
            <h1 className="font-bold text-5xl">
              Hello there, I&apos;m Thanathat Pinthu
            </h1>
            <p className="text-2xl mt-6">
              A passionate 4th-year <b>Computer Engineering</b> student at{" "}
              <b className="text-[#e35205]">KMITL,</b>
              <br />
              Driven by my strong interest in{" "}
              <b>Web Development, DevOps and AI Automation.</b>
            </p>
            <p className="text-2xl mt-4">
              <b className="text-[#BD53ED]">{currentWord || "\u00A0"}</b>
            </p>
            <div className="absolute bottom-10 w-full overflow-x-hidden">
              <TechStackSlider />
            </div>
          </div>
        </section>
        <section className="max-w-7xl min-h-screen px-5 py-20 mx-auto md:py-32 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="font-bold text-3xl">About me</h2>
            <div className="mt-8">
              <p>
                My name is Thanathat Pinthu, though I am commonly known as
                March. I am currently pursuing a degree in Computer Engineering
                at King Mongkut&apos;s Institute of Technology Ladkrabang.
              </p>
              <p className="mt-6">
                I have a strong interest in web application development, with a
                particular focus on Full-stack Development. In my free time, I
                enjoy reading comics and enhancing my skills by taking online
                courses, particularly through platforms like Udemy.
              </p>
              <p className="mt-6">
                Throughout my academic journey, I have gained a solid
                understanding of software, hardware, and networking, under the
                guidance of experienced professors. I am eager to apply this
                knowledge to improve my problem-solving abilities and contribute
                effectively to professional projects.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <Image
              src="/images/profile.jpg"
              width={1080}
              height={720}
              alt="Picture of the author"
            />
          </div>
        </section>
      </main>
    </>
  );
}
