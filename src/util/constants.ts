export const API_VERSION = '/api/v1';

export const TOPIC_PATH = '/topics';

export const IMAGES_PATH = '/images';

export const MIN_PAGE = 1;

export const MIN_PER_PAGE = 5;

export const MAX_PER_PAGE = 100;

export const DEFAULT_PAGE = 1;

export const DEFAULT_PER_PAGE = 25;

export const HOST_NAME = process.env.NODE_ENV === 'production' ? 'https://pixsy-image-api.herokuapp.com' : 'http://localhost:5000';
