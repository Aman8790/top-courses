import { useState } from "react";
import Card from "./Card";
function Cards(props){

  let courses=props.courses;
  let category=props.category;
  
  //fetch the all data in an single array that we get in courses
  function getCoursesData(){
    if(category==="All"){
      let allCourses=[];
      Object.values(courses).forEach((courseCategory)=>{
        courseCategory.forEach((courseData)=>{
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      return courses[category];
    }
     
  }


      const[likedCourses,setLikedCourses]=useState([]);


    return(
      <div  className='flex flex-wrap justify-center gap-4 mb-4'>
      
         {
          getCoursesData().map((course)=>{
            return (
            <Card course={course} key={course.id}
             likedCourses={likedCourses} setLikedCourses={setLikedCourses}>
               </Card>)
          }) 
         }
      </div>
    );
}
export default Cards;