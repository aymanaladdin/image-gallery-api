export type Image = {
  id: string,
  description?: string | null,
  url: string,
  link: string,
  topics?: string[],
  user: string
};

export interface IListImageQuery {
  page: number,
  per_page: number,

  topic?: string,
  user?: string,
  search_text?: string,

  [key: string]: any
}

export interface IImageFilter {
  user?: string,
  topic?: string,
}
