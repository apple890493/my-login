const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const matchUser = require('./login')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const userInfo = req.body
  const result = matchUser(userInfo)
  if (!result) {
    res.render('index', { alert: true })
  } else {
    res.render('workit', { result, userInfo })
  }
})

app.listen(3000, () => {
  console.log('localhost:3000')
})