import { Link } from 'react-router-dom';
import './homeStyle.css';
import logo from '../../assets/home/headerLogo.png';
import { Footer } from '../../components/footer/Footer'; 

export function Home(){
return(
    <>
    <header>
        <h1> Lista de tarefas </h1>
        <Link to="/novaTarefa" id='createTaskButton'> Criar uma tarefa </Link>
        <img alt='Logo' src={logo}></img>
    </header>
    <main></main>
    <Footer/>
    </>
)
}