import { Card, CardContent, Typography } from "@mui/material";

type SummaryCardProps = {
  title: string;
  amount: number;
};

const SummaryCard = ({ title, amount }: SummaryCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2">{title}</Typography>
        <Typography variant="h5">{amount}</Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
