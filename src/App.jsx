import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";



function App() {
 
  const [tasks, setTAsks] = useState([
    { id: 1, title: "Estudar Programção", description: "Estudar react para criar aplicativos legais",isCompleted: false },
    { id: 2, title: "Criar App", description: "Criar um aplicativo para ganhar dinheiro",isCompleted: false },
    { id: 3, title: "Resolver bugs", description: "Resolver os bugs do aplicativo",isCompleted: false },
    { id: 4, title: "Estudar ingles", description: "Estudar ingles para passar na prova do IELTS",isCompleted: false },
    { id: 5, title: "Terminar a Serie", description: "Finalizar a serie que iniciei",isCompleted: false },
  ]);

  function onTaskCliked(taskId) {
    
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted:!task.isCompleted };
      }
      return task;
    });
    setTAsks(newTask);
  }

  function onAddTaskSubmit(task){
    const newTasks = [...tasks, task];
    setTAsks(newTasks);
  }

  function onTaskDeleted(taskId) {
    const newTasks = tasks.filter(task => task.id!== taskId);
    setTAsks(newTasks);
  }

  return (
      <div className="w-screen h-screen bg-gray-900  flex justify-center p-6">
        <div className="w-[500px] space-y-5">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Tasks Manager</h1>
          <AddTasks 
            onAddTaskSubmit={onAddTaskSubmit}/>
          <Tasks 
            tasks={tasks} 
            onTaskCliked={onTaskCliked} 
            onTaskDeleted={onTaskDeleted}/>
        </div>
        {console.log(tasks)}
      </div>
      
  );
}

export default App
