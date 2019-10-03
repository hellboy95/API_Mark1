let express = require('express')

let app = express()

let personRouter = require('./routes/person')

app.use((req,res,next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`)
  next()
})
app.use(personRouter)
app.use(express.static('public'))

// 404 Error Handler
app.use((req,res,next) => {
  res.status(404).send('Service not found')
  next()
})

//500 Error Handler
app.use((req,res,next) => {
  res.status(500).send('Server down - Internal server error ( Try restarting your server)')
  next()
})
//app.use(personRouter)
const PORT = process.env.port || 3000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
