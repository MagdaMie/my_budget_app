import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PetsIcon from "@mui/icons-material/Pets";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DevicesIcon from "@mui/icons-material/Devices";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { type SvgIconProps } from "@mui/material/SvgIcon";

export type Category = {
  value: string;
  label: string;
  type: "income" | "expense";
  icon: React.ComponentType<SvgIconProps>;
};

export const expenseCategories: Category[] = [
  {
    value: "groceries",
    label: "Groceries",
    type: "expense",
    icon: ShoppingCartIcon,
  },
  {
    value: "transport",
    label: "Transport",
    type: "expense",
    icon: DirectionsBusIcon,
  },
  { value: "bills", label: "Bills", type: "expense", icon: ReceiptLongIcon },
  { value: "home", label: "Home", type: "expense", icon: HomeIcon },
  {
    value: "entertainment",
    label: "Entertainment",
    type: "expense",
    icon: MovieIcon,
  },
  { value: "other", label: "Other", type: "expense", icon: MoreHorizIcon },
  { value: "pets", label: "Pets", type: "expense", icon: PetsIcon },
  { value: "car", label: "Car", type: "expense", icon: DirectionsCarIcon },
  {
    value: "electronics",
    label: "Electronics",
    type: "expense",
    icon: DevicesIcon,
  },
  {
    value: "eating_out",
    label: "Eating Out",
    type: "expense",
    icon: RestaurantIcon,
  },
  { value: "takeaway", label: "Takeaway", type: "expense", icon: FastfoodIcon },
  { value: "sport", label: "Sport", type: "expense", icon: SportsSoccerIcon },
  {
    value: "travel",
    label: "Travel",
    type: "expense",
    icon: FlightTakeoffIcon,
  },
];

export const incomeCategories: Category[] = [
  { value: "salary", label: "Salary", type: "income", icon: AttachMoneyIcon },
];
