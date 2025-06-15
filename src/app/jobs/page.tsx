import Pagination from '@/components/Pagination'
import { fetchAllJobs } from '@/libs/api/api'

export default async function JobsPage() {
  const jobs = await fetchAllJobs('react', 'software-dev')

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Remote Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-4 rounded border p-4">
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {job.title}
            </a>
            <p>{job.company_name}</p>
          </li>
        ))}
      </ul>
      <Pagination total={5} />
    </section>
  )
}
