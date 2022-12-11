import { afterAll, describe, it, expect } from "vitest"
import server from "../src/server.js"

// Temporary Test of all user routes
describe("Testing all user routes", () => {
  it("should return the statusCode 422 if the body of a post request is invalid", async () => {
    const routes = ["/login", "/register"]

    routes.forEach(async url => {
      const response = await server.inject({ method: "post", url })
      expect(response.statusCode).toBe(422)
      await server.close()
    })
  })
})
