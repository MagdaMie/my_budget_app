import { Button, type ButtonProps } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

type ButtonType = "add" | "edit" | "delete";

type AppButtonProps = {
  label: string;
  buttonType: ButtonType;
  type?: "button" | "submit" | "reset";
  variant?: ButtonProps["variant"];
  onClick?: ButtonProps["onClick"];
  sx?: SxProps<Theme>;
};

const TYPE_TO_COLOR: Record<ButtonType, ButtonProps["color"]> = {
  add: "primary",
  edit: "primary",
  delete: "error",
};

const AppButton = ({
  label,
  buttonType,
  type = "button",
  variant = "contained",
  onClick,
  sx,
}: AppButtonProps) => {
  const color = TYPE_TO_COLOR[buttonType];

  return (
    <Button
      color={color}
      variant={variant}
      type={type}
      onClick={onClick}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default AppButton;
