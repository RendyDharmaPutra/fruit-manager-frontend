import { useState } from "react";
import { TextBox } from "./text_box";
import { Eye, EyeOff } from "lucide-react";

type PasswordFieldProps = {
  error?: string[];
};

export const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextBox
      id="password"
      label="Password"
      placeholder="Masukkan Password"
      error={props.error}
      type={showPassword ? "text" : "password"}
    >
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute top-[26px] right-3 text-gray-400"
      >
        {showPassword ? <EyeOff className="w-5" /> : <Eye className="w-5" />}
      </button>
    </TextBox>
  );
};
