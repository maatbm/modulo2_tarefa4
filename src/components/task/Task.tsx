import './taskStyle.css';
import deleteIcon from '../../assets/home/delete.png';
import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';

type TaskProps = {
    id: number;
    title: string;
    description: string;
    date: string;
    completed: boolean;
}

export function Task(task: TaskProps) {
    const { deleteTask, toggleTaskCompleted } = useContext(TaskContext);

    return(
        <div className='taskContainer' key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p className='dataDisplay'>Data final: {task.date}</p>
          <div className='taskButtons'>
            <div className='checkboxContainer'>
              <input
               type='checkbox' 
               className='taskCheckbox' 
               id={`taskCheckbox${task.id}`} 
               checked={task.completed} 
               onChange={() => toggleTaskCompleted(task)}
               /> 
              <label htmlFor={`taskCheckbox${task.id}`}>Concluída</label> 
            </div>
            <div className='deleteContainer'>
              <button id='deleteButton' onClick={() => deleteTask(task)}>
                <img src={deleteIcon} alt='Delete icon' />
              </button>
            </div>
          </div>
        </div>
    )
}