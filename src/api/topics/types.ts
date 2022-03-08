export type Topic = {
  name: string,
  collages: { url: string }[]
};

export interface ITopiListQuery {
  page: number,
  per_page: number,
  [key: string]: any
}
