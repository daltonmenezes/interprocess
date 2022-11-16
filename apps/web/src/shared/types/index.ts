export interface Doc {
  title: string
  slug: string
  source: any
  url: string
}

export interface Link {
  title: string
  url: string
  order: number
}

export type LinkKeys = keyof Link

export interface Links {
  [key: string]: Link[]
}

export interface PaginatedLink extends Link {
  sections: {
    raw: string[]
    sanitized: string[]
  }
}

export interface Pagination {
  previous: PaginatedLink
  next: PaginatedLink
  hasPrevious: boolean
  hasNext: boolean
}

export interface DocProps {
  doc: Doc
  links: Links
  pagination: Pagination
}
