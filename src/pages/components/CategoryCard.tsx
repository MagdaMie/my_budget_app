import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { type Category } from "../../data/categories";

type CategoryCardProps = {
  category: Category;
  total?: number;
  onSelect: () => void;
};

const CategoryCard = ({ category, total = 0, onSelect }: CategoryCardProps) => {
  const Icon = category.icon;

  const formatLargeNumber = (num: number) => {
    if (num >= 1_000_000_000_000) {
      return (num / 1_000_000_000_000).toFixed(1) + "B";
    } // bilion
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    } // milion
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "k";
    } // tysiąc
    return num.toString();
  };

  return (
    <Card sx={{ width: 130 }}>
      <CardActionArea onClick={onSelect}>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ fontSize: 36, color: "secondary.main" }}>
            <Icon fontSize="inherit" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {category.label}
            </Typography>
            <Typography variant="body2">{formatLargeNumber(total)}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
