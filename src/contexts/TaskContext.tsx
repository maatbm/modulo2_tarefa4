import { createContext, useState, ReactNode } from "react";

type Task = {
    title: string;
    description: string;
    date: string;
    completed: boolean;
};

type TaskContextType = {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
};

type TaskProviderProps = {
    children: ReactNode;
};

export const TaskContext = createContext<TaskContextType>({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {}
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (task: Task) => {
        setTasks(tasks.filter((t) => t.title !== task.title));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
