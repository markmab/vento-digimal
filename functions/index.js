const functions = require('firebase-functions')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const reviewers = require('./routes/reviewers')
const posts = require('./routes/posts')
const leads = require('./routes/leads')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

app.use('/static', express.static('public'))

app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`)
})
app.get('/timestamp', (request, response) => {
  response.set('public', 'max-age=31536000, s-maxage=31536000')
  response.send(`${Date.now()}`)
})

const resolver = (req, res) => {
  res.render('posts/single-post')
}

app.get('/', resolver)

app.use('/posts', posts)
app.use('/reviewers', reviewers)
app.use('/leads', leads)

exports.app = functions.https.onRequest(app)

// app.listen('5000', (err) => {
//   if (err) {
//     console.log(err)
//   }
// })
