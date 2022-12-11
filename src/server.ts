import { fastify } from "fastify"
import { oauthRoutes } from "./routes/oauth.routes.js"
import { userRoutes } from "./routes/user.routes.js"
import logger from "./utils/logger/pino.js"

const server = fastify({ logger })

server.register(oauthRoutes, { prefix: "/oauth" })
server.register(userRoutes)

export default server
