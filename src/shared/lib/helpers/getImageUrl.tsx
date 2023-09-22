import { config } from '../config';

export const getImageUrl = (imageId: number) => {
  return `${config.API_ENDPOINT}/file/${imageId}`;
};
