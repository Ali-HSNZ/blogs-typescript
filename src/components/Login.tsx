import { Modal } from "@mui/material";
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import axios from 'axios'

type TLoginModalProps = {
     setIsShowLoginModal : Dispatch<SetStateAction<boolean>>
}

type TLoginValues = {
     username : string
     password : string
}

const LoginModal : FC<TLoginModalProps> = ({setIsShowLoginModal}) => {
     const [inputValues , setInputValues] = useState<TLoginValues>({username : "" , password : ""})

     const changeInputHandler = (input : ChangeEvent<HTMLInputElement>) => {
          setInputValues({...inputValues , [input.target.name] : input.target.value})
     }
     const onSubmit = async(form : FormEvent<HTMLFormElement>) => {
          form.preventDefault();
          await axios.post('http://localhost:3700/auth/login' , inputValues)          
     }
     return (  
          <Modal open={true} onClose={() => setIsShowLoginModal(false)} className="flex justify-center outline-none items-center p-4" >
               <form onSubmit={form => onSubmit(form)} className="bg-gray-50 outline-none  p-4 rounded w-full sm:w-[400px]">
                    <h1 className="text-lg font-quicksand-bold">Login.</h1>
                    <div className="flex flex-col gap-y-4 mt-4">
                         <div className="w-full relative">
                              <input 
                                   placeholder="Username" 
                                   className="w-full outline-none font-quicksand-medium bg-gray-200 py-2 pr-4 pl-10 border border-gray-300 rounded-md" 
                                   type="text" 
                                   name="username" 
                                   autoComplete="off"
                                   value={inputValues.username}
                                   onChange={input => changeInputHandler(input)}
                              />
                              <svg className="w-6 h-6 text-gray-400 absolute left-2 top-[9px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                         </div>
                         <div className="w-full relative">
                              <input 
                                   placeholder="Password" 
                                   className="w-full outline-none font-quicksand-medium bg-gray-200 py-2 pr-4 pl-10 border border-gray-300 rounded-md" 
                                   type="text" 
                                   autoComplete="off"
                                   name="password"
                                   value={inputValues.password}
                                   onChange={input => changeInputHandler(input)}
                              />
                              <svg className="w-6 h-6 text-gray-400 absolute left-2 top-[9px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                              </svg>

                         </div>
                    </div>
                    <div className="flex gap-x-4 mt-4 justify-end">
                         <button type="button" onClick={() => setIsShowLoginModal(false)} className="border border-purple-600 duration-100 hover:bg-purple-100 font-quicksand-medium px-6 py-2 text-purple-600 rounded-md">Cancel</button>
                         <button type="submit" className="bg-purple-600 hover:bg-purple-700 duration-100  font-quicksand-medium px-6 py-2 text-purple-50 rounded-md">Login</button>
                    </div>     
               </form>
          </Modal>
     );
}
 
export default LoginModal;