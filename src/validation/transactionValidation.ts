import { z } from "zod";

export const transactionSchema = z.object({
  amount: z
    .string()
    .nonempty("Amount is required")
    .regex(/^[0-9]+(\.[0-9]{1,2})?$/, "Only numbers, max 2 decimals"),
  description: z.string().max(50, "Max 50 characters"),
  category: z.string().nonempty("Category is required"),
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;
