import { IFindOption } from '../../util/types';
import topicCache from '../../util/data/topic-cache';
import { getSliceBoundaries } from '../../util/helpers';

const topicRepository = {
  find: (options?: IFindOption) => {
    const [start, end] = getSliceBoundaries(options?.limit ?? 10, options?.offset ?? 0);

    return {
      data: topicCache.data.slice(start, end),
      totalCount: topicCache.data.length,
    };
  },

};

export default topicRepository;
