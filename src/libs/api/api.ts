import axios from 'axios'

export interface Jobs {
  id: number
  url: string
  title: string
  company_name: string
  candidate_required_location: string
}

interface JobsResponse {
  jobs: Jobs[]
}

const api = 'http://remotive.io'

export async function fetchAllJobs(
  search = '',
  category = ''
): Promise<Jobs[]> {
  try {
    const params: Record<string, string> = {}
    if (search) params.search = search
    if (category) params.category = category

    const response = await axios.get<JobsResponse>(api + '/api/remote-jobs', {
      params,
    })

    return response.data.jobs
  } catch (error) {
    console.error('Failed to fetch jobs:', error)
    return []
  }
}

export async function fetchFeaturedJobs(): Promise<Jobs[]> {
  try {
    const response = await axios.get<JobsResponse>(api + '/api/remote-jobs')
    return response.data.jobs.slice(0, 6)
  } catch (err) {
    console.error('Failed to fetch jobs', err)
    return []
  }
}

export async function fetchJobById(id: number) {
  try {
    const response = await axios.get(api + '/api/remote-jobs/' + id)
  } catch (err) {
    console.error('Failed to fetch jobs', err)
  }
}
