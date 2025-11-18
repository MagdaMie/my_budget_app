import { IconButton, Tooltip, type IconButtonProps } from "@mui/material";

type IconButtonType = "close" | "edit" | "delete";

type AppIconButtonProps = {
  type: IconButtonType;
  icon: React.ReactNode;
  onClick: () => void;
  size?: IconButtonProps["size"];
  color?: IconButtonProps["color"];
  tooltip?: string;
  ariaLabel: string;
  
};

const AppIconButton = ({
  icon,
  onClick,
  size,
  color,
  tooltip,
  ariaLabel
}: AppIconButtonProps) => {
  const button = (
    <IconButton onClick={onClick} size={size} color={color} aria-label={ariaLabel}>
      {icon}
    </IconButton>
  );

  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export default AppIconButton;
