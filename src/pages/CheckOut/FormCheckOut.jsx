import { useForm } from "react-hook-form";

const FormCheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { maxLength: 20 })}
          required
          type="text"
          placeholder="Name"
          className="w-full border rounded p-2 mb-5"
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p> Name cannot exceed 20 characters</p>
        )}
        <div className="flex gap-3 mb-5">
          <input
            {...register("email", {
              required: "Email is required",
            })}
            required
            type="email"
            placeholder="Email"
            className="border p-2 w-1/2"
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
          <input
            {...register("number", { max: 10 })}
            required
            type="number"
            placeholder="Phone number"
            className="border w-1/2 p-2"
          />
          {errors.number && <p>Invalid phone number</p>}
        </div>

        <input
          required
          type="text"
          placeholder="Address"
          className="w-full border rounded p-2 mb-5"
        />
        {errors?.text?.type === "required" && <p>This field is required</p>}
      </form>
    </>
  );
};

export default FormCheckOut;
