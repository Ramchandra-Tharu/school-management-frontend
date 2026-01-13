import { FaGraduationCap } from "react-icons/fa";
 // user + shield (common for admin)
import { FaUserCog } from "react-icons/fa"; 
import { FaBook } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";    // user + gear

export default function Login() {
    return (
        <div className="flex  w-full  h-screen ">
            {/* left side */}
            <div className="bg-[#041D63]  h-[100%] w-[50%] p-8  shadow-lg text-white flex flex-col gap-8">
                <div className="flex flex-row items-center text-2xl gap-2">
                     <FaGraduationCap  className="bg-[#1C2F6F]  p-2 text-4xl border rounded-md border-none"/> EduManagement System
                </div>
                <div className="flex-1">
                </div>
                

                <div>
                    <h1 className="text-white text-4xl">Build the future, <br /> togather</h1>
                    <p>lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Facere placeat quia</p>
                </div>
            </div>
            {/* right side */}
            <div className="bg-white h-[100%] w-[50%] p-8  shadow-lg text-center text-black flex flex-col gap-4 items-center justify-center">
                <div className="flex flex-col gap-4 items-left justify-left" >
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold text-left">Log into your account</p>
                        <p className="text-left">select your role to continue</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col h-20 w-25  gap-2 border border-black rounded-md  text-center items-center justify-center hover:bg-[#F3F6FC] cursor-pointer hover:text-blue-600">
                            <p><FaUserCog  className="text-gray-500 text-xl gap-1 hover:text-blue-600"/></p>
                            <h1 >Admin</h1>
                        </div>
                        <div className="flex flex-col h-20 w-25 gap-2  border border-black rounded-md text-center items-center justify-center hover:bg-[#F3F6FC] cursor-pointer hover:text-blue-600">
                            <p><FaBook className="text-gray-500 text-xl gap-1 hover:text-blue-600"/></p>
                            <h1>Teacher</h1>
                        </div>
                        <div className="flex flex-col h-20 w-25  gap-2 border border-black rounded-md text-center items-center justify-center hover:bg-[#F3F6FC] cursor-pointer hover:text-blue-600">
                            <p><FaUserGraduate className="text-gray-500 text-xl gap-1 hover:text-blue-600"/></p>
                            <h1>Student</h1>
                        </div>
                    </div>
                    <div className="flex flex-col  p-4 text-left w-full">
                        <form action="/api/submit" method="post">
                            <h1 className="text-left mb-2">Username</h1>
                            <input type="text" name="name" placeholder="Your Name" required className="border border-black gap-2 mb-2 p-2 w-full rounded-md" />
                            <br />
                            <h1 className="text-left  mb-2">password</h1>
                            <input type="password" name="password" placeholder="Your Password" required className="border border-black mb-4 p-2 w-full rounded-md" />
                            <br />
                            <button type="submit" className="bg-[#0F49BD] text-white p-2 w-full rounded-md">log in</button>
                        </form>

                    </div>
                    <div>
                        <h1>Need help ?</h1>
                        <p>edu managemenent system</p>
                    </div>

                </div>


            </div>

        </div >
    )
}