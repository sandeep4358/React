// import ExpenseForm from "./expenseForm";

import axios from "axios";
import ExpenseFormWitoutBootStrap from "./ExpenseFormWitoutBootStrap";
import { BASE_API_URL } from "../../utils/constants";
import { Expense } from "../../types";

const AddExpense = () => {
  const handleSubmit = async (inputData: Expense): Promise<boolean> => {
    try {
      const { data } = await axios.post(BASE_API_URL, { ...inputData });
      console.log("posting : ", data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <div>
      <ExpenseFormWitoutBootStrap onSubmitForm={handleSubmit} />
    </div>
  );
};

export default AddExpense;
