import { redirect } from "@remix-run/node";
import { authCookies } from "./cookie";

export const getTokenCookie = async (request: Request) => {
  const cookieString = request.headers.get("Cookie");
  let token = await authCookies.parse(cookieString);

  if (!token) {
    throw redirect("/login");
  }

  return token;
};
