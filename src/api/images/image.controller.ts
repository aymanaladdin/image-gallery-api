import express from 'express';
import imageService from './image.service';
import { IListImageQuery } from './types';

const imageController = {
  async listImages(req: express.Request, res: express.Response) {
    const query = req.query as IListImageQuery;

    const pagination = { page: query.page, perPage: query.per_page };
    const filter = { topic: query.topic, user: query.user };

    const response = imageService.listImages(filter, pagination);

    return res.status(200).json(response);
  },

};

export default imageController;
