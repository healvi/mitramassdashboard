import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import {MainDashboard, Customer, Login, Dashboard} from "../pages";
import * as Middleware from "../middleware/Middleware";

export const Routers = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Middleware.Guest>
                <Dashboard />
              </Middleware.Guest>
            }
          >
            <Route index element={<MainDashboard />} />
            <Route path="/Customer" exact element={<Customer />} />
          </Route>
          <Route
            path="/login"
            element={
              <Middleware.Authinticated>
                <Login />
              </Middleware.Authinticated>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};
