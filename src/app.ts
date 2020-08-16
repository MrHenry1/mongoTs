import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


import router from './router.ts'

const app = express()

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})


app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.PORT, () => console.log('Serving at 9999 Hehe Alright!'))

