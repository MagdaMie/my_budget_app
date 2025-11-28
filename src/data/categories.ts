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
import { type SvgIconProps } from "@mui/material/SvgIcon";

export type Category = {
  value: string;
  label: string;
  icon: React.ComponentType<SvgIconProps>;
};

export const categories: Category[] = [
  { value: "groceries", label: "Groceries", icon: ShoppingCartIcon },
  { value: "transport", label: "Transport", icon: DirectionsBusIcon },
  { value: "bills", label: "Bills", icon: ReceiptLongIcon },
  { value: "home", label: "Home", icon: HomeIcon },
  { value: "entertainment", label: "Entertainment", icon: MovieIcon },
  { value: "other", label: "Other", icon: MoreHorizIcon },
  { value: "pets", label: "Pets", icon: PetsIcon },
  { value: "car", label: "Car", icon: DirectionsCarIcon },
  { value: "electronics", label: "Electronics", icon: DevicesIcon },
  { value: "eating_out", label: "Eating Out", icon: RestaurantIcon },
  { value: "takeaway", label: "Takeaway", icon: FastfoodIcon },
  { value: "sport", label: "Sport", icon: SportsSoccerIcon },
  { value: "travel", label: "Travel", icon: FlightTakeoffIcon },
];
