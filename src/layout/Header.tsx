import Link from "next/link";

const Header = () => {
     
     return (  
          <header className="w-full bg-purple-600 p-4 flex justify-between items-center">
               <section>
                    <span className="font-quicksand-bold text-purple-100">Blogs</span>
                    <span className="ml-2 font-quicksand-light text-purple-200">TYPESCRIPT</span>
               </section>
               <section className="flex w-full ml-10">
                    <Link className={` font-quicksand-medium bg-purple-700 py-2 px-4 rounded-lg text-purple-200`} href={'/'}>Home</Link>
                    <Link className={`font-quicksand-medium text-purple-200 py-2 px-4`} href={'/'}>Profile</Link>
                    <Link className={`font-quicksand-medium text-purple-200 py-2 px-4`} href={'/'}>About Project</Link>
                    <Link className={`font-quicksand-medium text-purple-200 py-2 px-4`} href={'/blogs'}>Blogs</Link>
               </section>
               <section className="flex gap-x-4">
                    <button className="bg-purple-800 hover:bg-purple-900 py-2 duration-150 px-4 text-purple-200 font-quicksand-medium rounded-md">Login</button>
                    <button className="hover:bg-purple-500 duration-150 border border-purple-500 py-2 px-4 text-purple-200 font-quicksand-medium rounded-md">Register</button>
               </section>
          </header>
     );
}
 
export default Header;