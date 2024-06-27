import { Stack, TextField } from "@mui/material";
import { RHF } from "../../components/RHF";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/schema";

const Users = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <Stack
      sx={{
        gap: 2,
        maxWidth: 400,
        margin: "1rem auto",
        padding: "0 16px",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        variant="outlined"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHF<Schema>
        name="states"
        label="States"
        options={[
          {
            id: "1",
            label: "India",
          },
          {
            id: "2",
            label: "USA",
          },
        ]}
      />
    </Stack>
  );
};

export default Users;
