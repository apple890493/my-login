const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session') //引入 express-session
const matchUser = require('./login')

const app = express()


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
//設置session的參數
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 1000 }
}))

app.get('/', (req, res) => {
  if (req.session.userName) {
    const result = req.session.userName
    res.render('workit', { result })
  } else {
    res.render('index')
  }
})

app.post('/', (req, res) => {
  const userInfo = req.body
  const result = matchUser(userInfo)
  if (!result) {
    res.render('index', { alert: true })
  } else {
    req.session.userName = result
    res.render('workit', { result, userInfo })
  }
})

app.post('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/');
})

app.listen(3000, () => {
  console.log('localhost:3000')
})