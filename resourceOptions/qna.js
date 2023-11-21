import { QandA } from '../models/qna.js'


const qnaOpt = {
  resource: QandA,
  options: {
    properties: {
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
    actions: {
      delete: {
        isAccessible: true,
      }
    }
  }
}

export { qnaOpt }





