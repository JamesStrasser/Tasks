import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPriority } from './redux/actions';
import { Input } from '@mui/base';
import './App.css';
import LabelValuePair from './Components/labelValuePair';
import Columns from './Components/columns';
import Section from './Components/section';

const taskDetails = () => {
  const [priorityInput] = useState('');
  return (
    <Section 
      label = "New Task" 
      component = {
        <Columns numColumns={2}>
          <div>
            <LabelValuePair 
              label = {  
                <strong>Name</strong>
              } 
              value = {     
                <Input 
                  name = "Task Name"
                  placeholder='Enter the task name'
                  value={priorityInput.name}
                  // onChange = {}
                />
              }
            />
            <LabelValuePair 
              label = {  
                <strong>Description</strong>
              } 
              value = {     
                <Input 
                  name = "Task Description"
                  placeholder='Enter the task description'
                  value={priorityInput.desc}
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
                <select name="Priority" id="newPriority">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">4</option>
              </select>  
                // <Input 
                //   name = "Priority"
                //   placeholder='Enter the task description'
                //   value={priorityInput.desc}
                // />
              }
            />
          </div>
        </Columns>
      }
    />
  );
};

export default taskDetails;