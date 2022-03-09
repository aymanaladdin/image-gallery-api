import images from '../../util/data/images';
import { getSliceBoundaries } from '../../util/helpers';
import { IFindOption } from '../../util/types';
import { IImageFilter } from './types';

const filterImages = (filters?: IImageFilter) => {
  const { topic, user } = (filters ?? {});

  if (!(topic || user)) return images;

  return images.filter((image) => (
    ((topic && image.topics?.includes(topic)) || (!topic && true)) // if no topic skip that filter
    && ((user && image.user === user) || (!user && true)) // if no user skip that filter
  ));
};

const imageRepository = {
  find: (filters?: IImageFilter, options?: IFindOption) => {
    const [start, end] = getSliceBoundaries(options?.limit ?? 10, options?.offset ?? 0);
    const filteredImages = filterImages(filters);

    return {
      data: filteredImages.slice(start, end),
      totalCount: filteredImages.length,
    };
  },
};

export default imageRepository;
