import { FaGraduationCap } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";


export default function Login() {
    return (
        <div className="flex  w-full  h-screen ">
            {/* left side */}


            <div className=" relative bg-[#4d555e] opacity-50  h-[100%] w-[50%]   shadow-lg flex flex-col gap-8">
                <div className=" mx-auto my-auto text-center justify-center items-center">
                    <div className="flex flex-row text-2xl text-white gap-2 mb-2">
                        <FaGraduationCap className="bg-[#1C2F6F]  p-2 text-4xl border rounded-md border-none" /> EduManagement System

                    </div>
                    <div className="text-left justify-center items-center text-4xl font-bold mb-4 text-white">
                        <h1>Empowering <br />
                            <span className="text-blue-500"> Education</span> Together</h1>


                    </div>
                    <div className="text-left justify-center items-center font-bold text-white">
                        <h1>

                            Secure administrator login ensures that only authorized users  <br />
                            can access important features. Protected admin access maintains  <br />
                            system integrity and prevents unauthorized actions.

                        </h1>


                    </div>



                </div>

                <img className="-z-10  absolute h-[100%] w-[100%]" src="/images/university.jpg" alt="img" />
            </div>
            {/* right side */}

            <div className="bg-white h-[100%] w-[50%] p-4 shadow-lg p-4 text-left text-black flex flex-col gap-4 justify-center">


                <div className=" flex flex-row gap-2 mb-8">
                    <FaArrowLeft className="text-2xl" />
                    Back to Login
                </div>
                <div className="flex flex-col gap-2 mb-8 text-left justify-center">
                    <h1 className="text-2xl text-black font-bold">Forget Password ?</h1>
                    <h1 className="text-cyan-600">Enter you registered email and we will send you <br /> a link to reset your password.</h1>

                </div>

                <div className="flex flex-col gap-2 mb-8 text-left justify-center">
                    <form action="submit" method="post">
                        <h1 className=" mb-2">Email Address</h1>
                        <input type="text" name="email" placeholder="yourschool.edu" required className="border border-black gap-2 mb-2 p-2 w-full rounded-md" />
                        <br />
                        <button type="submit" className="bg-[#0F49BD] text-white p-2 w-full rounded-md">Send Reset Link</button>
                    </form>
               
            </div>

                <div className="flex flex-row gap-2 text-gray-500">
                    <FaInfoCircle className="text-xl text-blue-400" />
                    <h1 className="  text-cyan-600">if you do not see email in you inbox wait few minuts, <br />
                     please chekc you  <span className="text-black">spam folder</span> or junk folder .</h1>
        </div>



        </div >
        </div >
    )
}