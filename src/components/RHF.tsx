import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Option } from "../types/options";
import CheckBoxOutlineBlank from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBox from "@mui/icons-material/CheckBox";

interface RHFProps<T extends FieldValues> {
  name: Path<T>;
  options: Option[];
  label: string;
}

export function RHF<T extends FieldValues>({ name, options, label }: RHFProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) => options.find((item) => item.id === id))}
          getOptionLabel={(option) => options.find((item) => item.id === option.id)?.label ?? ""}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField {...params} fullWidth inputRef={ref} error={!!error} helperText={error?.message} label={label} />
          )}
          renderOption={(props, option, { selected }) => (
            <Box {...props} component={"li"}>
              <Checkbox icon={<CheckBoxOutlineBlank />} checkedIcon={<CheckBox />} checked={selected} />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
}
