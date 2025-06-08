import {
  isRouteErrorResponse,
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";

import "./tailwind.css";
import { Toaster } from "./core/components/ui/toaster";
import { NavigationBar } from "./core/components/layout/navigation/navigation_bar";
import { validateRequest } from "./core/utils/auth/validate_request";
import { useSafeUser } from "./core/lib/hooks/use_safe_user";
import { Error } from "./core/components/container/error_container";

export const meta: MetaFunction = () => {
  return [
    { title: "Fruit Manager" },
    { name: "description", content: "Fruit Manager" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // Skip auth untuk route 404
  if (url.pathname.startsWith("/404")) {
    return json({ user: null });
  }

  const user = await validateRequest(request);
  return json({ user });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const user = useSafeUser();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {location.pathname !== "/login" && <NavigationBar user={user!} />}
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <Error title="Halaman tidak ditemukan" />;
  }

  return <Error title="Terjadi Kesalahan" />;
}

export default function App() {
  return <Outlet />;
}
