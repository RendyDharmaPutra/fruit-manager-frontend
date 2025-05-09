import { redirect } from "@remix-run/node";
import { authCookies } from "./cookie";

export const logout = async () => {
  return redirect("/login", {
    headers: {
      "Set-Cookie": await authCookies.serialize("", {
        maxAge: 0,
      }),
    },
  });
};
