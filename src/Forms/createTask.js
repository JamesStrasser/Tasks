import React, {} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, setName, setDesc, setPriority, resetTask, setType } from '../redux/actions';
import { Input } from '@mui/base';
import '../App.css';
import LabelValuePair from '../Components/labelValuePair';
import Columns from '../Components/columns';
import Section from '../Components/section';
import './form.css';
import axios from 'axios';
import {API_URL} from '../utils'
const CreateTaskForm = () => {
  // useEffect(()=>{
    // axios.get("http://localhost:5000/api/users").then(res => {
    //   console.log(res.data)
    // }).catch(error=>console.log(error))
  // })
//   const tasks = useSelector((state) => state.tasks);
  /*name, desc*/
  const newTask = useSelector((state)=> state.newTask);
  const dispatch = useDispatch();

//   const [currentView, setView] = useState(0);
  // console.log('first ' & currentView)



  const handleAddTask = (e) => {
    e.preventDefault();

    if (
      newTask.Name.trim() === ''
      ) return;
    dispatch(addTask(newTask));
   
    axios.post(API_URL.concat("task"), {
      "Task_Id": newTask.Name.concat(" - ",newTask.Priority),
      "Name": newTask.Name,
      "Desc": newTask.Desc,
      "Priority": newTask.Priority,
      "Type": newTask.Type,
      "Start_Datetime": newTask.Start_Datetime,
      "End_Datetime": newTask.End_Datetime,
      "Owner": newTask.Owner,
      "Is_Complete": newTask.Is_Complete,
      "Is_Active": newTask.Is_Active
    }).then(res => {
        dispatch(resetTask());
    }).catch(error=> console.log(error))
    
    // axios.get("http://localhost:5000/api/users").then(res => {
    //   console.log(res.data)
    // }).catch(error=>console.log(error));
  };

  const handleSetName = (e) => {
    e.preventDefault();
    dispatch(setName(e.target.value));
  }

  const handleSetDesc = (e) => {
    e.preventDefault();
    dispatch(setDesc(e.target.value));
  }

  const handleSetPriority = (e) => {
    e.preventDefault();
    dispatch(setPriority(e.target.value));

  }

  const handleSetType = (e) => {
    e.preventDefault();
    dispatch(setType(e.target.value));

  }


  return (

      <form className = "form" onSubmit={handleAddTask}>
       
         <Section 
          label = "New Task" 
        >
         <Columns numColumns={2}>
              <div>
              <LabelValuePair 
                  label = {  
                    <strong>Name</strong>
                  } 
                  value = {     
                    <Input 
                      type = "text"
                      name = "Task Name"
                      placeholder='Enter the task name'
                      value={newTask.Name}
                      required = {true}
                      onChange = {handleSetName}
                    />
                  }
                />
                <LabelValuePair 
                  // customStyles = {{
                  //   maxWidth: '200px'
                  //  }}
                  label = {  
                    <strong>Description</strong>
                  } 
                  value = {     
                    <Input 
                      name = "Task Description"
                      placeholder='Enter the task description'
                      value={newTask.Desc }
                      onChange = {handleSetDesc}
                    />
                  }
                />
              </div>
              <div>
                <LabelValuePair
                    label = {  
                        <strong>Priority</strong>
                    } 
                    value = {   
                        <select value = {newTask.Priority} name="Priority" id="newPriority" onChange = {handleSetPriority}>
                            <option value="1">1 - Low</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 - High</option>
                        </select>  
                    }
                />
                <LabelValuePair
                    label = {
                        <strong>Type</strong>
                    }
                    value = {
                        <select value = {newTask.Type} name="Type" id="newType" onChange = {handleSetType}>
                            <option value="Single Occurrence">Single Occurrence</option>
                            <option value="Recurring">Recurring</option>
                        </select>  
                    }
                />
              </div>
            </Columns>
          </Section>
          <button 
            type="submit"
            onClick = {handleAddTask}
          >
            Add
          </button>
        </form>
     
  );
}

export default CreateTaskForm;