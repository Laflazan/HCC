"use client"

import Image from "next/image"

const team = [
  {
    name: "Hasan Can Cebeci",
    role: "Avukat",
    image: "/hasan.png",
  },
  {
    name: "Gerçek Onur Oy",
    role: "Avukat",
    image: "/onur.png",
  },
  {
    name: "Osman Oy",
    role: "Avukat",
    image: "/onur.png",
  },
  {
    name: "M. Batuhan Çelik",
    role: "Stajyer Avukat",
    image: "/batuhan.png",
  },
  {
    name: "Zümra Miray Feyzi",
    role: "Stajyer Avukat",
    image: "/zumra.png",
  },
]

const marqueeTeam = [...team, ...team]

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground tracking-tight">
            Ekibimiz
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            HCC Avukatlık Bürosu, alanında uzman ve deneyimli kadrosuyla
            müvekkillerine güvenilir, etkin ve çözüm odaklı hukuki hizmet sunmaktadır.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-team-marquee gap-8 hover:[animation-play-state:paused] will-change-transform">
              {marqueeTeam.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="group relative w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-background border border-border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading="lazy"
                      sizes="260px"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="absolute inset-0 bg-foreground/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="text-background">
                      <h3 className="font-serif text-xl font-medium">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-gold text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-background border-t border-border group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}