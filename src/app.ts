import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import router from './router.ts'

const app = express()

mongoose.connect('mongodb+srv://henry:99099ae@users.vkrty.mongodb.net/MongoTs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
})


app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.PORT || 9999, () => console.log('Serving at 9999 Hehe Alright!'))

