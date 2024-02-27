import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Expense } from "../../types";

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Expense>();

  const onSubmit = (data: Expense) => {
    console.log("data", data);
  };
  console.error("errors", errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="expense_type">
        <Form.Label>Expense Type</Form.Label>
        <Form.Select
          aria-label="Expense Type"
          {...register("expense_type", { required: true })}
        >
          <option value="">Select Expense Type</option>
          <option value="1">Cash</option>
          <option value="2">Card</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="expense_date">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control
          type="date"
          {...register("expense_date", { required: true })}
          className="form-control"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="expense_amount">
        <Form.Label>Expense Amount (In Usd)</Form.Label>
        <Form.Control
          type="text"
          {...register("expense_amount", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Expense Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ener description"
          {...register("description", { required: true })}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit" variant="success">
          Success
        </Button>{" "}
      </Form.Group>
    </Form>
  );
};

export default ExpenseForm;
