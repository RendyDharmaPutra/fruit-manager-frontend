import { AuthPage } from "~/features/login/components/container/auth_page";
import type { ActionFunctionArgs } from "@remix-run/node";
import { loginAction } from "~/features/login/utils/loginAction";
import { redirect, useActionData } from "@remix-run/react";
import { showStandardToast } from "~/core/lib/hooks/show_standard_toast";
import { authCookies } from "~/core/utils/auth/cookie";
import { LoginValidateProvider } from "~/features/login/context/login_validdate_error_context";
import { commitSession, getSession } from "~/core/utils/auth/session";
import { setAuthSession } from "~/core/utils/auth/set_auth_session";
import { jwtParse } from "~/core/utils/auth/jwt_parse";
import { useEffect } from "react";

export default function Login() {
  const actionRes = useActionData<typeof action>();

  useEffect(() => {
    if (actionRes != undefined) {
      showStandardToast(actionRes);
    }
  }, [actionRes]);

  return (
    <LoginValidateProvider>
      <div className="px-6 py-[156px] lg:p-0 flex flex-col items-center lg:center w-full h-screen ">
        <AuthPage actionRes={actionRes} />
      </div>
    </LoginValidateProvider>
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
    const token = res.data.token;

    const session = await getSession();

    const payload = await jwtParse(token);
    setAuthSession(session, payload);

    const headers = new Headers();
    headers.append("Set-Cookie", await authCookies.serialize(token));
    headers.append("Set-Cookie", await commitSession(session));

    return redirect("/", {
      headers,
    });
  }

  return res as FailedResponseType<string | FailedValidationType>;
}
