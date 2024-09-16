import { createContext, useState } from 'react';

// Cria o contexto
export const TaskContext = createContext();

// Provedor do contexto
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    // Função para atualizar o estado da tarefa
    const updateTask = (taskId, updates) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, ...updates } : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, setTasks, selectedTask, setSelectedTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
};
