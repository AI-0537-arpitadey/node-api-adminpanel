import mongoose from 'mongoose'
import bcrypt from "bcrypt";
import randomstring from "randomstring";

// const bcrypt = require("bcrypt")
// const randomstring = require("randomstring")

// const mailer = require("../lib/mail")

const UserSchema = new mongoose.Schema({

  handle: { // this only use for user login
    type: String,
    // lowercase: true,
    unique: true,
    description: "this only use for user login"
    // required: true
  },

  email: {
    type: String,
    lowercase: true
  },

  // phone: {
  //   type: String
  // },

  password: {
    type: String,
    required: true
  },

  isActive: {
    type: Boolean,
    default: true
  },

  name: {
    first: {
      type: String,
    },
    last: {
      type: String
    },
  },

  forgotpassword: {
    requestedAt: { type: Date, default: null },
    token: { type: String, default: null },
    expiresAt: { type: Date, default: null }
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  lastModifiedAt: {
    type: Date,
    default: Date.now
  },

  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },

  userType: {
    type: String,
    required: true,
    enum: ["user", "admin", "superAdmin"]
  },

  _institution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
  },

  // isDeleted: {
  //   type: Boolean,
  //   default: false
  // }
})

UserSchema.pre("validate", function (next) {
  if (this.isNew) {
    if (this.password === undefined || this.password === null) {
      this.generatedPassword = randomstring.generate(8) // for usage in post save hook to send welcome email
      this.password = this.generatedPassword
    }
  }
  return next()
})

// Hash & save user's password:
UserSchema.pre("save", async function (next) {
  const user = this
  if (this.isModified("password") || this.isNew) {
    try {
      user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS || 10)
    } catch (error) {
      return next(error)
    }
  }
  return next()
})

// compare two passwords:
UserSchema.methods.comparePassword = async function (pw) {
  const isMatch = await bcrypt.compare(pw, this.password)
  if (isMatch === false) throw new Error("Credential Mismatch!")
}
// eslint-disable-next-line prefer-arrow-callback
// UserSchema.post("save", function (doc) {
//   if (doc.generatedPassword !== undefined) {
//     // Send welcome email, but NO WAITING!
//     mailer("welcome", {
//       to: doc.email,
//       subject: "Welcome!!!",
//       locals: { email: doc.email, password: doc.generatedPassword, name: doc.name }
//     })
//   }
// })

UserSchema.virtual("name.full").get(function () {
  const first = (this.name.first === undefined || this.name.first === null)
    ? ""
    : this.name.first
  const last = (this.name.last === undefined || this.name.last === null)
    ? ""
    : ` ${this.name.last}`
  return `${first}${last}`
})
UserSchema.virtual("name.full").set(function (v) {
  this.name.first = v.substr(0, v.indexOf(" "))
  this.name.last = v.substr(v.indexOf(" ") + 1)
})

UserSchema.set("timestamps", true)
UserSchema.set("toJSON", { virtuals: true })
UserSchema.set("toObject", { virtuals: true })

const User = mongoose.model('User', UserSchema)

export { User }
