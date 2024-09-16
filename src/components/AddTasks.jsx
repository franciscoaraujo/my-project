import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importe o gerador de UUID
import Alert from './Alert'; // Importe o componente Alert


function AddTasks({ onAddTaskSubmit }) {

    const [task, setTask] = useState({ title: '', description: '' });
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar o alerta

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }));
    };
    

    const handleAddTask = () => {
        // Verifica se o título e a descrição não estão vazios
        if (task.title.trim() === '' || task.description.trim() === '') {
            setShowAlert(true); // Mostra o alerta
            return;
        }

        // Cria uma nova tarefa com um UUID
        const newTask = {
            ...task,
            id: uuidv4(), // Usa uuidv4() para criar um UUID único
        };

        // Chama a função onAddTaskSubmit com a nova task
        onAddTaskSubmit(newTask);

        // Limpa o estado da tarefa e o alerta após adicionar
        setTask({ title: '', description: '' });
        setShowAlert(false); // Oculta o alerta
    };

    
    return (
        <>
            <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
                {/* Alerta */}
                {showAlert && (
                    <Alert
                        message="Title and description cannot be empty."
                        onClose={() => setShowAlert(false)} // Função para fechar o alerta
                    />
                )}

                <input
                    type="text"
                    name="title"
                    placeholder="Type title of task"
                    className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                    value={task.title}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Type the description of task"
                    className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                    value={task.description}
                    onChange={handleChange}
                />

                <button
                    className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                    type="button"
                    onClick={handleAddTask}
                >
                    Add
                </button>
            </div>
          
        </>

       
    );
}

export default AddTasks;
