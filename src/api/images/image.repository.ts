import images from '../../util/data/images';
import { getSliceBoundaries } from '../../util/helpers';
import { IFindOption } from '../../util/types';
import { IImageFilter } from './types';

const filterImages = (filters?: IImageFilter) => {
  const { topic, user, search } = (filters ?? {});

  if (!(topic || user || search)) return images;

  return images.filter((image) => (
    ((search && image.description?.includes(search)) || (!search && true)) // skip if no search
    && ((topic && image.topics?.includes(topic)) || (!topic && true)) // skip if no topic
    && ((user && image.user === user) || (!user && true)) // skip if no user
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
