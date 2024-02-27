import { FC } from "react";
import { Expense } from "../../types";
import { Button, Table } from "react-bootstrap";
import "./ExpenseTable.modules.css";

interface ExpenseTableProps {
  expenses: Expense[];
}

const ExpenseTable: FC<ExpenseTableProps> = ({ expenses }) => {
  return (
    <Table striped bordered hover responsive className="expense_list">
      <thead>
        <tr>
          <th className="heading">#</th>
          <th className="heading">Expense Type</th>
          <th className="heading">Expense Date</th>
          <th className="heading">Expense Amount</th>
          <th className="heading">Description</th>
          <th className="heading">Edit</th>
          <th className="heading">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => {
          return (
            <tr key={expense.id}>
              <td className="expense_item">{index + 1}</td>
              <td className="expense_item">{expense.expense_type}</td>
              <td className="expense_item">{expense.expense_date}</td>
              <td className="expense_item">{expense.expense_amount}</td>
              <td className="expense_item">{expense.description}</td>
              <td className="expense_item">
                <Button variant="info">Edit</Button>
              </td>
              <td className="expense_item">
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;
