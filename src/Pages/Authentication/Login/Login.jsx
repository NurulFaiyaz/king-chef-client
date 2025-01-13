import { Link, useNavigate } from 'react-router-dom';
import loginBanner from '../../../assets/others/authentication1.png'
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {

    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (

        <>
            <Helmet>
                <title>King Chef | Sign In</title>
            </Helmet>
            <div className="max-w-7xl mx-auto border min-h-[100vh] flex">
                <div className='flex flex-col md:flex-row items-center justify-evenly'>
                    {/* login banner */}
                    <div className='w-5/6 md:w-1/2 border'>
                        <img className='lg:w-5/6 mx-auto' src={loginBanner} alt="" />
                    </div>

                    {/* login form */}
                    <div className='w-4/6 md:w-1/2 border'>

                        <div className="card bg-base-100 md:w-4/6 mx-auto shrink-0 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                    <button type='submit' className="btn btn-primary">Sign In</button>
                                </div>
                            </form>

                        </div>
                        <div className='text-center space-y-2 mb-10'>
                            <p>New here? <Link to={'/register'}>Create a New Account</Link></p>
                            <p>Or sign in with</p>
                            <button className='btn w-2/3 text-xl rounded-none'><FcGoogle />Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;