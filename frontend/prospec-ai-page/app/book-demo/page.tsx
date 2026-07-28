import { BookDemoHero } from "@/components/book-demo/book-demo-hero"
import { DemoExperience } from "@/components/book-demo/demo-experience"
import { DemoAgenda } from "@/components/book-demo/demo-agenda"
import { DemoForm } from "@/components/book-demo/demo-form"
import { WhyBook } from "@/components/book-demo/why-book"
import { DemoMetrics } from "@/components/book-demo/demo-metrics"
import { DemoFAQ } from "@/components/book-demo/demo-faq"
import { AfterDemo } from "@/components/book-demo/after-demo"
import { DemoCTA } from "@/components/book-demo/demo-cta"

export default function BookDemoPage() {
  return (
    <main>
      <BookDemoHero />
      <DemoExperience />
      <DemoAgenda />
      <DemoForm />
      <WhyBook />
      <DemoMetrics />
      <DemoFAQ />
      <AfterDemo />
      <DemoCTA />
    </main>
  )
}
