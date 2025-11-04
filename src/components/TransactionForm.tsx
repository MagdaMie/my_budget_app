import { useForm } from 'react-hook-form';
import type { Transaction } from '../types/transaction';
import type { Category } from '../types/category';

type TransactionFormProps = {
  category: Category;
  onClose: () => void;
  onSubmit: (transaction: Transaction) => void;
};

type FormValues = {
  amount: number;
};

const TransactionForm = ({ category, onClose, onSubmit }: TransactionFormProps) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const submitHandler = (data: FormValues) => {
    const transaction: Transaction = {
      id: crypto.randomUUID(),
      category: category.name,
      amount: Number(data.amount),
      date: new Date().toISOString(),
    };
    onSubmit(transaction);
    reset();
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>
          {category.icon}
          {category.name}
        </h3>
        <input
          type="number"
          placeholder="amount"
          step="0.01"
          {...register('amount', {
            required: true,
            min: 0.01,
            pattern: /^\d+(\.\d{1,2})?$/,
          })}
        />
        <button type="submit">Add & Close</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
