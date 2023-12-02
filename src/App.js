import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import './Forms/form.css';
import ViewSwitcher from './Components/viewSwitcher';
import CreateTask from './Forms/createTask';
import MyTasks from './Forms/myTasks';
function App() {
  // const dispatch = useDispatch();
  const [currentView, setView] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleSwitchView = (e) =>{
    e.preventDefault();
    if(
      e.target.getAttribute("identifier") === ''
    ) return;
    setView(parseInt(e.target.getAttribute("identifier")));
  }
  const handleResize = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(()=>{
    /*On Mount (because of [] in second parameter), create a listener that captures the resize of the page. Update the state when that happens. 
    Return statement is REQUIRED for cleanup of the listener. */ 
    window.addEventListener('resize', handleResize)
    /*Return statement is ran when the component is re-rendered or removed.
    Consider this as the cleanup of the effect */
    return () => {
      window.removeEventListener('resize', handleResize) /*REQUIRED FOR LISTENER CLEANUP*/
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Priorities</h1>
        <p>Explore and Enjoy!</p>
      </header>
      <div className="App-body">
        <ViewSwitcher 
            labels = {["My Tasks", "Create New Task"]} 
            activeIndex={currentView}
            handleSwitchView = {handleSwitchView}
          > 
        </ViewSwitcher>
        <div>{currentView === 0 ? <MyTasks></MyTasks> : <CreateTask></CreateTask>}</div>
      </div>
    </div>
  );
}

export default App;