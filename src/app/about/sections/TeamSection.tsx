"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal, StaggerGrid, StaggerItem } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/section-heading";

// Placeholder team members - easy to populate later
const team = [
  {
    name: "Team Member",
    role: "Owner / Lead Estimator",
    initials: "TM",
  },
  {
    name: "Team Member",
    role: "Project Manager",
    initials: "TM",
  },
  {
    name: "Team Member",
    role: "Lead Installer",
    initials: "TM",
  },
  {
    name: "Team Member",
    role: "Customer Relations",
    initials: "TM",
  },
];

export function TeamSection() {
  return (
    <section className="section-padding bg-slate-800/50">
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

        <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <StaggerItem key={index}>
              <Card className="text-center bg-slate-800 border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-cyan-500/20">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
