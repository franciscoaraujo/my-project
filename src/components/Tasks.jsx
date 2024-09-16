import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext'
import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskDeleted, onTaskCliked}) {
    const { setSelectedTask } = useContext(TaskContext); // Use o contexto para definir a tarefa selecionada
    const navigate = useNavigate(); // Hook para navegação

    const handleTaskClick = (taskId) => {
        // Encontra a tarefa selecionada pelo ID
        const task = tasks.find(task => task.id === taskId);
        if (task) {
            // Define a tarefa selecionada no contexto
            setSelectedTask(task);
            // Navega para a página de detalhes da tarefa
            navigate('/task-detail');
        }
    };

    return (
        <>
            <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button
                            // Chama handleTaskClick ao clicar
                            onClick={() => onTaskCliked(task.id)}
                            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md 
                        ${task.isCompleted && 'line-through'}`}
                        >
                            {task.title}
                        </button>
                        <button
                            className="bg-slate-400 p-2 rounded-md text-white"
                        >
                            <ChevronRightIcon  onClick={() => handleTaskClick(task.id)} />
                        </button>
                        <button
                            className="bg-slate-400 p-2 rounded-md text-white"
                            onClick={() => {
                                onTaskDeleted(task.id);
                            }}
                        >
                            <TrashIcon />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Tasks;
