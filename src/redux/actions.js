// actions.js
export const ADD_TASK = 'ADD_TASK';
export const SET_NAME = 'SET_NAME';
export const SET_DESC = 'SET_DESC';
export const SET_PRIORITY = 'SET_PRIORITY';
export const RESET_TASK = 'RESET_TASK';
export const SET_TASK_LIST = 'SET_TASK_LIST';
export const SET_TYPE = 'SET_TYPE';

export const addTask = (TASK) => ({
  type: ADD_TASK,
  payload: TASK,
});

export const resetTask = () => ({
  type: RESET_TASK,
  payload: null
})

export const setName = (name) =>({
  type: SET_NAME,
  payload: name
})

export const setDesc = (desc) =>({
  type: SET_DESC,
  payload: desc
})

export const setPriority = (priority) =>({
  type: SET_PRIORITY,
  payload: priority
})

export const setType = (type) => ({
  type: SET_TYPE,
  payload: type
})


export const setTaskList = (TaskList) =>({
  type: SET_TASK_LIST,
  payload: TaskList
})

