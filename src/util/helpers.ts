import { IPagination } from './types';

export const getTotalPages = (total: number, perPage: number) => Math.ceil(total / perPage);

export const getPaginationOffset = (pagination: IPagination) => (pagination.page - 1)
  * pagination.perPage;

export const getSliceBoundaries = (limit: number, offset: number) => ([
  offset,
  limit + offset,
]);
