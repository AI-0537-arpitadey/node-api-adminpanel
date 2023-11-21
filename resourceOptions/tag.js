import { Tag } from '../models/tag.js'


const tagOpt = {
  resource: Tag,
  options: {
    properties: {
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
  }
}

export { tagOpt }
