// import React from 'react';
import {useParams,useHistory} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function TaskPage() {
    let history=useHistory();
    const { id } = useParams();
    const [taskData,setTaskData]=useState(null);
     

  /*
   * Fetch Tasks
   */
    const fetchTask = async (id) => {
        try {
          const response = await fetch(`http://localhost:5000/tasks/${id}`);
          const data = await response.json();
          setTaskData(data)
          if(response.status===404){
              toast.error('Not Found')
              history.push('/')
          }

        } catch (err) {
          toast.error("request failed!");
        }
      };
      useEffect(() => {
        fetchTask(id)
      }, []);
    return (
        <div className="container">
           
            <h1>{taskData?.text}</h1>
            <hr/>
            <p>{taskData?.day}</p>
        </div>
    )
}

export default TaskPage
