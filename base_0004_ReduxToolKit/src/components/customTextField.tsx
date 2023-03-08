import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  onInputValueChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: string;
};

export default function CustomTextField({
  onInputValueChange,
  type,
}: CustomTextFieldProps) {
  return (
    <TextField
      name={type}
      placeholder={type}
      size="small"
      onChange={onInputValueChange}
      sx={{ width: 200, bgcolor: "#E1FFB1" }}
    />
  );
}
