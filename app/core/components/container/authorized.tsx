import { useAuth } from "~/core/lib/hooks/use_auth";

type AuthorizedProps = {
  children: React.ReactNode;
  roles: "MANAGER" | "CASHIER";
};

export function Authorized({ children, roles }: AuthorizedProps) {
  const user = useAuth();

  if (!user) return null;
  if (roles && !roles.includes(user.role)) return null;

  return <>{children}</>;
}
