import { fetchFeaturedJobs } from '@/libs/api/api'
import JobCard from './JobCard'

export default async function FeaturedJobs() {
  const jobs = await fetchFeaturedJobs()

  return (
    <section className="container-xl">
      <h2 className="font-figtree mb-6 text-left text-3xl font-medium text-primary-700">
        Featured jobs
      </h2>
      <ul className="grid grid-cols-3 gap-2">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            href={job.url}
            title={job.title}
            company_name={job.company_name}
          />
        ))}
      </ul>
    </section>
  )
}
