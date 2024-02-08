//1. import json server
const jsonServer = require('json-server')

//2. create a server
const server = jsonServer.create()

//3. setup path for db.json file
const router = jsonServer.router('db.json')

//  4.setup middleware used by json server
const middleware = jsonServer.defaults()

//5.setup port for server
const port = process.env.port || 3001

//6. use middleware and router
server.use(middleware)
server.use(router)

//7.To run the server
server.listen(port,()=>{
  console.log('listening on port'+port);
})