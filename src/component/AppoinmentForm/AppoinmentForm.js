import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/UseAuth';
import './AppoinmentForm.css'

const AppoinmentForm = () => {  
const { register, handleSubmit, watch , formState: { errors } } = useForm();
const {user} = useAuth();
const onSubmit = data => console.log(data);

    return (
        <div>
            <h3 className="text-center">Please fill up this form for appoinment</h3>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue={user.displayName} {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input defaultValue={user.email} {...register("email", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.email && <span className="error">This field is required</span>}
            <input placeholder="Address" defaultValue="" {...register("address")} />
            <input placeholder="City" defaultValue="" {...register("city")} />
            <input placeholder="Phone number" defaultValue="" {...register("phone")} />

            <input type="submit" />
        </form>
    </div>
    );
};

export default AppoinmentForm;