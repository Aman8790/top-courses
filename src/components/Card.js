import React, { useState } from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
function Card(props){
    
    let course=props.course;
    const likedCourses=props.likedCourses;
    const setLikedCourses=props.setLikedCourses;
 
    function likeHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=>cid!==course.id));
            toast.warning("Like removed!");
        }
        else{
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("liked successfully");
        }
    }
 
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden  '> 
            <div  className='relative'> 
               <img src={course.image.url}></img>
               <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2  top-[140px] 
                           grid place-items-center'>
                    <button onClick={likeHandler}>
             {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>):
              (<FcLikePlaceholder fontSize="1.75rem"/>)
             }          
                    </button>
                </div>
            </div> 

                
          
            <div className='p-4'>
               <p className='text-white font-semibold text-lg leading-6'>{course.title}</p> 
               <p className='mt-2 text-white'>
               {
                course.description.length>100?
                 (course.description.substr(0,100)+"..."):
                 (course.description)
                 }
               </p> 
            </div>
        </div>
    );
}
export default Card;
