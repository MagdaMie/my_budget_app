import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type AppIconButtonProps = {
  type: "close" | "edit" | "delete";
  onClick: () => void;
  size?: "small" | "medium" | "large";
  tooltip?: string;
  color?: "primary" | "secondary" | "error" | "default";
};

const AppIconButton = ({
  type,
  onClick,
  size,
  tooltip,
  color,
}: AppIconButtonProps) => {
  let IconComponet: React.ReactNode;

  switch (type) {
    case "close":
      IconComponet = <CloseIcon />;
      break;
    case "edit":
      IconComponet = <EditIcon />;
      break;
    case "delete":
      IconComponet = <DeleteIcon />;
      break;
    default:
      IconComponet = null;
  }

  const button = (
    <IconButton onClick={onClick} size={size} color={color}>
      {IconComponet}
    </IconButton>
  );
  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};

export default AppIconButton;
