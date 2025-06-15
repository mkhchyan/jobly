'use client'
import { usePagination as mantine_usePagination } from '@mantine/hooks'
import type { UsePaginationOptions } from '@mantine/hooks/lib/use-pagination/use-pagination'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

export interface PaginationProps
  extends UsePaginationOptions,
    Omit<React.ComponentProps<'nav'>, 'onChange'> {}

export const usePagination = ({
  total,
  page,
  initialPage,
  siblings,
  boundaries,
  onChange,
}: UsePaginationOptions) => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  // https://mantine.dev/hooks/use-pagination/
  const { range, active } = mantine_usePagination({
    total,
    page,
    siblings,
    initialPage,
    boundaries,
    onChange,
  })

  const getPageQuery = (
    page: number,
    direction?: 'prev' | 'next',
    searchParams = new URLSearchParams()
  ): Record<string, string> => {
    searchParams = new URLSearchParams(searchParams)
    if (direction === 'next') {
      page++
    } else if (direction === 'prev') {
      page--
    }

    if (page > 1) {
      searchParams.set('page', String(page))
    } else {
      searchParams.delete('page')
    }

    return Object.fromEntries(searchParams)
  }

  return { pathname, params, searchParams, range, active, getPageQuery }
}
