import { describe, it, expect } from "vitest"
import server from "../src/server.js"

// Temporary Test of all oauth routes
describe("Testing all oauth routes", () => {
  it("should return the statusCode 422 if the body of a post request is invalid", async () => {
    const routes = ["/oauth/profile", "/oauth/code", "/oauth/token", "/oauth/token/refresh"]

    routes.forEach(async url => {
      const response = await server.inject({ method: "post", url })
      expect(response.statusCode).toBe(422)
      await server.close()
    })
  })
})
