"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const team = [
  {
    name: "Carlos Chavez",
    role: "Owner, CEO",
    image: "/Carlos.jpeg",
  },
  {
    name: "Brent Jones",
    role: "Co-Owner, Project Manager",
    image: "/Brent.jpeg",
  },
  {
    name: "Blake Hite",
    role: "Project Manager",
    image: "/Blake.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal>
          <SectionHeading
            label="Our Team"
            title="Meet the Experts"
            description="Dedicated professionals committed to excellence in every project."
            centered
            className="mb-12"
          />
        </Reveal>

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <StaggerItem key={member.name} className="h-full">
              <Card className="h-full text-center bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all overflow-hidden group">
                <CardContent className="p-8 py-10">
                  <div className="relative w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-500/40 shadow-xl shadow-blue-500/20 group-hover:ring-blue-500/50 transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Team Photo */}
        <Reveal>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl shadow-black/30">
              <Image
                src="/TeamPic.jpeg"
                alt="True North Roofing Team"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white font-semibold text-lg">The True North Team</p>
                <p className="text-white/70 text-sm">Ready to protect your home</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
