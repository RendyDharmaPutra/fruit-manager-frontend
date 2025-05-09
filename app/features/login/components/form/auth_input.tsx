import { TextBox } from "~/core/components/form/text_box";
import { useLoginValidate } from "../../context/login_validdate_error_context";
import { PasswordField } from "~/core/components/form/password_field";

type AuthInputProps = {};

export const AuthInput: React.FC<AuthInputProps> = () => {
  const { validationError } = useLoginValidate();

  return (
    <section className="flex flex-col gap-4 lg:gap-6 w-full h-fit ">
      <TextBox
        id="username"
        label="Username"
        placeholder="username"
        type="text"
        error={validationError?.username}
      />
      <PasswordField error={validationError?.password} />
    </section>
  );
};
