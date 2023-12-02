import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setTaskList} from '../redux/actions';
import '../App.css';
import LabelValuePair from '../Components/labelValuePair';
import SideBySideLayout from '../Components/sideBySideLayout';
import Section from '../Components/section';
import CardContainer from '../Components/cardContainer';
import Button from '../Components/button';
import './form.css';
import axios from 'axios';
import {API_URL} from '../utils'
export default function MyTasksForm() {
    const dispatch = useDispatch();
    const tasks = useSelector((state)=> state.tasks);
    useEffect(()=>{
        /*On component mount, query tasks and set it to the global state*/
        axios.get(API_URL.concat("tasks")).then(res => {
            dispatch(setTaskList(res.data.data));
            console.log(tasks)

        }).catch(error=>console.log(error))
    }, [])
    const completeOnClick = (e) =>{
        e.preventDefault();
        return
    }
    const deleteOnClick = (e) =>{
        e.preventDefault();

        // dispatch(addTask(newTask));
        console.log(e.target.getAttribute("identifer"))

        let taskToDelete = tasks.filter((task)=> {
            return task.Task_Id === e.target.getAttribute("identifer")
        })[0] /*Assuming always found. Will break if not found*/
        console.log(taskToDelete)
       
        axios.post(API_URL.concat("task"), {
          "Task_Id": taskToDelete.Task_Id,
          "Name": taskToDelete.Name,
          "Desc": taskToDelete.Desc,
          "Priority": taskToDelete.Priority,
          "Type": taskToDelete.Type,
          "Start_Datetime": taskToDelete.Start_Datetime,
          "End_Datetime": taskToDelete.End_Datetime,
          "Owner": taskToDelete.Owner,
          "Is_Complete": taskToDelete.Is_Complete,
          "Is_Active": false
        }).then(res => {
            console.log('success ', res)
            // dispatch(resetTask());
        }).catch(error=> console.log(error))
        
        // axios.get("http://localhost:5000/api/users").then(res => {
        //   console.log(res.data)
        // }).catch(error=>console.log(error));
      };
      
    return (

        <form className = "form" >
            <Section label = "My Tasks">
                {
                    tasks.map(
                        (task)=>(
                            <CardContainer>
                                <SideBySideLayout>
                                    <h3>{`Name: ${task.Name}`}</h3>
                                    <h3>{`Priority: ${task.Priority}`}</h3>
                                    <h3>{`Desc: ${task.Desc}`}</h3>
                                    <h3><Button identifer = {task.Task_Id} onClick = {completeOnClick} type = {"approve"}>Complete</Button></h3>
                                    <h3><Button identifer = {task.Task_Id} onClick = {deleteOnClick} type = {"delete"}>Delete</Button></h3>
                                </SideBySideLayout>
                                {/* <h1>{task.Task_Id}</h1> */}
                            </CardContainer>
                        )
                    )
                }
            </Section>
        </form>

    );
}

// export default MyTasksForm;