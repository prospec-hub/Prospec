"use client"

import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourceSection } from "@/components/resources/resource-section"
import { ResourceDownloads } from "@/components/resources/resource-downloads"
import { ResourceFAQ } from "@/components/resources/resource-faq"
import { LatestArticles } from "@/components/resources/latest-articles"
import { ResourceNewsletter } from "@/components/resources/resource-newsletter"
import { ResourcesCTA } from "@/components/resources/resources-cta"
import {
  featuredResources,
  documentation,
  learning,
  research,
  successStories,
  compliance,
  community,
} from "@/lib/resources-data"

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />

      <ResourceSection
        id="featured-resources"
        eyebrow="Featured Resources"
        heading="Everything You Need to Build a Smarter Institution"
        cards={featuredResources}
        showCta
        ctaLabel="Read Guide"
      />

      <ResourceSection
        id="documentation"
        eyebrow="Documentation Center"
        heading="Everything Developers & Administrators Need"
        cards={documentation}
      />

      <ResourceSection
        id="learning"
        eyebrow="Learning Center"
        heading="Learn at Your Own Pace"
        cards={learning}
        showCta
        ctaLabel="Start Learning"
      />

      <ResourceSection
        id="research"
        eyebrow="Research & Publications"
        heading="Higher Education Intelligence"
        cards={research}
        showCta
        ctaLabel="View Publication"
      />

      <ResourceSection
        id="success-stories"
        eyebrow="Success Stories"
        heading="Institutions Driving Digital Transformation"
        cards={successStories}
        columns={2}
        showCta
        ctaLabel="Read Story"
      />

      <ResourceDownloads />

      <ResourceSection
        id="compliance"
        eyebrow="Compliance Center"
        heading="Enterprise Trust, Documented"
        cards={compliance}
        compact
      />

      <ResourceFAQ />

      <ResourceSection
        id="community"
        eyebrow="Community"
        heading="Connect with the Prospec Ecosystem"
        cards={community}
        compact
      />

      <LatestArticles />
      <ResourceNewsletter />
      <ResourcesCTA />
    </main>
  )
}
