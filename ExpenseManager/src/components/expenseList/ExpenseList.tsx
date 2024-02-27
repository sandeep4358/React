import { FC } from "react";
import { Expense } from "../../types";
import ExpenseTable from "./ExpenseTable";

interface ExpenseListProps {
  isLoading: boolean;
  expsenses: Expense[];
  errorMsg: string;
}

const ExpenseList: FC<ExpenseListProps> = ({
  isLoading,
  expsenses,
  errorMsg,
}) => {
  return (
    <div className="main-content">
      <h2 className="my-3 text-center">Expense List</h2>
      {isLoading && <p className="loading">Loading...</p>}
      {errorMsg && <p className="error_msg">{errorMsg}</p>}
      <ExpenseTable expenses={expsenses} />
    </div>
  );
};

export default ExpenseList;
