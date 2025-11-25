import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type AppSelectProps = {
  label?: string;
  value: string | undefined;
  options: Option[];
  onChange: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
};

const AppSelect = ({
  label,
  value,
  options,
  fullWidth = true,
  disabled = false,
  onChange,
  error,
  helperText,
}: AppSelectProps) => {
  const selectId = label ? label.replace(/\s+/g, "-").toLowerCase() : "select";

  return (
    <FormControl disabled={disabled} fullWidth={fullWidth} error={error}>
      {label && <InputLabel htmlFor={selectId}>{label}</InputLabel>}
      <Select id={selectId} value={value} label={label} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default AppSelect;
