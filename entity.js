import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

export { Category }














// const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

// const CategorySchema = new Schema(
//   {
//     title: { type: 'String', required: true },
//   },
//   { timestamps: true }
// );

// const Category = model('Category', CategorySchema);

// module.exports = {
//   Category,
// };


// category.entity.js

