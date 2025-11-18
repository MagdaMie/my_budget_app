import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  type SelectChangeEvent,
} from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type AppSelectProps = {
  label?: string;
  value: string;
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
  const selectId = label ? label.replace(/\s+/g, "-").toLowerCase() : "select";

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl disabled={disabled} fullWidth={fullWidth}>
      {label && <InputLabel htmlFor={selectId}>{label}</InputLabel>}
      <Select id={selectId} value={value} label={label} onChange={handleChange}>
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
