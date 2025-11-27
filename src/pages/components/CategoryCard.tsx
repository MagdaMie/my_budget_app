import { Card, CardActionArea, Box, Typography, Stack } from "@mui/material";
import { type Category } from "@/data/categories";
import { formatLargeNumber } from "@/helpers/formatLargeNumber";

type CategoryCardProps = {
  category: Category;
  totalCategoryAmount?: number;
  onSelect: () => void;
};

const CategoryCard = ({
  category,
  totalCategoryAmount = 0,
  onSelect,
}: CategoryCardProps) => {
  const Icon = category.icon;

  return (
    <Card sx={{ width: "100%", maxWidth: 250 }}>
      <CardActionArea onClick={onSelect} aria-label="Add transaction">
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            p: 2,
          }}
        >
          <Box sx={{ fontSize: 36, color: "secondary.main" }}>
            <Icon fontSize="inherit" />
          </Box>
          <Stack alignItems="center">
            <Typography variant="subtitle1" fontWeight={600}>
              {category.label}
            </Typography>
            <Typography variant="body2">
              {formatLargeNumber(totalCategoryAmount)}
            </Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
