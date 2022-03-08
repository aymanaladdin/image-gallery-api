import data from '../../util/data';
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
    const images = filterImages(filters);

    return {
      data: images.slice(options?.offset ?? 0, (options?.limit ?? 10) + 1),
      totalCount: images.length,
    };
  },
};

export default imageRepository;
