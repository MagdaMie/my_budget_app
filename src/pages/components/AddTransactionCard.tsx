import { useForm, Controller } from "react-hook-form";
import { Box } from "@mui/material";
import AppButton from "./AppButton";
import AppIconButton from "./AppIconButton";
import AppTextField from "./AppTextField";
import AppSelect from "./AppSelect";
import CloseIcon from "@mui/icons-material/Close";
import { categories } from "../../data/categories";
import { useTransactionStore } from "../../store/transactionStore";
import {
  transactionSchema,
  type TransactionFormValues,
} from "../../validation/transactionValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const AddTransactionCard = () => {
  const { control, handleSubmit, reset } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    mode: "onChange",
    defaultValues: {
      amount: "",
      description: "",
      category: "",
    },
  });

  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const onSubmit = (data: TransactionFormValues) => {
    addTransaction(data);
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
            onClick={() => {}} //bedzie podpiete pod modal //
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
        <AppButton
          label="Close"
          type="delete"
          onClick={() => {}} //bedzie podpiete pod modal
        />
      </Box>
    </Box>
  );
};

export default AddTransactionCard;
