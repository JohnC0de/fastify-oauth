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

- [NodeJS](https://nodejs.org) as the runtime environment
- [TypeScript](https://www.typescriptlang.org) for type safety (This is a modern and secure way to write JavaScript)
- [Fastify](https://fastify.io) as a web framework that is faster and has a better UX than Express
- [Zod](https://zod.dev) for data validation and type inference (instead of JSON Schema for example)
- [Prisma](https://prisma.io) as an ORM for a sqlite database (This enable us to create a local database for development that is lightweight and easy to use)
- [Argon2](https://github.com/ranisalt/node-argon2#readme) for password hashing and verification (instead of the commonly used bcrypt, which is slower and less secure)
- [Pino](https://getpino.io) for logging (This is a fast and simple logger)
- [Pino-pretty](https://github.com/pinojs/pino-pretty) for pretty logging (This transforms the logs from pino into a more readable format to be used in development)
- [Vitest](http://vitest.dev) for testing (Instead of Jest, which is slower and has a worse DX)

---

## Getting started

### Prerequisites

- [x] - [NodeJS](https://nodejs.org) v19.2.0 or higher installed (Technically, you can use any version of NodeJS, but I recommend using the latest version)
- [x] - [Pnpm](https://pnpm.io) v7.18.1 or higher installed (This is a package manager that is faster than npm and yarn, but you can use npm or yarn if you want to)

### Installation

1. Clone the repo
2. Install dependencies with `pnpm i`
3. Apply migrations, seed and generate typings with `pnpm db:setup`
4. Run the dev script with `pnpm dev`
5. Use the API with [Postman](https://www.postman.com) or [Insomnia](https://insomnia.rest) or any other API client of your choice

## Testing

Testing is done with [Vitest](http://vitest.dev). To run the tests, run `bun run test`, to check the coverage, run `bun run coverage`.

## Building

- To build the project, run `pnpm build`. This will create a `dist` folder with the compiled code. To run the compiled code, run `pnpm start`.

### Why should I build the project when I can run it with `pnpm dev`?

Bundling is the process of combining multiple files, such as JavaScript or CSS files, into a single file. This allows for fewer requests to the server, which can improve the performance of the website or application.

Minifying is the process of removing unnecessary characters, such as white space, comments, and new lines, from the code to make it smaller and more efficient. This can further improve the performance by reducing the size of the code that needs to be transferred to the user's device.

Together, bundling and minifying can help to optimize the performance of a website or application by reducing the number of requests and the amount of code that needs to be transferred. The pnpm dev command should be used during development, while the pnpm build command, which includes bundling and minifying, should be used in production. This can ensure that the website or application performs well and provides a good user experience.

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
