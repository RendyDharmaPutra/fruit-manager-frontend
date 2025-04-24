import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/core/components/ui/alert";
import { AlertCircle } from "lucide-react";

type ErrorAlertProps = {
  title?: string;
  description: string;
};

export const ErrorAlert: React.FC<ErrorAlertProps> = ({
  title = "Terjadi Kesalahan",
  description,
}) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
