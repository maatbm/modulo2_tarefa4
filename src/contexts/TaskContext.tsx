import { createContext, useState, ReactNode } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  toggleTaskCompleted: (taskEx: Task) => void;
};

type TaskProviderProps = {
  children: ReactNode;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  toggleTaskCompleted: () => {}
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (task: Task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const toggleTaskCompleted = (taskEx: Task) => {
    setTasks(tasks.map((task) => 
      task.id === taskEx.id ? { ...task, completed: !task.completed } : task
    ));
  };
  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
