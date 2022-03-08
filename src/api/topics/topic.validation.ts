import Joi from 'joi';
import {
  DEFAULT_PAGE, DEFAULT_PER_PAGE,
  MAX_PER_PAGE, MIN_PAGE, MIN_PER_PAGE,
} from '../../util/constants';

const listTopicSchema = Joi.object({
  query: Joi.object()
    .keys({
      page: Joi.number().min(MIN_PAGE).default(DEFAULT_PAGE),
      per_page: Joi.number().min(MIN_PER_PAGE).max(MAX_PER_PAGE).default(DEFAULT_PER_PAGE),
    }),
});

export default listTopicSchema;
