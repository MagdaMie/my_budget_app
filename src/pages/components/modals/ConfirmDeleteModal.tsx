import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { useModalStore } from "@/store/useModalStore";
import { useTransactionStore } from "@/store/transactionStore";

const ConfirmDeleteModal = () => {
  const { modalType, payload, closeModal } = useModalStore();
  const removeTransaction = useTransactionStore(
    (state) => state.removeTransaction
  );

  const isOpen = modalType === "confirmDelete";

  const handleConfirm = () => {
    if (payload) {
      removeTransaction(payload);
    }
    closeModal();
  };
  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle>
        Are you sure you want to delete this transaction?
      </DialogTitle>
      <DialogActions>
        <Button onClick={closeModal}>No</Button>
        <Button color="error" onClick={handleConfirm}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
