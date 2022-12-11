import { FastifyInstance } from "fastify"
import { createCode, createProfile, createToken, refreshToken } from "../controllers/oauth.controller.js"

export async function oauthRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: "POST",
    url: "/profile",
    handler: createProfile
  })

  fastify.route({
    method: "POST",
    url: "/code",
    handler: createCode
  })

  fastify.route({
    method: "POST",
    url: "/token",
    handler: createToken
  })

  fastify.route({
    method: "POST",
    url: "/token/refresh",
    handler: refreshToken
  })
}
