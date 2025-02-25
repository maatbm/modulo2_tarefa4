import { Link } from 'react-router-dom';
import './homeStyle.css';
import logo from '../../assets/home/headerLogo.png';
import { Footer } from '../../components/index';
import { TaskContext } from '../../contexts/TaskContext';
import { useContext, useEffect, useState } from 'react';

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
        <div className='taskContainer'>
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laboriosam saepe! Sint ab fugit, itaque recusandae laudantium ad voluptate laborum corrupti voluptatem, fuga earum inventore minus cumque eaque nostrum sunt.</p>
            <p>21/10/2007</p>
            <input type="checkbox" />
        </div>
        
      </main>
      <Footer />
    </>
  );
}