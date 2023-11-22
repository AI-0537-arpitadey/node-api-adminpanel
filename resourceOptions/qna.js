import { QandA } from '../models/qna.js'


const qnaOpt = {
  resource: QandA,
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



export { qnaOpt }





