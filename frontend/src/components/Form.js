import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import './style.css';
import { Link } from 'react-router-dom';
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
          username: data.username,
          password: data.password,
          confirmpassword: data.confirmpassword,
        };
        await axios
          .post(`http://localhost:4000/user/signup`, userInfo)
          .then((res) => {
            if (res.data) {
              toast.success("Account created successfully");
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.message);
          });
      };

    // console.log(watch('username'));
    
  return (
    <section className="reg">
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' required />
                    <input type="password" {...register("password")} placeholder='password' required />
                    <input type="password" {...register("confirmpassword")} placeholder='confirm password' required />
                    <button className='btn'>Sign Up</button>
                    <p>Already have an account?     
                    <Link to={'/'} className='link'> Login</Link>
                    </p>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
        <Toaster/>
    </section>
  )
}
