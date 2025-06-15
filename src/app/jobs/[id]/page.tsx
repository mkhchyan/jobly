import Pagination from '@/components/Pagination'
import { fetchJobById } from '@/libs/api/api'

export default async function JobDetailPage({
  params,
}: {
  params: { id: number }
}) {
  const job = await fetchJobById(params.id)

  if (!job) return <div>Job not found</div>

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">{job.title}</h1>
    </section>
  )
}
