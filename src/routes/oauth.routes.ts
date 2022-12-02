import { FastifyInstance } from "fastify"
import { createCode, createProfile, createToken, refreshToken } from "../controllers/oauth.controller.js"

async function userRouter(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/oauth/profile",
    handler: createProfile
  })

  fastify.route({
    method: "POST",
    url: "/oauth/code",
    handler: createCode
  })

  fastify.route({
    method: "POST",
    url: "/oauth/token",
    handler: createToken
  })

  fastify.route({
    method: "POST",
    url: "/oauth/token/refresh",
    handler: refreshToken
  })
}

export default userRouter
