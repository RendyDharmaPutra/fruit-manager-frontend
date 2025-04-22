import { Button } from "~/core/components/ui/button";
import { AuthInput } from "./auth_input";
import { Form, useFormAction } from "@remix-run/react";
import { SubmitBtn } from "~/core/components/form/submit_btn";

type AuthFormProps = {};

export const AuthForm: React.FC<AuthFormProps> = () => {
  const {} = useFormAction;

  return (
    <Form
      method="post"
      className="flex flex-col items-center gap-6 lg:gap-7 w-full "
    >
      <AuthInput />
      <SubmitBtn />
    </Form>
  );
};
