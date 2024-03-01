import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import {useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
 

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) =>{
        setError(" ")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
               
        }
        } catch (error) {
            setError(error.message)
        }
    } 

  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input 
                        label="Name"
                        placeholder="Enter Full Name"
                        {...register("name", {
                            register: true
                        })}
                    />
                    <Input 
                        label = "Email"
                        type = "email"
                        placeholder = "Enter your email"
                        {...register("email", {
                            required: true,
                            validate:{
                                matchPattern: (value)=>/^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                 "email address must be valid address",
                            }
                        })}
                    />
                    <Input 
                        label="Password"
                        type="password"
                        placeholder="Enter Your Password"
                        {...register("password", {
                            register: true,
                        })}
                    />
                    <Button type="submit"  className="w-full">
                        Create Account
                    </Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Signup