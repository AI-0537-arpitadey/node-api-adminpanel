import { Institution } from '../models/institution.js'


const institutionOpt = {
  resource: Institution,
  options: {
      properties: {
      _id: { isVisible: { list: false, show: true, filter: true, edit: false } },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      }
    
  }
}

export { institutionOpt }

