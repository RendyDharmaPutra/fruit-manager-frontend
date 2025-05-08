import { TextBox } from "~/core/components/form/text_box";
import { useLoginValidate } from "../../context/error_stuff_context";

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
      <TextBox
        id="password"
        label="Password"
        placeholder="password"
        type="password"
        error={validationError?.password}
      />
    </section>
  );
};
