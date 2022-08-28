import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import {MainDashboard, Customer, Login, Dashboard} from "../pages";
import * as Middleware from "../middleware/Middleware";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const Routers = () => {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
        <Route
            path="/"
            exact
            element={
                <Home />
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <Middleware.Guest>
                <Dashboard />
              </Middleware.Guest>
            }
          >
            <Route index element={<MainDashboard />} />
            <Route path="customer" exact element={<Customer />} />
          </Route>
          <Route
            path="/login"
            element={
              <Middleware.Authinticated>
                <Login />
              </Middleware.Authinticated>
            }
          />
         
          <Route
            path="*"
            element={
                <NotFound />
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};
