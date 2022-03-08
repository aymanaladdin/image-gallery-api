import express from 'express';
import topicService from './topic.service';
import { ITopiListQuery } from './types';

const deviceController = {
  async listTopics(req: express.Request, res: express.Response) {
    const query = req.query as ITopiListQuery;

    const pagination = { page: query.page, perPage: query.per_page };
    const response = topicService.listTopics(pagination);

    return res.status(200).json(response);
  },

};

export default deviceController;
