import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
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
  const user = await validateRequest(request);
  return json({ user });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { user } = useLoaderData<typeof loader>();

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

export default function App() {
  return <Outlet />;
}
