import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App(){

  const[courseData,setCourseData]=useState([]);
  const[loading,setLoading]=useState(true);

  const[category,setCategory]=useState(filterData[0].title);



  useEffect(()=>{
        async function fetchData(){
           setLoading(true);
          try{
            const res=await fetch(apiUrl);
            const output= await res.json();
            //save data into a variable
            setCourseData(output.data);
            // console.log(output);
          }
          catch(err){
           alert("something is wrong in api call");
          }
          setLoading(false);
        }

        fetchData();
  },[]);

  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
   
   <div>
   <Navbar></Navbar>
   </div>

 <div className="bg-bgDark2 ">
     <div>
     <Filter filterData={filterData} category={category} setCategory={setCategory}/>
   
     </div>
   
     <div  className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
     {loading ? (<Spinner/>): (  <Cards courses={courseData}  category={category} />)}
     </div>
     
  </div>    
  
    </div>
  );
}

export default App;
