import "./createNewTaskStyle.css";
import { Footer } from "../../components/index";

export function CreateNewTask() {
  return (
    <>
      <div className="formContainer">
        <form method="POST" id="taskForm">
          <h2>Nova tarefa</h2>
          <div className="inputContainer">
            <label htmlFor="taskTitle">Título</label>
            <input type="text" id="taskTitle" name="taskTitle" autoComplete="off" required/>
          </div>
          <div className="inputContainer">
            <label htmlFor="taskDescription">Descrição</label>
            <textarea id="taskDescription" name="taskDescription" autoComplete="off" required></textarea>
          </div>
          <div className="dateSubmitContainer">
            <div className="inputContainer">
              <label htmlFor="taskDate" id="dateLabel">Data limite</label>
              <input type="date" id="taskDate" name="taskDate" required />
            </div>
            <div className="buttonContainer">
              <button type="submit" className="buttonSubmit">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
