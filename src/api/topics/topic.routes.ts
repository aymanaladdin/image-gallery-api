import { Router } from 'express';
import apiValidateMiddleware from '../../util/validator';
import deviceController from './topic.controller';
import listTopicSchema from './topic.validation';

const deviceRoutes = Router({ mergeParams: true });

deviceRoutes.get('/', apiValidateMiddleware(listTopicSchema), deviceController.listTopics);

export default deviceRoutes;
