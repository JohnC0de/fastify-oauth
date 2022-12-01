import { afterAll, expect, test } from "vitest"

import server from "../src/server.js"
import { usersData } from "../test/mock/user.js"

test("with HTTP injection", async () => {
  const response = await server.inject({
    method: "GET",
    url: "/users"
  })

  expect(response.statusCode).toBe(200)
  expect(JSON.parse(response.payload)).toHaveLength(4)
  expect(JSON.parse(response.payload)).toStrictEqual(usersData)
})

afterAll(async () => {
  await server.close()
})
