import { Post } from '../models/post.js';

const postOpt = {
  resource: Post,
  options: {
    properties: {
      _id: {
        isVisible: { list: false, show: true, filter: true, edit: false },
      },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
      content: {
        type: 'richtext',
      },
    },
    actions: {
      delete: {
        isVisible: false,
      },
    },
  },
};

export { postOpt };
