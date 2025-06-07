import { redirect } from "@remix-run/node";
import { authCookies } from "./cookie";
import { destroySession, getSession } from "./session";

export const logout = async (request: Request) => {
  const session = await getSession(request.headers.get("Cookie"));

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    await authCookies.serialize("", {
      maxAge: 0,
    })
  );
  headers.append("Set-Cookie", await destroySession(session));

  return redirect("/login", {
    headers,
  });
};
