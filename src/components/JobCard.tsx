import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface JobCardProps extends React.ComponentProps<'div'> {
  href: React.ComponentProps<typeof Link>['href']
  title: string
  company_name: string
}

const JobCard = ({
  href,
  title,
  company_name,
  className,
  ...rest
}: JobCardProps) => {
  return (
    <div
      className={twMerge(
        'space-y-2 rounded-md border px-5 py-8 shadow-md shadow-gray-300',
        className
      )}
      {...rest}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        className="text-lg text-primary-600"
      >
        {title}
      </Link>
      <p>{company_name}</p>
    </div>
  )
}
export default JobCard
