import { IPagination } from './types';

export const getTotalPages = (total: number, perPage: number) => Math.ceil(total / perPage);

export const getPaginationOffset = (pagination: IPagination) => (pagination.page - 1)
  * pagination.perPage;
