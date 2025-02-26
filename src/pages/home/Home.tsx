import { Link } from 'react-router-dom';
import './homeStyle.css';
import logo from '../../assets/home/headerLogo.png';
import { Footer } from '../../components/index';
import { TaskContext } from '../../contexts/TaskContext';
import { useContext, useEffect, useState } from 'react';
import deleteicon from '../../assets/createTask/delete.png'

export function Home() {
  const { tasks } = useContext(TaskContext);
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
    console.log(taskList);
  });

  return (
    <>
      <header>
        <h1>Lista de tarefas</h1>
        <Link to="/novaTarefa" id='createTaskButton'>Criar uma tarefa</Link>
        <img alt='Logo' src={logo}></img>
      </header>
      <main>
      {taskList.map((task) => (
        <div className='taskContainer' key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p className='dataDisplay'>Data final: {task.date}</p>
          <div className='taskButtons'>
            <div className='checkboxContainer'>
              <input type='checkbox' id={`taskCheckbox${task.id}`} /> 
              <label htmlFor={`taskCheckbox${task.id}`}>Concluída</label> 
            </div>
            <div className='deleteContainer'>
              <button id='deleteButton'>
                <img src={deleteicon} alt='Delete icon' />
              </button>
            </div>
          </div>
        </div>
      ))}        
      </main>
      <Footer />
    </>
  );
}