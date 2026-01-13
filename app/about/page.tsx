import Image from "next/image";
import { BookOpen, Users, Award, Globe, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-sm">
            Established 1995
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Empowering Future Leaders
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
            We provide a world-class education that nurtures curiosity, creativity, and character.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Our Philosophy</h2>
            <div className="space-y-6">
              <div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  To inspire and challenge every student to achieve their personal best and to become responsible, global citizens.
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  A community wherein all students feel equal, respected, and empowered to contribute to the world.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-out">
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay z-10"></div>
            {/* Using a placeholder because I can't generate images easily here, but standard practice is next/image */}
            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
              <span className="text-sm">School Campus Image</span>
              {/* 
                  To actually use an image here:
                  <Image src="/path/to/image.jpg" fill className="object-cover" alt="Campus Life" />
                */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Students", value: "2,500+", icon: Users },
              { label: "Teachers", value: "150+", icon: BookOpen },
              { label: "Awards", value: "50+", icon: Award },
              { label: "Years", value: "28", icon: Heart },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-blue-400 mb-4 opacity-80" />
                <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Why Choose Us?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            We are dedicated to fostering an environment where students thrive academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Academic Excellence",
              text: "Rigorous curriculum designed to challenge and inspire students.",
              color: "bg-blue-500",
            },
            {
              title: "Holistic Development",
              text: "Focus on sports, arts, and community service alongside academics.",
              color: "bg-purple-500",
            },
            {
              title: "Innovation",
              text: "State-of-the-art facilities and modernization in teaching methods.",
              color: "bg-rose-500",
            },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className={`absolute top-0 left-0 w-2 h-full ${item.color}`}></div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
