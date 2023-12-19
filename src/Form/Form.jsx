import "./Form.css";
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';

const Form = () => {
  //    Registre Form
  const { register, handleSubmit, control } = useForm({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const user = await response.json();
      return {
        fullName: user.name,
        Email: user.email,
        Phone: user.phone,
        age: Math.floor(Math.random() * 50),
        message:
          "Hello Sir Ibrahim i Want u to work with me in a project Thank you",
      };
    },
  });

  //   sumbit Function
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <span className="heading">Get in touch</span>
          <input
            placeholder="full Name"
            type="text"
            className="input"
            {...register("fullName", {
                minLength: 6,
                required: true
            })}
          />
          <input
            placeholder="age"
            type="number"
            className="input"
            {...register("age", {
                required: true,
                minLength: 1,
                min: 18,
                max: 50
            })}
          />
          <input placeholder="phone" className="input" {...register("Phone", {
            required: true,
            minLength: 10
          })} 
          />
          <input
            placeholder="Email"
            id="mail"
            type="email"
            className="input"
            {...register("Email", {
                required: true,
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            })}
          />
          <textarea
            placeholder="Say Hello"
            rows="10"
            cols="30"
            id="message"
            {...register("message")}
            className="textarea"
          ></textarea>
          <div className="button-container">
            <button className="send-button" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
