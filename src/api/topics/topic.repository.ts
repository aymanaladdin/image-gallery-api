import data from '../../util/data';
import { IFindOption } from '../../util/types';
import { Topic } from './types';

const topicCache: { data: Topic[] } = {
  data: [],
};

const initCache = () => {
  const topicMap = new Map<string, { url: string }[]>();

  data.images.forEach((image) => {
    image.topics?.forEach((topic) => {
      if (topicMap.has(topic)) {
        const collages = topicMap.get(topic);

        if (collages && collages.length < 4) {
          collages.push({ url: image.url });
        }
      } else {
        const collages = [{ url: image.url }];
        topicMap.set(topic, collages);
      }
    });
  });

  const topics: Topic[] = [];

  topicMap.forEach((collages, topic) => {
    topics.push({ name: topic, collages });
  });

  topicCache.data = topics.sort();
};

initCache();

const topicRepository = {
  find: (options?: IFindOption) => ({
    data: topicCache.data.slice(options?.offset ?? 0, (options?.limit ?? 10) + 1),
    totalCount: topicCache.data.length,
  }),

};

export default topicRepository;
