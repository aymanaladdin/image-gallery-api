import { getTotalPages } from '../../util/helpers';
import { IPagination } from '../../util/types';
import imageRepository from './image.repository';
import { IImageFilter } from './types';

const imageService = {
  listImages: (filter: IImageFilter, pagination: IPagination) => {
    const { page, perPage } = pagination;

    const { data, totalCount } = imageRepository
      .find(filter, { limit: perPage, offset: (page - 1) * perPage });

    const totalPages = getTotalPages(totalCount, perPage);

    return { data, pagination: { ...pagination, totalPages } };
  },
};

export default imageService;
