import data from '../../util/data';
import { getSliceBoundaries } from '../../util/helpers';
import { IFindOption } from '../../util/types';
import { IImageFilter } from './types';

const filterImages = (filters?: IImageFilter) => {
  const { topic, user } = (filters ?? {});

  if (!(topic || user)) return data.images;

  return data.images.filter((image) => (
    ((topic && image.topics?.includes(topic)) || (!topic && true)) // if no topic skip that filter
    && ((user && image.user === user) || (!user && true)) // if no user skip that filter
  ));
};

const imageRepository = {
  find: (filters?: IImageFilter, options?: IFindOption) => {
    const [start, end] = getSliceBoundaries(options?.limit ?? 10, options?.offset ?? 0);
    const images = filterImages(filters);

    return {
      data: images.slice(start, end),
      totalCount: images.length,
    };
  },
};

export default imageRepository;
