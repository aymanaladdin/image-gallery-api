import { Router } from 'express';
import apiValidateMiddleware from '../../util/validator';
import deviceController from './image.controller';
import listImageSchema from './image.validation';

const deviceRoutes = Router({ mergeParams: true });

deviceRoutes.get('/', apiValidateMiddleware(listImageSchema), deviceController.listImages);

export default deviceRoutes;
