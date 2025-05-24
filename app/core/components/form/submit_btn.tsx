import { useNavigation } from "@remix-run/react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type SubmitBtnProps = {
  title: string;
  type?: "submit" | "button";
  fit?: boolean;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = ({
  type = "submit",
  fit = false,
  ...props
}: SubmitBtnProps) => {
  const { state } = useNavigation();
  const pending = state === "submitting";

  return (
    <Button
      disabled={pending}
      type={type}
      className={`${fit ? "w-fit" : "w-full"} bg-primary ${
        pending && "bg-secondary"
      }`}
    >
      {pending && <Loader2 className="animate-spin" />}
      {props.title}
    </Button>
  );
};
