import { TextField } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type TextFieldProps = {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  type?: "text" | "number";
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  disable?: boolean;
  sx?: SxProps<Theme>;
  error?: boolean;
  helperText?: string;
};

const AppTextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  multiline = false,
  rows,
  disable = false,
  sx,
  error,
  helperText,
}: TextFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      disabled={disable}
      sx={sx}
      error={error} 
      helperText={helperText}
    />
  );
};

export default AppTextField;
