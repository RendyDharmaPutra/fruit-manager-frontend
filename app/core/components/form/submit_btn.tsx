import { useNavigation } from "@remix-run/react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {};

export const SubmitBtn: React.FC<SubmitBtnProps> = () => {
  const { state } = useNavigation();
  const pending = state === "submitting";

  return (
    <Button
      disabled={pending}
      type="submit"
      className={`w-full bg-primary ${pending && "bg-secondary"}`}
    >
      {pending && <Loader2 className="animate-spin" />}
      Login
    </Button>
  );
};
