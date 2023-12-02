// reducers.js
import { ADD_TASK, SET_DESC, SET_NAME, SET_PRIORITY, SET_TYPE, RESET_TASK, SET_TASK_LIST } from './actions';
/*Loads full catelog. Can pull specifics off of it, but increases load time drastically. Only use when actually using many aws apps*/
// import { DynamoDB } from "@aws-sdk/client-dynamodb";

const initialState = {
  newTask: {
    Task_Id: "1",
    Name: "",
    Desc: "",
    Priority: "1",
    Type: "",
    Start_Datetime: "",
    End_Datetime: "",
    Owner: "",
    Is_Complete: false,
    Is_Active: true
  },
  tasks: []
};

const prioritiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [state.tasks, action.payload],
      };
    case SET_NAME:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          Name: action.payload
        }
      };
      case SET_DESC:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          Desc: action.payload
        }
      };
      case SET_PRIORITY:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          Priority: action.payload
        }
      };
      case SET_TYPE:
      return {
        ...state,
        newTask: {
          ...state.newTask,
          Type: action.payload
        }
      }
      case RESET_TASK:
        return {
          ...state,
          newTask: initialState.newTask
        }
      case SET_TASK_LIST:
        return {
          ...state,
          tasks: action.payload
        }
    default:
      return state;
  }
};

export default prioritiesReducer;