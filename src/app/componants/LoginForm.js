'use client'
import { useState } from 'react';


function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [submittedData, setSubmittedData] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData); // Store the submitted form data
        console.log('Submitted Data:', formData);
    };



    return (
        <div class=" bg-[url('https://imgur.com/H7fysHW.jpg')] bg-cover bg-center h-screen">

            <div className="flex flex-wrap h-full w-100 justify-center content-center">
                <div class="bg-bgDark w-full max-w-[528px] flex gap-6 flex-col  font-merriweather-sans  rounded-3xl p-10">
                    <div className="flex gap-2 flex-col">
                        <div className="font-bold text-3xl w-full ">Log In</div>
                        <div className="text-sm font-light ">By continuing, you agree to our <span className="text-textop font-bold">User Agreement</span>  and acknowledge that you understand the  <span className="text-textop font-bold">Privacy policy.</span></div>
                    </div>
                    <div className=" flex gap-3 ">
                        <button className="bg-btc px-4 py-3 flex content-center justify-center w-full max-w-[212px] rounded-lg text-sm text-textbtnclr">
                            <div className="mr-2"> <img src="/Icons/g.svg" height={16} width={16} ></img></div> Continue With Google
                        </button>
                        <button className="bg-btc px-4 py-3 w-full max-w-[212px] flex content-center justify-center text-sm rounded-lg text-textbtnclr">
                            <div className="mr-2"><img src="/Icons/a.svg" height={16} width={16} ></img></div>Continue With Google
                        </button>
                    </div>
                    <div class="flex items-center w-full opacity-40">
                        <div class="flex-1 border-t border-btc"></div>
                        <span class="px-4 text-btc">OR</span>
                        <div class="flex-1 border-t border-btc"></div>
                    </div>
                    <div>
                        <form className=" flex flex-col relative gap-4" onSubmit={handleSubmit}>
                            <input type="emial" name="email" value={formData.email} onChange={handleChange} placeholder="EmailAddress*" className="  px-4 py-3 bg-textbtnclr w-full max-w-[448px] min-h-12 rounded-lg"></input>
                            <div className="absolute z-1 top-4 right-5 "> <img src="/Icons/Vector.svg" height={13.22} width={13.33} ></img></div>
                            <input type="Passwprd" name="password" value={formData.password} onChange={handleChange} placeholder="Password*" className="  px-4 py-3 bg-textbtnclr w-full max-w-[448px] min-h-12 rounded-lg"></input>
                            <div className="absolute z-1 top-20 right-5 "> <img src="/Icons/eye.svg" height={16} width={16} ></img></div>
                            <div>Don't Remember? <span className="underline font-bold text-textop">Reset Password</span></div>
                            <div>
                                <button type="submit" className="font-bold text-center bg-textop w-full px-4 py-3 rounded-lg" >
                                    Login
                                </button>
                            </div>
                        </form>
                        {submittedData && (
                            <div className="mt-6  p-4 bg-gray-50 text-black rounded shadow">
                                <h3 className="text-xl  font-bold mb-2">Submitted Data</h3>
                                <p ><strong>Email:</strong> {submittedData.email}</p>
                                <p><strong>Password:</strong> {submittedData.password}</p>
                            </div>
                        )}
                    </div>
                    <div className="font-bold text-lg text-textop border-t-2 pt-6 border-btc flex justify-center content-center">
                        Don’t have an account?
                    </div>
                    <div className="font-bold text-textop flex content-center justify-center border px-4 py-3 rounded-lg border-textop">
                        Signup Here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm