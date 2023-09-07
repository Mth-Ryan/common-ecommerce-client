export type TokenClaims = {
    jti: string
    userId: string,
    sub: string,
    email: string,
    fullName: string,
    role: "user" | "mangr" | "admin",
    nbf: number,
    exp: number,
    iat: number,
    iss: string,
    aud: string,
}
