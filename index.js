import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import mongoose from 'mongoose'
import * as AdminJSMongoose from '@adminjs/mongoose'

import { categoryOpt } from './resourceOptions/category.js'
import { qnaOpt } from './resourceOptions/qna.js'


import express from 'express';

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
})

const start = async () => {
  const PORT = 4000;
  await mongoose.connect('mongodb://localhost:27017/nodeadmin')

  const adminOptions = {
    // We pass Category to `resources`
    resources: [
      categoryOpt,
      qnaOpt
    ],
  }

  const app = express()

  const admin = new AdminJS(adminOptions)

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()




