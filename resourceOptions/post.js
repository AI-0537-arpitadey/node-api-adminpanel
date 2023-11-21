import { Post } from '../models/post.js'


const postOpt = {
  resource: Post,
  options: {
    properties: {
      id: { isVisible: { list: false, show: true } },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
      content: {
        type: 'richtext',
      }
    },
    
  }
}

export { postOpt }

