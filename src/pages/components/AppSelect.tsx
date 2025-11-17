import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type AppSelectProps = {
  label?: string;
  value: string | number;
  options: Option[];
  onChange: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

const AppSelect = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
  disabled = false,
}: AppSelectProps) => {
  return (
    <FormControl disabled={disabled} fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
