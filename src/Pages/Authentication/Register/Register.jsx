import { Link, useNavigate } from 'react-router-dom';
import loginBanner from '../../../assets/others/authentication1.png'
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import GoogleAuthentication from '../SocialAuthentication/GoogleAuthentication';

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(data.name, data.photo)
                navigate('/')
            })
    }


    return (
        <>
            <Helmet>
                <title>King Chef | Register</title>
            </Helmet>
            <div className="max-w-7xl mx-auto border min-h-[100vh] flex">
                <div className='flex md:flex-row-reverse flex-col items-center justify-evenly'>
                    {/* register banner */}
                    <div className='w-5/6 md:w-1/2 border'>
                        <img className='lg:w-5/6 mx-auto' src={loginBanner} alt="" />
                    </div>

                    {/* register form */}
                    <div className='w-4/6 md:w-1/2 border'>

                        <div className="card bg-base-100 lg:w-4/6 mx-auto shrink-0 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        // name='name'
                                        {...register('name')}
                                        type="text" placeholder="Full Name" className="rounded-none input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        // name='email'
                                        {...register('email')}
                                        type="email" placeholder="email" className="rounded-none input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        // name='email'
                                        {...register('photo')}
                                        type="link" placeholder="Photo URL" className="rounded-none input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        // name='password'
                                        {...register('password')}
                                        type="password" placeholder="password" className="rounded-none input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register</button>
                                </div>
                            </form>

                        </div>
                        <GoogleAuthentication query="Already have an account" suggestion="Sign In" link="login" text2="Or Sign Up with Google"></GoogleAuthentication>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;