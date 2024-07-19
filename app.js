const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'dist'),
})

const port = process.env.PORT || 3001
server.use(middlewares)
server.use(router)

server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server is running on ${port}`)
})
