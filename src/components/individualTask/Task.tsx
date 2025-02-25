import './taskStyle.css';
import deleteLogo from '../../assets/createTask/delete.png';

export function Task(){
    return(
        <div className="task">
            <h1>Task</h1>
            <div className="delete&checkContainer">
            <input type="checkbox" id="checkTask" />
            <label htmlFor="checkTask">Tarefa concluída</label>
            <button><img className="deleteIcon" src={deleteLogo} alt="Deletar tarefa"/></button>
          </div>
        </div>
    )
}