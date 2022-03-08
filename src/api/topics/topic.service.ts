import { getTotalPages } from '../../util/helpers';
import { IPagination } from '../../util/types';
import topicRepository from './topic.repository';

const topicService = {
  listTopics: (pagination: IPagination) => {
    const { page, perPage } = pagination;

    const { data, totalCount } = topicRepository
      .find({ limit: perPage, offset: (page - 1) * perPage });

    const totalPages = getTotalPages(totalCount, perPage);

    return { data, pagination: { ...pagination, totalPages } };
  },
};

export default topicService;
