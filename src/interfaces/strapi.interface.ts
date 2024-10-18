export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}

export interface ErrorStrapi {
  status: string;
  name: string;
  message: string;
  detail: Record<string, unknown>;
}