import Link from 'next/link'

import { NavigatorContainer } from './styles'
import { Title } from 'templates/Docs/styles'

import type { Pagination } from 'shared/types'

interface PaginationNavigatorProps {
  pagination: Pagination
}

export function PaginationNavigator({ pagination }: PaginationNavigatorProps) {
  return (
    <NavigatorContainer
      style={{
        justifyContent: !pagination.hasPrevious ? 'flex-end' : 'space-between',
      }}
    >
      {pagination.hasPrevious && (
        <Link href={pagination.previous.url} passHref>
          <a>
            Previous
            <span title={pagination.previous.sections.sanitized.join(' / ')}>
              {pagination.previous.sections.sanitized.join(' / ')}
            </span>
            <Title>{pagination.previous.title}</Title>
          </a>
        </Link>
      )}

      {pagination.hasNext && (
        <Link href={`/docs/${pagination.next.url}`} passHref>
          <a>
            Next
            <span title={pagination.next.sections.sanitized.join(' / ')}>
              {pagination.next.sections.sanitized.join(' / ')}
            </span>
            <Title>{pagination.next.title}</Title>
          </a>
        </Link>
      )}
    </NavigatorContainer>
  )
}
