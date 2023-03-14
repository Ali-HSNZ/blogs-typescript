import { TBlog } from "@/types/blogs.types";
import Blog from "./Blog";

const BlogList = () => {
     const blogs : TBlog[] = [
          {
               id : 1,
               title : "The Coldest Sunset",
               description : "Lorem ipationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },
          {
               id : 2,
               title : "The Coldest Sunset",
               description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },
          {
               id : 3,
               title : "The Coldest Sunset",
               description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },
          {
               id : 4,
               title : "The Coldest Sunset",
               description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },

          {
               id : 5,
               title : "The Coldest Sunset",
               description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },
          {
               id : 6,
               title : "The Coldest Sunset",
               description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
               tags : ['photography' , "travel" , "winter"],
               img : "https://v1.tailwindcss.com/img/card-top.jpg",
          },
     ]
     
     return (  
          <>
               <h1 className="pt-4 px-4 text-2xl w-full font-quicksand-bold">Home.</h1>
               <article className="blogs_parent_grid w-full p-4">
                    {blogs.map(blog => <Blog blog={blog}/>)}
               </article>
          </>
     );
}
 
export default BlogList;