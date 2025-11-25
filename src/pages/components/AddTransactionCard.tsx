import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import AppButton from "./AppButton";
import AppIconButton from "./AppIconButton";
import AppTextField from "./AppTextField";
import AppSelect from "./AppSelect";
import CloseIcon from "@mui/icons-material/Close";
import { categories } from "../../data/categories";

type FormValues = {
  amount?: string;
  description?: string;
  category?: string;
};

const AddTransactionCard = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      amount: "",
      description: "",
      category: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log("Transaction added:", data);
    reset();
  };
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: "background.paper",
        border: 1,
        borderColor: "primary.main",
        borderRadius: 2,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Add transaction</h3>
          <AppIconButton
            icon={<CloseIcon />}
            onClick={() => {}}
            type="close"
            ariaLabel="close"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Amount is required",
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/,
                message: "Only numbers, max 2 decimals",
              },
            }}
            render={({ field, fieldState }) => (
              <AppTextField
                {...field}
                label="Amount"
                type="text"
                placeholder="0.00"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{
              maxLength: {
                value: 50,
                message: "Max 50 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <AppTextField
                {...field}
                label="Description"
                type="text"
                placeholder="description"
                multiline
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <Controller
            name="category"
            control={control}
            rules={{
              required: "Category is required",
            }}
            render={({ field, fieldState }) => (
              <AppSelect
                {...field}
                label="Category"
                options={categories}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          {/*
          <AppSelect
            label="Category"
            value={category}
            options={categories}
            onChange={() => {}}
          /> */}
        </Box>
      </form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: 1,
        }}
      >
        <AppButton label="Add" type="add" onClick={handleSubmit(onSubmit)} />
        <AppButton label="Close" type="delete" onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default AddTransactionCard;
