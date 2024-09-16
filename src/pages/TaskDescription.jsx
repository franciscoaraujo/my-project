import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext'; // Importe o contexto
import { useNavigate } from 'react-router-dom';


function TaskDescription(){
    
    const { selectedTask } = useContext(TaskContext); // Use o contexto para obter a tarefa selecionada
    const navigate = useNavigate();

    // Verifique se há uma tarefa selecionada
    if (!selectedTask) {
      return (
          <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
              <p className="text-2xl text-slate-100">No task selected</p>
          </div>
      );
  }
  
  const handleBackClick = () => {
    navigate('/'); // Navega para a página inicial
  };


    return (
      <div className="w-screen h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
          <h1 className="text-3xl text-white font-bold text-center">Task Details</h1>
          <div className="flex items-center justify-between text-gray-300">
              <span className="font-semibold">Task ID:</span>
              <span>{selectedTask.id}</span>
          </div>
          <div className="text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Title</h2>
              <p>{selectedTask.title}</p>
          </div>
          <div className="text-gray-300">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p>{selectedTask.description}</p>
          </div>
          <div className="text-center">

          <button 
              onClick={handleBackClick} // Chama a função handleBackClick ao clicar
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Back to Home
          </button>

          </div>
      </div>
  </div>
        
    );
}
export default TaskDescription;