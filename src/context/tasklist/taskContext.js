import { createContext,  useState } from "react";

export const TaskContext = createContext();


export const TaskProvider = (props) => {
   const [tasks, setTask] = useState(
       [
           {title: "Welcome to my React useState/useContext TaskList!",
            note: "This note application is made with useState and useContext hook, alone. You have ability to add, delete and update notes. Once you leave the browser or refresh, the state will be refreshed and whatever you put here, will be deleted. There will also be one with localstorage and of course, the full stack version where I will be using Django as a backend, that will have a database. This project is created by Alexandre Pouzikov",
            id: 1}
       ]
   );

   const [hide, setHide] = useState(false)



   

   return(
       <TaskContext.Provider  value = {{taskList:[tasks, setTask], hideButton: [hide, setHide]}}>
           {props.children}
       </TaskContext.Provider>
   )
}
