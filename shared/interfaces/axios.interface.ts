export interface RequestParamsInput {
  sort: string
  size: number
  page: number
}

export interface ResponseSortInput {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

export interface ResponsePageableInput {
  offset: number
  pageNumber: number
  pageSize: number
  paged: boolean
  sort: ResponseSortInput
  unpaged: boolean
}

export interface ResponsePaginateTypes {
  content: any[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: ResponsePageableInput
  size: number
  sort: ResponseSortInput
  totalElements: number
  totalPages: number
}
