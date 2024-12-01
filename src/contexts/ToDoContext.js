import { createContext,useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todo: "ToDo msg",
            completed: false
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})


export const useToDo=()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider=ToDoContext.Provider
