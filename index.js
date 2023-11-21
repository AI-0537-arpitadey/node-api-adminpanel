import express from "express"
import mongoose from "mongoose"

import AdminJS from "adminjs"
import AdminJSExpress from "@adminjs/express"
import * as AdminJSMongoose from "@adminjs/mongoose"

// all resource options

// import { categoryOpt } from "./resourceOptions/category.js"
// import { userOpt } from "./resourceOptions/user.js"
import { qnaOpt } from "./resourceOptions/qna.js"
// import { institutionOpt } from "./resourceOptions/institution.js"
import { tagOpt } from "./resourceOptions/tag.js"
import { postOpt } from "./resourceOptions/post.js"

// custome dashboard 
// import CustomDashboard from './custom-dashboard-component.js'; 


AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

// connect to database
const start = async () => {
  const PORT = 4000
  await mongoose.connect("mongodb://localhost:27017/UFO-Encyclopedia-API")

  const app = express()

  const adminOptions = {
    branding: {
      companyName: 'Aggregate Intelligence',
      softwareBrothers: {
        logo: './logo.png', 
      },
    },
    // dashboard: {
    //   component: CustomDashboard, 
    // },
    // We pass Category to `resources`
    resources: [
      // categoryOpt,
      // userOpt,
      qnaOpt,
      // institutionOpt,
      tagOpt,
      postOpt
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
