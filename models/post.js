import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2';


const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    // required: true,
    description: "Title of the post.",
  },

  content: {
    type: String,
    // required: true,
    description: "Content of the post.",
  },

  contentUrls: {
    type: [String],
    required: false,
    description: "Either content or contentUrl must be given",
  },

  // postSection: {
  //   type: String,
  //   required: true,
  //   enum: ["article", "data", "gallery"],
  //   description: "Section on the website (navbar) where this Post will be shown",
  // },

  // postType: {
  //   type: String,
  //   required: true,
  //   // enum: [],
  //   description: "Type of the post (e.g., video, image, audio, etc).",
  // },

  isHighlighted: {
    type: Boolean,
    default: false,
    description: "Flag to indicate if the post is highlighted.",
  },

  // category: {
  //   type: String,
  //   required: true,
  //   description: "Category of the post (e.g., Topic Center, Videos, Newsroom).",
  // },

  _tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  }]

})

PostSchema.index({ title: "text", content: "text", contentUrls: "text" })

PostSchema.plugin(mongoosePaginate)

PostSchema.set("timestamps", true)
PostSchema.set("toJSON", { virtuals: true })
PostSchema.set("toObject", { virtuals: true })

const Post = mongoose.model('Post', PostSchema);


export { Post }