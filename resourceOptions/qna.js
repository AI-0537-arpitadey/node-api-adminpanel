import { QandA } from '../models/qna.js'


const qnaOpt = {
  resource: QandA,
  options: {
    properties: {
      createdAt: { isVisible: false },
      updatedAt: { isVisible: false },
    },
    
  },
};

export { qnaOpt }
