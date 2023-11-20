import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';


const TagSchema = new mongoose.Schema({

  name: String,

  _parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
    default: null
  },

  taxonomy: {}

})

TagSchema.plugin(mongoosePaginate)

TagSchema.set("timestamps", true)
TagSchema.set("toJSON", { virtuals: true })
TagSchema.set("toObject", { virtuals: true })

const Tag = mongoose.model('Tag', TagSchema);


export { Tag }
