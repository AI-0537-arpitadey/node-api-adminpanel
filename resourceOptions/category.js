import { Category } from '../entity.js'


const categoryOpt = {
  resource: Category,
  options: {
    properties: {
      description: {
        type: 'richtext',
      }
    }
  }
}

export { categoryOpt }
