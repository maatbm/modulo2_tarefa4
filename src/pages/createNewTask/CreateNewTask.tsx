import "./createNewTaskStyle.css";
import { Footer } from "../../components/index";

export function CreateNewTask() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const task = {
      title: formData.get("taskTitle") as string,
      description: formData.get("taskDescription") as string,
      date: formData.get("taskDate") as string,
      completed: false as boolean,
    };

    const form = event.target as HTMLFormElement;
    form.reset();
    alert("Tarefa criada com sucesso!");
  }

  return (
    <>
      <div className="formContainer">
        <form method="POST" id="taskForm" onSubmit={handleSubmit}>
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
              <button type="submit" className="buttonSubmit">Criar tarefa</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
