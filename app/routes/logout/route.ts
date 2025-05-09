import { redirect } from "@remix-run/node";
import { logout } from "~/core/utils/auth/logout";

export async function loader() {
  return redirect("/");
}

export async function action() {
  return logout();
}
