import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ExpenseList from "./components/expenseList/ExpenseList";
import AddExpense from "./components/addExpense/AddExpense";
import ExpenseSearch from "./components/expenseSearch/ExpenseSearch";
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [expenses, setExpsenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const getExpense = async () => {
    try {
      setIsLoading(true);
      setErrorMsg("");
      const { data } = await axios.get("http://localhost:4000/expenses");
      setExpsenses(data);
    } catch (error) {
      //console.log(error);
      setErrorMsg("Something went worg. Please try again some time.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ExpenseList
                isLoading={isLoading}
                expsenses={expenses}
                errorMsg={errorMsg}
              />
            }
          />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/search" element={<ExpenseSearch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
