import { Category } from '../entity.js'


const categoryOpt = {
  resource: Category,
  options: {
    properties: {
      description: {
        type: "richtext",
      },
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
  },
};

export { categoryOpt }
