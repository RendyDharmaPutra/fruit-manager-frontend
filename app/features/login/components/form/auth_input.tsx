import { TextBox } from "~/core/components/form/text_box";

type AuthInputProps = {};

export const AuthInput: React.FC<AuthInputProps> = () => {
  return (
    <section className="flex flex-col gap-4 lg:gap-6 w-full h-fit ">
      <TextBox
        id="username"
        label="Username"
        placeholder="username"
        type="text"
      />
      <TextBox
        id="password"
        label="Password"
        placeholder="password"
        type="password"
      />
    </section>
  );
};
