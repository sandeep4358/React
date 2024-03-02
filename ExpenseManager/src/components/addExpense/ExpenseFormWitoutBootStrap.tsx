import "./ExpenseFormWitoutBootStrap.css";
import ButtonSka from "../Button/Button";
import { useForm } from "react-hook-form";
import { Expense } from "../../types";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ExpenseFormWitoutBootStrapProps {
  onSubmitForm: (inputData: Expense) => Promise<boolean>;
}

const ExpenseFormWitoutBootStrap: FC<ExpenseFormWitoutBootStrapProps> = ({
  onSubmitForm,
}) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Expense>();

  //use full Hook in navigating from one page to another....
  const navigate = useNavigate();

  const onSubmit = async (data: Expense) => {
    console.log("data", data);
    const isSuccess = await onSubmitForm(data);

    if (isSuccess) {
      reset(); // will reset the fields
      setErrorMsg("");
      console.log("Success..");

      //below is the time out for the success method...

      setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
      }, 3000);
      setSuccessMsg("Expense added succesfully...");
    } else {
      setSuccessMsg("");
      setErrorMsg("Some error occure. Please try again some time..");

      console.log("Error..");
    }
  };

  return (
    <div className="contact_form">
      <div className="form_content">
        <form onSubmit={handleSubmit(onSubmit)}>
          {successMsg && <p className="success_msg">{successMsg}</p>}
          {errorMsg && <p className="error_msg">{errorMsg}</p>}

          <div className="form_control">
            <label htmlFor="expense_type">Expenes Type</label>
            <select
              id="expense_type"
              {...register("expense_type", { required: true })}
            >
              <option value="">Select Type</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
            {errors.expense_type && (
              <p className="error-msg">Please enter expense type</p>
            )}
          </div>

          <div className="form_control">
            <label htmlFor="expense_date">Expense Date</label>
            <input
              type="date"
              id="expense_date"
              {...register("expense_date", { required: true })}
            />
            {errors.expense_date && (
              <p className="error-msg">Please enter expense date</p>
            )}
          </div>

          <div className="form_control">
            <label htmlFor="expense_amount">Expense Amount (In USD)</label>
            <input
              id="expense_amount"
              {...register("expense_amount", { required: true })}
            />
            {errors.expense_amount && (
              <p className="error-msg">Please enter expense amount</p>
            )}
          </div>
          <div className="form_control">
            <label htmlFor="description">Description</label>
            <textarea
              rows={3}
              id="description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="error-msg">Please enter description</p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <ButtonSka isOutline={false} text="Add Expense" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseFormWitoutBootStrap;
