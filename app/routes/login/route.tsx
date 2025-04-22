import { AuthPage } from "~/features/login/components/container/auth_page";
import type { ActionFunctionArgs } from "@remix-run/node";

export default function Login() {
  return (
    <div className="px-6 py-[156px] lg:p-0 flex flex-col items-center lg:center w-full h-screen ">
      <AuthPage />
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();

  console.log(body);

  return {};
}
