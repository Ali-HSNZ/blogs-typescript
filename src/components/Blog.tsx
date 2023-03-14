import { TBlog } from "@/types/blogs.types";
import { FC } from "react";

type TBlogPorps = {
     blog : TBlog
}
const Blog : FC<TBlogPorps> = ({blog}) => {
     return (  
          <section className="w-full h-full rounded-md overflow-hidden shadow-lg pb-4 flex flex-col justify-between">
               <div className="">
                    <img className="w-full object-cover" src={blog.img} alt={`image - ${blog.title}`}/>
                    <p className="font-quicksand-bold text-xl mt-4 px-4">{blog.title}</p>
                    <p className="text-gray-700 mt-4 px-4 text-sm font-quicksand-medium">{blog.description}</p>
               </div>
               <div className="px-6 mt-4 pb-2">
                    {blog.tags.map(tag => (
                         <span className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-quicksand-medium text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))}
               </div>
          </section>
     );
}
 
export default Blog;