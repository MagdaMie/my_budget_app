import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
