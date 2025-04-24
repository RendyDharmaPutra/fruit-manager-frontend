import { createCookie } from "@remix-run/node";

export const authCookies = await createCookie("jwt", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24
})