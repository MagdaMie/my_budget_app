import { Box } from "@mui/material";
import AppButton from "./AppButton";
import AppIconButton from "./AppIconButton";
import AppTextField from "./AppTextField";
import AppSelect from "./AppSelect";
import CloseIcon from "@mui/icons-material/Close";

type AddTransactioncardProps = {
  amount?: string;
  description?: string;
  category?: string;
};

const AddTransactionCard = ({
  amount = "",
  description = "",
  category = "",
}: AddTransactioncardProps) => {
  const options = [
    { label: "Jedzenie", value: "jedzenie" },
    { label: "Transport", value: "transport" },
  ];

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
        <AppTextField
          label="Amount"
          value={amount}
          type="text"
          onChange={() => {}}
          placeholder="0.00"
        />
        <AppTextField
          label="Description"
          value={description}
          type="text"
          onChange={() => {}}
          placeholder="description"
        />
        <AppSelect
          label="Category"
          value={category}
          options={options}
          onChange={() => {}}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: 1,
        }}
      >
        <AppButton label="Add" type="add" onClick={() => {}} />
        <AppButton label="Close" type="delete" onClick={() => {}} />
      </Box>
    </Box>
  );
};

export default AddTransactionCard;