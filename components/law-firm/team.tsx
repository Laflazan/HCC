import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/site";

export function Team({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const team = dictionary.team.members.map((member) => ({
    name: member.name,
    role: member.role,
    image: member.image,
    description: member.description,
  }));
  const marqueeTeam = [...team, ...team];

  return (
    <section id="team" className="overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-gold" />
          </div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {dictionary.team.title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {dictionary.team.description}
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-team-marquee gap-6 will-change-transform hover:[animation-play-state:paused] sm:gap-8">
              {marqueeTeam.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="group relative w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-500 md:w-[260px] md:hover:-translate-y-1 md:hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading="lazy"
                      sizes="260px"
                      className="object-cover object-top transition duration-700 md:group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/82 via-foreground/20 via-52% to-transparent opacity-90 transition duration-500 md:group-hover:from-foreground/88 md:group-hover:via-foreground/28" />

                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                    <div className="transition duration-500 md:translate-y-2 md:group-hover:translate-y-0">
                      <h3 className="font-serif text-[22px] font-medium tracking-tight text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">{member.role}</p>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/82 transition duration-500 md:group-hover:text-white">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border bg-background/96 p-6 backdrop-blur-sm">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground/90">{member.role}</p>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
