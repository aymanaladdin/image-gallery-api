import { Topic } from '../../api/topics/types';
import images from './images';

const topicCache: { data: Topic[] } = {
  data: [],
};

const initCache = () => {
  const topicMap = new Map<string, { url: string }[]>();

  images.forEach((image) => {
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

  return topicCache;
};

export default initCache();
