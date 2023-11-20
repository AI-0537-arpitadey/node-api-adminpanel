import mongoose from 'mongoose'

const QandASchema = new mongoose.Schema({

  question: {
    type: String,
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },

  topic: {
    type: String,
    required: true
  },

  isDeleted: {
    type: Boolean,
    default: false
  }

})

QandASchema.set("timestamps", true)
QandASchema.set("toJSON", { virtuals: true })
QandASchema.set("toObject", { virtuals: true })

const QandA = mongoose.model('QandA', QandASchema);


export { QandA }