'use client'
import {
  usePagination,
  type PaginationProps,
} from '@/hooks/pagination/usePagination'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default function Pagination({
  total,
  page = 1,
  siblings,
  initialPage,
  boundaries,
  className,
  onChange,
  ...rest
}: PaginationProps) {
  const { getPageQuery, active, range, pathname, searchParams, params } =
    usePagination({ total, page, siblings, initialPage, boundaries, onChange })

  return (
    <nav
      className={twMerge(
        'flex items-center justify-center gap-2 px-6 py-3',
        className
      )}
      {...rest}
    >
      {page > 1 && (
        <Link
          className="flex cursor-pointer items-center justify-center text-gray-400 duration-200 ease-in-out hover:scale-125 hover:text-gray-600"
          // @ts-expect-error dynamic runtime pathname
          href={{
            pathname,
            params,
            query: getPageQuery(page, 'prev', searchParams),
          }}
          prefetch={false}
          rel="prev"
        >
          <IconChevronLeft className="size-7" />
        </Link>
      )}
      <ul className="group flex items-center justify-center gap-2">
        {range.map((page, index) => (
          <li key={page + index.toString()} className="flex">
            {page === 'dots' ? (
              <span className="items-center justify-center bg-white font-semibold">
                ...
              </span>
            ) : (
              <Link
                // @ts-expect-error dynamic runtime pathname
                href={{
                  pathname,
                  params,
                  query: getPageQuery(page, undefined, searchParams),
                }}
                prefetch={false}
                className={twMerge(
                  'border-6 basis-9 select-none items-center justify-center border border-secondary-500 bg-white px-4 py-2 font-semibold text-secondary-800 transition-all duration-150 ease-in-out',
                  page === active
                    ? 'bg-gradient-to-t from-secondary-800 to-secondary-400 font-bold text-white hover:scale-90'
                    : 'hover:bg-gradient-to-t hover:from-secondary-700 hover:text-white'
                )}
              >
                {page}
              </Link>
            )}
          </li>
        ))}
      </ul>
      {page < total && (
        <Link
          className="flex cursor-pointer items-center justify-center text-gray-400 duration-200 ease-in-out hover:scale-125 hover:text-gray-600"
          // @ts-expect-error dynamic runtime pathname
          href={{
            pathname,
            params,
            query: getPageQuery(page, 'next', searchParams),
          }}
          prefetch={false}
          rel="next"
        >
          <IconChevronRight className="size-7" />
        </Link>
      )}
    </nav>
  )
}
