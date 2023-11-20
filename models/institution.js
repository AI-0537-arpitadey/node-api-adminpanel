import mongoose from 'mongoose'

const InstitutionSchema = new mongoose.Schema({

  // Reference to the associated user
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  companyName: {
    type: String,
    required: true
  },

  adminName: {
    type: String,
    required: true
  },

  address: String,

  primaryEmail: {
    type: String,
    required: true
  },

  phoneNumber: String,

  // accessOptions: {
  //   usernamePassword: {
  //     type: Boolean,
  //     default: false
  //   },
  //   proxy: {
  //     type: Boolean,
  //     default: false
  //   },
  //   ipAuthentication: {
  //     type: Boolean,
  //     default: false
  //   },
  //   libraryCardNumber: {
  //     type: Boolean,
  //     default: false
  //   }
  // },

  analytics: {

  }
})

InstitutionSchema.set("timestamps", true)
InstitutionSchema.set("toJSON", { virtuals: true })
InstitutionSchema.set("toObject", { virtuals: true })


const Institution = mongoose.model('Institution', InstitutionSchema);


export { Institution }

