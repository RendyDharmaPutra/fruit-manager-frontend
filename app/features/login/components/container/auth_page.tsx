import { AuthForm } from "../form/auth_form";

type AuthPageProps = {};

export const AuthPage: React.FC<AuthPageProps> = () => {
  return (
    <section className="lg:px-6 lg:py-16 flex flex-col items-center lg:justify-center gap-8 lg:gap-9 w-full lg:w-[460px] rounded-[10px] lg:shadow-xl lg:border ">
      <h6 className="font-bold text-3xl text-primary">Halaman Login</h6>
      <AuthForm />
    </section>
  );
};
