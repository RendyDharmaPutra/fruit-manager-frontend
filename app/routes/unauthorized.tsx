import { useNavigate } from "@remix-run/react";
import { Error } from "~/core/components/container/error_container";

export default function UnauthorizedPage() {
  return (
    <div className="p-4 flex justify-center w-full h-screen ">
      <Error title="Akses ditolak">
        <p className="text-sm text-gray-700">
          Anda tidak memiliki Hak Akses di sini
        </p>
      </Error>
    </div>
  );
}
