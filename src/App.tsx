import { Route, Routes, Link } from "react-router-dom";
import SuspenseWrapper from "./routes/SuspenseWrapper";
import { lazy } from "react";
import { PATHS } from "./routes/paths";

const Home = lazy(() => import("./pages/Home"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <Routes>
        <Route
          path={PATHS.HOME}
          element={
            <SuspenseWrapper>
              <Home />
            </SuspenseWrapper>
          }
        />
        <Route
          path={PATHS.TRANSACTIONS}
          element={
            <SuspenseWrapper>
              <Transactions />
            </SuspenseWrapper>
          }
        />
        <Route
          path={PATHS.ANALYTICS}
          element={
            <SuspenseWrapper>
              <Analytics />
            </SuspenseWrapper>
          }
        />
        <Route
          path={PATHS.SETTINGS}
          element={
            <SuspenseWrapper>
              <Settings />
            </SuspenseWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
