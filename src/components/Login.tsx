import { Modal } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

type TLoginModalProps = {
     setIsShowLoginModal : Dispatch<SetStateAction<boolean>>
}
const LoginModal : FC<TLoginModalProps> = ({setIsShowLoginModal}) => {
     return (  
          <Modal open={true} onClose={() => setIsShowLoginModal(false)} className="flex justify-center outline-none items-center p-4" >
               <form className="bg-gray-50 outline-none  p-4 rounded w-full sm:w-[400px]">
                    <h1 className="text-lg font-quicksand-bold">Login.</h1>
                    <div className="flex flex-col gap-y-4 mt-4">
                         <div className="w-full relative">
                              <input placeholder="Email" className="w-full outline-none font-quicksand-medium bg-gray-200 py-2 pr-4 pl-10 border border-gray-300 rounded-md" type="text" name="" id="" />
                              <svg className="w-6 h-6 text-gray-400 absolute left-2 top-[9px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                              </svg>
                         </div>
                         <div className="w-full relative">
                              <input placeholder="Password" className="w-full outline-none font-quicksand-medium bg-gray-200 py-2 pr-4 pl-10 border border-gray-300 rounded-md" type="text" name="" id="" />
                              <svg className="w-6 h-6 text-gray-400 absolute left-2 top-[9px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                              </svg>

                         </div>
                    </div>
                    <hr className="border-1 border-gray-300 mt-4"/>
                    <div className="flex gap-x-4 mt-4 justify-end">
                         <button type="button" onClick={() => setIsShowLoginModal(false)} className="border border-purple-600 duration-100 hover:bg-purple-100 font-quicksand-medium px-6 py-2 text-purple-600 rounded-md">Cancel</button>
                         <button type="button" className="bg-purple-600 hover:bg-purple-700 duration-100  font-quicksand-medium px-6 py-2 text-purple-50 rounded-md">Login</button>
                    </div>     
               </form>
          </Modal>
     );
}
 
export default LoginModal;