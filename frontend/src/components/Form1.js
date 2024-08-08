import React from 'react'
import bgImg from '../assets/img2.jpg';
import { useForm } from 'react-hook-form';
import './style.css';
import { Link } from 'react-router-dom';
import toast, {Toaster} from "react-hot-toast";
import axios from "axios";
export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
          username: data.username,
          password: data.password,
        };
        await axios
          .post(`http://localhost:4000/user/login`, userInfo)
          .then((res) => {
            if (res.data) {
              toast.success("Login Successfull");
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
                <h2>Login</h2>
                <span>Welcome back</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' required />
                    <input type="password" {...register("password")} placeholder='password' required />
                    <button className='btn'>Login</button>
                    <p>Don't have an account? 
                    <Link to={'/Register'} className='link'> Register</Link>
                    </p>
                    <Link to={'/Table'} className='link'>View Users list </Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
        <Toaster></Toaster>
    </section>
  )
}
