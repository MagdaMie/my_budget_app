import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

type ConfirmationModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  description: string;
  labels?: { yes: string; no: string };
};

const ConfirmationModal = ({
  isOpen,
  onCancel,
  onConfirm,
  description,
  labels,
}: ConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle>{description}</DialogTitle>
      <DialogActions>
        <Button onClick={onCancel}>{labels?.no ?? "No"}</Button>
        <Button color="error" onClick={onConfirm}>
          {labels?.yes ?? "Yes"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
