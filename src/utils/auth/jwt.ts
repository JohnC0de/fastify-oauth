import { createSigner, createVerifier } from "fast-jwt"

export const signSync = createSigner({ key: "anySecretKeyString" })

export const verifySync = createVerifier({ key: "anySecretKeyString" })
