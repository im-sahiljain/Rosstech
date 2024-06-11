// Login.tsx
import React from 'react';
import email from '../assets/email.svg';
import role from '../assets/role.svg';
import pass from '../assets/pass.svg';

const Login: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    };

    return (
        <div className="relative" onClick={(e) => e.stopPropagation()}>
           
            <h2 className=" text-5xl font-bold mt-8 mb-10 relative">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4 relative w-[500px] h-[300px]">
            <div className="flex items-center bg-white border rounded-full" style={{boxShadow: "0px 0px 30px 1px rgba(137, 114, 236, 1)"}}>
                <img src={email} alt="Password Icon" className="w-5 h-5 ml-4" />
                    <input 
                        type="email" 
                        className=" text-2xl flex-1 px-4 py-3 focus:outline-none rounded-full text-brandPrimary placeholder-brandPrimary" 
                        placeholder="Email"
                    />
            </div>
                <div className="flex items-center bg-white border rounded-full text-brandPrimary "style={{boxShadow: "0px 0px 30px 1px rgba(137, 114, 236, 1)"}} >
                    <img src={role} alt="Role Icon" className="w-5 h-5 ml-4" />
                    <select 
                        className=" text-2xl flex-1 px-4 py-3 bg-white focus:outline-none rounded-full">
                        <option>Role</option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                </div>
                <div className="flex items-center border bg-white rounded-full"style={{boxShadow: "0px 0px 30px 1px rgba(137, 114, 236, 1)"}}>
                    <img src={pass} alt="Password Icon" className="w-5 h-5 ml-4" />
                    <input 
                        type="password" 
                        className="text-2xl flex-1 px-4 py-3 focus:outline-none rounded-full placeholder-brandPrimary" 
                        placeholder="Password"
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        className=" text-3xl w-full py-2 px-3 mt-7 text-bold rounded-full text-1xl  text-white bg-black hover:bg-brandPrimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandPrimary"
                    >
                        Login
                    </button>
                </div>
            </form>
            <p className="mt-4 text-center text-2xl text-neutralGrey relative mb-5">
                Forgot details? <a href="#" className="text-red-600 hover:underline">Contact our admin</a>
            </p>
        </div>
    );
};

export default Login;
