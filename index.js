import express from "express"
import mongoose from "mongoose"

import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import * as AdminJSMongoose from "@adminjs/mongoose"

// all resource options
import { qnaOpt } from "./resourceOptions/qna.js"
import { tagOpt } from "./resourceOptions/tag.js"
import { postOpt } from "./resourceOptions/post.js"
// import { userOpt } from "./resourceOptions/user.js"
// import { institutionOpt } from "./resourceOptions/institution.js"




AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

// connect to database
const start = async () => {
  const PORT = 4000
  await mongoose.connect("mongodb://localhost:27017/UFO-Encyclopedia-API")

  const app = express()

  app.use(express.static('public'));
  const adminOptions = {
    branding: {
      companyName: 'Aggregate Intelligence',
      
    },
   
    //pass Category to `resources`
    resources: [
      qnaOpt,
      tagOpt,
      postOpt
      // userOpt,
      // institutionOpt,
    ],
  }


  const admin = new AdminJS(adminOptions)

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()
