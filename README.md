# Fastify OAuth

The idea of this project is to learn how to build a fast server to be used as a complete OAuth2 server.

## Features

- [x] User registration and login with Credential Authentication
- [x] Creation of profiles to be used as OAuth2 clients
- [x] Application Code Grant
- [x] Access token and Refresh token Grant
- [x] Token expiration and Token revocation
- [x] Protected routes
- [x] And many more...

## Technologies used

- [Bun](https://bun.sh) as a runtime instead of Node.js
- [TypeScript](https://www.typescriptlang.org) for type safety (This is a modern and secure way to write JavaScript)
- [Fastify](https://fastify.io) as a web framework that is faster and has a better UX than Express
- [Zod](https://zod.dev) for data validation and type inference (instead of JSON Schema for example)
- [Prisma](https://prisma.io) as an ORM for a sqlite database (This enable us to create a local database for development that is lightweight and easy to use)
- [Argon2](https://github.com/ranisalt/node-argon2#readme) for password hashing and verification (This is a modern and secure password hashing algorithm)
- [Pino](https://getpino.io) for logging (This is a fast and simple logger)
- [Pino-pretty](https://github.com/pinojs/pino-pretty) for pretty logging (This transforms the logs from pino into a more readable format to be used in development)
- [Vitest](http://vitest.dev) for testing (This is a fast and simple testing framework)

---

## Getting started

### Prerequisites

- [x] - [Bun](https://bun.sh) v0.2.2 or higher installed (Bun has typescript native support and a built-in package manager)

### Installation

1. Clone the repo
2. Install dependencies with `bun install`
3. Apply migrations, seed and generate typings with `bun run db:setup`
4. Run the dev script with `bun run dev`

## Testing

Testing is done with [Vitest](http://vitest.dev). To run the tests, run `bun run test`, to check the coverage, run `bun run coverage`.

## Building

- To build the project, run `bun run build`. This will create a `dist` folder with the compiled code. To run the compiled code, run `bun run start`.

### Why should I build the project when I can run it with `bun run dev`?

The `bun run dev` command is meant to be used for development, it is not meant to be used in production. The `bun run build` command is meant to be used in production, it will compile the project into JavaScript and will be much faster than running it with `bun run dev`.

---

## Contact

  <a href="https://discordapp.com/users/167742409822830592">
    <img
      src="https://img.shields.io/static/v1?label=Discord&message=Ninjonas%236919&color=black&logo=discord&colorA=white&style=for-the-badge"
      alt="Discord -
    Ninjonas#6919">
  </a>
  <a href="https://www.linkedin.com/in/joaocarloscode/">
    <img
      src="https://img.shields.io/static/v1?label=LinkedIn&message=joaocarloscode&color=black&style=for-the-badge&logo=linkedin&logoColor=blue&colorA=white"
      alt="LinkedIn -
    joaocarloscode">
  </a>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the Unlicense License. See `LICENSE` for more information.
