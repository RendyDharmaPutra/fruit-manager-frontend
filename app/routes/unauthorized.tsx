import { useNavigate } from "@remix-run/react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "~/core/components/ui/button";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex justify-center w-full h-screen ">
      <section className="p-3 md:p-4 flex flex-col items-center gap-3 md:gap-5 w-[32rem] h-fit rounded-md border">
        <section className="p-3 w-fit h-fit rounded-full bg-danger/10">
          <AlertCircle className="w-8 h-8 text-danger" />
        </section>

        <section className="flex flex-col items-center gap-1 w-full ">
          <h6 className="font-semibold text-lg md:text-xl text-gray-900">
            Akses ditolak
          </h6>
          <p className="text-sm text-gray-700">
            Anda tidak memiliki Hak Akses di sini
          </p>
        </section>

        <section className="flex center w-full ">
          <Button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
            variant={"link"}
          >
            <ArrowLeft />
            Kembali ke Halaman sebelumnya
          </Button>
        </section>
      </section>
    </div>
  );
}
