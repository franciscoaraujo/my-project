import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import TaskDescription from './pages/TaskDescription'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TaskProvider } from './contexts/TaskContext'

/*Criando rotas para outras paginas react */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-detail",
    element: <TaskDescription />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TaskProvider> {/* Envolva o aplicativo com o TaskProvider */}
      <RouterProvider router={router} />
    </TaskProvider>
  </StrictMode>
)
