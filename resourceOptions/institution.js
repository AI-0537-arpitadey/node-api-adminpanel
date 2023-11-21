import { Institution } from '../models/institution.js'


const institutionOpt = {
  resource: Institution,
  options: {
    
      properties: {
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      }
    
  }
}

export { institutionOpt }

