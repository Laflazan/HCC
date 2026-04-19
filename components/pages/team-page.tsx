"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { getDictionary, getTeamMembers, type Locale } from "@/lib/site";

type TeamPageProps = {
  locale: Locale;
};

export function TeamPage({ locale }: TeamPageProps) {
  const dictionary = getDictionary(locale);
  const teamMembers = getTeamMembers(locale);
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  return (
    <div className="bg-background">
      <section className="pt-40 pb-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto mb-6 h-px w-16 bg-gold" />

          <h1 className="font-serif text-4xl text-foreground md:text-5xl">
            {dictionary.metadata.team.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {dictionary.team.pageIntro}
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              role="button"
              tabIndex={0}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedMember(member)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedMember(member);
                }
              }}
              aria-label={`${member.name} ${dictionary.team.openProfile}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/35 opacity-0 transition group-hover:opacity-100" />

                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 opacity-0 transition group-hover:opacity-100"
                  title={dictionary.team.profileLinkSoon}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md">
                    <Linkedin size={16} />
                  </span>
                </span>

                <div className="absolute bottom-0 p-6 text-white opacity-0 transition group-hover:opacity-100">
                  <h3 className="font-serif text-xl">{member.name}</h3>
                  <p className="text-sm text-gold">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-6"
          onClick={() => setSelectedMember(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-title"
            className="relative w-full max-w-3xl rounded-2xl bg-background p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 text-foreground/70 transition hover:text-foreground"
              aria-label={dictionary.team.closeProfile}
            >
              <X />
            </button>

            <h2 id="team-member-title" className="font-serif text-2xl text-foreground">
              {selectedMember.name}
            </h2>

            <p className="mt-1 text-gold">{selectedMember.role}</p>

            <p className="mt-4 text-muted-foreground">
              {selectedMember.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedMember.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}