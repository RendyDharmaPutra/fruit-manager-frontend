import { useMatches } from "@remix-run/react";

export function useSafeUser() {
  const matches = useMatches();
  const rootMatch = matches.find((match) => match.id === "root") as {
    data: { user: UserPayload };
  };
  return rootMatch?.data?.user || null; // Default null jika tidak ada
}
