import { createCookieSessionStorage } from "@remix-run/node";

// app/session.server.ts
export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__auth_session",
      secrets: ["SECRET"],
      sameSite: "lax",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 Hari
    },
  });
