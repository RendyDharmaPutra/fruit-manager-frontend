import { updateValidationError } from "~/core/lib/hooks/update_validation_error";
import { useLoginValidate } from "../../context/error_stuff_context";
import { AuthForm } from "../form/auth_form";

type AuthPageProps<T> = {
  actionRes?: T;
};

export const AuthPage = <T extends RawResponseType>(
  props: AuthPageProps<T>
) => {
  const { setValidationError } = useLoginValidate();

  updateValidationError(setValidationError, props.actionRes);

  return (
    <section className="lg:px-6 lg:py-16 flex flex-col items-center lg:justify-center gap-8 lg:gap-9 w-full lg:w-[460px] rounded-[10px] lg:shadow-xl lg:border ">
      <h6 className="font-bold text-3xl text-primary">Halaman Login</h6>
      <AuthForm />
    </section>
  );
};
