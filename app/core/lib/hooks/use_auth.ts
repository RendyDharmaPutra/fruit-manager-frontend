import { useMatches } from "@remix-run/react";

export function useAuth() {
  const matches = useMatches();
  const rootData = matches.find((match) => match.id === "root")?.data as {
    user: UserPayload;
  };
  return rootData?.user;
}
