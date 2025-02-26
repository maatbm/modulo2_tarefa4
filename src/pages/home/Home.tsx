import { Link } from 'react-router-dom';
import './homeStyle.css';
import logo from '../../assets/home/headerLogo.png';
import { Footer } from '../../components/index';
import { TaskContext} from '../../contexts/TaskContext';
import { useContext, useEffect, useState } from 'react';
import { Task } from '../../components/index';

export function Home() {
  const { tasks } = useContext(TaskContext);
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
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
        <Task 
          key={task.id} 
          id={task.id} 
          title={task.title} 
          description={task.description} 
          date={task.date} 
          completed={task.completed}
        />
      ))}        
      
      </main>
      <Footer />
    </>
  );
}