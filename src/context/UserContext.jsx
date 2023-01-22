import { useState, useEffect } from 'react'
// import { savedTasks as data } from "../savedTasks.js";
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserServices from '../services/userServices';

export const UserContext = createContext();  // nombre del contexto  // UserContext.Provider contiene las variables que se pasan como parametros

export const UserContextProvider = (props) => {    // componente que contiene el contexto.  Variables que pueden ser accedidas desde cualquier otro componenete hijo. Para ser accedido desde otro componente hay que pasarlo como propiedad en el componente <TaskContext.Provider>

    const [user, setUser] = useState();         // se crea la variable de estado global como user = []

    // se va setear la variable de estado (tasks) una sola vez. [] , con los datos importados de la variable data        

    // se comprueba cada 10 segundos que el usuario este logueado
    setInterval(() => {
        if (user == true) {
            async function fetchData() {
                const ok = await UserServices.isLoggedUser();
                ok ? setLoggedUser() : setUnloggedUser();
            }
            fetchData();
        }
    }, 10000);

    async function setLoggedUser() {
        // window.localStorage.setItem('user', true);
        setUser(true);
    }

    async function setUnloggedUser() {
        // window.localStorage.setItem('user', false);
        setUser(false);
    }

    /*
        function createTask(tarea) {		// recibe  el objeto tarea desde taskForm
            const newTask = {
                id: tasks.length,
                nombre: tarea.texto,
                descripcion: tarea.descripcion
            }
            setTasks([...tasks, newTask]);	// se copian las tareas de tasks y se agrega la nueva en un nuevo arreglo
        }
    
        function deleteTask(idTask) {		// idTask es el id del objeto a eliminar
            const newTasks = tasks.filter((tarea) => { return tarea.id !== idTask }); // filter devuelve todas las tareas excepto la que tiene el id == a idTask
            setTasks(newTasks);												// se asigna un nuevo arreglo a la variable de estado tasks
        }
    */
    return (
        <UserContext.Provider value={{ user, setLoggedUser, setUnloggedUser }}>
            {props.children}
        </UserContext.Provider>
    )
}