import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const CustomForm = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            {...register("firstName", { required: true, maxLength: 20 })}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lastName">Last Name</label>

          <input
            id="lastName"
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            {...register("age", { min: 18, max: 99 })}
          />
        </div>

        <input type="submit" />
      </form>
      {success ? <div data-testid="success">Yaay</div> : null}
    </>
  );
};

export default CustomForm;
