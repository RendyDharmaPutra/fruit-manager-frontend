import { json } from "@remix-run/react";
import { Error } from "~/core/components/container/error_container";

export function loader() {
  return json({ is404: true }, { status: 404 });
}

export default function NotFoundPage() {
  return <Error title="Halaman tidak ditemukan" />;
}
