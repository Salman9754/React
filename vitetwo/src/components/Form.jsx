import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../supabase/client";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { firstname, lastname, company, address, email } = data;
    try {
      const { data: userData, error } = await supabase.from("users").insert({
        first_name: firstname,
        last_name: lastname,
        company: company,
        address: address,
        email: email,
      });
     console.log(userData);
     
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first_name, last_name, company, address, email  */}
        <input
          type="text"
          placeholder="First Name"
          {...register("firstname", {
            required: { value: true, message: "Required" },minLength:{value:5,message:'Min is 5'}
          })}
        />
        {errors.firstname && <span>{errors.firstname.message}</span>}
        <br />
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastname", {
            required: { value: true, message: "Required" },
          })}
        />
        {errors.lastname && <span>{errors.lastname.message}</span>}
        <br />
        <input
          type="text"
          placeholder="Company"
          {...register("company", {
            required: { value: true, message: "Required" },
          })}
        />
        {errors.company && <span>{errors.company.message}</span>}
        <br />
        <input
          type="text"
          placeholder="Address"
          {...register("address", {
            required: { value: true, message: "Required" },
          })}
        />
        {errors.address && <span>{errors.address.message}</span>}
        <br />
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Required" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
