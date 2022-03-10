import images from '../../util/data/images';
import { getSliceBoundaries } from '../../util/helpers';
import { IFindOption } from '../../util/types';
import { IImageFilter, Image } from './types';

const searchFilter = (search: string, image: Image) => (
  image.description?.toLowerCase().includes(search) || image.user.toLowerCase().includes(search)
);

const filterImages = (filters?: IImageFilter) => {
  const { topic, user, search } = (filters ?? {});

  if (!(topic || user || search)) return images;

  return images.filter((image) => (
    // If parameter exist apply the filter other wise skip it by return true (!filter && true)
    ((search && searchFilter(search.toLowerCase(), image)) || (!search && true))
    && ((topic && image.topics?.includes(topic)) || (!topic && true))
    && ((user && image.user.toLowerCase() === user.toLowerCase()) || (!user && true))
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
