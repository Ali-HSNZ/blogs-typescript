import { TBlog } from "@/types/blogs.types";
import { FC } from "react";

type TBlogPorps = {
     blog : TBlog
}
const Blog : FC<TBlogPorps> = ({blog}) => {
     return (  
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
               <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
               <div className="px-6 py-4">
                    <div className="font-quicksand-bold text-xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-sm font-quicksand-medium">{blog.description}</p>
               </div>
               <div className="px-6 mt-4 pb-2">
                    {blog.tags.map(tag => (
                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-quicksand-medium text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))}
               </div>
          </div>
     );
}
 
export default Blog;