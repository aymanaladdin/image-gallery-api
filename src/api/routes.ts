import { Router } from 'express';
import { IMAGES_PATH, TOPIC_PATH } from '../util/constants';
import topicRoutes from './topics/topic.routes';
import imageRoutes from './images/image.routes';

const appRoutes = Router();

appRoutes.use(TOPIC_PATH, topicRoutes);
appRoutes.use(IMAGES_PATH, imageRoutes);

export default appRoutes;
