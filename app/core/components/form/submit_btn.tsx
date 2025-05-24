import { useNavigation } from "@remix-run/react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {
  title: string;
  fit?: boolean;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
  fit = false,
  ...props
}: SubmitBtnProps) => {
  const { state } = useNavigation();
  const pending = state === "submitting";

  return (
    <Button
      disabled={pending}
      type="submit"
      className={`${fit ? "w-fit" : "w-full"} bg-primary ${
        pending && "bg-secondary"
      }`}
    >
      {pending && <Loader2 className="animate-spin" />}
      {props.title}
    </Button>
  );
};
