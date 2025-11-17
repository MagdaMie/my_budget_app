import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type AppButtonProps = {
  label: string;
  type: "add" | "edit" | "delete";
  variant?: ButtonProps["variant"];
  onClick?: ButtonProps["onClick"];
  sx?: SxProps<Theme>;
};

const AppButton = ({ label, type, variant, onClick, sx }: AppButtonProps) => {
  let color: "primary" | "secondary" | "error" = "primary";

  if (type === "edit") {
    color = "primary";
  }
  if (type === "delete") {
    color = "error";
  }
  return (
    <Button
      color={color}
      variant={variant || "contained"}
      onClick={onClick}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default AppButton;