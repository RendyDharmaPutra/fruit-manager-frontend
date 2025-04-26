import { AuthPage } from "~/features/login/components/container/auth_page";
import type { ActionFunctionArgs } from "@remix-run/node";
import { loginAction } from "~/features/login/utils/loginAction";
import { redirect, useActionData } from "@remix-run/react";
import { showStandardToast } from "~/core/lib/hooks/show_standard_toast";
import { authCookies } from "~/core/utils/auth/cookie";

export default function Login() {
  const actionRes = useActionData<typeof action>();

  actionRes !== undefined && showStandardToast(actionRes);

  return (
    <div className="px-6 py-[156px] lg:p-0 flex flex-col items-center lg:center w-full h-screen ">
      <AuthPage />
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const user: User = {
    username: String(formData.get("username")),
    password: String(formData.get("password")),
  };

  const res = await loginAction(user);

  if (res.success) {
    return redirect("/", {
      headers: {
        "Set-Cookie": await authCookies.serialize(res.data.token),
      },
    });
  }

  return res as FailedResponseType<string | FailedValidationType>;
}
