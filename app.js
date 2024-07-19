const jsonServer = require('json-server')
const path = require('path')

const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'dist'),
})

const port = process.env.PORT || 3001
app.use(middlewares)
app.use(router)

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is running on ${port}`)
})

app.get('/health', (req, res) => {
  res.send('ok')
})
