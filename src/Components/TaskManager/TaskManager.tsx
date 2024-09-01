import { useState } from "react";
import './TaskManager.css';
import { MdDeleteForever } from "react-icons/md";
import Affichage from "../Props/Props";


interface Task {
    id: number;
    task: string;
    isDone: boolean;
}

const TaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<string>('');

    const handleAddTask = () => {
        if(task === '') {
            alert ('Veuillez entrer une tâche');
            return;
        }
        const newTask: Task = {
            id: Math.random(),
            task: task,
            isDone: false
        }
        setTasks([...tasks, newTask]);

        setTask('');
    }

    const handleDeleteTask = (id: number) => {
        const tasksAfterDelete = tasks.filter((task) => task.id !== id);
        setTasks(tasksAfterDelete);
    }

    const handleToggleTaskStatus = (id: number) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    isDone: !task.isDone
                }
            }
            return task;
        })
        setTasks(updatedTasks);
    }

    return (
        
        <div className="tasks-container">
            <Affichage nom="Bernardo"/>
            <div className="tasks-title">
            <h1>Voici votre Task Manager</h1>
        </div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddTask}>Ajouter</button>
            
                {tasks.map((task) => (
                    <div className="tasks">
                        <div key={task.id} className="task-tasks">{task.task}</div>
                        <div className="task-buttons">
                        <button    className={`tasks ${
                            task.isDone ? 'task-completed' : 'task-in-progress'
                        }`}
                         onClick={() => handleToggleTaskStatus(task.id)}>
                                {task.isDone ? 'Terminé' : 'En cours'}
                            </button>
                            <button className="button2" onClick={() => handleDeleteTask(task.id)}><MdDeleteForever /></button>
                        </div>
                    
                    
                    </div>
                   
                ))}

                
        </div>
    )
}



export default TaskManager;