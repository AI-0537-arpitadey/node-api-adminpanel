import { Tag } from '../models/tag.js'


const tagOpt = {
  resource: Tag,
  options: {
    properties: {
      _id: { isVisible: { list: false, show: true, filter: true, edit: false } },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
    actions: {
      delete: {
        // icon: 'View',
        isVisible: false
      },
  }
}
}

export { tagOpt }
