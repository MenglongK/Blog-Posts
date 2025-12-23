"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  
  return (
    <section className="min-h-screen bg-primary text-black/70 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-15">
      <div className="w-full md:w-5/12 flex justify-center h-full md:justify-end">
        <Image
          src="/images/photo.png"
          alt="About Us"
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-7/12 text-center md:text-left relative">
        <div className="absolute left-[40%] -top-6 md:-left-16  lg:top-0 md:top-6 rotate-0 md:rotate-90 text-sm tracking-widest">
          <div className="flex items-center justify-center gap-2">
            <p className="md:rotate-180">MORE ABOUT</p>
            <div className="w-16 h-0.5 bg-black"></div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 pl-10">
          A Passionate <br /> <span className="text-indigo-600">Software Developer</span>
        </h2>

        <p className="text-black/50 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0 text-justify">
          I’m <b className="text-xl text-indigo-600">Menglong Keo</b>, a passionate Software Developer with expertise in
          Next.js, Java, & modern web technologies. I specialize in building
          user-friendly applications that solve real-world problems. With a deep
          understanding of frontend development, state management, and API
          integration, I can bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/"
            className="bg-tertiary bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-tertiary/80 text-center hover:scale-105 transition-transform duration-300"
          >
            See Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
