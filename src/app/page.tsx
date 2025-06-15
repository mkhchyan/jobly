import FeaturedJobs from '@/components/FeaturedJobs'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <section className="space-y-10">
      <Hero />
      <FeaturedJobs />
    </section>
  )
}
